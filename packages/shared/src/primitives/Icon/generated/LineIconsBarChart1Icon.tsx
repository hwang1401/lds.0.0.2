import React from 'react';

export interface LineIconsBarChart1IconProps {
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
 * LineIconsBarChart1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsBarChart1Icon: React.FC<LineIconsBarChart1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0003 3C9.51901 3 9.12526 3.37059 9.12526 3.82353V16.1765C9.12526 16.6294 9.51901 17 10.0003 17C10.4815 17 10.8753 16.6294 10.8753 16.1765V3.82353C10.8753 3.37059 10.4815 3 10.0003 3ZM16.125 9.58824C15.6438 9.58824 15.25 9.95883 15.25 10.4118V16.1765C15.25 16.6294 15.6438 17 16.125 17C16.6063 17 17 16.6294 17 16.1765V10.4118C17 9.95883 16.6063 9.58824 16.125 9.58824ZM3 7.11765C3 6.66471 3.39375 6.29412 3.875 6.29412C4.35625 6.29412 4.75 6.66471 4.75 7.11765V16.1765C4.75 16.6294 4.35625 17 3.875 17C3.39375 17 3 16.6294 3 16.1765V7.11765Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsBarChart1Icon;
