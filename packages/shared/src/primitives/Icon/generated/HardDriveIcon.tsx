import React from 'react';

export interface HardDriveIconProps {
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
 * HardDriveIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const HardDriveIcon: React.FC<HardDriveIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.11106 13.1108C6.11106 12.6832 6.46106 12.3333 6.88884 12.3333C7.31661 12.3333 7.66661 12.6832 7.66661 13.1108C7.66661 13.5384 7.31661 13.8883 6.88884 13.8883C6.46106 13.8883 6.11106 13.5384 6.11106 13.1108ZM10.0006 12.3333H13.1117C13.5395 12.3333 13.8895 12.6832 13.8895 13.1108C13.8895 13.5384 13.5395 13.8883 13.1117 13.8883H10.0006C9.57281 13.8883 9.22281 13.5384 9.22281 13.1108C9.22281 12.6832 9.57281 12.3333 10.0006 12.3333ZM14.6664 15.4445H5.33307C4.90452 15.4445 4.55529 15.096 4.55529 14.6667V10.7778H15.4442V14.6667C15.4442 15.096 15.095 15.4445 14.6664 15.4445ZM7.15483 4.98567C7.28706 4.72045 7.55383 4.55556 7.85017 4.55556H12.1497C12.4461 4.55556 12.7128 4.72045 12.8451 4.98567L14.9637 9.22223H5.03617L7.15483 4.98567ZM16.8359 9.48822L14.2366 4.28956C13.8391 3.49467 13.0396 3 12.1498 3H7.85022C6.96044 3 6.16089 3.49467 5.76344 4.28956L3.16411 9.48822C3.05678 9.70289 3 9.944 3 10.1836V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V10.1836C17 9.944 16.9432 9.70289 16.8359 9.48822Z" fill="currentColor"/>
    </svg>
  );
};

export default HardDriveIcon;
