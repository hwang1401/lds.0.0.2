# Lumir Design System - 개발 가이드

## 🚀 빠른 시작

### 1️⃣ 설치 및 초기 설정

```bash
# 전체 의존성 설치 (pnpm 워크스페이스 사용)
pnpm install

# Shared 패키지 빌드 (필수!)
npm run build:shared
```

### 2️⃣ 스토리북 실행

```bash
# 자동으로 shared 빌드 후 스토리북 실행
npm run storybook

# 브라우저에서 http://localhost:6006 열림
```

## 📦 패키지 매니저 정책

### 🔄 **현재 상태 (혼재)**
- **루트**: pnpm workspace 사용
- **개별 패키지**: npm/npx 혼용
- **의존성 설치**: pnpm만 사용
- **스크립트 실행**: npm run 사용

### ⚠️ **주의사항**
1. **의존성 설치**: 반드시 루트에서 `pnpm install`
2. **개별 패키지에서 npm install 금지**: workspace 의존성 오류 발생
3. **shared 패키지**: 스토리북 실행 전 반드시 빌드 필요

## 🛠️ 주요 명령어

### **스토리북 관련**
```bash
npm run storybook              # shared 빌드 + 스토리북 실행
npm run storybook:build        # shared 빌드 + 스토리북 빌드
```

### **빌드 관련**
```bash
npm run build:shared           # shared 패키지만 빌드
npm run dev:shared             # shared 패키지 watch 모드
npm run build                  # 전체 패키지 빌드
```

### **의존성 관리**
```bash
npm run fresh:install          # 완전 정리 후 재설치
npm run clean                  # node_modules 정리
npm run clean:deps             # 캐시 포함 완전 정리
```

## 🔧 문제 해결

### **스토리북 무한로딩**
```bash
# shared 패키지가 빌드 안된 경우
npm run build:shared
cd packages/storybook
npm run storybook
```

### **의존성 오류**
```bash
# 캐시 정리 후 재설치
npm run clean:deps
pnpm install
npm run build:shared
```

### **버전 충돌**
```bash
# 스토리북 버전이 맞지 않는 경우
cd packages/storybook
npm install  # package.json 버전에 맞춰 재설치
```

## 📁 프로젝트 구조

```
lumir-design-system/
├── packages/
│   ├── shared/          # Foundation + Primitives (먼저 빌드 필요)
│   ├── system-01/       # Clean & Efficient 테마
│   ├── system-02/       # Modern & Friendly 테마
│   └── storybook/       # 문서화 (shared 의존성)
├── package.json         # 워크스페이스 루트
├── pnpm-workspace.yaml  # pnpm 워크스페이스 설정
└── pnpm-lock.yaml       # pnpm 락 파일
```

## ⚡ 개발 워크플로우

### **신규 개발자**
1. `pnpm install` - 의존성 설치
2. `npm run build:shared` - shared 빌드
3. `npm run storybook` - 스토리북 실행

### **일상 개발**
1. `npm run dev:shared` - shared watch 모드 (별도 터미널)
2. `npm run storybook` - 스토리북 실행 (별도 터미널)

### **배포 전**
1. `npm run build` - 전체 빌드
2. `npm run storybook:build` - 스토리북 빌드

## 🐛 알려진 문제들

### **PowerShell && 오류**
- Windows PowerShell에서 `&&` 연산자 지원 안됨
- 스크립트에서 개별 명령어로 분리하여 해결

### **workspace 의존성**
- `npm install`로 개별 패키지 설치 시 오류
- 반드시 루트에서 `pnpm install` 사용

### **스토리북 버전**
- 현재 8.6.14로 고정
- 글로벌 설치 버전과 충돌 가능성

---

💡 **문제 발생 시**: 이 가이드의 문제 해결 섹션을 먼저 확인하세요! 