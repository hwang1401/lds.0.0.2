import React from 'react';

export interface PowerIconProps {
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
 * PowerIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PowerIcon: React.FC<PowerIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6996 10.3332C10.6996 10.7019 10.386 10.9999 9.99956 10.9999C9.61316 10.9999 9.29956 10.7019 9.29956 10.3332V3.66666C9.29956 3.298 9.61316 3 9.99956 3C10.386 3 10.6996 3.298 10.6996 3.66666V10.3332ZM12.2671 4.69414C12.4442 4.36681 12.867 4.23948 13.21 4.40748C15.5473 5.55879 16.9998 7.82876 16.9998 10.3334C16.9998 14.0087 13.8596 17 9.99982 17C6.14002 17 2.99982 14.0087 2.99982 10.3334C2.99982 7.82876 4.45232 5.55879 6.79032 4.40748C7.13262 4.23881 7.55542 4.36614 7.73322 4.69414C7.91102 5.0208 7.77592 5.4228 7.43292 5.59213C5.56182 6.51278 4.39982 8.32942 4.39982 10.3334C4.39982 13.274 6.91212 15.6666 9.99982 15.6666C13.0875 15.6666 15.5998 13.274 15.5998 10.3334C15.5998 8.32942 14.4378 6.51278 12.5674 5.59213C12.2237 5.4228 12.0893 5.0208 12.2671 4.69414Z" fill="currentColor"/>
    </svg>
  );
};

export default PowerIcon;
