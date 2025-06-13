import React from 'react';

export interface PlayCircleIconProps {
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
 * PlayCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PlayCircleIcon: React.FC<PlayCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.64985 11.8198V8.18037L11.6162 9.99972L9.64985 11.8198ZM10.2373 6.81671C9.88869 6.49331 9.37978 6.4093 8.94157 6.60181C8.51455 6.78801 8.24995 7.18632 8.24995 7.64063V12.3594C8.24995 12.8138 8.51455 13.2121 8.94157 13.3983C9.09767 13.4669 9.26357 13.4998 9.42668 13.4998C9.72278 13.4998 10.0133 13.3913 10.2366 13.1841L12.7861 10.825C13.0178 10.6108 13.1501 10.3105 13.1501 9.99969C13.1501 9.68958 13.0178 9.38857 12.7861 9.17507L10.2373 6.81671ZM9.99985 15.6001C6.91208 15.6001 4.39972 13.0878 4.39972 10C4.39972 6.91224 6.91208 4.39988 9.99985 4.39988C13.0876 4.39988 15.6 6.91224 15.6 10C15.6 13.0878 13.0876 15.6001 9.99985 15.6001ZM9.99983 2.99985C6.13994 2.99985 2.99966 6.14012 2.99966 10C2.99966 13.8599 6.13994 17.0002 9.99983 17.0002C13.8597 17.0002 17 13.8599 17 10C17 6.14012 13.8597 2.99985 9.99983 2.99985Z" fill="currentColor"/>
    </svg>
  );
};

export default PlayCircleIcon;
