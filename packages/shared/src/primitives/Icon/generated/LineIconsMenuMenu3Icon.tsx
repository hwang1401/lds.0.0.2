import React from 'react';

export interface LineIconsMenuMenu3IconProps {
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
 * LineIconsMenuMenu3Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMenuMenu3Icon: React.FC<LineIconsMenuMenu3IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M2.83147 5H17.168C17.6257 5 17.9999 5.35083 17.9999 5.78V5.88667C17.9999 6.31583 17.6257 6.66667 17.168 6.66667H2.83147C2.3737 6.66667 2.00038 6.31583 2.00038 5.88667V5.78C2.00038 5.35083 2.3737 5 2.83147 5ZM3.77761 10C3.77761 10.4608 3.3794 10.8333 2.88874 10.8333C2.39809 10.8333 1.99988 10.4608 1.99988 10C1.99988 9.53917 2.39809 9.16667 2.88874 9.16667C3.3794 9.16667 3.77761 9.53917 3.77761 10ZM6.38712 9.16669H17.1682C17.6259 9.16669 18.0001 9.51752 18.0001 9.94669V10.0534C18.0001 10.4825 17.6259 10.8334 17.1682 10.8334H6.38712C5.92935 10.8334 5.55603 10.4825 5.55603 10.0534V9.94669C5.55603 9.51752 5.92935 9.16669 6.38712 9.16669ZM17.168 13.3333H2.83147C2.3737 13.3333 2.00038 13.6842 2.00038 14.1133V14.22C2.00038 14.6492 2.3737 15 2.83147 15H17.168C17.6257 15 17.9999 14.6492 17.9999 14.22V14.1133C17.9999 13.6842 17.6257 13.3333 17.168 13.3333Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMenuMenu3Icon;
