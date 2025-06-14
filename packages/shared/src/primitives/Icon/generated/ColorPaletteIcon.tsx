import React from 'react';

export interface ColorPaletteIconProps {
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
 * ColorPaletteIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ColorPaletteIcon: React.FC<ColorPaletteIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.94913 6.15001C8.94913 5.57041 9.41959 5.10001 9.99928 5.10001C10.579 5.10001 11.0494 5.57041 11.0494 6.15001C11.0494 6.72961 10.579 7.20001 9.99928 7.20001C9.41959 7.20001 8.94913 6.72961 8.94913 6.15001ZM11.89 8.07517C11.6002 7.57327 11.7724 6.93067 12.2744 6.64087C12.777 6.35107 13.419 6.52327 13.7089 7.02517C13.9987 7.52777 13.8265 8.16967 13.3245 8.45947C12.8218 8.74927 12.1799 8.57777 11.89 8.07517ZM7.72394 6.64087C7.22196 6.35107 6.57927 6.52327 6.28942 7.02517C5.99958 7.52777 6.17181 8.16967 6.67378 8.45947C7.17645 8.74927 7.81845 8.57777 8.10829 8.07517C8.39813 7.57327 8.22661 6.93067 7.72394 6.64087ZM5.62857 10.9372C5.30372 10.457 5.43044 9.80389 5.91141 9.47979C6.39238 9.15499 7.04488 9.28239 7.36902 9.76259C7.69387 10.2435 7.56645 10.8959 7.08618 11.22C6.60521 11.5448 5.95271 11.4181 5.62857 10.9372ZM12.716 12.1007H11.5608C10.5954 12.1007 9.81055 12.8854 9.81055 13.8507C9.81055 14.2749 9.96737 14.6858 10.2523 15.0078C10.3391 15.1058 10.3678 15.2213 10.337 15.3494C10.3027 15.4929 10.1375 15.586 9.92117 15.6C8.32283 15.5783 6.80571 14.8706 5.75836 13.6589C4.6977 12.4304 4.23283 10.8561 4.44986 9.22652C4.80762 6.54343 7.22087 4.42313 9.94497 4.40003H9.99748C11.6476 4.40003 13.2025 5.03003 14.273 6.13463C15.1747 7.06493 15.6452 8.25142 15.5962 9.47502C15.5409 10.8736 14.1946 12.1007 12.716 12.1007ZM15.2778 5.15953C13.9315 3.77074 11.9698 2.99514 9.93319 3.00004H9.93249C6.47118 3.02944 3.51675 5.62643 3.06238 9.04173C2.79494 11.0437 3.39213 13.0604 4.69922 14.5738C6.00701 16.0886 7.90359 16.9727 9.90169 17H9.92829C10.7684 17 11.5091 16.4491 11.6974 15.6798C11.8368 15.1044 11.6918 14.5206 11.3005 14.0782C11.2431 14.0145 11.2109 13.9312 11.2109 13.8507C11.2109 13.6582 11.3677 13.5007 11.5609 13.5007H12.7161C14.9508 13.5007 16.9104 11.6821 16.9951 9.53033C17.0595 7.92033 16.4497 6.36843 15.2778 5.15953Z" fill="currentColor"/>
    </svg>
  );
};

export default ColorPaletteIcon;
