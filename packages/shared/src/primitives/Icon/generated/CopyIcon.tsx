import React from 'react';

export interface CopyIconProps {
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
 * CopyIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CopyIcon: React.FC<CopyIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.66682 10.7778V10C7.66682 8.71357 8.71371 7.66668 10.0002 7.66668H10.7778V5.07433C10.7778 4.78811 10.5452 4.55556 10.259 4.55556H5.07433C4.78811 4.55556 4.55556 4.78811 4.55556 5.07433V10.259C4.55556 10.5452 4.78811 10.7778 5.07433 10.7778H7.66682ZM7.66682 12.3333H5.07433C3.93022 12.3333 3 11.4031 3 10.259V5.07433C3 3.93022 3.93022 3 5.07433 3H10.259C11.4031 3 12.3333 3.93022 12.3333 5.07433V7.66668H14.6668C15.9533 7.66668 17.0002 8.71357 17.0002 10V14.6667C17.0002 15.9531 15.9533 17 14.6668 17H10.0002C8.71371 17 7.66682 15.9531 7.66682 14.6667V12.3333ZM9.22195 9.99997C9.22195 9.57142 9.57117 9.2222 9.99973 9.2222H14.6664C15.0957 9.2222 15.4442 9.57142 15.4442 9.99997V14.6666C15.4442 15.0952 15.0957 15.4444 14.6664 15.4444H9.99973C9.57117 15.4444 9.22195 15.0952 9.22195 14.6666V9.99997Z" fill="currentColor"/>
    </svg>
  );
};

export default CopyIcon;
