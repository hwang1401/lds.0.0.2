import React from 'react';

export interface LineIconsShieldOnIconProps {
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
 * LineIconsShieldOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsShieldOnIcon: React.FC<LineIconsShieldOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99962 3.62221L4.55518 6.82034V6.9381C4.55518 10.7876 6.55095 14.3519 9.76473 16.2401L9.99962 16.3782L10.2345 16.2401C13.4483 14.3519 15.4441 10.7876 15.4441 6.9381V6.82034L9.99962 3.62221ZM10 18C9.73633 18 9.47267 17.9318 9.23856 17.7937L9.00289 17.6548C5.29989 15.4808 3 11.3739 3 6.9381V6.82034C3 6.23643 3.30333 5.69393 3.79178 5.40563L9.23778 2.2075C9.70833 1.93138 10.2924 1.93056 10.7614 2.20669L16.2067 5.40482C16.6967 5.69393 17 6.23643 17 6.82034V6.9381C17 11.3739 14.7001 15.4808 10.9971 17.6548L10.7622 17.7929C10.5273 17.931 10.2637 18 10 18Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsShieldOnIcon;
