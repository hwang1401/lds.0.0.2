const fs = require('fs');
const path = require('path');

// foundation-tokens.css에서 CSS 변수 정의를 읽어와서 객체로 변환
function loadFoundationTokens() {
  const tokensPath = path.resolve('./dist/css/foundation-tokens.css');
  
  if (!fs.existsSync(tokensPath)) {
    return {};
  }
  
  const content = fs.readFileSync(tokensPath, 'utf-8');
  const customProperties = {};
  
  // :root { --var-name: value; } 패턴 매칭
  const matches = content.match(/--[^:]+:[^;]+/g);
  if (matches) {
    matches.forEach(match => {
      const [property, value] = match.split(':');
      customProperties[property.trim()] = value.trim();
    });
  }
  
  return customProperties;
}

// CSS 변수를 실제 값으로 치환하는 커스텀 플러그인
const replaceFoundationVariables = {
  postcssPlugin: 'replace-foundation-variables',
  Declaration(decl) {
    // 모든 foundation 관련 CSS 변수를 찾아서 치환
    if (decl.value.includes('var(--foundation-')) {
      const foundationTokens = loadFoundationTokens();
      
      // var(--foundation-xxx) 패턴을 찾아서 치환
      decl.value = decl.value.replace(/var\(--foundation-[^)]+\)/g, (match) => {
        // var(--foundation-xxx) -> --foundation-xxx 추출
        const variableName = match.slice(4, -1); // 'var(' 제거하고 ')' 제거
        
        // foundation-tokens.css에서 해당 토큰 찾기
        if (foundationTokens[variableName]) {
          return foundationTokens[variableName];
        }
        
        // 매핑되지 않는 토큰들을 위한 fallback 로직
        // --foundation-size-global-xs -> --foundation-foundation-size-global-xs 시도
        const fallbackName = variableName.replace('--foundation-', '--foundation-foundation-');
        if (foundationTokens[fallbackName]) {
          return foundationTokens[fallbackName];
        }
        
        // 찾을 수 없으면 원래 변수 그대로 유지
        console.warn(`토큰을 찾을 수 없습니다: ${variableName}`);
        return match;
      });
    }
  }
};

replaceFoundationVariables.postcssPlugin = 'replace-foundation-variables';

module.exports = {
  plugins: [replaceFoundationVariables]
}; 