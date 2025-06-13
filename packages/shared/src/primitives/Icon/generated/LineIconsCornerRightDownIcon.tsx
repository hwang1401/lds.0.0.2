import React from 'react';

export interface LineIconsCornerRightDownIconProps {
  /**
   * 아이콘 크기
   */
  size?: number | string;
  
  /**
   * 아이콘 색상 (CSS color 값)
   */
  color?: string;
  
  /**
   * 추가 CSS 클래스
   */
  className?: string;
  
  /**
   * 인라인 스타일
   */
  style?: React.CSSProperties;
  
  /**
   * 접근성을 위한 라벨
   */
  'aria-label'?: string;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
}

/**
 * LineIconsCornerRightDownIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerRightDownIcon: React.FC<LineIconsCornerRightDownIconProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
  'aria-label': ariaLabel,
  onClick,
  ...props
}) => {
  const combinedStyle = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
    color,
    ...style,
  };

  // SVG의 width/height 속성은 숫자나 픽셀 값만 허용하므로 토큰을 변환
  const getSvgSize = (size: number | string): number => {
    if (typeof size === 'number') return size;
    // 토큰을 픽셀 값으로 변환
    const tokenToPixel: Record<string, number> = {
      'xxsm': 12,
      'xsm': 14,
      'sm': 16,
      'md': 20,
      'lg': 24,
      'xl': 32,
      'xxl': 40
    };
    return tokenToPixel[size as string] || 24; // 기본값 24px
  };

  const svgSize = getSvgSize(size);

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={combinedStyle}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7809 11.75C16.4359 11.3468 15.8059 11.2824 15.3759 11.6044L11.9999 14.1244V5.8C11.9999 4.25533 10.6549 3 8.99994 3H3.99999C3.448 3 3 3.4172 3 3.93333C3 4.44853 3.448 4.86667 3.99999 4.86667H8.99994C9.55193 4.86667 9.99993 5.2848 9.99993 5.8V14.1244L6.62496 11.6044C6.19497 11.2824 5.56497 11.3468 5.21898 11.75C4.87398 12.1523 4.94398 12.7403 5.37597 13.0613L10.3759 16.7947C10.5579 16.9309 10.7789 17 10.9999 17C11.2209 17 11.4419 16.9309 11.6249 16.7947L16.6249 13.0613C17.0559 12.7403 17.1258 12.1523 16.7809 11.75Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerRightDownIcon;
