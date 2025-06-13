import React from 'react';

export interface LineIconsGlobeGlobe1IconProps {
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
 * LineIconsGlobeGlobe1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsGlobeGlobe1Icon: React.FC<LineIconsGlobeGlobe1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.8322 15.2864C12.5665 14.2378 13.3302 12.6957 13.4828 10.7H15.5513C15.2832 12.8364 13.809 14.599 11.8322 15.2864ZM4.44843 10.7H6.54283C6.68703 12.7034 7.44093 14.2392 8.18503 15.2927C6.19913 14.6088 4.71793 12.8427 4.44843 10.7ZM8.20673 4.70028C7.47033 5.74888 6.69963 7.29588 6.54563 9.29998H4.44843C4.71863 7.14958 6.21033 5.37788 8.20673 4.70028ZM7.95526 9.29998C8.16946 7.00958 9.34126 5.41498 10.0182 4.67788C10.7182 5.42758 11.8718 7.00748 12.0713 9.29998H7.95526ZM7.95624 10.7H12.0736C11.8594 12.9939 10.6848 14.5885 10.0086 15.3256C9.27574 14.5486 8.15154 12.9904 7.95624 10.7ZM15.5512 9.29998H13.4848C13.3413 7.30568 12.5958 5.77478 11.8552 4.72268C13.8208 5.41568 15.2845 7.17198 15.5512 9.29998ZM17.0002 9.99998C17.0002 6.14718 13.8705 3.01258 10.0198 3.00138C10.017 3.00138 10.0142 3.00068 10.0107 3.00068C10.0079 3.00068 10.0037 2.99998 10.0002 2.99998C6.14038 2.99998 3.00018 6.14088 3.00018 9.99998C3.00018 13.8598 6.14038 17 10.0002 17C10.0044 17 10.0079 16.9993 10.0107 16.9993C10.0121 16.9993 10.0128 17 10.0142 17C10.0163 17 10.0184 16.9986 10.0198 16.9986C13.8705 16.9881 17.0002 13.8528 17.0002 9.99998Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsGlobeGlobe1Icon;
