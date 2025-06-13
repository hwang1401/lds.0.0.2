import React from 'react';

export interface LineIconsMenuMenu2IconProps {
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
 * LineIconsMenuMenu2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMenuMenu2Icon: React.FC<LineIconsMenuMenu2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M2.84267 4H17.1564C17.6204 4 18 4.427 18 4.949V5.051C18 5.573 17.6204 6 17.1564 6H2.84267C2.37867 6 2 5.573 2 5.051V4.949C2 4.427 2.37867 4 2.84267 4ZM17.1564 9.00001H2.84267C2.37867 9.00001 2 9.42701 2 9.94901V10.051C2 10.573 2.37867 11 2.84267 11H17.1564C17.6204 11 18 10.573 18 10.051V9.94901C18 9.42701 17.6204 9.00001 17.1564 9.00001ZM17.1564 14H2.84267C2.37867 14 2 14.427 2 14.949V15.051C2 15.573 2.37867 16 2.84267 16H17.1564C17.6204 16 18 15.573 18 15.051V14.949C18 14.427 17.6204 14 17.1564 14Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMenuMenu2Icon;
