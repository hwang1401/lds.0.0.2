import React from 'react';

export interface LineIconsVideoOnIconProps {
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
 * LineIconsVideoOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsVideoOnIcon: React.FC<LineIconsVideoOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.4002 12.2286L14.153 9.99999L16.4002 7.77228V12.2286ZM12.3998 13.4286C12.3998 13.9017 12.0414 14.2857 11.5998 14.2857H4.39979C3.95819 14.2857 3.59979 13.9017 3.59979 13.4286V6.57146C3.59979 6.09918 3.95819 5.71432 4.39979 5.71432H11.5998C12.0414 5.71432 12.3998 6.09918 12.3998 6.57146V13.4286ZM17.2098 5.83944C16.709 5.60544 16.1282 5.70744 15.729 6.10173L14.0002 7.81602V6.57144C14.0002 5.15373 12.9234 4.00002 11.6002 4.00002H4.40018C3.07698 4.00002 2.00018 5.15373 2.00018 6.57144V13.4286C2.00018 14.8472 3.07698 16 4.40018 16H11.6002C12.9234 16 14.0002 14.8472 14.0002 13.4286V12.1849L15.729 13.8983C15.985 14.1529 16.317 14.2857 16.6554 14.2857C16.8426 14.2857 17.0306 14.2454 17.2098 14.1614C17.697 13.9334 18.0002 13.4457 18.0002 12.8894V7.11144C18.0002 6.55516 17.697 6.06744 17.2098 5.83944Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsVideoOnIcon;
