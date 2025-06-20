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
  green: '\x1b[32m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  yellow: '\x1b[33m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
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

async function cleanBuildDirectories() {
  log('\n🧹 빌드 디렉토리 정리 중...', 'blue');
  
  const dirsToClean = [
    'packages/shared/dist',
    'packages/system-01/dist',
    'packages/system-02/dist',
    'packages/storybook/storybook-static'
  ];
  
  for (const dir of dirsToClean) {
    const fullPath = path.join(rootDir, dir);
    try {
      await fs.rm(fullPath, { recursive: true, force: true });
      log(`✅ ${dir} 정리 완료`, 'green');
    } catch (error) {
      log(`⚠️ ${dir} 정리 건너뜀 (존재하지 않음)`, 'yellow');
    }
  }
}

async function buildAll() {
  log('\n🚀 전체 빌드 시작...', 'blue');
  await runCommand('node', ['scripts/build-powershell.js']);
}

async function main() {
  try {
    log('\n🔄 클린 빌드 시작', 'blue');
    
    await cleanBuildDirectories();
    await buildAll();
    
    log('\n🎉 클린 빌드 완료!', 'green');
    
  } catch (error) {
    log(`❌ 클린 빌드 실패: ${error.message}`, 'red');
    process.exit(1);
  }
}

main(); 