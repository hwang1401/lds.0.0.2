import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 필요한 디렉토리 생성
const directories = [
  'dist',
  'dist/css',
  'dist/js',
  'dist/scss'
];

directories.forEach(dir => {
  const dirPath = path.resolve(__dirname, '..', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Foundation 토큰 파일 경로
const foundationPath = path.resolve(__dirname, '../foundation.json');

console.log(`파운데이션 토큰 파일 존재: ${fs.existsSync(foundationPath)}`);

// Foundation 토큰 데이터 로드
const foundationTokens = JSON.parse(fs.readFileSync(foundationPath, 'utf8'));

console.log(`파운데이션 토큰 키: ${Object.keys(foundationTokens).join(', ')}`);

// CSS 변수 생성 (Foundation만)
function generateFoundationCssVariables(tokens) {
  let css = ':root {\n';
  
  function processObject(obj, currentPrefix) {
    for (const [key, value] of Object.entries(obj)) {
      const varName = currentPrefix ? `${currentPrefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processObject(value, varName);
      } else {
        // CSS 변수명 정규화: foundation 접두사 사용
        const cssVarName = `foundation-${varName}`.toLowerCase().replace(/[^a-z0-9]/g, '-');
        css += `  --${cssVarName}: ${value};\n`;
      }
    }
  }
  
  processObject(tokens, '');
  css += '}\n\n';
  
  // Foundation 유틸리티 클래스 생성
  css += '/* Foundation 유틸리티 클래스 */\n';
  
  function generateUtilityClasses(obj, currentPrefix) {
    for (const [key, value] of Object.entries(obj)) {
      const className = currentPrefix ? `${currentPrefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        generateUtilityClasses(value, className);
      } else {
        const cssClassName = `f-${className}`.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const cssVarName = `foundation-${className}`.toLowerCase().replace(/[^a-z0-9]/g, '-');
        
        // 간단한 유틸리티 클래스들
        if (className.includes('color')) {
          css += `.${cssClassName} { color: var(--${cssVarName}); }\n`;
          css += `.bg-${cssClassName} { background-color: var(--${cssVarName}); }\n`;
        } else if (className.includes('space')) {
          css += `.p-${cssClassName} { padding: var(--${cssVarName}); }\n`;
          css += `.m-${cssClassName} { margin: var(--${cssVarName}); }\n`;
        } else if (className.includes('size')) {
          css += `.w-${cssClassName} { width: var(--${cssVarName}); }\n`;
          css += `.h-${cssClassName} { height: var(--${cssVarName}); }\n`;
        }
      }
    }
  }
  
  generateUtilityClasses(tokens, '');
  
  return css;
}

// SCSS 변수 생성 (Foundation만)
function generateFoundationScssVariables(tokens) {
  let scss = '// Foundation 토큰 변수\n';
  
  function processObject(obj, currentPrefix) {
    for (const [key, value] of Object.entries(obj)) {
      const varName = currentPrefix ? `${currentPrefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processObject(value, varName);
      } else {
        const scssVarName = `$foundation-${varName}`.toLowerCase().replace(/[^a-z0-9$]/g, '-');
        scss += `${scssVarName}: ${value};\n`;
      }
    }
  }
  
  processObject(tokens, '');
  return scss;
}

// JavaScript 토큰 생성 (Foundation만)
function generateFoundationJsTokens(tokens) {
  return `// Foundation 토큰 객체
export const foundationTokens = ${JSON.stringify(tokens, null, 2)};

export default foundationTokens;
`;
}

// Foundation 토큰 빌드 함수
function buildFoundationTokens() {
  try {
    // CSS 파일 생성
    const cssContent = generateFoundationCssVariables(foundationTokens);
    fs.writeFileSync(path.resolve(__dirname, '../dist/css/foundation-tokens.css'), cssContent);
    
    // SCSS 파일 생성
    const scssContent = generateFoundationScssVariables(foundationTokens);
    fs.writeFileSync(path.resolve(__dirname, '../dist/scss/_foundation-tokens.scss'), scssContent);
    
    // JavaScript 파일 생성
    const jsContent = generateFoundationJsTokens(foundationTokens);
    fs.writeFileSync(path.resolve(__dirname, '../dist/js/foundation-tokens.js'), jsContent);
    fs.writeFileSync(path.resolve(__dirname, '../dist/js/foundation-tokens.esm.js'), jsContent);
    
    console.log('✅ Foundation 토큰 빌드 완료!');
    console.log(`📁 CSS: dist/css/foundation-tokens.css`);
    console.log(`📁 SCSS: dist/scss/_foundation-tokens.scss`);
    console.log(`📁 JS: dist/js/foundation-tokens.js`);
    
    // 토큰 통계 출력
    let tokenCount = 0;
    function countTokens(obj) {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          countTokens(value);
        } else {
          tokenCount++;
        }
      }
    }
    countTokens(foundationTokens);
    console.log(`📊 총 ${tokenCount}개 Foundation 토큰 생성됨`);
    
  } catch (error) {
    console.error('❌ Foundation 토큰 빌드 실패:', error);
    process.exit(1);
  }
}

// 빌드 실행
buildFoundationTokens(); 