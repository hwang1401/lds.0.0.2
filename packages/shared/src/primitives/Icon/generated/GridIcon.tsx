import React from 'react';

export interface GridIconProps {
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
 * GridIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const GridIcon: React.FC<GridIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3332 15.4444V12.3333H15.4443L15.4451 15.4444H12.3332ZM15.4445 10.7778H12.3334C11.4755 10.7778 10.7779 11.4755 10.7779 12.3334V15.4445C10.7779 16.3024 11.4755 17 12.3334 17H15.4445C16.3024 17 17.0001 16.3024 17.0001 15.4445V12.3334C17.0001 11.4755 16.3024 10.7778 15.4445 10.7778ZM4.55529 15.4444V12.3333H7.6664L7.66718 15.4444H4.55529ZM7.66667 10.7778H4.55556C3.69767 10.7778 3 11.4755 3 12.3334V15.4445C3 16.3024 3.69767 17 4.55556 17H7.66667C8.52456 17 9.22222 16.3024 9.22222 15.4445V12.3334C9.22222 11.4755 8.52456 10.7778 7.66667 10.7778ZM12.3332 7.66667V4.55556H15.4443L15.4451 7.66667H12.3332ZM15.4445 3H12.3334C11.4755 3 10.7779 3.69767 10.7779 4.55556V7.66667C10.7779 8.52456 11.4755 9.22222 12.3334 9.22222H15.4445C16.3024 9.22222 17.0001 8.52456 17.0001 7.66667V4.55556C17.0001 3.69767 16.3024 3 15.4445 3ZM4.55529 7.66667V4.55556H7.6664L7.66718 7.66667H4.55529ZM7.66667 3H4.55556C3.69767 3 3 3.69767 3 4.55556V7.66667C3 8.52456 3.69767 9.22222 4.55556 9.22222H7.66667C8.52456 9.22222 9.22222 8.52456 9.22222 7.66667V4.55556C9.22222 3.69767 8.52456 3 7.66667 3Z" fill="currentColor"/>
    </svg>
  );
};

export default GridIcon;
