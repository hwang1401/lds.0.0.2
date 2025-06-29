import React from 'react';

export interface ToDoListUnselectedIconProps {
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
 * ToDoListUnselectedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ToDoListUnselectedIcon: React.FC<ToDoListUnselectedIconProps> = ({
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
      <path d="M21.5001 2.33337H7.50008C6.21142 2.33337 5.16675 3.37804 5.16675 4.66671V23.3334C5.16675 24.6221 6.21142 25.6667 7.50008 25.6667H21.5001C22.7888 25.6667 23.8334 24.6221 23.8334 23.3334V4.66671C23.8334 3.37804 22.7888 2.33337 21.5001 2.33337Z" fill="#E0E0E0"/>
<path d="M12.7383 9.33337H8.08333C7.76117 9.33337 7.5 9.59454 7.5 9.91671V11.0834C7.5 11.4055 7.76117 11.6667 8.08333 11.6667H12.7383C13.0605 11.6667 13.3217 11.4055 13.3217 11.0834V9.91671C13.3217 9.59454 13.0605 9.33337 12.7383 9.33337Z" fill="#C2C2C2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.0001 10.0167L20.6751 7.34167L22.325 8.9916L18.0001 13.3165L14.8418 10.1583L16.4917 8.50834L18.0001 10.0167Z" fill="#C2C2C2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.0001 17.0167L20.6751 14.3417L22.325 15.9916L18.0001 20.3165L14.8418 17.1582L16.4917 15.5083L18.0001 17.0167Z" fill="#C2C2C2"/>
<path d="M12.7498 16.3334H8.09481C7.77263 16.3334 7.51147 16.5946 7.51147 16.9167V18.1184C7.51147 18.4405 7.77263 18.7017 8.09481 18.7017H12.7498C13.072 18.7017 13.3332 18.4405 13.3332 18.1184V16.9167C13.3332 16.5946 13.072 16.3334 12.7498 16.3334Z" fill="#C2C2C2"/>
    </svg>
  );
};

export default ToDoListUnselectedIcon;
