import React from 'react';

export interface LineIconsCloseCircleIconProps {
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
 * LineIconsCloseCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCloseCircleIcon: React.FC<LineIconsCloseCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.8945 8.1051C11.6208 7.8314 11.1784 7.8314 10.9047 8.1051L9.99959 9.0102L9.09449 8.1051C8.82079 7.8314 8.37839 7.8314 8.10469 8.1051C7.83099 8.3788 7.83099 8.8212 8.10469 9.09489L9.00979 9.99999L8.10469 10.9051C7.83099 11.1788 7.83099 11.6212 8.10469 11.8949C8.24119 12.0314 8.42039 12.1 8.59959 12.1C8.77879 12.1 8.95799 12.0314 9.09449 11.8949L9.99959 10.9898L10.9047 11.8949C11.0412 12.0314 11.2204 12.1 11.3996 12.1C11.5788 12.1 11.758 12.0314 11.8945 11.8949C12.1682 11.6212 12.1682 11.1788 11.8945 10.9051L10.9894 9.99999L11.8945 9.09489C12.1682 8.8212 12.1682 8.3788 11.8945 8.1051ZM9.99955 15.6C6.91185 15.6 4.39956 13.0877 4.39956 9.99998C4.39956 6.91229 6.91185 4.39999 9.99955 4.39999C13.0872 4.39999 15.5995 6.91229 15.5995 9.99998C15.5995 13.0877 13.0872 15.6 9.99955 15.6ZM9.99984 3C6.14004 3 2.99985 6.1402 2.99985 9.99999C2.99985 13.8598 6.14004 17 9.99984 17C13.8596 17 16.9998 13.8598 16.9998 9.99999C16.9998 6.1402 13.8596 3 9.99984 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCloseCircleIcon;
