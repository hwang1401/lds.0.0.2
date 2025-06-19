# Lumir Design System 완전 가이드

## 📋 개요

Lumir 디자인 시스템은 모노레포 구조의 계층적 디자인 시스템으로, **프리미티브(Primitives)** → **컴파운드(Compounds)** 흐름을 통해 체계적인 컴포넌트 구조를 제공합니다.

### 🏗 시스템 구조

```
lumir-design-system/
├── packages/shared/           # 공통 프리미티브 컴포넌트
│   └── primitives/
├── packages/system-01/        # Professional & Clean 테마
│   └── compounds/
├── packages/system-02/        # Friendly & Bright 테마
│   └── compounds/
├── packages/system-03/        # Modern & Software 테마 (계획됨)
├── packages/system-04/        # Aerospace Control 테마 (계획됨)
└── packages/system-05/        # Aerospace Dashboard 테마 (계획됨)
```

### 🎨 시스템 테마

- **System-01**: Professional & Clean (GitHub, 백오피스)
- **System-02**: Friendly & Bright (커머스, 소비자 대상)
- **System-03**: Modern & Software (Discord, Slack)
- **System-04**: Aerospace Control (위성 컨트롤, 미션 크리티컬)
- **System-05**: Aerospace Dashboard (우주 항공 대시보드)

---

## 🔧 프리미티브 컴포넌트 (packages/shared/primitives)

프리미티브 컴포넌트는 모든 시스템에서 공통으로 사용되는 기본 구성 요소입니다.

### 1. Text 컴포넌트

**역할**: 순수한 타이포그래피 프리미티브

```typescript
interface TextProps {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  variant?: TextVariant;        // 텍스트 스타일 변형
  weight?: 'regular' | 'medium' | 'bold';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  noWrap?: boolean;            // 한 줄 표시
  truncate?: number;           // 지정 라인 수 이후 생략
  children: React.ReactNode;
}

type TextVariant = 
  | 'hero-1'    // 48px, lineHeight: 1.6
  | 'hero-2'    // 36px, lineHeight: 1.6
  | 'title-1'   // 30px, lineHeight: 1.4
  | 'title-2'   // 24px, lineHeight: 1.4
  | 'heading-1' // 20px, lineHeight: 1.4
  | 'heading-2' // 20px, lineHeight: 1.4
  | 'heading-3' // 16px, lineHeight: 1.4
  | 'body-1'    // 16px, lineHeight: 1.6
  | 'body-2'    // 14px, lineHeight: 1.6
  | 'reading'   // 16px, lineHeight: 1.8
  | 'label-1'   // 14px, lineHeight: 1.4
  | 'label-2'   // 12px, lineHeight: 1.4
  | 'caption-1' // 12px, lineHeight: 1.4
  | 'caption-2' // 12px, lineHeight: 1.2
  | 'caption-3'; // 12px, lineHeight: 1.2
```

**사용 예시**:
```tsx
// 기본 사용
<Text variant="title-1" weight="bold">제목 텍스트</Text>

// Surface와 조합하여 색상 적용
<Surface foreground="primary-system01-1-rest">
  <Text variant="body-1">색상이 적용된 텍스트</Text>
</Surface>

// 반응형 사용
<Text 
  variant={{ mobile: 'body-1', desktop: 'title-1' }}
  weight={{ mobile: 'regular', desktop: 'bold' }}
  textAlign={{ mobile: 'center', desktop: 'left' }}
>
  반응형 텍스트
</Text>
```

### 2. Icon 컴포넌트

**역할**: 아이콘 표시 프리미티브

```typescript
interface IconProps {
  name: IconName;              // 생성된 아이콘 이름
  size?: IconSize;             // 아이콘 크기
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
  onClick?: () => void;
}

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
// xs=12px, sm=16px, md=20px, lg=24px, xl=28px, xxl=32px, xxxl=36px, xxxxl=40px
```

**사용 예시**:
```tsx
// Surface의 foreground 색상 상속
<Surface foreground="primary-system01-1-rest">
  <Icon name="heart" size="lg" />
  <Text>같은 색상 적용</Text>
</Surface>

// 상태별 색상 변화도 자동 적용
<Surface foreground="primary-system01-1-hovered">
  <Icon name="settings" />
</Surface>
```

### 3. Frame 컴포넌트

**역할**: 레이아웃, 구조, 간격을 담당하는 구조적 프리미티브

```typescript
interface FrameProps {
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 기본 레이아웃
  display?: ResponsiveOrSingle<DisplayValue>;
  position?: ResponsiveOrSingle<PositionValue>;
  overflow?: ResponsiveOrSingle<OverflowValue>;
  
  // Flexbox 관련
  direction?: ResponsiveOrSingle<FlexDirection>;
  wrap?: ResponsiveOrSingle<FlexWrap>;
  justify?: ResponsiveOrSingle<JustifyContent>;
  align?: ResponsiveOrSingle<AlignItems>;
  gap?: ResponsiveOrSingle<SpacingValue | string | number>;
  
  // Grid 관련
  gridTemplateColumns?: ResponsiveOrSingle<string>;
  gridTemplateRows?: ResponsiveOrSingle<string>;
  
  // Spacing 관련 (시멘틱 토큰)
  padding?: ResponsiveOrSingle<SpacingValue>;
  margin?: ResponsiveOrSingle<SpacingValue>;
  paddingX?: ResponsiveOrSingle<SpacingValue>;
  paddingY?: ResponsiveOrSingle<SpacingValue>;
  
  // Size 관련
  width?: ResponsiveOrSingle<string | number>;
  height?: ResponsiveOrSingle<string | number>;
  fill?: boolean; // 부모 컨테이너 완전 채움
  
  children?: React.ReactNode;
}

type SpacingValue = 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
```

**사용 예시**:
```tsx
// 기본 Flexbox 레이아웃
<Frame display="flex" justify="center" align="center" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Frame>

// Grid 레이아웃
<Frame display="grid" gridTemplateColumns="1fr 1fr" gap="lg">
  <div>Left</div>
  <div>Right</div>
</Frame>

// Surface와 조합
<Surface backgroundColor="primary" borderRadius="md">
  <Frame padding="xl" display="flex" direction="column" gap="sm">
    <Text>Title</Text>
    <Text>Content</Text>
  </Frame>
</Surface>
```

### 4. Surface 컴포넌트

**역할**: 색상, 그림자, 반지름, 테두리 등 시각적 표면 속성 담당

```typescript
interface SurfaceProps {
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 배경색 (시스템 + 위계 + 상태 체계)
  background?: BackgroundToken;
  
  // 전경색 (시스템 + 위계 + 상태 체계)
  foreground?: ForegroundToken;
  
  // 테두리 관련
  borderColor?: StrokeToken;
  borderWidth?: BorderWidthToken;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  
  // 반지름
  borderRadius?: RadiusToken;
  
  // 그림자
  boxShadow?: ShadowToken | 'none';
  
  // 오버레이
  overlay?: OverlayToken;
  
  fill?: boolean;
  children?: React.ReactNode;
}

// 시스템 + 위계 + 상태 기반 토큰 예시
type BackgroundToken = 
  | 'primary-system01-1-rest' | 'primary-system01-1-hovered' | 'primary-system01-1-pressed'
  | 'primary-system02-1-rest' | 'primary-system02-1-hovered' | 'primary-system02-1-pressed'
  | 'secondary-system01-1-rest' | 'secondary-system01-2-rest'
  | 'cta-system01-1-rest' | 'cta-system02-1-rest'
  // ... 더 많은 토큰들
```

### 5. Interactive 컴포넌트

**역할**: 인터랙션 관련 속성(포커스, z-index, 커서, 호버 등) 담당

```typescript
interface InteractiveProps {
  as?: 'div' | 'section' | 'button' | string;
  
  // z-index 관련
  zIndex?: ResponsiveOrSingle<ZIndexLevel | number>;
  
  // 커서 관련
  cursor?: ResponsiveOrSingle<CursorType>;
  
  // 포커스 관련
  focusStyle?: FocusStyle;
  focusWithin?: boolean;
  
  // 투명도
  opacity?: ResponsiveOrSingle<OpacityLevel>;
  
  // 호버 효과
  hoverOpacity?: OpacityLevel;
  hoverScale?: number;
  hoverElevation?: boolean;
  
  // 상태
  pressed?: boolean;
  disabled?: boolean;
  
  children?: React.ReactNode;
}

type ZIndexLevel = 'base' | 'raised' | 'navigation' | 'header' | 'dropdown' | 'sticky' | 'overlay' | 'modal' | 'toast' | 'popover' | 'tooltip';
type CursorType = 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'not-allowed' | string;
type FocusStyle = 'outline' | 'ring' | 'none';
```

### 6. Sizing 컴포넌트

**역할**: 크기, 비율, 이미지 관련 속성 담당

```typescript
interface SizingProps {
  // 크기 관련
  width?: ResponsiveOrSingle<WidthValue>;
  height?: ResponsiveOrSingle<HeightValue>;
  
  // 이미지 관련
  objectFit?: ResponsiveOrSingle<ObjectFitValue>;
  objectPosition?: ResponsiveOrSingle<ObjectPositionValue>;
  aspectRatio?: ResponsiveOrSingle<AspectRatioValue>;
  
  children?: React.ReactNode;
}
```

### 7. Divider 컴포넌트

**역할**: 구분선 표시

```typescript
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  thickness?: 'thin' | 'medium' | 'thick';
  length?: string | number;
}
```

### 8. Asterisk 컴포넌트

**역할**: 필수 입력 표시용 별표

```typescript
interface AsteriskProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'error' | 'warning' | 'inherit';
}
```

---

## 🧩 컴파운드 컴포넌트

프리미티브 컴포넌트들을 조합하여 만든 완성된 UI 컴포넌트들입니다.

### System-01 (Professional & Clean) 컴포넌트

#### Button 컴포넌트

```typescript
interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'transparent';
  buttonType?: 'text-icon' | 'text-only' | 'icon-only';
  colorScheme?: 'primary' | 'secondary' | 'cta';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isFullWidth?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  isLoading?: boolean;
  isSelected?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}
```

**사용 예시**:
```tsx
// 기본 버튼
<Button variant="filled" colorScheme="primary" size="md">
  클릭하세요
</Button>

// 아이콘이 있는 버튼
<Button 
  variant="outlined" 
  buttonType="text-icon" 
  leftIcon="plus" 
  colorScheme="secondary"
>
  추가하기
</Button>

// 전체 너비 버튼
<Button 
  variant="filled" 
  colorScheme="cta" 
  isFullWidth 
  textAlign="center"
>
  구매하기
</Button>
```

#### Card 컴포넌트

```typescript
interface CardProps {
  variant?: 'filled' | 'outlined' | 'transparent';
  title: string;
  badge?: {
    text: string;
    color?: BadgeProps['color'];
    iconName?: IconName;
  };
  showBadge?: boolean;
  description?: string;
  additionalInfo?: string;
  statusText?: string;
  actionButton?: {
    text?: string;
    iconName?: IconName;
    onClick?: ButtonProps['onClick'];
    disabled?: ButtonProps['disabled'];
  };
  showActionButton?: boolean;
  imageUrl?: string;
  showImage?: boolean;
  imageHeight?: string | number;
  onClick?: () => void;
}
```

#### Badge 컴포넌트

```typescript
interface BadgeProps {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  style?: 'filled' | 'outlined' | 'soft';
  layout?: 'text-only' | 'icon-text' | 'icon-only';
  type?: 'default' | 'pill' | 'circular';
  iconName?: IconName;
  children: React.ReactNode;
}
```

### System-02 (Friendly & Bright) 컴포넌트

System-02는 System-01과 동일한 인터페이스를 가지지만, 시각적 스타일이 다릅니다:

- **더 큰 아이콘 크기**: System-01보다 한 단계 큰 아이콘 사용
- **더 여유로운 패딩**: 친근하고 편안한 느낌을 위한 넓은 간격
- **다른 색상 토큰**: `system02` 토큰 사용 (`primary-system02-1-rest` 등)

```tsx
// System-01과 동일한 사용법
import { Button } from 'lumir-design-system-system-02';

<Button variant="filled" colorScheme="primary">
  System-02 스타일 버튼
</Button>
```

---

## 🎯 사용 방법

### 1. 패키지 설치

```bash
npm install lumir-design-system-shared
npm install lumir-design-system-system-01
npm install lumir-design-system-system-02
```

### 2. Import 방법

```typescript
// 프리미티브 컴포넌트 (공통)
import { Text, Icon, Frame, Surface, Interactive, Sizing } from 'lumir-design-system-shared';

// System-01 컴파운드 컴포넌트
import { Button, Card, Badge } from 'lumir-design-system-system-01';

// System-02 컴파운드 컴포넌트
import { Button, Card, Badge } from 'lumir-design-system-system-02';
```

### 3. 기본 사용 패턴

```tsx
// 프리미티브 조합 예시
<Surface 
  background="primary-system01-1-rest" 
  foreground="primary-system01-oncolor"
  borderRadius="md"
  boxShadow="20"
>
  <Frame padding="lg" display="flex" direction="column" gap="md">
    <Text variant="title-2" weight="bold">제목</Text>
    <Frame display="flex" align="center" gap="sm">
      <Icon name="star" size="sm" />
      <Text variant="body-2">평점 4.8</Text>
    </Frame>
  </Frame>
</Surface>

// 컴파운드 컴포넌트 사용 예시
<Card
  title="상품명"
  description="브랜드명"
  imageUrl="/product.jpg"
  badge={{ text: "NEW", color: "success" }}
  actionButton={{ 
    text: "구매하기", 
    onClick: handlePurchase,
    iconName: "cart"
  }}
  onClick={handleCardClick}
/>
```

### 4. 반응형 사용

```tsx
<Frame
  display={{ mobile: 'block', desktop: 'flex' }}
  direction={{ desktop: 'row' }}
  gap={{ mobile: 'sm', desktop: 'lg' }}
  padding={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
>
  <Text
    variant={{ mobile: 'body-2', desktop: 'title-1' }}
    weight={{ mobile: 'regular', desktop: 'bold' }}
    textAlign={{ mobile: 'center', desktop: 'left' }}
  >
    반응형 텍스트
  </Text>
</Frame>
```

---

## 🔍 Foundation 토큰 시스템

모든 CSS 값은 반드시 foundation-tokens.css의 토큰을 사용해야 합니다.

### 토큰 카테고리

- **색상**: `--foundation-foundation-color-*`
- **간격**: `--foundation-foundation-spacing-*`
- **폰트**: `--foundation-foundation-font-*`
- **그림자**: `--foundation-foundation-shadow-*`
- **테두리**: `--foundation-foundation-border-*`

### 시스템별 색상 체계

```css
/* System-01 Primary */
--semantic-primary-system01-1-rest: var(--foundation-foundation-color-blue-dark-50);
--semantic-primary-system01-1-hovered: var(--foundation-foundation-color-blue-dark-60);

/* System-02 Primary */
--semantic-primary-system02-1-rest: var(--foundation-foundation-color-green-light-50);
--semantic-primary-system02-1-hovered: var(--foundation-foundation-color-green-light-60);
```

---

## ✅ 접근성 기준 (WCAG 2.1 AA)

### 색상 대비 검증
- 일반 텍스트: 4.5:1 이상
- 대형 텍스트: 3:1 이상
- UI 컴포넌트: 3:1 이상

### 키보드 접근성
- 모든 인터랙티브 요소에 키보드 접근 가능
- 포커스 스타일 명시 (최소 2px 두께)
- Tab 순서 논리적 구성

### 터치 타겟 크기
- 최소 크기: 44px × 44px (터치)
- 최소 크기: 24px × 24px (마우스)

---

## 📚 컴포넌트 완전 목록

### 프리미티브 (packages/shared/primitives)
1. **Text** - 타이포그래피
2. **Icon** - 아이콘 표시
3. **Frame** - 레이아웃/구조
4. **Surface** - 시각적 표면
5. **Interactive** - 인터랙션 속성
6. **Sizing** - 크기/비율
7. **Divider** - 구분선
8. **Asterisk** - 필수 표시

### 컴파운드 (system-01/02)
1. **Button** - 버튼
2. **Card** - 카드
3. **Badge** - 뱃지
4. **Checkbox** - 체크박스
5. **Radio** - 라디오 버튼
6. **Chip** - 칩
7. **Field** - 입력 필드
8. **Label** - 라벨
9. **Link** - 링크
10. **Menu** - 메뉴
11. **OptionList** - 옵션 리스트
12. **SegmentButton** - 세그먼트 버튼
13. **Tab** - 탭
14. **TextDisplay** - 텍스트 디스플레이
15. **ComboBox** - 콤보박스

이 가이드를 통해 Lumir 디자인 시스템의 모든 컴포넌트를 효과적으로 활용할 수 있습니다. 