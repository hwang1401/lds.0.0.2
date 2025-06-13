import React from 'react';

export interface StopCircleIconProps {
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
 * StopCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const StopCircleIcon: React.FC<StopCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.59955 11.4H11.3995V8.60001H8.59955V11.4ZM11.9247 7.2H8.07469C7.59239 7.2 7.19969 7.5927 7.19969 8.075V11.925C7.19969 12.4073 7.59239 12.8 8.07469 12.8H11.9247C12.407 12.8 12.7997 12.4073 12.7997 11.925V8.075C12.7997 7.5927 12.407 7.2 11.9247 7.2ZM9.99955 15.6C6.91186 15.6 4.39956 13.0877 4.39956 10C4.39956 6.91232 6.91186 4.40002 9.99955 4.40002C13.0872 4.40002 15.5995 6.91232 15.5995 10C15.5995 13.0877 13.0872 15.6 9.99955 15.6ZM9.99983 3.00003C6.14004 3.00003 2.99985 6.14022 2.99985 10C2.99985 13.8598 6.14004 17 9.99983 17C13.8596 17 16.9998 13.8598 16.9998 10C16.9998 6.14022 13.8596 3.00003 9.99983 3.00003Z" fill="currentColor"/>
    </svg>
  );
};

export default StopCircleIcon;
