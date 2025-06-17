# 🎨 System Theme 개발 가이드라인

## 📋 개요

LDS(Lumir Design System)는 **동일한 프리미티브 컴포넌트**를 기반으로 **props만 다르게 적용**하여 시각적으로 완전히 다른 테마를 구현하는 시스템입니다.

### 핵심 원칙

> ⚠️ **절대 금지**: 컴포넌트 props 옵션이나 구성 자체를 변경하는 것
> 
> ✅ **허용**: 프리미티브 컴포넌트의 기존 props에 다른 값만 적용

## 🎯 5가지 시스템 테마 컨셉

### 1. System-01: Professional & Clean
**컨셉**: GitHub, 백오피스, 관리자 도구
- **특징**: 깔끔하고 전문적인 느낌
- **색상**: 차분한 그레이 베이스
- **모양**: 직각에 가까운 모서리 (radius: sm/md)
- **타겟**: 개발자, 관리자, B2B 도구

### 2. System-02: Friendly & Bright  
**컨셉**: 커머스, 소비자 대상 서비스
- **특징**: 밝고 사용자 친화적
- **색상**: 따뜻하고 생동감 있는 색상
- **모양**: 둥근 모서리 (radius: md/lg)
- **타겟**: 일반 소비자, 쇼핑몰, 마케팅 페이지

### 3. System-03: Modern & Software
**컨셉**: Discord, Slack, 소프트웨어 앱
- **특징**: 현대적이고 기능적
- **색상**: 다크 모드 친화적, 컨트라스트 강조
- **모양**: 적당한 둥근 모서리 (radius: md)
- **타겟**: 개발자 도구, 커뮤니케이션 앱, 생산성 도구

### 4. System-04: Aerospace Control (특수)
**컨셉**: 위성 컨트롤 시스템, 미션 크리티컬
- **특징**: 고대비, 정확성 중심
- **색상**: 고대비 색상, 경고/상태 색상 강조
- **모양**: 정확한 직각 (radius: none/xs)
- **타겟**: 위성 제어, 항공 관제, 미션 크리티컬 시스템

### 5. System-05: Aerospace Dashboard (특수)
**컨셉**: 우주 항공 대시보드, 모니터링
- **특징**: 미래적이고 하이테크
- **색상**: 블루/사이안 기반, 네온 효과
- **모양**: 경사진 모서리나 독특한 형태
- **타겟**: 우주 항공 대시보드, 모니터링 시스템

## 🔧 구현 방법

### 🎯 시스템 내부 일관성 규칙 (중요!)

> ⚠️ **핵심 원칙**: 같은 시스템 내의 모든 컴포넌트는 **동일한 스타일 속성값**을 사용해야 합니다.

#### ✅ 올바른 예시 - System-01 (Professional)
```jsx
// 모든 컴포넌트가 동일한 radius 값 사용
<Button borderRadius="sm" />
<Card borderRadius="sm" />
<Badge borderRadius="sm" />
<Input borderRadius="sm" />
<Modal borderRadius="sm" />

// 모든 컴포넌트가 동일한 spacing 값 사용  
<Stack spacing="md" />
<Box padding="md" />
<Button padding="md" />

// 모든 컴포넌트가 동일한 shadow 값 사용
<Card shadow="sm" />
<Button shadow="sm" />
<Modal shadow="sm" />
```

#### ❌ 잘못된 예시 - 일관성 없음
```jsx
// 금지: 같은 시스템에서 서로 다른 radius 값
<Button borderRadius="sm" />   // System-01 기준
<Card borderRadius="lg" />     // 다른 값 사용 - 금지!
<Badge borderRadius="md" />    // 또 다른 값 - 금지!

// 금지: 같은 시스템에서 서로 다른 spacing 값
<Stack spacing="md" />         // System-01 기준  
<Box padding="lg" />           // 다른 값 사용 - 금지!
```

#### 시스템별 통일된 스타일 속성 예시

**System-01 (Professional & Clean)**
```jsx
// 모든 컴포넌트 공통 속성
borderRadius="sm"     // 2-4px (직각에 가까움)
spacing="md"          // 타이트한 간격
shadow="sm"           // 미묘한 그림자
colorScheme="secondary" // 차분한 색상
```

**System-02 (Friendly & Bright)**
```jsx
// 모든 컴포넌트 공통 속성
borderRadius="lg"     // 8-12px (둥근 모서리)
spacing="lg"          // 여유로운 간격  
shadow="lg"           // 뚜렷한 그림자
colorScheme="primary" // 밝고 생동감 있는 색상
```

**System-03 (Modern & Software)**
```jsx
// 모든 컴포넌트 공통 속성
borderRadius="md"     // 6px (적당한 둥근 모서리)
spacing="sm"          // 효율적인 간격
shadow="md"           // 적당한 그림자
colorScheme="accent"  // 대비 강한 색상
```

### 허용되는 차이점

#### 1. 색상 (Color Props)
```jsx
// System-01: 차분한 색상
<Button variant="filled" colorScheme="secondary" />

// System-02: 밝은 색상  
<Button variant="filled" colorScheme="primary" />

// System-03: 대비 강한 색상
<Button variant="filled" colorScheme="accent" />
```

#### 2. 모서리 (BorderRadius Props)
```jsx
// System-01: 직각에 가까움
<Card borderRadius="sm" />

// System-02: 둥근 모서리
<Card borderRadius="lg" />

// System-04: 완전 직각
<Card borderRadius="none" />
```

#### 3. 간격 (Spacing Props)
```jsx
// System-01: 타이트한 간격
<Stack spacing="sm" />

// System-02: 여유로운 간격
<Stack spacing="lg" />
```

#### 4. 그림자 (Shadow Props)
```jsx
// System-01: 미묘한 그림자
<Card shadow="sm" />

// System-02: 뚜렷한 그림자
<Card shadow="lg" />

// System-04: 그림자 없음
<Card shadow="none" />
```

### 절대 금지되는 변경사항

❌ **컴포넌트 구조 변경**
```jsx
// 금지: Button 내부에 다른 요소 추가
<Button>
  <Icon /> {/* 기존에 없던 요소 추가 */}
  <Text />
  <Badge /> {/* 새로운 요소 추가 */}
</Button>
```

❌ **Props 타입 변경**
```jsx
// 금지: 기존 props 타입을 다르게 정의
interface ButtonProps {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "custom"; // custom 추가 금지
  newProp: string; // 새로운 prop 추가 금지
}
```

❌ **컴포넌트 기능 변경**
```jsx
// 금지: 기존 동작 방식 변경
<Button onClick={handleClick} disabled={true} />
// 이 경우 disabled 동작이 시스템마다 다르면 안됨
```

## 📁 파일 구조

```
packages/
├── shared/              # 공통 프리미티브 (변경 금지)
├── system-01/           # Professional & Clean
├── system-02/           # Friendly & Bright
├── system-03/           # Modern & Software (신규)
├── system-04/           # Aerospace Control (신규)
└── system-05/           # Aerospace Dashboard (신규)
```

## 🎨 테마별 디자인 토큰

각 시스템은 **동일한 토큰 구조**를 가지되, **값만 다르게** 설정합니다.

### 공통 토큰 구조 (semantic.json)
```json
{
  "color": {
    "primary-1": { "value": "..." },      // 시스템마다 다른 값
    "secondary-1": { "value": "..." },    // 시스템마다 다른 값
    "accent-1": { "value": "..." }        // 시스템마다 다른 값
  },
  "radius": {
    "sm": { "value": "..." },            // 시스템마다 다른 값
    "md": { "value": "..." },            // 시스템마다 다른 값
    "lg": { "value": "..." }             // 시스템마다 다른 값
  }
}
```

### 시스템별 토큰 값 예시

#### System-01 (Professional)
```json
{
  "color": {
    "primary-1": { "value": "#374151" },   // 차분한 그레이
    "secondary-1": { "value": "#F9FAFB" }  // 밝은 그레이
  },
  "radius": {
    "sm": { "value": "2px" },             // 직각에 가까움
    "md": { "value": "4px" }
  }
}
```

#### System-02 (Friendly)
```json
{
  "color": {
    "primary-1": { "value": "#3B82F6" },   // 밝은 블루
    "secondary-1": { "value": "#FEF3C7" }  // 따뜻한 옐로우
  },
  "radius": {
    "sm": { "value": "6px" },             // 둥근 모서리
    "md": { "value": "12px" }
  }
}
```

## 🔄 개발 워크플로우

### 🎨 스토리북 통합 작업 플로우

#### 기존 구조 (시스템별 분리)
```
packages/storybook/stories/
├── 04-System-01/
│   ├── Badge.stories.tsx
│   ├── Button.stories.tsx
│   ├── Card.stories.tsx
│   └── Checkbox.stories.tsx
├── 05-System-02/
│   ├── Badge.stories.tsx
│   ├── Button.stories.tsx
│   ├── Card.stories.tsx
│   └── Checkbox.stories.tsx
```

#### 새로운 구조 (통합 구조)
```
packages/storybook/stories/
├── 06-Universal/
│   ├── Badge.stories.tsx    ← 모든 시스템 테마 포함
│   ├── Button.stories.tsx   ← 툴바에서 테마 선택 가능
│   ├── Card.stories.tsx     ← 다크/라이트 모드 선택 가능
│   └── Checkbox.stories.tsx
```

#### 스토리북 툴바 기능
- 🎨 **테마 선택**: System-01, System-02, System-03 등 선택 가능
- 🌙 **모드 선택**: 다크/라이트 모드 토글
- 📱 **반응형**: 다양한 화면 크기 테스트

#### 통합 작업 순서
1. **🔧 컴포넌트 수정**: system-01, system-02의 컴포넌트들을 일관성 규칙에 맞게 수정
2. **📊 스토리 구조 파악**: 기존 시스템별 스토리 파일들의 구성 분석
3. **🔄 통합 스토리 생성**: 06-Universal 형태로 통합된 스토리북 파일 작성
4. **🎯 테마 검증**: 툴바에서 모든 시스템 테마가 올바르게 적용되는지 확인

#### 통합 스토리 장점
- ✅ **비교 용이**: 하나의 화면에서 모든 시스템 스타일 비교 가능
- ✅ **일관성 검증**: 시스템별 일관성을 쉽게 확인
- ✅ **효율적 개발**: 중복 코드 제거, 통합 관리
- ✅ **사용자 친화**: 테마 선택이 직관적

### 1. 새로운 시스템 추가 시
1. `packages/system-XX/` 디렉토리 생성
2. 기존 시스템의 `semantic.json` 복사
3. **토큰 값만 수정** (구조 변경 금지)
4. 컴포넌트 파일들 복사 후 **props 값만 변경**

### 2. 컴포넌트 수정 시
```jsx
// ✅ 올바른 방법: props 값만 변경
// System-01
<Button 
  variant="outlined" 
  colorScheme="secondary" 
  size="md"
  borderRadius="sm"
/>

// System-02  
<Button 
  variant="filled" 
  colorScheme="primary" 
  size="lg"
  borderRadius="lg"
/>
```

### 3. 검증 체크리스트
- [ ] 모든 시스템에서 동일한 props 사용?
- [ ] 컴포넌트 구조 변경 없음?
- [ ] 새로운 props 추가 없음?
- [ ] 기존 동작 방식 유지?

## 📚 참고사항

### 현재 진행 상황
- ✅ System-01: Professional & Clean (완료)
- ✅ System-02: Friendly & Bright (완료)
- 🔄 System-03: Modern & Software (진행 예정)
- ⏸️ System-04: Aerospace Control (계획)
- ⏸️ System-05: Aerospace Dashboard (계획)

### 다음 단계
1. System-03 개발 (Discord/Slack 스타일)
2. System-04, 05 컨셉 구체화
3. 각 시스템별 토큰 값 정의
4. 컴포넌트별 props 매핑 테이블 작성

---

**💡 핵심 기억사항**: 프리미티브는 절대 건드리지 않고, 오직 props 값만 다르게 적용하여 완전히 다른 느낌의 시스템을 만든다! 

## 프리미티브 컴포넌트 현황 분석

### 1. Foundation 토큰 사용 현황 ✅

모든 프리미티브 컴포넌트가 **foundation-tokens.css**를 올바르게 사용하고 있습니다:

- **Surface**: ✅ 완전히 foundation 토큰 기반으로 구현됨
- **Text**: ✅ 모든 타이포그래피가 foundation 토큰 사용
- **Frame**: ✅ spacing, layout 관련 모든 값이 foundation 토큰 사용
- **Interactive**: ✅ animation, z-index 등 foundation 토큰 사용
- **Sizing**: ✅ 크기 관련 모든 값이 foundation 토큰 사용
- **Divider**: ✅ stroke, color, spacing 모두 foundation 토큰 사용
- **Asterisk**: ✅ 색상과 폰트가 foundation 토큰 사용

### 2. Surface 컴포넌트 문제점 및 개선 필요사항 ⚠️

**현재 Surface의 주요 문제점:**

1. **시스템별 색상 매핑이 조잡함**
   - System-01: Blue 계열 사용 ✅
   - System-02: Green 계열 사용 ✅  
   - System-03: Orange 계열 사용 ✅
   - **하지만 위계별, 상태별 색상 구성이 체계적이지 못함**

2. **라이트/다크 모드 색상 대응 불일치**
   - 일부 색상에서 라이트/다크 간 명도 차이가 일관되지 않음
   - disabled 상태 색상이 시스템별로 다른 명도 기준 사용

3. **Foreground 색상 중복 정의**
   - 381-395줄에 secondary-system01 색상이 중복 정의됨
   - 일관성 없는 색상 체계

4. **Status 색상이 시스템 무관하게 고정**
   - error, warning, success, info 색상이 모든 시스템에서 동일
   - 시스템별 브랜드 정체성 반영 불가

### 3. 개선 계획

**Phase 1: Surface 컴포넌트 색상 체계 재정립**
1. 위계별 색상 명도 차이 표준화
2. 라이트/다크 모드 색상 대응 일관성 확보
3. 중복 정의 제거 및 코드 정리
4. 시스템별 Status 색상 분리

**Phase 2: 다른 프리미티브 시스템별 지원 확장**
1. Text: 시스템별 색상 지원 추가
2. Divider: 시스템별 색상 스키마 적용
3. Interactive: 시스템별 focus, hover 색상 적용

**Phase 3: 컴포넌트 수준 시스템 테마 적용**
1. Badge, Button, Card 등 간단한 컴포넌트부터 시작
2. 시스템 내부 일관성 규칙 적용
3. 통합 스토리북 구성

### 4. 중요 원칙 재확인

**✅ 모든 프리미티브 컴포넌트 CSS 모듈은 foundation-tokens.css 기반**
- `var(--foundation-foundation-color-*)` 형태로 모든 색상 참조
- `var(--foundation-foundation-spacing-*)` 형태로 모든 간격 참조  
- `var(--foundation-foundation-size-*)` 형태로 모든 크기 참조

이 원칙이 모든 프리미티브에서 잘 지켜지고 있어 시스템별 테마 작업을 진행할 준비가 되어 있습니다.

## 다음 단계

1. **Surface 컴포넌트 색상 체계 개선 작업 시작**
2. **간단한 컴포넌트(Badge, Button)부터 시스템별 적용**
3. **일관성 규칙을 바탕으로 한 체계적인 확장** 

## 핵심 개발 규칙

### 1. 절대 금지 사항
- **컴포넌트 props 옵션이나 구성 자체 변경 금지**
- 기존 프리미티브 컴포넌트의 props 인터페이스 수정 금지
- 새로운 props 추가 금지

### 2. 허용 사항
- **프리미티브 컴포넌트의 기존 props에 다른 값만 적용**
- radius를 `md`에서 `xlg`로 변경
- 색상을 `primary-system01-1-rest`에서 `primary-system02-1-rest`로 변경
- spacing을 `md`에서 `lg`로 변경

### 3. 프리미티브 컴포넌트 CSS 모듈 규칙 ⚠️ 중요

**모든 프리미티브 컴포넌트의 CSS 모듈은 반드시 `foundation-tokens.css`를 기준으로 작성해야 합니다.**

```css
/* ✅ 올바른 예시 - foundation 토큰 사용 */
.surface--background-primary {
  background-color: var(--foundation-foundation-color-blue-light-60);
}

.frame--padding-md {
  padding: var(--foundation-foundation-spacing-100-vertical);
}

.text--body-1 {
  font-size: var(--foundation-foundation-font-fontsize-160);
  font-weight: var(--foundation-foundation-font-fontweight-400);
}

/* ❌ 잘못된 예시 - 하드코딩된 값 */
.surface--background-primary {
  background-color: #1976d2; /* 절대 금지 */
  padding: 16px; /* 절대 금지 */
}
```

**Foundation 토큰 카테고리:**
- `--foundation-foundation-color-*`: 색상
- `--foundation-foundation-spacing-*`: 간격
- `--foundation-foundation-font-*`: 폰트
- `--foundation-foundation-shadow-*`: 그림자
- `--foundation-foundation-border-*`: 테두리

**이 규칙을 따라야 하는 이유:**
1. 모든 시스템 테마가 일관된 토큰 기반으로 동작
2. 디자인 토큰 변경 시 전체 시스템 자동 반영
3. 테마 간 전환이 seamless하게 동작
4. 유지보수성과 확장성 확보

## 디자인 시스템 접근성 및 품질 기준

### 접근성 기준

**WCAG 2.1 Level AA 준수**를 기본 기준으로 합니다.

#### 1. 색상 대비 (Color Contrast)
**측정 기준:**
- 일반 텍스트: **4.5:1 이상**
- 대형 텍스트 (18pt 이상 또는 14pt Bold): **3:1 이상**
- 비텍스트 요소 (UI 컴포넌트, 그래픽): **3:1 이상**

**적용 영역:**
- 모든 텍스트와 배경 간의 대비
- 버튼, 입력 필드 등 UI 컴포넌트의 경계선
- 아이콘과 배경 간의 대비
- 포커스 인디케이터의 대비

```css
/* 예시: 색상 대비 확보 */
.button--primary {
  background-color: var(--foundation-foundation-color-blue-dark-50); /* 4.5:1 확보 */
  color: var(--foundation-foundation-color-neutral-light-100); /* 대비 확보 */
}

.button--primary:focus {
  outline: 2px solid var(--foundation-foundation-color-blue-light-40); /* 3:1 대비 */
  outline-offset: 2px;
}
```

#### 🔍 현재 Surface 컴포넌트 색상 대비 검증 결과

**정량적 검증 결과 (2024.06.17 기준):**

✅ **통과한 색상 조합 (6/9개, 67%)**
- System-01 Primary Button (Light): 6.72:1 (AA)
- System-01 CTA Button (Light): 8.38:1 (AAA)
- System-01 Secondary Text (Dark): 7.19:1 (AAA)
- System-02 Primary Button (Light): 8.38:1 (AAA)
- Universal Error Status: 6.02:1 (AA)
- Universal Success Status: 11.24:1 (AAA)

❌ **개선 필요한 색상 조합 (3/9개, 33%)**

1. **System-01 Secondary Text (Light)**
   - 현재: `grey-light-60` + `grey-light-0` = **2.92:1** ❌
   - 문제: WCAG AA 기준(4.5:1) 미달
   - **해결책**: `grey-light-80` 사용 → **4.51:1** ✅
   ```css
   /* ❌ 현재 */
   color: var(--foundation-foundation-color-grey-light-60); /* 2.92:1 */
   
   /* ✅ 개선 */
   color: var(--foundation-foundation-color-grey-light-80); /* 4.51:1 */
   ```

2. **System-01 Primary Button (Dark)**
   - 현재: `grey-dark-100` + `blue-dark-60` = **2.65:1** ❌
   - 문제: WCAG AA 기준(4.5:1) 미달
   - **해결책**: `blue-dark-40` 사용 → **4.67:1** ✅
   ```css
   /* ❌ 현재 */
   background-color: var(--foundation-foundation-color-blue-dark-60); /* 2.65:1 */
   
   /* ✅ 개선 */
   background-color: var(--foundation-foundation-color-blue-dark-40); /* 4.67:1 */
   ```

3. **System-02 CTA Button (Light)**
   - 현재: `grey-light-100` + `purple-light-60` = **2.98:1** ❌
   - 문제: WCAG AA 기준(4.5:1) 미달
   - **해결책**: `purple-light-80` 사용 → **4.89:1** ✅
   ```css
   /* ❌ 현재 */
   background-color: var(--foundation-foundation-color-purple-light-60); /* 2.98:1 */
   
   /* ✅ 개선 */
   background-color: var(--foundation-foundation-color-purple-light-80); /* 4.89:1 */
   ```

#### 🛠️ 색상 검증 자동화 도구

**검증 스크립트 실행:**
```bash
# packages/shared 디렉토리에서
node scripts/validate-colors.cjs
```

**자동 검증 기능:**
- WCAG 2.1 AA/AAA 기준 자동 계산
- 대비율 정확한 수치 제공
- 개선 제안 자동 생성
- 시스템별 색상 조합 일괄 검증

#### 2. 키보드 접근성
**필수 요구사항:**
- 모든 인터랙티브 요소에 키보드로 접근 가능
- Tab 순서가 논리적이어야 함
- 포커스 표시가 명확해야 함 (최소 2px 두께)
- 키보드 트랩 방지

```css
/* 포커스 스타일 기본 규칙 */
.interactive-element:focus {
  outline: 2px solid var(--foundation-foundation-color-blue-light-40);
  outline-offset: 2px;
}

.interactive-element:focus:not(:focus-visible) {
  outline: none; /* 마우스 클릭 시에는 제거 */
}
```

#### 3. 터치 타겟 크기
**최소 크기 기준:**
- 터치 타겟: **최소 44×44 CSS pixels**
- 마우스 타겟: **최소 24×24 CSS pixels**
- 인접한 타겟 간 최소 8px 간격

```css
.button {
  min-height: 44px;
  min-width: 44px;
  padding: var(--foundation-foundation-spacing-100-vertical) var(--foundation-foundation-spacing-200-horizontal);
}
```

#### 4. 텍스트 크기 조정
- **200%까지 확대 시에도 기능 손실 없어야 함**
- 반응형 디자인으로 텍스트 리플로우 지원
- 고정 크기 컨테이너 사용 지양

### 품질 기준

#### 1. 성능 기준
- **Lighthouse Accessibility 점수: 95점 이상**
- 스크린 리더 호환성 테스트 통과
- 키보드 네비게이션 테스트 통과

#### 2. 브라우저 호환성
- **최신 3개 버전** 지원 (Chrome, Firefox, Safari, Edge)
- **모바일 브라우저** 포함 (iOS Safari, Chrome Mobile)

#### 3. 다크/라이트 모드 지원
- 모든 컴포넌트가 다크/라이트 모드 완벽 지원
- `prefers-color-scheme` 미디어 쿼리 활용
- 사용자 설정 오버라이드 가능

### 테스트 및 검증 도구

#### 1. 자동화 도구
- **axe-core**: 접근성 자동 테스트
- **Lighthouse**: 종합 품질 측정
- **Color Contrast Analyzers**: 색상 대비 검증

#### 2. 수동 테스트
- **스크린 리더 테스트** (NVDA, JAWS, VoiceOver)
- **키보드 전용 네비게이션 테스트**
- **확대/축소 테스트** (200%, 400%)

#### 3. 사용자 테스트
- **실제 장애인 사용자 테스트** (권장)
- **다양한 보조 기술 환경에서 테스트**

### 예외 및 특수 상황

#### 1. 브랜드 색상 제약
- 브랜드 색상이 대비 기준을 만족하지 못할 경우:
  - 대체 색상 팔레트 제공
  - 텍스트 크기 증대로 보완
  - 추가적인 시각적 구분 요소 추가

#### 2. 레거시 시스템 호환성
- 기존 시스템과의 호환성이 필요한 경우:
  - 점진적 향상 (Progressive Enhancement) 적용
  - 단계적 마이그레이션 계획 수립

### 시스템별 접근성 특이사항

#### System-04, 05 (Aerospace)
- **고대비 환경** 고려 (미션 크리티컬 환경)
- **색각 이상자** 대응 강화 (안전 관련 정보)
- **스트레스 환경** 사용성 고려

**이 기준들은 선택사항이 아닌 필수 요구사항입니다. 모든 시스템 테마는 이 기준을 만족해야 하며, 기준을 만족하지 못하는 컴포넌트는 배포가 불가합니다.**
