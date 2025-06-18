# 📦 Lumir Design System NPM 배포 가이드

## 🎯 배포 개요

이 가이드는 Lumir Design System 패키지들을 NPM에 배포하는 방법을 설명합니다.

## 📋 배포 대상 패키지

- `@lumir/shared` - Foundation 토큰 및 프리미티브 컴포넌트
- `@lumir/system-01` - System-01 컴포넌트 라이브러리  
- `@lumir/system-02` - System-02 컴포넌트 라이브러리

---

## 🚀 배포 전 준비사항

### 1. NPM 계정 설정

```bash
# NPM 로그인
npm login

# 로그인 확인
npm whoami

# 조직 멤버십 확인 (필요한 경우)
npm org ls @lumir
```

### 2. 버전 관리

#### 패키지 버전 업데이트
```bash
# 루트에서 모든 패키지 버전 업데이트
pnpm version patch --workspace-root

# 개별 패키지 버전 업데이트
cd packages/shared && npm version patch
cd packages/system-01 && npm version patch  
cd packages/system-02 && npm version patch
```

#### 버전 정책
- **patch** (1.0.1): 버그 수정
- **minor** (1.1.0): 새 기능 추가 (하위 호환)
- **major** (2.0.0): 주요 변경사항 (하위 호환 불가)

### 3. 빌드 확인

```bash
# 모든 패키지 빌드
pnpm run build

# 빌드 결과 확인
ls packages/shared/dist/
ls packages/system-01/dist/
ls packages/system-02/dist/
```

---

## 📤 배포 프로세스

### 1. 자동 배포 (권장)

#### 배포 스크립트 실행
```bash
# 모든 패키지 배포
pnpm run publish:all

# 개별 패키지 배포
pnpm run publish:shared
pnpm run publish:system-01
pnpm run publish:system-02
```

### 2. 수동 배포

#### Shared 패키지 배포
```bash
cd packages/shared

# 빌드
pnpm run build

# 배포 전 확인
npm pack
tar -tzf lumir-shared-*.tgz

# 배포
npm publish --access public

cd ../..
```

#### System-01 패키지 배포
```bash
cd packages/system-01

# 빌드  
pnpm run build

# 배포 전 확인
npm pack
tar -tzf lumir-system-01-*.tgz

# 배포
npm publish --access public

cd ../..
```

#### System-02 패키지 배포
```bash
cd packages/system-02

# 빌드
pnpm run build

# 배포 전 확인
npm pack
tar -tzf lumir-system-02-*.tgz

# 배포
npm publish --access public

cd ../..
```

---

## 🔧 배포 설정

### 1. 루트 package.json에 배포 스크립트 추가

```json
{
  "scripts": {
    "publish:shared": "cd packages/shared && npm run build && npm publish --access public",
    "publish:system-01": "cd packages/system-01 && npm run build && npm publish --access public",
    "publish:system-02": "cd packages/system-02 && npm run build && npm publish --access public",
    "publish:all": "pnpm run publish:shared && pnpm run publish:system-01 && pnpm run publish:system-02",
    "version:patch": "pnpm version patch --workspace-root && cd packages/shared && npm version patch && cd ../system-01 && npm version patch && cd ../system-02 && npm version patch",
    "version:minor": "pnpm version minor --workspace-root && cd packages/shared && npm version minor && cd ../system-01 && npm version minor && cd ../system-02 && npm version minor",
    "version:major": "pnpm version major --workspace-root && cd packages/shared && npm version major && cd ../system-01 && npm version major && cd ../system-02 && npm version major"
  }
}
```

### 2. 각 패키지의 publishConfig 확인

#### packages/shared/package.json
```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "files": [
    "dist",
    "foundation.json",
    "icons",
    "README.md"
  ]
}
```

#### packages/system-01/package.json
```json
{
  "publishConfig": {
    "access": "public", 
    "registry": "https://registry.npmjs.org/"
  },
  "files": [
    "dist",
    "README.md"
  ]
}
```

#### packages/system-02/package.json
```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "files": [
    "dist", 
    "README.md"
  ]
}
```

---

## ✅ 배포 체크리스트

### 배포 전 확인사항

- [ ] 모든 테스트 통과
- [ ] 빌드 성공
- [ ] 버전 번호 업데이트
- [ ] CHANGELOG.md 업데이트
- [ ] README.md 업데이트
- [ ] 의존성 버전 확인
- [ ] 라이선스 파일 포함
- [ ] .npmignore 설정 확인

### 배포 후 확인사항

- [ ] NPM에서 패키지 확인
- [ ] 다운로드 테스트
- [ ] 문서 사이트 업데이트
- [ ] GitHub Release 생성
- [ ] 팀에 배포 알림

---

## 🔍 배포 후 검증

### 1. 패키지 설치 테스트

```bash
# 새로운 디렉토리에서 테스트
mkdir test-lumir && cd test-lumir
npm init -y

# 패키지 설치
npm install @lumir/shared @lumir/system-01 @lumir/system-02

# 설치 확인
npm list @lumir/shared @lumir/system-01 @lumir/system-02
```

### 2. 기본 사용 테스트

```javascript
// test.js
const { Button } = require('@lumir/system-01');
const { Text } = require('@lumir/shared');

console.log('✅ 패키지 로드 성공');
```

### 3. TypeScript 타입 확인

```typescript
// test.ts
import { Button } from '@lumir/system-01';
import { Text } from '@lumir/shared';
import type { ButtonProps } from '@lumir/system-01';

const button: ButtonProps = {
  variant: 'filled',
  intent: 'primary',
  children: 'Test'
};

console.log('✅ TypeScript 타입 정상');
```

---

## 🚨 문제 해결

### 1. 배포 권한 오류

```bash
# 조직 권한 확인
npm org ls @lumir

# 패키지 권한 확인  
npm access ls-packages @lumir

# 권한 부여 (관리자만)
npm access grant read-write @lumir:developers @lumir/shared
```

### 2. 버전 충돌

```bash
# 현재 버전 확인
npm view @lumir/shared version

# 강제 버전 업데이트
npm version patch --force
```

### 3. 빌드 오류

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 정리
npm cache clean --force

# 다시 빌드
pnpm run build
```

### 4. 파일 누락

```bash
# 배포될 파일 목록 확인
npm pack --dry-run

# .npmignore 확인
cat .npmignore

# files 필드 확인
grep -A 10 '"files"' package.json
```

---

## 📊 배포 모니터링

### 1. NPM 통계 확인

```bash
# 다운로드 통계
npm view @lumir/shared downloads

# 버전 히스토리
npm view @lumir/shared versions --json
```

### 2. 사용자 피드백 모니터링

- GitHub Issues 모니터링
- NPM 리뷰 확인
- 커뮤니티 피드백 수집

---

## 🔄 지속적 배포 (CI/CD)

### GitHub Actions 설정

```yaml
# .github/workflows/publish.yml
name: Publish to NPM

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build packages
        run: pnpm run build
        
      - name: Publish packages
        run: pnpm run publish:all
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 📝 릴리즈 노트 템플릿

### CHANGELOG.md 업데이트

```markdown
# Changelog

## [1.0.6] - 2024-01-XX

### Added
- SegmentButton 컴포넌트 추가
- System-02 지원 확장

### Changed  
- Button 컴포넌트 성능 개선
- TypeScript 타입 정의 개선

### Fixed
- Icon 컴포넌트 렌더링 이슈 수정
- CSS 스타일 우선순위 문제 해결

### Breaking Changes
- 없음
```

---

## 🎉 배포 완료

배포가 완료되면 다음을 확인하세요:

1. ✅ NPM에서 패키지 확인: https://www.npmjs.com/package/@lumir/shared
2. ✅ 설치 가이드 업데이트
3. ✅ 문서 사이트 배포
4. ✅ 팀 공지

**축하합니다! Lumir Design System이 성공적으로 배포되었습니다! 🚀** 