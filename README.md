# 🎨 Lumir Design System (LDS)

**Global CSS 없이도 프리미티브 컴포넌트만으로 완전한 웹 애플리케이션을 구축할 수 있는 혁신적인 디자인 시스템**

일관되고 효율적인 사용자 인터페이스를 위한 컴포넌트, 토큰, 패턴 및 가이드라인을 제공합니다.

## 🚀 배포 정보

- **스토리북**: [Vercel에서 배포된 통합 스토리북](https://lumir-design-system.vercel.app)
- **브랜치**: `system-separate` (새로운 패키지 구조)
- **빌드 상태**: ✅ 모든 패키지 빌드 완료

[![npm version](https://badge.fury.io/js/lumir-design-components.svg)](https://www.npmjs.com/package/lumir-design-components)
[![npm version](https://badge.fury.io/js/lumir-design-tokens.svg)](https://www.npmjs.com/package/lumir-design-tokens)

## ✨ 핵심 특징

- 🚀 **Zero Global CSS**: global.css 없이도 완전한 디자인 구현
- 🧩 **완전한 프리미티브 아키텍처**: Box, Stack, Text, Icon으로 모든 레이아웃 구성
- 🎨 **1,306개 시멘틱 토큰**: CSS 변수로 일관된 디자인 시스템
- ⚡ **최적화된 성능**: 트리쉐이킹 및 CSS 모듈 기반
- 🔧 **TypeScript 완전 지원**: 295개 아이콘 + 완전한 타입 정의
- 🎯 **하드코딩 제로**: 모든 값이 시멘틱 토큰 기반

## 🎯 LDS만의 차별화된 아키텍처

### 기존 CSS 프레임워크 vs LDS

```jsx
// ❌ 기존 방식 - CSS 클래스 의존 + 하드코딩
<div className="container mx-auto px-4">
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-bold text-gray-900">제목</h1>
    <button 
      className="bg-blue-500 text-white px-4 py-2 rounded"
      style={{ margin: '16px 0' }} // 하드코딩 필요
    >
      버튼
    </button>
  </div>
</div>

// ✅ LDS 방식 - 프리미티브 컴포넌트 + 시멘틱 토큰
<Box padding="lg" maxWidth="1200px" marginX="auto">
  <Stack direction="column" spacing="md">
    <Text variant="heading-1" color="primary-foreground-1">제목</Text>
    <Button variant="filled" colorScheme="primary">버튼</Button>
  </Stack>
</Box>
```

### 혁신적인 3계층 아키텍처

1. **🔧 프리미티브 컴포넌트**: 원자적 UI 요소 (하드코딩 없이 시멘틱 토큰만 사용)
2. **🧩 컴파운드 컴포넌트**: 프리미티브들의 조합 (Badge, Card, Checkbox 등)
3. **🎨 시멘틱 토큰**: 1,306개 CSS 변수로 완전한 디자인 시스템

## 📦 패키지 구조

```
lumir-design-system/
├── packages/
│   ├── tokens/           # 1,306개 디자인 토큰
│   │   ├── Foundation/   # 기본 값 (색상, 크기, 폰트 등)
│   │   └── Semantic/     # 의미적 토큰 (primary, secondary 등)
│   └── components/       # React 컴포넌트 라이브러리
│       ├── primitives/   # Box, Stack, Text, Icon (4개)
│       └── compounds/    # Badge, Button, Card 등 (8개)
└── docs/                # 문서 및 가이드
```

**NPM 패키지:**
- `lumir-design-components@2.0.9`: React 컴포넌트 라이브러리
- `lumir-design-tokens@3.0.1`: 디자인 토큰 시스템

## 🚀 빠른 시작 (2분 완성)

### 1. 설치

```bash
npm install lumir-design-components lumir-design-tokens
```

### 2. 기본 설정 (단 2줄!)

```jsx
// App.js
import 'lumir-design-tokens/dist/css/tokens.css';
import 'lumir-design-components/dist/styles.css';

function App() {
  return (
    // global.css 없이도 완전한 애플리케이션!
    <Box minHeight="100vh" backgroundColor="secondary-1">
      <Stack direction="column" spacing="xl" padding="lg">
        <Text variant="title-1" color="primary-foreground-1" align="center">
          Welcome to LDS
        </Text>
        <Stack direction="row" spacing="md" justify="center">
          <Button variant="filled" colorScheme="primary">
            시작하기
          </Button>
          <Button variant="outlined" colorScheme="secondary">
            문서 보기
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
```

### 3. 완전한 반응형 랜딩 페이지 (프리미티브만으로!)

```jsx
import { Box, Stack, Text, Button, Icon } from 'lumir-design-components';

function LandingPage() {
  return (
    <Box minHeight="100vh" backgroundColor="secondary-1">
      {/* 헤더 */}
      <Box backgroundColor="secondary-2" borderBottomWidth="thin" borderBottomColor="secondary-stroke-1">
        <Box maxWidth="1200px" marginX="auto" paddingX="lg" paddingY="md">
          <Stack direction="row" justify="space-between" align="center">
            <Text variant="heading-2" color="primary-foreground-1">LDS</Text>
            <Stack direction="row" spacing="md">
              <Button variant="transparent" colorScheme="secondary">문서</Button>
              <Button variant="filled" colorScheme="primary">시작하기</Button>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* 히어로 섹션 */}
      <Box paddingY="xxxl">
        <Box maxWidth="800px" marginX="auto" paddingX="lg">
          <Stack direction="column" spacing="xl" align="center">
            <Text variant="title-1" color="primary-foreground-1" align="center">
              Global CSS 없이 완전한 디자인
            </Text>
            <Text variant="body-1" color="secondary-foreground-1" align="center">
              프리미티브 컴포넌트만으로 모든 레이아웃을 구성하는 혁신적인 디자인 시스템
            </Text>
            <Stack direction="row" spacing="md">
              <Button 
                variant="filled" 
                colorScheme="primary" 
                size="lg"
                leftIcon="heart"
              >
                시작하기
              </Button>
              <Button variant="outlined" colorScheme="secondary" size="lg">
                문서 보기
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* 특징 섹션 - 완전 반응형 그리드 */}
      <Box paddingY="xxl" backgroundColor="secondary-2">
        <Box maxWidth="1200px" marginX="auto" paddingX="lg">
          <Stack direction="column" spacing="xl">
            <Text variant="heading-1" color="primary-foreground-1" align="center">
              주요 특징
            </Text>
            {/* 자동 반응형 그리드 */}
            <Stack direction="row" spacing="lg" wrap="wrap">
              <Box 
                padding="lg" 
                backgroundColor="secondary-1" 
                borderRadius="lg"
                minWidth="300px"
                basis="calc(33.333% - 1rem)"
                grow={1}
              >
                <Stack direction="column" spacing="md">
                  <Icon name="code" type="line" size="lg" color="primary-foreground-1" />
                  <Text variant="heading-3">Zero Global CSS</Text>
                  <Text variant="body-2" color="secondary-foreground-1">
                    global.css 없이도 완전한 웹 애플리케이션 구현
                  </Text>
                </Stack>
              </Box>
              <Box 
                padding="lg" 
                backgroundColor="secondary-1" 
                borderRadius="lg"
                minWidth="300px"
                basis="calc(33.333% - 1rem)"
                grow={1}
              >
                <Stack direction="column" spacing="md">
                  <Icon name="layers" type="line" size="lg" color="primary-foreground-1" />
                  <Text variant="heading-3">프리미티브 아키텍처</Text>
                  <Text variant="body-2" color="secondary-foreground-1">
                    Box, Stack으로 모든 레이아웃 구성
                  </Text>
                </Stack>
              </Box>
              <Box 
                padding="lg" 
                backgroundColor="secondary-1" 
                borderRadius="lg"
                minWidth="300px"
                basis="calc(33.333% - 1rem)"
                grow={1}
              >
                <Stack direction="column" spacing="md">
                  <Icon name="color-palette" type="line" size="lg" color="primary-foreground-1" />
                  <Text variant="heading-3">시멘틱 토큰</Text>
                  <Text variant="body-2" color="secondary-foreground-1">
                    1,306개 CSS 변수로 완전한 일관성
                  </Text>
                </Stack>
              </Box>
          </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
```

## 🎨 컴포넌트 제작 방법

### 프리미티브 컴포넌트 (4개 핵심)

**모든 레이아웃의 기본 구성 요소**

#### `Box` - 만능 컨테이너
```jsx
// 모든 스타일링의 기본
<Box 
  padding="lg"           // 시멘틱 토큰
  backgroundColor="primary-1"  // 색상 토큰
  borderRadius="md"      // 모양 토큰
  borderWidth="thin"     // 테두리 토큰
  shadow="md"           // 그림자 토큰
>
  콘텐츠
</Box>
```

#### `Stack` - Flexbox 레이아웃
```jsx
// 1차원 레이아웃 (수직/수평)
<Stack 
  direction="column"     // row, column, row-reverse, column-reverse
  spacing="md"          // 자식 요소 간격 (xxxs=2px ~ xxxl)
  align="center"        // 교차축 정렬
  justify="space-between" // 주축 정렬
>
  <Text>항목 1</Text>
  <Text>항목 2</Text>
</Stack>
```

#### `Text` - 모든 텍스트
```jsx
// 13가지 variant, 3가지 weight
<Text 
  variant="heading-1"    // title-1, heading-1~3, body-1~2, label-1~2, caption-1~3
  weight="bold"         // regular, medium, bold
  color="primary-foreground-1"  // 시멘틱 색상 토큰
  align="center"        // left, center, right
>
  텍스트 내용
</Text>
```

#### `Icon` - 295개 아이콘
```jsx
// 완전한 아이콘 시스템
<Icon 
  name="heart"          // 295개 아이콘 중 선택
  type="line"           // line, flat
  size="md"            // xs, sm, md, lg, xl
  color="primary-foreground-1"
/>
```

### 컴파운드 컴포넌트 (프리미티브 조합)

**우리가 최근 개선한 아키텍처**

#### 올바른 컴파운드 컴포넌트 원칙
1. ✅ **프리미티브만 사용** (Box, Stack, Text, Icon)
2. ✅ **시멘틱 토큰만 사용** (하드코딩 금지)
3. ✅ **인라인 스타일 금지** (`style={{}}` 사용 안함)

#### Badge 컴포넌트 예시 (완벽한 구현)
```jsx
// 내부 구현 - 프리미티브만 사용
<Box padding="sm" backgroundColor="primary-1" borderRadius="full">
  <Stack direction="row" spacing="xs" align="center">
    {icon && <Icon name={icon} size="xs" color="oncolor" />}
    <Text variant="label-2" color="oncolor">{text}</Text>
  </Stack>
</Box>

// 사용법
<Badge 
  text="New" 
  color="primary" 
  size="md"
  iconName="star-filled"
  layout="text+icon"
/>
```

#### Button 컴포넌트 (프리미티브 전환 완료)
```jsx
// 완전히 프리미티브로 구성된 Button
<Box
  backgroundColor="primary-1"
  borderRadius="md"
  padding="md"
  onClick={handleClick}
>
  <Stack direction="row" align="center" justify="center" spacing="sm">
    {leftIcon && <Icon name={leftIcon} size="sm" color="oncolor" />}
    <Text variant="label-1" weight="medium" color="oncolor">
      {children}
    </Text>
    {rightIcon && <Icon name={rightIcon} size="sm" color="oncolor" />}
  </Stack>
</Box>
```

### 컴포넌트 제작 패턴

#### 1. 시멘틱 토큰 사용법
```jsx
// ✅ 올바른 방법 - 시멘틱 토큰
<Box backgroundColor="primary-1" color="primary-foreground-1" />

// ❌ 잘못된 방법 - 하드코딩
<div style={{ backgroundColor: '#007ACC', color: '#FFFFFF' }} />
```

#### 2. 반응형 구현
```jsx
// Stack + Box로 완전한 반응형
<Stack direction="row" spacing="md" wrap="wrap">
  <Box basis="calc(50% - 0.5rem)" minWidth="300px" grow={1}>
    콘텐츠 1
  </Box>
  <Box basis="calc(50% - 0.5rem)" minWidth="300px" grow={1}>
    콘텐츠 2
  </Box>
</Stack>
```

#### 3. 상태 관리 패턴
```jsx
const getBackgroundColor = () => {
  if (disabled) return 'secondary-3';
  if (variant === 'filled') return 'primary-1';
  return 'transparent';
};

<Box backgroundColor={getBackgroundColor()} />
```

## 🔧 Next.js + TypeScript 프로젝트에서 사용법

### 1. 프로젝트 설정

```bash
# 1. Next.js 프로젝트 생성
npx create-next-app@latest my-app --typescript --tailwind=false

# 2. LDS 설치
cd my-app
npm install lumir-design-components lumir-design-tokens

# 3. 불필요한 CSS 제거 (global.css 삭제 가능!)
rm styles/globals.css
```

### 2. 기본 설정

```jsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import 'lumir-design-tokens/dist/css/tokens.css';
import 'lumir-design-components/dist/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### 3. 완전한 페이지 구현 예시

```tsx
// pages/index.tsx
import { NextPage } from 'next';
import { Box, Stack, Text, Button, Icon } from 'lumir-design-components';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Box minHeight="100vh" backgroundColor="secondary-1">
      {/* 네비게이션 */}
      <Box backgroundColor="secondary-2" borderBottomWidth="thin" borderBottomColor="secondary-stroke-1">
        <Box maxWidth="1200px" marginX="auto" paddingX="lg" paddingY="md">
          <Stack direction="row" justify="space-between" align="center">
            <Stack direction="row" spacing="md" align="center">
              <Icon name="logo" type="flat" size="lg" />
              <Text variant="heading-2" color="primary-foreground-1">My App</Text>
            </Stack>
            <Stack direction="row" spacing="md">
              <Button variant="transparent" colorScheme="secondary">메뉴</Button>
              <Button variant="filled" colorScheme="primary">로그인</Button>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* 메인 콘텐츠 */}
      <Box paddingY="xxl">
        <Box maxWidth="800px" marginX="auto" paddingX="lg">
          <Stack direction="column" spacing="xl" align="center">
            <Text variant="title-1" color="primary-foreground-1" align="center">
              Next.js + LDS 예시
            </Text>
            
            {/* 인터랙티브 카운터 */}
            <Box 
              padding="xl" 
              backgroundColor="secondary-2" 
              borderRadius="lg"
              borderWidth="thin"
              borderColor="secondary-stroke-1"
            >
              <Stack direction="column" spacing="lg" align="center">
                <Text variant="heading-2" color="secondary-foreground-1">
                  카운터: {count}
                </Text>
                <Stack direction="row" spacing="md">
                  <Button 
                    variant="outlined" 
                    colorScheme="secondary"
                    onClick={() => setCount(count - 1)}
                    leftIcon="minus"
                  >
                    감소
                  </Button>
                  <Button 
                    variant="filled" 
                    colorScheme="primary"
                    onClick={() => setCount(count + 1)}
                    rightIcon="plus"
                  >
                    증가
      </Button>
                </Stack>
              </Stack>
            </Box>

            {/* 특징 카드들 */}
            <Stack direction="row" spacing="lg" wrap="wrap" justify="center">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

// 재사용 가능한 컴포넌트
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Box 
    padding="lg"
    backgroundColor="secondary-2"
    borderRadius="lg"
    borderWidth="thin"
    borderColor="secondary-stroke-1"
    minWidth="250px"
    maxWidth="300px"
    basis="calc(33.333% - 1rem)"
    grow={1}
  >
    <Stack direction="column" spacing="md" align="center">
      <Icon name={icon} type="line" size="xl" color="primary-foreground-1" />
      <Text variant="heading-3" align="center">{title}</Text>
      <Text variant="body-2" color="secondary-foreground-1" align="center">
        {description}
      </Text>
    </Stack>
  </Box>
);

const features = [
  {
    icon: "rocket",
    title: "빠른 개발",
    description: "프리미티브 컴포넌트로 빠르게 UI 구성"
  },
  {
    icon: "shield",
    title: "타입 안전성",
    description: "완전한 TypeScript 지원"
  },
  {
    icon: "sparkles",
    title: "일관된 디자인",
    description: "시멘틱 토큰으로 완벽한 일관성"
  }
];

export default HomePage;
```

### 4. API Routes와 통합

```tsx
// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'LDS와 API 연동 성공!' });
}
```

```tsx
// components/DataFetcher.tsx
import { useEffect, useState } from 'react';
import { Box, Stack, Text, Button } from 'lumir-design-components';

export const DataFetcher: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result.message);
    } catch (error) {
      setData('에러 발생');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box padding="lg" backgroundColor="secondary-2" borderRadius="md">
      <Stack direction="column" spacing="md">
        <Text variant="heading-3">API 연동 예시</Text>
        <Button 
          variant="filled" 
          colorScheme="primary"
          onClick={fetchData}
          disabled={loading}
        >
          {loading ? '로딩 중...' : '데이터 가져오기'}
        </Button>
        {data && (
          <Text variant="body-1" color="secondary-foreground-1">
            {data}
          </Text>
        )}
      </Stack>
    </Box>
  );
};
```

## 📚 컴포넌트 사용 예시

### 복잡한 폼 구현

```tsx
import { Box, Stack, Text, Button } from 'lumir-design-components';
import { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <Box 
      maxWidth="600px" 
      marginX="auto" 
      padding="xl"
      backgroundColor="secondary-2"
      borderRadius="lg"
      borderWidth="thin"
      borderColor="secondary-stroke-1"
    >
      <Stack direction="column" spacing="lg">
        <Text variant="heading-2" color="primary-foreground-1">
          연락처 정보
        </Text>
        
        {/* 이름 입력 */}
        <Stack direction="column" spacing="xs">
          <Text variant="label-1" color="secondary-foreground-1">이름 *</Text>
          <Box 
            padding="sm"
            backgroundColor="secondary-1"
            borderRadius="sm"
            borderWidth="thin"
            borderColor="secondary-stroke-1"
          >
            <input 
              type="text"
              placeholder="이름을 입력하세요"
              style={{
                width: '100%',
                border: 'none',
                background: 'transparent',
                outline: 'none',
                color: 'var(--semantic-color-primary-foreground-1)'
              }}
            />
          </Box>
        </Stack>

        {/* 이메일 입력 */}
        <Stack direction="column" spacing="xs">
          <Text variant="label-1" color="secondary-foreground-1">이메일 *</Text>
          <Box 
            padding="sm"
            backgroundColor="secondary-1"
            borderRadius="sm"
            borderWidth="thin"
            borderColor="secondary-stroke-1"
          >
            <input 
              type="email"
              placeholder="email@example.com"
              style={{
                width: '100%',
                border: 'none',
                background: 'transparent',
                outline: 'none',
                color: 'var(--semantic-color-primary-foreground-1)'
              }}
            />
          </Box>
        </Stack>

        {/* 메시지 입력 */}
        <Stack direction="column" spacing="xs">
          <Text variant="label-1" color="secondary-foreground-1">메시지</Text>
          <Box 
            padding="sm"
            backgroundColor="secondary-1"
            borderRadius="sm"
            borderWidth="thin"
            borderColor="secondary-stroke-1"
          >
            <textarea 
              placeholder="메시지를 입력하세요"
              rows={4}
              style={{
                width: '100%',
                border: 'none',
                background: 'transparent',
                outline: 'none',
                resize: 'vertical',
                color: 'var(--semantic-color-primary-foreground-1)'
              }}
            />
          </Box>
        </Stack>

        {/* 버튼 그룹 */}
        <Stack direction="row" spacing="md" justify="flex-end">
          <Button variant="outlined" colorScheme="secondary">
            취소
          </Button>
          <Button variant="filled" colorScheme="primary" rightIcon="send">
            보내기
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
```

### 대시보드 레이아웃

```tsx
const Dashboard: React.FC = () => {
  return (
    <Box minHeight="100vh" backgroundColor="secondary-1">
      {/* 사이드바 + 메인 콘텐츠 */}
      <Stack direction="row" spacing="none">
        {/* 사이드바 */}
        <Box 
          width="250px"
          backgroundColor="secondary-2"
          borderRightWidth="thin"
          borderRightColor="secondary-stroke-1"
          paddingY="lg"
          minHeight="100vh"
        >
          <Stack direction="column" spacing="md">
            <Box paddingX="lg">
              <Text variant="heading-3" color="primary-foreground-1">Dashboard</Text>
            </Box>
            
            {/* 네비게이션 메뉴 */}
            {menuItems.map((item, index) => (
              <Box 
                key={index}
                paddingX="lg"
                paddingY="sm"
                backgroundColor={item.active ? "primary-1" : "transparent"}
              >
                <Stack direction="row" spacing="sm" align="center">
                  <Icon 
                    name={item.icon} 
                    type="line" 
                    size="sm" 
                    color={item.active ? "oncolor" : "secondary-foreground-1"}
                  />
                  <Text 
                    variant="body-2" 
                    color={item.active ? "oncolor" : "secondary-foreground-1"}
                  >
                    {item.label}
                  </Text>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* 메인 콘텐츠 */}
        <Box grow={1} padding="lg">
          <Stack direction="column" spacing="lg">
            {/* 헤더 */}
            <Stack direction="row" justify="space-between" align="center">
              <Text variant="title-2" color="primary-foreground-1">
                대시보드 개요
              </Text>
              <Button variant="filled" colorScheme="primary" leftIcon="plus">
                새 항목 추가
              </Button>
            </Stack>

            {/* 통계 카드들 */}
            <Stack direction="row" spacing="lg" wrap="wrap">
              {statsData.map((stat, index) => (
                <Box 
                  key={index}
                  padding="lg"
                  backgroundColor="secondary-2"
                  borderRadius="lg"
                  borderWidth="thin"
                  borderColor="secondary-stroke-1"
                  minWidth="200px"
                  basis="calc(25% - 1rem)"
                  grow={1}
                >
                  <Stack direction="column" spacing="sm">
                    <Stack direction="row" justify="space-between" align="center">
                      <Text variant="label-1" color="secondary-foreground-2">
                        {stat.label}
                      </Text>
                      <Icon name={stat.icon} type="line" size="sm" color="primary-foreground-1" />
                    </Stack>
                    <Text variant="heading-1" color="primary-foreground-1">
                      {stat.value}
                    </Text>
                    <Text variant="caption-1" color={stat.change > 0 ? "status-success" : "status-error"}>
                      {stat.change > 0 ? "+" : ""}{stat.change}%
                    </Text>
                  </Stack>
                </Box>
              ))}
            </Stack>

            {/* 콘텐츠 영역 */}
            <Box 
              padding="xl"
              backgroundColor="secondary-2"
              borderRadius="lg"
              borderWidth="thin"
              borderColor="secondary-stroke-1"
            >
              <Text variant="heading-3" color="primary-foreground-1">
                최근 활동
              </Text>
              {/* 여기에 차트나 테이블 등 추가 */}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

const menuItems = [
  { icon: "home", label: "홈", active: true },
  { icon: "chart", label: "분석", active: false },
  { icon: "users", label: "사용자", active: false },
  { icon: "settings", label: "설정", active: false }
];

const statsData = [
  { label: "총 사용자", value: "2,543", change: 12, icon: "users" },
  { label: "월 수익", value: "₩45M", change: 8, icon: "trending-up" },
  { label: "전환율", value: "3.2%", change: -2, icon: "target" },
  { label: "활성 세션", value: "892", change: 5, icon: "activity" }
];
```

## 💡 고급 사용법

### 1. 커스텀 테마 만들기

```css
/* custom-theme.css */
:root {
  /* 커스텀 색상 오버라이드 */
  --semantic-color-primary-1: #your-brand-color;
  --semantic-color-primary-foreground-1: #your-text-color;
}

/* 다크 모드 */
[data-theme="dark"] {
  --semantic-color-secondary-1: #1a1a1a;
  --semantic-color-secondary-2: #2a2a2a;
}
```

### 2. 프리미티브 확장하기

```tsx
// 커스텀 컴포넌트 생성
interface CustomCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlighted';
}

const CustomCard: React.FC<CustomCardProps> = ({ children, variant = 'default' }) => {
  const backgroundColor = variant === 'highlighted' ? 'primary-1' : 'secondary-2';
  const borderColor = variant === 'highlighted' ? 'primary-stroke-1' : 'secondary-stroke-1';
  
  return (
    <Box
      padding="lg"
      backgroundColor={backgroundColor}
      borderRadius="lg"
      borderWidth="thin"
      borderColor={borderColor}
    >
      {children}
    </Box>
  );
};
```

### 3. 성능 최적화

```tsx
// 지연 로딩
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => (
    <Box padding="lg" backgroundColor="secondary-2" borderRadius="md">
      <Text variant="body-1" color="secondary-foreground-2">로딩 중...</Text>
    </Box>
  )
});

// 메모이제이션
import { memo } from 'react';

const OptimizedCard = memo<CardProps>(({ title, content }) => (
  <Box padding="lg" backgroundColor="secondary-2" borderRadius="md">
    <Stack direction="column" spacing="md">
      <Text variant="heading-3">{title}</Text>
      <Text variant="body-2">{content}</Text>
    </Stack>
  </Box>
));
```

## 🔧 개발 도구

### Storybook 연동

```bash
# Storybook 설치
npx storybook@latest init

# LDS 토큰 추가
# .storybook/preview.js
import 'lumir-design-tokens/dist/css/tokens.css';
import 'lumir-design-components/dist/styles.css';
```

### VS Code 확장 추천

- **ES7+ React/Redux/React-Native snippets**: 빠른 컴포넌트 생성
- **Auto Rename Tag**: JSX 태그 자동 변경
- **Bracket Pair Colorizer**: 중첩 구조 시각화
- **CSS Intellisense**: CSS 변수 자동완성

## 🎯 마이그레이션 가이드

### 기존 CSS 프레임워크에서 LDS로

```tsx
// Before: Tailwind CSS
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-2">제목</h2>
  <p className="text-sm">내용</p>
</div>

// After: LDS
<Box 
  backgroundColor="primary-1" 
  color="oncolor" 
  padding="md" 
  borderRadius="lg" 
  shadow="md"
>
  <Stack direction="column" spacing="xs">
    <Text variant="heading-3" weight="bold">제목</Text>
    <Text variant="body-2">내용</Text>
  </Stack>
</Box>
```

## 📚 추가 리소스

- **📖 [컴포넌트 문서](https://lumir-design-system.github.io/storybook)**: 모든 컴포넌트의 상세한 사용법
- **🎨 [디자인 토큰 가이드](./docs/TOKENS.md)**: 1,306개 토큰 완전 가이드
- **🔧 [API 레퍼런스](./docs/API.md)**: 모든 props와 타입 정의
- **💡 [베스트 프랙티스](./docs/BEST_PRACTICES.md)**: 효율적인 LDS 활용법

## 🤝 기여하기

1. **이슈 리포팅**: [GitHub Issues](https://github.com/lumir-design-system/issues)
2. **기능 제안**: [Discussions](https://github.com/lumir-design-system/discussions)  
3. **PR 제출**: [Contributing Guide](./CONTRIBUTING.md)

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

---

**🚀 지금 시작하세요!**

```bash
npm install lumir-design-components lumir-design-tokens
```

**Global CSS 없이도 완전한 웹 애플리케이션을 만들어보세요!** 