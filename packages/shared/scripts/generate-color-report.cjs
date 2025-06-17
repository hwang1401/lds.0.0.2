#!/usr/bin/env node

/**
 * Lumir 디자인 시스템 색상 대비 검증 보고서 자동 생성
 * Surface 컴포넌트 실제 색상 조합 검증 결과를 마크다운으로 생성
 */

const fs = require('fs');
const path = require('path');

// validate-colors.cjs에서 함수들 가져오기
const { 
  surfaceColorCombinations, 
  colorTokens, 
  getContrastRatio, 
  getWcagLevel 
} = require('./validate-colors.cjs');

// 개선 제안 함수
function suggestImprovement(backgroundToken, foregroundToken, currentRatio) {
  const bgColor = colorTokens[backgroundToken];
  const fgColor = colorTokens[foregroundToken];
  
  if (!bgColor || !fgColor) return null;
  
  const suggestions = [];
  const bgTokenParts = backgroundToken.split('-');
  
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

// 색상 조합 검증 및 결과 수집
function validateAndCollectResults() {
  const results = [];
  let totalTests = 0;
  let passedTests = 0;
  
  surfaceColorCombinations.forEach((combo, index) => {
    totalTests++;
    
    const bgColor = colorTokens[combo.background];
    const fgColor = colorTokens[combo.foreground];
    
    if (!bgColor || !fgColor) {
      results.push({
        index: index + 1,
        name: combo.name,
        status: 'error',
        issue: '토큰 누락',
        background: combo.background,
        foreground: combo.foreground,
        context: combo.context,
        usage: combo.usage
      });
      return;
    }
    
    const ratio = getContrastRatio(bgColor, fgColor);
    const level = getWcagLevel(ratio);
    const passed = level !== 'Fail';
    
    if (passed) {
      passedTests++;
    }
    
    const suggestion = passed ? null : suggestImprovement(combo.background, combo.foreground, ratio);
    
    results.push({
      index: index + 1,
      name: combo.name,
      status: passed ? 'pass' : 'fail',
      ratio: ratio.toFixed(2),
      level: level,
      background: combo.background,
      foreground: combo.foreground,
      bgColor: bgColor,
      fgColor: fgColor,
      context: combo.context,
      usage: combo.usage,
      suggestion: suggestion
    });
  });
  
  return {
    results,
    summary: {
      total: totalTests,
      passed: passedTests,
      failed: totalTests - passedTests,
      passRate: ((passedTests / totalTests) * 100).toFixed(1)
    }
  };
}

// 마크다운 보고서 생성
function generateColorReport() {
  const { results, summary } = validateAndCollectResults();
  const timestamp = new Date().toLocaleString('ko-KR', { 
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  let report = `# 🎨 Lumir 디자인 시스템 색상 접근성 검증 보고서

> **자동 생성 보고서** | 최종 업데이트: ${timestamp}

## 📊 검증 결과 요약

| 항목 | 값 |
|------|-----|
| 총 테스트 수 | ${summary.total}개 |
| ✅ **통과** | **${summary.passed}개 (${summary.passRate}%)** |
| ❌ **실패** | **${summary.failed}개 (${(100 - parseFloat(summary.passRate)).toFixed(1)}%)** |

`;

  // WCAG 기준 설명
  report += `## 📖 WCAG 2.1 접근성 기준

| 등급 | 대비율 기준 | 적용 대상 |
|------|-------------|-----------|
| 🏆 **AAA** | 7:1 이상 | 최고 등급 접근성 |
| ✅ **AA** | 4.5:1 이상 | 일반 텍스트 표준 |
| ⚠️ **AA Large** | 3:1 이상 | 대형 텍스트, UI 컴포넌트 |
| ❌ **Fail** | 3:1 미만 | 접근성 기준 미달 |

`;

  // 통과한 색상 조합들
  const passedResults = results.filter(r => r.status === 'pass');
  if (passedResults.length > 0) {
    report += `## ✅ 통과한 색상 조합 (${passedResults.length}개)

| # | 이름 | 대비율 | 등급 | 용도 |
|---|------|--------|------|------|
`;
    
    passedResults.forEach(result => {
      const gradeEmoji = result.level === 'AAA' ? '🏆' : result.level === 'AA' ? '✅' : '⚠️';
      report += `| ${result.index} | ${result.name} | **${result.ratio}:1** | ${gradeEmoji} ${result.level} | ${result.context} |\n`;
    });
    
    report += '\n';
  }

  // 실패한 색상 조합들
  const failedResults = results.filter(r => r.status === 'fail');
  if (failedResults.length > 0) {
    report += `## ❌ 개선이 필요한 색상 조합 (${failedResults.length}개)

`;
    
    failedResults.forEach(result => {
      report += `### ${result.index}. ${result.name}

**현재 상태:**
- 대비율: **${result.ratio}:1** (❌ ${result.level})
- 용도: ${result.context}
- 사용법: \`${result.usage}\`

**색상 정보:**
\`\`\`css
/* 배경색 */
${result.background}: ${result.bgColor};

/* 전경색 */  
${result.foreground}: ${result.fgColor};
\`\`\`

`;

      if (result.suggestion) {
        report += `**💡 개선 제안:**
- 제안 토큰: \`${result.suggestion.token}\`
- 제안 색상: \`${result.suggestion.color}\`
- 개선 후 대비율: **${result.suggestion.ratio.toFixed(2)}:1** (✅ ${result.suggestion.level})

**개선된 CSS:**
\`\`\`css
/* 개선 전 */
color: var(${result.foreground});

/* 개선 후 */
color: var(${result.suggestion.token});
\`\`\`

`;
      }
      
      report += '---\n\n';
    });
  }

  // 에러가 있는 경우
  const errorResults = results.filter(r => r.status === 'error');
  if (errorResults.length > 0) {
    report += `## ⚠️ 토큰 오류 (${errorResults.length}개)

`;
    
    errorResults.forEach(result => {
      report += `### ${result.index}. ${result.name}

**오류:** ${result.issue}
- 배경 토큰: \`${result.background}\`
- 전경 토큰: \`${result.foreground}\`
- 용도: ${result.context}

`;
    });
  }

  // Surface 컴포넌트 색상 매핑 테이블
  report += `## 🎯 Surface 컴포넌트 색상 매핑

### 라이트/다크 테마별 토큰 체계

#### Grey 스케일 (라이트 ↔ 다크 반전)
| 라이트 토큰 | 라이트 색상 | 다크 토큰 | 다크 색상 |
|-------------|-------------|-----------|-----------|
| \`grey-light-100\` | \`#FFFFFF\` (흰색) | \`grey-dark-100\` | \`#000000\` (검정색) |
| \`grey-light-0\` | \`#F5F5F5\` | \`grey-dark-0\` | \`#0A0A0A\` |

#### Blue 스케일 (중간값 동일)
| 라이트 토큰 | 다크 토큰 | 색상 | 비고 |
|-------------|-----------|-------|------|
| \`blue-light-50\` | \`blue-dark-50\` | \`#2196F3\` | 같은 색상 |

### 시스템별 색상 조합

#### System-01 (Professional & Clean)
- **Primary:** Blue 계열
- **Secondary:** Grey 계열
- **CTA:** Green 계열

#### System-02 (Friendly & Bright)  
- **Primary:** Green 계열
- **Secondary:** Grey 계열
- **CTA:** Purple 계열

#### System-03 (Modern & Software)
- **Primary:** Orange 계열
- **Secondary:** Grey 계열
- **CTA:** Blue 계열

## 🔧 개발자 가이드

### 색상 조합 사용법

\`\`\`css
/* System-01 Primary 버튼 (라이트 테마) */
.button-primary-system01 {
  background-color: var(--foundation-foundation-color-blue-light-60);
  color: var(--foundation-foundation-color-grey-light-100);
}

/* System-01 Primary 버튼 (다크 테마) */
[data-theme="dark"] .button-primary-system01 {
  background-color: var(--foundation-foundation-color-blue-dark-70);
  color: var(--foundation-foundation-color-grey-dark-0);
}
\`\`\`

### 접근성 검증 명령어

\`\`\`bash
# 색상 검증만 실행
pnpm run validate:colors

# 보고서 생성
pnpm run report:colors

# 검증 + 보고서 통합 실행
pnpm run validate:all
\`\`\`

## 📚 참고 자료

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**📝 참고:** 이 보고서는 \`packages/shared/scripts/generate-color-report.cjs\`에 의해 자동 생성됩니다.
`;

  return report;
}

// 보고서 파일 저장
function saveReport() {
  const reportContent = generateColorReport();
  const outputPath = path.join(__dirname, '../../../docs/COLOR_VALIDATION_REPORT.md');
  
  try {
    fs.writeFileSync(outputPath, reportContent, 'utf8');
    console.log('✅ 색상 검증 보고서가 성공적으로 생성되었습니다!');
    console.log(`📄 위치: ${outputPath}`);
    console.log('');
    console.log('📊 요약:');
    
    const { summary } = validateAndCollectResults();
    console.log(`   총 테스트: ${summary.total}개`);
    console.log(`   ✅ 통과: ${summary.passed}개 (${summary.passRate}%)`);
    console.log(`   ❌ 실패: ${summary.failed}개 (${(100 - parseFloat(summary.passRate)).toFixed(1)}%)`);
    
  } catch (error) {
    console.error('❌ 보고서 생성 중 오류 발생:', error.message);
    process.exit(1);
  }
}

// 스크립트 실행
if (require.main === module) {
  saveReport();
}

module.exports = {
  generateColorReport,
  saveReport,
  validateAndCollectResults
}; 