import React from 'react';

export interface LineIconsMessageSquareIconProps {
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
 * LineIconsMessageSquareIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMessageSquareIcon: React.FC<LineIconsMessageSquareIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.49967 8.89473C6.49967 8.488 6.81327 8.15789 7.19967 8.15789C7.58607 8.15789 7.89967 8.488 7.89967 8.89473C7.89967 9.30147 7.58607 9.63157 7.19967 9.63157C6.81327 9.63157 6.49967 9.30147 6.49967 8.89473ZM10 8.15789C9.6136 8.15789 9.3 8.488 9.3 8.89473C9.3 9.30147 9.6136 9.63157 10 9.63157C10.3864 9.63157 10.7 9.30147 10.7 8.89473C10.7 8.488 10.3864 8.15789 10 8.15789ZM12.7997 8.15789C12.4133 8.15789 12.0997 8.488 12.0997 8.89473C12.0997 9.30147 12.4133 9.63157 12.7997 9.63157C13.1861 9.63157 13.4997 9.30147 13.4997 8.89473C13.4997 8.488 13.1861 8.15789 12.7997 8.15789ZM15.5999 12.579C15.5999 12.985 15.2856 13.3158 14.8999 13.3158H7.58767C7.20757 13.3158 6.83377 13.4248 6.50687 13.6312L4.39987 14.9619V5.21053C4.39987 4.80453 4.71417 4.47369 5.09987 4.47369H14.8999C15.2856 4.47369 15.5999 4.80453 15.5999 5.21053V12.579ZM14.9 3H5.1C3.9422 3 3 3.99179 3 5.21053V16.2632C3 16.5284 3.1358 16.7738 3.3549 16.9042C3.462 16.9683 3.581 17 3.7 17C3.8246 17 3.9492 16.9654 4.0605 16.8946L7.2273 14.8948C7.3365 14.8256 7.4611 14.7895 7.5878 14.7895H14.9C16.0578 14.7895 17 13.7977 17 12.5789V5.21053C17 3.99179 16.0578 3 14.9 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMessageSquareIcon;
