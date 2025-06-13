import React from 'react';

export interface VacationIconProps {
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
 * VacationIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const VacationIcon: React.FC<VacationIconProps> = ({
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
      <path d="M9.16669 17.0833V1.66665C9.16669 1.44563 9.25452 1.23365 9.41077 1.07738C9.56702 0.921096 9.77902 0.833313 10 0.833313C10.221 0.833313 10.433 0.921096 10.5893 1.07738C10.7455 1.23365 10.8334 1.44563 10.8334 1.66665V17.0833C10.8334 17.1938 10.7894 17.2998 10.7114 17.3779C10.6332 17.4561 10.5272 17.5 10.4167 17.5H9.58335C9.47285 17.5 9.36685 17.4561 9.28869 17.3779C9.2106 17.2998 9.16669 17.1938 9.16669 17.0833Z" fill="#737A83"/>
<path d="M17.5 16.6667H2.50002C2.03979 16.6667 1.66669 17.0398 1.66669 17.5C1.66669 17.9603 2.03979 18.3334 2.50002 18.3334H17.5C17.9603 18.3334 18.3334 17.9603 18.3334 17.5C18.3334 17.0398 17.9603 16.6667 17.5 16.6667Z" fill="#88BFFF"/>
<path d="M1.66669 10.8415V10.0081C1.66669 8.01899 2.45687 6.11133 3.8634 4.70482C5.26991 3.29829 7.17756 2.50812 9.16669 2.50812H10.8334C12.8224 2.50812 14.7302 3.29829 16.1367 4.70482C17.5432 6.11133 18.3334 8.01899 18.3334 10.0081V10.8415" fill="#F4868F"/>
<path d="M6.66669 10.8415C6.66669 6.25812 8.15835 2.50812 10 2.50812C11.8417 2.50812 13.3334 6.21645 13.3334 10.8415" fill="white"/>
    </svg>
  );
};

export default VacationIcon;
