import React from 'react';

export interface LineIconsArrowCircleDownIconProps {
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
 * LineIconsArrowCircleDownIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowCircleDownIcon: React.FC<LineIconsArrowCircleDownIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6164 10.2899L10.6993 11.1649V7.19996C10.6993 6.81354 10.3864 6.49992 9.99931 6.49992C9.61289 6.49992 9.29928 6.81354 9.29928 7.19996V11.1103L8.39414 10.2052C8.12113 9.93148 7.678 9.93148 7.40429 10.2052C7.13128 10.4789 7.13128 10.9213 7.40429 11.195L9.50439 13.2944C9.56879 13.3595 9.6465 13.4106 9.7319 13.4463C9.8173 13.482 9.90831 13.5002 9.99931 13.5002C10.0896 13.5002 10.1792 13.4813 10.2632 13.447C10.3059 13.4295 10.3395 13.3994 10.3766 13.3742C10.4123 13.3511 10.4515 13.3371 10.483 13.307L12.5831 11.3028C12.8624 11.0361 12.8729 10.593 12.6062 10.313C12.3388 10.033 11.8964 10.0232 11.6164 10.2899ZM9.99955 15.6003C6.91171 15.6003 4.39929 13.0879 4.39929 10C4.39929 6.91217 6.91171 4.39975 9.99955 4.39975C13.0874 4.39975 15.5998 6.91217 15.5998 10C15.5998 13.0879 13.0874 15.6003 9.99955 15.6003ZM9.99965 2.99969C6.13967 2.99969 2.99933 6.14004 2.99933 10C2.99933 13.86 6.13967 17.0003 9.99965 17.0003C13.8596 17.0003 17 13.86 17 10C17 6.14004 13.8596 2.99969 9.99965 2.99969Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowCircleDownIcon;
