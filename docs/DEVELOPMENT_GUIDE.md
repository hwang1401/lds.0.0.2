# Lumir Design System - 개발 가이드

## 🚀 빠른 시작

### 1️⃣ 설치 및 초기 설정

```bash
# 전체 의존성 설치 (pnpm 워크스페이스 사용)
pnpm install

# Shared 패키지 빌드 (필수!)
pnpm run build:shared
```

### 2️⃣ 스토리북 실행

```bash
# 자동으로 shared 빌드 후 스토리북 실행
pnpm run storybook

# 브라우저에서 http://localhost:6006 열림
```

## 📦 패키지 매니저 정책

### ✅ **현재 상태 (완전히 최적화됨)**
- **패키지 매니저**: 완전 pnpm 통일 (npm 명령어 제거)
- **의존성 관리**: 루트 레벨로 통합 (중복 제거)
- **빌드 시스템**: Turbo 최적화 (캐싱 및 병렬 처리)
- **설정 파일**: 공통화 (중복 제거)
- **Vercel 배포**: 최적화된 설정

### ⚠️ **주의사항**
1. **의존성 설치**: 반드시 루트에서 `pnpm install`
2. **개별 lock 파일 금지**: workspace 통합 관리
3. **공통 설정 사용**: utils 패키지의 공통 파일 활용

## 🛠️ 주요 명령어

### **스토리북 관련**
```bash
pnpm run storybook              # 최적화된 스토리북 실행
pnpm run storybook:build        # 배포용 스토리북 빌드
pnpm run storybook:dev          # 개발 모드 (watch 포함)
```

### **빌드 관련**
```bash
pnpm run build                  # Turbo로 전체 빌드 (병렬)
pnpm run build:shared           # shared 패키지만 빌드
pnpm run build:systems          # system 패키지들만 빌드
pnpm run build:all              # storybook 제외 전체 빌드
pnpm run dev:shared             # shared watch 모드
```

### **의존성 관리**
```bash
pnpm run fresh:install          # 완전 정리 후 재설치
pnpm run clean                  # node_modules 정리
pnpm run clean:deps             # 캐시 포함 완전 정리
```

## 🔧 문제 해결

### **스토리북 무한로딩**
```bash
# shared 패키지가 빌드 안된 경우
pnpm run build:shared
cd packages/storybook
pnpm run storybook
```

### **의존성 오류**
```bash
# 캐시 정리 후 재설치
pnpm run clean:deps
pnpm install
pnpm run build:shared
```

### **버전 충돌**
```bash
# 스토리북 버전이 맞지 않는 경우
cd packages/storybook
pnpm install  # package.json 버전에 맞춰 재설치
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
2. `pnpm run build:shared` - shared 빌드
3. `pnpm run storybook` - 스토리북 실행

### **일상 개발**
1. `pnpm run dev:shared` - shared watch 모드 (별도 터미널)
2. `pnpm run storybook` - 스토리북 실행 (별도 터미널)

### **배포 전**
1. `pnpm run build` - 전체 빌드
2. `pnpm run storybook:build` - 스토리북 빌드

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