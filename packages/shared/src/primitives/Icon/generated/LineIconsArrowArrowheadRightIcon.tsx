import React from 'react';

export interface LineIconsArrowArrowheadRightIconProps {
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
 * LineIconsArrowArrowheadRightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrowheadRightIcon: React.FC<LineIconsArrowArrowheadRightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9515 3.37324L16.7793 9.37314C17.0783 9.74413 17.0733 10.2741 16.7683 10.6401L11.7685 16.64C11.5705 16.877 11.2865 17 10.9995 17C10.7745 17 10.5475 16.924 10.3605 16.768C9.93551 16.415 9.87851 15.784 10.2325 15.36L14.7084 9.98912L10.3925 4.62722C10.0465 4.19723 10.1145 3.56724 10.5455 3.22124C10.9755 2.87425 11.6045 2.94325 11.9515 3.37324ZM3.54522 3.22124C3.97521 2.87525 4.60419 2.94325 4.95118 3.37324L9.77905 9.37314C10.077 9.74413 10.073 10.2741 9.76805 10.6401L4.76819 16.64C4.57019 16.877 4.2862 17 3.99921 17C3.77421 17 3.54722 16.924 3.36023 16.768C2.93524 16.415 2.87824 15.784 3.23223 15.36L7.70711 9.98913L3.39222 4.62722C3.04623 4.19723 3.11523 3.56724 3.54522 3.22124Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrowheadRightIcon;
