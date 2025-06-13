import React, { forwardRef } from 'react';
import { ResponsiveOrSingle } from '../../types/responsive';
import styles from './Sizing.module.css';

// 시멘틱 토큰 기반 높이 타입들
export type HeightValue = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

// 시멘틱 토큰 기반 너비 타입들
export type WidthValue = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

// 시멘틱 토큰 기반 ObjectFit 타입들
export type ObjectFitValue = 
  // 기본 CSS 값들
  | 'fill' | 'contain' | 'cover' | 'none' | 'scaleDown'
  // 직관적인 별칭들
  | 'stretch'      // 🔸 늘려서 채움 (fill과 동일)
  | 'fitInside'    // 📦 안쪽에 맞춤 (contain과 동일)
  | 'fillArea'     // 🎯 영역 채움 (cover와 동일)
  | 'crop';        // ✂️ 자르기 (cover와 동일)

// 시멘틱 토큰 기반 ObjectPosition 타입들
export type ObjectPositionValue = 
  // 기본 위치들
  | 'center' | 'top' | 'bottom' | 'left' | 'right'
  | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  // crop 맥락의 별칭들
  | 'cropCenter' | 'cropTop' | 'cropBottom' | 'cropLeft' | 'cropRight'
  | 'cropTopLeft' | 'cropTopRight' | 'cropBottomLeft' | 'cropBottomRight';

// 시멘틱 토큰 기반 BoxSizing 타입들
export type BoxSizingValue = 'contentBox' | 'borderBox';

// 시멘틱 토큰 기반 AspectRatio 타입들
export type AspectRatioValue = 'square' | 
  'landscape.classic' | 'landscape.wide' | 'landscape.ultraWide' | 'landscape.film' |
  'portrait.classic' | 'portrait.tall' | 'portrait.book';

export interface SizingProps extends React.HTMLAttributes<HTMLElement> {
  // HTML 요소 타입
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 기본 크기 속성들
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
  
  // 자식 요소
  children?: React.ReactNode;
}

/**
 * Sizing 프리미티브 컴포넌트
 * 
 * CSS 크기 속성만을 담당하는 순수한 프리미티브입니다.
 * width, height, min/max 크기, aspect ratio 등의 크기 관련 속성을 제공합니다.
 * 
 * @example
 * ```tsx
 * // 기본 크기 설정
 * <Sizing width="100%" height="sm">
 *   Content
 * </Sizing>
 * 
 * // 최소/최대 크기 제한
 * <Sizing minWidth="200px" maxWidth="400px" height="auto">
 *   Responsive content
 * </Sizing>
 * 
 * // 가로세로 비율 고정
 * <Sizing width="100%" aspectRatio="16/9">
 *   Video container
 * </Sizing>
 * 
 * // 이미지 제어
 * <Sizing width="100%" height="200px" objectFit="cover">
 *   <img src="image.jpg" alt="Cover image" />
 * </Sizing>
 * ```
 */
export const Sizing = forwardRef<HTMLElement, SizingProps>(({
  as: Component = 'div',
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  aspectRatio,
  objectFit,
  objectPosition,
  boxSizing,
  children,
  className,
  style,
  ...restProps
}, ref) => {
  // CSS 클래스 생성 함수
  const getClassNames = () => {
    const classes = [styles.sizing];
    
    // 너비 토큰 클래스 (시멘틱 토큰만)
    if (width && typeof width === 'string' && ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(width)) {
      classes.push(styles[`sizing--width-${width}`] || '');
    }
    
    // 높이 토큰 클래스 (시멘틱 토큰만)
    if (height && typeof height === 'string' && ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(height)) {
      classes.push(styles[`sizing--height-${height}`] || '');
    }
    
    // 박스 사이징 토큰 클래스
    if (boxSizing && typeof boxSizing === 'string' && ['contentBox', 'borderBox'].includes(boxSizing)) {
      classes.push(styles[`sizing--box-sizing-${boxSizing === 'contentBox' ? 'content-box' : 'border-box'}`] || '');
    }
    
    // 오브젝트 핏 토큰 클래스
    if (objectFit && typeof objectFit === 'string' && 
        ['fill', 'contain', 'cover', 'none', 'scaleDown', 'stretch', 'fitInside', 'fillArea', 'crop'].includes(objectFit)) {
      const cssClass = objectFit === 'scaleDown' ? 'scale-down' :
                      objectFit === 'fitInside' ? 'fit-inside' :
                      objectFit === 'fillArea' ? 'fill-area' :
                      objectFit;
      classes.push(styles[`sizing--object-fit-${cssClass}`] || '');
    }
    
    // 오브젝트 포지션 토큰 클래스
    if (objectPosition && typeof objectPosition === 'string' && 
        ['center', 'top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
         'cropCenter', 'cropTop', 'cropBottom', 'cropLeft', 'cropRight', 'cropTopLeft', 'cropTopRight', 'cropBottomLeft', 'cropBottomRight'].includes(objectPosition)) {
      const cssClass = objectPosition === 'topLeft' ? 'top-left' :
                      objectPosition === 'topRight' ? 'top-right' :
                      objectPosition === 'bottomLeft' ? 'bottom-left' :
                      objectPosition === 'bottomRight' ? 'bottom-right' :
                      objectPosition === 'cropCenter' ? 'crop-center' :
                      objectPosition === 'cropTop' ? 'crop-top' :
                      objectPosition === 'cropBottom' ? 'crop-bottom' :
                      objectPosition === 'cropLeft' ? 'crop-left' :
                      objectPosition === 'cropRight' ? 'crop-right' :
                      objectPosition === 'cropTopLeft' ? 'crop-top-left' :
                      objectPosition === 'cropTopRight' ? 'crop-top-right' :
                      objectPosition === 'cropBottomLeft' ? 'crop-bottom-left' :
                      objectPosition === 'cropBottomRight' ? 'crop-bottom-right' : objectPosition;
      classes.push(styles[`sizing--object-position-${cssClass}`] || '');
    }
    
    // 애스펙트 레이시오 토큰 클래스
    if (aspectRatio && typeof aspectRatio === 'string') {
      const aspectTokens = [
        'square', 
        'landscape.classic', 'landscape.wide', 'landscape.ultraWide', 'landscape.film',
        'portrait.classic', 'portrait.tall', 'portrait.book'
      ];
      
      if (aspectTokens.includes(aspectRatio)) {
        const cssClass = aspectRatio.replace('.', '-');
        classes.push(styles[`sizing--aspect-ratio-${cssClass}`] || '');
      }
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.filter(Boolean).join(' ');
  };

  // 인라인 스타일 생성
  const inlineStyles: React.CSSProperties = {
    ...style,
  };

  // 반응형 및 커스텀 값 처리
  const applyResponsiveStyle = (value: any, property: string) => {
    if (typeof value === 'object' && value !== null) {
      // 반응형 처리
      Object.entries(value).forEach(([breakpoint, val]) => {
        const cssVar = breakpoint === 'mobile' 
          ? `--${property}-mobile` 
          : `--${property}-${breakpoint}`;
        (inlineStyles as any)[cssVar] = typeof val === 'number' ? `${val}px` : val;
      });
    } else if (typeof value === 'number') {
      (inlineStyles as any)[property] = `${value}px`;
    } else if (typeof value === 'string') {
      // 너비/높이 토큰이 아닌 경우만 인라인으로
      if ((property === 'width' || property === 'height') && ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(value)) {
        // 토큰은 CSS 클래스로 처리됨
        return;
      }
      (inlineStyles as any)[property] = value;
    }
  };

  // 각 속성에 대해 반응형/커스텀 값 처리
  if (width) {
    applyResponsiveStyle(width, 'width');
  }
  if (height) {
    applyResponsiveStyle(height, 'height');
  }
  if (minWidth) {
    applyResponsiveStyle(minWidth, 'min-width');
  }
  if (minHeight) {
    applyResponsiveStyle(minHeight, 'min-height');
  }
  if (maxWidth) {
    applyResponsiveStyle(maxWidth, 'max-width');
  }
  if (maxHeight) {
    applyResponsiveStyle(maxHeight, 'max-height');
  }
  if (aspectRatio) {
    applyResponsiveStyle(aspectRatio, 'aspect-ratio');
  }
  if (objectPosition && typeof objectPosition !== 'string') {
    applyResponsiveStyle(objectPosition, 'object-position');
  } else if (objectPosition && typeof objectPosition === 'string') {
    // 토큰 값인지 확인
    const positionTokens = ['center', 'top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
                           'cropCenter', 'cropTop', 'cropBottom', 'cropLeft', 'cropRight', 'cropTopLeft', 'cropTopRight', 'cropBottomLeft', 'cropBottomRight'];
    if (!positionTokens.includes(objectPosition)) {
      // 커스텀 값만 인라인 스타일로
      (inlineStyles as any)['object-position'] = objectPosition;
    }
  }
  if (boxSizing && typeof boxSizing !== 'string') {
    applyResponsiveStyle(boxSizing, 'box-sizing');
  } else if (boxSizing && typeof boxSizing === 'string') {
    // 토큰 값인지 확인
    const boxSizingTokens = ['contentBox', 'borderBox'];
    if (!boxSizingTokens.includes(boxSizing)) {
      // 커스텀 값만 인라인 스타일로
      (inlineStyles as any)['box-sizing'] = boxSizing;
    }
  }
  if (objectFit && typeof objectFit !== 'string') {
    applyResponsiveStyle(objectFit, 'object-fit');
  } else if (objectFit && typeof objectFit === 'string') {
    // 토큰 값인지 확인
    const objectFitTokens = ['fill', 'contain', 'cover', 'none', 'scaleDown', 'stretch', 'fitInside', 'fillArea', 'crop'];
    if (!objectFitTokens.includes(objectFit)) {
      // 커스텀 값만 인라인 스타일로
      (inlineStyles as any)['object-fit'] = objectFit;
    }
  }

  return (
    <Component
      ref={ref as any}
      className={getClassNames()}
      style={inlineStyles}
      {...restProps}
    >
      {children}
    </Component>
  );
});

Sizing.displayName = 'Sizing'; 