import React from 'react';

export interface PauseCircleIconProps {
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
 * PauseCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PauseCircleIcon: React.FC<PauseCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.19992 7.89994C7.19992 7.51493 7.51493 7.19992 7.89994 7.19992C8.28495 7.19992 8.59996 7.51493 8.59996 7.89994V12.1C8.59996 12.485 8.28495 12.8001 7.89994 12.8001C7.51493 12.8001 7.19992 12.485 7.19992 12.1V7.89994ZM11.3997 7.89994C11.3997 7.51494 11.7147 7.19993 12.0997 7.19993C12.4847 7.19993 12.7997 7.51494 12.7997 7.89994V12.1C12.7997 12.4851 12.4847 12.8001 12.0997 12.8001C11.7147 12.8001 11.3997 12.4851 11.3997 12.1V7.89994ZM9.99985 15.6001C6.91208 15.6001 4.39972 13.0878 4.39972 10C4.39972 6.91224 6.91208 4.39988 9.99985 4.39988C13.0876 4.39988 15.6 6.91224 15.6 10C15.6 13.0878 13.0876 15.6001 9.99985 15.6001ZM9.99983 2.99985C6.13994 2.99985 2.99966 6.14012 2.99966 10C2.99966 13.8599 6.13994 17.0002 9.99983 17.0002C13.8597 17.0002 17 13.8599 17 10C17 6.14012 13.8597 2.99985 9.99983 2.99985Z" fill="currentColor"/>
    </svg>
  );
};

export default PauseCircleIcon;
