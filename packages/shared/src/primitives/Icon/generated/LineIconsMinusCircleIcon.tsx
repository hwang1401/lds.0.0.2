import React from 'react';

export interface LineIconsMinusCircleIconProps {
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
 * LineIconsMinusCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMinusCircleIcon: React.FC<LineIconsMinusCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1001 9.29997H7.89996C7.51495 9.29997 7.19994 9.61498 7.19994 9.99999C7.19994 10.385 7.51495 10.7 7.89996 10.7H12.1001C12.4851 10.7 12.8001 10.385 12.8001 9.99999C12.8001 9.61498 12.4851 9.29997 12.1001 9.29997ZM9.99987 15.6001C6.9121 15.6001 4.39974 13.0878 4.39974 10C4.39974 6.91224 6.9121 4.39988 9.99987 4.39988C13.0876 4.39988 15.6 6.91224 15.6 10C15.6 13.0878 13.0876 15.6001 9.99987 15.6001ZM9.99984 2.99985C6.13995 2.99985 2.99968 6.14012 2.99968 10C2.99968 13.8599 6.13995 17.0002 9.99984 17.0002C13.8597 17.0002 17 13.8599 17 10C17 6.14012 13.8597 2.99985 9.99984 2.99985Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMinusCircleIcon;
