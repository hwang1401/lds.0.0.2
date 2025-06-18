# @lumir/system-01

> Professional & Clean - Lumir Design System의 System-01 컴포넌트

## 📦 설치

```bash
# 필수 의존성과 함께 설치
npm install @lumir/shared @lumir/system-01
# 또는
yarn add @lumir/shared @lumir/system-01
# 또는  
pnpm add @lumir/shared @lumir/system-01
```

## 🎯 개요

System-01은 **Professional & Clean** 테마로, 백오피스, 관리자 도구, GitHub 스타일의 전문적인 인터페이스에 적합한 컴포넌트를 제공합니다.

### 특징

- **깔끔하고 전문적인 디자인**
- **블루 계열 색상 테마**
- **명확한 계층 구조**
- **높은 가독성**
- **비즈니스 환경에 최적화**

## 🚀 사용법

### CSS 스타일 가져오기

```css
/* Foundation 토큰 (필수) */
@import '@lumir/shared/dist/css/foundation-tokens.css';

/* System-01 토큰 */
@import '@lumir/system-01/dist/css/tokens.css';
```

### 기본 사용법

```tsx
import { Button, Card, Field } from '@lumir/system-01';
import { Text, Icon, Frame } from '@lumir/shared';

export default function AdminPanel() {
  return (
    <Card variant="elevated" padding="lg">
      <Frame direction="column" gap="md">
        <Text variant="heading-2" color="primary-system01">
          사용자 관리
        </Text>
        
        <Field
          label="이메일"
          placeholder="이메일을 입력하세요"
          type="email"
          required
        />
        
        <Frame direction="row" gap="sm">
          <Button variant="filled" intent="primary">
            <Icon name="LineIconsCheckmarkCheckmarkIcon" size="sm" />
            저장
          </Button>
          <Button variant="outlined" intent="secondary">
            취소
          </Button>
        </Frame>
      </Frame>
    </Card>
  );
}
```

## 🧩 컴포넌트

### Button

다양한 스타일과 상태를 지원하는 버튼 컴포넌트

```tsx
<Button 
  variant="filled" | "outlined" | "transparent"
  intent="primary" | "secondary" | "danger" | "success"
  size="sm" | "md" | "lg"
  loading={false}
  disabled={false}
  onClick={() => {}}
>
  버튼 텍스트
</Button>
```

### Card

콘텐츠를 담는 카드 컨테이너

```tsx
<Card 
  variant="flat" | "elevated" | "outlined"
  padding="none" | "sm" | "md" | "lg" | "xl"
  onClick={() => {}} // 클릭 가능한 카드
>
  카드 내용
</Card>
```

### SegmentButton

단일 또는 다중 선택을 위한 세그먼트 버튼

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

### Field (Input)

폼 입력을 위한 필드 컴포넌트

```tsx
<Field
  label="라벨"
  placeholder="플레이스홀더"
  type="text" | "email" | "password" | "number"
  required={true}
  disabled={false}
  error="에러 메시지"
  helperText="도움말 텍스트"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Checkbox & Radio

선택 입력 컴포넌트

```tsx
// Checkbox
<Checkbox 
  checked={true}
  indeterminate={false}
  disabled={false}
  onChange={(checked) => console.log(checked)}
>
  체크박스 라벨
</Checkbox>

// Radio
<Radio 
  name="group"
  value="option1"
  checked={true}
  disabled={false}
  onChange={(value) => console.log(value)}
>
  라디오 라벨
</Radio>
```

### Badge

상태나 카테고리를 표시하는 배지

```tsx
<Badge 
  variant="filled" | "outlined"
  intent="primary" | "secondary" | "success" | "warning" | "danger"
  size="sm" | "md"
  iconName="LineIconsCheckmarkCheckmarkIcon" // 선택적
>
  배지 텍스트
</Badge>
```

### Chip

필터나 태그를 표시하는 칩

```tsx
<Chip
  variant="filled" | "outlined"
  intent="primary" | "secondary"
  size="sm" | "md"
  selected={false}
  removable={true}
  onRemove={() => {}}
  onClick={() => {}}
>
  칩 텍스트
</Chip>
```

### Menu

드롭다운 메뉴 컴포넌트

```tsx
<Menu>
  <Menu.Trigger>
    <Button variant="outlined">메뉴 열기</Button>
  </Menu.Trigger>
  <Menu.Content>
    <Menu.Item onClick={() => {}}>
      <Icon name="LineIconsEditEdit1Icon" size="sm" />
      편집
    </Menu.Item>
    <Menu.Item onClick={() => {}}>
      <Icon name="LineIconsTrashTrash1Icon" size="sm" />
      삭제
    </Menu.Item>
  </Menu.Content>
</Menu>
```

### Tab

탭 네비게이션 컴포넌트

```tsx
<Tab 
  selectedValue="tab1"
  onChange={(value) => setSelectedTab(value)}
>
  <Tab.Item value="tab1">첫 번째 탭</Tab.Item>
  <Tab.Item value="tab2">두 번째 탭</Tab.Item>
  <Tab.Item value="tab3">세 번째 탭</Tab.Item>
</Tab>
```

## 🎨 디자인 토큰

### 색상 시스템

```css
/* Primary 색상 */
var(--foundation-foundation-color-primary-system01)

/* Secondary 색상 */
var(--foundation-foundation-color-secondary-system01-1)
var(--foundation-foundation-color-secondary-system01-2)

/* 상태 색상 */
var(--foundation-foundation-color-success-system01)
var(--foundation-foundation-color-warning-system01)
var(--foundation-foundation-color-danger-system01)
```

### 간격 시스템

```css
/* 컴포넌트 간격 */
var(--foundation-foundation-spacing-xs)   /* 4px */
var(--foundation-foundation-spacing-sm)   /* 8px */
var(--foundation-foundation-spacing-md)   /* 16px */
var(--foundation-foundation-spacing-lg)   /* 24px */
var(--foundation-foundation-spacing-xl)   /* 32px */
```

### 테두리 반경

```css
var(--foundation-foundation-border-radius-sm)   /* 4px - System-01 기본 */
var(--foundation-foundation-border-radius-md)   /* 8px */
var(--foundation-foundation-border-radius-lg)   /* 12px */
```

## 📱 반응형 디자인

모든 컴포넌트는 모바일 우선으로 설계되었습니다:

```tsx
// 반응형 크기 조정
<Button size="sm">모바일</Button>  // 768px 미만
<Button size="md">태블릿</Button>  // 768px-1024px
<Button size="lg">데스크톱</Button> // 1024px 이상
```

## ♿ 접근성 기능

- **키보드 네비게이션**: Tab, Enter, Space, Arrow keys
- **스크린 리더**: ARIA 속성 완전 지원
- **포커스 관리**: 명확한 포커스 인디케이터
- **색상 대비**: WCAG 2.1 AA 기준 준수 (4.5:1 이상)

## 🔧 TypeScript 지원

모든 컴포넌트에 완전한 타입 정의를 제공합니다:

```tsx
import type { 
  ButtonProps, 
  CardProps, 
  FieldProps,
  SegmentButtonProps 
} from '@lumir/system-01';

// 커스텀 컴포넌트 생성
const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 🎯 사용 사례

### 관리자 대시보드

```tsx
import { Button, Card, Field, Badge, SegmentButton } from '@lumir/system-01';
import { Text, Frame } from '@lumir/shared';

export default function AdminDashboard() {
  return (
    <Frame direction="column" gap="lg">
      {/* 헤더 */}
      <Frame direction="row" justify="space-between" align="center">
        <Text variant="heading-1" color="primary-system01">
          관리자 대시보드
        </Text>
        <Button variant="filled" intent="primary">
          새 항목 추가
        </Button>
      </Frame>

      {/* 필터 */}
      <SegmentButton mode="single" selectedValues={['all']}>
        <SegmentButton.Item value="all">전체</SegmentButton.Item>
        <SegmentButton.Item value="active">활성</SegmentButton.Item>
        <SegmentButton.Item value="inactive">비활성</SegmentButton.Item>
      </SegmentButton>

      {/* 콘텐츠 카드 */}
      <Card variant="elevated" padding="lg">
        <Frame direction="row" justify="space-between" align="center">
          <Frame direction="column" gap="sm">
            <Text variant="heading-3">사용자 관리</Text>
            <Text variant="body-1" color="secondary-system01-1">
              총 1,234명의 사용자
            </Text>
          </Frame>
          <Badge variant="filled" intent="success">
            활성
          </Badge>
        </Frame>
      </Card>
    </Frame>
  );
}
```

### 로그인 폼

```tsx
export default function LoginForm() {
  return (
    <Card variant="elevated" padding="xl">
      <Frame direction="column" gap="lg">
        <Text variant="heading-2" color="primary-system01" align="center">
          로그인
        </Text>
        
        <Frame direction="column" gap="md">
          <Field
            label="이메일"
            type="email"
            placeholder="이메일을 입력하세요"
            required
          />
          <Field
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </Frame>
        
        <Button variant="filled" intent="primary" size="lg">
          로그인
        </Button>
      </Frame>
    </Card>
  );
}
```

## 📄 라이선스

ISC License

## 🤝 기여

버그 리포트나 기능 제안은 [GitHub Issues](https://github.com/your-org/lumir-design-system/issues)에 올려주세요.

---

**Professional한 인터페이스가 필요하다면 System-01을 선택하세요! 🎯** 