import React from 'react';

export interface ToDoListIconProps {
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
 * ToDoListIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ToDoListIcon: React.FC<ToDoListIconProps> = ({
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
      <path d="M15 1.66669H4.99998C4.0795 1.66669 3.33331 2.41288 3.33331 3.33335V16.6667C3.33331 17.5872 4.0795 18.3334 4.99998 18.3334H15C15.9205 18.3334 16.6666 17.5872 16.6666 16.6667V3.33335C16.6666 2.41288 15.9205 1.66669 15 1.66669Z" fill="#E7ECEF"/>
<path d="M8.74167 6.66669H5.41667C5.18655 6.66669 5 6.85324 5 7.08335V7.91669C5 8.1468 5.18655 8.33335 5.41667 8.33335H8.74167C8.97175 8.33335 9.15833 8.1468 9.15833 7.91669V7.08335C9.15833 6.85324 8.97175 6.66669 8.74167 6.66669Z" fill="#C7CED5"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.5001 7.15483L14.4108 5.24408L15.5893 6.4226L12.5001 9.51184L10.2441 7.25593L11.4226 6.07741L12.5001 7.15483Z" fill="#48AFBA"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.5001 12.1548L14.4108 10.2441L15.5893 11.4226L12.5001 14.5118L10.2441 12.2559L11.4226 11.0774L12.5001 12.1548Z" fill="#48AFBA"/>
<path d="M8.74981 11.6667H5.42478C5.19466 11.6667 5.00812 11.8533 5.00812 12.0834V12.9417C5.00812 13.1718 5.19466 13.3584 5.42478 13.3584H8.74981C8.97989 13.3584 9.16648 13.1718 9.16648 12.9417V12.0834C9.16648 11.8533 8.97989 11.6667 8.74981 11.6667Z" fill="#C7CED5"/>
    </svg>
  );
};

export default ToDoListIcon;
