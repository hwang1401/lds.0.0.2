import React from 'react';

export interface LineIconsRewindRightIconProps {
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
 * LineIconsRewindRightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsRewindRightIcon: React.FC<LineIconsRewindRightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.4119 13.2568V6.67848L15.9503 9.99848L11.4119 13.2568ZM3.88217 13.2568V6.67848L8.42052 9.99848L3.88217 13.2568ZM17.3958 8.89516L12.5967 5.38349C12.0235 4.96516 11.2066 4.88016 10.5176 5.16766C9.90776 5.42266 9.52941 5.92849 9.52941 6.48933V8.64849L5.06729 5.38349C4.49412 4.96516 3.67624 4.88016 2.98824 5.16766C2.37835 5.42266 2 5.92849 2 6.48933V13.511C2 14.0718 2.37835 14.5777 2.98824 14.8327C3.26024 14.9452 3.552 15.001 3.84094 15.001C4.28424 15.001 4.72094 14.8702 5.06729 14.616L9.52941 11.3527V13.511C9.52941 14.0718 9.90776 14.5777 10.5176 14.8327C10.7896 14.9452 11.0814 15.001 11.3704 15.001C11.8136 15.001 12.2504 14.8702 12.5967 14.616L17.3967 11.1052C17.7798 10.8252 18 10.4218 18 10.0002C18 9.57849 17.7798 9.17516 17.3958 8.89516Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsRewindRightIcon;
