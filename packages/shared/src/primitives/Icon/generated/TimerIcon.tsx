import React from 'react';

export interface TimerIconProps {
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
 * TimerIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const TimerIcon: React.FC<TimerIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3333 10.381H10.7777V8.85718C10.7777 8.43585 10.4293 8.09528 9.99995 8.09528C9.57061 8.09528 9.22217 8.43585 9.22217 8.85718V11.1429C9.22217 11.5642 9.57061 11.9048 9.99995 11.9048H12.3333C12.7626 11.9048 13.1111 11.5642 13.1111 11.1429C13.1111 10.7216 12.7626 10.381 12.3333 10.381ZM10 16.2857C7.10511 16.2857 4.75 13.9787 4.75 11.1429C4.75 8.30707 7.10511 6.00002 10 6.00002C12.8949 6.00002 15.25 8.30707 15.25 11.1429C15.25 13.9787 12.8949 16.2857 10 16.2857ZM10.7684 4.32992C10.77 4.31392 10.7778 4.30173 10.7778 4.28573V3.52383H11.5556C11.9849 3.52383 12.3333 3.18326 12.3333 2.76192C12.3333 2.34059 11.9849 2.00002 11.5556 2.00002H8.44444C8.01511 2.00002 7.66667 2.34059 7.66667 2.76192C7.66667 3.18326 8.01511 3.52383 8.44444 3.52383H9.22222V4.28573C9.22222 4.30173 9.23 4.31392 9.23156 4.32992C5.73233 4.7063 3 7.61678 3 11.1429C3 14.9242 6.14067 18 10 18C13.8593 18 17 14.9242 17 11.1429C17 7.61678 14.2677 4.7063 10.7684 4.32992Z" fill="currentColor"/>
    </svg>
  );
};

export default TimerIcon;
