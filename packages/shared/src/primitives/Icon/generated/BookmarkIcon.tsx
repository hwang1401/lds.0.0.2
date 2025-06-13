import React from 'react';

export interface BookmarkIconProps {
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
 * BookmarkIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BookmarkIcon: React.FC<BookmarkIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.82059 13.1158C9.98959 13.1158 10.1596 13.154 10.3126 13.2305L14.9996 15.5868V4.07457C14.9996 3.89591 14.8786 3.7777 14.7996 3.7777H5.19959C5.11959 3.7777 4.99959 3.89591 4.99959 4.07457V15.5406L9.30559 13.2429C9.46459 13.1585 9.64259 13.1158 9.82059 13.1158ZM4 17.9991C3.83 17.9991 3.66 17.9609 3.507 17.8835C3.194 17.7262 3 17.4302 3 17.1102V4.07455C3 2.93061 3.987 2 5.2 2H14.8C16.013 2 17 2.93061 17 4.07455V17.1102C17 17.4267 16.811 17.7191 16.504 17.8782C16.196 18.0382 15.818 18.0409 15.508 17.8844L9.836 15.033L4.514 17.8729C4.356 17.9564 4.178 17.9991 4 17.9991Z" fill="currentColor"/>
    </svg>
  );
};

export default BookmarkIcon;
