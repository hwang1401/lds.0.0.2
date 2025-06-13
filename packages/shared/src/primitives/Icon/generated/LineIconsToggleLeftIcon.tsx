import React from 'react';

export interface LineIconsToggleLeftIconProps {
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
 * LineIconsToggleLeftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsToggleLeftIcon: React.FC<LineIconsToggleLeftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.59999 10.8571C7.15839 10.8571 6.79999 10.4731 6.79999 9.99997C6.79999 9.52683 7.15839 9.14283 7.59999 9.14283C8.04159 9.14283 8.39999 9.52683 8.39999 9.99997C8.39999 10.4731 8.04159 10.8571 7.59999 10.8571ZM7.60038 7.42852C6.27718 7.42852 5.20038 8.58223 5.20038 9.99995C5.20038 11.4177 6.27718 12.5714 7.60038 12.5714C8.92358 12.5714 10.0004 11.4177 10.0004 9.99995C10.0004 8.58223 8.92358 7.42852 7.60038 7.42852ZM12.3998 14.2857H7.59979C5.39419 14.2857 3.59979 12.3631 3.59979 9.99999C3.59979 7.63685 5.39419 5.71428 7.59979 5.71428H12.3998C14.6054 5.71428 16.3998 7.63685 16.3998 9.99999C16.3998 12.3631 14.6054 14.2857 12.3998 14.2857ZM12.4002 3.99997H7.60018C4.51298 3.99997 2.00018 6.69226 2.00018 9.99997C2.00018 13.3077 4.51298 16 7.60018 16H12.4002C15.4874 16 18.0002 13.3077 18.0002 9.99997C18.0002 6.69226 15.4874 3.99997 12.4002 3.99997Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsToggleLeftIcon;
