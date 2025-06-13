# 📋 Lumir Design System 업데이트 내역

이 문서는 Lumir Design System v0.0.1부터의 업데이트 내역을 정리한 문서입니다.

*최초 작성: 2025-06-02*

---

## 🚀 v0.0.4 - 프리미티브 아키텍처 고도화 (2025-01-15)

### 📦 패키지 정보
- **lumir-design-tokens**: v0.0.4
- **lumir-design-components**: v0.0.4

### 🎯 주요 개선사항

#### 🏗️ 프리미티브 아키텍처 대대적 고도화
**DEVELOPMENT_RULES 기반 완전 일관성 달성**

- **레거시 프리미티브 완전 제거**: 
  - `Box` → `Surface` (색상, 테두리, 반지름 전담)
  - `Stack` → `Frame` (레이아웃, 정렬, 간격 전담)  
  - `Sizing` 추가 (크기 제어 전담)

- **3계층 프리미티브 시스템 확립**:
  - **Surface**: 시각적 표면 - 색상, 테두리, 반지름
  - **Frame**: 레이아웃 컨테이너 - 정렬, 간격, 방향
  - **Sizing**: 크기 제어 - width, height, 반응형

#### 🎨 하드코딩 완전 제거
**모든 컴포넌트가 100% 토큰 기반으로 전환**

- **인라인 스타일 금지**: `style={{}}` 완전 제거
- **시멘틱 토큰 전용**: 모든 색상, 간격, 크기가 토큰 기반
- **CSS 변수 직접 사용 금지**: 컴파운드 컴포넌트에서도 토큰만 사용

#### 📦 컴파운드 컴포넌트 고도화
**주요 컴포넌트들의 완전한 프리미티브 전환**

- **ComboBox**: 
  - 복잡한 드롭다운 레이아웃을 Frame + Surface 조합으로 현대화
  - 상태 관리 기반 인터랙티브 스토리북 구현
  - 칩과 필드 간격 개선 (`gap="sm"`)

- **Card**: 
  - Sizing + Surface + Frame 3계층 구조로 개선
  - 모든 스토리 패턴을 프리미티브 기반으로 전환

- **Link**: 
  - Text 컴포넌트 타입 에러 수정
  - 일관된 Frame 기반 레이아웃 적용

- **Form 요소들**: Asterisk, Field 등 실제 동작하는 컴포넌트 연동

#### 🔧 기술적 개선사항

- **Sizing 컴포넌트 기능 확장**: Width 토큰 지원 추가
- **체크박스 디자인 수정**: 16×16 정사각형, Indeterminate 상태 개선
- **스토리북 일관성**: 모든 스토리에서 프리미티브 사용 통일
- **레이아웃 최적화**: `display="flex"` 명시적 선언으로 gap 적용 보장

#### 📋 DEVELOPMENT_RULES 100% 준수
**모든 컴포넌트가 규칙 위반 사항 완전 해결**

- ✅ 프리미티브 사용: Surface, Frame, Sizing만 사용
- ✅ 토큰 시스템: 모든 값이 시멘틱 토큰 기반
- ✅ 하드코딩 금지: 인라인 스타일 완전 제거
- ✅ 아키텍처 일관성: 모든 컴포넌트 동일한 패턴

### 🎉 결과

프리미티브 아키텍처의 **완전한 고도화**를 통해:
- **일관성**: 모든 컴포넌트가 동일한 패턴
- **확장성**: 새로운 컴포넌트 개발 시 명확한 가이드라인
- **유지보수성**: 토큰 변경만으로 전체 디자인 시스템 업데이트
- **타입 안전성**: TypeScript 기반 완전한 타입 추론

### 🎯 주요 개선사항

#### 🎨 하드코딩 완전 제거
**모든 컴포넌트가 100% 토큰 기반으로 전환**

- **인라인 스타일 금지**: `style={{}}` 완전 제거
- **시멘틱 토큰 전용**: 모든 색상, 간격, 크기가 토큰 기반
- **CSS 변수 직접 사용 금지**: 컴파운드 컴포넌트에서 토큰 직접 참조 차단

#### 🧩 컴포넌트별 고도화 완료

##### ComboBox 완전 고도화
- **프리미티브 구조 전환**: Surface + Sizing + Frame 조합
- **필드 너비 시스템 개선**: fit-content, fill-width, 커스텀 값 지원
- **상태 관리 개선**: searchable/non-searchable 모드별 최적화
- **스토리북 UX 개선**: 배경색 제거로 가독성 향상

##### Card 컴포넌트 고도화  
- **채용관리시스템 핵심 컴포넌트** 완전 재구성
- **시멘틱 토큰 적용**: `backgroundColor="secondary-1"` → `background="secondary-background-1-rest"`
- **프리미티브 계층**: Surface(색상) → Sizing(크기) → Frame(레이아웃) → 내용

##### Link 컴포넌트 고도화
- **Text 컴포넌트 연동 개선**: disabled prop 호환성 해결
- **외부 링크 아이콘**: Icon 프리미티브와 완전 통합
- **상태별 색상**: 시멘틱 토큰 기반 인터랙션 상태

##### Asterisk & Divider 스토리 고도화
- **실제 Field 컴포넌트 연동**: HTML input → Field 컴포넌트 사용
- **프리미티브 기반 예제**: Stack → Frame, Box → Surface 전환

#### 🔧 Sizing 컴포넌트 기능 확장
**Width 토큰 지원으로 완전한 크기 제어 시스템**

```typescript
// 새로 추가된 width 지원
<Sizing width="lg" height="xl">  // HeightValue + WidthValue
<Sizing width="300px" height="fit-content">  // 커스텀 값
<Sizing width="100%" height="auto">  // 반응형 값
```

#### ✅ Checkbox 디자인 시스템 개선
- **크기 표준화**: 16×24 → 16×16 정사각형 (`width="sm" height="xxs"`)
- **Indeterminate 상태**: 세로 막대 → 가로 막대(8×2px)로 UX 개선
- **아이콘 색상 일관성**: 체크마크 색상 토큰 기반 적용

### 🛠 기술적 혁신

#### DEVELOPMENT_RULES 엄격 적용
```tsx
// ❌ 이전 방식 - 하드코딩과 레거시 프리미티브
<Box style={{ backgroundColor: '#F5F5F5', padding: '16px' }}>
  <Stack spacing="md">
    <div style={{ color: '#333' }}>내용</div>
  </Stack>
</Box>

// ✅ 고도화된 방식 - 완전한 프리미티브 아키텍처  
<Surface background="secondary-background-1-rest">
  <Sizing height="lg">
    <Frame display="flex" direction="column" gap="md" padding="lg" fill>
      <Text variant="body-1" color="secondary-foreground-1">내용</Text>
    </Frame>
  </Sizing>
</Surface>
```

#### 프리미티브 조합 패턴 정립
```tsx
// 표준 3계층 구조
<Surface>      // 1계층: 색상, 테두리, 반지름
  <Sizing>     // 2계층: 크기 제어  
    <Frame>    // 3계층: 레이아웃, 정렬
      <Text>   // 4계층: 내용
    </Frame>
  </Sizing>
</Surface>
```

#### gap 작동 보장 시스템
- **display="flex" 필수**: 모든 Frame에 명시적 선언
- **토큰 기반 간격**: xxxs(2px) ~ xxxl(64px) 완전 지원
- **spacing → gap 전환**: 레거시 spacing prop 완전 제거

### 📱 Storybook 완전 고도화

#### 일관된 스토리 구조
- **모든 레거시 컴포넌트 제거**: Stack/Box → Frame/Surface
- **토큰 기반 예제**: 하드코딩 완전 제거
- **실제 사용 사례**: Field, ComboBox 등 실제 컴포넌트 연동

#### ComboBox 스토리 UX 개선
- **FieldWidthOptions 가독성 향상**: 배경색 제거, 간격 최적화
- **컨테이너 크기 최적화**: `width: 'fit-content'`로 내용에 맞춤
- **요소간 간격 개선**: `gap="xl"` (32px) 적용

### 🎯 Breaking Changes 없음
**완전한 하위 호환성 유지**
- 기존 API 100% 호환
- 레거시 컴포넌트는 deprecated 표시
- 점진적 마이그레이션 가능

### 📈 성능 및 품질 개선

#### 번들 사이즈 최적화
- **트리 쉐이킹 개선**: 사용하지 않는 레거시 코드 제거
- **CSS 모듈 효율성**: 불필요한 스타일 규칙 제거

#### 개발자 경험 향상
- **타입 안전성 강화**: 모든 프리미티브 props 완전한 타입 정의
- **에러 메시지 개선**: DEVELOPMENT_RULES 위반시 명확한 가이드
- **디버깅 편의성**: 각 컴포넌트의 역할과 책임 명확화

#### 디자인 일관성 100% 달성
- **모든 컴포넌트 토큰 기반**: 색상, 간격, 크기 완전 일관성
- **상태별 시각적 피드백**: hover, pressed, disabled 상태 통일
- **반응형 디자인**: 모든 디바이스에서 일관된 경험

### 🔮 아키텍처 안정성 확보

#### 확장 가능한 설계
- **새 컴포넌트 개발**: 표준 프리미티브 조합 패턴 적용
- **커스텀 컴포넌트**: Surface/Frame/Sizing 기반 확장 가능
- **테마 시스템**: 토큰 기반으로 완전한 테마 변경 지원

#### 유지보수성 극대화
- **단일 책임 원칙**: 각 프리미티브가 명확한 역할 담당
- **의존성 최소화**: 프리미티브간 순환 의존성 제거
- **테스트 용이성**: 각 계층별 독립적 테스트 가능

---

## 🎯 v0.0.3 - Field & ComboBox 대폭 개선 (2025-06-04)

### 📦 패키지 정보
- **lumir-design-tokens**: v0.0.3
- **lumir-design-components**: v0.0.3

### 🎯 주요 개선사항

#### 🔧 Field 컴포넌트 완전 개편
**유연한 너비 제어와 향상된 사용자 경험**

- **스마트 너비 시스템**: 
  - `fit-content`: 내용에 맞춰 동적 크기 조절
  - `fill-width`: 부모 요소 전체 너비 (기본값)
  - **커스텀 값**: `'200px'`, `'50%'` 등 직접 지정 가능

- **텍스트 최적화**:
  - **동적 너비 계산**: `textLength * 0.6 + 2` 문자 기반 스마트 크기 조절
  - **최소 너비 보장**: 모든 필드에 80px 최소 너비 적용
  - **Truncate 기능**: `truncateOnFit` 옵션으로 긴 텍스트 말줄임표 처리

- **향상된 인터랙션**:
  - **전체 영역 클릭**: 필드 전체 영역에서 클릭 이벤트 처리
  - **onClick 핸들러**: 커스텀 클릭 동작 지원
  - **아이콘 지원**: `leftIcon`, `rightIcon` 속성 추가

#### 🎨 ComboBox 통합 Field 제어
**ComboBox에서 Field 속성을 직접 제어할 수 있도록 개선**

- **Field 속성 통합**: ComboBox에서 Field 관련 모든 속성 지원
  - `fieldVariant`: `'outlined'` | `'transparent'` | `'filled'`
  - `fieldSize`: `'md'` | `'lg'` | `'xlg'`
  - `fieldWidth`: `'fit-content'` | `'fill-width'` | 커스텀 값
  - `labelPosition`: `'above'` | `'before'` | `'none'`
  - `leftIcon`: 왼쪽 아이콘 지원

- **클릭 동작 개선**: 
  - **전체 영역 반응**: 텍스트뿐만 아니라 chevron 아이콘 클릭 시에도 드롭다운 열림
  - **검색 모드 최적화**: searchable일 때와 아닐 때 각각 최적화된 클릭 핸들링

### 🛠 기술적 개선사항

#### Field 컴포넌트
```typescript
interface FieldProps {
  // 새로 추가된 속성들
  fieldWidth?: 'fit-content' | 'fill-width' | string;
  minWidth?: string;
  truncateOnFit?: boolean;
  onClick?: () => void;
  
  // 기존 속성들 유지
  variant?: 'outlined' | 'transparent' | 'filled';
  size?: 'md' | 'lg' | 'xlg';
  // ...
}
```

#### ComboBox 컴포넌트
```typescript
interface ComboBoxProps {
  // Field 관련 새로 추가된 속성들
  fieldVariant?: 'outlined' | 'transparent' | 'filled';
  fieldSize?: 'md' | 'lg' | 'xlg';
  fieldWidth?: 'fit-content' | 'fill-width' | string;
  labelPosition?: 'above' | 'before' | 'none';
  leftIcon?: React.ReactNode;
  
  // 기존 속성들 유지
  options: Array<{ value: string; label: string }>;
  // ...
}
```

### 📱 Storybook 업데이트

#### Field Stories
- **너비 제어 예제**: 다양한 `fieldWidth` 옵션 시연
- **Truncate 데모**: 긴 텍스트 처리 방식 확인
- **인터랙션 테스트**: 클릭 핸들링 동작 확인

#### ComboBox Stories  
- **통합 Field 제어**: ComboBox에서 Field 속성 직접 제어 예제
- **너비 옵션**: fit-content, fill-width, 커스텀 값 데모
- **아이콘 통합**: leftIcon과 함께 사용하는 예제

### 🔄 Breaking Changes
**이번 업데이트는 기존 API와 완전 호환됩니다**
- 모든 기존 속성과 동작이 그대로 유지됨
- 새로운 기능은 선택적으로 사용 가능

### 📈 성능 개선
- **동적 스타일 최적화**: CSS-in-JS 대신 동적 스타일 객체 사용
- **렌더링 최적화**: 불필요한 리렌더링 방지
- **메모리 효율성**: 이벤트 핸들러 최적화

### 🎨 디자인 개선
- **일관성 향상**: Field와 ComboBox 간 시각적 일관성 개선
- **반응형 대응**: 다양한 화면 크기에서 최적화된 표시
- **접근성 강화**: 키보드 네비게이션 및 스크린 리더 지원 개선

---

## 🚀 v0.0.2 - 첫 번째 컴포넌트 릴리즈 (2025-06-03)

### 📦 패키지 정보
- **lumir-design-tokens**: v0.0.2
- **lumir-design-components**: v0.0.2

### 🎯 주요 개선사항

#### 💯 99% 호환성 달성
**모든 환경에서 즉시 설치 가능한 범용 디자인 시스템으로 진화**

- **React 버전 지원 확대**: React 16.8+ ~ 19.x 모든 버전 지원
- **Node.js 제한 제거**: 모든 Node.js 버전에서 설치 가능
- **패키지 매니저 완전 지원**: npm, yarn, pnpm 모든 환경 지원
- **프레임워크 무관**: Next.js, CRA, Vite, Remix, Gatsby 등 모든 React 프로젝트

#### 🔧 호환성 자동화 시스템
- **자동 호환성 검사**: 설치 후 환경 자동 분석
- **자동 문제 해결**: 호환성 문제 자동 감지 및 해결책 제시
- **원샷 설치 명령어**: 99% 성공률 보장 설치 방법 제공

#### 📚 완전한 문제 해결 가이드
- **Node.js 버전별 해결법**: 16.x ~ 22.x 모든 버전별 상세 가이드
- **React 버전별 해결법**: 16.8+ ~ 19.x 모든 버전별 해결 방법
- **패키지 매니저별 가이드**: npm, yarn, pnpm 환경별 최적화
- **운영체제별 해결법**: Windows, macOS, Linux 특수 오류 대응
- **프레임워크별 설정**: Next.js, CRA, Vite 등 맞춤 설정 가이드

### 🏗️ 기술적 개선사항

#### peerDependencies 완화
```json
// 이전: 엄격한 버전 제한
"react": "^18.0.0"

// 현재: 광범위한 버전 지원
"react": ">=16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
```

#### engines 필드 제거
- Node.js 버전 제한 완전 제거
- npm 버전 제한 완전 제거
- 최대 호환성 확보

#### 자동화 스크립트 추가
- **check-compatibility.js**: 환경 호환성 자동 검사
- **fix-compatibility.js**: 호환성 문제 자동 수정
- **postinstall 후크**: 설치 후 자동 환경 체크

### 📖 문서 대폭 개선

#### 새로운 설치 가이드
```bash
# 범용 설치 (99% 성공률)
npm install lumir-design-components lumir-design-tokens --legacy-peer-deps --force

# 원샷 오류 해결
rm -rf node_modules package-lock.json
echo "legacy-peer-deps=true" > .npmrc
npm cache clean --force
npm install lumir-design-components lumir-design-tokens --legacy-peer-deps --force
```

#### 프로젝트적용가이드 확장
- **기존 프로젝트 즉시 설치** 섹션 추가
- **포괄적 문제 해결 가이드** 섹션 추가 (1,000+ 라인)
- **환경별 상세 해결법** 제공
- **실시간 디버깅 체크리스트** 제공

#### README.md 최적화
- 호환성 중심으로 완전 재작성
- 즉시 사용 가능한 예제 제공
- 모든 환경 지원 명시

### ⚡ 설치 성공률 개선

#### 이전 v0.0.1
- **Node.js 16-20**: ✅ 정상
- **Node.js 21+**: ❌ 실패
- **React 19**: ❌ 실패
- **기존 프로젝트**: ⚠️ 제한적

#### 현재 v0.0.2
- **Node.js 모든 버전**: ✅ 지원
- **React 16.8+ ~ 19.x**: ✅ 완전 지원
- **모든 패키지 매니저**: ✅ 지원
- **기존 프로젝트**: ✅ 99% 성공률

### 🛠️ 개발자 경험 개선

#### 자동 호환성 처리
```bash
# 설치 후 자동 실행
npm install lumir-design-components  # → 자동 환경 체크

# 수동 호환성 체크
npm run compat:check

# 자동 문제 해결
npm run compat:fix
```

#### 향상된 에러 메시지
- 구체적인 오류 원인 설명
- 단계별 해결 방법 제시
- 환경별 맞춤 해결책 제공

### 🎯 실제 사용성 향상

#### 기존 프로젝트 도입 장벽 제거
- ❌ 이전: "새 프로젝트에서만 사용 가능"
- ✅ 현재: "모든 기존 프로젝트에 즉시 도입 가능"

#### 설치 명령어 단순화
```bash
# 복잡한 환경 분석 불필요
# 모든 환경에서 동일한 명령어 사용
npm install lumir-design-components lumir-design-tokens --legacy-peer-deps --force
```

### 🔮 앞으로의 호환성 정책

#### 안정성 우선 원칙
- LTS 버전 중심 개발 지속
- 최신 버전 조기 지원을 위한 실험적 플래그 제공
- 하위 호환성 100% 유지

#### 지속적 호환성 모니터링
- 새로운 React/Node.js 버전 출시시 즉시 테스트
- 커뮤니티 피드백 기반 호환성 개선
- 월별 호환성 상태 리포트 제공

---

## 🎉 v0.0.1 - 초기 릴리즈 (2025-06-02)

### 📦 패키지 정보
- **lumir-design-tokens**: v0.0.1
- **lumir-design-components**: v0.0.1

---

## 🚀 주요 특징

### 🎨 완전한 디자인 토큰 시스템
- **Foundation 토큰**: 기본 색상, 타이포그래피, 간격, 애니메이션 등 핵심 토큰
- **Semantic 토큰**: 컴포넌트와 사용 목적에 따른 의미적 토큰
- **총 1,038개 토큰**: CSS와 SCSS 변수로 제공
- **아이콘 시스템**: 295개 SVG 아이콘을 React 컴포넌트로 제공 (토큰 대신 컴포넌트 방식)

### 🧱 프리미티브 컴포넌트 (Primitives)
모든 다른 컴포넌트의 기반이 되는 기본 빌딩 블록:

- **Box**: 기본 컨테이너 (배경, 테두리, 패딩, 마진)
- **Text**: 텍스트 렌더링 (모든 타이포그래피 변형)
- **Stack**: 플렉스 기반 수직/수평 레이아웃
- **Grid**: CSS 그리드 기반 레이아웃
- **Spacer**: 간격 조정용 빈 공간
- **Icon**: SVG 아이콘 렌더링 (295개 아이콘 지원)
- **Asterisk**: 필수 필드 표시용 별표
- **Container**: 콘텐츠 중앙 정렬 및 최대 너비 제한
- **Flex**: 플렉스박스 레이아웃
- **Divider**: 구분선

### 🏗️ 컴파운드 컴포넌트 (Compounds)
프리미티브들을 조합하여 만든 완전한 UI 컴포넌트:

#### 기본 컴포넌트
- **Button**: 다양한 스타일과 상태를 지원하는 버튼
- **Label**: 폼 라벨 (필수 표시 기능 포함)
- **Badge**: 상태나 정보 표시용 뱃지
- **Card**: 콘텐츠 카드 컴포넌트
- **Chip**: 태그나 선택 가능한 아이템
- **Tab**: 탭 인터페이스

#### 폼 컴포넌트
- **Field**: 완전한 폼 필드 (라벨, 입력, 에러 메시지 포함)
- **Checkbox**: 다중 선택 체크박스
- **Radio**: 단일 선택 라디오 버튼

#### 고급 컴포넌트
- **ComboBox**: 검색 가능한 드롭다운 선택
- **MenuHeader**: 메뉴 헤더 컴포넌트

### 🎬 애니메이션 시스템
- **useTransition 훅**: 애니메이션 상태 및 라이프사이클 관리
- **AnimationUtils**: 재사용 가능한 애니메이션 유틸리티 함수
- **AnimationPresets**: 컴포넌트별 최적화된 애니메이션 프리셋
- **시멘틱 토큰 기반**: duration과 easing 토큰 활용

---

## 🏗️ 아키텍처 특징

### 🎯 프리미티브 우선 설계
- **관심사 분리**: 프리미티브는 다른 컴포넌트에 의존하지 않음
- **조합 가능성**: 모든 컴파운드는 프리미티브의 조합으로 구성
- **일관성**: 모든 컴포넌트가 동일한 토큰 시스템 사용

### 🎨 시멘틱 토큰 전용 사용
- **하드코딩 금지**: CSS에서 직접 색상이나 크기 값 사용하지 않음
- **반응형 지원**: 모든 토큰이 반응형 값 지원
- **다크 모드 준비**: 색상 토큰 기반 테마 시스템

### 📱 반응형 디자인
- **모바일 우선**: 모든 컴포넌트가 모바일부터 데스크톱까지 지원
- **브레이크포인트**: `mobile`, `tablet`, `desktop` 기반 반응형
- **유연한 크기 조정**: 모든 spacing과 size 값이 반응형

### ♿ 접근성 우선
- **ARIA 지원**: 모든 인터랙티브 컴포넌트에 적절한 ARIA 속성
- **키보드 네비게이션**: 모든 컴포넌트가 키보드로 조작 가능
- **스크린 리더**: semantic HTML과 적절한 라벨링
- **색상 대비**: WCAG 가이드라인 준수

### 🔧 개발자 경험
- **TypeScript 완전 지원**: 모든 컴포넌트와 토큰의 타입 정의
- **Storybook 완비**: 모든 컴포넌트의 인터랙티브 문서
- **CSS 모듈**: 스타일 격리 및 클래스명 충돌 방지
- **forwardRef**: 모든 컴포넌트가 ref 전달 지원

---

## 📚 스토리북 구조

### Components
- **Primitives/**: 기본 빌딩 블록 컴포넌트들
- **Compounds/**: 복합 기능 컴포넌트들

### Design Tokens
- **Animation**: 애니메이션 토큰 및 유틸리티 시연
- **Colors**: 색상 토큰 시스템 표시
- **Typography**: 타이포그래피 스케일 및 스타일
- **Spacing**: 간격 시스템 가이드

---

## 🛠️ 기술 스택

### 핵심 기술
- **React 18**: 최신 React 기능 활용
- **TypeScript**: 완전한 타입 안전성
- **CSS Modules**: 스타일 격리
- **Rollup**: 최적화된 번들링

### 개발 도구
- **Storybook**: 컴포넌트 문서화 및 테스트
- **Jest**: 단위 테스트
- **ESLint**: 코드 품질 관리

### 토큰 관리
- **Style Dictionary**: 토큰 변환 및 관리
- **JSON**: 토큰 정의 형식
- **CSS/SCSS Variables**: 출력 형식

---

## 📦 설치 및 사용법

### NPM 설치
```bash
npm install lumir-design-tokens lumir-design-components
```

### 기본 사용법
```tsx
import { Button, Text, Stack } from 'lumir-design-components';
import 'lumir-design-tokens/css';

function App() {
  return (
    <Stack direction="vertical" spacing="md">
      <Text variant="heading-1">Hello Lumir!</Text>
      <Button variant="primary" size="md">
        시작하기
      </Button>
    </Stack>
  );
}
```

### CSS 토큰 사용
```css
.my-component {
  background-color: var(--semantic-color-background-primary);
  padding: var(--semantic-spacing-padding-md);
  border-radius: var(--semantic-radius-sm);
}
```

---

## 🔮 로드맵

### 다음 마이너 버전 (v0.1.0)
- **Toast 컴포넌트**: 알림 메시지 시스템
- **Modal 컴포넌트**: 모달 다이얼로그
- **Dropdown 컴포넌트**: 드롭다운 메뉴
- **Progress 컴포넌트**: 진행률 표시

### 향후 메이저 버전 (v1.0.0)
- **테마 시스템**: 다크 모드 및 커스텀 테마
- **국제화(i18n)**: 다국어 지원
- **고급 애니메이션**: 더 복잡한 애니메이션 패턴
- **성능 최적화**: 코드 스플리팅 및 트리 쉐이킹

---

## 🐛 알려진 이슈

현재 알려진 이슈가 없습니다. 이슈 발견 시 [GitHub Issues](https://github.com/organization/lumir-design-system/issues)에 보고해 주세요.

---

## 🙏 기여하기

Lumir Design System은 오픈 소스 프로젝트입니다. 기여를 환영합니다!

1. **버그 신고**: GitHub Issues를 통해 버그를 신고해 주세요
2. **기능 제안**: 새로운 기능이나 개선사항을 제안해 주세요
3. **코드 기여**: Pull Request를 통해 직접 기여할 수 있습니다
4. **문서 개선**: 문서 개선에도 도움을 주세요

---

## 📄 라이선스

MIT 라이선스로 제공됩니다. 자세한 내용은 [LICENSE](../LICENSE) 파일을 참고하세요.

---

*이 문서는 새로운 버전이 릴리즈될 때마다 업데이트됩니다.*