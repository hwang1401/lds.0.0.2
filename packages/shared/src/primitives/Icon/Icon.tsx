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
 * 생성된 아이콘들을 토큰 기반 사이즈로 렌더링합니다.
 * 색상은 부모 컴포넌트의 Surface foreground 속성을 상속받습니다.
 * 
 * **특징:**
 * - **Surface 통합**: 독립적인 색상 시스템 제거, Surface foreground 상속
 * - **단순한 구조**: 사이즈만 제어, 색상은 부모에서 관리
 * - **일관된 색상**: 텍스트와 동일한 색상 시스템 사용
 * 
 * @example
 * ```tsx
 * // Surface의 foreground 색상 상속
 * <Surface foreground="primary-system01-1-rest">
 *   <Icon name="heart" size="lg" />
 *   <Text>같은 색상 적용</Text>
 * </Surface>
 * 
 * // 상태별 색상 변화도 자동 적용
 * <Surface foreground="primary-system01-1-hovered">
 *   <Icon name="settings" />
 * </Surface>
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
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

  // CSS 클래스 생성 (색상 클래스 제거)
  const classes = [
    styles.icon,
    styles[`icon--size-${size}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <IconComponent
      // 생성된 아이콘의 기본 props 무시하고 CSS 클래스로만 제어
      size={undefined} // 기본 size prop 무시
      color="currentColor" // 부모의 color 속성 상속
      className={classes}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      onClick={onClick}
    />
  );
};

Icon.displayName = 'Icon'; 