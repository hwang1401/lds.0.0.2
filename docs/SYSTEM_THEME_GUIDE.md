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