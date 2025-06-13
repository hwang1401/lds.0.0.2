import React from 'react';

export interface LineIconsEditEdit1IconProps {
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
 * LineIconsEditEdit1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsEditEdit1Icon: React.FC<LineIconsEditEdit1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5178 8.83275L11.1594 6.47134L12.8641 4.76358L15.2216 7.12412L13.5178 8.83275ZM7.44546 14.919L4.84033 15.1564L5.07135 12.5663L9.98672 7.64459L12.346 10.0069L7.44546 14.919ZM16.4798 5.90529L16.479 5.90441L14.083 3.50532C13.4345 2.85779 12.3206 2.82712 11.7062 3.44486L3.83394 11.3273C3.54867 11.6121 3.3719 11.9906 3.33514 12.3911L3.00349 16.0449C2.98073 16.3034 3.07262 16.5593 3.25639 16.7433C3.42178 16.9089 3.64493 17 3.87507 17C3.9022 17 3.92845 16.9991 3.95471 16.9965L7.60383 16.6644C8.00462 16.6276 8.38178 16.4515 8.66618 16.1667L16.5394 8.28335C17.1764 7.64371 17.1493 6.57647 16.4798 5.90529Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsEditEdit1Icon;
