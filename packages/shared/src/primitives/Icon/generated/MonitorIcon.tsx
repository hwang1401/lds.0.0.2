import React from 'react';

export interface MonitorIconProps {
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
 * MonitorIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const MonitorIcon: React.FC<MonitorIconProps> = ({
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
      <path d="M11.6666 12.5H8.33331V15.8333H11.6666V12.5Z" fill="#737A83"/>
<path d="M13.3333 15.8333H6.66665C6.20641 15.8333 5.83331 16.2064 5.83331 16.6666C5.83331 17.1269 6.20641 17.5 6.66665 17.5H13.3333C13.7936 17.5 14.1666 17.1269 14.1666 16.6666C14.1666 16.2064 13.7936 15.8333 13.3333 15.8333Z" fill="#737A83"/>
<path d="M17.5 2.5H2.50002C2.03979 2.5 1.66669 2.8731 1.66669 3.33333V12.5C1.66669 12.9602 2.03979 13.3333 2.50002 13.3333H17.5C17.9603 13.3333 18.3334 12.9602 18.3334 12.5V3.33333C18.3334 2.8731 17.9603 2.5 17.5 2.5Z" fill="#737A83"/>
<path d="M16.6666 4.16669H3.33331V11.6667H16.6666V4.16669Z" fill="url(#paint0_linear_3115_21829)"/>
<defs>
<linearGradient id="paint0_linear_3115_21829" x1="3.74998" y1="4.16669" x2="16.6666" y2="11.6667" gradientUnits="userSpaceOnUse">
<stop stopColor="#B8E7FB"/>
<stop offset="1" stopColor="#C1B8FB"/>
</linearGradient>
</defs>
    </svg>
  );
};

export default MonitorIcon;
