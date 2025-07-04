import React from 'react';

export interface LineIconsCartAddCartIconProps {
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
 * LineIconsCartAddCartIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCartAddCartIcon: React.FC<LineIconsCartAddCartIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.1967 16C10.6346 16 10.9899 15.5527 10.9899 15C10.9899 14.4473 10.6346 14 10.1967 14C9.7588 14 9.40342 14.4473 9.40342 15C9.40342 15.5527 9.7588 16 10.1967 16ZM4.90879 16C5.34667 16 5.70205 15.5527 5.70205 15C5.70205 14.4473 5.34667 14 4.90879 14C4.47091 14 4.11553 14.4473 4.11553 15C4.11553 15.5527 4.47091 16 4.90879 16ZM5.57709 11.3333H9.60577L11.1923 7.33333H4.71138L5.57709 11.3333ZM11.1923 6C11.5614 6 11.8977 6.236 12.0918 6.632C12.2859 7.028 12.3033 7.51267 12.1383 7.92933L10.4059 12.298C10.316 12.524 10.133 12.6667 9.93256 12.6667H5.17302C4.93451 12.6667 4.72562 12.4653 4.66269 12.1753L3.18247 5.33333H2.52883C2.23638 5.33333 1.99999 5.03467 1.99999 4.66667C1.99999 4.29867 2.23638 4 2.52883 4H3.5865C3.82501 4 4.0339 4.20133 4.09683 4.49133L4.42312 6H11.1923ZM15.9998 7.99999C16.2787 7.99999 16.5049 8.22611 16.5049 8.50504V9.49608H17.4949C17.7739 9.49608 18 9.72219 18 10.0011C18 10.2801 17.7739 10.5062 17.4949 10.5062H16.5049V11.4949C16.5049 11.7739 16.2787 12 15.9998 12C15.7209 12 15.4948 11.7739 15.4948 11.4949V10.5062H14.505C14.2261 10.5062 14 10.2801 14 10.0011C14 9.72219 14.2261 9.49608 14.505 9.49608H15.4948V8.50504C15.4948 8.22611 15.7209 7.99999 15.9998 7.99999Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCartAddCartIcon;
