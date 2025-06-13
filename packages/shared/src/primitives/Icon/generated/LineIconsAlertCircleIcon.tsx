import React from 'react';

export interface LineIconsAlertCircleIconProps {
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
 * LineIconsAlertCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsAlertCircleIcon: React.FC<LineIconsAlertCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.29998 7.20001C9.29998 6.81361 9.61358 6.50001 9.99998 6.50001C10.3864 6.50001 10.7 6.81361 10.7 7.20001V10.7C10.7 11.0864 10.3864 11.4 9.99998 11.4C9.61358 11.4 9.29998 11.0864 9.29998 10.7V7.20001ZM9.3 12.8C9.3 12.4136 9.6136 12.1 10 12.1C10.3864 12.1 10.7 12.4136 10.7 12.8C10.7 13.1864 10.3864 13.5 10 13.5C9.6136 13.5 9.3 13.1864 9.3 12.8ZM9.9999 15.6C6.9122 15.6 4.3999 13.0877 4.3999 10C4.3999 6.91231 6.9122 4.40001 9.9999 4.40001C13.0876 4.40001 15.5999 6.91231 15.5999 10C15.5999 13.0877 13.0876 15.6 9.9999 15.6ZM10 3C6.1339 3 3 6.1339 3 10C3 13.8661 6.1339 17 10 17C13.8661 17 17 13.8661 17 10C17 6.1339 13.8661 3 10 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsAlertCircleIcon;
