import React from 'react';

export interface LineIconsCornerUpLeftIconProps {
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
 * LineIconsCornerUpLeftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerUpLeftIcon: React.FC<LineIconsCornerUpLeftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.2 8.00003H5.8756L8.3956 4.62504C8.7176 4.19304 8.65227 3.56404 8.25 3.21904C7.84773 2.87504 7.25973 2.94304 6.93773 3.37504L3.2044 8.37503C2.93187 8.74103 2.93187 9.25902 3.2044 9.62502L6.93773 14.625C7.12253 14.872 7.3932 15 7.66667 15C7.872 15 8.07733 14.928 8.25 14.781C8.65227 14.436 8.7176 13.807 8.3956 13.375L5.8756 10H14.2C14.7143 10 15.1333 10.449 15.1333 11V16C15.1333 16.552 15.5515 17 16.0667 17C16.5819 17 17 16.552 17 16V11C17 9.34602 15.7437 8.00003 14.2 8.00003Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerUpLeftIcon;
