import React from 'react';

export interface LineIconsMenuArrowIconProps {
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
 * LineIconsMenuArrowIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMenuArrowIcon: React.FC<LineIconsMenuArrowIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M3.25177 3.99998H17.1799C17.6305 3.99998 17.9998 4.36598 17.9998 4.81255V4.90169C17.9998 5.34826 17.6305 5.71426 17.1799 5.71426H3.25177C2.80117 5.71426 2.43186 5.34826 2.43186 4.90169V4.81255C2.43186 4.36598 2.80117 3.99998 3.25177 3.99998ZM17.1802 9.14286H4.95239L6.07069 8.03457C6.40886 7.69943 6.40886 7.15772 6.07069 6.82257C5.73338 6.48743 5.18591 6.48743 4.84774 6.82257L2.25307 9.394C1.91576 9.72915 1.91576 10.2709 2.25307 10.606L4.84774 13.1774C5.01725 13.3446 5.2378 13.4286 5.45921 13.4286C5.68062 13.4286 5.90203 13.3446 6.07069 13.1774C6.40886 12.8423 6.40886 12.3006 6.07069 11.9654L4.95239 10.8571H17.1802C17.6308 10.8571 18.0001 10.4911 18.0001 10.0446V9.95543C18.0001 9.50886 17.6308 9.14286 17.1802 9.14286ZM17.1798 14.2857H3.25165C2.80104 14.2857 2.43173 14.6517 2.43173 15.0983V15.1874C2.43173 15.634 2.80104 16 3.25165 16H17.1798C17.6304 16 17.9997 15.634 17.9997 15.1874V15.0983C17.9997 14.6517 17.6304 14.2857 17.1798 14.2857Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMenuArrowIcon;
