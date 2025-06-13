import React from 'react';

export interface LineIconsNavigationNavigation2IconProps {
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
 * LineIconsNavigationNavigation2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsNavigationNavigation2Icon: React.FC<LineIconsNavigationNavigation2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.78491 7.74393L10.8278 8.56602C11.1343 8.62746 11.3731 8.86623 11.4353 9.17267L12.2566 13.2155L14.9929 5.00778L6.78491 7.74393ZM12.0746 17C12.0582 17 12.0427 16.9992 12.0271 16.9984C11.6756 16.9774 11.3824 16.7223 11.3116 16.3778L10.0135 9.98696L3.62319 8.6881C3.27785 8.61811 3.02274 8.32489 3.00174 7.97334C2.97996 7.6218 3.19774 7.29981 3.53141 7.18859L15.9759 3.0408C16.2559 2.94592 16.5639 3.0198 16.7724 3.22824C16.9808 3.43668 17.0532 3.74468 16.9606 4.02467L12.8119 16.4688C12.7054 16.7877 12.4075 17 12.0746 17Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsNavigationNavigation2Icon;
