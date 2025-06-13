import React from 'react';

export interface LineIconsArrowArrowheadUpIconProps {
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
 * LineIconsArrowArrowheadUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrowheadUpIcon: React.FC<LineIconsArrowArrowheadUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.98896 5.29284L4.6271 9.60772C4.19712 9.95371 3.56813 9.88571 3.22114 9.45572C2.87515 9.02473 2.94315 8.39575 3.37314 8.04876L9.37297 3.2209C9.74396 2.92291 10.2739 2.92591 10.6399 3.2329L16.6398 8.23276C17.0648 8.58575 17.1218 9.21573 16.7678 9.64072C16.5698 9.87771 16.2858 10.0007 15.9998 10.0007C15.7738 10.0007 15.5468 9.92371 15.3598 9.76871L9.98896 5.29284ZM9.37307 10.2212C9.74406 9.92219 10.274 9.9262 10.64 10.2322L16.6399 15.232C17.0639 15.586 17.1209 16.216 16.7679 16.64C16.5699 16.878 16.2859 17 15.9989 17C15.7739 17 15.5469 16.924 15.3599 16.768L9.98906 12.2931L4.6272 16.607C4.19722 16.954 3.56823 16.886 3.22124 16.455C2.87425 16.025 2.94325 15.396 3.37324 15.049L9.37307 10.2212Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrowheadUpIcon;
