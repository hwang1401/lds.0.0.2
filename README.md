# 🎨 Lumir Design System (LDS)

**프리미티브 컴포넌트와 시멘틱 토큰으로 구축하는 차세대 디자인 시스템**

## 🚀 배포 정보

- **스토리북**: [https://lumir-design-system.vercel.app](https://lumir-design-system.vercel.app)
- **빌드 상태**: ✅ 안정적 운영
- **GitHub Actions**: ✅ CI/CD 파이프라인 완료

## ✨ 핵심 특징

- 🚀 **Zero Global CSS**: global.css 없이도 완전한 디자인 구현
- 🧩 **프리미티브 아키텍처**: Box, Stack, Text, Icon으로 모든 레이아웃 구성
- 🎨 **시멘틱 토큰**: CSS 변수 기반 일관된 디자인 시스템
- ⚡ **최적화된 성능**: 트리쉐이킹 및 CSS 모듈 지원
- 🔧 **TypeScript**: 완전한 타입 지원 + 295개 아이콘

## 📦 패키지 구조

```
lumir-design-system/
├── packages/
│   ├── shared/          # 🌟 Foundation 토큰 + Primitives 컴포넌트
│   ├── system-01/       # 🎨 Clean & Efficient 테마
│   ├── system-02/       # 🌿 Modern & Friendly 테마  
│   ├── storybook/       # 📚 통합 스토리북 문서
│   └── utils/           # 🔧 공통 빌드 유틸리티
└── docs/                # 📋 설계 문서
```

## 🚀 실행 방법

```bash
# 1. 프로젝트 클론 및 설치
git clone <repository-url>
cd lumir-design-system
pnpm install

# 2. 스토리북 실행
pnpm run storybook
# 브라우저에서 http://localhost:6006 자동 열림

# 3. 전체 빌드
pnpm run build
```

## 🛠️ 주요 명령어

```bash
# 개발
pnpm run storybook              # 스토리북 실행 (shared 자동 빌드)
pnpm run dev:shared             # shared 패키지 watch 모드

# 빌드
pnpm run build                  # 전체 빌드 (shared → systems → storybook)
pnpm run build:shared           # shared 패키지만 빌드
pnpm run build:systems          # system 패키지들만 빌드

# 색상 접근성 검증
pnpm run validate:colors        # 색상 대비 검증
pnpm run report:colors          # 자동 보고서 생성
pnpm run validate:all           # 검증 + 보고서 통합 실행

# 관리
pnpm run clean                  # node_modules 정리
pnpm run fresh:install          # 완전 재설치
```

## 🎯 사용법 예시

### 기본 컴포넌트 사용

```jsx
import { Box, Stack, Text, Button, Icon } from '@lumir/shared';

function App() {
  return (
    <Box padding="lg" backgroundColor="secondary-1">
      <Stack direction="column" spacing="md">
        <Text variant="heading-1" color="primary-foreground-1">
          환영합니다!
        </Text>
        <Button variant="filled" colorScheme="primary" leftIcon="star">
          시작하기
        </Button>
      </Stack>
    </Box>
  );
}
```

### 프리미티브 아키텍처

```jsx
// ❌ 기존 방식 - CSS 클래스 + 하드코딩
<div className="container flex flex-col gap-4 p-6">
  <h1 className="text-2xl font-bold">제목</h1>
  <button style={{ backgroundColor: '#007ACC' }}>버튼</button>
</div>

// ✅ LDS 방식 - 프리미티브 + 시멘틱 토큰
<Box padding="lg" backgroundColor="secondary-1">
  <Stack direction="column" spacing="md">
    <Text variant="heading-1" color="primary-foreground-1">제목</Text>
    <Button variant="filled" colorScheme="primary">버튼</Button>
  </Stack>
</Box>
```

## 📚 문서 및 가이드

- **📖 [컴포넌트 문서](https://lumir-design-system.vercel.app)**: 스토리북에서 모든 컴포넌트 확인
- **🔧 [개발 가이드](./docs/DEVELOPMENT_GUIDE.md)**: 설치, 실행, 문제해결
- **🏗️ [아키텍처 가이드](./docs/LUMIR_DESIGN_SYSTEM_ARCHITECTURE.md)**: 설계 원칙 및 구조
- **🎨 [색상 검증 보고서](./docs/COLOR_VALIDATION_REPORT.md)**: 자동 생성되는 접근성 검증 결과

## ⚠️ 중요 사항

1. **패키지 매니저**: `pnpm` 사용 필수 (workspace 환경)
2. **의존성 설치**: 반드시 루트에서 `pnpm install`
3. **빌드 순서**: shared → system → storybook (자동화됨)

## 🔧 문제 해결

스토리북이 실행되지 않으면:

```bash
pnpm run build:shared
pnpm run storybook
```

기타 문제는 [개발 가이드](./docs/DEVELOPMENT_GUIDE.md) 참조

---

**💡 새로운 개발자**: `pnpm install → pnpm run storybook` 이면 끝! 