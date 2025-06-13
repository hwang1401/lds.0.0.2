import React from 'react';

export interface LineIconsThermometerMinusIconProps {
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
 * LineIconsThermometerMinusIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsThermometerMinusIcon: React.FC<LineIconsThermometerMinusIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0587 4.4C12.0587 3.9592 12.4276 3.6 12.8822 3.6C13.1021 3.6 13.3055 3.6816 13.4694 3.8448C13.6209 3.9896 13.7057 4.1864 13.7057 4.4V11.232C13.7057 11.5184 13.863 11.7832 14.1191 11.9256C14.8801 12.3504 15.3528 13.1456 15.3528 14C15.3528 15.3232 14.2443 16.4 12.8822 16.4C11.5201 16.4 10.4116 15.3232 10.4116 14C10.4116 13.1456 10.8843 12.3504 11.6453 11.9256C11.9014 11.7832 12.0587 11.5184 12.0587 11.232V4.4ZM8.76463 14C8.76463 16.2056 10.6118 18 12.8823 18C15.1528 18 16.9999 16.2056 16.9999 14C16.9999 12.736 16.379 11.5504 15.3529 10.8024V4.4C15.3529 3.7512 15.0926 3.1472 14.6339 2.7136C14.1719 2.2536 13.551 2 12.8823 2C11.5202 2 10.4117 3.0768 10.4117 4.4V10.8024C9.38557 11.5504 8.76463 12.736 8.76463 14ZM3.82353 6.00001H7.11765C7.57059 6.00001 7.94118 5.64001 7.94118 5.20001C7.94118 4.76001 7.57059 4.40001 7.11765 4.40001H3.82353C3.37059 4.40001 3 4.76001 3 5.20001C3 5.64001 3.37059 6.00001 3.82353 6.00001Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsThermometerMinusIcon;
