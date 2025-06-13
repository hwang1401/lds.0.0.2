import React from 'react';

export interface LineIconsBatteryBatteryIconProps {
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
 * LineIconsBatteryBatteryIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsBatteryBatteryIcon: React.FC<LineIconsBatteryBatteryIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.9999 8.33333V11.6667C17.9999 12.1267 17.6415 12.5 17.1999 12.5C16.7583 12.5 16.3999 12.1267 16.3999 11.6667V8.33333C16.3999 7.87333 16.7583 7.5 17.1999 7.5C17.6415 7.5 17.9999 7.87333 17.9999 8.33333ZM13.2001 12.9758C13.2001 13.1867 13.1033 13.3142 13.0625 13.3333L3.7409 13.3342C3.7009 13.3192 3.6001 13.1917 3.6001 12.9758V7.02416C3.6001 6.80833 3.7009 6.68083 3.7337 6.66666L13.0593 6.66583C13.0993 6.68083 13.2001 6.80833 13.2001 7.02416V12.9758ZM13.0664 5H3.7336C2.7776 5 2 5.9075 2 7.02417V12.9758C2 14.0925 2.7776 15 3.7336 15H13.0664C14.0224 15 14.8 14.0925 14.8 12.9758V7.02417C14.8 5.9075 14.0224 5 13.0664 5Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsBatteryBatteryIcon;
