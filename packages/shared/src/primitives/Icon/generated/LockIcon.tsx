import React from 'react';

export interface LockIconProps {
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
 * LockIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LockIcon: React.FC<LockIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99983 13.2C9.51683 13.2 9.12483 12.8416 9.12483 12.4C9.12483 11.9584 9.51683 11.6 9.99983 11.6C10.4828 11.6 10.8748 11.9584 10.8748 12.4C10.8748 12.8416 10.4828 13.2 9.99983 13.2ZM9.99983 10C8.55258 10 7.37483 11.0768 7.37483 12.4C7.37483 13.7232 8.55258 14.8 9.99983 14.8C11.4471 14.8 12.6248 13.7232 12.6248 12.4C12.6248 11.0768 11.4471 10 9.99983 10ZM15.2498 15.6C15.2498 16.0416 14.8578 16.4 14.3748 16.4H5.62483C5.14183 16.4 4.74983 16.0416 4.74983 15.6V9.19999C4.74983 8.75839 5.14183 8.39999 5.62483 8.39999H6.49983H8.24983H11.7498H13.4998H14.3748C14.8578 8.39999 15.2498 8.75839 15.2498 9.19999V15.6ZM8.24983 5.28878C8.24983 4.35758 9.03471 3.59998 9.99983 3.59998C10.965 3.59998 11.7498 4.35758 11.7498 5.28878V6.79998H8.24983V5.28878ZM14.3748 6.8H13.4998V5.2888C13.4998 3.476 11.9301 2 9.99983 2C8.06958 2 6.49983 3.476 6.49983 5.2888V6.8H5.62483C4.17758 6.8 2.99983 7.8768 2.99983 9.2V15.6C2.99983 16.9232 4.17758 18 5.62483 18H14.3748C15.8221 18 16.9998 16.9232 16.9998 15.6V9.2C16.9998 7.8768 15.8221 6.8 14.3748 6.8Z" fill="currentColor"/>
    </svg>
  );
};

export default LockIcon;
