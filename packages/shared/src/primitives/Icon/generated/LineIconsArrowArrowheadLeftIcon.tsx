import React from 'react';

export interface LineIconsArrowArrowheadLeftIconProps {
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
 * LineIconsArrowArrowheadLeftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrowheadLeftIcon: React.FC<LineIconsArrowArrowheadLeftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7685 4.63984L12.2924 10.0109L16.6075 15.373C16.9535 15.803 16.8855 16.432 16.4555 16.779C16.2705 16.928 16.0485 17 15.8285 17C15.5365 17 15.2465 16.872 15.0485 16.627L10.2203 10.6269C9.92228 10.2559 9.92628 9.72491 10.2313 9.3599L15.2315 3.35983C15.5855 2.93482 16.2155 2.87882 16.6405 3.23182C17.0645 3.58483 17.1215 4.21584 16.7685 4.63984ZM8.23222 3.35953C8.58523 2.93552 9.21525 2.87852 9.64026 3.23152C10.0643 3.58553 10.1213 4.21554 9.76827 4.63954L5.29212 10.0106L9.60726 15.3727C9.95327 15.8027 9.88527 16.4327 9.45526 16.7787C9.27025 16.9277 9.04924 16.9997 8.82823 16.9997C8.53623 16.9997 8.24622 16.8727 8.04921 16.6267L3.22105 10.6266C2.92204 10.2556 2.92704 9.72561 3.23205 9.3596L8.23222 3.35953Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrowheadLeftIcon;
