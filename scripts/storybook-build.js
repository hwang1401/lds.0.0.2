#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 명령행 인수 처리
const isProduction = process.argv.includes('--production');

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, args, cwd = rootDir) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        ...(isProduction && { NODE_ENV: 'production' })
      }
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
  log('\n📋 빌드 상태 확인 중...', 'blue');
  
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
    return true;
  }
  
  log('✅ 모든 패키지 빌드 확인 완료', 'green');
  return false;
}

async function buildPackages() {
  log('\n🔧 패키지 빌드 중...', 'blue');
  await runCommand('node', ['scripts/build-powershell.js']);
}

async function buildStorybook() {
  const mode = isProduction ? '프로덕션' : '개발';
  log(`\n📚 Storybook ${mode} 빌드 중...`, 'cyan');
  
  const storybookDir = path.join(rootDir, 'packages/storybook');
  
  try {
    await runCommand('pnpm', ['run', 'build-storybook'], storybookDir);
    log(`✅ Storybook ${mode} 빌드 완료`, 'green');
    
  } catch (error) {
    log(`❌ Storybook 빌드 실패`, 'red');
    throw error;
  }
}

async function main() {
  try {
    const mode = isProduction ? '프로덕션' : '개발';
    log(`\n🏗️ Storybook ${mode} 빌드 시작`, 'cyan');
    
    const needsBuild = await checkBuildStatus();
    if (needsBuild) {
      await buildPackages();
    }
    
    await buildStorybook();
    
    log('\n🎉 Storybook 빌드 완료!', 'green');
    log(`📁 빌드 결과: packages/storybook/storybook-static`, 'blue');
    
  } catch (error) {
    log(`❌ Storybook 빌드 실패: ${error.message}`, 'red');
    process.exit(1);
  }
}

main(); 