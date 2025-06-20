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

async function checkBuildStatus() {
  logStep('빌드 상태 확인 중...');
  
  const requiredDirs = [
    'packages/shared/dist',
    'packages/system-01/dist', 
    'packages/system-02/dist'
  ];
  
  const missingBuilds = [];
  
  for (const dir of requiredDirs) {
    const fullPath = path.join(rootDir, dir);
    try {
      await fs.access(fullPath);
    } catch {
      missingBuilds.push(dir);
    }
  }
  
  if (missingBuilds.length > 0) {
    log('일부 패키지가 빌드되지 않았습니다. 자동 빌드를 시작합니다...', 'yellow');
    return true; // 빌드 필요
  }
  
  logSuccess('모든 패키지 빌드 확인 완료');
  return false; // 빌드 불필요
}

async function buildPackages() {
  logStep('패키지 빌드 중...');
  
  try {
    await runCommand('node', ['scripts/build-powershell.js'], rootDir);
    logSuccess('패키지 빌드 완료');
  } catch (error) {
    logError('패키지 빌드 실패');
    throw error;
  }
}

async function startStorybook() {
  logStep('Storybook 시작 중...');
  
  const storybookDir = path.join(rootDir, 'packages/storybook');
  
  try {
    log('🚀 Storybook 개발 서버를 시작합니다...', 'cyan');
    log('   URL: http://localhost:6006', 'blue');
    log('   종료: Ctrl+C', 'yellow');
    
    await runCommand('pnpm', ['run', 'storybook:dev'], storybookDir);
    
  } catch (error) {
    logError('Storybook 시작 실패');
    throw error;
  }
}

async function main() {
  try {
    log('\n📚 PowerShell 호환 Storybook 시작', 'cyan');
    
    const needsBuild = await checkBuildStatus();
    if (needsBuild) {
      await buildPackages();
    }
    
    await startStorybook();
    
  } catch (error) {
    logError('Storybook 실행 실패: ' + error.message);
    process.exit(1);
  }
}

// 도움말 표시
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
📚 PowerShell 호환 Storybook 실행 스크립트

사용법:
  node scripts/storybook-powershell.js

기능:
  • 자동 빌드 상태 확인
  • 필요시 패키지 자동 빌드
  • Storybook 개발 서버 실행

예시:
  node scripts/storybook-powershell.js
`);
  process.exit(0);
}

main(); 