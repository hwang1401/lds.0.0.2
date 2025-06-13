import React from 'react';

export interface HashIconProps {
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
 * HashIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const HashIcon: React.FC<HashIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.20946 11.5556L8.77646 8.44435H11.7903L11.2233 11.5556H8.20946ZM16.2222 11.5557H12.8762L13.4432 8.44435H16.2222C16.65 8.44435 17 8.09433 17 7.66652C17 7.23872 16.65 6.8887 16.2222 6.8887H13.7256L14.2653 3.92441C14.3431 3.49816 14.046 3.08669 13.605 3.01202C13.164 2.93657 12.7401 3.22436 12.6623 3.65139L12.0728 6.8887H9.05889L9.59867 3.92441C9.67644 3.49816 9.37933 3.08669 8.93833 3.01202C8.49733 2.93657 8.07344 3.22436 7.99567 3.65139L7.40611 6.8887H3.77778C3.35 6.8887 3 7.23872 3 7.66652C3 8.09433 3.35 8.44435 3.77778 8.44435H7.12378L6.55678 11.5557H3.77778C3.35 11.5557 3 11.9057 3 12.3335C3 12.7613 3.35 13.1113 3.77778 13.1113H6.27367L5.73389 16.0756C5.65689 16.5018 5.954 16.9133 6.395 16.988C6.83522 17.0634 7.25989 16.7756 7.33689 16.3486L7.92644 13.1113H10.9403L10.4006 16.0756C10.3236 16.5018 10.6207 16.9133 11.0617 16.988C11.5019 17.0634 11.9266 16.7756 12.0036 16.3486L12.5931 13.1113H16.2222C16.65 13.1113 17 12.7613 17 12.3335C17 11.9057 16.65 11.5557 16.2222 11.5557Z" fill="currentColor"/>
    </svg>
  );
};

export default HashIcon;
