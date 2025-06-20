#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 명령행 인수에서 시스템명 추출
const systemName = process.argv[2];

if (!systemName) {
  console.error('❌ 시스템명을 지정해주세요. 예: node build-system-common.js system-01');
  process.exit(1);
}

const packageDir = path.resolve(__dirname, '..', 'packages', systemName);

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, args, cwd = packageDir) {
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

async function buildSequential() {
  try {
    log(`\n🔧 ${systemName} 빌드 시작...`, 'blue');
    
    // 1. 토큰 빌드
    log('📋 토큰 빌드 중...', 'blue');
    await runCommand('node', ['../../scripts/build-tokens-common.js', systemName]);
    log('✅ 토큰 빌드 완료', 'green');
    
    // 2. 컴포넌트 빌드
    log('📋 컴포넌트 빌드 중...', 'blue');
    await runCommand('pnpm', ['run', 'build:components']);
    log('✅ 컴포넌트 빌드 완료', 'green');
    
    log(`🎉 ${systemName} 빌드 완료!`, 'green');
    
  } catch (error) {
    log(`❌ 빌드 실패: ${error.message}`, 'red');
    process.exit(1);
  }
}

buildSequential(); 