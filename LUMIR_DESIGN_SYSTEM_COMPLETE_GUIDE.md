# Lumir Design System 완전 가이드

## 📋 개요

Lumir 디자인 시스템은 모노레포 구조의 계층적 디자인 시스템으로, **프리미티브(Primitives)** → **컴파운드(Compounds)** 흐름을 통해 체계적인 컴포넌트 구조를 제공합니다.

### 🏗 시스템 구조

```
lumir-design-system/
├── packages/shared/           # 공통 프리미티브 컴포넌트 & Foundation 토큰
│   ├── foundation.json        # Foundation 토큰 (색상, 폰트, 간격 등)
│   ├── icons/                 # 아이콘 라이브러리
│   └── src/primitives/        # 8개 프리미티브 컴포넌트
├── packages/system-01/        # Professional & Clean 테마
│   ├── semantic.json          # System-01 시멘틱 토큰
│   └── src/compounds/         # 15개 컴파운드 컴포넌트
├── packages/system-02/        # Friendly & Bright 테마
│   ├── semantic.json          # System-02 시멘틱 토큰
│   └── src/compounds/         # 15개 컴파운드 컴포넌트 (동일한 인터페이스)
├── packages/system-03/        # Modern & Software 테마 (계획됨)
├── packages/system-04/        # Aerospace Control 테마 (계획됨)
└── packages/system-05/        # Aerospace Dashboard 테마 (계획됨)
```

### 🎨 시스템 테마 특성

#### System-01: Professional & Clean
- **대상**: GitHub, 백오피스, 엔터프라이즈 도구
- **색상**: Blue 기반 (blue.light.50)
- **모서리**: sm radius (4px) - 직각에 가까운 모서리
- **패딩**: 타이트하고 기능성 중심 (sm, md)
- **아이콘**: 작고 정확한 크기 (xs=12px, sm=16px, md=20px)

#### System-02: Friendly & Bright  
- **대상**: 커머스, 소비자 대상 서비스
- **색상**: Green 기반 (green.light.50)
- **모서리**: xl radius (12px) - 친근하고 둥근 모서리
- **패딩**: 여유롭고 편안한 간격 (md, lg, xl)
- **아이콘**: 더 큰 크기로 친근함 강조 (sm=16px, md=20px, lg=24px)

---

## 🔧 프리미티브 컴포넌트 (packages/shared/primitives)

프리미티브 컴포넌트는 모든 시스템에서 공통으로 사용되는 기본 구성 요소입니다. 총 8개의 프리미티브가 있으며, 각각 명확한 책임 분리를 통해 조합 가능한 구조를 제공합니다.

### 1. Text 컴포넌트

**역할**: 순수한 타이포그래피 프리미티브 - 색상은 Surface의 foreground 속성을 상속받음

```typescript
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  variant?: ResponsiveOrSingle<TextVariant>;        // 반응형 텍스트 스타일
  weight?: ResponsiveOrSingle<FontWeight>;          // 반응형 굵기
  textAlign?: ResponsiveOrSingle<TextAlign>;        // 반응형 정렬
  transform?: ResponsiveOrSingle<TextTransform>;    // 반응형 변형
  noWrap?: boolean;                                 // 한 줄 표시
  truncate?: number;                                // 지정 라인 수 이후 생략
  children: React.ReactNode;
}

type TextVariant = 
  | 'hero-1'    // 48px, lineHeight: 1.6, letterSpacing: -0.025em
  | 'hero-2'    // 36px, lineHeight: 1.6, letterSpacing: -0.025em
  | 'title-1'   // 30px, lineHeight: 1.4, letterSpacing: -0.025em
  | 'title-2'   // 24px, lineHeight: 1.4, letterSpacing: -0.025em
  | 'heading-1' // 20px, lineHeight: 1.4, letterSpacing: -0.05em
  | 'heading-2' // 20px, lineHeight: 1.4, letterSpacing: -0.05em
  | 'heading-3' // 16px, lineHeight: 1.4, letterSpacing: 0em
  | 'body-1'    // 16px, lineHeight: 1.6, letterSpacing: 0.025em
  | 'body-2'    // 14px, lineHeight: 1.6, letterSpacing: 0.025em
  | 'reading'   // 16px, lineHeight: 1.8, letterSpacing: 0.05em
  | 'label-1'   // 14px, lineHeight: 1.4, letterSpacing: 0.05em
  | 'label-2'   // 12px, lineHeight: 1.4, letterSpacing: 0.05em
  | 'caption-1' // 12px, lineHeight: 1.4, letterSpacing: 0.075em
  | 'caption-2' // 12px, lineHeight: 1.2, letterSpacing: 0.075em
  | 'caption-3'; // 12px, lineHeight: 1.2, letterSpacing: 0.075em

type FontWeight = 'regular' | 'medium' | 'bold';
type TextAlign = 'left' | 'center' | 'right' | 'justify';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
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

**역할**: 아이콘 표시 프리미티브 - 색상은 Surface의 foreground 속성을 상속받음

```typescript
interface IconProps {
  name: IconName;              // 생성된 아이콘 이름 (293개 아이콘 사용 가능)
  size?: IconSize;             // 아이콘 크기 토큰
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-hidden'?: boolean;     // true시 스크린 리더에서 무시 (default: false)
  onClick?: () => void;
}

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
// xs=12px, sm=16px, md=20px, lg=24px, xl=28px, xxl=32px, xxxl=36px, xxxxl=40px

// 사용 가능한 아이콘 예시 (generated/index.ts에서 자동 생성됨)
type IconName = 
  | 'LineIconsActivityIcon' | 'LineIconsAlertCircleIcon' | 'LineIconsAlertTriangleIcon'
  | 'FlatIconsAdministratorIcon' | 'FlatIconsBuildingIcon' | 'FlatIconsCalendarSelectedIcon'
  // ... 총 293개 아이콘
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

**역할**: 레이아웃, 구조, 간격을 담당하는 구조적 프리미티브 - 모든 CSS 레이아웃 속성 관리

```typescript
interface FrameProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 기본 레이아웃
  display?: ResponsiveOrSingle<DisplayValue>;
  position?: ResponsiveOrSingle<PositionValue>;
  top?: ResponsiveOrSingle<string | number>;
  right?: ResponsiveOrSingle<string | number>;
  bottom?: ResponsiveOrSingle<string | number>;
  left?: ResponsiveOrSingle<string | number>;
  zIndex?: ResponsiveOrSingle<number>;
  overflow?: ResponsiveOrSingle<OverflowValue>;
  overflowX?: ResponsiveOrSingle<OverflowValue>;
  overflowY?: ResponsiveOrSingle<OverflowValue>;
  
  // Flexbox 관련
  direction?: ResponsiveOrSingle<FlexDirection>;
  wrap?: ResponsiveOrSingle<FlexWrap>;
  justify?: ResponsiveOrSingle<JustifyContent>;
  align?: ResponsiveOrSingle<AlignItems>;
  alignContent?: ResponsiveOrSingle<AlignContent>;
  flex?: ResponsiveOrSingle<string | number>;
  flexGrow?: ResponsiveOrSingle<number>;
  flexShrink?: ResponsiveOrSingle<number>;
  flexBasis?: ResponsiveOrSingle<string | number>;
  alignSelf?: ResponsiveOrSingle<AlignItems>;
  order?: ResponsiveOrSingle<number>;
  
  // Gap (Flexbox, Grid 공통)
  gap?: ResponsiveOrSingle<SpacingValue | string | number>;
  rowGap?: ResponsiveOrSingle<SpacingValue | string | number>;
  columnGap?: ResponsiveOrSingle<SpacingValue | string | number>;
  
  // Grid 관련
  gridTemplateColumns?: ResponsiveOrSingle<string>;
  gridTemplateRows?: ResponsiveOrSingle<string>;
  gridColumn?: ResponsiveOrSingle<string>;
  gridRow?: ResponsiveOrSingle<string>;
  
  // Spacing 관련 (시멘틱 토큰)
  padding?: ResponsiveOrSingle<SpacingValue>;
  margin?: ResponsiveOrSingle<SpacingValue>;
  paddingX?: ResponsiveOrSingle<SpacingValue>;
  paddingY?: ResponsiveOrSingle<SpacingValue>;
  marginX?: ResponsiveOrSingle<SpacingValue>;
  marginY?: ResponsiveOrSingle<SpacingValue>;
  paddingTop?: ResponsiveOrSingle<SpacingValue>;
  paddingRight?: ResponsiveOrSingle<SpacingValue>;
  paddingBottom?: ResponsiveOrSingle<SpacingValue>;
  paddingLeft?: ResponsiveOrSingle<SpacingValue>;
  marginTop?: ResponsiveOrSingle<SpacingValue>;
  marginRight?: ResponsiveOrSingle<SpacingValue>;
  marginBottom?: ResponsiveOrSingle<SpacingValue>;
  marginLeft?: ResponsiveOrSingle<SpacingValue>;
  
  // Size 관련
  width?: ResponsiveOrSingle<string | number>;
  height?: ResponsiveOrSingle<string | number>;
  minWidth?: ResponsiveOrSingle<string | number>;
  minHeight?: ResponsiveOrSingle<string | number>;
  maxWidth?: ResponsiveOrSingle<string | number>;
  maxHeight?: ResponsiveOrSingle<string | number>;
  fill?: boolean; // 부모 컨테이너 완전 채움 (width: 100%, height: 100%)
  
  children?: React.ReactNode;
}

// 모든 타입 정의
type DisplayValue = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none' | 'contents';
type PositionValue = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
type OverflowValue = 'visible' | 'hidden' | 'scroll' | 'auto';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type AlignContent = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
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

**역할**: 색상, 그림자, 반지름, 테두리 등 시각적 표면 속성만 담당하는 순수한 프리미티브

```typescript
interface SurfaceProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 배경색 (시스템 + 위계 + 상태 체계)
  background?: BackgroundToken;
  
  // 전경색 (시스템 + 위계 + 상태 체계) - 자식 Text, Icon이 상속받음
  foreground?: ForegroundToken;
  
  // 테두리 관련 (시스템 + 위계 + 상태 체계)
  borderColor?: StrokeToken;
  borderWidth?: BorderWidthToken;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  
  // 반지름 (시멘틱 토큰)
  borderRadius?: RadiusToken;
  
  // 그림자 (Foundation 토큰)
  boxShadow?: ShadowToken | 'none';
  
  // 오버레이
  overlay?: OverlayToken;
  
  // 부모 컨테이너 완전 채움
  fill?: boolean;
  children?: React.ReactNode;
}

// 시스템별 색상 토큰 체계 (실제 사용 가능한 모든 토큰)
type BackgroundToken = 
  // System-01 Primary (Blue 기반)
  | 'primary-system01-1-rest' | 'primary-system01-1-hovered' | 'primary-system01-1-pressed' 
  | 'primary-system01-1-selected' | 'primary-system01-1-disabled'
  | 'primary-system01-2-rest' | 'primary-system01-2-hovered' | 'primary-system01-2-pressed'
  | 'primary-system01-2-selected' | 'primary-system01-2-disabled'
  
  // System-02 Primary (Green 기반)
  | 'primary-system02-1-rest' | 'primary-system02-1-hovered' | 'primary-system02-1-pressed'
  | 'primary-system02-1-selected' | 'primary-system02-1-disabled'
  | 'primary-system02-2-rest' | 'primary-system02-2-hovered' | 'primary-system02-2-pressed'
  | 'primary-system02-2-selected' | 'primary-system02-2-disabled'
  
  // Secondary (Grey 기반, 모든 시스템 공통)
  | 'secondary-system01-1-rest' | 'secondary-system01-1-hovered' | 'secondary-system01-1-pressed'
  | 'secondary-system01-1-selected' | 'secondary-system01-1-disabled'
  | 'secondary-system01-2-rest' | 'secondary-system01-2-hovered' | 'secondary-system01-2-pressed'
  | 'secondary-system01-2-selected' | 'secondary-system01-2-disabled'
  | 'secondary-system01-3-rest' | 'secondary-system01-3-hovered' | 'secondary-system01-3-pressed'
  | 'secondary-system01-3-selected' | 'secondary-system01-3-disabled'
  | 'secondary-system01-inverse-rest'
  
  // CTA (Call To Action)
  | 'cta-system01-1-rest' | 'cta-system01-1-hovered' | 'cta-system01-1-pressed' | 'cta-system01-1-disabled'
  | 'cta-system02-1-rest' | 'cta-system02-1-hovered' | 'cta-system02-1-pressed' | 'cta-system02-1-disabled'
  
  // Status (모든 시스템 공통)
  | 'error-1-rest' | 'error-1-hovered' | 'error-1-pressed' | 'error-1-selected' | 'error-1-disabled'
  | 'warning-1-rest' | 'warning-1-hovered' | 'warning-1-pressed' | 'warning-1-selected' | 'warning-1-disabled'
  | 'error' | 'warning' | 'success' | 'info' | 'focused'; // 호환성

type ForegroundToken = BackgroundToken | 'primary-system01-oncolor' | 'primary-system02-oncolor' 
  | 'secondary-system01-oncolor' | 'secondary-system02-oncolor' | 'cta-system01-oncolor' 
  | 'cta-system02-oncolor' | 'error-oncolor' | 'warning-oncolor';

type StrokeToken = BackgroundToken; // 배경색과 동일한 토큰 체계

type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'circular' | 'pill'
  | 'button-sm' | 'button-md' | 'button-lg' | 'card' | 'input' | 'badge-default' 
  | 'badge-pill' | 'avatar' | 'popover' | 'modal';

type BorderWidthToken = 'thin' | 'medium' | 'thick' | 'thicker' 
  | 'button' | 'card' | 'input-default' | 'input-focused' | 'divider';

type ShadowToken = '0' | '10' | '20' | '30' | '40' | '50'; // Foundation 그림자 레벨

type OverlayToken = 'light' | 'medium' | 'heavy';
```

### 5. Interactive 컴포넌트

**역할**: 인터랙션 관련 속성(포커스, z-index, 커서, 호버 등)만 담당하는 순수한 프리미티브

```typescript
interface InteractiveProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span' | 'button';
  
  // z-index 관련 (시멘틱 토큰)
  zIndex?: ResponsiveOrSingle<ZIndexLevel | number>;
  
  // 커서 관련
  cursor?: ResponsiveOrSingle<CursorType>;
  
  // 포커스 관련
  focusStyle?: FocusStyle;
  focusWithin?: boolean; // focus-within 스타일 적용
  
  // 포인터 이벤트
  pointerEvents?: ResponsiveOrSingle<PointerEvents>;
  
  // 사용자 선택
  userSelect?: ResponsiveOrSingle<UserSelect>;
  
  // 투명도
  opacity?: ResponsiveOrSingle<OpacityLevel>;
  
  // 호버 효과
  hoverOpacity?: OpacityLevel;
  hoverScale?: number; // 호버 시 스케일 (1.0 = 100%)
  hoverElevation?: boolean; // 호버 시 그림자 증가
  
  // 활성 상태
  pressed?: boolean; // 눌린 상태
  disabled?: boolean; // 비활성 상태
  
  // 터치 관련
  touchAction?: 'auto' | 'none' | 'pan-x' | 'pan-y' | 'manipulation';
  
  children?: React.ReactNode;
}

// 모든 타입 정의
type ZIndexLevel = 'base' | 'raised' | 'navigation' | 'header' | 'dropdown' 
  | 'sticky' | 'overlay' | 'modal' | 'toast' | 'popover' | 'tooltip';

type CursorType = 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' 
  | 'help' | 'not-allowed' | 'grab' | 'grabbing' | 'zoom-in' | 'zoom-out'
  | 'crosshair' | 'cell' | 'context-menu' | 'copy' | 'alias';

type FocusStyle = 'outline' | 'ring' | 'none';
type PointerEvents = 'auto' | 'none';
type UserSelect = 'auto' | 'none' | 'text' | 'all';
type OpacityLevel = 'hover' | 'disabled' | 'overlay-light' | 'overlay-medium' | 'overlay-heavy' | number;
```

### 6. Sizing 컴포넌트

**역할**: 크기, 비율, 이미지 관련 속성만 담당하는 순수한 프리미티브

```typescript
interface SizingProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 기본 크기 속성들 (시멘틱 토큰 + 커스텀 값)
  width?: ResponsiveOrSingle<WidthValue | string | number>;
  height?: ResponsiveOrSingle<HeightValue | string | number>;
  
  // 최소/최대 크기
  minWidth?: ResponsiveOrSingle<string | number>;
  minHeight?: ResponsiveOrSingle<string | number>;
  maxWidth?: ResponsiveOrSingle<string | number>;
  maxHeight?: ResponsiveOrSingle<string | number>;
  
  // 추가 크기 관련 속성들 (토큰 기반)
  aspectRatio?: ResponsiveOrSingle<AspectRatioValue | string | number>;
  
  // 이미지/비디오 관련 (토큰 기반)
  objectFit?: ResponsiveOrSingle<ObjectFitValue>;
  objectPosition?: ResponsiveOrSingle<ObjectPositionValue | string>;
  
  // 박스 모델 (토큰 기반)
  boxSizing?: ResponsiveOrSingle<BoxSizingValue>;
  
  children?: React.ReactNode;
}

// 모든 타입 정의
type HeightValue = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
type WidthValue = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

type ObjectFitValue = 
  // 기본 CSS 값들
  | 'fill' | 'contain' | 'cover' | 'none' | 'scaleDown'
  // 직관적인 별칭들
  | 'stretch'      // 늘려서 채움 (fill과 동일)
  | 'fitInside'    // 안쪽에 맞춤 (contain과 동일)
  | 'fillArea'     // 영역 채움 (cover와 동일)
  | 'crop';        // 자르기 (cover와 동일)

type ObjectPositionValue = 
  // 기본 위치들
  | 'center' | 'top' | 'bottom' | 'left' | 'right'
  | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  // crop 맥락의 별칭들
  | 'cropCenter' | 'cropTop' | 'cropBottom' | 'cropLeft' | 'cropRight'
  | 'cropTopLeft' | 'cropTopRight' | 'cropBottomLeft' | 'cropBottomRight';

type BoxSizingValue = 'contentBox' | 'borderBox';

type AspectRatioValue = 'square' | 
  'landscape.classic' | 'landscape.wide' | 'landscape.ultraWide' | 'landscape.film' |
  'portrait.classic' | 'portrait.tall' | 'portrait.book';
```

### 7. Divider 컴포넌트

**역할**: 콘텐츠를 구분하는 선을 그리는 순수한 프리미티브 요소

```typescript
interface DividerProps extends Omit<React.HTMLAttributes<HTMLHRElement>, 'color'> {
  /**
   * Divider의 방향을 지정합니다.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Divider의 두께를 지정합니다.
   * thin=1px, medium=2px, thick=3px
   * @default 'thin'
   */
  thickness?: 'thin' | 'medium' | 'thick';
  
  /**
   * Divider의 색상을 지정합니다.
   * @default 'secondary-stroke-2'
   */
  color?: 'primary-stroke-1' | 'secondary-stroke-1' | 'secondary-stroke-2' | 'secondary-stroke-3' 
    | 'secondary-stroke-inverse' | 'cta-stroke-1' | 'cta-stroke-2' 
    | 'status-error' | 'status-warning' | 'status-success' | 'status-info' | 'status-focused';
  
  /**
   * Divider의 스타일을 지정합니다.
   * @default 'solid'
   */
  variant?: 'solid' | 'dashed' | 'dotted';
  
  /**
   * Divider의 길이를 지정합니다. 반응형 객체 또는 단일 값을 받습니다.
   */
  length?: ResponsiveOrSingle<string | number>;
  
  /**
   * Divider 주위의 마진을 지정합니다. 반응형 객체 또는 단일 값을 받습니다.
   */
  spacing?: ResponsiveOrSingle<SpacingValue>;
  
  /**
   * 수직 마진을 지정합니다 (horizontal orientation용). 반응형 객체 또는 단일 값을 받습니다.
   */
  spacingY?: ResponsiveOrSingle<SpacingValue>;
  
  /**
   * 수평 마진을 지정합니다 (vertical orientation용). 반응형 객체 또는 단일 값을 받습니다.
   */
  spacingX?: ResponsiveOrSingle<SpacingValue>;
}
```

**사용 예시**:
```tsx
// 기본 수평 구분선
<Divider />

// 수직 구분선
<Divider orientation="vertical" length="100px" />

// 커스터마이징된 구분선
<Divider 
  orientation="horizontal"
  thickness="medium"
  variant="dashed"
  color="primary-stroke-1"
  spacing="lg"
/>
```

### 8. Asterisk 컴포넌트

**역할**: 필수 입력 표시용 별표

```typescript
interface AsteriskProps {
  /**
   * 추가 CSS 클래스
   */
  className?: string;
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
}
```

**사용 예시**:
```tsx
// 기본 별표
<Asterisk />

// 비활성화된 별표
<Asterisk disabled />

// 라벨과 함께 사용
<Frame display="flex" align="center" gap="xs">
  <Text variant="label-1">이메일</Text>
  <Asterisk />
</Frame>
```

---

## 🧩 컴파운드 컴포넌트

프리미티브 컴포넌트들을 조합하여 만든 완성된 UI 컴포넌트들입니다.

### System-01 (Professional & Clean) 컴포넌트

#### Button 컴포넌트

```typescript
interface ButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * 버튼의 스타일 변형을 지정합니다.
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'transparent';
  
  /**
   * 버튼의 종류를 지정합니다.
   * @default 'text-only'
   */
  buttonType?: 'text-icon' | 'text-only' | 'icon-only';
  
  /**
   * 버튼의 색상 테마를 지정합니다.
   * @default 'primary'
   */
  colorScheme?: 'primary' | 'secondary' | 'cta';
  
  /**
   * 버튼의 크기를 지정합니다.
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * 버튼의 전체 너비 여부를 지정합니다.
   * @default false
   */
  isFullWidth?: boolean;
  
  /**
   * full width일 때 텍스트 정렬 방식을 지정합니다. (isFullWidth=true일 때만 적용)
   * @default 'center'
   */
  textAlign?: 'left' | 'center' | 'right';
  
  /**
   * 버튼의 로딩 상태를 지정합니다.
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * 버튼의 선택 상태를 지정합니다.
   * @default false
   */
  isSelected?: boolean;
  
  /**
   * 버튼의 왼쪽에 표시될 아이콘 이름을 지정합니다.
   */
  leftIcon?: IconName;
  
  /**
   * 버튼의 오른쪽에 표시될 아이콘 이름을 지정합니다.
   */
  rightIcon?: IconName;
  
  /**
   * 비활성화 상태를 지정합니다.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * 버튼의 내용물을 지정합니다.
   */
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
  /**
   * 카드 variant (스타일 변형)
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'transparent';
  
  /**
   * 카드 메인 제목 (상품명, 이름 등)
   */
  title: string;
  
  /**
   * 제목 옆에 표시할 뱃지
   */
  badge?: {
    text: string;
    color?: BadgeProps['color'];
    iconName?: IconName;
    size?: BadgeProps['size'];
    style?: BadgeProps['style'];
    layout?: BadgeProps['layout'];
    type?: BadgeProps['type'];
  };
  
  /**
   * 뱃지 표시 여부
   * @default false
   */
  showBadge?: boolean;
  
  /**
   * 상세 설명 텍스트 (브랜드명)
   */
  description?: string;
  
  /**
   * 추가 정보 텍스트 (일정 등) - System-01에만 있음
   */
  additionalInfo?: string;
  
  /**
   * 상태 텍스트 - System-01에만 있음
   */
  statusText?: string;
  
  /**
   * 액션 버튼 설정 (Button 컴포넌트 props 제어)
   */
  actionButton?: {
    /** 버튼 텍스트 - System-01에만 있음 */
    text?: string;
    /** 버튼에 표시할 아이콘 */
    iconName?: IconName;
    /** 버튼 클릭 이벤트 */
    onClick?: ButtonProps['onClick'];
    /** 버튼 비활성화 상태 */
    disabled?: ButtonProps['disabled'];
    /** 버튼 로딩 상태 */
    isLoading?: ButtonProps['isLoading'];
    /** 추가 Button props */
    buttonProps?: Partial<ButtonProps>;
  };
  
  /**
   * 액션 버튼 표시 여부
   * @default false
   */
  showActionButton?: boolean;

  /**
   * 이미지 URL (프로필, 상품 이미지 등)
   */
  imageUrl?: string;
  
  /**
   * 이미지 영역 표시 여부
   * @default false
   */
  showImage?: boolean;
  
  /**
   * 이미지 높이 (기본값: 242px)
   */
  imageHeight?: string | number;
  
  /**
   * 이미지 object-fit 설정 (기본값: cover)
   */
  imageObjectFit?: ObjectFitValue;
  
  /**
   * 이미지 object-position 설정 (기본값: center)
   */
  imageObjectPosition?: ObjectPositionValue;
  
  /**
   * 이미지 aspect-ratio 설정
   */
  imageAspectRatio?: AspectRatioValue;

  // TextDisplay 컴포넌트의 모든 props를 Card에서 직접 제어
  /**
   * TextDisplay 크기
   */
  size?: TextDisplayProps['size'];
  
  /**
   * 텍스트 정렬
   */
  textStyle?: TextDisplayProps['style'];
  
  /**
   * 라벨 표시 여부
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * 라벨 텍스트
   */
  labelText?: string;
  
  /**
   * 설명 표시 여부
   * @default false
   */
  showDescription?: boolean;
  
  /**
   * 설명 텍스트
   */
  descriptionText?: string;
  
  /**
   * 캡션 표시 여부
   * @default false
   */
  showCaption?: boolean;
  
  /**
   * 캡션 텍스트
   */
  captionText?: string;
  
  /**
   * 아이콘 위치
   * @default 'none'
   */
  iconPosition?: IconPosition;
  
  /**
   * 사용할 아이콘 이름
   */
  iconName?: IconName;
  
  /**
   * 아이콘 타입
   * @default 'line'
   */
  iconType?: 'line' | 'flat';
  
  /**
   * 카드 클릭 이벤트
   */
  onClick?: () => void;
}
```

#### Tab 컴포넌트

```typescript
interface TabItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

interface TabProps extends Omit<SurfaceProps, 'size' | 'onChange'> {
  /**
   * 탭 아이템들
   */
  items: TabItem[];
  
  /**
   * 현재 선택된 탭 ID
   */
  selectedId?: string;
  
  /**
   * 기본 선택된 탭 ID
   */
  defaultSelectedId?: string;
  
  /**
   * 탭 크기
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * 테두리 표시 여부
   * @default true
   */
  showBorder?: boolean;
  
  /**
   * 탭 변경 핸들러
   */
  onChange?: (selectedId: string) => void;
}
```

#### SegmentButton 컴포넌트

```typescript
interface SegmentButtonItem {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

interface SegmentButtonProps extends Omit<SurfaceProps, 'onChange'> {
  /**
   * 세그먼트 버튼 모드
   * @default 'single'
   */
  mode: 'single' | 'multiple';
  
  /**
   * 선택된 값들
   */
  selectedValues?: string[];
  
  /**
   * 기본 선택된 값들
   */
  defaultSelectedValues?: string[];
  
  /**
   * 세그먼트 버튼 크기
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * 세그먼트 버튼 변형
   * @default 'default'
   */
  variant?: 'default' | 'outlined';
  
  /**
   * 값 변경 핸들러
   */
  onChange?: (values: string[]) => void;
  
  /**
   * 세그먼트 버튼 아이템들 (children으로 전달)
   */
  children: React.ReactNode;
}

interface SegmentButtonItemProps {
  /**
   * 세그먼트 버튼 아이템 값
   */
  value: string;
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 세그먼트 버튼 아이템 내용
   */
  children: React.ReactNode;
}
```

#### TextDisplay 컴포넌트

```typescript
interface TextDisplayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /**
   * 텍스트 디스플레이의 크기를 설정합니다.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * 텍스트 정렬 스타일을 설정합니다.
   * @default 'left'
   */
  style?: 'left' | 'center' | 'right';
  
  /**
   * 아이콘의 위치를 설정합니다.
   * @default 'none'
   */
  iconPosition?: 'none' | 'left' | 'right' | 'top' | 'bottom';
  
  /**
   * 사용할 아이콘 이름을 설정합니다.
   */
  iconName?: IconName;
  
  /**
   * 아이콘 타입을 설정합니다.
   * @default 'line'
   */
  iconType?: 'line' | 'flat';
  
  /**
   * 라벨 텍스트 표시 여부를 설정합니다.
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * 라벨 텍스트 내용을 설정합니다.
   */
  labelText?: string;
  
  /**
   * 메인 텍스트 내용을 설정합니다.
   */
  primaryText?: string;
  
  /**
   * 설명 텍스트 표시 여부를 설정합니다.
   * @default false
   */
  showDescription?: boolean;
  
  /**
   * 설명 텍스트 내용을 설정합니다.
   */
  descriptionText?: string;
  
  /**
   * 캡션 텍스트 표시 여부를 설정합니다.
   * @default false
   */
  showCaption?: boolean;
  
  /**
   * 캡션 텍스트 내용을 설정합니다.
   */
  captionText?: string;
}
```

#### Badge 컴포넌트

```typescript
interface BadgeProps {
  /**
   * 뱃지 색상
   */
  color: 'primary' | 'secondary' | 'cta' | 'error' | 'warning';
  
  /**
   * 뱃지 크기
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * 뱃지 레이아웃
   * @default 'only text'
   */
  layout?: 'text+icon' | 'only text' | 'only icon';
  
  /**
   * 뱃지 스타일
   * @default 'filled'
   */
  style?: 'filled' | 'outlined' | 'transparent';
  
  /**
   * 뱃지 형태
   * @default 'round-square'
   */
  type?: 'round-square' | 'circle';
  
  /**
   * 텍스트 내용 (layout이 'only icon'이 아닌 경우 필수)
   */
  text?: string;
  
  /**
   * 아이콘 이름 (layout이 'only text'가 아닌 경우 필수)
   */
  iconName?: IconName;
  
  /**
   * 아이콘 타입
   * @default 'line'
   */
  iconType?: 'line' | 'flat';
  
  /**
   * 커스텀 클래스명
   */
  className?: string;
  
  /**
   * 뱃지 비활성 상태
   * @default false
   */
  disabled?: boolean;
}
```

#### Checkbox 컴포넌트

```typescript
interface CheckboxProps {
  /**
   * 체크박스의 체크 상태
   * @default false
   */
  checked?: boolean;
  
  /**
   * 중간 상태 (indeterminate)
   * @default false
   */
  indeterminate?: boolean;
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 라벨 텍스트
   */
  label?: string;
  
  /**
   * 라벨 표시 여부
   * @default true
   */
  showLabel?: boolean;
  
  /**
   * 체크박스 이름
   */
  name?: string;
  
  /**
   * 체크박스 값
   */
  value?: string;
  
  /**
   * 체크 상태 변경 핸들러
   */
  onChange?: (checked: boolean) => void;
  
  /**
   * 클릭 핸들러
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * 포커스 핸들러
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 블러 핸들러
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 추가 CSS 클래스
   */
  className?: string;
  
  /**
   * 추가 스타일
   */
  style?: React.CSSProperties;
}
```

#### Radio 컴포넌트

```typescript
interface RadioProps {
  /**
   * 라디오 버튼의 선택 상태
   * @default false
   */
  checked?: boolean;
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 라벨 텍스트
   */
  label?: string;
  
  /**
   * 라벨 표시 여부
   * @default true
   */
  showLabel?: boolean;
  
  /**
   * 라디오 버튼 이름 (같은 그룹의 라디오 버튼들은 같은 name을 가져야 함)
   */
  name?: string;
  
  /**
   * 라디오 버튼 값
   */
  value?: string;
  
  /**
   * 라디오 버튼 스타일
   * @default 'radio'
   */
  variant?: 'radio' | 'checkmark';
  
  /**
   * 선택 상태 변경 핸들러
   */
  onChange?: (value: string) => void;
  
  /**
   * 클릭 핸들러
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * 포커스 핸들러
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 블러 핸들러
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 추가 CSS 클래스
   */
  className?: string;
  
  /**
   * 추가 스타일
   */
  style?: React.CSSProperties;
}
```

#### Field 컴포넌트

```typescript
interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 필드의 스타일 변형을 지정합니다.
   * @default 'outlined'
   */
  variant?: 'outlined' | 'transparent' | 'filled';
  
  /**
   * 라벨의 위치를 지정합니다.
   * @default 'above'
   */
  labelPosition?: 'above' | 'before' | 'none';
  
  /**
   * 필드의 크기를 지정합니다.
   * @default 'md'
   */
  size?: 'md' | 'lg' | 'xlg';
  
  /**
   * 필드의 너비를 지정합니다.
   * - 'fit-content': 내용에 맞춰 크기 조절
   * - 'fill-width': 부모 요소 너비에 맞게 조절 (100%)
   * - 커스텀 값: 직접 너비 지정 (예: '200px', '50%')
   */
  fieldWidth?: 'fit-content' | 'fill-width' | ResponsiveOrSingle<string | number>;
  
  /**
   * 필드의 최소 너비를 지정합니다. (기본값: 80px)
   */
  minWidth?: string | number;
  
  /**
   * fit-content일 때 텍스트가 길면 말줄임표로 처리할지 여부
   * @default false
   */
  truncateOnFit?: boolean;
  
  /**
   * 라벨 텍스트
   */
  label?: string;
  
  /**
   * 필수 입력 표시 (*)
   * @default false
   */
  required?: boolean;
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 에러 상태
   * @default false
   */
  error?: boolean;
  
  /**
   * 에러 메시지
   */
  errorMessage?: string;
  
  /**
   * 도움말 텍스트
   */
  helperText?: string;
  
  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;
  
  /**
   * 입력 값
   */
  value?: string;
  
  /**
   * 입력 타입
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  
  /**
   * 필드의 왼쪽에 표시될 아이콘 이름을 지정합니다.
   */
  leftIcon?: IconName;
  
  /**
   * 필드의 오른쪽에 표시될 아이콘 이름을 지정합니다.
   */
  rightIcon?: IconName;
  
  /**
   * 값 변경 이벤트 핸들러
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * 포커스 이벤트 핸들러
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 블러 이벤트 핸들러
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
```

#### Link 컴포넌트

```typescript
interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  /**
   * Link의 스타일 변형을 지정합니다.
   * default: 기본 링크 스타일, subtle: 은은한 스타일, prominent: 강조 스타일
   * @default 'default'
   */
  variant?: 'default' | 'subtle' | 'prominent';
  
  /**
   * Link의 크기를 지정합니다.
   * @default 'body-1'
   */
  size?: ResponsiveOrSingle<'hero-1' | 'hero-2' | 'title-1' | 'title-2' | 'heading-1' | 'heading-2' 
    | 'heading-3' | 'body-1' | 'body-2' | 'reading' | 'label-1' | 'label-2' 
    | 'caption-1' | 'caption-2' | 'caption-3'>;
  
  /**
   * Link의 색상을 지정합니다.
   * @default 'primary-foreground-1'
   */
  color?: 'primary-foreground-1' | 'primary-foreground-2' | 'secondary-foreground-1' 
    | 'secondary-foreground-2' | 'secondary-foreground-3' | 'cta-foreground-1' | 'cta-foreground-2'
    | 'status-error' | 'status-warning' | 'status-success' | 'status-info';
  
  /**
   * 인터랙션 상태를 설정합니다.
   * @default 'rest'
   */
  interactionState?: 'rest' | 'hovered' | 'pressed' | 'visited' | 'disabled';
  
  /**
   * 밑줄 표시 여부를 지정합니다.
   * @default 'hover'
   */
  underline?: 'none' | 'always' | 'hover';
  
  /**
   * 외부 링크 여부를 지정합니다. true일 경우 새 탭에서 열리며 아이콘이 표시됩니다.
   * @default false
   */
  external?: boolean;
  
  /**
   * 비활성화 상태를 지정합니다.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 링크 텍스트를 지정합니다.
   */
  children: React.ReactNode;
}
```

#### Label 컴포넌트

```typescript
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * 라벨 크기
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * 라벨 폰트 두께
   * @default 'regular'
   */
  type?: 'regular' | 'medium' | 'bold';
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 필수 입력 표시 (*)
   * @default false
   */
  asterisk?: boolean;
  
  /**
   * 별표 정렬 위치
   * @default 'top'
   */
  align?: 'top' | 'center';
  
  /**
   * 인터랙션 상태
   */
  interactionState?: 'rest' | 'hovered' | 'pressed' | 'disabled';
  
  /**
   * 추가 클래스
   */
  className?: string;
}
```

#### Chip 컴포넌트

```typescript
interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'color'> {
  /**
   * 칩에 표시할 텍스트
   */
  children: React.ReactNode;
  
  /**
   * 칩의 변형
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  
  /**
   * 칩의 크기
   * @default 'md'
   */
  size?: 'sm' | 'md';
  
  /**
   * 칩의 상태
   */
  state?: 'default' | 'hovered' | 'pressed' | 'disabled';
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 삭제 가능 여부
   * @default false
   */
  removable?: boolean;
  
  /**
   * 선택 가능 여부
   * @default false
   */
  selectable?: boolean;
  
  /**
   * 선택 상태
   * @default false
   */
  selected?: boolean;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  
  /**
   * 삭제 버튼 클릭 핸들러
   */
  onRemove?: () => void;
}
```

#### Menu 컴포넌트

```typescript
interface MenuHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * 메뉴 헤더의 크기를 지정합니다.
   * @default 'lg'
   */
  size?: 'md' | 'lg' | 'xlg';
  
  /**
   * 메뉴 헤더의 상태를 지정합니다.
   */
  state?: 'default' | 'hovered' | 'pressed' | 'focused' | 'selected' | 'disabled';
  
  /**
   * 메뉴 헤더의 텍스트 내용입니다.
   */
  children: React.ReactNode;
  
  /**
   * 왼쪽에 표시할 아이콘입니다.
   */
  leftIcon?: IconName;
  
  /**
   * 오른쪽에 표시할 아이콘입니다. (텍스트 옆)
   */
  rightIcon?: IconName;
  
  /**
   * 확장/축소 상태를 나타냅니다.
   * @default false
   */
  expanded?: boolean;
  
  /**
   * Chevron 버튼 표시 여부를 지정합니다.
   * @default true
   */
  showChevron?: boolean;
  
  /**
   * 비활성화 상태를 지정합니다.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 클릭 이벤트 핸들러입니다.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
```

#### OptionList 컴포넌트

```typescript
interface OptionListProps {
  /**
   * 옵션 아이템의 타입을 지정합니다.
   * @default 'single-select'
   */
  type?: 'menu-header' | 'single-select' | 'radio' | 'multi-select' | 'radio-component' | 'checkbox-component';
  
  /**
   * 옵션 아이템의 상태를 지정합니다.
   */
  state?: 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled' | 'selected';
  
  /**
   * 선택 상태 여부
   */
  selected?: boolean;
  
  /**
   * 비활성화 상태 여부
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 옵션 아이템 텍스트
   */
  children: React.ReactNode;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  
  /**
   * 마우스 호버 이벤트 핸들러
   */
  onMouseEnter?: () => void;
  
  /**
   * 마우스 호버 종료 이벤트 핸들러
   */
  onMouseLeave?: () => void;
  
  // Radio 컴포넌트 관련 props
  /**
   * Radio 타입일 때 라디오 그룹 이름
   */
  radioName?: string;
  
  /**
   * Radio 타입일 때 라디오 값
   */
  radioValue?: string;
  
  /**
   * Radio 타입일 때 체크 상태
   */
  radioChecked?: boolean;
  
  /**
   * Radio 타입일 때 변경 핸들러
   */
  onRadioChange?: (value: string) => void;
  
  // Checkbox 컴포넌트 관련 props
  /**
   * Checkbox 타입일 때 체크박스 이름
   */
  checkboxName?: string;
  
  /**
   * Checkbox 타입일 때 체크박스 값
   */
  checkboxValue?: string;
  
  /**
   * Checkbox 타입일 때 체크 상태
   */
  checkboxChecked?: boolean;
  
  /**
   * Checkbox 타입일 때 중간 상태
   */
  checkboxIndeterminate?: boolean;
  
  /**
   * Checkbox 타입일 때 변경 핸들러
   */
  onCheckboxChange?: (checked: boolean) => void;
}
```

#### ComboBox 컴포넌트

```typescript
interface ComboBoxOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

interface ComboBoxProps {
  /**
   * 선택 가능한 옵션들
   */
  options: ComboBoxOption[];
  
  /**
   * 현재 선택된 값(들)
   */
  value?: string | string[];
  
  /**
   * 다중 선택 허용 여부
   * @default false
   */
  multiple?: boolean;
  
  /**
   * 검색 가능 여부
   * @default false
   */
  searchable?: boolean;
  
  /**
   * 플레이스홀더 텍스트
   * @default '선택해주세요'
   */
  placeholder?: string;
  
  /**
   * 라벨
   */
  label?: string;
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 에러 메시지
   */
  errorMessage?: string;
  
  /**
   * 도움말 텍스트
   */
  helperText?: string;
  
  /**
   * 필수 입력 여부
   * @default false
   */
  required?: boolean;
  
  /**
   * 드롭다운 방향
   * @default 'down'
   */
  direction?: 'up' | 'down';
  
  /**
   * Field 스타일 변형
   */
  fieldVariant?: 'outlined' | 'transparent' | 'filled';
  
  /**
   * Field 크기
   */
  fieldSize?: 'md' | 'lg' | 'xlg';
  
  /**
   * Field 너비
   * - 'fit-content': 내용에 맞춰 크기 조절
   * - 'fill-width': 부모 요소 너비에 맞게 조절 (100%)
   * - 커스텀 값: 직접 너비 지정 (예: '200px', '50%')
   */
  fieldWidth?: 'fit-content' | 'fill-width' | string | number;
  
  /**
   * 라벨 위치
   */
  labelPosition?: 'above' | 'before' | 'none';
  
  /**
   * 왼쪽 아이콘 (rightIcon은 드롭다운 화살표로 고정)
   */
  leftIcon?: string;
  
  /**
   * 값 변경 핸들러
   */
  onChange?: (value: string | string[]) => void;
  
  /**
   * 검색어 변경 핸들러
   */
  onSearch?: (searchTerm: string) => void;
  
  /**
   * 드롭다운 열림/닫힘 상태 변경 핸들러
   */
  onToggle?: (isOpen: boolean) => void;
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
// 반응형 텍스트
<Text 
  variant={{ mobile: 'body-1', desktop: 'title-1' }}
  weight={{ mobile: 'regular', desktop: 'bold' }}
  textAlign={{ mobile: 'center', desktop: 'left' }}
>
  반응형 텍스트
</Text>

// 반응형 레이아웃
<Frame 
  display="flex"
  direction={{ mobile: 'column', desktop: 'row' }}
  gap={{ mobile: 'md', desktop: 'xl' }}
  padding={{ mobile: 'sm', desktop: 'lg' }}
>
  <Surface background="primary-system01-1-rest">
    <Text>왼쪽 컨텐츠</Text>
  </Surface>
  <Surface background="secondary-system01-1-rest">
    <Text>오른쪽 컨텐츠</Text>
  </Surface>
</Frame>
```

### 5. 접근성 고려사항

```tsx
// 적절한 시멘틱 HTML 사용
<Frame as="section" role="region" aria-labelledby="section-title">
  <Text as="h2" id="section-title" variant="title-1">섹션 제목</Text>
  <Text as="p" variant="body-1">섹션 내용</Text>
</Frame>

// 아이콘 접근성
<Icon 
  name="heart" 
  aria-label="좋아요" 
  size="sm" 
/>

// 숨김 아이콘 (장식용)
<Icon 
  name="decoration" 
  aria-hidden={true} 
  size="sm" 
/>

// 포커스 관리
<Interactive 
  focusStyle="ring" 
  cursor="pointer"
  onClick={handleClick}
>
  <Surface background="primary-system01-1-rest">
    <Text>클릭 가능한 요소</Text>
  </Surface>
</Interactive>
```

---

## 🔧 고급 컴포넌트 사용법

### 1. 프리미티브 조합 패턴

#### 카드 형태 조합
```tsx
<Surface 
  background="secondary-system01-1-rest"
  borderRadius="md"
  boxShadow="20"
>
  <Interactive 
    cursor="pointer"
    hoverElevation={true}
    onClick={handleClick}
  >
    <Frame padding="lg" display="flex" direction="column" gap="md">
      <Frame display="flex" justify="space-between" align="center">
        <Text variant="title-2" weight="bold">카드 제목</Text>
        <Icon name="arrow-right" size="sm" />
      </Frame>
      <Text variant="body-2">카드 설명 텍스트</Text>
    </Frame>
  </Interactive>
</Surface>
```

#### 입력 폼 조합
```tsx
<Frame display="flex" direction="column" gap="sm">
  {/* 라벨 */}
  <Frame display="flex" align="center" gap="xs">
    <Text as="label" variant="label-1" weight="medium">
      이메일 주소
    </Text>
    <Asterisk size="sm" color="error" />
  </Frame>
  
  {/* 입력 필드 */}
  <Surface 
    background="secondary-system01-1-rest"
    borderColor="secondary-system01-1-rest"
    borderWidth="input-default"
    borderRadius="input"
  >
    <Frame padding="sm">
      <input 
        type="email" 
        placeholder="이메일을 입력하세요"
        style={{ border: 'none', outline: 'none', width: '100%' }}
      />
    </Frame>
  </Surface>
  
  {/* 도움말 텍스트 */}
  <Text variant="caption-1" color="secondary-system01-1-rest">
    로그인 시 사용할 이메일 주소를 입력하세요
  </Text>
</Frame>
```

### 2. 상태별 스타일링

#### 버튼 상태 관리
```tsx
const [isLoading, setIsLoading] = useState(false);
const [isDisabled, setIsDisabled] = useState(false);

<Interactive 
  disabled={isDisabled}
  cursor={isDisabled ? 'not-allowed' : 'pointer'}
  opacity={isDisabled ? 'disabled' : undefined}
>
  <Surface 
    background={
      isDisabled 
        ? 'primary-system01-1-disabled'
        : 'primary-system01-1-rest'
    }
    borderRadius="button-md"
    boxShadow={isDisabled ? 'none' : '10'}
  >
    <Frame 
      padding="md" 
      display="flex" 
      align="center" 
      justify="center" 
      gap="sm"
    >
      {isLoading && <Icon name="spinner" size="sm" />}
      <Text variant="label-1" weight="medium">
        {isLoading ? '처리 중...' : '제출하기'}
      </Text>
    </Frame>
  </Surface>
</Interactive>
```

#### 알림 메시지 조합
```tsx
<Surface 
  background="warning-1-rest"
  foreground="warning-oncolor"
  borderRadius="md"
  borderColor="warning-1-rest"
  borderWidth="medium"
>
  <Frame padding="md" display="flex" align="center" gap="sm">
    <Icon name="alert-triangle" size="md" />
    <Frame flex={1}>
      <Text variant="label-1" weight="medium">주의 사항</Text>
      <Text variant="body-2">
        이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?
      </Text>
    </Frame>
    <Interactive cursor="pointer">
      <Icon name="x" size="sm" />
    </Interactive>
  </Frame>
</Surface>
```

### 3. 레이아웃 패턴

#### 대시보드 레이아웃
```tsx
<Frame display="flex" direction="column" height="100vh">
  {/* 헤더 */}
  <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor">
    <Frame padding="md" display="flex" justify="space-between" align="center">
      <Text variant="title-2" weight="bold">대시보드</Text>
      <Frame display="flex" align="center" gap="md">
        <Icon name="bell" size="md" />
        <Icon name="settings" size="md" />
      </Frame>
    </Frame>
  </Surface>
  
  {/* 메인 콘텐츠 */}
  <Frame flex={1} display="flex">
    {/* 사이드바 */}
    <Surface background="secondary-system01-1-rest" width="240px">
      <Frame padding="lg" display="flex" direction="column" gap="sm">
        <Text variant="label-1" weight="medium">메뉴</Text>
        <Divider orientation="horizontal" />
        {/* 메뉴 아이템들 */}
      </Frame>
    </Surface>
    
    {/* 콘텐츠 영역 */}
    <Frame flex={1} padding="lg">
      <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="lg">
        {/* 카드들 */}
      </Frame>
    </Frame>
  </Frame>
</Frame>
```

#### 모달 레이아웃
```tsx
<Interactive zIndex="modal">
  <Surface background="overlay-medium" fill>
    <Frame display="flex" align="center" justify="center" padding="lg">
      <Surface 
        background="secondary-system01-1-rest"
        borderRadius="modal"
        boxShadow="50"
        maxWidth="500px"
        width="100%"
      >
        <Frame padding="xl" display="flex" direction="column" gap="lg">
          {/* 헤더 */}
          <Frame display="flex" justify="space-between" align="center">
            <Text variant="title-2" weight="bold">모달 제목</Text>
            <Interactive cursor="pointer">
              <Icon name="x" size="md" />
            </Interactive>
          </Frame>
          
          {/* 내용 */}
          <Frame display="flex" direction="column" gap="md">
            <Text variant="body-1">모달 내용이 여기에 표시됩니다.</Text>
          </Frame>
          
          {/* 액션 버튼 */}
          <Frame display="flex" justify="flex-end" gap="sm">
            <Button variant="outlined" colorScheme="secondary">
              취소
            </Button>
            <Button variant="filled" colorScheme="primary">
              확인
            </Button>
          </Frame>
        </Frame>
      </Surface>
    </Frame>
  </Surface>
</Interactive>
```

---

## 🎨 커스텀 컴포넌트 생성 가이드

### 1. 새로운 컴파운드 컴포넌트 만들기

```tsx
// ProfileCard.tsx
import { Frame, Surface, Text, Icon, Interactive } from 'lumir-design-system-shared';

interface ProfileCardProps {
  name: string;
  role: string;
  avatar?: string;
  email?: string;
  phone?: string;
  onClick?: () => void;
}

export const ProfileCard = ({ 
  name, 
  role, 
  avatar, 
  email, 
  phone, 
  onClick 
}: ProfileCardProps) => {
  return (
    <Interactive cursor="pointer" onClick={onClick}>
      <Surface 
        background="secondary-system01-1-rest"
        borderRadius="card"
        boxShadow="20"
      >
        <Frame padding="lg" display="flex" direction="column" gap="md">
          {/* 프로필 이미지 */}
          <Frame display="flex" justify="center">
            <Surface 
              background="primary-system01-1-rest"
              borderRadius="avatar"
              width="80px"
              height="80px"
            >
              {avatar ? (
                <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <Frame display="flex" align="center" justify="center" fill>
                  <Icon name="user" size="xl" />
                </Frame>
              )}
            </Surface>
          </Frame>
          
          {/* 기본 정보 */}
          <Frame display="flex" direction="column" gap="xs" textAlign="center">
            <Text variant="title-2" weight="bold">{name}</Text>
            <Text variant="body-2" color="secondary-system01-2-rest">{role}</Text>
          </Frame>
          
          {/* 연락처 정보 */}
          {(email || phone) && (
            <Frame display="flex" direction="column" gap="xs">
              <Divider orientation="horizontal" />
              {email && (
                <Frame display="flex" align="center" gap="sm">
                  <Icon name="mail" size="sm" />
                  <Text variant="body-2">{email}</Text>
                </Frame>
              )}
              {phone && (
                <Frame display="flex" align="center" gap="sm">
                  <Icon name="phone" size="sm" />
                  <Text variant="body-2">{phone}</Text>
                </Frame>
              )}
            </Frame>
          )}
        </Frame>
      </Surface>
    </Interactive>
  );
};
```

### 2. 시스템별 스타일 적용

```tsx
// System-01용 스타일
const system01Styles = {
  padding: 'md',
  borderRadius: 'sm',
  iconSize: 'sm'
};

// System-02용 스타일
const system02Styles = {
  padding: 'lg',
  borderRadius: 'xl',
  iconSize: 'md'
};

// 사용 시 시스템별 스타일 적용
<ProfileCard 
  name="홍길동"
  role="프론트엔드 개발자"
  email="hong@example.com"
  style={system01Styles} // 또는 system02Styles
/>
```

---

## 🚀 성능 최적화 팁

### 1. 조건부 렌더링 최적화

```tsx
// ❌ 비효율적
<Surface background={isActive ? 'primary-system01-1-rest' : 'secondary-system01-1-rest'}>
  {isActive && (
    <Frame padding="md">
      <Text>활성 상태</Text>
    </Frame>
  )}
  {!isActive && (
    <Frame padding="sm">
      <Text>비활성 상태</Text>
    </Frame>
  )}
</Surface>

// ✅ 효율적
<Surface background={isActive ? 'primary-system01-1-rest' : 'secondary-system01-1-rest'}>
  <Frame padding={isActive ? 'md' : 'sm'}>
    <Text>{isActive ? '활성 상태' : '비활성 상태'}</Text>
  </Frame>
</Surface>
```

### 2. 메모이제이션 활용

```tsx
import { memo, useMemo } from 'react';

const ExpensiveCard = memo(({ data }: { data: any }) => {
  const processedData = useMemo(() => {
    // 복잡한 데이터 처리
    return processData(data);
  }, [data]);

  return (
    <Surface background="secondary-system01-1-rest" borderRadius="card">
      <Frame padding="lg">
        <Text variant="title-2">{processedData.title}</Text>
        <Text variant="body-1">{processedData.description}</Text>
      </Frame>
    </Surface>
  );
});
```

### 3. 가상화 및 지연 로딩

```tsx
// 큰 리스트 렌더링 시
<Frame display="flex" direction="column" gap="sm" maxHeight="400px" overflowY="auto">
  {items.map((item, index) => (
    <Surface 
      key={item.id}
      background="secondary-system01-1-rest"
      borderRadius="sm"
    >
      <Frame padding="md">
        <Text variant="body-1">{item.name}</Text>
      </Frame>
    </Surface>
  ))}
</Frame>
```

---

## 📚 추가 자료

### 관련 문서
- [Foundation 토큰 가이드](./foundation-tokens.md)
- [접근성 가이드](./accessibility.md)
- [컴포넌트 API 레퍼런스](./api-reference.md)
- [스토리북 가이드](./storybook.md)

### 개발 도구
- **Storybook**: 컴포넌트 개발 및 문서화 환경
- **Figma Plugin**: 디자인 토큰 동기화
- **VS Code Extension**: 자동 완성 및 린팅 지원
- **Chrome DevTools**: 접근성 검사 도구

### 커뮤니티
- [GitHub Issues](https://github.com/lumir-design-system/issues)
- [Discord 채널](https://discord.gg/lumir-design-system)
- [사용 사례 갤러리](https://lumir-design-system.github.io/gallery)

---

## 📝 변경 사항 및 로드맵

### 최근 업데이트 (v0.1.0)
- ✅ System-01, System-02 컴포넌트 구현 완료
- ✅ 8개 프리미티브 컴포넌트 안정화
- ✅ 반응형 토큰 시스템 도입
- ✅ 접근성 기준 WCAG 2.1 AA 준수

### 예정된 기능 (v0.2.0)
- 🔄 System-03 (Modern & Software) 구현
- 🔄 System-04 (Aerospace Control) 구현  
- 🔄 System-05 (Aerospace Dashboard) 구현
- 🔄 Dark Mode 지원 확장
- 🔄 애니메이션 토큰 시스템 추가

### 장기 로드맵
- 🎯 모바일 네이티브 컴포넌트 라이브러리
- 🎯 Figma to Code 자동화 도구
- 🎯 실시간 디자인 토큰 동기화
- 🎯 AI 기반 접근성 자동 검사

---

*이 문서는 Lumir 디자인 시스템의 완전한 가이드입니다. 궁금한 점이 있으시면 언제든지 문의해 주세요.* 