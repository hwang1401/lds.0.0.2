import React, { forwardRef } from 'react';
import styles from './Surface.module.css';

// 시스템 + 위계 + 상태 기반 배경색 타입들
export type BackgroundToken = 
  // System-01 Primary background
  | 'primary-system01-1-rest' | 'primary-system01-1-hovered' | 'primary-system01-1-pressed' | 'primary-system01-1-selected' | 'primary-system01-1-disabled'
  | 'primary-system01-2-rest' | 'primary-system01-2-hovered' | 'primary-system01-2-pressed' | 'primary-system01-2-selected' | 'primary-system01-2-disabled'
  // System-02 Primary background
  | 'primary-system02-1-rest' | 'primary-system02-1-hovered' | 'primary-system02-1-pressed' | 'primary-system02-1-selected' | 'primary-system02-1-disabled'
  | 'primary-system02-2-rest' | 'primary-system02-2-hovered' | 'primary-system02-2-pressed' | 'primary-system02-2-selected' | 'primary-system02-2-disabled'
  // System-03 Primary background
  | 'primary-system03-1-rest' | 'primary-system03-1-hovered' | 'primary-system03-1-pressed' | 'primary-system03-1-selected' | 'primary-system03-1-disabled'
  | 'primary-system03-2-rest' | 'primary-system03-2-hovered' | 'primary-system03-2-pressed' | 'primary-system03-2-selected' | 'primary-system03-2-disabled'
  
  // System-01 Secondary background
  | 'secondary-system01-1-rest' | 'secondary-system01-1-hovered' | 'secondary-system01-1-pressed' | 'secondary-system01-1-selected' | 'secondary-system01-1-disabled'
  | 'secondary-system01-2-rest' | 'secondary-system01-2-hovered' | 'secondary-system01-2-pressed' | 'secondary-system01-2-selected' | 'secondary-system01-2-disabled'
  | 'secondary-system01-3-rest' | 'secondary-system01-3-hovered' | 'secondary-system01-3-pressed' | 'secondary-system01-3-selected' | 'secondary-system01-3-disabled'
  | 'secondary-system01-inverse-rest'
  // System-02 Secondary background
  | 'secondary-system02-1-rest' | 'secondary-system02-1-hovered' | 'secondary-system02-1-pressed' | 'secondary-system02-1-selected' | 'secondary-system02-1-disabled'
  | 'secondary-system02-2-rest' | 'secondary-system02-2-hovered' | 'secondary-system02-2-pressed' | 'secondary-system02-2-selected' | 'secondary-system02-2-disabled'
  | 'secondary-system02-3-rest' | 'secondary-system02-3-hovered' | 'secondary-system02-3-pressed' | 'secondary-system02-3-selected' | 'secondary-system02-3-disabled'
  | 'secondary-system02-inverse-rest'
  // System-03 Secondary background
  | 'secondary-system03-1-rest' | 'secondary-system03-1-hovered' | 'secondary-system03-1-pressed' | 'secondary-system03-1-selected' | 'secondary-system03-1-disabled'
  | 'secondary-system03-2-rest' | 'secondary-system03-2-hovered' | 'secondary-system03-2-pressed' | 'secondary-system03-2-selected' | 'secondary-system03-2-disabled'
  | 'secondary-system03-3-rest' | 'secondary-system03-3-hovered' | 'secondary-system03-3-pressed' | 'secondary-system03-3-selected' | 'secondary-system03-3-disabled'
  | 'secondary-system03-inverse-rest'
  
  // System-01 CTA background
  | 'cta-system01-1-rest' | 'cta-system01-1-hovered' | 'cta-system01-1-pressed' | 'cta-system01-1-disabled'
  | 'cta-system01-2-rest' | 'cta-system01-2-hovered' | 'cta-system01-2-pressed' | 'cta-system01-2-disabled'
  // System-02 CTA background
  | 'cta-system02-1-rest' | 'cta-system02-1-hovered' | 'cta-system02-1-pressed' | 'cta-system02-1-disabled'
  | 'cta-system02-2-rest' | 'cta-system02-2-hovered' | 'cta-system02-2-pressed' | 'cta-system02-2-disabled'
  // System-03 CTA background
  | 'cta-system03-1-rest' | 'cta-system03-1-hovered' | 'cta-system03-1-pressed' | 'cta-system03-1-disabled'
  | 'cta-system03-2-rest' | 'cta-system03-2-hovered' | 'cta-system03-2-pressed' | 'cta-system03-2-disabled'
  
  // Status background (시스템 공통) - 계층적 시스템
  | 'error-1-rest' | 'error-1-hovered' | 'error-1-pressed' | 'error-1-selected' | 'error-1-disabled'
  | 'error-2-rest' | 'error-2-hovered' | 'error-2-pressed' | 'error-2-selected' | 'error-2-disabled'
  | 'warning-1-rest' | 'warning-1-hovered' | 'warning-1-pressed' | 'warning-1-selected' | 'warning-1-disabled'
  | 'warning-2-rest' | 'warning-2-hovered' | 'warning-2-pressed' | 'warning-2-selected' | 'warning-2-disabled'
  // Status background (기존 호환성)
  | 'error' | 'warning' | 'success' | 'info' | 'focused';

// 시스템 + 위계 + 상태 기반 전경색 타입들  
export type ForegroundToken = 
  // System-01 Primary foreground
  | 'primary-system01-1-rest' | 'primary-system01-1-hovered' | 'primary-system01-1-pressed' | 'primary-system01-1-selected' | 'primary-system01-1-disabled'
  | 'primary-system01-oncolor'
  // System-02 Primary foreground
  | 'primary-system02-1-rest' | 'primary-system02-1-hovered' | 'primary-system02-1-pressed' | 'primary-system02-1-selected' | 'primary-system02-1-disabled'
  | 'primary-system02-oncolor'
  // System-03 Primary foreground
  | 'primary-system03-1-rest' | 'primary-system03-1-hovered' | 'primary-system03-1-pressed' | 'primary-system03-1-selected' | 'primary-system03-1-disabled'
  | 'primary-system03-oncolor'
  
  // System-01 Secondary foreground
  | 'secondary-system01-1-rest' | 'secondary-system01-1-hovered' | 'secondary-system01-1-pressed' | 'secondary-system01-1-selected' | 'secondary-system01-1-disabled'
  | 'secondary-system01-2-rest' | 'secondary-system01-2-hovered' | 'secondary-system01-2-pressed' | 'secondary-system01-2-selected' | 'secondary-system01-2-disabled'
  | 'secondary-system01-3-rest' | 'secondary-system01-3-hovered' | 'secondary-system01-3-pressed' | 'secondary-system01-3-selected' | 'secondary-system01-3-disabled'
  | 'secondary-system01-inverse-rest' | 'secondary-system01-oncolor'
  // System-02 Secondary foreground
  | 'secondary-system02-1-rest' | 'secondary-system02-1-hovered' | 'secondary-system02-1-pressed' | 'secondary-system02-1-selected' | 'secondary-system02-1-disabled'
  | 'secondary-system02-2-rest' | 'secondary-system02-2-hovered' | 'secondary-system02-2-pressed' | 'secondary-system02-2-selected' | 'secondary-system02-2-disabled'
  | 'secondary-system02-3-rest' | 'secondary-system02-3-hovered' | 'secondary-system02-3-pressed' | 'secondary-system02-3-selected' | 'secondary-system02-3-disabled'
  | 'secondary-system02-inverse-rest' | 'secondary-system02-oncolor'
  // System-03 Secondary foreground
  | 'secondary-system03-1-rest' | 'secondary-system03-1-hovered' | 'secondary-system03-1-pressed' | 'secondary-system03-1-selected' | 'secondary-system03-1-disabled'
  | 'secondary-system03-2-rest' | 'secondary-system03-2-hovered' | 'secondary-system03-2-pressed' | 'secondary-system03-2-selected' | 'secondary-system03-2-disabled'
  | 'secondary-system03-3-rest' | 'secondary-system03-3-hovered' | 'secondary-system03-3-pressed' | 'secondary-system03-3-selected' | 'secondary-system03-3-disabled'
  | 'secondary-system03-inverse-rest' | 'secondary-system03-oncolor'
  
  // System-01 CTA foreground
  | 'cta-system01-1-rest' | 'cta-system01-1-hovered' | 'cta-system01-1-pressed' | 'cta-system01-1-selected' | 'cta-system01-1-disabled'
  | 'cta-system01-2-rest' | 'cta-system01-2-hovered' | 'cta-system01-2-pressed' | 'cta-system01-2-selected' | 'cta-system01-2-disabled'
  | 'cta-system01-oncolor'
  // System-02 CTA foreground
  | 'cta-system02-1-rest' | 'cta-system02-1-hovered' | 'cta-system02-1-pressed' | 'cta-system02-1-selected' | 'cta-system02-1-disabled'
  | 'cta-system02-2-rest' | 'cta-system02-2-hovered' | 'cta-system02-2-pressed' | 'cta-system02-2-selected' | 'cta-system02-2-disabled'
  | 'cta-system02-oncolor'
  // System-03 CTA foreground
  | 'cta-system03-1-rest' | 'cta-system03-1-hovered' | 'cta-system03-1-pressed' | 'cta-system03-1-selected' | 'cta-system03-1-disabled'
  | 'cta-system03-2-rest' | 'cta-system03-2-hovered' | 'cta-system03-2-pressed' | 'cta-system03-2-selected' | 'cta-system03-2-disabled'
  | 'cta-system03-oncolor'
  
  // Status foreground (시스템 공통) - 계층적 시스템
  | 'error-1-rest' | 'error-1-hovered' | 'error-1-pressed' | 'error-1-selected' | 'error-1-disabled'
  | 'error-oncolor'
  | 'warning-1-rest' | 'warning-1-hovered' | 'warning-1-pressed' | 'warning-1-selected' | 'warning-1-disabled'
  | 'warning-oncolor'
  // Status foreground (기존 호환성)
  | 'error' | 'warning' | 'success' | 'info' | 'focused';

// 시스템 + 위계 + 상태 기반 테두리색 타입들
export type StrokeToken = 
  // System-01 Primary stroke
  | 'primary-system01-1-rest' | 'primary-system01-1-hovered' | 'primary-system01-1-pressed' | 'primary-system01-1-disabled'
  // System-02 Primary stroke
  | 'primary-system02-1-rest' | 'primary-system02-1-hovered' | 'primary-system02-1-pressed' | 'primary-system02-1-disabled'
  // System-03 Primary stroke
  | 'primary-system03-1-rest' | 'primary-system03-1-hovered' | 'primary-system03-1-pressed' | 'primary-system03-1-disabled'
  
  // System-01 Secondary stroke
  | 'secondary-system01-1-rest' | 'secondary-system01-1-hovered' | 'secondary-system01-1-pressed' | 'secondary-system01-1-disabled'
  | 'secondary-system01-2-rest' | 'secondary-system01-2-hovered' | 'secondary-system01-2-pressed' | 'secondary-system01-2-disabled'
  | 'secondary-system01-3-rest' | 'secondary-system01-3-hovered' | 'secondary-system01-3-pressed' | 'secondary-system01-3-disabled'
  | 'secondary-system01-inverse-rest'
  // System-02 Secondary stroke
  | 'secondary-system02-1-rest' | 'secondary-system02-1-hovered' | 'secondary-system02-1-pressed' | 'secondary-system02-1-disabled'
  | 'secondary-system02-2-rest' | 'secondary-system02-2-hovered' | 'secondary-system02-2-pressed' | 'secondary-system02-2-disabled'
  | 'secondary-system02-3-rest' | 'secondary-system02-3-hovered' | 'secondary-system02-3-pressed' | 'secondary-system02-3-disabled'
  | 'secondary-system02-inverse-rest'
  // System-03 Secondary stroke
  | 'secondary-system03-1-rest' | 'secondary-system03-1-hovered' | 'secondary-system03-1-pressed' | 'secondary-system03-1-disabled'
  | 'secondary-system03-2-rest' | 'secondary-system03-2-hovered' | 'secondary-system03-2-pressed' | 'secondary-system03-2-disabled'
  | 'secondary-system03-3-rest' | 'secondary-system03-3-hovered' | 'secondary-system03-3-pressed' | 'secondary-system03-3-disabled'
  | 'secondary-system03-inverse-rest'
  
  // System-01 CTA stroke
  | 'cta-system01-1-rest' | 'cta-system01-1-hovered' | 'cta-system01-1-pressed' | 'cta-system01-1-disabled'
  | 'cta-system01-2-rest' | 'cta-system01-2-hovered' | 'cta-system01-2-pressed' | 'cta-system01-2-disabled'
  // System-02 CTA stroke
  | 'cta-system02-1-rest' | 'cta-system02-1-hovered' | 'cta-system02-1-pressed' | 'cta-system02-1-disabled'
  | 'cta-system02-2-rest' | 'cta-system02-2-hovered' | 'cta-system02-2-pressed' | 'cta-system02-2-disabled'
  // System-03 CTA stroke
  | 'cta-system03-1-rest' | 'cta-system03-1-hovered' | 'cta-system03-1-pressed' | 'cta-system03-1-disabled'
  | 'cta-system03-2-rest' | 'cta-system03-2-hovered' | 'cta-system03-2-pressed' | 'cta-system03-2-disabled'
  
  // Status stroke (시스템 공통) - 계층적 시스템
  | 'error-1-rest' | 'error-1-hovered' | 'error-1-pressed' | 'error-1-disabled'
  | 'warning-1-rest' | 'warning-1-hovered' | 'warning-1-pressed' | 'warning-1-disabled'
  // Status stroke (기존 호환성)
  | 'error' | 'warning' | 'success' | 'info' | 'focused';

// 시멘틱 토큰 기반 반지름 타입들
export type RadiusToken = 
  // Global radius
  | 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'circular' | 'pill'
  // Shape radius  
  | 'button-sm' | 'button-md' | 'button-lg' | 'card' | 'input' 
  | 'badge-default' | 'badge-pill' | 'avatar' | 'popover' | 'modal';

// 시멘틱 토큰 기반 테두리 두께 타입들
export type BorderWidthToken = 
  | 'thin' | 'medium' | 'thick' | 'thicker' 
  | 'button' | 'card' | 'input-default' | 'input-focused' | 'divider';

// 그림자 타입들 (Foundation 토큰 기반)
export type ShadowToken = 
  // Foundation shadow levels
  | '0' | '10' | '20' | '30' | '40' | '50';

// 오버레이 타입들
export type OverlayToken = 'light' | 'medium' | 'heavy';

export interface SurfaceProps extends React.HTMLAttributes<HTMLElement> {
  // HTML 요소 타입
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 배경색 (시스템 + 위계 + 상태 체계)
  background?: BackgroundToken;
  
  // 전경색 (시스템 + 위계 + 상태 체계)
  foreground?: ForegroundToken;
  
  // 테두리 관련 (시스템 + 위계 + 상태 체계, 옵셔널)
  borderColor?: StrokeToken;
  borderWidth?: BorderWidthToken;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  
  // 반지름 (기존 유지)
  borderRadius?: RadiusToken;
  
  // 그림자 (기존 유지)
  boxShadow?: ShadowToken | 'none';
  
  // 오버레이 (기존 유지)
  overlay?: OverlayToken;
  
  // 부모 컨테이너 완전 채움 (width: 100%, height: 100%)
  fill?: boolean;
  
  // 자식 요소
  children?: React.ReactNode;
}

/**
 * Surface 프리미티브 컴포넌트
 * 
 * 색상, 그림자, 반지름, 테두리 등 시각적 표면 속성만을 담당하는 순수한 프리미티브입니다.
 * 시스템 + 위계 + 상태 체계를 사용하여 명확한 시스템별 색상 구분과 상태별 색상을 모두 보장합니다.
 * 
 * **특징:**
 * - **시스템별 명확한 구분**: primary-system01-1-rest, primary-system02-1-rest 등으로 시스템별 색상 명시
 * - **색상 위계 지원**: 각 시스템 내에서 1, 2, 3... 위계별 색상 구분
 * - **상태별 색상 지원**: rest, hovered, pressed, disabled 상태별 색상 변화
 * - **명확한 역할 분리**: 시각적 표면만 담당 (레이아웃은 Frame 사용)
 * 
 * @example
 * ```tsx
 * // System-01 기본 카드
 * <Surface background="secondary-system01-1-rest" borderRadius="card">
 *   Content
 * </Surface>
 * 
 * // System-02 Primary 버튼 (hover 상태)
 * <Surface background="primary-system02-1-hovered" foreground="primary-system02-oncolor" borderRadius="button-md">
 *   Button
 * </Surface>
 * 
 * // System-01 테두리가 있는 입력 필드
 * <Surface 
 *   background="secondary-system01-1-rest"
 *   borderColor="secondary-system01-1-rest" 
 *   borderWidth="input-default" 
 *   borderStyle="solid"
 *   borderRadius="input"
 * >
 *   Input
 * </Surface>
 * ```
 */
export const Surface = forwardRef<HTMLElement, SurfaceProps>(({
  as: Component = 'div',
  background,
  foreground,
  borderColor,
  borderWidth,
  borderStyle = 'none',
  borderRadius,
  boxShadow,
  overlay,
  fill,
  children,
  className,
  style,
  ...restProps
}, ref) => {
  // CSS 클래스 생성
  const getClassNames = () => {
    const classes = [styles.surface];
    
    // 배경색
    if (background) {
      classes.push(styles[`surface--background-${background}`] || '');
    }
    
    // 전경색
    if (foreground) {
      classes.push(styles[`surface--foreground-${foreground}`] || '');
    }
    
    // 테두리 색상
    if (borderColor) {
      classes.push(styles[`surface--border-color-${borderColor}`] || '');
    }
    
    // 테두리 굵기
    if (borderWidth) {
      classes.push(styles[`surface--border-width-${borderWidth}`] || '');
    }
    
    // 테두리 스타일
    if (borderStyle) {
      classes.push(styles[`surface--border-style-${borderStyle}`] || '');
    }
    
    // 반지름
    if (borderRadius) {
      classes.push(styles[`surface--border-radius-${borderRadius}`] || '');
    }
    
    // 그림자
    if (boxShadow && boxShadow !== 'none') {
      const shadowClass = styles[`surface--shadow-${boxShadow}`];
      classes.push(shadowClass || '');
      
      // 🚨 디버깅: 그림자 클래스 확인
      console.log('🚨 Surface Shadow Debug:', {
        boxShadow,
        shadowClass,
        shadowClassExists: !!shadowClass,
        allShadowClasses: Object.keys(styles).filter(key => key.includes('shadow'))
      });
    }
    
    // 오버레이
    if (overlay) {
      classes.push(styles[`surface--overlay-${overlay}`] || '');
    }
    
    if (fill) {
      classes.push(styles.surface__fill || '');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.filter(Boolean).join(' ');
  };

  return (
    <Component
      ref={ref as any}
      className={getClassNames()}
      style={style}
      {...restProps}
    >
      {children}
    </Component>
  );
});

Surface.displayName = 'Surface'; 