import React from 'react';

export interface LineIconsArrowArrow2LeftIconProps {
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
 * LineIconsArrowArrow2LeftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrow2LeftIcon: React.FC<LineIconsArrowArrow2LeftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 9.00015H5.135L8.768 4.64015C9.122 4.21615 9.064 3.58515 8.64 3.23215C8.215 2.87815 7.585 2.93615 7.232 3.36015L2.232 9.36015C2.193 9.40715 2.173 9.46215 2.144 9.51415C2.12 9.55615 2.091 9.59215 2.073 9.63815C2.028 9.75315 2.001 9.87415 2.001 9.99615C2.001 9.99715 2 9.99915 2 10.0002C2 10.0012 2.001 10.0032 2.001 10.0042C2.001 10.1262 2.028 10.2472 2.073 10.3622C2.091 10.4082 2.12 10.4442 2.144 10.4862C2.173 10.5382 2.193 10.5932 2.232 10.6402L7.232 16.6402C7.43 16.8772 7.714 17.0002 8 17.0002C8.226 17.0002 8.453 16.9242 8.64 16.7682C9.064 16.4152 9.122 15.7842 8.768 15.3602L5.135 11.0002H17C17.552 11.0002 18 10.5522 18 10.0002C18 9.44815 17.552 9.00015 17 9.00015Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrow2LeftIcon;
