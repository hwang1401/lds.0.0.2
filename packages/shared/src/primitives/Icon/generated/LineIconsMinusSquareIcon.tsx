import React from 'react';

export interface LineIconsMinusSquareIconProps {
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
 * LineIconsMinusSquareIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMinusSquareIcon: React.FC<LineIconsMinusSquareIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3331 9.22223H7.66645C7.23867 9.22223 6.88867 9.57223 6.88867 10C6.88867 10.4278 7.23867 10.7778 7.66645 10.7778H12.3331C12.7609 10.7778 13.1109 10.4278 13.1109 10C13.1109 9.57223 12.7609 9.22223 12.3331 9.22223ZM15.4441 14.6667C15.4441 15.0952 15.0956 15.4444 14.6663 15.4444H5.33295C4.90362 15.4444 4.55518 15.0952 4.55518 14.6667V5.33333C4.55518 4.90478 4.90362 4.55555 5.33295 4.55555H14.6663C15.0956 4.55555 15.4441 4.90478 15.4441 5.33333V14.6667ZM14.6667 3H5.33333C4.04689 3 3 4.04689 3 5.33333V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V5.33333C17 4.04689 15.9531 3 14.6667 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMinusSquareIcon;
