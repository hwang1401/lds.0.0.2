import React from 'react';

export interface TvIconProps {
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
 * TvIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const TvIcon: React.FC<TvIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4441 15.6C15.4441 16.0416 15.0956 16.4 14.6663 16.4H5.33295C4.90362 16.4 4.55518 16.0416 4.55518 15.6V7.60014C4.55518 7.15855 4.90362 6.80015 5.33295 6.80015H14.6663C15.0956 6.80015 15.4441 7.15855 15.4441 7.60014V15.6ZM14.6667 5.20016H11.8776L13.661 3.36578C13.9651 3.05299 13.9651 2.54739 13.661 2.2346C13.3569 1.9218 12.8653 1.9218 12.5612 2.2346L10 4.86896L7.43878 2.2346C7.13467 1.9218 6.64311 1.9218 6.339 2.2346C6.03489 2.54739 6.03489 3.05299 6.339 3.36578L8.12244 5.20016H5.33333C4.04689 5.20016 3 6.27695 3 7.60013V15.6C3 16.9232 4.04689 18 5.33333 18H14.6667C15.9531 18 17 16.9232 17 15.6V7.60013C17 6.27695 15.9531 5.20016 14.6667 5.20016Z" fill="currentColor"/>
    </svg>
  );
};

export default TvIcon;
