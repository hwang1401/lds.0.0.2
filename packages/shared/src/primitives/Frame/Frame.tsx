import React, { forwardRef } from 'react';
import { ResponsiveOrSingle } from '../../types/responsive';
import styles from './Frame.module.css';

// 레이아웃 관련 타입들
export type DisplayValue = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none' | 'contents';
export type PositionValue = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type OverflowValue = 'visible' | 'hidden' | 'scroll' | 'auto';

// Flexbox 관련 타입들
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type AlignContent = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

// Spacing 관련 타입들 (시멘틱 토큰)
export type SpacingValue = 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface FrameProps extends React.HTMLAttributes<HTMLElement> {
  // HTML 요소 타입
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer' | 'main' | 'span';
  
  // 기본 레이아웃 속성들
  display?: ResponsiveOrSingle<DisplayValue>;
  position?: ResponsiveOrSingle<PositionValue>;
  top?: ResponsiveOrSingle<string | number>;
  right?: ResponsiveOrSingle<string | number>;
  bottom?: ResponsiveOrSingle<string | number>;
  left?: ResponsiveOrSingle<string | number>;
  zIndex?: ResponsiveOrSingle<number>;
  
  // 오버플로우 관련
  overflow?: ResponsiveOrSingle<OverflowValue>;
  overflowX?: ResponsiveOrSingle<OverflowValue>;
  overflowY?: ResponsiveOrSingle<OverflowValue>;
  
  // Flexbox 관련
  direction?: ResponsiveOrSingle<FlexDirection>;
  wrap?: ResponsiveOrSingle<FlexWrap>;
  justify?: ResponsiveOrSingle<JustifyContent>;
  align?: ResponsiveOrSingle<AlignItems>;
  alignContent?: ResponsiveOrSingle<AlignContent>;
  flex?: ResponsiveOrSingle<string | number>;
  flexGrow?: ResponsiveOrSingle<number>;
  flexShrink?: ResponsiveOrSingle<number>;
  flexBasis?: ResponsiveOrSingle<string | number>;
  alignSelf?: ResponsiveOrSingle<AlignItems>;
  order?: ResponsiveOrSingle<number>;
  
  // Gap (Flexbox, Grid 공통)
  gap?: ResponsiveOrSingle<SpacingValue | string | number>;
  rowGap?: ResponsiveOrSingle<SpacingValue | string | number>;
  columnGap?: ResponsiveOrSingle<SpacingValue | string | number>;
  
  // Grid 관련
  gridTemplateColumns?: ResponsiveOrSingle<string>;
  gridTemplateRows?: ResponsiveOrSingle<string>;
  gridColumn?: ResponsiveOrSingle<string>;
  gridRow?: ResponsiveOrSingle<string>;
  
  // Spacing 관련
  padding?: ResponsiveOrSingle<SpacingValue>;
  margin?: ResponsiveOrSingle<SpacingValue>;
  paddingX?: ResponsiveOrSingle<SpacingValue>;
  paddingY?: ResponsiveOrSingle<SpacingValue>;
  marginX?: ResponsiveOrSingle<SpacingValue>;
  marginY?: ResponsiveOrSingle<SpacingValue>;
  paddingTop?: ResponsiveOrSingle<SpacingValue>;
  paddingRight?: ResponsiveOrSingle<SpacingValue>;
  paddingBottom?: ResponsiveOrSingle<SpacingValue>;
  paddingLeft?: ResponsiveOrSingle<SpacingValue>;
  marginTop?: ResponsiveOrSingle<SpacingValue>;
  marginRight?: ResponsiveOrSingle<SpacingValue>;
  marginBottom?: ResponsiveOrSingle<SpacingValue>;
  marginLeft?: ResponsiveOrSingle<SpacingValue>;
  
  // Size 관련
  width?: ResponsiveOrSingle<string | number>;
  height?: ResponsiveOrSingle<string | number>;
  minWidth?: ResponsiveOrSingle<string | number>;
  minHeight?: ResponsiveOrSingle<string | number>;
  maxWidth?: ResponsiveOrSingle<string | number>;
  maxHeight?: ResponsiveOrSingle<string | number>;
  
  // 부모 컨테이너 완전 채움 (width: 100%, height: 100%)
  fill?: boolean;
  
  // 자식 요소
  children?: React.ReactNode;
}

/**
 * Frame 프리미티브 컴포넌트
 * 
 * 틀, 구조, 레이아웃, 배치, 간격을 담당하는 구조적 프리미티브입니다.
 * 모든 레이아웃과 spacing 관련 기능을 제공합니다.
 * 
 * **역할:**
 * - Display, Position, Overflow 제어
 * - Flexbox, Grid 레이아웃
 * - Gap, Padding, Margin 간격 관리
 * - Width, Height 크기 제어
 * 
 * **Surface와의 차이점:**
 * - Frame: 구조적 속성 (레이아웃, 간격, 크기)
 * - Surface: 시각적 속성 (색상, 테두리, 그림자)
 * 
 * @example
 * ```tsx
 * // 기본 Flexbox 레이아웃
 * <Frame display="flex" justify="center" align="center" gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Frame>
 * 
 * // Grid 레이아웃
 * <Frame display="grid" gridTemplateColumns="1fr 1fr" gap="lg">
 *   <div>Left</div>
 *   <div>Right</div>
 * </Frame>
 * 
 * // Surface와 조합
 * <Surface backgroundColor="primary" borderRadius="md">
 *   <Frame padding="xl" display="flex" direction="column" gap="sm">
 *     <Text>Title</Text>
 *     <Text>Content</Text>
 *   </Frame>
 * </Surface>
 * ```
 */
export const Frame = forwardRef<HTMLElement, FrameProps>(({
  as: Component = 'div',
  display,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  overflow,
  overflowX,
  overflowY,
  direction,
  wrap,
  justify,
  align,
  alignContent,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  order,
  gap,
  rowGap,
  columnGap,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumn,
  gridRow,
  padding,
  margin,
  paddingX,
  paddingY,
  marginX,
  marginY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  fill,
  children,
  className,
  style,
  ...restProps
}, ref) => {
  // CSS 클래스 생성 함수
  const getClassNames = () => {
    const classes = [styles.frame];
    
    // Display 클래스
    if (display && typeof display === 'string') {
      classes.push(styles[`frame--display-${display}`] || '');
    }
    
    // Position 클래스
    if (position && typeof position === 'string') {
      classes.push(styles[`frame--position-${position}`] || '');
    }
    
    // Overflow 클래스들
    if (overflow && typeof overflow === 'string') {
      classes.push(styles[`frame--overflow-${overflow}`] || '');
    }
    if (overflowX && typeof overflowX === 'string') {
      classes.push(styles[`frame--overflow-x-${overflowX}`] || '');
    }
    if (overflowY && typeof overflowY === 'string') {
      classes.push(styles[`frame--overflow-y-${overflowY}`] || '');
    }
    
    // Flexbox 클래스들
    if (direction && typeof direction === 'string') {
      classes.push(styles[`frame--direction-${direction}`] || '');
    }
    if (wrap && typeof wrap === 'string') {
      classes.push(styles[`frame--wrap-${wrap}`] || '');
    }
    if (justify && typeof justify === 'string') {
      classes.push(styles[`frame--justify-${justify}`] || '');
    }
    if (align && typeof align === 'string') {
      classes.push(styles[`frame--align-${align}`] || '');
    }
    if (alignContent && typeof alignContent === 'string') {
      classes.push(styles[`frame--align-content-${alignContent}`] || '');
    }
    if (alignSelf && typeof alignSelf === 'string') {
      classes.push(styles[`frame--align-self-${alignSelf}`] || '');
    }
    
    // Gap 클래스들
    if (gap && typeof gap === 'string' && ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(gap)) {
      classes.push(styles[`frame--gap-${gap}`] || '');
    }
    if (rowGap && typeof rowGap === 'string' && ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(rowGap)) {
      classes.push(styles[`frame--row-gap-${rowGap}`] || '');
    }
    if (columnGap && typeof columnGap === 'string' && ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(columnGap)) {
      classes.push(styles[`frame--column-gap-${columnGap}`] || '');
    }
    
    // Spacing 클래스들
    if (padding && typeof padding === 'string') {
      classes.push(styles[`frame--padding-${padding}`] || '');
    }
    if (margin && typeof margin === 'string') {
      classes.push(styles[`frame--margin-${margin}`] || '');
    }
    if (paddingX && typeof paddingX === 'string') {
      classes.push(styles[`frame--padding-x-${paddingX}`] || '');
    }
    if (paddingY && typeof paddingY === 'string') {
      classes.push(styles[`frame--padding-y-${paddingY}`] || '');
    }
    if (marginX && typeof marginX === 'string') {
      classes.push(styles[`frame--margin-x-${marginX}`] || '');
    }
    if (marginY && typeof marginY === 'string') {
      classes.push(styles[`frame--margin-y-${marginY}`] || '');
    }
    
    // 개별 방향 간격 클래스들
    if (paddingTop && typeof paddingTop === 'string') {
      classes.push(styles[`frame--padding-top-${paddingTop}`] || '');
    }
    if (paddingRight && typeof paddingRight === 'string') {
      classes.push(styles[`frame--padding-right-${paddingRight}`] || '');
    }
    if (paddingBottom && typeof paddingBottom === 'string') {
      classes.push(styles[`frame--padding-bottom-${paddingBottom}`] || '');
    }
    if (paddingLeft && typeof paddingLeft === 'string') {
      classes.push(styles[`frame--padding-left-${paddingLeft}`] || '');
    }
    if (marginTop && typeof marginTop === 'string') {
      classes.push(styles[`frame--margin-top-${marginTop}`] || '');
    }
    if (marginRight && typeof marginRight === 'string') {
      classes.push(styles[`frame--margin-right-${marginRight}`] || '');
    }
    if (marginBottom && typeof marginBottom === 'string') {
      classes.push(styles[`frame--margin-bottom-${marginBottom}`] || '');
    }
    if (marginLeft && typeof marginLeft === 'string') {
      classes.push(styles[`frame--margin-left-${marginLeft}`] || '');
    }
    
    if (fill) {
      classes.push(styles.frame__fill || '');
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
        (inlineStyles as any)[cssVar] = typeof val === 'number' ? 
          (property.includes('z-index') || property.includes('order') || property.includes('flex-') ? val : `${val}px`) : val;
      });
    } else if (typeof value === 'number') {
      if (property === 'z-index' || property === 'order' || property.startsWith('flex-')) {
        (inlineStyles as any)[property] = value;
      } else {
        (inlineStyles as any)[property] = `${value}px`;
      }
    } else if (typeof value === 'string' && !['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(value)) {
      // 시멘틱 토큰이 아닌 커스텀 값은 인라인으로
      (inlineStyles as any)[property] = value;
    }
  };

  // 각 속성에 대해 반응형/커스텀 값 처리
  if (display && typeof display !== 'string') {
    applyResponsiveStyle(display, 'display');
  }
  if (position && typeof position !== 'string') {
    applyResponsiveStyle(position, 'position');
  }
  if (top !== undefined) {
    applyResponsiveStyle(top, 'top');
  }
  if (right !== undefined) {
    applyResponsiveStyle(right, 'right');
  }
  if (bottom !== undefined) {
    applyResponsiveStyle(bottom, 'bottom');
  }
  if (left !== undefined) {
    applyResponsiveStyle(left, 'left');
  }
  if (zIndex !== undefined) {
    applyResponsiveStyle(zIndex, 'z-index');
  }
  if (overflow && typeof overflow !== 'string') {
    applyResponsiveStyle(overflow, 'overflow');
  }
  if (overflowX && typeof overflowX !== 'string') {
    applyResponsiveStyle(overflowX, 'overflow-x');
  }
  if (overflowY && typeof overflowY !== 'string') {
    applyResponsiveStyle(overflowY, 'overflow-y');
  }
  if (direction && typeof direction !== 'string') {
    applyResponsiveStyle(direction, 'flex-direction');
  }
  if (wrap && typeof wrap !== 'string') {
    applyResponsiveStyle(wrap, 'flex-wrap');
  }
  if (justify && typeof justify !== 'string') {
    applyResponsiveStyle(justify, 'justify-content');
  }
  if (align && typeof align !== 'string') {
    applyResponsiveStyle(align, 'align-items');
  }
  if (alignContent && typeof alignContent !== 'string') {
    applyResponsiveStyle(alignContent, 'align-content');
  }
  if (flex !== undefined) {
    applyResponsiveStyle(flex, 'flex');
  }
  if (flexGrow !== undefined) {
    applyResponsiveStyle(flexGrow, 'flex-grow');
  }
  if (flexShrink !== undefined) {
    applyResponsiveStyle(flexShrink, 'flex-shrink');
  }
  if (flexBasis !== undefined) {
    applyResponsiveStyle(flexBasis, 'flex-basis');
  }
  if (alignSelf && typeof alignSelf !== 'string') {
    applyResponsiveStyle(alignSelf, 'align-self');
  }
  if (order !== undefined) {
    applyResponsiveStyle(order, 'order');
  }
  if (gap !== undefined && (typeof gap !== 'string' || !['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(gap))) {
    applyResponsiveStyle(gap, 'gap');
  }
  if (rowGap !== undefined && (typeof rowGap !== 'string' || !['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(rowGap))) {
    applyResponsiveStyle(rowGap, 'row-gap');
  }
  if (columnGap !== undefined && (typeof columnGap !== 'string' || !['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'].includes(columnGap))) {
    applyResponsiveStyle(columnGap, 'column-gap');
  }
  if (gridTemplateColumns !== undefined) {
    applyResponsiveStyle(gridTemplateColumns, 'grid-template-columns');
  }
  if (gridTemplateRows !== undefined) {
    applyResponsiveStyle(gridTemplateRows, 'grid-template-rows');
  }
  if (gridColumn !== undefined) {
    applyResponsiveStyle(gridColumn, 'grid-column');
  }
  if (gridRow !== undefined) {
    applyResponsiveStyle(gridRow, 'grid-row');
  }
  if (width !== undefined) {
    applyResponsiveStyle(width, 'width');
  }
  if (height !== undefined) {
    applyResponsiveStyle(height, 'height');
  }
  if (minWidth !== undefined) {
    applyResponsiveStyle(minWidth, 'min-width');
  }
  if (minHeight !== undefined) {
    applyResponsiveStyle(minHeight, 'min-height');
  }
  if (maxWidth !== undefined) {
    applyResponsiveStyle(maxWidth, 'max-width');
  }
  if (maxHeight !== undefined) {
    applyResponsiveStyle(maxHeight, 'max-height');
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

Frame.displayName = 'Frame'; 