import React from 'react';

export interface HomeIconProps {
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
 * HomeIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const HomeIcon: React.FC<HomeIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.1108 16.399H15.4364L15.4442 9.69411L9.99818 3.93698L4.55996 9.66129L4.55529 16.399H6.88863V10.7956C6.88863 10.3529 7.23629 9.99509 7.6664 9.99509H12.3331C12.7624 9.99509 13.1108 10.3529 13.1108 10.7956V16.399ZM11.5555 16.399H8.44435V11.5961H11.5555V16.399ZM16.552 8.54221L10.5561 2.23114C10.2629 1.92295 9.73711 1.92295 9.44389 2.23114L3.44722 8.54301C3.16333 8.84319 3 9.26265 3 9.69411V16.399C3 17.282 3.65878 18 4.46844 18H7.66667H12.3333H15.5308C16.3404 18 17 17.282 17 16.399V9.69411C17 9.26265 16.8367 8.84319 16.552 8.54221Z" fill="currentColor"/>
    </svg>
  );
};

export default HomeIcon;
