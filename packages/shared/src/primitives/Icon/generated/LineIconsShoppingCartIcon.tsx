import React from 'react';

export interface LineIconsShoppingCartIconProps {
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
 * LineIconsShoppingCartIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsShoppingCartIcon: React.FC<LineIconsShoppingCartIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2783 15.8333C15.2783 16.4781 14.7929 17 14.1949 17C13.5968 17 13.1115 16.4781 13.1115 15.8333C13.1115 15.1886 13.5968 14.6667 14.1949 14.6667C14.7929 14.6667 15.2783 15.1886 15.2783 15.8333ZM8.0561 15.8333C8.0561 16.4781 7.57074 17 6.97271 17C6.37468 17 5.88932 16.4781 5.88932 15.8333C5.88932 15.1886 6.37468 14.6667 6.97271 14.6667C7.57074 14.6667 8.0561 15.1886 8.0561 15.8333ZM13.3878 11.5555H7.88562L6.70329 6.88888H15.5546L13.3878 11.5555ZM16.783 6.07067C16.5179 5.60867 16.0586 5.33333 15.5545 5.33333H6.30955L5.86391 3.57322C5.77797 3.23489 5.49267 3 5.16694 3H3.72242C3.32301 3 3.00016 3.34844 3.00016 3.77778C3.00016 4.20711 3.32301 4.55556 3.72242 4.55556H4.61513L6.63673 12.5379C6.72268 12.8762 7.00797 13.1111 7.33371 13.1111H13.834C14.1078 13.1111 14.3577 12.9447 14.4805 12.681L16.8466 7.58422C17.0719 7.09811 17.0481 6.53267 16.783 6.07067Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsShoppingCartIcon;
