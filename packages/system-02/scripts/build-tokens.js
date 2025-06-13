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
  'dist/scss',
  'dist/icons'
];

directories.forEach(dir => {
  const dirPath = path.resolve(__dirname, '..', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// ✅ 올바른 방식: foundation.json + semantic.json 직접 로드
const foundationPath = path.resolve(__dirname, '../../shared/foundation.json');
const semanticPath = path.resolve(__dirname, '../semantic.json');

console.log(`파운데이션 토큰 파일 존재: ${fs.existsSync(foundationPath)}`);
console.log(`시맨틱 토큰 파일 존재: ${fs.existsSync(semanticPath)}`);

// 토큰 데이터 로드
const foundationTokens = JSON.parse(fs.readFileSync(foundationPath, 'utf8'));
const semanticTokens = JSON.parse(fs.readFileSync(semanticPath, 'utf8'));

console.log(`파운데이션 토큰 키: ${Object.keys(foundationTokens).join(', ')}`);
console.log(`시맨틱 토큰 키: ${Object.keys(semanticTokens).join(', ')}`);

// SVG 최적화 함수
function optimizeSvg(svg) {
  return svg
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    .replace(/\t/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')  // 태그 사이 공백 제거
    .replace(/\s*([=:])\s*/g, '$1') // 속성의 공백 제거
    .replace(/ fill="#000000"/g, '') // 기본 채우기 제거
    .replace(/ fill="black"/g, '')
    .replace(/ stroke="#000000"/g, '')
    .replace(/ stroke="black"/g, '')
    .replace(/fill-rule/g, 'f')
    .replace(/clip-rule/g, 'c')
    .replace(/stroke-width/g, 's')
    .replace(/stroke-linecap/g, 'sc')
    .replace(/stroke-linejoin/g, 'sj')
    .trim();
}

// 아이콘 파일 복사 함수 (✅ shared 패키지에서 복사)
function copyIcons() {
  const iconsSourceDir = path.resolve(__dirname, '../../shared/icons');
  const iconsDestDir = path.resolve(__dirname, '../dist/icons');
  
  if (!fs.existsSync(iconsSourceDir)) {
    console.warn('아이콘 소스 디렉토리가 존재하지 않습니다:', iconsSourceDir);
    return;
  }
  
  // 아이콘 폴더 복사 함수
  function copyDir(src, dest) {
    // 대상 디렉토리가 없으면 생성
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    // 소스 디렉토리의 모든 항목 읽기
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        // 디렉토리인 경우 재귀적으로 복사
        copyDir(srcPath, destPath);
      } else {
        // 파일인 경우 복사
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  try {
    copyDir(iconsSourceDir, iconsDestDir);
    process.stdout.write('아이콘 파일 복사 완료!\n');
  } catch (error) {
    process.stderr.write('아이콘 파일 복사 중 오류 발생: ' + error.message + '\n');
  }
}

// 토큰 변환 및 병합
function resolveReferences(obj, allTokens) {
  const processedObj = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // 중첩 객체인 경우 재귀적으로 처리
      processedObj[key] = resolveReferences(value, allTokens);
    } else if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      // 참조 토큰인 경우 ({color.primary} 형태)
      const referencePath = value.slice(1, -1); // 중괄호 제거
      const referencedValue = getNestedValue(allTokens, referencePath);
      
      if (referencedValue !== undefined) {
        processedObj[key] = referencedValue;
      } else {
        console.warn(`참조를 찾을 수 없습니다: ${value}`);
        processedObj[key] = value; // 원본값 유지
      }
    } else {
      // 일반 값인 경우 그대로 복사
      processedObj[key] = value;
    }
  }
  
  return processedObj;
}

// 중첩된 객체에서 경로로 값 가져오기
function getNestedValue(obj, path) {
  const parts = path.split('.');
  let current = obj;
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      console.warn(`❌ 참조 해결 실패: ${path} - 찾을 수 없는 경로: ${part}`);
      return undefined;
    }
  }
  
  return current;
}

// 짧은 이름 생성 (CSS 변수용)
function createShortNames(tokens) {
  const shortNames = {};
  
  function processObject(obj, prefix) {
    for (const [key, value] of Object.entries(obj)) {
      const newPrefix = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processObject(value, newPrefix);
      } else {
        // 짧은 이름 생성 (예: color-primary-500 -> c-p-500)
        const shortName = newPrefix
          .split('-')
          .map(part => part.charAt(0))
          .join('-');
        
        shortNames[newPrefix] = shortName;
      }
    }
  }
  
  processObject(tokens);
  return shortNames;
}

// CSS 변수 생성
function generateCssVariables(tokens, prefix = '') {
  let cssVars = [];
  let utilityClasses = [];
  
  function processObject(obj, currentPrefix) {
    for (const [key, value] of Object.entries(obj)) {
      const varName = currentPrefix ? `${currentPrefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processObject(value, varName);
      } else {
        const cssVarName = `--${prefix ? prefix + '-' : ''}${varName}`;
        cssVars.push(`  ${cssVarName}: ${value};`);
        
        // 유틸리티 클래스 생성
        generateUtilityClasses(obj, currentPrefix);
      }
    }
  }
  
  function generateUtilityClasses(obj, currentPrefix) {
    for (const [key, value] of Object.entries(obj)) {
      const varName = currentPrefix ? `${currentPrefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // 중첩 객체는 건너뜀
      } else {
        const cssVarName = `--${prefix ? prefix + '-' : ''}${varName}`;
        
        // 색상 관련 유틸리티 클래스
        if (varName.includes('color')) {
          const className = (prefix ? prefix + '-' : '') + varName;
          utilityClasses.push(`.f-${className} { color: var(${cssVarName}); }`);
          utilityClasses.push(`.bg-${className} { background-color: var(${cssVarName}); }`);
        }
        
        // 크기 관련 유틸리티 클래스
        if (varName.includes('size')) {
          const className = (prefix ? prefix + '-' : '') + varName;
          utilityClasses.push(`.w-${className} { width: var(${cssVarName}); }`);
          utilityClasses.push(`.h-${className} { height: var(${cssVarName}); }`);
        }
      }
    }
  }
  
  processObject(tokens);
  
  return {
    variables: cssVars.join('\n'),
    utilities: utilityClasses.join('\n')
  };
}

// SCSS 변수 생성
function generateScssVariables(tokens, prefix = '') {
  let scssVars = [];
  
  function processObject(obj, currentPrefix) {
    for (const [key, value] of Object.entries(obj)) {
      const varName = currentPrefix ? `${currentPrefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processObject(value, varName);
      } else {
        const scssVarName = `$${prefix ? prefix + '-' : ''}${varName}`;
        scssVars.push(`${scssVarName}: ${value};`);
      }
    }
  }
  
  processObject(tokens);
  return scssVars.join('\n');
}

// JavaScript 토큰 생성
function generateJsTokens(tokens) {
  return `export const tokens = ${JSON.stringify(tokens, null, 2)};

export default tokens;`;
}

// 메인 빌드 함수
function buildTokens() {
  try {
    console.log('시스템-02 토큰 빌드 시작...');
    
    // 모든 토큰 병합 (foundation + semantic)
    const allTokens = { ...foundationTokens, ...semanticTokens };
    
    // 참조 해결
    const resolvedTokens = resolveReferences(allTokens, allTokens);
    
    // 🔍 실제 해결된 토큰 확인
    console.log('📋 실제 해결된 토큰 샘플:');
    console.log('Hero-1 Regular:', JSON.stringify(resolvedTokens.semantic?.typography?.["hero-1"]?.regular, null, 2));
    
    console.log(`총 토큰 수: ${JSON.stringify(resolvedTokens).match(/:/g)?.length || 0}개`);
    
    // CSS 생성
    const foundationCss = generateCssVariables(resolvedTokens.foundation, 'foundation');
    const semanticCss = generateCssVariables(resolvedTokens.semantic, 'semantic');
    
    const cssContent = `:root {
${foundationCss.variables}
${semanticCss.variables}
}

${foundationCss.utilities}
${semanticCss.utilities}`;
    
    // SCSS 생성
    const foundationScss = generateScssVariables(resolvedTokens.foundation, 'foundation');
    const semanticScss = generateScssVariables(resolvedTokens.semantic, 'semantic');
    const scssContent = `${foundationScss}\n${semanticScss}`;
    
    // JavaScript 생성
    const jsContent = generateJsTokens(resolvedTokens);
    const esmContent = generateJsTokens(resolvedTokens);
    
    // 파일 쓰기
    fs.writeFileSync(path.resolve(__dirname, '../dist/css/tokens.css'), cssContent);
    fs.writeFileSync(path.resolve(__dirname, '../dist/scss/_tokens.scss'), scssContent);
    fs.writeFileSync(path.resolve(__dirname, '../dist/js/tokens.js'), jsContent);
    fs.writeFileSync(path.resolve(__dirname, '../dist/js/tokens.esm.js'), esmContent);
    
    // 아이콘 복사
    copyIcons();
    
    console.log('✅ 시스템-02 토큰 빌드 완료!');
    console.log(`📊 생성된 CSS 변수: ${cssContent.match(/--[a-zA-Z0-9-]+:/g)?.length || 0}개`);
    
  } catch (error) {
    console.error('❌ 토큰 빌드 중 오류 발생:', error);
    process.exit(1);
  }
}

// 스크립트 실행
buildTokens(); 