# 🚀 Lumir Design System 설치 가이드

**프리미티브와 컴파운드 컴포넌트로 구축하는 차세대 디자인 시스템**

## 📦 패키지 구조

Lumir Design System은 3개의 핵심 패키지로 구성됩니다:

```
lumir-design-system-shared    # 🌟 프리미티브 컴포넌트 + Foundation 토큰
lumir-design-system-01        # 🎨 Professional & Clean 테마
lumir-design-system-02        # 🌿 Modern & Friendly 테마
```

## 🎯 설치 방법

### 1. 새 프로젝트에서 시작

```bash
# React 프로젝트 생성
npx create-react-app my-app --template typescript
cd my-app

# Lumir Design System 설치
npm install lumir-design-system-shared lumir-design-system-01
# 또는 system-02 사용시
npm install lumir-design-system-shared lumir-design-system-02
```

### 2. 기존 프로젝트에 추가

```bash
# 필수 패키지 설치
npm install lumir-design-system-shared lumir-design-system-01

# peer dependencies 확인 및 설치
npm install react@^18.0.0 react-dom@^18.0.0
```

### 3. Yarn/pnpm 사용시

```bash
# Yarn
yarn add lumir-design-system-shared lumir-design-system-01

# pnpm  
pnpm add lumir-design-system-shared lumir-design-system-01
```

## ⚙️ 기본 설정

### 1. App.tsx 설정

```tsx
// App.tsx
import React from 'react';
import { Surface } from 'lumir-design-system-shared';
import { Button, Card } from 'lumir-design-system-01';

function App() {
  return (
    <Surface 
      backgroundColor="background-1" 
      foreground="foreground-1"
      padding="lg"
      style={{ minHeight: '100vh' }}
    >
      <Card>
        <h1>환영합니다!</h1>
        <Button variant="filled" colorScheme="primary">
          시작하기
        </Button>
      </Card>
    </Surface>
  );
}

export default App;
```

### 2. CSS 설정 (선택사항)

```css
/* src/index.css - 기본 리셋만 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
```

## 🧩 컴포넌트 사용법

### 프리미티브 컴포넌트 (lumir-design-system-shared)

기본 레이아웃과 UI 요소를 담당합니다:

```tsx
import { 
  Surface,    // 배경과 여백을 가진 컨테이너
  Frame,      // 기본 div 래퍼
  Text,       // 텍스트 요소
  Icon,       // 아이콘 (295개 내장)
  Divider,    // 구분선
  Interactive,// 인터랙션 요소
  Sizing      // 크기 조절
} from 'lumir-design-system-shared';

// 기본 레이아웃
<Surface backgroundColor="background-1" padding="md">
  <Text variant="heading-1" color="foreground-1">
    제목
  </Text>
  <Divider orientation="horizontal" />
  <Icon name="LineIconsStarFilledIcon" size="md" />
</Surface>
```

### 컴파운드 컴포넌트 (System-01/02)

완성된 UI 컴포넌트를 제공합니다:

```tsx
import { 
  Button,
  Card, 
  Field,
  Checkbox,
  Badge,
  Link,
  Menu
} from 'lumir-design-system-01';

// 완성된 컴포넌트들
<Card>
  <Field 
    label="이메일" 
    placeholder="이메일을 입력하세요"
    leftIcon="LineIconsPersonPersonIcon"
  />
  <Button 
    variant="filled" 
    colorScheme="primary"
    leftIcon="LineIconsCheckmarkCheckmarkIcon"
  >
    확인
  </Button>
</Card>
```

## 🎨 시스템 테마 선택

### System-01: Professional & Clean

백오피스, 관리자 도구, B2B 애플리케이션에 적합:

```tsx
import { Button, Card, Field } from 'lumir-design-system-01';

// 깔끔하고 전문적인 디자인
<Button variant="filled" colorScheme="primary">
  로그인
</Button>
```

### System-02: Modern & Friendly  

커머스, 소비자 앱, B2C 서비스에 적합:

```tsx
import { Button, Card, Field } from 'lumir-design-system-02';

// 둥글고 친근한 디자인
<Button variant="filled" colorScheme="primary">
  구매하기
</Button>
```

## 🚫 중요: 토큰 직접 사용 금지

❌ **하지 마세요:**

```tsx
// CSS 변수 직접 사용 금지
<div style={{
  backgroundColor: 'var(--foundation-foundation-color-blue-light-50)',
  padding: 'var(--foundation-foundation-spacing-md)'
}}>
  내용
</div>

// CSS 클래스 직접 사용 금지
<div className="bg-f-foundation-color-blue-light-50">
  내용
</div>
```

✅ **올바른 방법:**

```tsx
// 컴포넌트 props 사용
<Surface backgroundColor="primary-1" padding="md">
  <Text color="primary-foreground-1">
    내용
  </Text>
</Surface>
```

## 📋 실제 사용 예시

### 1. 로그인 폼

```tsx
import React, { useState } from 'react';
import { Surface, Text } from 'lumir-design-system-shared';
import { Button, Field, Card } from 'lumir-design-system-01';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Surface 
      backgroundColor="background-1" 
      padding="xl"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Card style={{ width: '400px' }}>
        <Text variant="heading-2" color="foreground-1" style={{ marginBottom: '24px' }}>
          로그인
        </Text>
        
        <Field
          label="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
          leftIcon="LineIconsPersonPersonIcon"
        />
        
        <Field
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          leftIcon="LineIconsShieldOnIcon"
        />
        
        <Button 
          variant="filled" 
          colorScheme="primary"
          size="lg"
          style={{ width: '100%', marginTop: '16px' }}
        >
          로그인
        </Button>
      </Card>
    </Surface>
  );
}
```

### 2. 대시보드 레이아웃

```tsx
import React from 'react';
import { Surface, Text, Frame, Divider } from 'lumir-design-system-shared';
import { Button, Card, Badge } from 'lumir-design-system-01';

function Dashboard() {
  return (
    <Surface backgroundColor="background-1" padding="lg">
      {/* 헤더 */}
      <Frame style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <Text variant="heading-1" color="foreground-1">
          대시보드
        </Text>
        <Button variant="outlined" colorScheme="secondary" rightIcon="LineIconsSettingSetting1Icon">
          설정
        </Button>
      </Frame>
      
      <Divider orientation="horizontal" />
      
      {/* 컨텐츠 그리드 */}
      <Frame style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '32px' }}>
        <Card>
          <Text variant="heading-3" color="foreground-1">
            총 매출
          </Text>
          <Text variant="heading-1" color="primary-1" style={{ marginTop: '8px' }}>
            ₩12,345,678
          </Text>
          <Badge variant="filled" colorScheme="success" style={{ marginTop: '12px' }}>
            +12.5%
          </Badge>
        </Card>
        
        <Card>
          <Text variant="heading-3" color="foreground-1">
            신규 고객
          </Text>
          <Text variant="heading-1" color="secondary-1" style={{ marginTop: '8px' }}>
            1,234명
          </Text>
          <Badge variant="filled" colorScheme="warning" style={{ marginTop: '12px' }}>
            +5.2%
          </Badge>
        </Card>
      </Frame>
    </Surface>
  );
}
```

## 🔧 고급 설정

### TypeScript 설정

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "react-jsx",
    "strict": true
  }
}
```

### 번들러 설정

대부분의 모던 번들러(Vite, Webpack 5+, Next.js)에서 추가 설정 없이 작동합니다.

#### Next.js 사용시

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lumir-design-system-shared', 'lumir-design-system-01', 'lumir-design-system-02']
}

module.exports = nextConfig
```

#### Vite 사용시

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lumir-design-system-shared', 'lumir-design-system-01']
  }
})
```

## 🐛 문제 해결

### 1. 컴포넌트가 스타일링되지 않음

**원인**: CSS 모듈이 제대로 로드되지 않음

**해결책**:
```tsx
// 컴포넌트를 Surface로 감싸기
<Surface backgroundColor="background-1">
  <Button>버튼</Button>
</Surface>
```

### 2. TypeScript 에러

**원인**: 타입 정의를 찾을 수 없음

**해결책**:
```bash
# 타입 정의 재설치
npm install --save-dev @types/react @types/react-dom
```

### 3. 아이콘이 표시되지 않음

**원인**: 잘못된 아이콘 이름 사용

**해결책**:
```tsx
// 올바른 아이콘 이름 사용 (스토리북에서 확인)
<Icon name="LineIconsStarFilledIcon" size="md" />
```

### 4. 빌드 에러

**원인**: 모듈 해상도 문제

**해결책**:
```bash
# node_modules 정리 후 재설치
rm -rf node_modules package-lock.json
npm install
```

## 📚 추가 리소스

- **📖 [스토리북](https://lumir-design-system.vercel.app)**: 컴포넌트 API 문서
- **📦 [NPM 패키지](https://www.npmjs.com/package/lumir-design-system-shared)**: 공식 패키지 페이지

## 🆘 지원

문제가 발생하면:

1. **스토리북 문서** 먼저 확인
2. **디자이너에게 문의**
3. **새 이슈 생성**시 재현 가능한 예제 코드 포함

---

**💡 핵심 원칙**: 토큰을 직접 사용하지 말고, 항상 컴포넌트의 props를 통해 디자인을 적용하세요! 