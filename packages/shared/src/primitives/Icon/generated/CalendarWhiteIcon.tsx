import React from 'react';

export interface CalendarWhiteIconProps {
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
 * CalendarWhiteIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CalendarWhiteIcon: React.FC<CalendarWhiteIconProps> = ({
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
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={combinedStyle}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M5.3889 10.5601C5.3889 10.2081 5.6689 9.92012 6.01112 9.92012C6.35334 9.92012 6.63334 10.2081 6.63334 10.5601C6.63334 10.9121 6.35334 11.2001 6.01112 11.2001C5.6689 11.2001 5.3889 10.9121 5.3889 10.5601ZM8.5005 9.92012H10.9894C11.3316 9.92012 11.6116 10.2081 11.6116 10.5601C11.6116 10.9121 11.3316 11.2001 10.9894 11.2001H8.5005C8.15828 11.2001 7.87828 10.9121 7.87828 10.5601C7.87828 10.2081 8.15828 9.92012 8.5005 9.92012ZM12.2331 13.1201H4.76648C4.42363 13.1201 4.14426 12.8327 4.14426 12.4801V8.64009H12.8554V12.4801C12.8554 12.8327 12.576 13.1201 12.2331 13.1201M4.76648 4.16011H5.3887V4.80011C5.3887 5.15211 5.6687 5.44011 6.01092 5.44011C6.35315 5.44011 6.63315 5.15211 6.63315 4.80011V4.16011H10.3665V4.80011C10.3665 5.15211 10.6465 5.44011 10.9887 5.44011C11.3309 5.44011 11.6109 5.15211 11.6109 4.80011V4.16011H12.2331C12.576 4.16011 12.8554 4.44747 12.8554 4.80011V7.36011H4.14426V4.80011C4.14426 4.44747 4.42363 4.16011 4.76648 4.16011M12.2334 2.8801H11.6111V2.2401C11.6111 1.8881 11.3311 1.6001 10.9889 1.6001C10.6467 1.6001 10.3667 1.8881 10.3667 2.2401V2.8801H6.63336V2.2401C6.63336 1.8881 6.35336 1.6001 6.01114 1.6001C5.66891 1.6001 5.38891 1.8881 5.38891 2.2401V2.8801H4.76669C3.73754 2.8801 2.90002 3.74154 2.90002 4.8001V12.4801C2.90002 13.5387 3.73754 14.4001 4.76669 14.4001H12.2334C13.2625 14.4001 14.1 13.5387 14.1 12.4801V4.8001C14.1 3.74154 13.2625 2.8801 12.2334 2.8801" fill="white"/>
    </svg>
  );
};

export default CalendarWhiteIcon;
