#!/usr/bin/env node

/**
 * Lumir 디자인 시스템 색상 대비 검증
 * Surface 컴포넌트에서 실제 사용하는 색상 조합 검증
 * 라이트/다크 테마별 토큰 매핑 정확히 반영
 */

const fs = require('fs');
const path = require('path');

// Foundation 토큰에서 실제 색상값 매핑 (라이트/다크 구분)
const colorTokens = {
  // Grey 스케일 - 라이트/다크 반전 체계
  '--foundation-foundation-color-grey-light-0': '#F5F5F5',
  '--foundation-foundation-color-grey-light-10': '#EEEEEE', 
  '--foundation-foundation-color-grey-light-20': '#E0E0E0',
  '--foundation-foundation-color-grey-light-30': '#BDBDBD',
  '--foundation-foundation-color-grey-light-40': '#9E9E9E',
  '--foundation-foundation-color-grey-light-50': '#757575',
  '--foundation-foundation-color-grey-light-60': '#616161',
  '--foundation-foundation-color-grey-light-70': '#424242',
  '--foundation-foundation-color-grey-light-72': '#3E3E3E',
  '--foundation-foundation-color-grey-light-76': '#383838',
  '--foundation-foundation-color-grey-light-80': '#303030',
  '--foundation-foundation-color-grey-light-84': '#2A2A2A',
  '--foundation-foundation-color-grey-light-88': '#1F1F1F',
  '--foundation-foundation-color-grey-light-92': '#141414',
  '--foundation-foundation-color-grey-light-94': '#0F0F0F',
  '--foundation-foundation-color-grey-light-96': '#0A0A0A',
  '--foundation-foundation-color-grey-light-98': '#050505',
  '--foundation-foundation-color-grey-light-100': '#FFFFFF', // 흰색
  
  '--foundation-foundation-color-grey-dark-0': '#0A0A0A',
  '--foundation-foundation-color-grey-dark-10': '#141414',
  '--foundation-foundation-color-grey-dark-20': '#1F1F1F',
  '--foundation-foundation-color-grey-dark-30': '#2A2A2A',
  '--foundation-foundation-color-grey-dark-40': '#383838',
  '--foundation-foundation-color-grey-dark-50': '#424242',
  '--foundation-foundation-color-grey-dark-60': '#616161',
  '--foundation-foundation-color-grey-dark-70': '#757575',
  '--foundation-foundation-color-grey-dark-72': '#7A7A7A',
  '--foundation-foundation-color-grey-dark-76': '#828282',
  '--foundation-foundation-color-grey-dark-80': '#9E9E9E',
  '--foundation-foundation-color-grey-dark-84': '#BDBDBD',
  '--foundation-foundation-color-grey-dark-88': '#E0E0E0',
  '--foundation-foundation-color-grey-dark-92': '#EEEEEE',
  '--foundation-foundation-color-grey-dark-94': '#F0F0F0',
  '--foundation-foundation-color-grey-dark-96': '#F5F5F5',
  '--foundation-foundation-color-grey-dark-98': '#FAFAFA',
  '--foundation-foundation-color-grey-dark-100': '#000000', // 검정색
  
  // Blue 스케일 - 중간값은 같은 색상
  '--foundation-foundation-color-blue-light-0': '#E3F2FD',
  '--foundation-foundation-color-blue-light-10': '#BBDEFB',
  '--foundation-foundation-color-blue-light-20': '#90CAF9',
  '--foundation-foundation-color-blue-light-30': '#64B5F6',
  '--foundation-foundation-color-blue-light-40': '#42A5F5',
  '--foundation-foundation-color-blue-light-50': '#2196F3', // 같은 색상
  '--foundation-foundation-color-blue-light-60': '#1E88E5',
  '--foundation-foundation-color-blue-light-70': '#1976D2',
  '--foundation-foundation-color-blue-light-80': '#1565C0',
  '--foundation-foundation-color-blue-light-90': '#0D47A1',
  '--foundation-foundation-color-blue-light-100': '#0A3F91',
  
  '--foundation-foundation-color-blue-dark-0': '#0A3F91',
  '--foundation-foundation-color-blue-dark-10': '#0D47A1',
  '--foundation-foundation-color-blue-dark-20': '#1565C0',
  '--foundation-foundation-color-blue-dark-30': '#1976D2',
  '--foundation-foundation-color-blue-dark-40': '#1E88E5',
  '--foundation-foundation-color-blue-dark-50': '#2196F3', // 같은 색상
  '--foundation-foundation-color-blue-dark-60': '#42A5F5',
  '--foundation-foundation-color-blue-dark-70': '#64B5F6',
  '--foundation-foundation-color-blue-dark-80': '#90CAF9',
  '--foundation-foundation-color-blue-dark-90': '#BBDEFB',
  '--foundation-foundation-color-blue-dark-100': '#E3F2FD',
  
  // Green 스케일
  '--foundation-foundation-color-green-light-0': '#E8F5E8',
  '--foundation-foundation-color-green-light-10': '#C8E6C8',
  '--foundation-foundation-color-green-light-20': '#A5D6A7',
  '--foundation-foundation-color-green-light-30': '#81C784',
  '--foundation-foundation-color-green-light-40': '#66BB6A',
  '--foundation-foundation-color-green-light-50': '#4CAF50',
  '--foundation-foundation-color-green-light-60': '#43A047',
  '--foundation-foundation-color-green-light-70': '#388E3C',
  '--foundation-foundation-color-green-light-80': '#2E7D32',
  '--foundation-foundation-color-green-light-90': '#1B5E20',
  '--foundation-foundation-color-green-light-100': '#0F4C15',
  
  '--foundation-foundation-color-green-dark-0': '#0F4C15',
  '--foundation-foundation-color-green-dark-10': '#1B5E20',
  '--foundation-foundation-color-green-dark-20': '#2E7D32',
  '--foundation-foundation-color-green-dark-30': '#388E3C',
  '--foundation-foundation-color-green-dark-40': '#43A047',
  '--foundation-foundation-color-green-dark-50': '#4CAF50',
  '--foundation-foundation-color-green-dark-60': '#66BB6A',
  '--foundation-foundation-color-green-dark-70': '#81C784',
  '--foundation-foundation-color-green-dark-80': '#A5D6A7',
  '--foundation-foundation-color-green-dark-90': '#C8E6C8',
  '--foundation-foundation-color-green-dark-100': '#E8F5E8',
  
  // Orange 스케일
  '--foundation-foundation-color-orange-light-0': '#FFF3E0',
  '--foundation-foundation-color-orange-light-10': '#FFE0B2',
  '--foundation-foundation-color-orange-light-20': '#FFCC80',
  '--foundation-foundation-color-orange-light-30': '#FFB74D',
  '--foundation-foundation-color-orange-light-40': '#FFA726',
  '--foundation-foundation-color-orange-light-50': '#FF9800',
  '--foundation-foundation-color-orange-light-60': '#FB8C00',
  '--foundation-foundation-color-orange-light-70': '#F57C00',
  '--foundation-foundation-color-orange-light-80': '#EF6C00',
  '--foundation-foundation-color-orange-light-90': '#E65100',
  '--foundation-foundation-color-orange-light-100': '#D84315',
  
  '--foundation-foundation-color-orange-dark-0': '#D84315',
  '--foundation-foundation-color-orange-dark-10': '#E65100',
  '--foundation-foundation-color-orange-dark-20': '#EF6C00',
  '--foundation-foundation-color-orange-dark-30': '#F57C00',
  '--foundation-foundation-color-orange-dark-40': '#FB8C00',
  '--foundation-foundation-color-orange-dark-50': '#FF9800',
  '--foundation-foundation-color-orange-dark-60': '#FFA726',
  '--foundation-foundation-color-orange-dark-70': '#FFB74D',
  '--foundation-foundation-color-orange-dark-80': '#FFCC80',
  '--foundation-foundation-color-orange-dark-90': '#FFE0B2',
  '--foundation-foundation-color-orange-dark-100': '#FFF3E0',
  
  // Red, Yellow, Purple 등 추가 색상들
  '--foundation-foundation-color-red-light-40': '#EF5350',
  '--foundation-foundation-color-red-dark-40': '#EF5350',
  '--foundation-foundation-color-yellow-light-40': '#FFEE58',
  '--foundation-foundation-color-yellow-dark-40': '#FFEE58',
  '--foundation-foundation-color-purple-light-40': '#AB47BC',
  '--foundation-foundation-color-purple-dark-40': '#AB47BC',
};

// Surface 컴포넌트에서 실제 사용하는 색상 조합들
const surfaceColorCombinations = [
  // System-01 Primary 배경/전경 조합 (라이트 테마)
  {
    name: 'System-01 Primary Button (Light)',
    background: '--foundation-foundation-color-blue-light-60',
    foreground: '--foundation-foundation-color-grey-light-100',
    context: 'Primary 버튼의 배경과 텍스트',
    usage: 'surface--background-primary-system01-1-rest + surface--foreground-primary-system01-oncolor'
  },
  
  // System-01 Primary 배경/전경 조합 (다크 테마)
  {
    name: 'System-01 Primary Button (Dark)',
    background: '--foundation-foundation-color-blue-dark-70',
    foreground: '--foundation-foundation-color-grey-dark-0',
    context: 'Primary 버튼의 배경과 텍스트 (다크 모드)',
    usage: 'surface--background-primary-system01-1-rest + surface--foreground-primary-system01-oncolor'
  },
  
  // System-01 Secondary 배경/전경 조합 (라이트 테마)
  {
    name: 'System-01 Secondary Surface (Light)',
    background: '--foundation-foundation-color-grey-light-96',
    foreground: '--foundation-foundation-color-grey-light-20',
    context: 'Secondary 표면의 배경과 텍스트',
    usage: 'surface--background-secondary-system01-1-rest + surface--foreground-secondary-system01-1-rest'
  },
  
  // System-01 Secondary 배경/전경 조합 (다크 테마)
  {
    name: 'System-01 Secondary Surface (Dark)',
    background: '--foundation-foundation-color-grey-dark-96',
    foreground: '--foundation-foundation-color-grey-dark-20',
    context: 'Secondary 표면의 배경과 텍스트 (다크 모드)',
    usage: 'surface--background-secondary-system01-1-rest + surface--foreground-secondary-system01-1-rest'
  },
  
  // System-02 Primary 배경/전경 조합 (라이트 테마)
  {
    name: 'System-02 Primary Button (Light)',
    background: '--foundation-foundation-color-green-light-50',
    foreground: '--foundation-foundation-color-grey-light-100',
    context: 'System-02 Primary 버튼',
    usage: 'surface--background-primary-system02-1-rest + surface--foreground-primary-system02-oncolor'
  },
  
  // System-02 Primary 배경/전경 조합 (다크 테마)
  {
    name: 'System-02 Primary Button (Dark)',
    background: '--foundation-foundation-color-green-dark-30',
    foreground: '--foundation-foundation-color-grey-dark-0',
    context: 'System-02 Primary 버튼 (다크 모드)',
    usage: 'surface--background-primary-system02-1-rest + surface--foreground-primary-system02-oncolor'
  },
  
  // System-03 Primary 배경/전경 조합 (라이트 테마)
  {
    name: 'System-03 Primary Button (Light)',
    background: '--foundation-foundation-color-orange-light-50',
    foreground: '--foundation-foundation-color-grey-light-100',
    context: 'System-03 Primary 버튼',
    usage: 'surface--background-primary-system03-1-rest + surface--foreground-primary-system03-oncolor'
  },
  
  // System-03 Primary 배경/전경 조합 (다크 테마)
  {
    name: 'System-03 Primary Button (Dark)',
    background: '--foundation-foundation-color-orange-dark-50',
    foreground: '--foundation-foundation-color-grey-dark-0',
    context: 'System-03 Primary 버튼 (다크 모드)',
    usage: 'surface--background-primary-system03-1-rest + surface--foreground-primary-system03-oncolor'
  },
  
  // CTA 색상 조합들
  {
    name: 'System-01 CTA Button (Light)',
    background: '--foundation-foundation-color-green-light-40',
    foreground: '--foundation-foundation-color-grey-light-100',
    context: 'CTA 버튼 (Call-to-Action)',
    usage: 'surface--background-cta-system01-1-rest + surface--foreground-cta-system01-oncolor'
  },
  
  {
    name: 'System-01 CTA Button (Dark)',
    background: '--foundation-foundation-color-green-dark-40',
    foreground: '--foundation-foundation-color-grey-dark-0',
    context: 'CTA 버튼 (다크 모드)',
    usage: 'surface--background-cta-system01-1-rest + surface--foreground-cta-system01-oncolor'
  },
  
  // 상태별 색상들
  {
    name: 'Error State (Light)',
    background: '--foundation-foundation-color-red-light-40',
    foreground: '--foundation-foundation-color-grey-light-100',
    context: '에러 상태 표시',
    usage: 'surface--background-error'
  },
  
  {
    name: 'Error State (Dark)',
    background: '--foundation-foundation-color-red-dark-40',
    foreground: '--foundation-foundation-color-grey-dark-0',
    context: '에러 상태 표시 (다크 모드)',
    usage: 'surface--background-error'
  },
  
  {
    name: 'Success State (Light)',
    background: '--foundation-foundation-color-green-light-40',
    foreground: '--foundation-foundation-color-grey-light-100',
    context: '성공 상태 표시',
    usage: 'surface--background-success'
  },
  
  {
    name: 'Success State (Dark)',
    background: '--foundation-foundation-color-green-dark-40',
    foreground: '--foundation-foundation-color-grey-dark-0',
    context: '성공 상태 표시 (다크 모드)',
    usage: 'surface--background-success'
  },
  
  {
    name: 'Warning State (Light)',
    background: '--foundation-foundation-color-yellow-light-40',
    foreground: '--foundation-foundation-color-grey-light-0',
    context: '경고 상태 표시',
    usage: 'surface--background-warning'
  },
  
  {
    name: 'Warning State (Dark)',
    background: '--foundation-foundation-color-yellow-dark-40',
    foreground: '--foundation-foundation-color-grey-dark-100',
    context: '경고 상태 표시 (다크 모드)',
    usage: 'surface--background-warning'
  },
  
  // 테두리 색상과 배경의 조합
  {
    name: 'System-01 Card Border (Light)',
    background: '--foundation-foundation-color-grey-light-100',
    foreground: '--foundation-foundation-color-grey-light-60',
    context: '카드 테두리 색상',
    usage: 'background: white + border-color: secondary-system01-1-rest'
  },
  
  {
    name: 'System-01 Card Border (Dark)',
    background: '--foundation-foundation-color-grey-dark-0',
    foreground: '--foundation-foundation-color-grey-dark-60',
    context: '카드 테두리 색상 (다크 모드)',
    usage: 'background: black + border-color: secondary-system01-1-rest'
  },
  
  // 호버 상태 색상 조합
  {
    name: 'System-01 Primary Hover (Light)',
    background: '--foundation-foundation-color-blue-light-70',
    foreground: '--foundation-foundation-color-grey-light-100',
    context: 'Primary 버튼 호버 상태',
    usage: 'surface--background-primary-system01-1-hovered'
  },
  
  {
    name: 'System-01 Primary Hover (Dark)',
    background: '--foundation-foundation-color-blue-dark-60',
    foreground: '--foundation-foundation-color-grey-dark-0',
    context: 'Primary 버튼 호버 상태 (다크 모드)',
    usage: 'surface--background-primary-system01-1-hovered'
  },
  
  // 비활성화 상태 색상 조합
  {
    name: 'System-01 Primary Disabled (Light)',
    background: '--foundation-foundation-color-blue-light-10',
    foreground: '--foundation-foundation-color-grey-light-80',
    context: 'Primary 버튼 비활성화 상태',
    usage: 'surface--background-primary-system01-1-disabled'
  },
  
  {
    name: 'System-01 Primary Disabled (Dark)',
    background: '--foundation-foundation-color-blue-dark-30',
    foreground: '--foundation-foundation-color-grey-dark-80',
    context: 'Primary 버튼 비활성화 상태 (다크 모드)',
    usage: 'surface--background-primary-system01-1-disabled'
  }
];

// 색상 대비 계산 함수들
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

function getWcagLevel(ratio) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA Large';
  return 'Fail';
}

function suggestImprovement(backgroundToken, foregroundToken, currentRatio) {
  const bgColor = colorTokens[backgroundToken];
  const fgColor = colorTokens[foregroundToken];
  
  if (!bgColor || !fgColor) return null;
  
  // 개선 제안 로직
  const suggestions = [];
  
  // 같은 색상 계열에서 더 대비가 좋은 색상 찾기
  const bgTokenParts = backgroundToken.split('-');
  const fgTokenParts = foregroundToken.split('-');
  
  // 배경이 라이트인 경우 전경을 더 어둡게
  if (bgTokenParts.includes('light')) {
    const darkerOptions = ['80', '90', '100'].filter(val => 
      colorTokens[foregroundToken.replace(/\d+$/, val)]
    );
    
    for (const option of darkerOptions) {
      const newToken = foregroundToken.replace(/\d+$/, option);
      const newColor = colorTokens[newToken];
      if (newColor) {
        const newRatio = getContrastRatio(bgColor, newColor);
        if (newRatio > currentRatio) {
          suggestions.push({
            token: newToken,
            color: newColor,
            ratio: newRatio,
            level: getWcagLevel(newRatio)
          });
        }
      }
    }
  }
  
  // 배경이 다크인 경우 전경을 더 밝게
  if (bgTokenParts.includes('dark')) {
    const lighterOptions = ['80', '90', '100'].filter(val => 
      colorTokens[foregroundToken.replace(/\d+$/, val)]
    );
    
    for (const option of lighterOptions) {
      const newToken = foregroundToken.replace(/\d+$/, option);
      const newColor = colorTokens[newToken];
      if (newColor) {
        const newRatio = getContrastRatio(bgColor, newColor);
        if (newRatio > currentRatio) {
          suggestions.push({
            token: newToken,
            color: newColor,
            ratio: newRatio,
            level: getWcagLevel(newRatio)
          });
        }
      }
    }
  }
  
  return suggestions.length > 0 ? suggestions[0] : null;
}

// 메인 검증 함수
function validateColors() {
  console.log('🎨 Lumir 디자인 시스템 색상 접근성 검증 시작...\n');
  console.log('📋 Surface 컴포넌트 실제 색상 조합 검증\n');
  
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = [];
  
  surfaceColorCombinations.forEach((combo, index) => {
    totalTests++;
    
    const bgColor = colorTokens[combo.background];
    const fgColor = colorTokens[combo.foreground];
    
    if (!bgColor || !fgColor) {
      console.log(`❌ [${index + 1}] ${combo.name}`);
      console.log(`   토큰을 찾을 수 없음: ${combo.background} 또는 ${combo.foreground}`);
      console.log('');
      failedTests.push({
        name: combo.name,
        issue: '토큰 누락',
        background: combo.background,
        foreground: combo.foreground
      });
      return;
    }
    
    const ratio = getContrastRatio(bgColor, fgColor);
    const level = getWcagLevel(ratio);
    const passed = level !== 'Fail';
    
    if (passed) {
      passedTests++;
      console.log(`✅ [${index + 1}] ${combo.name}`);
      console.log(`   대비율: ${ratio.toFixed(2)}:1 (${level})`);
      console.log(`   배경: ${bgColor} | 전경: ${fgColor}`);
      console.log(`   용도: ${combo.context}`);
    } else {
      console.log(`❌ [${index + 1}] ${combo.name}`);
      console.log(`   대비율: ${ratio.toFixed(2)}:1 (${level}) - 기준 미달`);
      console.log(`   배경: ${bgColor} | 전경: ${fgColor}`);
      console.log(`   용도: ${combo.context}`);
      
      // 개선 제안
      const suggestion = suggestImprovement(combo.background, combo.foreground, ratio);
      if (suggestion) {
        console.log(`   💡 개선 제안: ${suggestion.token} (${suggestion.color})`);
        console.log(`      개선 후 대비율: ${suggestion.ratio.toFixed(2)}:1 (${suggestion.level})`);
      }
      
      failedTests.push({
        name: combo.name,
        currentRatio: ratio.toFixed(2),
        level: level,
        background: combo.background,
        foreground: combo.foreground,
        bgColor: bgColor,
        fgColor: fgColor,
        context: combo.context,
        usage: combo.usage,
        suggestion: suggestion
      });
    }
    console.log('');
  });
  
  // 결과 요약
  console.log('📊 검증 결과 요약');
  console.log('='.repeat(50));
  console.log(`총 테스트: ${totalTests}개`);
  console.log(`✅ 통과: ${passedTests}개 (${((passedTests/totalTests)*100).toFixed(1)}%)`);
  console.log(`❌ 실패: ${failedTests.length}개 (${((failedTests.length/totalTests)*100).toFixed(1)}%)`);
  console.log('');
  
  if (failedTests.length > 0) {
    console.log('🔧 개선이 필요한 색상 조합:');
    failedTests.forEach((test, index) => {
      console.log(`${index + 1}. ${test.name}`);
      if (test.suggestion) {
        console.log(`   현재: ${test.currentRatio}:1 → 개선: ${test.suggestion.ratio.toFixed(2)}:1`);
      }
    });
    console.log('');
  }
  
  // WCAG 기준 안내
  console.log('📖 WCAG 2.1 접근성 기준:');
  console.log('   • AAA: 7:1 이상 (최고 등급)');
  console.log('   • AA: 4.5:1 이상 (일반 텍스트)');
  console.log('   • AA Large: 3:1 이상 (대형 텍스트, UI 컴포넌트)');
  console.log('   • Fail: 3:1 미만 (기준 미달)');
  console.log('');
  
  if (failedTests.length > 0) {
    console.log('❌ 일부 색상 조합이 접근성 기준을 만족하지 않습니다.');
    process.exit(1);
  } else {
    console.log('✅ 모든 색상 조합이 접근성 기준을 만족합니다!');
    process.exit(0);
  }
}

// 스크립트 실행
if (require.main === module) {
  validateColors();
}

module.exports = {
  validateColors,
  surfaceColorCombinations,
  colorTokens,
  getContrastRatio,
  getWcagLevel
}; 