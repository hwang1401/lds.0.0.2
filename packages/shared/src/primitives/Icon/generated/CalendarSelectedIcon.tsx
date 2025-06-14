import React from 'react';

export interface CalendarSelectedIconProps {
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
 * CalendarSelectedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CalendarSelectedIcon: React.FC<CalendarSelectedIconProps> = ({
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
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={combinedStyle}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <path d="M22.85 4.68945H5.34998C4.06132 4.68945 3.01665 5.73412 3.01665 7.02279V22.1894C3.01665 23.4781 4.06132 24.5228 5.34998 24.5228H22.85C24.1387 24.5228 25.1833 23.4781 25.1833 22.1894V7.02279C25.1833 5.73412 24.1387 4.68945 22.85 4.68945Z" fill="#009FE9"/>
<path d="M9.99333 3.52283H8.84998C8.52782 3.52283 8.26665 3.784 8.26665 4.10616V6.43949C8.26665 6.76166 8.52782 7.02283 8.84998 7.02283H9.99333C10.3155 7.02283 10.5767 6.76166 10.5767 6.43949V4.10616C10.5767 3.784 10.3155 3.52283 9.99333 3.52283Z" fill="white"/>
<path d="M10.2969 11.0834H8.54692C8.22475 11.0834 7.96358 11.3445 7.96358 11.6667V13.4167C7.96358 13.7388 8.22475 14 8.54692 14H10.2969C10.6191 14 10.8803 13.7388 10.8803 13.4167V11.6667C10.8803 11.3445 10.6191 11.0834 10.2969 11.0834Z" fill="white"/>
<path d="M14.975 11.0834H13.225C12.9029 11.0834 12.6416 11.3445 12.6416 11.6667V13.4167C12.6416 13.7388 12.9029 14 13.225 14H14.975C15.2971 14 15.5583 13.7388 15.5583 13.4167V11.6667C15.5583 11.3445 15.2971 11.0834 14.975 11.0834Z" fill="white"/>
<path d="M19.6531 11.0834H17.9031C17.5808 11.0834 17.3197 11.3445 17.3197 11.6667V13.4167C17.3197 13.7388 17.5808 14 17.9031 14H19.6531C19.9752 14 20.2364 13.7388 20.2364 13.4167V11.6667C20.2364 11.3445 19.9752 11.0834 19.6531 11.0834Z" fill="white"/>
<path d="M19.35 3.52283H18.1833C17.8612 3.52283 17.6 3.784 17.6 4.10616V6.43949C17.6 6.76166 17.8612 7.02283 18.1833 7.02283H19.35C19.6721 7.02283 19.9333 6.76166 19.9333 6.43949V4.10616C19.9333 3.784 19.6721 3.52283 19.35 3.52283Z" fill="white"/>
<path d="M10.2969 16.3334H8.54692C8.22475 16.3334 7.96358 16.5946 7.96358 16.9167V18.6667C7.96358 18.9888 8.22475 19.25 8.54692 19.25H10.2969C10.6191 19.25 10.8803 18.9888 10.8803 18.6667V16.9167C10.8803 16.5946 10.6191 16.3334 10.2969 16.3334Z" fill="white"/>
<path d="M14.975 16.3334H13.225C12.9029 16.3334 12.6416 16.5946 12.6416 16.9167V18.6667C12.6416 18.9888 12.9029 19.25 13.225 19.25H14.975C15.2971 19.25 15.5583 18.9888 15.5583 18.6667V16.9167C15.5583 16.5946 15.2971 16.3334 14.975 16.3334Z" fill="white"/>
<path d="M19.6531 16.3334H17.9031C17.5808 16.3334 17.3197 16.5946 17.3197 16.9167V18.6667C17.3197 18.9888 17.5808 19.25 17.9031 19.25H19.6531C19.9752 19.25 20.2364 18.9888 20.2364 18.6667V16.9167C20.2364 16.5946 19.9752 16.3334 19.6531 16.3334Z" fill="white"/>
    </svg>
  );
};

export default CalendarSelectedIcon;
