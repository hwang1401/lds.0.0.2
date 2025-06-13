import React from 'react';

export interface LineIconsThermometerPlusIconProps {
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
 * LineIconsThermometerPlusIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsThermometerPlusIcon: React.FC<LineIconsThermometerPlusIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8824 3.6C12.4278 3.6 12.0589 3.9592 12.0589 4.4V11.232C12.0589 11.5184 11.9016 11.7832 11.6455 11.9256C10.8845 12.3504 10.4118 13.1456 10.4118 14C10.4118 15.3232 11.5203 16.4 12.8824 16.4C14.2445 16.4 15.353 15.3232 15.353 14C15.353 13.1456 14.8803 12.3504 14.1194 11.9256C13.8633 11.7832 13.706 11.5184 13.706 11.232V4.4C13.706 4.1864 13.6211 3.9896 13.4696 3.8448C13.3057 3.6816 13.1023 3.6 12.8824 3.6ZM12.8825 18C10.612 18 8.76487 16.2056 8.76487 14C8.76487 12.736 9.38581 11.5504 10.4119 10.8024V4.4C10.4119 3.0768 11.5204 2 12.8825 2C13.5512 2 14.1722 2.2536 14.6342 2.7136C15.0929 3.1472 15.3531 3.7512 15.3531 4.4V10.8024C16.3792 11.5504 17.0002 12.736 17.0002 14C17.0002 16.2056 15.153 18 12.8825 18ZM4.64697 6.00098H3.82353C3.37059 6.00098 3 5.64076 3 5.2005C3 4.76023 3.37059 4.40001 3.82353 4.40001H4.64697V3.60001C4.64697 3.16001 5.01756 2.80001 5.4705 2.80001C5.92344 2.80001 6.29403 3.16001 6.29403 3.60001V4.40001H7.11765C7.57059 4.40001 7.94118 4.76023 7.94118 5.2005C7.94118 5.64076 7.57059 6.00098 7.11765 6.00098H6.29403V6.80001C6.29403 7.24001 5.92344 7.60001 5.4705 7.60001C5.01756 7.60001 4.64697 7.24001 4.64697 6.80001V6.00098Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsThermometerPlusIcon;
