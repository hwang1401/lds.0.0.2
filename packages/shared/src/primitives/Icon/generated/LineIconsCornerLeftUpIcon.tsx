import React from 'react';

export interface LineIconsCornerLeftUpIconProps {
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
 * LineIconsCornerLeftUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerLeftUpIcon: React.FC<LineIconsCornerLeftUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16 15.1333H11.0001C10.4491 15.1333 10.0001 14.7143 10.0001 14.2V5.8756L13.375 8.3956C13.56 8.5328 13.78 8.6 14 8.6C14.292 8.6 14.583 8.48053 14.781 8.25C15.126 7.8468 15.056 7.25973 14.625 6.93773L9.62508 3.2044C9.25908 2.93187 8.74109 2.93187 8.37509 3.2044L3.37515 6.93773C2.94415 7.25973 2.87415 7.8468 3.21915 8.25C3.56314 8.65227 4.19414 8.71667 4.62513 8.3956L8.0001 5.8756V14.2C8.0001 15.7437 9.34608 17 11.0001 17H16C16.552 17 17 16.5819 17 16.0667C17 15.5515 16.552 15.1333 16 15.1333Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerLeftUpIcon;
