import React from 'react';

export interface LineIconsCornerUpRightIconProps {
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
 * LineIconsCornerUpRightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerUpRightIcon: React.FC<LineIconsCornerUpRightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7954 8.37535L13.0621 3.37555C12.7382 2.94457 12.1521 2.87358 11.7498 3.21956C11.3476 3.56355 11.2822 4.19352 11.6042 4.6245L14.1252 8.00037H5.79985C4.25518 8.00037 2.99985 9.34531 2.99985 11.0002V16C2.99985 16.552 3.41798 17 3.93318 17C4.44838 17 4.86651 16.552 4.86651 16V11.0002C4.86651 10.4483 5.28465 10.0003 5.79985 10.0003H14.1252L11.6042 13.3751C11.2822 13.8061 11.3476 14.4361 11.7498 14.7801C11.9216 14.9281 12.1278 15.0001 12.3322 15.0001C12.6066 15.0001 12.8773 14.8711 13.0621 14.6241L16.7954 9.6243C17.068 9.25932 17.068 8.74034 16.7954 8.37535Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerUpRightIcon;
