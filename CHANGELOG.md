# Changelog

All notable changes to Lumir Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- NPM 배포 스크립트 및 가이드 추가
- 상세한 설치 및 사용 가이드 문서 작성

## [1.0.5] - 2024-01-XX

### Added
- **SegmentButton 컴포넌트 추가** - 단일/다중 선택 지원
  - System-01 및 System-02 버전 모두 구현
  - 완전 연결된 버튼 그룹 디자인
  - 반응형 크기 조정 (sm, md, lg)
  - 접근성 기준 준수 (aria-pressed, 키보드 네비게이션)
- **Universal Storybook 스토리 추가**
  - 시스템 간 비교 스토리
  - 실제 사용 사례 예제들
  - 컴포넌트 상태별 시연

### Changed
- **System-02 디자인 개선**
  - SegmentButton 컨테이너와 버튼 radius 일치
  - 더 둥근 모서리로 친근한 느낌 강화
- **Storybook 구조 개선**
  - Render prop 패턴으로 context 오류 해결
  - 시스템별 컴포넌트 올바른 매핑

### Fixed
- SegmentButton context 오류 수정
- System-02에서 중복 컴포넌트 정의 제거
- TypeScript 타입 정의 개선

### Technical
- Foundation 토큰 시스템 최적화
- 빌드 프로세스 안정화
- 접근성 검증 자동화

## [1.0.4] - 2024-01-XX

### Added
- **Foundation 토큰 시스템 구축**
  - 629개 Foundation 토큰 생성
  - 색상, 간격, 폰트, 그림자, 테두리 토큰 체계화
  - CSS, SCSS, JS 형태로 토큰 출력
- **프리미티브 컴포넌트 완성**
  - Text, Icon, Frame, Surface, Interactive, Sizing 컴포넌트
  - 모든 컴포넌트에 Foundation 토큰 적용
  - TypeScript 타입 정의 완료

### Changed
- **시스템별 색상 테마 정립**
  - System-01: Professional Blue 테마
  - System-02: Modern Purple 테마
- **컴포넌트 아키텍처 표준화**
  - Compound 컴포넌트 패턴 적용
  - 일관된 props 인터페이스

### Fixed
- 색상 대비 WCAG 2.1 AA 기준 준수
- 접근성 개선 (키보드 네비게이션, 스크린 리더 지원)

## [1.0.3] - 2024-01-XX

### Added
- **System-01 컴포넌트 라이브러리**
  - Button, Card, Badge, Checkbox, Radio
  - Field, Label, Link, Menu, OptionList
  - Tab, TextDisplay, Chip, ComboBox
- **System-02 컴포넌트 라이브러리**
  - System-01과 동일한 컴포넌트 세트
  - 친근하고 현대적인 디자인 적용

### Changed
- 컴포넌트별 스토리북 스토리 추가
- 반응형 디자인 최적화

## [1.0.2] - 2024-01-XX

### Added
- 아이콘 시스템 구축 (293개 아이콘)
- TypeScript 지원 강화
- Rollup 빌드 시스템 구축

### Fixed
- 빌드 프로세스 안정화
- 의존성 관리 개선

## [1.0.1] - 2024-01-XX

### Added
- 초기 모노레포 구조 설정
- pnpm 워크스페이스 구성
- 기본 빌드 파이프라인

## [1.0.0] - 2024-01-XX

### Added
- 🎉 **Lumir Design System 첫 번째 릴리즈**
- 5가지 시스템 테마 아키텍처 설계
- Foundation 토큰 시스템 기반 구축
- React + TypeScript 기반 컴포넌트 라이브러리

---

## 버전 정책

- **Major (X.0.0)**: 하위 호환성을 깨는 변경사항
- **Minor (X.Y.0)**: 하위 호환 가능한 새 기능 추가
- **Patch (X.Y.Z)**: 하위 호환 가능한 버그 수정

## 기여 가이드

변경사항을 제안하거나 버그를 발견하셨다면:

1. [GitHub Issues](https://github.com/your-org/lumir-design-system/issues)에 이슈 생성
2. Pull Request 제출
3. 코드 리뷰 및 테스트 통과 후 머지

## 라이선스

이 프로젝트는 [ISC 라이선스](LICENSE) 하에 배포됩니다. 