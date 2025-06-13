import React from 'react';

export interface ColorPickerIconProps {
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
 * ColorPickerIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ColorPickerIcon: React.FC<ColorPickerIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5498 8.81048L11.1906 6.45112L12.8637 4.77875L15.2211 7.13635L13.5498 8.81048ZM7.44468 14.9216L4.8405 15.1587L5.07152 12.5718L9.95348 7.6886L12.3126 10.048L7.44468 14.9216ZM16.4786 5.9182L14.081 3.52121C13.4098 2.84911 12.3431 2.8246 11.7061 3.4617L9.95331 5.21372L8.86911 4.12943C8.52784 3.78812 7.97392 3.78812 7.63177 4.12943C7.2905 4.4716 7.2905 5.02556 7.63177 5.36686L8.71598 6.45115L3.83313 11.3344C3.54874 11.6188 3.37198 11.9969 3.33523 12.3968L3.00358 16.0461C2.98083 16.3043 3.07271 16.5598 3.25647 16.7436C3.42186 16.909 3.645 17 3.87514 17C3.90226 17 3.92852 16.9991 3.95477 16.9965L7.60377 16.6657C8.00368 16.6289 8.3817 16.4513 8.6661 16.1669L13.5489 11.2845L14.6323 12.3679C14.8038 12.5394 15.0269 12.6243 15.2509 12.6243C15.4749 12.6243 15.699 12.5394 15.8696 12.3679C16.2117 12.0266 16.2117 11.4727 15.8696 11.1305L14.7863 10.0471L16.5381 8.29418C17.1769 7.65621 17.1498 6.5903 16.4786 5.9182Z" fill="currentColor"/>
    </svg>
  );
};

export default ColorPickerIcon;
