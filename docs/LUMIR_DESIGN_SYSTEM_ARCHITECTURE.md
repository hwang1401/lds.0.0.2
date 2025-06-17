# Lumir Design System - 아키텍처 및 구조 분석

## 📋 프로젝트 개요

### 🎯 목적
- **멀티 시스템 디자인 시스템**: 하나의 기반에서 여러 시스템 파생
- **토큰 기반 설계**: Foundation → Semantic → Component 계층 구조
- **반응형 우선**: 5개 브레이크포인트 지원
- **타입 안전성**: TypeScript 기반 완전한 타입 정의

### 🏗️ 전체 구조
```
lumir-design-system/
├── packages/
│   ├── shared/       # 🌟 Foundation + Primitives
│   ├── system-01/    # 🎨 Clean & Efficient (파란색)
│   ├── system-02/    # 🌿 Modern & Friendly (초록색)
│   └── storybook/    # 📚 문서화
├── package.json      # 워크스페이스 루트
├── pnpm-workspace.yaml
├── turbo.json
└── vercel.json
```

## 🏛️ 아키텍처 및 설계 철학

### 📊 계층적 토큰 시스템 (실제 구현)
```
Foundation Tokens (기초)
    ↓ 직접 매핑 (var(--foundation-foundation-color-blue-light-60))
Primitive CSS Classes (프리미티브별)
    ↓ 타입 정의를 통한 시스템별 네이밍
Component Interface (컴포넌트별)
    ↓ 실제 사용 (primary-system01-1-rest)
Runtime Styles (런타임)
```

**주요 특징:**
- **Semantic 토큰은 파일로만 존재**: `semantic.json` 파일이 있지만 실제로는 참조되지 않음
- **Foundation → CSS 직접 연결**: 중간 단계 없이 Foundation 토큰이 바로 CSS Variables로 변환
- **프리미티브에서 시스템별 네이밍**: Surface 같은 프리미티브에서 시스템별 토큰명(`primary-system01-1-rest`)을 제공하지만 실제로는 Foundation 색상에 직접 매핑

### 🎯 멀티 시스템 아키텍처
```
                    @lumir/shared
                    /            \
            @lumir/system-01    @lumir/system-02
            (Clean & Efficient) (Modern & Friendly)
                    \            /
                     @lumir/storybook
```

### 🔑 핵심 설계 원칙
1. **Token-First**: 모든 스타일 값이 토큰에서 파생
2. **Composition over Inheritance**: Primitive 조합으로 복잡한 컴포넌트 구성
3. **System Agnostic Primitives**: Shared는 시스템 중립적
4. **Progressive Enhancement**: 기본값 → 반응형 → 상태별 → 시스템별

## 📦 패키지별 상세 분석

### 🌟 packages/shared - 핵심 기반 시스템

#### 🗂️ 디렉토리 구조
```
packages/shared/
├── foundation.json           # 🎨 기초 토큰 (830줄)
├── src/
│   ├── index.ts             # 메인 export
│   ├── primitives/          # 기본 UI 요소
│   │   ├── Text/           # 타이포그래피
│   │   ├── Icon/           # 아이콘 시스템
│   │   ├── Surface/        # 색상과 배경
│   │   ├── Frame/          # 레이아웃
│   │   ├── Sizing/         # 크기 제어
│   │   └── ...
│   ├── types/              # 타입 정의
│   │   ├── responsive.ts   # 반응형 타입
│   │   └── ...
│   └── utils/              # 유틸리티
├── scripts/                # 빌드 스크립트
└── dist/                   # 빌드 결과물
```

#### 🎨 Foundation Token 시스템 (실제 작동)
```json
{
  "foundation": {
    "color": {
      "grey": {
        "light": { "0": "#000000", "100": "#FFFFFF" },
        "dark": { "0": "#FFFFFF", "100": "#000000" }
      },
      "blue": { "light": {...}, "dark": {...} },
      "transparent": { 
        "light": { "100": "rgba(0,0,0,0.12)" }
      }
    }
  }
}
```

#### 🎯 프리미티브 토큰 매핑 방식
```css
/* Surface.module.css 실제 구현 */
:global([data-theme="light"]) .surface--background-primary-system01-1-rest { 
  background-color: var(--foundation-foundation-color-blue-light-60); 
}
:global([data-theme="dark"]) .surface--background-primary-system01-1-rest { 
  background-color: var(--foundation-foundation-color-blue-dark-50); 
}
```

**실제 작동 방식:**
1. Foundation JSON → CSS Variables 변환
2. 프리미티브에서 시스템별 토큰명 타입 정의
3. CSS에서 토큰명 → Foundation Variables 직접 매핑
4. 컴포넌트에서 타입 안전한 토큰명 사용

#### 📝 Text Primitive - 타이포그래피 계층
```typescript
type TextVariant = 
  | 'hero-1'    // 48px - 대형 제목
  | 'hero-2'    // 36px - 중형 제목  
  | 'title-1'   // 30px - 페이지 제목
  | 'title-2'   // 24px - 섹션 제목
  | 'heading-1' // 20px - 서브 헤딩
  | 'body-1'    // 16px - 본문
  | 'body-2'    // 14px - 작은 본문
  | 'label-1'   // 14px - 라벨
  | 'caption-1' // 12px - 캡션
```

#### 🔄 반응형 시스템
```typescript
// 5개 브레이크포인트
type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'desktopL' | 'desktopXL';

// 사용 예시
<Text 
  variant={{ 
    mobile: 'body-2',      // ~479px
    tablet: 'body-1',      // 480px~639px
    desktop: 'title-2',    // 640px~1023px
    desktopL: 'title-1',   // 1024px~1365px
    desktopXL: 'hero-2'    // 1366px+
  }}
/>
```

#### 🎯 Icon 시스템
```
packages/shared/src/primitives/Icon/
├── Icon.tsx                    # 메인 컴포넌트
├── generated/                  # 자동 생성 (293개)
│   ├── index.ts               # 모든 아이콘 export
│   ├── SearchIcon.tsx         # SVG → TSX 변환
│   └── ...
```

### 🎨 packages/system-01 - Clean & Efficient

#### 🎯 시스템 특성
- **도메인**: 항공우주, 백오피스
- **색상**: 파란색 기반 Primary
- **스타일**: 효율적, 밀도 높은 UI
- **패딩**: 최소한의 여백

#### 🗂️ 구조 (실제)
```
packages/system-01/
├── semantic.json             # 시스템별 토큰 (840줄) - 현재 미사용
├── src/
│   ├── index.ts             # 메인 export
│   └── components/compounds/
│       ├── Button/          # 버튼 컴포넌트
│       ├── Card/            # 카드 컴포넌트
│       ├── Badge/           # 뱃지 컴포넌트
│       └── ... (14개 컴포넌트)
├── scripts/
│   └── build-tokens.js      # 토큰 빌드 (현재 semantic 토큰 생성만)
└── dist/                    # 빌드 결과물
```

**현재 상태:**
- `semantic.json` 파일은 생성되지만 실제 컴포넌트에서 참조되지 않음
- 모든 스타일링은 `@lumir/shared`의 프리미티브를 통해 처리
- Foundation 토큰이 바로 프리미티브 CSS로 연결됨

### 🌿 packages/system-02 - Modern & Friendly

#### 🎯 시스템 특성
- **도메인**: 일반 사용자
- **색상**: 초록색 기반 Primary
- **스타일**: 친근함, 여유로운 UI
- **패딩**: 더 큰 여백

#### 🔍 System-01과의 차이점
```typescript
// System-01: 밀도 높은 패딩
getPadding = () => {
  case 'xs': return 'xs';    // 최소
  case 'md': return 'sm';    // 적당
}

// System-02: 여유로운 패딩
getPadding = () => {
  case 'xs': return 'sm';    // xs → sm
  case 'md': return 'md';    // sm → md
}
```

### 📚 packages/storybook - 문서화 시스템

#### 🗂️ Stories 구조
```
packages/storybook/stories/
├── 03-Shared/           # Primitives 문서화
├── 04-System-01/        # System-01 컴포넌트
├── 05-System-02/        # System-02 컴포넌트
└── 06-Universal/        # 범용 컴포넌트
```

#### ⚙️ Storybook 설정
```javascript
// .storybook/main.js
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: { name: '@storybook/react-vite' },
  
  viteFinal: async (config) => {
    // 실시간 개발을 위한 alias
    config.resolve.alias = {
      '@lumir/shared': path.resolve(__dirname, '../../shared/src/index.ts'),
      '@lumir/system-01': path.resolve(__dirname, '../../system-01/src/index.ts'),
      '@lumir/system-02': path.resolve(__dirname, '../../system-02/src/index.ts'),
    };
  }
};
```

## 🔧 빌드 시스템 (실제 작동)

### 📦 패키지 매니저: pnpm workspace
```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
```

```json
// 의존성 정의
{
  "dependencies": {
    "@lumir/shared": "workspace:*",     // 로컬 패키지 참조
    "@lumir/system-01": "workspace:*",
    "@lumir/system-02": "workspace:*"
  }
}
```

### 🔄 빌드 순서 (실제)
```
1. shared 빌드
   foundation.json → CSS variables → primitives CSS

2. system-01/02 빌드  
   semantic.json 생성 (미사용) → 컴포넌트 빌드

3. storybook 빌드
   모든 CSS import → 문서화 빌드
```

### ⚙️ 토큰 빌드 프로세스 (실제)
```javascript
// shared: scripts/build-foundation-tokens.js  
Foundation JSON 
    ↓ CSS Variables 생성
var(--foundation-foundation-color-blue-light-60)
    ↓ 프리미티브 CSS에서 직접 매핑
.surface--background-primary-system01-1-rest

// system-01/02: scripts/build-tokens.js
Foundation JSON 참조
    ↓ semantic.json 생성 (현재 미사용)
{semantic: {color: {primary: {background: ...}}}}
```

## 🧩 컴포넌트 구조 분석

### 🔨 Button 컴포넌트 구조
```typescript
// Button = Primitive 조합
export const Button = forwardRef<HTMLDivElement, ButtonProps>(({
  variant = 'filled',        // 스타일 변형
  colorScheme = 'primary',   // 색상 테마
  buttonType = 'text-only',  // 버튼 타입
  size = 'md',              // 크기
}) => {
  // 🔄 상태 관리
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  // 🎨 토큰 기반 스타일 계산
  const getBackgroundColor = (): BackgroundToken => {
    if (variant === 'filled' && colorScheme === 'primary') {
      if (isPressed) return 'primary-system01-1-pressed';
      if (isHovered) return 'primary-system01-1-hovered';
      return 'primary-system01-1-rest';
    }
  };
  
  // 🧩 Primitive 조합
  return (
    <Frame>                              {/* 레이아웃 */}
      <Surface background={getBackgroundColor()}> {/* 색상 */}
        <Sizing height={getSizingHeight()}>      {/* 크기 */}
          {leftIcon && <Icon name={leftIcon} />} {/* 아이콘 */}
          <Text variant={getTextVariant()}>{children}</Text> {/* 텍스트 */}
        </Sizing>
      </Surface>
    </Frame>
  );
});
```

### 🎯 핵심 패턴
1. **Props Interface**: 명확한 타입 정의
2. **State Management**: useState로 상호작용 상태 관리
3. **Token Calculation**: 함수로 토큰 값 계산
4. **Primitive Composition**: 기본 요소들의 조합

## 🛠️ 작업 가이드라인 및 트러블슈팅

### 📋 **필수 작업 원칙**

#### 🚫 **절대 금지사항**
- **Git Hard Reset 금지**: 어떤 상황에서도 `git reset --hard` 사용 금지
- **스토리북 실행 금지**: 스토리북은 사용자가 직접 실행 (AI 실행 금지)
- **스크립트 자동 생성 금지**: 한글 깨짐 및 파일 무결성 문제 발생

#### ✅ **필수 사용 도구**
- **파일 수정**: 반드시 `edit_file` tool 사용
  - 이유: `Get-ChildItem` 등의 명령어 사용 시 한글 깨짐 현상 발생
  - 파일 무결성 보장을 위해 edit tool만 사용
  
### 🧠 **문제 해결 접근법**
1. **프로젝트 전체 이해 우선**
   - 이 아키텍처 문서를 기반으로 전체 맥락 파악
   - 단편적인 상황만 보고 행동 금지

2. **심층적 문제 분석**
   - 표면적 증상이 아닌 근본 원인 탐구
   - 토큰 시스템, 빌드 순서, 의존성 관계 고려

3. **구조적 해결책 적용**
   - 프로젝트 아키텍처에 맞는 올바른 해결책
   - 임시방편 대신 지속 가능한 해결

4. **⚠️ 단일 해결방식 원칙 (중요)**
   - **한 번에 하나의 해결방식만 적용**: 여러 방법을 동시에 적용하면 문제가 복잡해짐
   - **최적의 방법 선택**: 가장 간단하고 확실한 방법 하나만 선택
   - **단계별 검증**: 한 방법 적용 → 테스트 → 성공 시 완료, 실패 시 롤백 후 다른 방법
   - **과부하 방지**: 프로젝트에 불필요한 설정이나 의존성 추가 금지 

### 📝 **문서 관리 규칙**

#### 🔄 **업데이트 시점**
- **오류 수정 완료 시**: 올바른 구조를 문서에 반영
- **새로운 패턴 발견 시**: 아키텍처 섹션에 추가
- **설계 개선 시**: 해당 섹션 업데이트

#### 📊 **문서 구조 유지**
- **순수한 아키텍처 문서**: 특정 문제점이나 임시적 해결방향 제외
- **본질적 구조와 설계 철학**: 프로젝트의 핵심 원리만 포함
- **지속적 개선**: 새로운 이해와 개선사항 지속적 반영

### ⚠️ **알려진 트러블슈팅 이슈**

#### 🔧 **명령어 관련**
- **한글 깨짐**: PowerShell 명령어 사용 시 한글 파일명/내용 깨짐
- **파일 손상**: 자동 스크립트 생성 시 인코딩 문제로 파일 무결성 손상
- **권한 문제**: 일부 시스템 명령어에서 접근 권한 오류

#### 🛡️ **안전한 대안**
- **파일 조작**: `edit_file` tool 독점 사용
- **정보 수집**: `read_file`, `list_dir` 등 안전한 도구 활용
- **빌드 실행**: 사용자 주도로 실행, 결과만 분석

### 🎯 **품질 보장 체크리스트**

#### ✅ **작업 전 확인사항**
- [ ] 아키텍처 문서 기반 전체 맥락 이해
- [ ] 문제의 근본 원인 파악
- [ ] 프로젝트 구조에 맞는 해결책 수립

#### ✅ **작업 중 확인사항**
- [ ] `edit_file` tool만 사용하여 파일 수정
- [ ] Git history 보존 (hard reset 금지)
- [ ] 기존 아키텍처 원칙 준수

#### ✅ **작업 후 확인사항**
- [ ] 해결책이 프로젝트 전체 구조와 일치하는지 확인
- [ ] 문서에 올바른 구조 업데이트
- [ ] 향후 유사 문제 방지를 위한 가이드라인 추가



---

*📝 이 문서는 Lumir Design System의 전체 아키텍처를 학습하고 정리한 것입니다. 프로젝트의 구조를 이해하고 문제를 해결하는 데 활용하세요.* 