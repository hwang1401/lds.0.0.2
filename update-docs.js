#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 체인지로그를 파싱하여 업데이트 문서를 자동 생성하는 스크립트
 */

// 패키지 정보 - 새로운 패키지 구조로 업데이트
const packages = [
  {
    name: 'lumir-design-shared',
    path: './packages/shared/CHANGELOG.md'
  },
  {
    name: 'lumir-design-system-01', 
    path: './packages/system-01/CHANGELOG.md'
  },
  {
    name: 'lumir-design-system-02', 
    path: './packages/system-02/CHANGELOG.md'
  }
];

// 체인지로그 파싱 함수
function parseChangelog(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    const versions = [];
    let currentVersion = null;
    let currentContent = [];
    
    for (const line of lines) {
      // 버전 헤더 감지 (## x.x.x)
      const versionMatch = line.match(/^## (\d+\.\d+\.\d+)/);
      if (versionMatch) {
        // 이전 버전 저장
        if (currentVersion) {
          versions.push({
            version: currentVersion,
            content: currentContent.join('\n').trim()
          });
        }
        
        // 새 버전 시작
        currentVersion = versionMatch[1];
        currentContent = [];
      } else if (currentVersion) {
        currentContent.push(line);
      }
    }
    
    // 마지막 버전 저장
    if (currentVersion) {
      versions.push({
        version: currentVersion,
        content: currentContent.join('\n').trim()
      });
    }
    
    return versions;
  } catch (error) {
    console.error(`체인지로그 파싱 실패: ${filePath}`, error);
    return [];
  }
}

// 업데이트 문서 생성 함수
function generateUpdateDoc() {
  console.log('📋 업데이트 문서 생성 중...');
  
  // 모든 패키지의 체인지로그 수집
  const allVersions = [];
  
  for (const pkg of packages) {
    const versions = parseChangelog(pkg.path);
    for (const version of versions) {
      allVersions.push({
        package: pkg.name,
        ...version
      });
    }
  }
  
  // 버전별로 그룹화 (같은 날짜에 배포된 버전들)
  const versionGroups = {};
  
  for (const item of allVersions) {
    const key = item.version;
    if (!versionGroups[key]) {
      versionGroups[key] = [];
    }
    versionGroups[key].push(item);
  }
  
  // 최신 버전 정보 추출
  const latestVersions = {};
  for (const pkg of packages) {
    const versions = parseChangelog(pkg.path);
    if (versions.length > 0) {
      latestVersions[pkg.name] = versions[0];
    }
  }
  
  // 현재 날짜
  const today = new Date().toISOString().split('T')[0];
  
  // 업데이트 문서 템플릿
  const updateDoc = `# 📋 Lumir Design System 업데이트 내역

이 문서는 Lumir Design System의 모든 패키지 업데이트 내역을 시간순으로 정리한 종합 가이드입니다.

*마지막 업데이트: ${today}*

## 📅 최신 업데이트

### 🎉 최신 버전 (${today})

**패키지 버전:**
${packages.map(pkg => {
  const latest = latestVersions[pkg.name];
  return `- \`${pkg.name}\`: v${latest ? latest.version : 'N/A'}`;
}).join('\n')}

${Object.values(latestVersions)[0]?.content || '업데이트 내용을 확인할 수 없습니다.'}

---

## 📚 전체 버전 히스토리

${allVersions.slice(0, 10).map(item => `
### ${item.package} v${item.version}

${item.content}

---
`).join('')}

## 🔗 관련 링크

- [Shared 패키지 체인지로그](./packages/shared/CHANGELOG.md)
- [System-01 패키지 체인지로그](./packages/system-01/CHANGELOG.md)
- [System-02 패키지 체인지로그](./packages/system-02/CHANGELOG.md)
- [디자인 시스템 가이드](./docs/디자인시스템%20가이드/overview.md)

---

## 📋 업데이트 확인 방법

### 1. 패키지 버전 확인
\`\`\`bash
npm list @lumir/shared @lumir/system-01 @lumir/system-02
\`\`\`

### 2. 최신 버전 설치
\`\`\`bash
npm install @lumir/shared@latest @lumir/system-01@latest @lumir/system-02@latest
\`\`\`

### 3. 체인지로그 확인
각 패키지의 \`CHANGELOG.md\` 파일에서 상세한 변경사항을 확인할 수 있습니다.

---

## 🚨 중요 공지

### Breaking Changes 알림
Major 버전 업데이트 시에는 반드시 마이그레이션 가이드를 확인하고 테스트를 진행해주세요.

### 지원 정책
- **LTS 버전**: 현재 Major 버전에서 2개 버전 이전까지 지원
- **보안 업데이트**: 모든 지원 버전에 대해 제공
- **기능 업데이트**: 최신 버전에만 제공

---

*이 문서는 새로운 버전이 릴리즈될 때마다 자동으로 업데이트됩니다.*`;

  // 파일 저장
  const outputPath = './docs/UPDATES.md';
  fs.writeFileSync(outputPath, updateDoc, 'utf8');
  
  console.log(`✅ 업데이트 문서가 생성되었습니다: ${outputPath}`);
  console.log(`📦 처리된 패키지: ${packages.map(p => p.name).join(', ')}`);
  console.log(`📋 총 버전 수: ${allVersions.length}`);
}

// 스크립트 실행
if (require.main === module) {
  generateUpdateDoc();
}

module.exports = { generateUpdateDoc, parseChangelog }; 