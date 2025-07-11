import React from 'react';

export interface WeightIconProps {
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
 * WeightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const WeightIcon: React.FC<WeightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4443 15.6C15.4443 16.0416 15.0951 16.4 14.6665 16.4H5.33318C4.90463 16.4 4.5554 16.0416 4.5554 15.6V6.79998C4.5554 6.35838 4.90463 5.99998 5.33318 5.99998H6.11096C6.11096 8.20558 7.85552 9.99998 9.99985 9.99998C12.1442 9.99998 13.8887 8.20558 13.8887 5.99998H14.6665C15.0951 5.99998 15.4443 6.35838 15.4443 6.79998V15.6ZM9.22222 3.73759V5.19999C9.22222 5.64239 9.57067 5.99999 10 5.99999C10.4293 5.99999 10.7778 5.64239 10.7778 5.19999V3.73759C11.4957 3.99839 12.0619 4.61359 12.261 5.41679C12.31 5.59359 12.3333 5.78479 12.3333 5.99999C12.3333 7.32319 11.2864 8.39999 10 8.39999C8.71356 8.39999 7.66667 7.32319 7.66667 5.99999C7.66667 5.79039 7.69078 5.60399 7.73744 5.43039C7.73978 5.42079 7.74056 5.41199 7.74289 5.40239L7.746 5.39039C7.942 4.60479 8.50667 3.99679 9.22222 3.73759ZM14.6667 4.39998H13.5607C12.9548 2.96078 11.5688 1.99998 10 1.99998C8.42656 1.99998 7.03744 2.96718 6.43778 4.39998H5.33333C4.04689 4.39998 3 5.47678 3 6.79998V15.6C3 16.9232 4.04689 18 5.33333 18H14.6667C15.9531 18 17 16.9232 17 15.6V6.79998C17 5.47678 15.9531 4.39998 14.6667 4.39998Z" fill="currentColor"/>
    </svg>
  );
};

export default WeightIcon;
