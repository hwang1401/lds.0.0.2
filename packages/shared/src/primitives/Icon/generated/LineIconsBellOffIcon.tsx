import React from 'react';

export interface LineIconsBellOffIconProps {
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
 * LineIconsBellOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsBellOffIcon: React.FC<LineIconsBellOffIconProps> = ({
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
      <g clipPath="url(#clip0_3054_24628)">
<path fillRule="evenodd" clipRule="evenodd" d="M17.7399 15.8337L16.5844 14.7937L14.8128 13.1993L6.34347 5.57613L5.04036 4.40413L3.51769 3.03373C3.17014 2.72093 2.60836 2.72093 2.26081 3.03373C1.91325 3.34653 1.91325 3.85213 2.26081 4.16493L4.25014 5.95613L5.80747 7.35693L12.299 13.1993L12.3604 13.2545L13.5559 14.3305L14.0768 14.7993L16.483 16.9649C16.6564 17.1209 16.8839 17.1993 17.1115 17.1993C17.339 17.1993 17.5666 17.1209 17.7399 16.9649C18.0875 16.6521 18.0875 16.1465 17.7399 15.8337ZM11.7781 15.0721V14.7993H8.22258V15.0721C8.22258 15.7913 9.03681 16.3993 10.0004 16.3993C10.9639 16.3993 11.7781 15.7913 11.7781 15.0721ZM12.8199 14.7993L13.5124 15.4233C13.2999 16.8705 11.8155 17.9993 10.0004 17.9993C8.03947 17.9993 6.44481 16.6865 6.44481 15.0721V14.7993H3.45547C2.86525 14.7993 2.33814 14.4825 2.11147 13.9913C1.88569 13.5009 2.00925 12.9417 2.42525 12.5657L4.02614 11.1225L4.02703 7.38093C4.02703 7.22333 4.04036 7.06733 4.05458 6.91133L5.80481 8.48573V11.1225C5.80481 11.5497 5.61992 11.9513 5.28392 12.2537L4.23592 13.1993H11.0421L11.8039 13.8849L12.8199 14.7993ZM6.86081 4.91133L5.58703 3.76493C5.73992 3.61373 5.90169 3.46893 6.07414 3.33293C7.36836 2.31213 9.09014 1.84253 10.7995 2.04733C13.7497 2.39853 15.9737 4.76413 15.9737 7.54893V11.1225L17.5737 12.5657C17.9906 12.9409 18.1141 13.5009 17.8875 13.9921C17.7977 14.1857 17.6528 14.3417 17.4848 14.4721L14.2804 11.5889C14.2306 11.4393 14.1959 11.2841 14.1959 11.1225V7.54893C14.1959 5.56333 12.6359 3.88013 10.5675 3.63293C9.34436 3.48813 8.16747 3.80813 7.24481 4.53613C7.10081 4.64973 6.98436 4.78333 6.86081 4.91133Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3054_24628">
<rect width="16" height="16" fill="white" transform="translate(2 2)"/>
</clipPath>
</defs>
    </svg>
  );
};

export default LineIconsBellOffIcon;
