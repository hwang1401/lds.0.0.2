import React from 'react';

export interface LineIconsCloseSquareIconProps {
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
 * LineIconsCloseSquareIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCloseSquareIcon: React.FC<LineIconsCloseSquareIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1055 7.89458C11.8014 7.59047 11.3098 7.59047 11.0057 7.89458L10 8.90025L8.99436 7.89458C8.69025 7.59047 8.1987 7.59047 7.89459 7.89458C7.59048 8.19869 7.59048 8.69025 7.89459 8.99436L8.90025 10L7.89459 11.0057C7.59048 11.3098 7.59048 11.8014 7.89459 12.1055C8.04625 12.2571 8.24537 12.3334 8.44448 12.3334C8.64359 12.3334 8.8427 12.2571 8.99436 12.1055L10 11.0998L11.0057 12.1055C11.1574 12.2571 11.3565 12.3334 11.5556 12.3334C11.7547 12.3334 11.9538 12.2571 12.1055 12.1055C12.4096 11.8014 12.4096 11.3098 12.1055 11.0057L11.0998 10L12.1055 8.99436C12.4096 8.69025 12.4096 8.19869 12.1055 7.89458ZM15.4441 14.6667C15.4441 15.096 15.0956 15.4445 14.6663 15.4445H5.33295C4.90362 15.4445 4.55518 15.096 4.55518 14.6667V5.33335C4.55518 4.90402 4.90362 4.55557 5.33295 4.55557H14.6663C15.0956 4.55557 15.4441 4.90402 15.4441 5.33335V14.6667ZM14.6667 3H5.33333C4.04689 3 3 4.04689 3 5.33333V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V5.33333C17 4.04689 15.9531 3 14.6667 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCloseSquareIcon;
