import React, { forwardRef } from 'react';
import styles from './Divider.module.css';
import { ResponsiveOrSingle, generateResponsiveClasses } from '../../types/responsive';

// Divider 방향 타입
type DividerOrientation = 'horizontal' | 'vertical';

// Divider 두께 타입
type DividerThickness = 'thin' | 'medium' | 'thick';

// Divider 색상 타입
type DividerColor = 
  | 'primary-stroke-1'
  | 'secondary-stroke-1' | 'secondary-stroke-2' | 'secondary-stroke-3' | 'secondary-stroke-inverse'
  | 'cta-stroke-1' | 'cta-stroke-2'
  | 'status-error' | 'status-warning' | 'status-success' | 'status-info' | 'status-focused';

// Divider 스타일 타입
type DividerVariant = 'solid' | 'dashed' | 'dotted';

// Spacing 타입
type SpacingValue = 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface DividerProps extends Omit<React.HTMLAttributes<HTMLHRElement>, 'color'> {
  /**
   * Divider의 방향을 지정합니다.
   */
  orientation?: DividerOrientation;
  
  /**
   * Divider의 두께를 지정합니다.
   * thin=1px, medium=2px, thick=3px
   */
  thickness?: DividerThickness;
  
  /**
   * Divider의 색상을 지정합니다.
   */
  color?: DividerColor;
  
  /**
   * Divider의 스타일을 지정합니다.
   */
  variant?: DividerVariant;
  
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

/**
 * Divider 컴포넌트는 콘텐츠를 구분하는 선을 그리는 순수한 프리미티브 요소입니다.
 * 수평/수직 방향, 다양한 스타일과 색상을 지원하며 시멘틱 토큰만을 사용합니다.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(({
  orientation = 'horizontal',
  thickness = 'thin',
  color = 'secondary-stroke-2',
  variant = 'solid',
  length,
  spacing,
  spacingY,
  spacingX,
  className,
  style,
  ...rest
}, ref) => {
  
  // 클래스 생성
  const lengthClasses = length ? generateResponsiveClasses(length, 'divider--length', styles) : [];
  const spacingClasses = spacing ? generateResponsiveClasses(spacing, 'divider--spacing', styles) : [];
  const spacingYClasses = spacingY ? generateResponsiveClasses(spacingY, 'divider--spacing-y', styles) : [];
  const spacingXClasses = spacingX ? generateResponsiveClasses(spacingX, 'divider--spacing-x', styles) : [];
  
  const classes = [
    styles.divider,
    styles[`divider--orientation-${orientation}`],
    styles[`divider--thickness-${thickness}`],
    styles[`divider--color-${color}`],
    styles[`divider--variant-${variant}`],
    ...lengthClasses,
    ...spacingClasses,
    ...spacingYClasses,
    ...spacingXClasses,
    className
  ].filter(Boolean).join(' ');
  
  // 길이 스타일 처리
  const lengthStyle = React.useMemo(() => {
    if (!length || typeof length === 'object') return {};
    
    const lengthValue = typeof length === 'string' ? length : `${length}px`;
    
    return orientation === 'horizontal' 
      ? { width: lengthValue }
      : { height: lengthValue };
  }, [length, orientation]);
  
  const dividerStyles: React.CSSProperties = {
    ...style,
    ...lengthStyle
  };
  
  return (
    <hr
      ref={ref}
      className={classes}
      style={dividerStyles}
      {...rest}
    />
  );
});

Divider.displayName = 'Divider'; 