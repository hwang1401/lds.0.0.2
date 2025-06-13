import React from 'react';

export interface LineIconsArrowDiagonalRightUpIconProps {
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
 * LineIconsArrowDiagonalRightUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowDiagonalRightUpIcon: React.FC<LineIconsArrowDiagonalRightUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.9918 4.22385C16.9918 3.58337 16.4739 3.06189 15.8322 3.05839L6.50738 3.00006H6.50038C5.85874 3.00006 5.33842 3.51804 5.33376 4.15969C5.32909 4.80366 5.84824 5.32981 6.49338 5.33331L12.9775 5.37414L3.34233 15.0081C2.88618 15.4643 2.88618 16.2028 3.34233 16.6577C3.56982 16.8864 3.86847 16.9996 4.16713 16.9996C4.46579 16.9996 4.76444 16.8864 4.99193 16.6577L14.6609 6.98875L14.6668 13.5009C14.6668 14.1448 15.1894 14.6663 15.8334 14.6663H15.8345C16.4785 14.6663 17 14.1425 17 13.4985L16.9918 4.22385Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowDiagonalRightUpIcon;
