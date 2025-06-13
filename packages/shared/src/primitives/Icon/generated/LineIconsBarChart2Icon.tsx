import React from 'react';

export interface LineIconsBarChart2IconProps {
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
 * LineIconsBarChart2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsBarChart2Icon: React.FC<LineIconsBarChart2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1248 3C15.6436 3 15.2498 3.37059 15.2498 3.82353V16.1765C15.2498 16.6294 15.6436 17 16.1248 17C16.6061 17 16.9998 16.6294 16.9998 16.1765V3.82353C16.9998 3.37059 16.6061 3 16.1248 3ZM10.0004 6.29411C9.51916 6.29411 9.12541 6.6647 9.12541 7.11764V16.1765C9.12541 16.6294 9.51916 17 10.0004 17C10.4817 17 10.8754 16.6294 10.8754 16.1765V7.11764C10.8754 6.6647 10.4817 6.29411 10.0004 6.29411ZM3 10.4118C3 9.95883 3.39375 9.58824 3.875 9.58824C4.35625 9.58824 4.75 9.95883 4.75 10.4118V16.1765C4.75 16.6294 4.35625 17 3.875 17C3.39375 17 3 16.6294 3 16.1765V10.4118Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsBarChart2Icon;
