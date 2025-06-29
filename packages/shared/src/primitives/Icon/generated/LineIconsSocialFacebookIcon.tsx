import React from 'react';

export interface LineIconsSocialFacebookIconProps {
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
 * LineIconsSocialFacebookIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsSocialFacebookIcon: React.FC<LineIconsSocialFacebookIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.38483 16.4H10.5387V11.44C10.5387 10.9976 11.02 10.64 11.6156 10.64H14.0279L14.5071 9.36002H11.6156C11.02 9.36002 10.5387 9.00242 10.5387 8.56002V6.40002C10.5387 5.56162 11.5047 4.88002 12.6925 4.88002H14.8463V3.60002H12.6925C10.3168 3.60002 8.38483 4.85602 8.38483 6.40002V8.56002C8.38483 9.00242 7.90344 9.36002 7.30791 9.36002H5.15407V10.64H7.30791C7.90344 10.64 8.38483 10.9976 8.38483 11.44V16.4ZM11.6155 18H7.30785C6.71232 18 6.23094 17.6424 6.23094 17.2V12.24H4.0771C3.48157 12.24 3.00018 11.8824 3.00018 11.44V8.55998C3.00018 8.11758 3.48157 7.75998 4.0771 7.75998H6.23094V6.39998C6.23094 3.97438 9.12892 1.99998 12.6924 1.99998H15.9232C16.5187 1.99998 17.0001 2.35758 17.0001 2.79998V5.67998C17.0001 6.12158 16.5187 6.47998 15.9232 6.47998H12.6924V7.75998H15.9232C16.2592 7.75998 16.5769 7.87758 16.7804 8.07598C16.984 8.27518 17.0507 8.53358 16.9613 8.77438L15.8844 11.6536C15.7552 12 15.3298 12.24 14.8463 12.24H12.6924V17.2C12.6924 17.6424 12.2111 18 11.6155 18Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsSocialFacebookIcon;
