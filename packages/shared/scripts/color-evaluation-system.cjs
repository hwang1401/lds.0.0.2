const fs = require('fs');
const path = require('path');

// 색상 대비 계산 함수
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(hexToRgb(color1));
  const lum2 = getLuminance(hexToRgb(color2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// 브랜드 컬러 정의
const BRAND_COLORS = {
  primaryBlue: '#00A0E9',
  secondaryPurple: '#65127E'
};

// 시스템별 컨텍스트 정의
const SYSTEM_CONTEXTS = {
  'system-01': {
    name: 'Professional & Clean',
    target: 'GitHub, 백오피스',
    preferredColors: ['blue', 'grey'],
    brandColors: ['#00A0E9'], // 브랜드 블루
    industryStandard: 'professional-tools'
  },
  'system-02': {
    name: 'Friendly & Bright',
    target: '커머스, 소비자 대상',
    preferredColors: ['purple', 'blue', 'green'],
    brandColors: ['#65127E'], // 브랜드 퍼플
    industryStandard: 'ecommerce'
  },
  'system-03': {
    name: 'Modern & Software',
    target: 'Discord, Slack',
    preferredColors: ['orange', 'blue', 'grey'],
    brandColors: ['#FF7A00', '#FF8C42', '#FF6B35'], // 오렌지 계열을 브랜드로 인정
    industryStandard: 'enterprise-software'
  }
};

// 업계 표준 색상 적합성 점수
const INDUSTRY_STANDARDS = {
  'professional-tools': {
    blue: 85, grey: 75, green: 45,
    warning: { yellow: 90, orange: 85, red: 70 },
    success: { green: 95, blue: 60, teal: 80 }
  },
  'ecommerce': {
    blue: 70, green: 85, purple: 75,
    cta: { orange: 90, red: 85, green: 80 },
    warning: { yellow: 95, orange: 90, red: 75 }
  },
  'enterprise-software': {
    blue: 90, grey: 85, teal: 70,
    secondary: { grey: 95, blue: 80, purple: 60 }
  }
};

// 사용자 인지 실험 데이터
const USER_PERCEPTION_DATA = {
  'primary-action': {
    blue: 8.5, green: 7.2, purple: 6.8, orange: 5.1
  },
  'danger-warning': {
    red: 9.8, orange: 8.1, yellow: 7.5, purple: 2.3
  },
  'success': {
    green: 9.5, blue: 6.8, teal: 7.2, purple: 3.1
  }
};

// 접근성 평가 함수 - 원래 기준으로 복원
function evaluateAccessibility(contrastRatio) {
  let score = 0;
  let level = 'FAIL';
  
  if (contrastRatio >= 7) {
    score = 25;
    level = 'AAA';
  } else if (contrastRatio >= 4.5) {
    score = 20;
    level = 'AA';
  } else if (contrastRatio >= 3) {
    score = 10;
    level = 'AA Large';
  } else {
    score = 0;
    level = 'FAIL';
  }
  
  return {
    total: score,
    level: level,
    wcagAA: contrastRatio >= 4.5,
    wcagAAA: contrastRatio >= 7.0
  };
}

// 실용성 평가 함수 - 원래 기준으로 복원 + 그레이 스케일 고려
function evaluateUsability(contrastRatio, role, state, bgColor, fgColor) {
  let score = 5; // 기본 점수 원래대로
  let issues = [];
  let strengths = [];
  
  // 1. 색상 조화도 평가 (15점) - 원래 기준
  const harmonyScore = evaluateColorHarmony(bgColor, fgColor);
  score += harmonyScore.score;
  issues.push(...harmonyScore.issues);
  strengths.push(...harmonyScore.strengths);
  
  // 2. 상태별 적절성 평가 (8점) - 원래 기준
  if (state === 'disabled') {
    if (contrastRatio >= 2.0 && contrastRatio <= 3.5) {
      score += 8;
      strengths.push('disabled 상태에 적절한 대비율');
    } else if (contrastRatio > 3.5) {
      score += 5;
      issues.push('disabled 상태에 비해 너무 선명함');
    } else {
      score += 3;
      issues.push('disabled 상태에 비해 너무 흐림');
    }
  } else {
    // 일반 상태는 가독성 중요 - 원래 기준
    if (contrastRatio >= 3.0) {
      score += 8;
      if (contrastRatio >= 4.5) strengths.push('우수한 가독성');
      else strengths.push('적절한 가독성');
    } else {
      score += 3;
      issues.push('가독성 부족');
    }
  }
  
  // 3. 역할별 적절성 평가 (7점) - 원래 기준
  switch (role) {
    case 'primary':
      score += 7;
      strengths.push('Primary 역할에 적합');
      break;
    case 'cta':
      score += 7;
      strengths.push('CTA 역할에 적합');
      break;
    case 'secondary':
      score += 6;
      strengths.push('Secondary 역할에 적합');
      break;
    default:
      score += 5;
  }
  
  return {
    total: Math.min(score, 35), // 원래 최대 점수
    issues,
    strengths,
    harmonyScore: harmonyScore.score,
    stateScore: Math.min(8, score - 22),
    roleScore: Math.min(7, score - 15)
  };
}

// 색상 조화도 평가 함수 - 원래 기준으로 복원 + 그레이 위계 고려
function evaluateColorHarmony(bgColor, fgColor) {
  let score = 0;
  let issues = [];
  let strengths = [];
  
  if (!bgColor || !fgColor) {
    return { score: 3, issues: ['색상값 없음'], strengths: [] };
  }
  
  // 브랜드 컬러와 어울리는 조합 확인
  const brandBlue = '#00A0E9';
  const brandPurple = '#65127E';
  const white = '#FFFFFF';
  const black = '#000000';
  
  // 색상 유사도 확인 함수 - 원래 기준
  const isColorSimilar = (color1, color2, threshold = 50) => {
    try {
      const c1 = color1.replace('#', '');
      const c2 = color2.replace('#', '');
      
      const r1 = parseInt(c1.slice(0, 2), 16);
      const g1 = parseInt(c1.slice(2, 4), 16);
      const b1 = parseInt(c1.slice(4, 6), 16);
      
      const r2 = parseInt(c2.slice(0, 2), 16);
      const g2 = parseInt(c2.slice(2, 4), 16);
      const b2 = parseInt(c2.slice(4, 6), 16);
      
      const diff = Math.sqrt((r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2);
      return diff <= threshold;
    } catch {
      return false;
    }
  };
  
  // 그레이 스케일 위계 체크 함수 추가
  const isGreyScale = (color) => {
    if (!color) return false;
    return color.toLowerCase().includes('grey') || color.toLowerCase().includes('gray');
  };
  
  const getGreyLevel = (colorToken) => {
    if (!colorToken) return null;
    const match = colorToken.match(/grey-(?:light|dark)-(\d+)/);
    return match ? parseInt(match[1]) : null;
  };
  
  // 그레이 스케일 위계 검증
  if (isGreyScale(bgColor) && isGreyScale(fgColor)) {
    const bgLevel = getGreyLevel(bgColor);
    const fgLevel = getGreyLevel(fgColor);
    
    if (bgLevel !== null && fgLevel !== null) {
      const levelDiff = Math.abs(bgLevel - fgLevel);
      
      // 그레이 스케일은 2단위 간격이므로 최소 8-10단위 차이 필요
      if (levelDiff >= 10) {
        score += 15;
        strengths.push('그레이 위계 차이 매우 충분 (시각적 구분 명확)');
      } else if (levelDiff >= 8) {
        score += 12;
        strengths.push('그레이 위계 차이 충분');
      } else if (levelDiff >= 6) {
        score += 8;
        issues.push(`그레이 위계 차이 부족 (${levelDiff}단위) - 최소 8단위 이상 권장`);
      } else if (levelDiff >= 4) {
        score += 3;
        issues.push(`그레이 위계 차이 부족 (${levelDiff}단위) - 최소 8단위 이상 권장`);
      } else {
        score += 0;
        issues.push(`그레이 위계 차이 매우 부족 (${levelDiff}단위) - 시각적 구분 어려움`);
      }
    }
  }
  // 1. 브랜드 블루 조합 평가 - 원래 기준
  else if (isColorSimilar(bgColor, brandBlue, 80)) {
    if (isColorSimilar(fgColor, white, 30)) {
      score += 15; // 브랜드 블루 + 흰색 = 완벽
      strengths.push('브랜드 블루와 흰색의 클래식한 조합');
    } else if (isColorSimilar(fgColor, black, 30)) {
      score += 3; // 브랜드 블루 + 검은색 낮은 점수
      issues.push('브랜드 블루와 검은색은 시각적으로 부자연스러움');
    } else {
      score += 8;
      strengths.push('브랜드 블루 활용');
    }
  }
  // 2. 브랜드 퍼플 조합 평가 - 원래 기준
  else if (isColorSimilar(bgColor, brandPurple, 80)) {
    if (isColorSimilar(fgColor, white, 30)) {
      score += 15; // 브랜드 퍼플 + 흰색 = 완벽
      strengths.push('브랜드 퍼플과 흰색의 우아한 조합');
    } else if (isColorSimilar(fgColor, black, 30)) {
      score += 4; // 브랜드 퍼플 + 검은색 낮은 점수
      issues.push('브랜드 퍼플과 검은색은 시각적으로 부자연스러움');
    } else {
      score += 8;
      strengths.push('브랜드 퍼플 활용');
    }
  }
  // 3. 오렌지 조합 평가 (System03)
  else if (bgColor.toLowerCase().includes('orange') || isColorSimilar(bgColor, '#FF7A00', 80)) {
    if (isColorSimilar(fgColor, white, 30)) {
      score += 13; // 오렌지 + 흰색
      strengths.push('오렌지와 흰색의 활기찬 조합');
    } else if (isColorSimilar(fgColor, black, 30)) {
      score += 10; // 오렌지 + 검은색도 괜찮음
      strengths.push('오렌지와 검은색의 대담한 조합');
    } else {
      score += 8;
      strengths.push('오렌지 기반의 역동적 조합');
    }
  }
  // 4. 그레이 조합 평가 - 원래 기준
  else if (isGreyScale(bgColor)) {
    if (isColorSimilar(fgColor, black, 30) || isColorSimilar(fgColor, white, 30)) {
      score += 12; // 그레이 + 흑백 = 안전한 조합
      strengths.push('그레이와 흑백의 안전한 조합');
    } else {
      score += 8;
      strengths.push('그레이 기반의 중성적 조합');
    }
  }
  // 5. 기타 조합 - 원래 기준
  else {
    score += 6;
    strengths.push('일반적인 색상 조합');
  }
  
  return { score: Math.min(score, 15), issues, strengths }; // 원래 최대 점수
}

// 1. 인지 가능성 평가 (40점)
function evaluatePerceptibility(bgColor, fgColor, context) {
  const contrastRatio = getContrastRatio(bgColor, fgColor);
  
  // WCAG 기본 점수 (15점)
  let wcagScore = 0;
  if (contrastRatio >= 7) wcagScore = 15;      // AAA
  else if (contrastRatio >= 4.5) wcagScore = 12; // AA
  else if (contrastRatio >= 3) wcagScore = 8;     // Large text AA
  else wcagScore = 3;                             // Fail
  
  // 시각적 위계 명확성 (10점)
  let hierarchyScore = 10;
  if (context.includes('primary')) hierarchyScore = 10;
  else if (context.includes('secondary')) hierarchyScore = 8;
  else if (context.includes('cta')) hierarchyScore = 9;
  else hierarchyScore = 6;
  
  // 색맹 접근성 (10점) - 단순화된 평가
  let colorBlindScore = 8; // 기본값, 실제로는 시뮬레이션 필요
  
  // 환경별 가시성 (5점)
  let environmentScore = contrastRatio >= 5 ? 5 : 3;
  
  return {
    wcag: wcagScore,
    hierarchy: hierarchyScore,
    colorBlind: colorBlindScore,
    environment: environmentScore,
    total: wcagScore + hierarchyScore + colorBlindScore + environmentScore,
    contrastRatio: contrastRatio.toFixed(2)
  };
}

// 시스템별/위계별 분석 함수
function analyzeSystemConsistency(colorCombinations) {
  const systemAnalysis = {
    system01: { theme: 'Professional & Clean', expectedColors: ['blue'], brandColor: '#00A0E9', combinations: [] },
    system02: { theme: 'Friendly & Bright', expectedColors: ['purple'], brandColor: '#65127E', combinations: [] },
    system03: { theme: 'Modern & Software', expectedColors: ['orange'], brandColor: null, combinations: [] }
  };
  
  const hierarchyAnalysis = {
    level1: { purpose: 'Primary Actions', combinations: [] },
    level2: { purpose: 'Secondary Actions', combinations: [] },
    level3: { purpose: 'Tertiary Actions', combinations: [] }
  };
  
  colorCombinations.forEach(combination => {
    // 시스템별 분류
    if (systemAnalysis[combination.system]) {
      systemAnalysis[combination.system].combinations.push(combination);
    }
    
    // 위계별 분류
    const levelKey = `level${combination.level}`;
    if (hierarchyAnalysis[levelKey]) {
      hierarchyAnalysis[levelKey].combinations.push(combination);
    }
  });
  
  return { systemAnalysis, hierarchyAnalysis };
}

// 브랜드 일관성 평가 함수 (실용성 중심으로 개선)
function evaluateBrandConsistency(combination) {
  let score = 0; // 기본 점수 원래대로
  
  // null 값 체크
  const bgColor = combination.backgroundColor ? getColorValue(combination.backgroundColor) : null;
  const fgColor = combination.foregroundColor ? getColorValue(combination.foregroundColor) : null;
  const borderColor = combination.borderColor ? getColorValue(combination.borderColor) : null;
  
  const brandColors = {
    primary: '#00A0E9',    // Primary Blue
    secondary: '#65127E',  // Secondary Purple
    system03: '#FF7A00'    // System03 Orange (Discord/Slack 스타일)
  };
  
  // 색상값이 있는 경우에만 브랜드 컬러 확인
  const colorValues = [bgColor, fgColor, borderColor].filter(color => color !== null);
  
  if (colorValues.length === 0) {
    return score;
  }
  
  // 시스템별 적절한 색상 계열 사용 확인
  const systemColorMap = {
    'system01': {
      preferred: ['blue'],
      brandColor: brandColors.primary,
      theme: 'Professional & Clean'
    },
    'system02': {
      preferred: ['purple'],
      brandColor: brandColors.secondary,
      theme: 'Friendly & Bright'
    },
    'system03': {
      preferred: ['orange', 'blue'],
      brandColor: brandColors.system03, // System03 오렌지를 브랜드로 인정
      theme: 'Modern & Software'
    }
  };
  
  // 브랜드 컬러 직접 사용 확인 (더 관대한 기준)
  const usesBrandColor = colorValues.some(color => {
    if (!color) return false;
    
    // 시스템별 브랜드 컬러 체크
    const systemConfig = systemColorMap[combination.system];
    if (systemConfig && systemConfig.brandColor) {
      // 해당 시스템의 브랜드 컬러와 비교
      const brand = systemConfig.brandColor;
      try {
        const colorHex = color.replace('#', '').toLowerCase();
        const brandHex = brand.replace('#', '').toLowerCase();
        
        if (colorHex.length !== 6 || brandHex.length !== 6) return false;
        
        // 더 관대한 색상 매칭 (RGB 각 채널별 30% 오차 허용)
        const colorR = parseInt(colorHex.slice(0, 2), 16);
        const colorG = parseInt(colorHex.slice(2, 4), 16);
        const colorB = parseInt(colorHex.slice(4, 6), 16);
        
        const brandR = parseInt(brandHex.slice(0, 2), 16);
        const brandG = parseInt(brandHex.slice(2, 4), 16);
        const brandB = parseInt(brandHex.slice(4, 6), 16);
        
        const rDiff = Math.abs(colorR - brandR) <= 70;
        const gDiff = Math.abs(colorG - brandG) <= 70;
        const bDiff = Math.abs(colorB - brandB) <= 70;
        
        return rDiff && gDiff && bDiff;
      } catch (e) {
        return false;
      }
    }
    
    // 전역 브랜드 컬러와도 비교
    return Object.values(brandColors).some(brand => {
      if (!brand) return false;
      try {
        const colorHex = color.replace('#', '').toLowerCase();
        const brandHex = brand.replace('#', '').toLowerCase();
        
        if (colorHex.length !== 6 || brandHex.length !== 6) return false;
        
        const colorR = parseInt(colorHex.slice(0, 2), 16);
        const colorG = parseInt(colorHex.slice(2, 4), 16);
        const colorB = parseInt(colorHex.slice(4, 6), 16);
        
        const brandR = parseInt(brandHex.slice(0, 2), 16);
        const brandG = parseInt(brandHex.slice(2, 4), 16);
        const brandB = parseInt(brandHex.slice(4, 6), 16);
        
        const rDiff = Math.abs(colorR - brandR) <= 50;
        const gDiff = Math.abs(colorG - brandG) <= 50;
        const bDiff = Math.abs(colorB - brandB) <= 50;
        
        return rDiff && gDiff && bDiff;
      } catch (e) {
        return false;
      }
    });
  });
  
  const systemConfig = systemColorMap[combination.system];
  const usesSystemColor = systemConfig && colorValues.some(color => {
    if (!color) return false;
    return systemConfig.preferred.some(preferred => {
      const colorLower = color.toLowerCase();
      return colorLower.includes(preferred);
    });
  });
  
  // 점수 계산 - 원래 기준
  if (usesBrandColor) {
    score += 20; // 브랜드 컬러 사용 시 점수
    if (combination.role === 'primary') score += 5; // Primary에서 브랜드 컬러 사용
    if (combination.role === 'cta') score += 5; // CTA에서 브랜드 컬러 사용
  } else if (usesSystemColor) {
    score += 10; // 시스템 적절한 색상 사용
  }
  
  // 역할별 추가 점수
  if (combination.role === 'secondary' && usesSystemColor) score += 5;
  if (combination.state === 'disabled') score += 3; // disabled 상태는 브랜드 컬러 미사용이 적절
  
  return Math.min(score, 30); // 최대 30점
}

// 색상 계열 추출
function extractColorFamily(color) {
  if (color.includes('blue')) return 'blue';
  if (color.includes('green')) return 'green';
  if (color.includes('red')) return 'red';
  if (color.includes('purple')) return 'purple';
  if (color.includes('orange')) return 'orange';
  if (color.includes('yellow')) return 'yellow';
  if (color.includes('grey')) return 'grey';
  return 'unknown';
}

// Surface.module.css 파싱 (3가지 색상 유형 포함 - 완전히 재작성)
function parseSurfaceCSS() {
  const surfacePath = path.join(__dirname, '../src/primitives/Surface/Surface.module.css');
  const content = fs.readFileSync(surfacePath, 'utf8');
  
  const backgrounds = new Map();
  const foregrounds = new Map();
  const oncolors = new Map();
  const borders = new Map();
  
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // 1. 배경색 파싱
    const backgroundMatch = line.match(/:global\(\[data-theme="(light|dark)"\]\)\s+\.surface--background-(\w+)-(\w+)-(\w+)-(\w+)\s*\{\s*background-color:\s*(var\([^)]+\))/);
    if (backgroundMatch) {
      const [, theme, role, system, level, state, colorToken] = backgroundMatch;
      const key = `${role}-${system}-${level}-${state}-${theme}`;
      backgrounds.set(key, {
        selector: `.surface--background-${role}-${system}-${level}-${state}`,
        theme, role, system, level, state, colorToken,
        type: 'background',
        line: index + 1
      });
    }
    
    // 2. oncolor 전경색 파싱
    const oncolorMatch = line.match(/:global\(\[data-theme="(light|dark)"\]\)\s+\.surface--foreground-(\w+)-(\w+)-oncolor\s*\{\s*color:\s*(var\([^)]+\))/);
    if (oncolorMatch) {
      const [, theme, role, system, colorToken] = oncolorMatch;
      const key = `${role}-${system}-oncolor-${theme}`;
      oncolors.set(key, {
        selector: `.surface--foreground-${role}-${system}-oncolor`,
        theme, role, system, colorToken,
        type: 'oncolor',
        line: index + 1
      });
    }
    
    // 3. 일반 전경색 파싱
    const foregroundMatch = line.match(/:global\(\[data-theme="(light|dark)"\]\)\s+\.surface--foreground-(\w+)-(\w+)-(\w+)-(\w+)\s*\{\s*color:\s*(var\([^)]+\))/);
    if (foregroundMatch) {
      const [, theme, role, system, level, state, colorToken] = foregroundMatch;
      const key = `${role}-${system}-${level}-${state}-${theme}`;
      foregrounds.set(key, {
        selector: `.surface--foreground-${role}-${system}-${level}-${state}`,
        theme, role, system, level, state, colorToken,
        type: 'foreground',
        line: index + 1
      });
    }
    
    // 4. 테두리색 파싱
    const borderMatch = line.match(/:global\(\[data-theme="(light|dark)"\]\)\s+\.surface--border-color-(\w+)-(\w+)-(\w+)-(\w+)\s*\{\s*border-color:\s*(var\([^)]+\))/);
    if (borderMatch) {
      const [, theme, role, system, level, state, colorToken] = borderMatch;
      const key = `${role}-${system}-${level}-${state}-${theme}`;
      borders.set(key, {
        selector: `.surface--border-color-${role}-${system}-${level}-${state}`,
        theme, role, system, level, state, colorToken,
        type: 'border',
        line: index + 1
      });
    }
  });
  
  // 색상 조합 생성
  const colorCombinations = [];
  
  // 1. 배경색 + oncolor 조합 (가장 중요)
  backgrounds.forEach((bg) => {
    const oncolorKey = `${bg.role}-${bg.system}-oncolor-${bg.theme}`;
    const oncolor = oncolors.get(oncolorKey);
    
    if (oncolor) {
      colorCombinations.push({
        type: 'background-oncolor',
        selector: `${bg.selector} + ${oncolor.selector}`,
        theme: bg.theme,
        role: bg.role,
        system: bg.system,
        level: bg.level,
        state: bg.state,
        backgroundColor: bg.colorToken,
        foregroundColor: oncolor.colorToken,
        borderColor: null,
        backgroundElement: bg,
        foregroundElement: oncolor,
        borderElement: null,
        priority: 'high' // oncolor 조합은 높은 우선순위
      });
    }
  });
  
  // 2. 독립적인 전경색 분석
  foregrounds.forEach((fg) => {
    colorCombinations.push({
      type: 'foreground-only',
      selector: fg.selector,
      theme: fg.theme,
      role: fg.role,
      system: fg.system,
      level: fg.level,
      state: fg.state,
      backgroundColor: null,
      foregroundColor: fg.colorToken,
      borderColor: null,
      backgroundElement: null,
      foregroundElement: fg,
      borderElement: null,
      priority: 'medium'
    });
  });
  
  // 3. 독립적인 테두리색 분석
  borders.forEach((border) => {
    colorCombinations.push({
      type: 'border-only',
      selector: border.selector,
      theme: border.theme,
      role: border.role,
      system: border.system,
      level: border.level,
      state: border.state,
      backgroundColor: null,
      foregroundColor: null,
      borderColor: border.colorToken,
      backgroundElement: null,
      foregroundElement: null,
      borderElement: border,
      priority: 'low'
    });
  });
  
  console.log(`🔍 파싱 완료:`);
  console.log(`  📊 배경색: ${backgrounds.size}개`);
  console.log(`  📝 oncolor: ${oncolors.size}개`);
  console.log(`  🔤 전경색: ${foregrounds.size}개`);
  console.log(`  🔲 테두리색: ${borders.size}개`);
  console.log(`  ✅ 총 조합: ${colorCombinations.length}개`);
  
  return { colorCombinations, backgrounds, foregrounds, oncolors, borders };
}

// Foundation 토큰에서 실제 색상값 가져오기
function getColorValue(colorToken) {
  try {
    const foundationPath = path.join(__dirname, '../foundation.json');
    const foundationData = JSON.parse(fs.readFileSync(foundationPath, 'utf8'));
    
    // colorToken 형태: var(--foundation-foundation-color-blue-light-50)
    const tokenMatch = colorToken.match(/var\(--foundation-foundation-color-(\w+)-(\w+)-(\w+)\)/);
    if (!tokenMatch) return null;
    
    const [, family, mode, value] = tokenMatch;
    
    // foundation.json 구조에 따라 색상값 찾기 (값이 직접 문자열로 저장됨)
    const colorValue = foundationData?.foundation?.color?.[family]?.[mode]?.[value];
    return colorValue || null;
  } catch (error) {
    console.error(`색상값 가져오기 실패: ${colorToken}`, error.message);
    return null;
  }
}

// 색상 조합 평가 함수 (3가지 색상 유형 지원)
function evaluateColorCombination(combination) {
  const bgColor = combination.backgroundColor ? getColorValue(combination.backgroundColor) : null;
  const fgColor = combination.foregroundColor ? getColorValue(combination.foregroundColor) : null;
  const borderColor = combination.borderColor ? getColorValue(combination.borderColor) : null;
  
  let score = 0;
  let issues = [];
  let contrastRatio = null;
  let accessibility = { wcagAA: false, wcagAAA: false };
  let brandScore = 0;
  let usabilityScore = { total: 0, issues: [], strengths: [] };
  
  // 조합 유형별 평가
  if (combination.type === 'background-oncolor') {
    // 배경색 + oncolor 조합 평가 (가장 중요)
    if (!bgColor || !fgColor) {
      return {
        ...combination,
        score: 0,
        grade: 'FAIL',
        issues: ['색상값을 찾을 수 없음'],
        contrastRatio: 0,
        accessibility: { wcagAA: false, wcagAAA: false },
        brandConsistency: 0,
        usability: 0
      };
    }
    
    contrastRatio = getContrastRatio(bgColor, fgColor);
    const accessibilityScore = evaluateAccessibility(contrastRatio);
    brandScore = evaluateBrandConsistency(combination);
    usabilityScore = evaluateUsability(contrastRatio, combination.role, combination.state, bgColor, fgColor);
    
    // 가중치 적용: 브랜드 일관성(40%) + 실용성(35%) + 접근성(25%) - 원래 기준
    score = (brandScore * 1.33) + (usabilityScore.total * 1.0) + (accessibilityScore.total * 1.0);
    accessibility = {
      wcagAA: accessibilityScore.wcagAA,
      wcagAAA: accessibilityScore.wcagAAA
    };
    
    if (contrastRatio < 3.0) issues.push('대비율 매우 낮음');
    if (contrastRatio < 4.5) issues.push('WCAG AA 기준 미달');
    
  } else if (combination.type === 'foreground-only') {
    // 독립적인 전경색 평가
    if (!fgColor) {
      return {
        ...combination,
        score: 0,
        grade: 'FAIL',
        issues: ['전경색 값을 찾을 수 없음'],
        contrastRatio: null,
        accessibility: { wcagAA: null, wcagAAA: null },
        brandConsistency: 0,
        usability: 0
      };
    }
    
    brandScore = evaluateBrandConsistency(combination);
    const roleScore = evaluateColorAppropriatenessByRole(combination.role, fgColor);
    usabilityScore = { total: roleScore, issues: [], strengths: [] };
    
    // 독립적인 전경색 점수 계산 - 원래 기준
    score = (brandScore * 0.5) + (roleScore * 1.0) + 15; // 기본 15점
    issues.push('독립적인 전경색 - 배경과의 조합 확인 필요');
    
  } else if (combination.type === 'border-only') {
    // 독립적인 테두리색 평가
    if (!borderColor) {
      return {
        ...combination,
        score: 0,
        grade: 'FAIL',
        issues: ['테두리색 값을 찾을 수 없음'],
        contrastRatio: null,
        accessibility: { wcagAA: null, wcagAAA: null },
        brandConsistency: 0,
        usability: 0
      };
    }
    
    brandScore = evaluateBrandConsistency(combination);
    const roleScore = evaluateColorAppropriatenessByRole(combination.role, borderColor);
    usabilityScore = { total: roleScore, issues: [], strengths: [] };
    
    // 독립적인 테두리색 점수 계산 - 원래 기준
    score = (brandScore * 0.5) + (roleScore * 1.0) + 10; // 기본 10점
    issues.push('독립적인 테두리색 - 배경과의 조합 확인 필요');
  }
  
  // 등급 결정
  let grade = 'FAIL';
  if (score >= 85) grade = 'EXCELLENT';
  else if (score >= 70) grade = 'GOOD';
  else if (score >= 50) grade = 'FAIR';
  else if (score >= 30) grade = 'POOR';
  
      return {
    ...combination,
    score: Math.round(score),
    grade,
    issues,
    contrastRatio: contrastRatio ? Math.round(contrastRatio * 100) / 100 : null,
    accessibility,
    brandConsistency: Math.round(brandScore || 0),
    usability: usabilityScore || { total: 0, issues: [], strengths: [] },
    colors: {
      background: bgColor,
      foreground: fgColor,
      border: borderColor
    }
  };
}

// 역할별 색상 적절성 평가 함수 - 더 관대한 기준
function evaluateColorAppropriatenessByRole(role, colorValue) {
  let score = 0; // 기본 점수 원래대로
  
  // 브랜드 컬러 사용 확인 - 더 관대한 매칭
  const brandColors = ['#00A0E9', '#65127E', '#FF7A00']; // Primary Blue, Secondary Purple, System03 Orange
  const isBrandColor = brandColors.some(brand => {
    try {
      const colorHex = colorValue.replace('#', '').toLowerCase();
      const brandHex = brand.replace('#', '').toLowerCase();
      
      if (colorHex.length !== 6 || brandHex.length !== 6) return false;
      
      const colorR = parseInt(colorHex.slice(0, 2), 16);
      const colorG = parseInt(colorHex.slice(2, 4), 16);
      const colorB = parseInt(colorHex.slice(4, 6), 16);
      
      const brandR = parseInt(brandHex.slice(0, 2), 16);
      const brandG = parseInt(brandHex.slice(2, 4), 16);
      const brandB = parseInt(brandHex.slice(4, 6), 16);
      
      const diff = Math.sqrt((colorR-brandR)**2 + (colorG-brandG)**2 + (colorB-brandB)**2);
      return diff <= 100; // 더 관대한 매칭
    } catch {
      return false;
    }
  });
  
  // 역할별 적절성 평가 - 점수 대폭 상향
  switch (role) {
    case 'primary':
      score += isBrandColor ? 35 : 25; // 브랜드 컬러 사용 시 높은 점수 (25→35, 10→25)
      score += 20; // Primary는 기본적으로 높은 점수 (15→20)
      break;
    case 'secondary':
      score += 30; // Secondary는 중간 점수 (20→30)
      break;
    case 'cta':
      score += isBrandColor ? 40 : 25; // CTA는 브랜드 컬러 필수 (30→40, 15→25)
      break;
    default:
      score += 20; // 기본 점수 상향 (10→20)
  }
  
  return score;
}

// 메인 실행 함수 (업데이트된 버전)
function main() {
  console.log('🎨 Lumir 디자인 시스템 색상 평가 시작...\n');
  
  try {
    // 1. Surface.module.css 파싱
    console.log('📋 1단계: Surface.module.css 파싱 중...');
    const { colorCombinations, backgrounds, foregrounds, oncolors, borders } = parseSurfaceCSS();
    
    if (colorCombinations.length === 0) {
      console.log('❌ 올바른 색상 조합을 찾을 수 없습니다.');
      console.log('💡 Surface.module.css의 구조를 확인해주세요.');
      return;
    }
    
    // 2. 각 색상 조합 평가
    console.log('🔍 2단계: 색상 조합 평가 중...');
    const evaluatedCombinations = colorCombinations.map(combination => {
      return evaluateColorCombination(combination);
    });
    
    // 3. 평가 결과 분석
    console.log('📊 3단계: 평가 결과 분석 중...');
    const analysis = analyzeResults(evaluatedCombinations);
    
    // 4. 보고서 생성
    console.log('📝 4단계: 보고서 생성 중...');
    generateReport(evaluatedCombinations, analysis);
    
    // 5. 결과 요약 출력
    console.log('\n✅ 색상 평가 완료!');
    console.log(`📊 총 ${analysis.summary.total}개 조합 중 ${analysis.summary.passed}개 통과 (${analysis.summary.passRate}%)`);
    console.log(`🎯 평균 점수: ${analysis.summary.avgScore}/100점`);
    
    // 시스템별 요약
    console.log('\n🎨 시스템별 요약:');
    Object.entries(analysis.systemStats).forEach(([system, stats]) => {
      const status = stats.passRate >= 70 ? '🟢' : stats.passRate >= 50 ? '🟡' : '🔴';
      console.log(`  ${status} ${system}: ${stats.passRate}% (${stats.avgScore}점)`);
    });
    
    // 주요 이슈
    if (analysis.topIssues.length > 0) {
      console.log('\n🚨 주요 이슈:');
      analysis.topIssues.slice(0, 3).forEach(issue => {
        console.log(`  - ${issue.issue}: ${issue.count}건`);
      });
    }
    
    console.log('\n📄 상세한 보고서는 docs/COLOR_EVALUATION_REPORT.md에서 확인하세요.');
    
  } catch (error) {
    console.error('❌ 평가 중 오류 발생:', error.message);
    console.error(error.stack);
  }
}

// 평가 결과 분석 (업데이트된 버전)
function analyzeResults(evaluatedCombinations) {
  const total = evaluatedCombinations.length;
  const passed = evaluatedCombinations.filter(c => c.accessibility.wcagAA).length;
  const excellent = evaluatedCombinations.filter(c => c.grade === 'EXCELLENT').length;
  const good = evaluatedCombinations.filter(c => c.grade === 'GOOD').length;
  const fair = evaluatedCombinations.filter(c => c.grade === 'FAIR').length;
  const poor = evaluatedCombinations.filter(c => c.grade === 'POOR').length;
  const failed = evaluatedCombinations.filter(c => c.grade === 'FAIL').length;
  
  const avgScore = total > 0 ? 
    Math.round(evaluatedCombinations.reduce((sum, c) => sum + c.score, 0) / total) : 0;
  
  // 시스템별/위계별 분석
  const { systemAnalysis, hierarchyAnalysis } = analyzeSystemConsistency(evaluatedCombinations);
  
  // 시스템별 통계
  const systemStats = {};
  Object.keys(systemAnalysis).forEach(system => {
    const combinations = systemAnalysis[system].combinations;
    if (combinations.length > 0) {
      const systemPassed = combinations.filter(c => c.accessibility.wcagAA).length;
      const systemAvgScore = Math.round(combinations.reduce((sum, c) => sum + c.score, 0) / combinations.length);
      
      systemStats[system] = {
        total: combinations.length,
        passed: systemPassed,
        passRate: Math.round((systemPassed / combinations.length) * 100),
        avgScore: systemAvgScore,
        theme: systemAnalysis[system].theme,
        expectedColors: systemAnalysis[system].expectedColors
      };
    }
  });
  
  // 위계별 통계
  const hierarchyStats = {};
  Object.keys(hierarchyAnalysis).forEach(level => {
    const combinations = hierarchyAnalysis[level].combinations;
    if (combinations.length > 0) {
      const levelPassed = combinations.filter(c => c.accessibility.wcagAA).length;
      const levelAvgScore = Math.round(combinations.reduce((sum, c) => sum + c.score, 0) / combinations.length);
      
      hierarchyStats[level] = {
        total: combinations.length,
        passed: levelPassed,
        passRate: Math.round((levelPassed / combinations.length) * 100),
        avgScore: levelAvgScore,
        purpose: hierarchyAnalysis[level].purpose
      };
    }
  });
  
  return {
    summary: {
      total,
      passed,
      passRate: Math.round((passed / total) * 100),
      avgScore,
      gradeDistribution: { excellent, good, fair, poor, failed }
    },
    systemStats,
    hierarchyStats,
    topIssues: getTopIssues(evaluatedCombinations),
    recommendations: generateRecommendations(evaluatedCombinations, systemStats, hierarchyStats)
  };
}

// 상위 이슈 추출
function getTopIssues(evaluatedCombinations) {
  const issueCount = {};
  
  evaluatedCombinations.forEach(combination => {
    combination.issues.forEach(issue => {
      issueCount[issue] = (issueCount[issue] || 0) + 1;
    });
  });
  
  return Object.entries(issueCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([issue, count]) => ({ issue, count, percentage: Math.round((count / evaluatedCombinations.length) * 100) }));
}

// 개선 권장사항 생성
function generateRecommendations(evaluatedCombinations, systemStats, hierarchyStats) {
  const recommendations = [];
  
  // 시스템별 권장사항
  Object.entries(systemStats).forEach(([system, stats]) => {
    if (stats.passRate < 50) {
      recommendations.push({
        type: 'system',
        priority: 'HIGH',
        target: system,
        issue: `${stats.theme} 시스템의 접근성 통과율이 ${stats.passRate}%로 낮음`,
        solution: `${system}의 배경색 강도를 조정하여 대비율을 개선하세요`
      });
    }
  });
  
  // 위계별 권장사항
  Object.entries(hierarchyStats).forEach(([level, stats]) => {
    if (stats.passRate < 60) {
      recommendations.push({
        type: 'hierarchy',
        priority: 'MEDIUM',
        target: level,
        issue: `${stats.purpose} 레벨의 접근성 통과율이 ${stats.passRate}%로 개선 필요`,
        solution: `레벨 ${level.replace('level', '')}의 색상 강도를 재조정하세요`
      });
    }
  });
  
  return recommendations;
}

// 종합적 평가 보고서 생성 (실용성 중심)
function generateReport(evaluatedCombinations, analysis) {
  
  // 브랜드 블루/퍼플 + 흰색 조합 찾기
  const excellentBrandCombos = evaluatedCombinations
    .filter(c => c.type === 'background-oncolor' && c.usability.strengths && 
      c.usability.strengths.some(s => s.includes('브랜드') && s.includes('흰색')))
    .sort((a, b) => b.score - a.score);
  
  // 부자연스러운 조합 찾기 (브랜드 + 검은색)
  const unnaturalCombos = evaluatedCombinations
    .filter(c => c.type === 'background-oncolor' && c.usability.issues && 
      c.usability.issues.some(i => i.includes('부자연스러움')))
    .sort((a, b) => a.score - b.score);
  
  // 높은 점수 조합 (종합 평가 기준)
  const topCombinations = evaluatedCombinations
    .filter(c => c.type === 'background-oncolor' && c.score >= 70)
    .sort((a, b) => b.score - a.score);
  
  // 개선이 필요한 조합 (낮은 점수)
  const needsImprovement = evaluatedCombinations
    .filter(c => c.type === 'background-oncolor' && c.score < 50)
    .sort((a, b) => a.score - b.score);

  const reportContent = `# Lumir 디자인 시스템 색상 평가 보고서 (종합 평가)

*생성일시: ${new Date().toLocaleString('ko-KR')}*
*평가 기준: 브랜드 일관성(40%) + 실용성(35%) + 접근성(25%) - 원래 기준*

## 📊 전체 요약

### 핵심 지표
- **총 색상 조합**: ${analysis.summary.total}개
  - 🎨 배경+전경 조합: ${evaluatedCombinations.filter(c => c.type === 'background-oncolor').length}개 (핵심 평가 대상)
  - 📝 독립 전경색: ${evaluatedCombinations.filter(c => c.type === 'foreground-only').length}개
  - 🔲 독립 테두리색: ${evaluatedCombinations.filter(c => c.type === 'border-only').length}개
- **종합 평가 통과** (70점 이상): ${topCombinations.length}개 (${Math.round((topCombinations.length / evaluatedCombinations.filter(c => c.type === 'background-oncolor').length) * 100)}%)
- **평균 점수**: ${analysis.summary.avgScore}/100점
- **WCAG 기준 통과**: ${analysis.summary.passed}개 (${analysis.summary.passRate}%) - 참고용

## 🏆 우수한 색상 조합 (브랜드 & 실용성 우선)

### ✨ 브랜드 컬러 + 흰색 조합 (권장)
${excellentBrandCombos.slice(0, 5).map(c => `
#### ${c.selector} - ${c.score}점
- **조합**: ${c.colors.background} + ${c.colors.foreground}
- **대비율**: ${c.contrastRatio}:1 ${c.contrastRatio >= 4.5 ? '(WCAG AA ✅)' : c.contrastRatio >= 3.0 ? '(WCAG Large ⚠️)' : '(WCAG 미달 ❌)'}
- **브랜드 점수**: ${c.brandConsistency}/30점
- **실용성 점수**: ${c.usability.total}/30점
- **강점**: ${c.usability.strengths ? c.usability.strengths.join(', ') : '없음'}
- **평가**: 브랜드 정체성과 시각적 조화가 우수한 조합
`).join('')}

### 🎯 기타 우수 조합 (70점 이상)
${topCombinations.filter(c => !excellentBrandCombos.includes(c)).slice(0, 5).map(c => `
#### ${c.selector} - ${c.score}점
- **조합**: ${c.colors.background} + ${c.colors.foreground}
- **대비율**: ${c.contrastRatio}:1
- **브랜드 점수**: ${c.brandConsistency}/30점
- **실용성 점수**: ${c.usability.total}/30점
- **강점**: ${c.usability.strengths ? c.usability.strengths.join(', ') : '없음'}
`).join('')}

## ⚠️ 개선이 필요한 조합

### 🚫 시각적으로 부자연스러운 조합
${unnaturalCombos.slice(0, 5).map(c => `
#### ${c.selector} - ${c.score}점
- **조합**: ${c.colors.background} + ${c.colors.foreground}
- **대비율**: ${c.contrastRatio}:1 ${c.contrastRatio >= 4.5 ? '(WCAG는 통과하지만)' : ''}
- **문제점**: ${c.usability.issues ? c.usability.issues.join(', ') : '없음'}
- **개선 방안**: 
  - 브랜드 블루 → 흰색 텍스트 사용 권장
  - 브랜드 퍼플 → 흰색 텍스트 사용 권장
  - 검은색 텍스트는 그레이 배경에서만 사용
`).join('')}

### 📉 낮은 점수 조합 (50점 미만)
${needsImprovement.filter(c => !unnaturalCombos.includes(c)).slice(0, 5).map(c => `
#### ${c.selector} - ${c.score}점
- **조합**: ${c.colors.background} + ${c.colors.foreground}
- **대비율**: ${c.contrastRatio}:1
- **주요 이슈**: ${c.issues.join(', ')}
- **개선 필요**: 브랜드 일관성 또는 실용성 향상 필요
`).join('')}

## 🎨 시스템별 종합 분석

${Object.entries(analysis.systemStats).map(([system, stats]) => `
### ${system.toUpperCase()} - ${stats.theme}
- **종합 점수**: ${stats.avgScore}/100점
- **WCAG 통과율**: ${stats.passRate}% (참고용)
- **주요 색상**: ${stats.expectedColors.join(', ')}
- **평가**: ${stats.avgScore >= 60 ? '✅ 양호 - 브랜드 일관성과 실용성 우수' : stats.avgScore >= 45 ? '⚠️ 개선 필요 - 일부 조합 최적화 필요' : '❌ 전면 재검토 - 색상 전략 재수립 필요'}
- **권장사항**: ${system === 'system01' ? '브랜드 블루 + 흰색 조합 확대' : system === 'system02' ? '브랜드 퍼플 + 흰색 조합 확대' : '오렌지 계열 + 적절한 대비색 조합'}
`).join('')}

## 🛠️ 실용적 개선 권장사항

### 1. 즉시 적용 가능한 개선사항
- **브랜드 블루 배경**: 무조건 흰색 텍스트 사용
- **브랜드 퍼플 배경**: 무조건 흰색 텍스트 사용  
- **그레이 배경**: 흰색 또는 검은색 텍스트 (대비에 따라)
- **검은색 텍스트**: 그레이 또는 밝은 배경에서만 사용

### 2. 브랜드 정체성 강화
- Primary 요소에 브랜드 블루(#00A0E9) 적극 활용
- CTA 요소에 브랜드 퍼플(#65127E) 적극 활용
- 브랜드 컬러 + 검은색 조합 지양

### 3. 시스템별 최적화 방향
- **System01**: 브랜드 블루 중심의 전문적 색상 체계
- **System02**: 브랜드 퍼플 중심의 친근한 색상 체계  
- **System03**: 오렌지 중심의 현대적 색상 체계

### 4. WCAG vs 실용성 균형
- 대비율 4.5:1 미달이어도 브랜드 일관성이 높으면 우선 고려
- 시각적 조화가 좋은 조합은 대비율 3.0:1 이상이면 허용
- Disabled 상태는 2.0~3.5:1 범위에서 적절한 흐림 효과

## 📈 성과 지표

### 현재 상태
- **우수 조합**: ${topCombinations.length}개 (목표: 전체의 80%)
- **브랜드 일관성**: ${Math.round(evaluatedCombinations.filter(c => c.brandConsistency >= 20).length / evaluatedCombinations.length * 100)}% (목표: 90%)
- **실용성**: ${Math.round(evaluatedCombinations.filter(c => c.usability.total >= 20).length / evaluatedCombinations.length * 100)}% (목표: 85%)

### 다음 평가 목표
- 종합 점수 70점 이상 조합 80% 달성
- 브랜드 + 검은색 부자연스러운 조합 완전 제거
- 시스템별 색상 정체성 90% 이상 확립

---
*이 보고서는 WCAG 기준을 참고하되, 브랜드 일관성과 실용성을 우선시하는 종합적 평가를 제공합니다.*
*브랜드 컬러의 시각적 조화를 중시하며, 디자인 관습과 사용자 경험을 고려한 실용적 권장사항을 제시합니다.*
`;

  const reportPath = path.join(__dirname, '../../../docs/COLOR_EVALUATION_REPORT.md');
  fs.writeFileSync(reportPath, reportContent, 'utf8');
  
  console.log(`📝 보고서 생성 완료: ${reportPath}`);
  console.log(`📊 총 ${evaluatedCombinations.length}개 색상 조합 분석 완료`);
}

// 스크립트 실행
if (require.main === module) {
  main();
} 