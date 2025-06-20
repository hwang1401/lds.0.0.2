#!/usr/bin/env node

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
  yellow: '\x1b[33m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function cleanDirectory(dirPath, description) {
  const fullPath = path.join(rootDir, dirPath);
  
  try {
    await fs.rm(fullPath, { recursive: true, force: true });
    log(`✅ ${description} 정리 완료`, 'green');
  } catch (error) {
    log(`⚠️ ${description} 정리 건너뜀 (존재하지 않음)`, 'yellow');
  }
}

async function main() {
  try {
    log('\n🧹 빌드 디렉토리 정리 시작', 'blue');
    
    const cleanTasks = [
      ['packages/shared/dist', 'Shared 빌드'],
      ['packages/system-01/dist', 'System-01 빌드'],
      ['packages/system-02/dist', 'System-02 빌드'],
      ['packages/storybook/storybook-static', 'Storybook 빌드'],
      ['.turbo', 'Turbo 캐시']
    ];
    
    for (const [dirPath, description] of cleanTasks) {
      await cleanDirectory(dirPath, description);
    }
    
    log('\n🎉 빌드 디렉토리 정리 완료!', 'green');
    
  } catch (error) {
    log(`❌ 정리 실패: ${error.message}`, 'red');
    process.exit(1);
  }
}

main(); 