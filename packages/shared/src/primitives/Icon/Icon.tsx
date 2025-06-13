import React from 'react';
import styles from './Icon.module.css';

// 생성된 모든 아이콘 컴포넌트들과 타입을 import
export * from './generated';
import * as GeneratedIcons from './generated';
import { GeneratedIconName } from './generated';

/**
 * 사이즈 토큰 기반 사이즈 타입
 * xs=12px, sm=16px, md=20px, lg=24px, xl=28px, xxl=32px, xxxl=36px, xxxxl=40px
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';

/**
 * 사용 가능한 아이콘 이름 (생성된 타입 그대로 사용)
 */
export type IconName = GeneratedIconName;

/**
 * 시스템별 색상 토큰 타입 (상태별 색상 제거, 기본 색상만)
 */
export type IconColor = 
  // Primary 색상 (시스템별)
  | 'primary-system01' | 'primary-system02' | 'primary-system03'
  // Secondary 색상 (시스템별 + 위계별)
  | 'secondary-system01-1' | 'secondary-system01-2' | 'secondary-system01-3'
  | 'secondary-system02-1' | 'secondary-system02-2' | 'secondary-system02-3'
  | 'secondary-system03-1' | 'secondary-system03-2' | 'secondary-system03-3'
  // CTA 색상 (시스템별)
  | 'cta-system01' | 'cta-system02' | 'cta-system03'
  // Status 색상들 (시스템 공통)
  | 'status-error' | 'status-warning' | 'status-success' | 'status-info' | 'status-focused'
  // 유틸리티 색상들
  | 'oncolor' | 'disabled' | 'transparent';

export interface IconProps {
  /**
   * 아이콘 이름 (생성된 컴포넌트 이름 그대로)
   */
  name: IconName;
  
  /**
   * 아이콘 크기 (토큰 기반)
   * xs=12px, sm=16px, md=20px, lg=24px, xl=28px, xxl=32px, xxxl=36px, xxxxl=40px
   * @default 'md'
   */
  size?: IconSize;
  
  /**
   * 아이콘 색상 (시스템별 토큰 기반)
   * @default 'secondary-system01-1'
   */
  color?: IconColor;
  
  /**
   * 추가 CSS 클래스
   */
  className?: string;
  
  /**
   * 인라인 스타일
   */
  style?: React.CSSProperties;
  
  /**
   * 접근성 라벨
   */
  'aria-label'?: string;
  
  /**
   * 아이콘이 장식용인지 여부
   * true인 경우 스크린 리더에서 무시됩니다
   * @default false
   */
  'aria-hidden'?: boolean;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
}

/**
 * Icon 컴포넌트
 * 
 * 생성된 아이콘들을 토큰 기반 사이즈와 시스템별 색상으로 렌더링합니다.
 * 
 * **특징:**
 * - **시스템별 색상 구분**: primary-system01, primary-system02 등으로 시스템별 색상 명시
 * - **위계별 색상 지원**: secondary 색상에서 1, 2, 3 위계별 색상 구분
 * - **단순한 색상 체계**: 상태별 색상 변화 없이 기본 색상만 제공
 * - **명확한 역할**: 아이콘 자체의 색상만 담당 (상태는 부모 컴포넌트에서 처리)
 * 
 * @example
 * ```tsx
 * // System-02 primary 색상 아이콘
 * <Icon name="heart" color="primary-system02" size="lg" />
 * 
 * // Secondary 위계별 색상
 * <Icon name="settings" color="secondary-system01-2" />
 * 
 * // Status 색상
 * <Icon name="alert" color="status-error" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'secondary-system01-1',
  className,
  style,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = false,
  onClick,
}) => {
  // 동적으로 아이콘 컴포넌트 가져오기
  const IconComponent = GeneratedIcons[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found. Available icons:`, Object.keys(GeneratedIcons));
    return null;
  }

  // CSS 클래스 생성
  const classes = [
    styles.icon,
    styles[`icon--size-${size}`],
    styles[`icon--color-${color}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <IconComponent
      // 생성된 아이콘의 기본 props 무시하고 CSS 클래스로만 제어
      size={undefined} // 기본 size prop 무시
      color="currentColor" // CSS 클래스의 color 속성이 적용되도록
      className={classes}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      onClick={onClick}
    />
  );
};

Icon.displayName = 'Icon'; 