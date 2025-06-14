import React from 'react';

export interface LineIconsSkipForwardIconProps {
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
 * LineIconsSkipForwardIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsSkipForwardIcon: React.FC<LineIconsSkipForwardIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.66666 14.5587V5.35092L12.096 9.99795L5.66666 14.5587ZM15.6668 3.00176C14.9308 3.00176 14.3335 3.52315 14.3335 4.16818V8.62159C14.2708 8.56444 14.2162 8.50495 14.1442 8.45362L7.34549 3.53831C6.53349 2.95277 5.37615 2.83379 4.40015 3.23621C3.53615 3.59313 3.00015 4.30115 3.00015 5.08616V14.9144C3.00015 15.6995 3.53615 16.4075 4.40015 16.7644C4.78549 16.9219 5.19882 17 5.60815 17C6.23615 17 6.85482 16.8169 7.34549 16.4611L14.1455 11.547C14.2162 11.4957 14.2708 11.435 14.3335 11.3779V15.8324C14.3335 16.4775 14.9308 16.9988 15.6668 16.9988C16.4028 16.9988 17.0002 16.4775 17.0002 15.8324V4.16818C17.0002 3.52315 16.4028 3.00176 15.6668 3.00176Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsSkipForwardIcon;
