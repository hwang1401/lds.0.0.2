#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logStep(step) {
  log(`\n📋 ${step}`, 'blue');
}

function logInfo(message) {
  log(`ℹ️ ${message}`, 'cyan');
}

function runCommand(command, args, cwd = rootDir) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: true
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    proc.on('error', (error) => {
      reject(error);
    });
  });
}

async function checkIfBuildNeeded(packagePath, distPath) {
  try {
    const distStat = await fs.stat(path.join(packagePath, distPath));
    const srcStat = await fs.stat(path.join(packagePath, 'src'));
    
    // dist가 src보다 최신이면 빌드 불필요
    if (distStat.mtime > srcStat.mtime) {
      return false;
    }
  } catch {
    // dist가 없으면 빌드 필요
  }
  return true;
}

async function buildShared() {
  logStep('Shared 패키지 빌드 확인 중...');
  
  const sharedDir = path.join(rootDir, 'packages/shared');
  const needsBuild = await checkIfBuildNeeded(sharedDir, 'dist');
  
  if (!needsBuild) {
    logInfo('Shared 패키지는 이미 최신 상태입니다.');
    return;
  }
  
  logStep('Shared 패키지 빌드 중...');
  
  try {
    // 토큰 빌드
    logInfo('Foundation 토큰 생성 중...');
    await runCommand('pnpm', ['run', 'build:tokens'], sharedDir);
    logSuccess('토큰 빌드 완료');
    
    // 컴포넌트 빌드
    logInfo('Shared 컴포넌트 빌드 중...');
    await runCommand('pnpm', ['run', 'build:components'], sharedDir);
    logSuccess('컴포넌트 빌드 완료');
    
    logSuccess('Shared 패키지 빌드 완료');
  } catch (error) {
    logError('Shared 패키지 빌드 실패');
    throw error;
  }
}

async function buildSystem(systemName) {
  const systemDir = path.join(rootDir, `packages/${systemName}`);
  
  try {
    await fs.access(systemDir);
  } catch {
    log(`${systemName} 패키지를 찾을 수 없습니다 (건너뜀)`, 'yellow');
    return;
  }
  
  const needsBuild = await checkIfBuildNeeded(systemDir, 'dist');
  
  if (!needsBuild) {
    logInfo(`${systemName}은 이미 최신 상태입니다.`);
    return;
  }
  
  logInfo(`${systemName} 빌드 중...`);
  
  try {
    // 토큰 빌드 (있는 경우)
    try {
      await runCommand('pnpm', ['run', 'build:tokens'], systemDir);
      logInfo(`${systemName} 토큰 빌드 완료`);
    } catch {
      logInfo(`${systemName} 토큰 빌드 없음 (건너뜀)`);
    }
    
    // 컴포넌트 빌드
    await runCommand('pnpm', ['run', 'build:components'], systemDir);
    logSuccess(`${systemName} 빌드 완료`);
    
  } catch (error) {
    logError(`${systemName} 빌드 실패`);
    throw error;
  }
}

async function buildSystems() {
  logStep('시스템 패키지들 빌드 중...');
  
  const systems = ['system-01', 'system-02'];
  
  // 병렬 빌드로 성능 향상
  const buildPromises = systems.map(system => buildSystem(system));
  
  try {
    await Promise.all(buildPromises);
    logSuccess('모든 시스템 패키지 빌드 완료');
  } catch (error) {
    logError('일부 시스템 패키지 빌드 실패');
    throw error;
  }
}

async function validateBuild() {
  logStep('빌드 결과 검증 중...');
  
  const requiredPaths = [
    'packages/shared/dist',
    'packages/system-01/dist',
    'packages/system-02/dist'
  ];
  
  for (const buildPath of requiredPaths) {
    const fullPath = path.join(rootDir, buildPath);
    try {
      await fs.access(fullPath);
      logSuccess(`${buildPath} 확인됨`);
    } catch {
      throw new Error(`빌드 검증 실패: ${buildPath}가 존재하지 않습니다`);
    }
  }
  
  logSuccess('빌드 검증 완료');
}

async function main() {
  const startTime = Date.now();
  
  try {
    log('\n🚀 PowerShell 호환 빌드 시작', 'cyan');
    log('━'.repeat(50), 'blue');
    
    await buildShared();
    await buildSystems();
    await validateBuild();
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    log('\n━'.repeat(50), 'blue');
    log(`🎉 모든 빌드 완료! (${duration}초)`, 'green');
    
    logInfo('사용 가능한 명령어:');
    logInfo('  pnpm run storybook:powershell  # Storybook 실행');
    logInfo('  pnpm run build:clean          # 클린 빌드');
    
  } catch (error) {
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    log('\n━'.repeat(50), 'red');
    logError(`빌드 실패 (${duration}초): ${error.message}`);
    
    logInfo('\n문제 해결 방법:');
    logInfo('1. pnpm run clean:build        # 빌드 디렉토리 정리');
    logInfo('2. pnpm install               # 의존성 재설치');
    logInfo('3. pnpm run build:powershell  # 다시 빌드');
    
    process.exit(1);
  }
}

main(); 