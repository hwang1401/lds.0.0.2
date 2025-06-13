import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 잘못된 토큰 → 올바른 토큰 매핑
const wrongToCorrectTokenMap = {
  // 잘못된 color 토큰들 → 올바른 foundation 토큰들
  '--foundation-color-red-light-40': '--foundation-foundation-color-red-light-40',
  '--foundation-color-red-light-50': '--foundation-foundation-color-red-light-50',
  '--foundation-color-orange-light-50': '--foundation-foundation-color-orange-light-50',
  '--foundation-color-green-light-40': '--foundation-foundation-color-green-light-40',
  '--foundation-color-blue-light-40': '--foundation-foundation-color-blue-light-40',
  '--foundation-color-blue-light-50': '--foundation-foundation-color-blue-light-50',
  '--foundation-color-grey-light-40': '--foundation-foundation-color-grey-light-40',
  '--foundation-color-grey-light-60': '--foundation-foundation-color-grey-light-60',
  '--foundation-color-grey-light-80': '--foundation-foundation-color-grey-light-80',
  '--foundation-color-grey-light-90': '--foundation-foundation-color-grey-light-90',
  '--foundation-color-grey-light-100': '--foundation-foundation-color-grey-light-100',
  
  // 잘못된 font 토큰들 → 올바른 foundation 토큰들  
  '--foundation-font-fontFamily-base': '--foundation-foundation-font-fontfamily-base',
  
  // 잘못된 typography 토큰들 → 올바른 foundation 토큰들
  '--foundation-typography-hero-1-regular-fontSize': '--foundation-foundation-font-fontsize-720',
  '--foundation-typography-hero-1-regular-lineHeight': '--foundation-foundation-font-lineheight-12',
  '--foundation-typography-hero-1-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-hero-1-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-hero-1-medium-fontSize': '--foundation-foundation-font-fontsize-720',
  '--foundation-typography-hero-1-medium-lineHeight': '--foundation-foundation-font-lineheight-12',
  '--foundation-typography-hero-1-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-hero-1-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-hero-1-bold-fontSize': '--foundation-foundation-font-fontsize-720',
  '--foundation-typography-hero-1-bold-lineHeight': '--foundation-foundation-font-lineheight-12',
  '--foundation-typography-hero-1-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-hero-1-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-hero-2-regular-fontSize': '--foundation-foundation-font-fontsize-600',
  '--foundation-typography-hero-2-regular-lineHeight': '--foundation-foundation-font-lineheight-12',
  '--foundation-typography-hero-2-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-hero-2-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-hero-2-medium-fontSize': '--foundation-foundation-font-fontsize-600',
  '--foundation-typography-hero-2-medium-lineHeight': '--foundation-foundation-font-lineheight-12',
  '--foundation-typography-hero-2-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-hero-2-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-hero-2-bold-fontSize': '--foundation-foundation-font-fontsize-600',
  '--foundation-typography-hero-2-bold-lineHeight': '--foundation-foundation-font-lineheight-12',
  '--foundation-typography-hero-2-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-hero-2-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-title-1-regular-fontSize': '--foundation-foundation-font-fontsize-480',
  '--foundation-typography-title-1-regular-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-title-1-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-title-1-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-title-1-medium-fontSize': '--foundation-foundation-font-fontsize-480',
  '--foundation-typography-title-1-medium-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-title-1-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-title-1-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-title-1-bold-fontSize': '--foundation-foundation-font-fontsize-480',
  '--foundation-typography-title-1-bold-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-title-1-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-title-1-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-title-2-regular-fontSize': '--foundation-foundation-font-fontsize-360',
  '--foundation-typography-title-2-regular-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-title-2-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-title-2-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-title-2-medium-fontSize': '--foundation-foundation-font-fontsize-360',
  '--foundation-typography-title-2-medium-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-title-2-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-title-2-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-title-2-bold-fontSize': '--foundation-foundation-font-fontsize-360',
  '--foundation-typography-title-2-bold-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-title-2-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-title-2-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-heading-1-regular-fontSize': '--foundation-foundation-font-fontsize-300',
  '--foundation-typography-heading-1-regular-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-heading-1-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-1-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-heading-1-medium-fontSize': '--foundation-foundation-font-fontsize-300',
  '--foundation-typography-heading-1-medium-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-heading-1-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-1-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-heading-1-bold-fontSize': '--foundation-foundation-font-fontsize-300',
  '--foundation-typography-heading-1-bold-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-heading-1-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-1-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-heading-2-regular-fontSize': '--foundation-foundation-font-fontsize-240',
  '--foundation-typography-heading-2-regular-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-heading-2-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-2-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-heading-2-medium-fontSize': '--foundation-foundation-font-fontsize-240',
  '--foundation-typography-heading-2-medium-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-heading-2-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-2-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-heading-2-bold-fontSize': '--foundation-foundation-font-fontsize-240',
  '--foundation-typography-heading-2-bold-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-heading-2-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-2-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-heading-3-regular-fontSize': '--foundation-foundation-font-fontsize-200',
  '--foundation-typography-heading-3-regular-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-heading-3-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-3-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-heading-3-medium-fontSize': '--foundation-foundation-font-fontsize-200',
  '--foundation-typography-heading-3-medium-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-heading-3-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-3-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-heading-3-bold-fontSize': '--foundation-foundation-font-fontsize-200',
  '--foundation-typography-heading-3-bold-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-heading-3-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-heading-3-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-body-1-regular-fontSize': '--foundation-foundation-font-fontsize-160',
  '--foundation-typography-body-1-regular-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-body-1-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-body-1-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-body-1-medium-fontSize': '--foundation-foundation-font-fontsize-160',
  '--foundation-typography-body-1-medium-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-body-1-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-body-1-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-body-1-bold-fontSize': '--foundation-foundation-font-fontsize-160',
  '--foundation-typography-body-1-bold-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-body-1-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-body-1-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-body-2-regular-fontSize': '--foundation-foundation-font-fontsize-140',
  '--foundation-typography-body-2-regular-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-body-2-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-body-2-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-body-2-medium-fontSize': '--foundation-foundation-font-fontsize-140',
  '--foundation-typography-body-2-medium-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-body-2-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-body-2-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-body-2-bold-fontSize': '--foundation-foundation-font-fontsize-140',
  '--foundation-typography-body-2-bold-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-body-2-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-body-2-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-reading-regular-fontSize': '--foundation-foundation-font-fontsize-160',
  '--foundation-typography-reading-regular-lineHeight': '--foundation-foundation-font-lineheight-18',
  '--foundation-typography-reading-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-reading-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-reading-medium-fontSize': '--foundation-foundation-font-fontsize-160',
  '--foundation-typography-reading-medium-lineHeight': '--foundation-foundation-font-lineheight-18',
  '--foundation-typography-reading-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-reading-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-reading-bold-fontSize': '--foundation-foundation-font-fontsize-160',
  '--foundation-typography-reading-bold-lineHeight': '--foundation-foundation-font-lineheight-18',
  '--foundation-typography-reading-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-reading-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-label-1-regular-fontSize': '--foundation-foundation-font-fontsize-140',
  '--foundation-typography-label-1-regular-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-label-1-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-label-1-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-label-1-medium-fontSize': '--foundation-foundation-font-fontsize-140',
  '--foundation-typography-label-1-medium-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-label-1-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-label-1-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-label-1-bold-fontSize': '--foundation-foundation-font-fontsize-140',
  '--foundation-typography-label-1-bold-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-label-1-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-label-1-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-label-2-regular-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-label-2-regular-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-label-2-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-label-2-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-label-2-medium-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-label-2-medium-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-label-2-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-label-2-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-label-2-bold-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-label-2-bold-lineHeight': '--foundation-foundation-font-lineheight-16',
  '--foundation-typography-label-2-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-label-2-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-caption-1-regular-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-1-regular-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-1-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-1-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-caption-1-medium-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-1-medium-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-1-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-1-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-caption-1-bold-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-1-bold-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-1-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-1-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-caption-2-regular-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-2-regular-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-2-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-2-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-caption-2-medium-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-2-medium-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-2-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-2-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-caption-2-bold-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-2-bold-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-2-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-2-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
  
  '--foundation-typography-caption-3-regular-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-3-regular-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-3-regular-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-3-regular-fontWeight': '--foundation-foundation-font-fontweight-400',
  '--foundation-typography-caption-3-medium-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-3-medium-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-3-medium-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-3-medium-fontWeight': '--foundation-foundation-font-fontweight-500',
  '--foundation-typography-caption-3-bold-fontSize': '--foundation-foundation-font-fontsize-120',
  '--foundation-typography-caption-3-bold-lineHeight': '--foundation-foundation-font-lineheight-14',
  '--foundation-typography-caption-3-bold-letterSpacing': '--foundation-foundation-font-letterspacing-30',
  '--foundation-typography-caption-3-bold-fontWeight': '--foundation-foundation-font-fontweight-700',
};

function fixTokensInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let changesCount = 0;

    // 각 잘못된 토큰을 올바른 토큰으로 교체
    for (const [wrongToken, correctToken] of Object.entries(wrongToCorrectTokenMap)) {
      const regex = new RegExp(`var\\(${wrongToken.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}\\)`, 'g');
      const newValue = `var(${correctToken})`;
      
      if (updatedContent.includes(`var(${wrongToken})`)) {
        updatedContent = updatedContent.replace(regex, newValue);
        changesCount++;
        console.log(`  ✅ ${wrongToken} → ${correctToken}`);
      }
    }

    if (changesCount > 0) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`📝 ${path.basename(filePath)}: ${changesCount}개 토큰 수정됨`);
      return changesCount;
    } else {
      console.log(`⚪ ${path.basename(filePath)}: 변경사항 없음`);
      return 0;
    }
  } catch (error) {
    console.error(`❌ 파일 처리 실패: ${filePath}`, error.message);
    return 0;
  }
}

function scanPrimitivesDirectory(dirPath) {
  let totalChanges = 0;
  let totalFiles = 0;
  let updatedFiles = 0;

  function scanDirectory(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.module.css')) {
        console.log(`\n📁 처리 중: ${path.relative(dirPath, itemPath)}`);
        totalFiles++;
        const changes = fixTokensInFile(itemPath);
        totalChanges += changes;
        if (changes > 0) updatedFiles++;
      }
    }
  }

  scanDirectory(dirPath);
  
  console.log(`\n🎉 토큰 수정 완료!`);
  console.log(`📊 총 파일: ${totalFiles}개`);
  console.log(`✅ 업데이트된 파일: ${updatedFiles}개`);
  console.log(`💫 총 변경사항: ${totalChanges}개 토큰`);
  
  return { totalFiles, updatedFiles, totalChanges };
}

// 실행
const primitivesPath = path.join(__dirname, '../src/primitives');
console.log('🔧 잘못된 Foundation 토큰 수정 시작:', primitivesPath);
console.log(`📋 총 ${Object.keys(wrongToCorrectTokenMap).length}개의 토큰 매핑 준비됨\n`);

scanPrimitivesDirectory(primitivesPath); 