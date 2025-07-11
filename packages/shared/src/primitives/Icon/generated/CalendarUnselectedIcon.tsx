import React from 'react';

export interface CalendarUnselectedIconProps {
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
 * CalendarUnselectedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CalendarUnselectedIcon: React.FC<CalendarUnselectedIconProps> = ({
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
      <path d="M22.8502 4.68945H5.35018C4.06151 4.68945 3.01685 5.73412 3.01685 7.02279V22.1894C3.01685 23.4781 4.06151 24.5228 5.35018 24.5228H22.8502C24.1389 24.5228 25.1835 23.4781 25.1835 22.1894V7.02279C25.1835 5.73412 24.1389 4.68945 22.8502 4.68945Z" fill="#E0E0E0"/>
<path d="M9.99352 3.52283H8.85018C8.52802 3.52283 8.26685 3.784 8.26685 4.10616V6.43949C8.26685 6.76166 8.52802 7.02283 8.85018 7.02283H9.99352C10.3157 7.02283 10.5769 6.76166 10.5769 6.43949V4.10616C10.5769 3.784 10.3157 3.52283 9.99352 3.52283Z" fill="#C2C2C2"/>
<path d="M10.297 11.0834H8.54696C8.22479 11.0834 7.96362 11.3445 7.96362 11.6667V13.4167C7.96362 13.7388 8.22479 14 8.54696 14H10.297C10.6191 14 10.8803 13.7388 10.8803 13.4167V11.6667C10.8803 11.3445 10.6191 11.0834 10.297 11.0834Z" fill="#C2C2C2"/>
<path d="M14.9752 11.0834H13.2252C12.9031 11.0834 12.6418 11.3445 12.6418 11.6667V13.4167C12.6418 13.7388 12.9031 14 13.2252 14H14.9752C15.2973 14 15.5585 13.7388 15.5585 13.4167V11.6667C15.5585 11.3445 15.2973 11.0834 14.9752 11.0834Z" fill="#C2C2C2"/>
<path d="M19.6532 11.0834H17.9032C17.5809 11.0834 17.3198 11.3445 17.3198 11.6667V13.4167C17.3198 13.7388 17.5809 14 17.9032 14H19.6532C19.9753 14 20.2365 13.7388 20.2365 13.4167V11.6667C20.2365 11.3445 19.9753 11.0834 19.6532 11.0834Z" fill="#C2C2C2"/>
<path d="M19.3501 3.52283H18.1834C17.8613 3.52283 17.6001 3.784 17.6001 4.10616V6.43949C17.6001 6.76166 17.8613 7.02283 18.1834 7.02283H19.3501C19.6722 7.02283 19.9334 6.76166 19.9334 6.43949V4.10616C19.9334 3.784 19.6722 3.52283 19.3501 3.52283Z" fill="#C2C2C2"/>
<path d="M10.297 16.3334H8.54696C8.22479 16.3334 7.96362 16.5946 7.96362 16.9167V18.6667C7.96362 18.9888 8.22479 19.25 8.54696 19.25H10.297C10.6191 19.25 10.8803 18.9888 10.8803 18.6667V16.9167C10.8803 16.5946 10.6191 16.3334 10.297 16.3334Z" fill="#C2C2C2"/>
<path d="M14.9752 16.3334H13.2252C12.9031 16.3334 12.6418 16.5946 12.6418 16.9167V18.6667C12.6418 18.9888 12.9031 19.25 13.2252 19.25H14.9752C15.2973 19.25 15.5585 18.9888 15.5585 18.6667V16.9167C15.5585 16.5946 15.2973 16.3334 14.9752 16.3334Z" fill="#C2C2C2"/>
<path d="M19.6532 16.3334H17.9032C17.5809 16.3334 17.3198 16.5946 17.3198 16.9167V18.6667C17.3198 18.9888 17.5809 19.25 17.9032 19.25H19.6532C19.9753 19.25 20.2365 18.9888 20.2365 18.6667V16.9167C20.2365 16.5946 19.9753 16.3334 19.6532 16.3334Z" fill="#C2C2C2"/>
    </svg>
  );
};

export default CalendarUnselectedIcon;
