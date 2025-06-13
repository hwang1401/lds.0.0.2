import React from 'react';

export interface LineIconsShoppingBagIconProps {
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
 * LineIconsShoppingBagIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsShoppingBagIcon: React.FC<LineIconsShoppingBagIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3332 9.22221C11.9031 9.22221 11.5554 9.57066 11.5554 9.99999C11.5554 10.8579 10.8577 11.5555 9.99985 11.5555C9.14196 11.5555 8.44429 10.8579 8.44429 9.99999C8.44429 9.57066 8.09663 9.22221 7.66651 9.22221C7.2364 9.22221 6.88874 9.57066 6.88874 9.99999C6.88874 11.7158 8.28407 13.1111 9.99985 13.1111C11.7156 13.1111 13.111 11.7158 13.111 9.99999C13.111 9.57066 12.7633 9.22221 12.3332 9.22221ZM14.6665 15.4444H5.33318C4.90385 15.4444 4.5554 15.0952 4.5554 14.6667V7.66667H15.4443V14.6667C15.4443 15.0952 15.0958 15.4444 14.6665 15.4444ZM6.9832 4.78343C7.12864 4.63877 7.32853 4.55555 7.53309 4.55555H12.4673C12.6719 4.55555 12.8718 4.63877 13.0172 4.78343L14.3449 6.1111H5.65553L6.9832 4.78343ZM16.3163 5.88322L14.1168 3.68367C13.6766 3.24267 13.0901 3 12.4671 3H7.53289C6.90989 3 6.32344 3.24267 5.88322 3.68367L3.68367 5.88322C3.24267 6.32344 3 6.90989 3 7.53367V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V7.53367C17 6.90989 16.7573 6.32344 16.3163 5.88322Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsShoppingBagIcon;
