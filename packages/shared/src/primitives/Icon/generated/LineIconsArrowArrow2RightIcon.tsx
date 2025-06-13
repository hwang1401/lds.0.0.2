import React from 'react';

export interface LineIconsArrowArrow2RightIconProps {
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
 * LineIconsArrowArrow2RightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrow2RightIcon: React.FC<LineIconsArrowArrow2RightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M3.00002 11H14.8653L11.2322 15.3601C10.8782 15.7841 10.9362 16.4152 11.3602 16.7682C11.7852 17.1222 12.4152 17.0642 12.7692 16.6402L17.7693 10.64C17.8083 10.593 17.8273 10.538 17.8563 10.486C17.8803 10.444 17.9093 10.408 17.9273 10.362C17.9723 10.247 17.9993 10.126 17.9993 10.004C17.9993 10.003 18.0003 10.001 18.0003 10C18.0003 9.99902 17.9993 9.99702 17.9993 9.99602C17.9993 9.87402 17.9723 9.75302 17.9273 9.63801C17.9093 9.59201 17.8803 9.55601 17.8563 9.51401C17.8273 9.46201 17.8083 9.40701 17.7693 9.36001L12.7692 3.35989C12.5702 3.12288 12.2862 2.99988 12.0002 2.99988C11.7742 2.99988 11.5472 3.07588 11.3602 3.23188C10.9362 3.58489 10.8782 4.2159 11.2322 4.63991L14.8653 9H3.00002C2.44801 9 2 9.44801 2 10C2 10.552 2.44801 11 3.00002 11Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrow2RightIcon;
