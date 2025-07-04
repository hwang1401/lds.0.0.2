import React from 'react';

export interface LineIconsArrowCircleRightIconProps {
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
 * LineIconsArrowCircleRightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowCircleRightIcon: React.FC<LineIconsArrowCircleRightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4995 10.0038C13.4995 10.0024 13.5002 10.0017 13.5002 10.0003C13.5002 9.97718 13.489 9.95828 13.4869 9.93588C13.4813 9.86868 13.4729 9.80148 13.447 9.73848C13.4281 9.69088 13.3959 9.65308 13.3672 9.61108C13.3455 9.58028 13.3336 9.54458 13.307 9.51658L11.3029 7.41658C11.0355 7.13658 10.5931 7.12678 10.3131 7.39348C10.0338 7.66018 10.0233 8.10328 10.29 8.38328L11.165 9.30028H7.20015C6.81375 9.30028 6.50015 9.61318 6.50015 10.0003C6.50015 10.3867 6.81375 10.7003 7.20015 10.7003H11.1104L10.2053 11.6054C9.93155 11.8784 9.93155 12.3215 10.2053 12.5952C10.3418 12.7317 10.521 12.8003 10.7002 12.8003C10.8794 12.8003 11.0586 12.7317 11.1951 12.5952L13.2951 10.4952C13.3588 10.4315 13.4106 10.3545 13.4456 10.2698C13.4813 10.1851 13.4988 10.0948 13.4995 10.0038ZM9.99981 15.6C6.91211 15.6 4.39981 13.0877 4.39981 10C4.39981 6.9123 6.91211 4.4 9.99981 4.4C13.0875 4.4 15.5998 6.9123 15.5998 10C15.5998 13.0877 13.0875 15.6 9.99981 15.6ZM10.0002 3C6.14035 3 3.00015 6.1402 3.00015 10C3.00015 13.8598 6.14035 17 10.0002 17C13.86 17 17.0002 13.8598 17.0002 10C17.0002 6.1402 13.86 3 10.0002 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowCircleRightIcon;
