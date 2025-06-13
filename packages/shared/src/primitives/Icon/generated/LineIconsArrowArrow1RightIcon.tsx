import React from 'react';

export interface LineIconsArrowArrow1RightIconProps {
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
 * LineIconsArrowArrow1RightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrow1RightIcon: React.FC<LineIconsArrowArrow1RightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.36774 3.5V16.5L14.6319 10.0593L5.36774 3.5ZM6.0425 18C5.56494 18 5.08272 17.912 4.63317 17.7307C3.62517 17.3241 2.99983 16.5136 2.99983 15.6164V4.38374C2.99983 3.4879 3.62517 2.67737 4.63317 2.27078C5.77183 1.81086 7.12205 1.94417 8.06939 2.61472L16.0012 8.23239C16.6374 8.68031 16.9998 9.32553 16.9998 10.0001C16.9998 10.6746 16.6374 11.3212 16.0012 11.7691L8.06939 17.3841C7.49694 17.7907 6.77517 18 6.0425 18Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrow1RightIcon;
