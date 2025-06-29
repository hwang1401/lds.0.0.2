import React from 'react';

export interface LineIconsArrowCircleLeftIconProps {
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
 * LineIconsArrowCircleLeftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowCircleLeftIcon: React.FC<LineIconsArrowCircleLeftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8002 9.3H8.83538L9.71038 8.383C9.97708 8.1037 9.96658 7.6606 9.68728 7.3932C9.40728 7.1272 8.96488 7.137 8.69748 7.417L6.69338 9.517C6.66678 9.545 6.65488 9.58 6.63318 9.6115C6.60448 9.6528 6.57228 9.6906 6.55338 9.7382C6.52748 9.8019 6.51908 9.8684 6.51348 9.9363C6.51138 9.958 6.50018 9.9776 6.50018 10C6.50018 10.0014 6.50088 10.0021 6.50088 10.0035C6.50158 10.0945 6.51908 10.1848 6.55478 10.2702C6.58978 10.3549 6.64158 10.4312 6.70528 10.4956L8.80528 12.5949C8.94178 12.7314 9.12098 12.8 9.30018 12.8C9.47938 12.8 9.65858 12.7314 9.79508 12.5949C10.0688 12.3212 10.0688 11.8788 9.79508 11.6051L8.88998 10.7H12.8002C13.1866 10.7 13.5002 10.3864 13.5002 10C13.5002 9.6136 13.1866 9.3 12.8002 9.3ZM9.99984 15.6C6.91214 15.6 4.39984 13.0877 4.39984 10C4.39984 6.9123 6.91214 4.4 9.99984 4.4C13.0875 4.4 15.5998 6.9123 15.5998 10C15.5998 13.0877 13.0875 15.6 9.99984 15.6ZM10.0002 3C6.14038 3 3.00018 6.1402 3.00018 10C3.00018 13.8598 6.14038 17 10.0002 17C13.86 17 17.0002 13.8598 17.0002 10C17.0002 6.1402 13.86 3 10.0002 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowCircleLeftIcon;
