import React from 'react';

export interface LineIconsFlashOnIconProps {
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
 * LineIconsFlashOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFlashOnIcon: React.FC<LineIconsFlashOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.79443 10.5817H10.0001C10.1776 10.5817 10.347 10.6697 10.4651 10.8232C10.5832 10.9766 10.6401 11.1817 10.6214 11.3868L10.3407 14.405L13.2058 9.41808H10.0001C9.82261 9.41808 9.65323 9.33008 9.5351 9.17662C9.41635 9.02317 9.35948 8.81807 9.37885 8.61298L9.65948 5.59549L6.79443 10.5817ZM9.44437 18C9.37311 18 9.30124 17.9862 9.23061 17.9564C8.96061 17.8415 8.79186 17.5273 8.82311 17.1949L9.30374 12.0363H5.62493C5.3943 12.0363 5.18242 11.8887 5.07367 11.6523C4.96492 11.4152 4.97742 11.1279 5.10555 10.9046L10.0363 2.32345C10.1956 2.04417 10.4981 1.92926 10.7688 2.04417C11.0394 2.15836 11.2081 2.47327 11.1769 2.80564L10.6963 7.96352H14.3751C14.6057 7.96352 14.8176 8.11188 14.9263 8.34825C15.0351 8.58534 15.0226 8.87189 14.8945 9.09517L9.96375 17.6771C9.84562 17.8836 9.64812 18 9.44437 18Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFlashOnIcon;
