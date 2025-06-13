import React from 'react';

export interface LineIconsArrowCircleUpIconProps {
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
 * LineIconsArrowCircleUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowCircleUpIcon: React.FC<LineIconsArrowCircleUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.4951 6.70545C10.4314 6.64105 10.3544 6.58995 10.2697 6.55495C10.185 6.51925 10.0947 6.50105 10.0037 6.50105C10.0023 6.50105 10.0009 6.50035 9.99951 6.50035C9.97431 6.50035 9.95331 6.51155 9.92811 6.51435C9.86371 6.52135 9.79931 6.52835 9.73841 6.55285C9.69011 6.57245 9.65091 6.60535 9.60821 6.63475C9.57811 6.65575 9.54381 6.66765 9.51651 6.69355L7.41651 8.69695C7.13721 8.96435 7.12671 9.40675 7.39341 9.68675C7.66081 9.96675 8.10321 9.97655 8.38321 9.70985L9.29951 8.83555V12.8004C9.29951 13.1868 9.61311 13.5004 9.99951 13.5004C10.3866 13.5004 10.6995 13.1868 10.6995 12.8004V8.89015L11.6046 9.79525C11.7418 9.93175 11.921 10.0004 12.0995 10.0004C12.2787 10.0004 12.4579 9.93175 12.5951 9.79525C12.8681 9.52155 12.8681 9.07845 12.5951 8.80545L10.4951 6.70545ZM9.99984 15.6C6.91214 15.6 4.39984 13.0877 4.39984 10C4.39984 6.9123 6.91214 4.4 9.99984 4.4C13.0875 4.4 15.5998 6.9123 15.5998 10C15.5998 13.0877 13.0875 15.6 9.99984 15.6ZM10.0002 3C6.14038 3 3.00018 6.1402 3.00018 10C3.00018 13.8598 6.14038 17 10.0002 17C13.86 17 17.0002 13.8598 17.0002 10C17.0002 6.1402 13.86 3 10.0002 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowCircleUpIcon;
