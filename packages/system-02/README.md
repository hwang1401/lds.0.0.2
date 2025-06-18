# @lumir/system-02

> Modern & Friendly - Lumir Design System의 System-02 컴포넌트

## 📦 설치

```bash
# 필수 의존성과 함께 설치
npm install @lumir/shared @lumir/system-02
# 또는
yarn add @lumir/shared @lumir/system-02
# 또는  
pnpm add @lumir/shared @lumir/system-02
```

## 🎯 개요

System-02는 **Modern & Friendly** 테마로, 커머스, 소비자 대상 애플리케이션, 친근한 사용자 인터페이스에 적합한 컴포넌트를 제공합니다.

### 특징

- **친근하고 현대적인 디자인**
- **퍼플 계열 색상 테마**
- **둥근 모서리와 부드러운 그림자**
- **높은 사용자 친화성**
- **소비자 환경에 최적화**

## 🚀 사용법

### CSS 스타일 가져오기

```css
/* Foundation 토큰 (필수) */
@import '@lumir/shared/dist/css/foundation-tokens.css';

/* System-02 토큰 */
@import '@lumir/system-02/dist/css/tokens.css';
```

### 기본 사용법

```tsx
import { Button, Card, Field } from '@lumir/system-02';
import { Text, Icon, Frame } from '@lumir/shared';

export default function ShoppingCart() {
  return (
    <Card variant="elevated" padding="lg">
      <Frame direction="column" gap="md">
        <Text variant="heading-2" color="primary-system02">
          장바구니
        </Text>
        
        <Field
          label="쿠폰 코드"
          placeholder="쿠폰 코드를 입력하세요"
          type="text"
        />
        
        <Frame direction="row" gap="sm">
          <Button variant="filled" intent="primary" size="lg">
            <Icon name="LineIconsShoppingCartIcon" size="sm" />
            결제하기
          </Button>
          <Button variant="outlined" intent="secondary">
            계속 쇼핑
          </Button>
        </Frame>
      </Frame>
    </Card>
  );
}
```

## 🧩 컴포넌트

### Button

친근한 스타일의 버튼 컴포넌트 (더 둥근 모서리)

```tsx
<Button 
  variant="filled" | "outlined" | "transparent"
  intent="primary" | "secondary" | "danger" | "success"
  size="sm" | "md" | "lg" | "xl"  // System-02는 xl 크기 지원
  loading={false}
  disabled={false}
  onClick={() => {}}
>
  버튼 텍스트
</Button>
```

### SegmentButton

친근한 스타일의 세그먼트 버튼 (더 둥근 모서리)

```tsx
<SegmentButton 
  mode="single" | "multi"
  selectedValues={['option1']}
  onChange={(values) => console.log(values)}
  size="sm" | "md" | "lg"
  variant="primary" | "secondary"
>
  <SegmentButton.Item value="option1">옵션 1</SegmentButton.Item>
  <SegmentButton.Item value="option2">옵션 2</SegmentButton.Item>
  <SegmentButton.Item value="option3">옵션 3</SegmentButton.Item>
</SegmentButton>
```

## 🎨 디자인 토큰

### 색상 시스템

```css
/* Primary 색상 (퍼플 계열) */
var(--foundation-foundation-color-primary-system02)

/* Secondary 색상 */
var(--foundation-foundation-color-secondary-system02-1)
var(--foundation-foundation-color-secondary-system02-2)
```

### 테두리 반경

```css
/* System-02는 더 둥근 모서리 */
var(--foundation-foundation-border-radius-lg)   /* 12px - System-02 기본 */
var(--foundation-foundation-border-radius-xl)   /* 16px */
```

## 📄 라이선스

ISC License

---

**친근하고 현대적인 인터페이스가 필요하다면 System-02를 선택하세요! 💜** 