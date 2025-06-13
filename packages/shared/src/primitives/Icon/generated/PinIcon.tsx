import React from 'react';

export interface PinIconProps {
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
 * PinIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PinIcon: React.FC<PinIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.83334 9.19959C9.16141 9.19959 8.61459 8.66119 8.61459 7.99959C8.61459 7.33799 9.16141 6.79959 9.83334 6.79959C10.5053 6.79959 11.0521 7.33799 11.0521 7.99959C11.0521 8.66119 10.5053 9.19959 9.83334 9.19959ZM9.83334 5.19958C8.26522 5.19958 6.98959 6.45559 6.98959 7.99959C6.98959 9.54359 8.26522 10.7996 9.83334 10.7996C11.4015 10.7996 12.6771 9.54359 12.6771 7.99959C12.6771 6.45559 11.4015 5.19958 9.83334 5.19958ZM9.83334 16.1168C8.47241 14.8496 4.95834 11.292 4.95834 8.33758C4.95834 5.72558 7.14478 3.59998 9.83334 3.59998C12.5219 3.59998 14.7083 5.72558 14.7083 8.33758C14.7083 11.292 11.1943 14.8496 9.83334 16.1168ZM9.83334 2C6.24941 2 3.33334 4.8424 3.33334 8.3376C3.33334 12.7176 9.06066 17.6008 9.30441 17.8064C9.45716 17.9352 9.64484 18 9.83334 18C10.0218 18 10.2095 17.9352 10.3623 17.8064C10.606 17.6008 16.3333 12.7176 16.3333 8.3376C16.3333 4.8424 13.4173 2 9.83334 2Z" fill="currentColor"/>
    </svg>
  );
};

export default PinIcon;
