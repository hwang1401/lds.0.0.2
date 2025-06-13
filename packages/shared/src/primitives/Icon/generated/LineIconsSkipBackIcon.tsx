import React from 'react';

export interface LineIconsSkipBackIconProps {
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
 * LineIconsSkipBackIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsSkipBackIcon: React.FC<LineIconsSkipBackIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.333 14.6485L7.90366 10.0026L14.333 5.4407V14.6485ZM15.5998 3.23612C14.6212 2.8337 13.4652 2.95268 12.6545 3.53939L5.85451 8.4524C5.78385 8.50372 5.72918 8.56438 5.66651 8.62153V4.1681C5.66651 3.52306 5.06918 3.00167 4.33318 3.00167C3.59718 3.00167 2.99985 3.52306 2.99985 4.1681V15.8324C2.99985 16.4763 3.59718 16.9988 4.33318 16.9988C5.06918 16.9988 5.66651 16.4763 5.66651 15.8324V11.3778C5.72918 11.435 5.78385 11.4956 5.85585 11.5469L12.6545 16.4623C13.1452 16.8157 13.7638 17 14.3918 17C14.8012 17 15.2145 16.9218 15.5998 16.7632C16.4638 16.4075 16.9998 15.6983 16.9998 14.9144V5.08608C16.9998 4.30107 16.4638 3.59188 15.5998 3.23612Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsSkipBackIcon;
