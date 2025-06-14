import React from 'react';

export interface LayersIconProps {
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
 * LayersIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LayersIcon: React.FC<LayersIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.4802 12.7533L10.0003 15.3253L5.52037 12.7533L6.8379 12.1925L9.61297 13.7854C9.73274 13.8546 9.86652 13.8888 10.0003 13.8888C10.1341 13.8888 10.2671 13.8546 10.3876 13.7854L13.1627 12.1917L14.4802 12.7533ZM9.61297 10.6743C9.73274 10.7435 9.86652 10.7777 10.0003 10.7777C10.1341 10.7777 10.2671 10.7435 10.3876 10.6743L13.1627 9.08066L14.4802 9.64221L10.0003 12.2143L5.52037 9.64221L6.8379 9.08066L9.61297 10.6743ZM10.0003 4.6233L14.4802 6.53116L10.0003 9.10323L5.52037 6.53116L10.0003 4.6233ZM16.9987 9.49288C16.9808 9.19811 16.798 8.93911 16.5266 8.82323L14.8528 8.11079L16.6098 7.10203C16.8657 6.95581 17.0158 6.6766 16.9987 6.38182C16.9808 6.08783 16.798 5.82806 16.5266 5.71217L10.3044 3.06232C10.11 2.9791 9.8899 2.9791 9.69545 3.06232L3.47334 5.71217C3.2019 5.82806 3.01912 6.08783 3.00201 6.38182C2.98412 6.6766 3.13501 6.95581 3.39089 7.10203L5.14709 8.11079L3.47334 8.82323C3.2019 8.93911 3.01912 9.19811 3.00201 9.49288C2.98412 9.78766 3.13501 10.0669 3.39089 10.2131L5.14709 11.2219L3.47334 11.9343C3.2019 12.0502 3.01912 12.3092 3.00201 12.6039C2.98412 12.8987 3.13501 13.1779 3.39089 13.3242L9.61301 16.8964C9.73279 16.9656 9.86656 16.9999 10.0003 16.9999C10.1341 16.9999 10.2671 16.9656 10.3877 16.8964L16.6098 13.3242C16.8657 13.1779 17.0158 12.8987 16.9987 12.6039C16.9808 12.3099 16.798 12.0502 16.5273 11.9343L14.8536 11.2211L16.6098 10.2131C16.8657 10.0669 17.0158 9.78766 16.9987 9.49288Z" fill="currentColor"/>
    </svg>
  );
};

export default LayersIcon;
