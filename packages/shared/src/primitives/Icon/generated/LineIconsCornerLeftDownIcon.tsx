import React from 'react';

export interface LineIconsCornerLeftDownIconProps {
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
 * LineIconsCornerLeftDownIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerLeftDownIcon: React.FC<LineIconsCornerLeftDownIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3H11.0001C9.34608 3 8.0001 4.25627 8.0001 5.8V14.1244L4.62513 11.6044C4.19414 11.2833 3.56314 11.3477 3.21915 11.75C2.87415 12.1532 2.94415 12.7403 3.37515 13.0623L8.37509 16.7956C8.55809 16.9319 8.77909 17 9.00009 17C9.22108 17 9.44208 16.9319 9.62508 16.7956L14.625 13.0623C15.056 12.7403 15.126 12.1532 14.781 11.75C14.437 11.3477 13.807 11.2824 13.375 11.6044L10.0001 14.1244V5.8C10.0001 5.28573 10.4491 4.86667 11.0001 4.86667H16C16.552 4.86667 17 4.44853 17 3.93333C17 3.41813 16.552 3 16 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerLeftDownIcon;
