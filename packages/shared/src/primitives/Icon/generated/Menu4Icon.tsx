import React from 'react';

export interface Menu4IconProps {
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
 * Menu4Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const Menu4Icon: React.FC<Menu4IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13 18C12.0221 18 11.2318 17.2096 11.2318 16.2318C11.2318 15.254 12.0221 14.4636 13 14.4636C13.9778 14.4636 14.7682 15.254 14.7682 16.2318C14.7682 17.2096 13.9778 18 13 18ZM6.76821 18C5.79039 18 5 17.2096 5 16.2318C5 15.254 5.79039 14.4636 6.76821 14.4636C7.74602 14.4636 8.53641 15.254 8.53641 16.2318C8.53641 17.2096 7.74602 18 6.76821 18ZM13 11.7682C12.0221 11.7682 11.2318 10.9778 11.2318 10C11.2318 9.02218 12.0221 8.23179 13 8.23179C13.9778 8.23179 14.7682 9.02218 14.7682 10C14.7682 10.9778 13.9778 11.7682 13 11.7682ZM6.76821 11.7682C5.79039 11.7682 5 10.9778 5 10C5 9.02218 5.79039 8.23179 6.76821 8.23179C7.74602 8.23179 8.53641 9.02218 8.53641 10C8.53641 10.9778 7.74602 11.7682 6.76821 11.7682ZM13 5.53641C12.0221 5.53641 11.2318 4.74426 11.2318 3.76821C11.2318 2.79039 12.0221 2 13 2C13.9778 2 14.7682 2.79039 14.7682 3.76821C14.7682 4.74426 13.9778 5.53641 13 5.53641ZM6.76821 5.53641C5.79039 5.53641 5 4.74602 5 3.76821C5 2.79039 5.79039 2 6.76821 2C7.74602 2 8.53641 2.79039 8.53641 3.76821C8.53641 4.74602 7.74602 5.53641 6.76821 5.53641Z" fill="currentColor"/>
    </svg>
  );
};

export default Menu4Icon;
