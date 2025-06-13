import React from 'react';

export interface LineIconsVideoOffIconProps {
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
 * LineIconsVideoOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsVideoOffIcon: React.FC<LineIconsVideoOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.4002 7.97792L14.153 10.0001L16.4002 12.0215V7.97792ZM17.9999 7.37824V12.6212C17.9999 13.1259 17.6967 13.5685 17.2095 13.7754C17.0303 13.8516 16.8423 13.8889 16.6551 13.8889C16.4903 13.8889 16.3279 13.8594 16.1743 13.8026L12.3999 10.1331V6.88902C12.3999 6.4597 12.0415 6.11126 11.5999 6.11126H8.26229L6.66229 4.55572H11.5999C12.9231 4.55572 13.9999 5.60182 13.9999 6.88902V8.01756L15.7287 6.46203C16.1279 6.10426 16.7087 6.01248 17.2095 6.22403C17.6967 6.43092 17.9999 6.87347 17.9999 7.37824ZM11.6002 13.8889H4.40018C3.95858 13.8889 3.60018 13.5397 3.60018 13.1111V6.88901C3.60018 6.63934 3.72898 6.42779 3.91698 6.28468L2.77938 5.1787C2.30338 5.60569 2.00018 6.21157 2.00018 6.88901V13.1111C2.00018 14.3976 3.07698 15.4444 4.40018 15.4444H11.6002C12.093 15.4444 12.5506 15.2982 12.9322 15.0501L11.7146 13.8656C11.6754 13.8718 11.641 13.8889 11.6002 13.8889ZM16.9657 15.6724C17.2785 15.9757 17.2785 16.468 16.9657 16.7721C16.8097 16.9238 16.6049 17 16.4001 17C16.1953 17 15.9905 16.9238 15.8345 16.7721L13.5089 14.5104L12.3449 13.3787L4.86887 6.11126L3.46087 4.74239L3.03447 4.32784C2.72167 4.02374 2.72167 3.53141 3.03447 3.22808C3.34727 2.92397 3.85287 2.92397 4.16567 3.22808L5.53127 4.55573L7.13127 6.11126L12.4001 11.2336L14.0001 12.7892L16.9657 15.6724Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsVideoOffIcon;
