import React from 'react';

export interface ClockIconProps {
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
 * ClockIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ClockIcon: React.FC<ClockIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8001 9.29996H10.7V7.19992C10.7 6.81281 10.3864 6.4999 10 6.4999C9.6136 6.4999 9.29999 6.81281 9.29999 7.19992V9.99998C9.29999 10.3871 9.6136 10.7 10 10.7H12.8001C13.1872 10.7 13.5001 10.3871 13.5001 9.99998C13.5001 9.61287 13.1872 9.29996 12.8001 9.29996ZM9.99987 15.6001C6.9121 15.6001 4.39974 13.0878 4.39974 9.99998C4.39974 6.91221 6.9121 4.39985 9.99987 4.39985C13.0876 4.39985 15.6 6.91221 15.6 9.99998C15.6 13.0878 13.0876 15.6001 9.99987 15.6001ZM9.99984 2.99982C6.13995 2.99982 2.99968 6.14009 2.99968 9.99998C2.99968 13.8599 6.13995 17.0001 9.99984 17.0001C13.8597 17.0001 17 13.8599 17 9.99998C17 6.14009 13.8597 2.99982 9.99984 2.99982Z" fill="currentColor"/>
    </svg>
  );
};

export default ClockIcon;
