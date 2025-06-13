import React from 'react';

export interface ToDoListSelectedIconProps {
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
 * ToDoListSelectedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ToDoListSelectedIcon: React.FC<ToDoListSelectedIconProps> = ({
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
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={combinedStyle}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <path d="M21.5 2.33337H7.50002C6.21136 2.33337 5.16669 3.37804 5.16669 4.66671V23.3334C5.16669 24.6221 6.21136 25.6667 7.50002 25.6667H21.5C22.7887 25.6667 23.8334 24.6221 23.8334 23.3334V4.66671C23.8334 3.37804 22.7887 2.33337 21.5 2.33337Z" fill="#009FE9"/>
<path d="M12.7383 9.33337H8.08333C7.76117 9.33337 7.5 9.59454 7.5 9.91671V11.0834C7.5 11.4055 7.76117 11.6667 8.08333 11.6667H12.7383C13.0605 11.6667 13.3217 11.4055 13.3217 11.0834V9.91671C13.3217 9.59454 13.0605 9.33337 12.7383 9.33337Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.0001 10.0167L20.6752 7.34167L22.3251 8.9916L18.0001 13.3165L14.8419 10.1583L16.4918 8.50834L18.0001 10.0167Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.0001 17.0167L20.6752 14.3417L22.3251 15.9916L18.0001 20.3165L14.8419 17.1582L16.4918 15.5083L18.0001 17.0167Z" fill="white"/>
<path d="M12.7498 16.3334H8.09475C7.77257 16.3334 7.51141 16.5946 7.51141 16.9167V18.1184C7.51141 18.4405 7.77257 18.7017 8.09475 18.7017H12.7498C13.0719 18.7017 13.3331 18.4405 13.3331 18.1184V16.9167C13.3331 16.5946 13.0719 16.3334 12.7498 16.3334Z" fill="white"/>
    </svg>
  );
};

export default ToDoListSelectedIcon;
