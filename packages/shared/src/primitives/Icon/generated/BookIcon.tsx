import React from 'react';

export interface BookIconProps {
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
 * BookIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BookIcon: React.FC<BookIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.62451 16.2222C5.14239 16.2222 4.74951 15.8231 4.74951 15.3333C4.74951 14.8435 5.14239 14.4444 5.62451 14.4444H15.2495V16.2222H5.62451ZM5.62451 3.77775H15.2495V12.6666H5.62451C5.31564 12.6666 5.02426 12.7306 4.74951 12.8302V4.66664C4.74951 4.17686 5.14239 3.77775 5.62451 3.77775ZM16.125 2H5.625C4.17775 2 3 3.19644 3 4.66667V15.3333C3 16.8036 4.17775 18 5.625 18H15.25H16.125C16.608 18 17 17.6018 17 17.1111V16.2222V14.4444V2.88889C17 2.39822 16.608 2 16.125 2Z" fill="currentColor"/>
    </svg>
  );
};

export default BookIcon;
