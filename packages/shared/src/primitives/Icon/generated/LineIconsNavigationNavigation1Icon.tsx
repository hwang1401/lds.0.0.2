import React from 'react';

export interface LineIconsNavigationNavigation1IconProps {
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
 * LineIconsNavigationNavigation1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsNavigationNavigation1Icon: React.FC<LineIconsNavigationNavigation1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99999 11.3097C10.1493 11.3097 10.2994 11.3534 10.4293 11.4392L14.2248 13.9584L9.99999 5.48845L5.77521 13.9584L9.57067 11.4392C9.70055 11.3534 9.85066 11.3097 9.99999 11.3097ZM16.2219 17C16.0726 17 15.9232 16.9571 15.7926 16.8706L9.99982 13.0243L4.20707 16.8706C3.91308 17.0647 3.52576 17.0382 3.2621 16.8043C2.99844 16.5696 2.92455 16.1875 3.08166 15.8718L9.30372 3.39648C9.56738 2.86784 10.4323 2.86784 10.6959 3.39648L16.918 15.8718C17.0751 16.1875 17.0012 16.5696 16.7375 16.8043C16.5913 16.9337 16.407 17 16.2219 17Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsNavigationNavigation1Icon;
