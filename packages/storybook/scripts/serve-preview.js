#!/usr/bin/env node

import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageDir = path.resolve(__dirname, '..');

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
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

async function buildStorybook() {
  log('\n📚 Storybook 빌드 중...', 'blue');
  await runCommand('pnpm', ['run', 'build']);
  log('✅ Storybook 빌드 완료', 'green');
}

async function serveStorybook() {
  log('\n🌐 Storybook 서버 시작 중...', 'cyan');
  log('   URL: http://localhost:6007', 'blue');
  log('   종료: Ctrl+C', 'blue');
  
  await runCommand('pnpx', ['serve', 'storybook-static', '-p', '6007']);
}

async function main() {
  try {
    log('\n📖 Storybook 프리뷰 시작', 'cyan');
    
    // Storybook 빌드 상태 확인
    const staticDir = path.join(packageDir, 'storybook-static');
    try {
      await fs.access(staticDir);
      log('✅ 기존 빌드 발견', 'green');
    } catch {
      await buildStorybook();
    }
    
    await serveStorybook();
    
  } catch (error) {
    log(`❌ 프리뷰 실행 실패: ${error.message}`, 'red');
    process.exit(1);
  }
}

main();