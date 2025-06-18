# Lumir Design System 설치 및 통합 가이드

## 📋 개요

Lumir Design System은 5가지 시스템 테마를 지원하는 모노레포 구조의 디자인 시스템입니다.
- **System-01**: Professional & Clean (GitHub, 백오피스) - 블루 계열
- **System-02**: Friendly & Bright (커머스, 소비자 대상) - 퍼플 계열  
- **System-03**: Modern & Software (Discord, Slack) - 오렌지 계열
- **System-04**: Aerospace Control (위성 컨트롤, 미션 크리티컬)
- **System-05**: Aerospace Dashboard (우주 항공 대시보드)

## 🚀 패키지 설치

### 기본 설치
```bash
# 공통 패키지 (필수)
npm install lumir-design-system-shared

# 특정 시스템 선택 (하나만 선택)
npm install lumir-design-system-01  # Professional & Clean
npm install lumir-design-system-02  # Friendly & Bright  
npm install lumir-design-system-03  # Modern & Software
```

### pnpm 사용 시
```bash
pnpm add lumir-design-system-shared lumir-design-system-02
```

### yarn 사용 시
```bash
yarn add lumir-design-system-shared lumir-design-system-02
```

## 🎯 Next.js 프로젝트 통합 (권장)

### 1. CSS 임포트 설정

#### ❌ 잘못된 방법
```css
/* globals.css에서 직접 임포트 - 하지 마세요! */
@import "lumir-design-system-shared/dist/styles.css";
@import "lumir-design-system-02/dist/styles.css";
```

**문제점**: 
- 기존 CSS와 중복/충돌 발생
- 경로 오류 (exports 설정과 맞지 않음)
- 스타일 우선순위 문제

#### ✅ 올바른 방법 - layout.tsx에서 임포트
```typescript
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🎨 Lumir Design System CSS 임포트 (순서 중요!)
import "lumir-design-system-shared/foundation-tokens";  // 1. 기본 foundation 토큰
import "lumir-design-system-02/styles";                 // 2. 컴포넌트 스타일
import "lumir-design-system-02/tokens";                 // 3. 테마 토큰

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light">  {/* 🔥 data-theme 필수! */}
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

### 2. 컴포넌트 사용법

#### 기본 컴포넌트 임포트
```typescript
import { Button, TextDisplay, Card, Field } from "lumir-design-system-02";
```

#### 실제 사용 예시
```typescript
// ❌ 기존 커스텀 스타일
<button
  onClick={() => setFloor(1)}
  style={{
    padding: "8px 16px",
    background: floor === 1 ? "#2563eb" : "#f8f9fa",
    color: floor === 1 ? "#fff" : "#2563eb",
    border: "1px solid #2563eb",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  1층
</button>

// ✅ Lumir Design System 적용
<Button
  variant={floor === 1 ? "filled" : "outlined"}
  colorScheme="primary"
  onClick={() => setFloor(1)}
>
  1층
</Button>
```

## 🔧 시스템별 설정

### System-01 (Professional & Clean)
```typescript
// CSS 임포트
import "lumir-design-system-shared/foundation-tokens";
import "lumir-design-system-01/styles";
import "lumir-design-system-01/tokens";

// 컴포넌트 임포트
import { Button, Card, TextDisplay } from "lumir-design-system-01";

// 사용법
<Button variant="filled" colorScheme="primary">
  Professional Button
</Button>
```

### System-02 (Friendly & Bright)
```typescript
// CSS 임포트
import "lumir-design-system-shared/foundation-tokens";
import "lumir-design-system-02/styles";
import "lumir-design-system-02/tokens";

// 컴포넌트 임포트
import { Button, Card, TextDisplay } from "lumir-design-system-02";

// 사용법
<Button variant="filled" colorScheme="primary">
  Friendly Button
</Button>
```

## 🚨 트러블슈팅

### 문제 1: 모듈을 찾을 수 없음
```
Module not found: Can't resolve 'lumir-design-system-02/dist/styles.css'
```

**원인**: 직접 경로 대신 package.json의 exports 설정을 사용해야 함

**해결책**: 각 패키지의 exports 경로 사용
```typescript
// ❌ 잘못된 경로
import "lumir-design-system-02/dist/styles.css";

// ✅ 올바른 경로 (exports 사용)
import "lumir-design-system-02/styles";
```

### 문제 2: 스타일이 적용되지 않음 (radius만 적용)
**원인**: 
1. `data-theme` 속성 누락
2. CSS 토큰 파일 누락
3. 잘못된 임포트 순서

**해결책**:
```html
<!-- 1. HTML 태그에 data-theme 추가 -->
<html data-theme="light">

<!-- 2. 다크모드 지원 시 -->
<html data-theme="dark">
```

```typescript
// 3. 올바른 CSS 임포트 순서
import "lumir-design-system-shared/foundation-tokens";  // 1순위
import "lumir-design-system-02/styles";                 // 2순위
import "lumir-design-system-02/tokens";                 // 3순위
```

### 문제 3: TypeScript 타입 오류
```typescript
// ❌ 잘못된 props
<Button variant="outline" colorScheme="error">

// ✅ 올바른 props  
<Button variant="outlined" colorScheme="primary">
```

**System-02 Button 지원 props**:
- `variant`: "filled" | "outlined" | "ghost"
- `colorScheme`: "primary" | "secondary" | "cta"

### 문제 4: 기존 CSS와 충돌
**원인**: globals.css에서 직접 임포트하여 스타일 우선순위 문제 발생

**해결책**: layout.tsx에서만 임포트하고, 기존 CSS와 분리

## 📦 패키지 구조 이해

### lumir-design-system-shared
```
📁 shared/
├── 🎨 foundation-tokens.css    # 629개 기본 토큰
├── 🧩 프리미티브 컴포넌트      # Surface, Text, Icon 등
└── 🔧 유틸리티 함수           # 색상 대비, 애니메이션 등
```

### lumir-design-system-01/02
```
📁 system-01/
├── 🎨 styles.css              # 컴포넌트 스타일
├── 🎨 tokens.css              # 시스템별 토큰
└── 🧩 컴포넌트                # Button, Card, Field 등
```

## 🎨 테마 설정

### 라이트/다크 모드 전환
```typescript
// 테마 전환 함수
const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
};

// 사용법
<Button onClick={toggleTheme}>
  테마 전환
</Button>
```

### 시스템 테마 감지
```typescript
// 시스템 테마 자동 감지
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = () => {
    document.documentElement.setAttribute(
      'data-theme', 
      mediaQuery.matches ? 'dark' : 'light'
    );
  };
  
  handleChange();
  mediaQuery.addEventListener('change', handleChange);
  
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

## 🔍 검증 방법

### 1. 개발 서버 실행
```bash
npm run dev
```

### 2. 브라우저 개발자 도구에서 확인
```css
/* F12 > Elements > html 태그에서 확인 */
html[data-theme="light"] {
  --foundation-foundation-color-blue-light-50: #00a0e9;
  /* 629개 토큰이 정상 로드되었는지 확인 */
}
```

### 3. 컴포넌트 스타일 확인
- 색상이 정상적으로 적용되는지 확인
- border-radius가 토큰 값으로 적용되는지 확인
- 호버/포커스 상태가 정상 작동하는지 확인

## 📚 실제 프로젝트 적용 단계

### Step 1: 기본 설정
1. 패키지 설치
2. layout.tsx에서 CSS 임포트
3. data-theme 설정

### Step 2: 점진적 컴포넌트 교체
1. **Button 컴포넌트** 먼저 교체 (가장 간단)
2. **TextDisplay 컴포넌트** 교체 (텍스트 스타일링)
3. **Field 컴포넌트** 교체 (폼 요소)
4. **Card 컴포넌트** 교체 (레이아웃)

### Step 3: 최종 정리
1. 기존 커스텀 CSS 제거
2. 일관성 검증
3. 접근성 테스트

## ⚠️ 주의사항

### ✅ Do's
1. **layout.tsx에서 CSS 임포트**: globals.css 충돌 방지
2. **exports 경로 사용**: package.json의 정의된 경로 사용
3. **data-theme 설정**: 테마 토큰 활성화를 위해 필수
4. **점진적 교체**: 한 번에 모든 컴포넌트를 바꾸지 말고 단계별로 진행
5. **CSS 임포트 순서 준수**: foundation → styles → tokens 순서

### ❌ Don'ts  
1. **직접 경로 사용 금지**: `/dist/styles.css` 같은 직접 경로 사용 안함
2. **globals.css 임포트 금지**: 기존 스타일과 충돌 위험
3. **exports 없는 파일 임포트**: 정의되지 않은 경로 사용 금지
4. **data-theme 누락**: 테마 토큰이 활성화되지 않음
5. **잘못된 props 사용**: 각 시스템별 지원 props 확인 필요

## 🔗 추가 리소스

- **Storybook**: 컴포넌트 문서 및 예제
- **GitHub Repository**: 소스 코드 및 이슈 트래킹
- **NPM Packages**: 최신 버전 확인

---

**최종 업데이트**: 2024년 12월  
**테스트 환경**: Next.js 15.3.3, React 18.2.0  
**실제 적용 프로젝트**: Food Map Application 

## ⚙️ Next.js 프로젝트 설정

### 1. CSS 임포트 설정 (중요!)

#### ❌ 잘못된 방법 - globals.css에서 직접 임포트
```css
/* globals.css - 이렇게 하면 안됨 */
@import "lumir-design-system-shared/dist/styles.css";
@import "lumir-design-system-02/dist/styles.css";
```

**문제점**: 
- 기존 CSS와 중복/충돌 발생
- 경로 오류 (exports 설정과 맞지 않음)

#### ✅ 올바른 방법 - layout.tsx에서 패키지 exports 경로 사용

```typescript
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Lumir Design System CSS 임포트 (exports 경로 사용)
import "lumir-design-system-shared/foundation-tokens";
import "lumir-design-system-02/styles";
import "lumir-design-system-02/tokens";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

### 2. data-theme 속성 설정 (필수!)

HTML 태그에 반드시 `data-theme` 속성을 추가해야 합니다:

```html
<html lang="ko" data-theme="light">
```

**지원하는 테마:**
- `light`: 라이트 모드
- `dark`: 다크 모드 (시스템에 따라 지원)

## 🔧 컴포넌트 사용법

### 기본 컴포넌트 임포트
```typescript
import { Button, TextDisplay, Card, Field } from "lumir-design-system-02";
import { Surface, Frame, Text, Icon } from "lumir-design-system-shared";
```

### 실제 사용 예시

#### Before (기존 코드)
```typescript
<button
  onClick={() => setFloor(1)}
  style={{
    padding: '12px 24px',
    backgroundColor: floor === 1 ? '#8B5CF6' : '#F3F4F6',
    color: floor === 1 ? 'white' : '#374151',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  }}
>
  1층
</button>
```

#### After (Lumir Design System 적용)
```typescript
<Button
  variant={floor === 1 ? "filled" : "outlined"}
  colorScheme="primary"
  size="md"
  onClick={() => setFloor(1)}
>
  1층
</Button>
```

## 🚨 트러블슈팅

### 문제 1: 모듈을 찾을 수 없음
```
Module not found: Can't resolve 'lumir-design-system-02/dist/styles.css'
```

**원인**: 직접 경로 대신 package.json의 exports 설정을 사용해야 함

**해결책**: 각 패키지의 package.json에서 exports 확인
```json
// lumir-design-system-02/package.json
{
  "exports": {
    "./styles": "./dist/styles.css",
    "./tokens": "./dist/css/tokens.css"
  }
}

// lumir-design-system-shared/package.json  
{
  "exports": {
    "./foundation-tokens": "./dist/css/foundation-tokens.css"
  }
}
```

### 문제 2: 스타일이 적용되지 않음 (radius만 적용)
**원인**: 
1. `data-theme` 속성 누락
2. CSS 토큰 파일 누락

**해결책**:
1. HTML 태그에 `data-theme="light"` 추가
2. 모든 필요한 CSS 파일 임포트 확인

### 문제 3: TypeScript 타입 오류
```typescript
// ❌ 잘못된 props
<Button variant="outline" colorScheme="error">

// ✅ 올바른 props  
<Button variant="outlined" colorScheme="primary">
```

**System-02 Button 지원 props**:
- `variant`: "filled" | "outlined" | "ghost"
- `colorScheme`: "primary" | "secondary" | "cta"

### 문제 4: 반응형 레이아웃이 작동하지 않음
**원인**: 일부 컴포넌트의 반응형 지원 제한

**현재 해결책**: 
```typescript
// ❌ 작동하지 않음
<Frame
  display="grid"
  gridTemplateColumns={{
    mobile: "1fr",
    desktop: "1fr 1fr 1fr"
  }}
/>

// ✅ 현재 우회 방법
<Frame
  display="grid"
  style={{
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
  }}
/>
```

## 📝 올바른 임포트 경로 정리

### CSS 임포트 순서 (중요!)
```typescript
// 1. 기본 foundation 토큰 (629개 토큰)
import "lumir-design-system-shared/foundation-tokens";

// 2. 컴포넌트 스타일
import "lumir-design-system-02/styles";

// 3. 테마 토큰
import "lumir-design-system-02/tokens";
```

### 컴포넌트 임포트
```typescript
// System-02 컴포넌트
import { 
  Button, 
  TextDisplay, 
  Card, 
  Field,
  Badge,
  Checkbox,
  Radio,
  ComboBox,
  Menu,
  OptionList,
  SegmentButton,
  Tab
} from "lumir-design-system-02";

// 공통 프리미티브
import { 
  Surface, 
  Frame, 
  Text, 
  Icon,
  Sizing,
  Interactive,
  Divider,
  Asterisk
} from "lumir-design-system-shared";
```

## ✅ 설치 확인 체크리스트

1. **패키지 설치 확인**
   ```bash
   npm list lumir-design-system-shared lumir-design-system-02
   ```

2. **CSS 임포트 확인**
   - [ ] foundation-tokens 임포트
   - [ ] styles 임포트  
   - [ ] tokens 임포트

3. **HTML 설정 확인**
   - [ ] `data-theme="light"` 속성 추가

4. **개발자 도구에서 토큰 확인**
   ```javascript
   // 브라우저 콘솔에서 실행
   getComputedStyle(document.documentElement).getPropertyValue('--foundation-foundation-color-primary-system02-1-rest')
   ```

5. **컴포넌트 렌더링 확인**
   ```typescript
   // 테스트 컴포넌트
   <Button variant="filled" colorScheme="primary">
     테스트 버튼
   </Button>
   ```

## 🔄 점진적 마이그레이션 전략

### 1단계: 기본 설정
- 패키지 설치 및 CSS 임포트
- 기존 스타일과 충돌하지 않도록 격리된 영역에서 테스트

### 2단계: 프리미티브 적용
- `<div>` → `<Frame>`
- `<span>` → `<Text>`
- 기본 레이아웃 구조 교체

### 3단계: 컴파운드 컴포넌트 적용  
- `<button>` → `<Button>`
- 커스텀 카드 → `<Card>`
- 폼 요소들 → `<Field>`, `<Checkbox>` 등

### 4단계: 전체 통합
- 기존 CSS 제거
- 일관된 디자인 시스템 적용

## ⚠️ 현재 알려진 한계점

### 1. 반응형 Grid 제한
- `gridTemplateColumns` 반응형 객체 미지원
- 복잡한 Grid 레이아웃 구현 어려움

### 2. Card 컴포넌트 제한
- `imageHeight` 반응형 미지원
- 카드 최대 너비 제한 (375px)

### 3. 일부 속성 반응형 제한
- 모든 컴포넌트에서 일관된 반응형 지원 부족

**현재 우회 방법**: 인라인 스타일이나 CSS 클래스 조합 사용

## 🔮 향후 개선 예정 사항

1. **완전한 반응형 지원**
   - 모든 컴포넌트 속성의 반응형 객체 지원
   - Container Queries 지원

2. **Grid 시스템 강화**
   - CSS Grid 고급 기능 완전 지원
   - 브레이크포인트별 레이아웃 제어

3. **컴포넌트 API 일관성**
   - 모든 컴포넌트의 속성명 통일
   - TypeScript 지원 강화

## 📞 지원 및 피드백

문제가 발생하거나 개선 사항이 있다면 GitHub Issues를 통해 제보해 주세요.

---

**최종 업데이트**: 2024년 12월 기준  
**테스트 환경**: Next.js 15.3.3, React 18.2.0 