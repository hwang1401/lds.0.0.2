# @lumir/shared

> Lumir Design System의 Foundation 토큰 및 프리미티브 컴포넌트

## 📦 설치

```bash
npm install @lumir/shared
# 또는
yarn add @lumir/shared
# 또는  
pnpm add @lumir/shared
```

## 🎯 개요

`@lumir/shared`는 Lumir Design System의 핵심 패키지로, 모든 시스템에서 공통으로 사용하는 Foundation 토큰과 프리미티브 컴포넌트를 제공합니다.

### 포함 내용

- **Foundation 토큰**: 629개의 디자인 토큰 (색상, 간격, 폰트, 그림자, 테두리)
- **프리미티브 컴포넌트**: Text, Icon, Frame, Surface, Interactive, Sizing
- **아이콘 라이브러리**: 293개의 SVG 아이콘
- **타입 정의**: 완전한 TypeScript 지원

## 🚀 사용법

### CSS 토큰 가져오기

```css
/* Foundation 토큰 (필수) */
@import '@lumir/shared/dist/css/foundation-tokens.css';
```

### 컴포넌트 사용

```tsx
import { Text, Icon, Frame, Surface } from '@lumir/shared';

export default function MyComponent() {
  return (
    <Surface background="primary-system01" padding="md">
      <Frame direction="column" gap="sm">
        <Text variant="heading-1" color="oncolor">
          제목
        </Text>
        <Frame direction="row" gap="xs" align="center">
          <Icon name="LineIconsCheckmarkCheckmarkIcon" size="sm" />
          <Text variant="body-1" color="oncolor">
            내용
          </Text>
        </Frame>
      </Frame>
    </Surface>
  );
}
```

## 📚 컴포넌트 API

### Text

텍스트 표시를 위한 기본 컴포넌트

```tsx
<Text 
  variant="heading-1" | "heading-2" | "heading-3" | "body-1" | "body-2" | "caption"
  color="primary-system01" | "secondary-system01-1" | "oncolor" | ...
  weight="regular" | "bold"
  align="left" | "center" | "right"
>
  텍스트 내용
</Text>
```

### Icon

SVG 아이콘 표시 컴포넌트

```tsx
<Icon 
  name="LineIconsCheckmarkCheckmarkIcon" // 293개 아이콘 중 선택
  size="xs" | "sm" | "md" | "lg" | "xl"
/>
```

### Frame

레이아웃을 위한 플렉스 컨테이너

```tsx
<Frame
  direction="row" | "column"
  gap="none" | "xs" | "sm" | "md" | "lg" | "xl"
  align="flex-start" | "center" | "flex-end" | "stretch"
  justify="flex-start" | "center" | "flex-end" | "space-between" | "space-around"
  wrap="nowrap" | "wrap"
>
  {children}
</Frame>
```

### Surface

배경과 테두리를 가진 컨테이너

```tsx
<Surface
  background="primary-system01" | "secondary-system01-1" | ...
  borderColor="primary-system01" | ...
  borderWidth="none" | "thin" | "thick"
  borderStyle="solid" | "dashed" | "dotted"
  borderRadius="none" | "xs" | "sm" | "md" | "lg" | "xl"
  padding="none" | "xs" | "sm" | "md" | "lg" | "xl"
>
  {children}
</Surface>
```

## 🎨 Foundation 토큰

### 색상 토큰

```css
/* 기본 색상 */
var(--foundation-foundation-color-blue-light-50)
var(--foundation-foundation-color-blue-dark-50)
var(--foundation-foundation-color-purple-light-50)
var(--foundation-foundation-color-green-light-50)

/* 시스템 색상 */
var(--foundation-foundation-color-primary-system01)
var(--foundation-foundation-color-secondary-system01-1)
var(--foundation-foundation-color-primary-system02)
```

### 간격 토큰

```css
var(--foundation-foundation-spacing-xs)
var(--foundation-foundation-spacing-sm)
var(--foundation-foundation-spacing-md)
var(--foundation-foundation-spacing-lg)
var(--foundation-foundation-spacing-xl)
```

### 폰트 토큰

```css
var(--foundation-foundation-font-family-body)
var(--foundation-foundation-font-fontsize-140)
var(--foundation-foundation-font-fontsize-160)
var(--foundation-foundation-font-fontweight-regular)
var(--foundation-foundation-font-fontweight-bold)
```

## 📱 반응형 지원

모든 컴포넌트는 반응형으로 설계되었으며, CSS Grid와 Flexbox를 활용합니다.

```css
/* 모바일 우선 접근 */
@media (max-width: 768px) {
  /* 모바일 스타일 */
}

@media (min-width: 769px) {
  /* 데스크톱 스타일 */
}
```

## ♿ 접근성

WCAG 2.1 AA 기준을 준수합니다:

- 색상 대비 4.5:1 이상
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 포커스 인디케이터 제공

## 🔧 TypeScript 지원

완전한 타입 정의를 제공합니다:

```tsx
import type { 
  TextProps, 
  IconProps, 
  FrameProps, 
  SurfaceProps 
} from '@lumir/shared';

const MyText: React.FC<TextProps> = ({ variant, children }) => {
  return <Text variant={variant}>{children}</Text>;
};
```

## 📄 라이선스

ISC License

## 🤝 기여

버그 리포트나 기능 제안은 [GitHub Issues](https://github.com/your-org/lumir-design-system/issues)에 올려주세요.

---

**Lumir Design System의 핵심 패키지입니다. 다른 시스템 패키지와 함께 사용하세요!** 