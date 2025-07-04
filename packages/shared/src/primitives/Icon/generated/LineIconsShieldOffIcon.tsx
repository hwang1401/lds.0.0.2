import React from 'react';

export interface LineIconsShieldOffIconProps {
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
 * LineIconsShieldOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsShieldOffIcon: React.FC<LineIconsShieldOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7616 2.20679L16.2066 5.40493C16.6966 5.69324 16.9999 6.23573 16.9999 6.82046V6.93822C16.9999 9.20161 16.3971 11.3773 15.3184 13.2574L14.179 12.066C14.9918 10.5189 15.4444 8.76144 15.4444 6.93822V6.82046L10.0002 3.62232L7.49895 5.09145L6.35645 3.89925L9.23721 2.20679C9.70853 1.93148 10.2926 1.93067 10.7616 2.20679ZM4.32781 2.92891C4.02371 2.61137 3.53217 2.61137 3.22807 2.92891C2.92398 3.24645 2.92398 3.75971 3.22807 4.07725L15.672 17.0712C15.8237 17.2296 16.0228 17.3092 16.2219 17.3092C16.421 17.3092 16.6201 17.2296 16.7717 17.0712C17.0758 16.7537 17.0758 16.2404 16.7717 15.9229L4.32781 2.92891ZM10.2346 16.2401L9.99971 16.3782L9.76483 16.2401C6.55196 14.3519 4.55549 10.7875 4.55549 6.93805V6.82029L4.68304 6.74558L3.56931 5.58181C3.21855 5.88716 3 6.33464 3 6.82029V6.93805C3 11.3739 5.29979 15.48 9.00264 17.6548L9.2383 17.7937C9.47317 17.9318 9.73605 18 9.99971 18C10.2634 18 10.527 17.931 10.7627 17.7929L10.9968 17.6548C11.8702 17.1424 12.6612 16.5195 13.3666 15.8129L12.2668 14.6646C11.661 15.268 10.982 15.8008 10.2346 16.2401Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsShieldOffIcon;
