import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 필요한 디렉토리 생성
const directories = ['dist', 'dist/css', 'dist/js', 'dist/scss', 'dist/icons'];
directories.forEach(dir => {
  const dirPath = path.resolve(__dirname, '..', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// 토큰 파일 로드
const foundationPath = path.resolve(__dirname, '../../shared/foundation.json');
const semanticPath = path.resolve(__dirname, '../semantic.json');

// 파일 존재 확인
if (!fs.existsSync(foundationPath)) {
  console.error('Foundation 토큰 파일을 찾을 수 없습니다:', foundationPath);
  process.exit(1);
}

if (!fs.existsSync(semanticPath)) {
  console.error('Semantic 토큰 파일을 찾을 수 없습니다:', semanticPath);
  process.exit(1);
}

const foundationTokens = JSON.parse(fs.readFileSync(foundationPath, 'utf8'));
const semanticTokens = JSON.parse(fs.readFileSync(semanticPath, 'utf8'));

// 토큰 변환 함수들
function resolveReferences(obj, allTokens) {
  const processedObj = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      processedObj[key] = resolveReferences(value, allTokens);
    } else if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      const referencePath = value.slice(1, -1);
      const referencedValue = getNestedValue(allTokens, referencePath);
      processedObj[key] = referencedValue || value;
    } else {
      processedObj[key] = value;
    }
  }
  
  return processedObj;
}

function getNestedValue(obj, path) {
  const parts = path.split('.');
  let current = obj;
  
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }
  
  return current;
}

// CSS 변수 생성
function generateCssVariables(tokens) {
  let cssVars = [];
  
  function processObject(obj, currentPrefix) {
    for (const [key, value] of Object.entries(obj)) {
      const varName = currentPrefix ? `${currentPrefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processObject(value, varName);
      } else {
        cssVars.push(`  --${varName}: ${value};`);
      }
    }
  }
  
  processObject(tokens);
  return cssVars;
}

// 빌드 실행
function buildTokens() {
  try {
    // 모든 토큰 병합
    const allTokens = { ...foundationTokens, ...semanticTokens };
    const resolvedTokens = resolveReferences(semanticTokens, allTokens);
    
    // CSS 생성
    const cssVars = generateCssVariables(resolvedTokens);
    const cssContent = `:root {\n${cssVars.join('\n')}\n}`;
    fs.writeFileSync(path.resolve(__dirname, '../dist/css/tokens.css'), cssContent);
    
    // JS 생성
    const jsContent = `export const tokens = ${JSON.stringify(resolvedTokens, null, 2)};`;
    fs.writeFileSync(path.resolve(__dirname, '../dist/js/tokens.js'), jsContent);
    
    // SCSS 생성
    const scssVars = cssVars.map(v => v.replace('--', '$').replace(': ', ': '));
    const scssContent = scssVars.join('\n');
    fs.writeFileSync(path.resolve(__dirname, '../dist/scss/_tokens.scss'), scssContent);
    
    console.log('✅ 토큰 빌드 완료');
  } catch (error) {
    console.error('❌ 토큰 빌드 실패:', error.message);
    process.exit(1);
  }
}

buildTokens(); 