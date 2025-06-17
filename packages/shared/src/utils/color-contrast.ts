/**
 * 색상 대비 계산 및 WCAG 접근성 검증 유틸리티
 * Lumir 디자인 시스템의 정량적 색상 평가를 위한 도구
 */

// HEX 색상을 RGB로 변환
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// RGB를 상대 휘도(Relative Luminance)로 변환
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// 두 색상 간의 대비율 계산 (WCAG 기준)
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// WCAG 접근성 등급 평가
export interface ContrastResult {
  ratio: number;
  wcagAA: {
    normalText: boolean;    // 4.5:1 이상
    largeText: boolean;     // 3:1 이상
    uiComponent: boolean;   // 3:1 이상
  };
  wcagAAA: {
    normalText: boolean;    // 7:1 이상
    largeText: boolean;     // 4.5:1 이상
  };
  grade: 'FAIL' | 'AA' | 'AAA';
  recommendation: string;
}

export function evaluateContrast(foregroundColor: string, backgroundColor: string): ContrastResult {
  const ratio = getContrastRatio(foregroundColor, backgroundColor);
  
  const wcagAA = {
    normalText: ratio >= 4.5,
    largeText: ratio >= 3,
    uiComponent: ratio >= 3
  };
  
  const wcagAAA = {
    normalText: ratio >= 7,
    largeText: ratio >= 4.5
  };
  
  let grade: 'FAIL' | 'AA' | 'AAA' = 'FAIL';
  let recommendation = '';
  
  if (wcagAAA.normalText) {
    grade = 'AAA';
    recommendation = '✅ 최고 등급 접근성을 만족합니다.';
  } else if (wcagAA.normalText) {
    grade = 'AA';
    recommendation = '✅ 표준 접근성을 만족합니다.';
  } else if (wcagAA.largeText) {
    grade = 'AA';
    recommendation = '⚠️ 큰 텍스트(18pt+ 또는 14pt Bold+)에만 사용하세요.';
  } else {
    recommendation = `❌ 접근성 기준 미달. 대비를 ${(4.5 / ratio).toFixed(1)}배 높여야 합니다.`;
  }
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    wcagAA,
    wcagAAA,
    grade,
    recommendation
  };
}

// Foundation 토큰 색상값 추출 (CSS 변수에서 실제 HEX 값으로)
export const FOUNDATION_COLORS = {
  // Blue 계열
  'blue-light-0': '#F5F9FF',
  'blue-light-10': '#E3F2FD',
  'blue-light-20': '#BBDEFB',
  'blue-light-30': '#90CAF9',
  'blue-light-40': '#64B5F6',
  'blue-light-50': '#42A5F5',
  'blue-light-60': '#2196F3',
  'blue-light-70': '#1E88E5',
  'blue-light-80': '#1976D2',
  'blue-light-90': '#1565C0',
  'blue-light-100': '#0D47A1',
  
  'blue-dark-0': '#0A1929',
  'blue-dark-10': '#0D47A1',
  'blue-dark-20': '#1565C0',
  'blue-dark-30': '#1976D2',
  'blue-dark-40': '#1E88E5',
  'blue-dark-50': '#2196F3',
  'blue-dark-60': '#42A5F5',
  'blue-dark-70': '#64B5F6',
  'blue-dark-80': '#90CAF9',
  'blue-dark-90': '#BBDEFB',
  'blue-dark-100': '#E3F2FD',
  
  // Green 계열
  'green-light-0': '#F1F8E9',
  'green-light-10': '#DCEDC8',
  'green-light-20': '#C5E1A5',
  'green-light-30': '#AED581',
  'green-light-40': '#9CCC65',
  'green-light-50': '#8BC34A',
  'green-light-60': '#7CB342',
  'green-light-70': '#689F38',
  'green-light-80': '#558B2F',
  'green-light-90': '#33691E',
  'green-light-100': '#1B5E20',
  
  'green-dark-0': '#0A2E0A',
  'green-dark-10': '#1B5E20',
  'green-dark-20': '#33691E',
  'green-dark-30': '#558B2F',
  'green-dark-40': '#689F38',
  'green-dark-50': '#7CB342',
  'green-dark-60': '#8BC34A',
  'green-dark-70': '#9CCC65',
  'green-dark-80': '#AED581',
  'green-dark-90': '#C5E1A5',
  'green-dark-100': '#DCEDC8',
  
  // Grey 계열
  'grey-light-0': '#FFFFFF',
  'grey-light-10': '#FAFAFA',
  'grey-light-20': '#F5F5F5',
  'grey-light-30': '#F0F0F0',
  'grey-light-40': '#DEDEDE',
  'grey-light-50': '#C2C2C2',
  'grey-light-60': '#979797',
  'grey-light-70': '#818181',
  'grey-light-80': '#606060',
  'grey-light-90': '#3C3C3C',
  'grey-light-94': '#2E2E2E',
  'grey-light-96': '#1A1A1A',
  'grey-light-100': '#000000',
  
  'grey-dark-0': '#000000',
  'grey-dark-10': '#1A1A1A',
  'grey-dark-20': '#2E2E2E',
  'grey-dark-30': '#3C3C3C',
  'grey-dark-40': '#606060',
  'grey-dark-50': '#818181',
  'grey-dark-60': '#979797',
  'grey-dark-70': '#C2C2C2',
  'grey-dark-80': '#DEDEDE',
  'grey-dark-90': '#F0F0F0',
  'grey-dark-94': '#F5F5F5',
  'grey-dark-96': '#FAFAFA',
  'grey-dark-100': '#FFFFFF',
  
  // Orange 계열
  'orange-light-0': '#FFF3E0',
  'orange-light-10': '#FFE0B2',
  'orange-light-20': '#FFCC80',
  'orange-light-30': '#FFB74D',
  'orange-light-40': '#FFA726',
  'orange-light-50': '#FF9800',
  'orange-light-60': '#FB8C00',
  'orange-light-70': '#F57C00',
  'orange-light-80': '#EF6C00',
  'orange-light-90': '#E65100',
  'orange-light-100': '#BF360C',
  
  // Purple 계열
  'purple-light-0': '#F3E5F5',
  'purple-light-10': '#E1BEE7',
  'purple-light-20': '#CE93D8',
  'purple-light-30': '#BA68C8',
  'purple-light-40': '#AB47BC',
  'purple-light-50': '#9C27B0',
  'purple-light-60': '#8E24AA',
  'purple-light-70': '#7B1FA2',
  'purple-light-80': '#6A1B9A',
  'purple-light-90': '#4A148C',
  'purple-light-100': '#38006B',
  
  // Red 계열 (Status)
  'red-light-0': '#FFEBEE',
  'red-light-10': '#FFCDD2',
  'red-light-20': '#EF9A9A',
  'red-light-30': '#E57373',
  'red-light-40': '#EF5350',
  'red-light-50': '#F44336',
  'red-light-60': '#E53935',
  'red-light-70': '#D32F2F',
  'red-light-80': '#C62828',
  'red-light-90': '#B71C1C',
  'red-light-100': '#8B0000'
} as const;

// Foundation 토큰 키를 실제 HEX 값으로 변환
export function getFoundationColor(tokenKey: string): string | null {
  // CSS 변수 형태에서 토큰 키 추출
  const match = tokenKey.match(/--foundation-foundation-color-(.+)/);
  if (match) {
    const colorKey = match[1].replace(/-/g, '-') as keyof typeof FOUNDATION_COLORS;
    return FOUNDATION_COLORS[colorKey] || null;
  }
  
  // 직접 토큰 키로 접근
  const directKey = tokenKey as keyof typeof FOUNDATION_COLORS;
  return FOUNDATION_COLORS[directKey] || null;
}

// 시스템별 색상 조합 검증
export interface SystemColorValidation {
  system: string;
  theme: 'light' | 'dark';
  combinations: Array<{
    name: string;
    foreground: string;
    background: string;
    result: ContrastResult;
  }>;
  overallGrade: 'FAIL' | 'AA' | 'AAA';
  issues: string[];
  recommendations: string[];
}

export function validateSystemColors(
  system: 'system01' | 'system02' | 'system03' | 'system04' | 'system05',
  theme: 'light' | 'dark'
): SystemColorValidation {
  const combinations: Array<{
    name: string;
    foreground: string;
    background: string;
    result: ContrastResult;
  }> = [];
  const issues: string[] = [];
  const recommendations: string[] = [];
  
  // System-01 예시 조합들
  if (system === 'system01') {
    // Primary 조합
    combinations.push({
      name: 'Primary Button',
      foreground: theme === 'light' ? FOUNDATION_COLORS['grey-light-100'] : FOUNDATION_COLORS['grey-dark-100'],
      background: theme === 'light' ? FOUNDATION_COLORS['blue-light-60'] : FOUNDATION_COLORS['blue-dark-60'],
      result: evaluateContrast(
        theme === 'light' ? FOUNDATION_COLORS['grey-light-100'] : FOUNDATION_COLORS['grey-dark-100'],
        theme === 'light' ? FOUNDATION_COLORS['blue-light-60'] : FOUNDATION_COLORS['blue-dark-60']
      )
    });
    
    // Secondary 조합
    combinations.push({
      name: 'Secondary Text',
      foreground: theme === 'light' ? FOUNDATION_COLORS['grey-light-60'] : FOUNDATION_COLORS['grey-dark-60'],
      background: theme === 'light' ? FOUNDATION_COLORS['grey-light-0'] : FOUNDATION_COLORS['grey-dark-0'],
      result: evaluateContrast(
        theme === 'light' ? FOUNDATION_COLORS['grey-light-60'] : FOUNDATION_COLORS['grey-dark-60'],
        theme === 'light' ? FOUNDATION_COLORS['grey-light-0'] : FOUNDATION_COLORS['grey-dark-0']
      )
    });
    
    // CTA 조합
    combinations.push({
      name: 'CTA Button',
      foreground: theme === 'light' ? FOUNDATION_COLORS['grey-light-100'] : FOUNDATION_COLORS['grey-dark-100'],
      background: theme === 'light' ? FOUNDATION_COLORS['green-light-60'] : FOUNDATION_COLORS['green-dark-60'],
      result: evaluateContrast(
        theme === 'light' ? FOUNDATION_COLORS['grey-light-100'] : FOUNDATION_COLORS['grey-dark-100'],
        theme === 'light' ? FOUNDATION_COLORS['green-light-60'] : FOUNDATION_COLORS['green-dark-60']
      )
    });
  }
  
  // 전체 등급 계산
  const grades = combinations.map(c => c.result.grade);
  const overallGrade = grades.includes('FAIL') ? 'FAIL' : 
                      grades.includes('AA') && !grades.includes('AAA') ? 'AA' : 'AAA';
  
  // 문제점 및 권장사항 수집
  combinations.forEach(combo => {
    if (combo.result.grade === 'FAIL') {
      issues.push(`${combo.name}: 대비율 ${combo.result.ratio}:1 (기준 미달)`);
      recommendations.push(`${combo.name}: ${combo.result.recommendation}`);
    }
  });
  
  return {
    system,
    theme,
    combinations,
    overallGrade,
    issues,
    recommendations
  };
}

// 자동 색상 개선 제안
export function suggestColorImprovements(
  foregroundColor: string,
  backgroundColor: string,
  targetRatio: number = 4.5
): Array<{ color: string; ratio: number; improvement: string }> {
  const suggestions: Array<{ color: string; ratio: number; improvement: string }> = [];
  const currentRatio = getContrastRatio(foregroundColor, backgroundColor);
  
  if (currentRatio >= targetRatio) {
    return [{ color: foregroundColor, ratio: currentRatio, improvement: '현재 색상이 기준을 만족합니다.' }];
  }
  
  // Foundation 색상 팔레트에서 더 나은 대안 찾기
  Object.entries(FOUNDATION_COLORS).forEach(([key, color]) => {
    const ratio = getContrastRatio(color, backgroundColor);
    if (ratio >= targetRatio && ratio > currentRatio) {
      suggestions.push({
        color,
        ratio: Math.round(ratio * 100) / 100,
        improvement: `${key}: 대비율 ${Math.round(ratio * 100) / 100}:1로 개선`
      });
    }
  });
  
  return suggestions
    .sort((a, b) => b.ratio - a.ratio)
    .slice(0, 5); // 상위 5개 제안
} 