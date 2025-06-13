import React, { forwardRef } from 'react';
import { ResponsiveOrSingle } from '../../types/responsive';
import styles from './Interactive.module.css';

// z-index 레벨 타입들
export type ZIndexLevel = 
  | 'base' | 'raised' | 'navigation' | 'header' | 'dropdown' 
  | 'sticky' | 'overlay' | 'modal' | 'toast' | 'popover' | 'tooltip';

// 커서 타입들
export type CursorType = 
  | 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' 
  | 'help' | 'not-allowed' | 'grab' | 'grabbing' | 'zoom-in' | 'zoom-out'
  | 'crosshair' | 'cell' | 'context-menu' | 'copy' | 'alias';

// 포커스 스타일 타입들
export type FocusStyle = 'outline' | 'ring' | 'none';

// 포인터 이벤트 타입들
export type PointerEvents = 'auto' | 'none';

// 사용자 선택 타입들
export type UserSelect = 'auto' | 'none' | 'text' | 'all';

// 투명도 타입들
export type OpacityLevel = 'hover' | 'disabled' | 'overlay-light' | 'overlay-medium' | 'overlay-heavy' | number;

export interface InteractiveProps extends React.HTMLAttributes<HTMLElement> {
  // HTML 요소 타입
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span' | 'button';
  
  // z-index 관련
  zIndex?: ResponsiveOrSingle<ZIndexLevel | number>;
  
  // 커서 관련
  cursor?: ResponsiveOrSingle<CursorType>;
  
  // 포커스 관련
  focusStyle?: FocusStyle;
  focusWithin?: boolean; // focus-within 스타일 적용
  
  // 포인터 이벤트
  pointerEvents?: ResponsiveOrSingle<PointerEvents>;
  
  // 사용자 선택
  userSelect?: ResponsiveOrSingle<UserSelect>;
  
  // 투명도
  opacity?: ResponsiveOrSingle<OpacityLevel>;
  
  // 호버 효과
  hoverOpacity?: OpacityLevel;
  hoverScale?: number; // 호버 시 스케일 (1.0 = 100%)
  hoverElevation?: boolean; // 호버 시 그림자 증가
  
  // 활성 상태
  pressed?: boolean; // 눌린 상태
  disabled?: boolean; // 비활성 상태
  
  // 터치 관련
  touchAction?: 'auto' | 'none' | 'pan-x' | 'pan-y' | 'manipulation';
  
  // 자식 요소
  children?: React.ReactNode;
}

/**
 * Interactive 프리미티브 컴포넌트
 * 
 * 인터랙션 관련 속성(포커스, z-index, 커서, 호버 등)을 담당하는 순수한 프리미티브입니다.
 * 시멘틱 토큰을 활용하여 일관된 인터랙션 경험을 제공합니다.
 * 
 * 참고: 애니메이션은 기존 AnimationUtils를 사용하므로 이 컴포넌트에서는 제외됩니다.
 * 
 * @example
 * ```tsx
 * // 기본 포커스와 호버 효과
 * <Interactive focusStyle="ring" hoverOpacity="hover" cursor="pointer">
 *   <button>Clickable button</button>
 * </Interactive>
 * 
 * // 높은 z-index와 특별한 커서
 * <Interactive zIndex="modal" cursor="grab">
 *   <div>Draggable modal</div>
 * </Interactive>
 * 
 * // 비활성 상태 처리
 * <Interactive disabled opacity="disabled" cursor="not-allowed">
 *   <button>Disabled button</button>
 * </Interactive>
 * 
 * // 복잡한 호버 효과
 * <Interactive 
 *   hoverOpacity="hover" 
 *   hoverScale={1.05} 
 *   hoverElevation 
 *   focusStyle="outline"
 * >
 *   <div>Interactive card</div>
 * </Interactive>
 * ```
 */
export const Interactive = forwardRef<HTMLElement, InteractiveProps>(({
  as: Component = 'div',
  zIndex,
  cursor,
  focusStyle = 'outline',
  focusWithin,
  pointerEvents,
  userSelect,
  opacity,
  hoverOpacity,
  hoverScale,
  hoverElevation,
  pressed,
  disabled,
  touchAction,
  children,
  className,
  style,
  ...restProps
}, ref) => {
  // CSS 클래스 생성 함수
  const getClassNames = () => {
    const classes = [styles.interactive];
    
    // z-index 클래스
    if (zIndex && typeof zIndex === 'string') {
      classes.push(styles[`interactive--z-index-${zIndex}`] || '');
    }
    
    // 커서 클래스
    if (cursor && typeof cursor === 'string') {
      classes.push(styles[`interactive--cursor-${cursor}`] || '');
    }
    
    // 포커스 스타일 클래스
    if (focusStyle && focusStyle !== 'none') {
      classes.push(styles[`interactive--focus-${focusStyle}`] || '');
    }
    
    // focus-within 클래스
    if (focusWithin) {
      classes.push(styles['interactive--focus-within'] || '');
    }
    
    // 포인터 이벤트 클래스
    if (pointerEvents && typeof pointerEvents === 'string') {
      classes.push(styles[`interactive--pointer-events-${pointerEvents}`] || '');
    }
    
    // 사용자 선택 클래스
    if (userSelect && typeof userSelect === 'string') {
      classes.push(styles[`interactive--user-select-${userSelect}`] || '');
    }
    
    // 투명도 클래스
    if (opacity && typeof opacity === 'string') {
      classes.push(styles[`interactive--opacity-${opacity}`] || '');
    }
    
    // 호버 효과 클래스들
    if (hoverOpacity) {
      classes.push(styles[`interactive--hover-opacity-${hoverOpacity}`] || '');
    }
    if (hoverScale) {
      classes.push(styles['interactive--hover-scale'] || '');
    }
    if (hoverElevation) {
      classes.push(styles['interactive--hover-elevation'] || '');
    }
    
    // 상태 클래스들
    if (pressed) {
      classes.push(styles['interactive--pressed'] || '');
    }
    if (disabled) {
      classes.push(styles['interactive--disabled'] || '');
    }
    
    // 터치 액션 클래스
    if (touchAction) {
      classes.push(styles[`interactive--touch-action-${touchAction}`] || '');
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
        (inlineStyles as any)[cssVar] = val;
      });
    } else if (typeof value === 'number') {
      (inlineStyles as any)[property] = value;
    } else if (typeof value === 'string' && !styles[`interactive--${property}-${value}`]) {
      // 커스텀 값은 인라인으로
      (inlineStyles as any)[property] = value;
    }
  };

  // 각 속성에 대해 반응형/커스텀 값 처리
  if (zIndex && typeof zIndex !== 'string') {
    applyResponsiveStyle(zIndex, 'z-index');
  }
  if (cursor && typeof cursor !== 'string') {
    applyResponsiveStyle(cursor, 'cursor');
  }
  if (pointerEvents && typeof pointerEvents !== 'string') {
    applyResponsiveStyle(pointerEvents, 'pointer-events');
  }
  if (userSelect && typeof userSelect !== 'string') {
    applyResponsiveStyle(userSelect, 'user-select');
  }
  if (opacity && typeof opacity === 'number') {
    (inlineStyles as any)['opacity'] = opacity;
  }

  // 호버 스케일 처리
  if (hoverScale && hoverScale !== 1) {
    (inlineStyles as any)['--hover-scale'] = hoverScale;
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

Interactive.displayName = 'Interactive'; 