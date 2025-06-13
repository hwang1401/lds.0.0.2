import React from 'react';

export interface LineIconsTrashTrash1IconProps {
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
 * LineIconsTrashTrash1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsTrashTrash1Icon: React.FC<LineIconsTrashTrash1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.2003 15.6C14.2003 16.0408 13.8867 16.4 13.5003 16.4H6.50029C6.11389 16.4 5.80029 16.0408 5.80029 15.6V6.8H14.2003V15.6ZM8.6001 3.8624C8.6001 3.7384 8.7499 3.6 8.9501 3.6H11.0501C11.2503 3.6 11.4001 3.7384 11.4001 3.8624V5.2H8.6001V3.8624ZM16.3 5.2H15.6H12.8V3.8624C12.8 2.8352 12.0153 2 11.05 2H8.95C7.9847 2 7.2 2.8352 7.2 3.8624V5.2H4.4H3.7C3.315 5.2 3 5.56 3 6C3 6.44 3.315 6.8 3.7 6.8H4.4V15.6C4.4 16.9232 5.3422 18 6.5 18H13.5C14.6578 18 15.6 16.9232 15.6 15.6V6.8H16.3C16.685 6.8 17 6.44 17 6C17 5.56 16.685 5.2 16.3 5.2Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsTrashTrash1Icon;
