import React from 'react';

export interface BluetoothIconProps {
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
 * BluetoothIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BluetoothIcon: React.FC<BluetoothIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6665 14.8605V11.6944L12.3111 13.5446L10.6665 14.8605ZM10.6665 5.14758L12.3311 6.49537L10.6665 8.32845V5.14758ZM11.0859 10.0052L13.7625 7.05766C13.9298 6.87256 14.0151 6.61436 13.9978 6.34838C13.9798 6.08162 13.8611 5.84053 13.6711 5.68732L10.5553 3.16441C10.316 2.96842 10.0053 2.94664 9.74531 3.10452C9.49132 3.25929 9.33333 3.56104 9.33333 3.89157V8.71809L7.20475 5.6251C6.97343 5.28913 6.55478 5.23625 6.26746 5.50534C5.98014 5.77365 5.93414 6.26361 6.1648 6.59803L8.4807 9.96321L6.14413 13.4062C5.91547 13.7429 5.96414 14.2313 6.25279 14.4989C6.37545 14.6116 6.52145 14.6661 6.66677 14.6661C6.86277 14.6661 7.05742 14.5657 7.18942 14.3713L9.33333 11.213V16.108C9.33333 16.4377 9.48999 16.7387 9.74198 16.8942C9.85797 16.965 9.9833 17 10.1086 17C10.2633 17 10.4173 16.9463 10.5513 16.8398L13.6458 14.362C13.8358 14.2095 13.9558 13.9692 13.9738 13.7033C13.9925 13.4381 13.9085 13.1799 13.7438 12.9955L11.0859 10.0052Z" fill="currentColor"/>
    </svg>
  );
};

export default BluetoothIcon;
