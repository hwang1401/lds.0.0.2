import React from 'react';

export interface MoonIconProps {
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
 * MoonIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const MoonIcon: React.FC<MoonIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.81301 5.04249C6.46264 5.29028 6.14099 5.57726 5.84948 5.90205C3.85304 8.12163 3.91821 11.6732 5.99454 13.8186C7.09191 14.9533 8.56629 15.586 10.1458 15.5993C10.1633 15.6 10.1815 15.6 10.1997 15.6C11.7589 15.6 13.2228 14.996 14.3272 13.8949C14.557 13.666 14.7658 13.4204 14.9529 13.1586C12.7484 13.433 10.4884 12.6952 8.88303 11.0951C7.27831 9.49496 6.53552 7.24248 6.81301 5.04249ZM10.1996 17C10.1772 17 10.1555 17 10.133 16.9993C8.17514 16.9825 6.34689 16.1985 4.98673 14.7923C2.41007 12.1289 2.32949 7.72125 4.80594 4.9669C5.57746 4.10804 6.51927 3.46198 7.60473 3.0469C7.86051 2.9475 8.15132 3.0091 8.34683 3.20229C8.54234 3.39478 8.60751 3.68386 8.51291 3.94145C7.72947 6.07984 8.26344 8.49891 9.87306 10.1039C11.4834 11.7089 13.9115 12.2416 16.0593 11.4605C16.3172 11.3653 16.6073 11.4325 16.7993 11.627C16.9913 11.8237 17.0522 12.1135 16.9534 12.369C16.5862 13.3231 16.0355 14.17 15.3165 14.8861C13.9479 16.251 12.133 17 10.1996 17Z" fill="currentColor"/>
    </svg>
  );
};

export default MoonIcon;
