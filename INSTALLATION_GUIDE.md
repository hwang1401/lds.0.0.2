# 🚀 Lumir Design System 설치 및 사용 가이드

## 📋 목차

1. [시스템 개요](#시스템-개요)
2. [설치 방법](#설치-방법)
3. [프로젝트 설정](#프로젝트-설정)
4. [기본 사용법](#기본-사용법)
5. [시스템별 특징](#시스템별-특징)
6. [컴포넌트 사용법](#컴포넌트-사용법)
7. [문제 해결](#문제-해결)
8. [마이그레이션 가이드](#마이그레이션-가이드)
9. [FAQ](#faq)

---

## 🎯 시스템 개요

Lumir Design System은 **5가지 테마 시스템**을 제공하는 React 기반의 디자인 시스템입니다.

### 시스템 종류

| 시스템 | 특징 | 사용 사례 | 색상 테마 |
|--------|------|-----------|-----------|
| **System-01** | Professional & Clean | 백오피스, GitHub 스타일 | 블루 계열 |
| **System-02** | Modern & Friendly | 커머스, 소비자 대상 | 퍼플 계열 |
| **System-03** | Software & Discord | 개발 도구, 커뮤니티 | 오렌지 계열 |
| **System-04** | Aerospace Control | 위성 컨트롤, 미션 크리티컬 | 전문 항공우주 |
| **System-05** | Aerospace Dashboard | 우주 항공 대시보드 | 대시보드 특화 |

---

## 📦 설치 방법

### 1. 새 프로젝트에서 설치

#### Next.js + TypeScript 프로젝트 생성
```bash
# Next.js 프로젝트 생성
npx create-next-app@latest my-app --typescript --tailwind --eslint --app

# 프로젝트 디렉토리로 이동
cd my-app
```

#### Lumir Design System 설치
```bash
# 필수 패키지 설치
npm install @lumir/shared @lumir/system-01

# 또는 yarn
yarn add @lumir/shared @lumir/system-01

# 또는 pnpm
pnpm add @lumir/shared @lumir/system-01
```

### 2. 기존 프로젝트에 설치

#### React 18+ 환경 확인
```bash
# React 버전 확인
npm list react react-dom

# React 18 미만인 경우 업그레이드
npm install react@^18.0.0 react-dom@^18.0.0
```

#### 패키지 설치
```bash
# 원하는 시스템 선택하여 설치
npm install @lumir/shared @lumir/system-01  # Clean & Professional
npm install @lumir/shared @lumir/system-02  # Modern & Friendly

# 여러 시스템 동시 사용 가능
npm install @lumir/shared @lumir/system-01 @lumir/system-02
```

### 3. 패키지별 설명

| 패키지 | 설명 | 필수 여부 |
|--------|------|-----------|
| `@lumir/shared` | Foundation 토큰, 프리미티브 컴포넌트 | ✅ 필수 |
| `@lumir/system-01` | System-01 컴포넌트 | 선택 |
| `@lumir/system-02` | System-02 컴포넌트 | 선택 |

---

## ⚙️ 프로젝트 설정

### 1. CSS 스타일 가져오기

#### `app/globals.css` 또는 `styles/globals.css`에 추가:
```css
/* Foundation 토큰 (필수) */
@import '@lumir/shared/dist/css/foundation-tokens.css';

/* 사용할 시스템의 스타일 가져오기 */
@import '@lumir/system-01/dist/css/tokens.css';

/* 여러 시스템 사용 시 */
@import '@lumir/system-02/dist/css/tokens.css';

/* 기본 스타일 리셋 (권장) */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--foundation-foundation-font-family-body);
}
```

### 2. TypeScript 설정 (TypeScript 사용 시)

#### `tsconfig.json` 경로 설정 추가:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@lumir/shared": ["node_modules/@lumir/shared"],
      "@lumir/system-01": ["node_modules/@lumir/system-01"],
      "@lumir/system-02": ["node_modules/@lumir/system-02"]
    }
  }
}
```

### 3. Next.js 설정 (Next.js 사용 시)

#### `next.config.js` 설정:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: [
    '@lumir/shared',
    '@lumir/system-01',
    '@lumir/system-02'
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
}

module.exports = nextConfig
```

### 4. 테마 설정

#### 루트 컴포넌트에서 테마 설정:
```tsx
// app/layout.tsx (App Router) 또는 pages/_app.tsx (Pages Router)
import '@lumir/shared/dist/css/foundation-tokens.css';
import '@lumir/system-01/dist/css/tokens.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
```

---

## 🚀 기본 사용법

### 1. 첫 번째 컴포넌트 사용

```tsx
// components/MyFirstComponent.tsx
import { Button, Card } from '@lumir/system-01';
import { Text, Icon } from '@lumir/shared';

export default function MyFirstComponent() {
  return (
    <Card variant="elevated" padding="lg">
      <Text variant="heading-1" color="primary-system01">
        환영합니다!
      </Text>
      <Text variant="body-1" color="secondary-system01-1">
        Lumir Design System을 사용해보세요.
      </Text>
      <Button 
        variant="filled" 
        intent="primary" 
        size="md"
        onClick={() => alert('Hello Lumir!')}
      >
        <Icon name="LineIconsCheckmarkCheckmarkIcon" size="sm" />
        시작하기
      </Button>
    </Card>
  );
}
```

### 2. 페이지에서 사용

```tsx
// app/page.tsx (App Router) 또는 pages/index.tsx (Pages Router)
import MyFirstComponent from '@/components/MyFirstComponent';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <MyFirstComponent />
    </main>
  );
}
```

---

## 🎨 시스템별 특징

### System-01: Professional & Clean
```tsx
import { Button, Card, Badge } from '@lumir/system-01';

// 특징: 깔끔하고 전문적인 디자인
<Button variant="filled" intent="primary">
  전문적인 버튼
</Button>
```

### System-02: Modern & Friendly
```tsx
import { Button, Card, Badge } from '@lumir/system-02';

// 특징: 둥근 모서리, 친근한 색상
<Button variant="filled" intent="primary" size="lg">
  친근한 버튼
</Button>
```

### 시스템 혼용 사용
```tsx
import { Button as Button01 } from '@lumir/system-01';
import { Button as Button02 } from '@lumir/system-02';
import { Text, Frame } from '@lumir/shared';

export default function MixedSystems() {
  return (
    <Frame direction="column" gap="md">
      <Text variant="heading-2">시스템 비교</Text>
      
      <Frame direction="row" gap="md">
        <Button01 variant="filled" intent="primary">
          System-01 버튼
        </Button01>
        <Button02 variant="filled" intent="primary">
          System-02 버튼
        </Button02>
      </Frame>
    </Frame>
  );
}
```

---

## 🧩 컴포넌트 사용법

### 1. 기본 컴포넌트

#### Button 컴포넌트
```tsx
import { Button } from '@lumir/system-01';
import { Icon } from '@lumir/shared';

// 기본 사용법
<Button variant="filled" intent="primary" size="md">
  기본 버튼
</Button>

// 아이콘과 함께
<Button variant="outlined" intent="secondary" size="lg">
  <Icon name="LineIconsPlusCircleIcon" size="sm" />
  아이콘 버튼
</Button>

// 로딩 상태
<Button variant="filled" intent="primary" loading>
  로딩 중...
</Button>

// 비활성화
<Button variant="filled" intent="primary" disabled>
  비활성화
</Button>
```

#### Card 컴포넌트
```tsx
import { Card } from '@lumir/system-01';
import { Text } from '@lumir/shared';

<Card variant="elevated" padding="lg">
  <Text variant="heading-3">카드 제목</Text>
  <Text variant="body-1">카드 내용입니다.</Text>
</Card>
```

#### SegmentButton 컴포넌트 (새로 추가!)
```tsx
import { SegmentButton } from '@lumir/system-01';

// 단일 선택
<SegmentButton 
  mode="single" 
  selectedValues={['option1']}
  onChange={(values) => console.log(values)}
>
  <SegmentButton.Item value="option1">옵션 1</SegmentButton.Item>
  <SegmentButton.Item value="option2">옵션 2</SegmentButton.Item>
  <SegmentButton.Item value="option3">옵션 3</SegmentButton.Item>
</SegmentButton>

// 다중 선택
<SegmentButton 
  mode="multi" 
  selectedValues={['option1', 'option3']}
  onChange={(values) => console.log(values)}
>
  <SegmentButton.Item value="option1">필터 1</SegmentButton.Item>
  <SegmentButton.Item value="option2">필터 2</SegmentButton.Item>
  <SegmentButton.Item value="option3">필터 3</SegmentButton.Item>
</SegmentButton>
```

### 2. Form 컴포넌트

#### Field (Input) 컴포넌트
```tsx
import { Field } from '@lumir/system-01';

<Field
  label="이메일"
  placeholder="이메일을 입력하세요"
  type="email"
  required
  helperText="올바른 이메일 형식을 입력해주세요"
/>
```

#### Checkbox & Radio
```tsx
import { Checkbox, Radio } from '@lumir/system-01';

// Checkbox
<Checkbox 
  checked={true}
  onChange={(checked) => console.log(checked)}
>
  동의합니다
</Checkbox>

// Radio
<Radio 
  name="option"
  value="option1"
  checked={true}
  onChange={(value) => console.log(value)}
>
  옵션 1
</Radio>
```

### 3. 프리미티브 컴포넌트

#### Text 컴포넌트
```tsx
import { Text } from '@lumir/shared';

<Text variant="heading-1" color="primary-system01">
  대제목
</Text>

<Text variant="body-1" color="secondary-system01-1">
  본문 텍스트
</Text>

<Text variant="caption" color="secondary-system01-2">
  작은 텍스트
</Text>
```

#### Icon 컴포넌트
```tsx
import { Icon } from '@lumir/shared';

<Icon name="LineIconsCheckmarkCheckmarkIcon" size="md" />
<Icon name="LineIconsCloseCloseIcon" size="sm" />
<Icon name="LineIconsArrowArrow1RightIcon" size="lg" />
```

#### Frame (Layout) 컴포넌트
```tsx
import { Frame } from '@lumir/shared';

// 세로 배치
<Frame direction="column" gap="md" align="center">
  <div>아이템 1</div>
  <div>아이템 2</div>
</Frame>

// 가로 배치
<Frame direction="row" gap="lg" justify="space-between">
  <div>왼쪽</div>
  <div>오른쪽</div>
</Frame>
```

---

## 🔧 문제 해결

### 1. 스타일이 적용되지 않는 경우

#### 해결 방법:
```tsx
// 1. CSS 가져오기 확인
import '@lumir/shared/dist/css/foundation-tokens.css';
import '@lumir/system-01/dist/css/tokens.css';

// 2. 테마 속성 확인
<html data-theme="light">  {/* 또는 "dark" */}

// 3. CSS 우선순위 문제 시
<Button style={{ zIndex: 1000 }}>버튼</Button>
```

### 2. TypeScript 에러

#### 해결 방법:
```tsx
// 1. 타입 가져오기
import type { ButtonProps } from '@lumir/system-01';

// 2. 제네릭 타입 사용
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// 3. 타입 단언 사용 (마지막 수단)
<Button {...(props as any)} />
```

### 3. Next.js SSR 이슈

#### 해결 방법:
```tsx
// 1. Dynamic import 사용
import dynamic from 'next/dynamic';

const Button = dynamic(
  () => import('@lumir/system-01').then(mod => mod.Button),
  { ssr: false }
);

// 2. useEffect로 클라이언트 사이드에서만 렌더링
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

return <Button>버튼</Button>;
```

### 4. 아이콘이 표시되지 않는 경우

#### 해결 방법:
```tsx
// 1. 올바른 아이콘 이름 사용
<Icon name="LineIconsCheckmarkCheckmarkIcon" />  // ✅ 올바름
<Icon name="checkmark" />  // ❌ 잘못됨

// 2. 아이콘 목록 확인
import { IconName } from '@lumir/shared';
// 자동완성으로 사용 가능한 아이콘 확인

// 3. 커스텀 아이콘 사용
<Icon name="MyCustomIcon" />  // 사전에 등록된 경우만
```

---

## 📈 마이그레이션 가이드

### 기존 UI 라이브러리에서 마이그레이션

#### Material-UI에서 마이그레이션
```tsx
// Before (Material-UI)
import { Button, Card, Typography } from '@mui/material';

<Card>
  <Typography variant="h1">제목</Typography>
  <Button variant="contained" color="primary">
    버튼
  </Button>
</Card>

// After (Lumir)
import { Button, Card } from '@lumir/system-01';
import { Text } from '@lumir/shared';

<Card variant="elevated">
  <Text variant="heading-1" color="primary-system01">제목</Text>
  <Button variant="filled" intent="primary">
    버튼
  </Button>
</Card>
```

#### Ant Design에서 마이그레이션
```tsx
// Before (Ant Design)
import { Button, Card, Typography } from 'antd';
const { Title } = Typography;

<Card>
  <Title level={1}>제목</Title>
  <Button type="primary">버튼</Button>
</Card>

// After (Lumir)
import { Button, Card } from '@lumir/system-01';
import { Text } from '@lumir/shared';

<Card variant="elevated">
  <Text variant="heading-1" color="primary-system01">제목</Text>
  <Button variant="filled" intent="primary">버튼</Button>
</Card>
```

### 단계별 마이그레이션 전략

#### 1단계: 점진적 도입
```tsx
// 기존 컴포넌트와 함께 사용
import { Button as AntButton } from 'antd';
import { Button as LumirButton } from '@lumir/system-01';

export default function MigrationPage() {
  return (
    <div>
      {/* 기존 컴포넌트 */}
      <AntButton type="primary">기존 버튼</AntButton>
      
      {/* 새 컴포넌트 */}
      <LumirButton variant="filled" intent="primary">
        새 버튼
      </LumirButton>
    </div>
  );
}
```

#### 2단계: 컴포넌트별 교체
```tsx
// 컴포넌트 래퍼 생성
import { Button as LumirButton } from '@lumir/system-01';
import type { ButtonProps as LumirButtonProps } from '@lumir/system-01';

// 기존 API와 호환되는 래퍼
interface CompatButtonProps {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<CompatButtonProps> = ({ 
  type = 'primary', 
  children, 
  ...props 
}) => {
  const variant = type === 'primary' ? 'filled' : 'outlined';
  const intent = type === 'primary' ? 'primary' : 'secondary';
  
  return (
    <LumirButton variant={variant} intent={intent} {...props}>
      {children}
    </LumirButton>
  );
};
```

#### 3단계: 완전 교체
```tsx
// 모든 컴포넌트를 Lumir로 교체
import { Button, Card, Field } from '@lumir/system-01';
import { Text, Icon, Frame } from '@lumir/shared';

export default function NewPage() {
  return (
    <Frame direction="column" gap="lg">
      <Card variant="elevated" padding="lg">
        <Text variant="heading-1">완전히 새로운 페이지</Text>
        <Field label="이름" placeholder="이름을 입력하세요" />
        <Button variant="filled" intent="primary">
          <Icon name="LineIconsCheckmarkCheckmarkIcon" size="sm" />
          제출
        </Button>
      </Card>
    </Frame>
  );
}
```

---

## ❓ FAQ

### Q1: 여러 시스템을 동시에 사용할 수 있나요?
**A:** 네, 가능합니다. 각 시스템을 다른 이름으로 import하여 사용하세요.
```tsx
import { Button as Button01 } from '@lumir/system-01';
import { Button as Button02 } from '@lumir/system-02';
```

### Q2: 다크 모드를 지원하나요?
**A:** 네, `data-theme="dark"`를 설정하면 자동으로 다크 모드가 적용됩니다.
```tsx
<html data-theme="dark">
```

### Q3: 커스텀 테마를 만들 수 있나요?
**A:** Foundation 토큰을 오버라이드하여 커스텀 테마를 만들 수 있습니다.
```css
:root {
  --foundation-foundation-color-blue-light-50: #your-color;
}
```

### Q4: SSR/SSG를 지원하나요?
**A:** 네, Next.js의 SSR/SSG를 완전히 지원합니다. 설정 가이드를 참고하세요.

### Q5: 번들 사이즈가 걱정됩니다.
**A:** Tree-shaking을 지원하므로 사용하는 컴포넌트만 번들에 포함됩니다.
```tsx
// 필요한 컴포넌트만 import
import { Button } from '@lumir/system-01';  // ✅ 권장
import * as Lumir from '@lumir/system-01';  // ❌ 비권장
```

### Q6: 모바일 반응형을 지원하나요?
**A:** 네, 모든 컴포넌트는 반응형으로 설계되었습니다.

### Q7: 접근성(a11y)을 지원하나요?
**A:** 네, WCAG 2.1 AA 기준을 준수합니다.

---

## 🆘 추가 도움이 필요한 경우

- **문서**: [Storybook 문서](http://localhost:6006) 참고
- **이슈 리포팅**: [GitHub Issues](https://github.com/your-org/lumir-design-system/issues)
- **커뮤니티**: [Discord 채널](https://discord.gg/your-channel)

---

## 📝 버전 정보

- **@lumir/shared**: v1.0.4
- **@lumir/system-01**: v1.0.5  
- **@lumir/system-02**: v1.0.5

---

**🎉 축하합니다! Lumir Design System 설치가 완료되었습니다.**

이제 아름답고 일관된 UI를 빠르게 구축할 수 있습니다. 