import React from 'react';

export interface LineIconsCornerDownRightIconProps {
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
 * LineIconsCornerDownRightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerDownRightIcon: React.FC<LineIconsCornerDownRightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7956 10.375L13.0623 5.375C12.7403 4.943 12.1523 4.874 11.7509 5.219C11.3477 5.563 11.2824 6.193 11.6044 6.624L14.1253 10H5.8C5.28573 10 4.86667 9.551 4.86667 9V4C4.86667 3.447 4.44853 3 3.93333 3C3.41813 3 3 3.447 3 4V9C3 10.654 4.25627 12 5.8 12H14.1253L11.6044 15.375C11.2824 15.806 11.3477 16.436 11.7509 16.78C11.9227 16.928 12.1289 17 12.3333 17C12.6068 17 12.8784 16.871 13.0623 16.624L16.7956 11.624C17.0681 11.259 17.0681 10.74 16.7956 10.375Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerDownRightIcon;
