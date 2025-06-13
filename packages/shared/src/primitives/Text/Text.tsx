import React, { forwardRef } from 'react';
import styles from './Text.module.css';
import { ResponsiveOrSingle, generateResponsiveClasses } from '../../types/responsive';

type TextVariant = 
  | 'hero-1'    // 48px, lineHeight: 1.6, letterSpacing: -0.025em, fontWeight: 400/500/700
  | 'hero-2'    // 36px, lineHeight: 1.6, letterSpacing: -0.025em, fontWeight: 400/500/700
  | 'title-1'   // 30px, lineHeight: 1.4, letterSpacing: -0.025em, fontWeight: 400/500/700
  | 'title-2'   // 24px, lineHeight: 1.4, letterSpacing: -0.025em, fontWeight: 400/500/700
  | 'heading-1' // 20px, lineHeight: 1.4, letterSpacing: -0.05em, fontWeight: 400/500/600
  | 'heading-2' // 20px, lineHeight: 1.4, letterSpacing: -0.05em, fontWeight: 400/500/600
  | 'heading-3' // 16px, lineHeight: 1.4, letterSpacing: 0em, fontWeight: 400/500/600
  | 'body-1'    // 16px, lineHeight: 1.6, letterSpacing: 0.025em, fontWeight: 400/500/700
  | 'body-2'    // 14px, lineHeight: 1.6, letterSpacing: 0.025em, fontWeight: 400/500/700
  | 'reading'   // 16px, lineHeight: 1.8, letterSpacing: 0.05em, fontWeight: 400/500/700
  | 'label-1'   // 14px, lineHeight: 1.4, letterSpacing: 0.05em, fontWeight: 400/500/700
  | 'label-2'   // 12px, lineHeight: 1.4, letterSpacing: 0.05em, fontWeight: 400/500/700
  | 'caption-1' // 12px, lineHeight: 1.4, letterSpacing: 0.075em, fontWeight: 400/500/700
  | 'caption-2' // 12px, lineHeight: 1.2, letterSpacing: 0.075em, fontWeight: 400/500/700
  | 'caption-3'; // 12px, lineHeight: 1.2, letterSpacing: 0.075em, fontWeight: 400/500/700

type FontWeight = 'regular' | 'medium' | 'bold';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 텍스트 요소의 HTML 태그를 지정합니다.
   */
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  
  /**
   * 텍스트의 스타일 변형을 지정합니다. 반응형 객체 또는 단일 값을 받습니다.
   * hero-1=48px, hero-2=36px, title-1=30px, title-2=24px, heading-1/2=20px, 
   * heading-3/body-1/reading=16px, body-2/label-1=14px, label-2/caption-1/2/3=12px
   */
  variant?: ResponsiveOrSingle<TextVariant>;
  
  /**
   * 텍스트의 굵기를 지정합니다. 반응형 객체 또는 단일 값을 받습니다.
   */
  weight?: ResponsiveOrSingle<FontWeight>;
  
  /**
   * 텍스트의 정렬 방향을 지정합니다. 반응형 객체 또는 단일 값을 받습니다.
   */
  textAlign?: ResponsiveOrSingle<TextAlign>;
  
  /**
   * 텍스트 변형(대문자, 소문자 등)을 지정합니다. 반응형 객체 또는 단일 값을 받습니다.
   */
  transform?: ResponsiveOrSingle<TextTransform>;
  
  /**
   * 텍스트가 한 줄에 표시되고 넘칠 경우 생략 부호로 표시할지 여부를 지정합니다.
   */
  noWrap?: boolean;
  
  /**
   * 텍스트가 지정된 라인 수 이후 생략 부호로 표시할지 여부를 지정합니다.
   */
  truncate?: number;
  
  /**
   * 텍스트의 내용물을 지정합니다.
   */
  children: React.ReactNode;
}

/**
 * variant + weight 조합 클래스를 생성하는 함수
 */
const generateVariantClasses = (
  variant: ResponsiveOrSingle<TextVariant> | undefined,
  weight: ResponsiveOrSingle<FontWeight> | undefined,
  styles: Record<string, string>
): string[] => {
  const defaultVariant = 'body-1';
  const defaultWeight = 'regular';
  
  // 둘 다 단일 값이거나 undefined인 경우
  if ((!variant || typeof variant === 'string') && (!weight || typeof weight === 'string')) {
    const finalVariant = (variant as string) || defaultVariant;
    const finalWeight = (weight as string) || defaultWeight;
    const className = `text--${finalVariant}-${finalWeight}`;
    return styles[className] ? [styles[className]] : [];
  }
  
  // 반응형인 경우 각 브레이크포인트별로 클래스 생성
  const classes: string[] = [];
  const breakpoints = ['mobile', 'tablet', 'desktop', 'desktopL', 'desktopXL'] as const;
  
  breakpoints.forEach(breakpoint => {
    const variantValue = typeof variant === 'object' && variant ? variant[breakpoint] : variant;
    const weightValue = typeof weight === 'object' && weight ? weight[breakpoint] : weight;
    
    if (variantValue || weightValue) {
      const finalVariant = variantValue || defaultVariant;
      const finalWeight = weightValue || defaultWeight;
      const className = `text--${finalVariant}-${finalWeight}--${breakpoint}`;
      if (styles[className]) {
        classes.push(styles[className]);
      }
    }
  });
  
  return classes;
};

/**
 * Text 컴포넌트는 순수한 타이포그래피 프리미티브입니다.
 * Fluent Design System의 타이포그래피 계층 구조를 따르며, 시멘틱 토큰을 사용하여 일관된 스타일을 제공합니다.
 * 색상은 Surface 프리미티브와 조합하여 사용하세요.
 * 
 * @example
 * ```tsx
 * <Text variant="title-1" weight="bold">
 *   제목 텍스트
 * </Text>
 * 
 * // Surface와 조합하여 색상 적용
 * <Surface foreground="primary-foreground-1-rest">
 *   <Text variant="body-1">색상이 적용된 텍스트</Text>
 * </Surface>
 * 
 * // 반응형 사용 예시
 * <Text 
 *   variant={{ mobile: 'body-1', desktop: 'title-1' }}
 *   weight={{ mobile: 'regular', desktop: 'bold' }}
 *   textAlign={{ mobile: 'center', desktop: 'left' }}
 * >
 *   반응형 텍스트
 * </Text>
 * ```
 */
export const Text = forwardRef<HTMLElement, TextProps>(({
  as: Component = 'p',
  variant = 'body-1',
  weight = 'regular',
  textAlign,
  transform,
  noWrap,
  truncate,
  className,
  children,
  style,
  ...rest
}, ref) => {
  const classes = [
    styles.text,
    // 반응형 variant + weight 조합 클래스들
    ...generateVariantClasses(variant, weight, styles),
    // 반응형 정렬 클래스들
    ...generateResponsiveClasses(textAlign, 'text--align', styles),
    // 반응형 변형 클래스들  
    ...generateResponsiveClasses(transform, 'text--transform', styles),
    // 기존 비반응형 클래스들
    noWrap && styles['text--nowrap'],
    truncate && styles['text--truncate'],
    className
  ].filter(Boolean).join(' ');

  const textStyles = {
    ...(truncate && { WebkitLineClamp: truncate }),
    ...style
  };

  return (
    <Component 
      ref={ref as any}
      className={classes}
      style={textStyles}
      {...rest}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text'; 