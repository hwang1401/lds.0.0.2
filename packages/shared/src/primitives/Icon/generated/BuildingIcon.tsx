import React from 'react';

export interface BuildingIconProps {
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
 * BuildingIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BuildingIcon: React.FC<BuildingIconProps> = ({
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
      <path d="M2.49999 2.5H10.8333C11.0543 2.5 11.2663 2.5878 11.4226 2.74408C11.5788 2.90036 11.6667 3.11232 11.6667 3.33333V18.3333H1.66666V3.33333C1.66666 3.11232 1.75446 2.90036 1.91075 2.74408C2.06702 2.5878 2.27897 2.5 2.49999 2.5Z" fill="#737A83"/>
<path d="M12.5 5.83331H17.5C17.721 5.83331 17.933 5.92111 18.0892 6.07739C18.2455 6.23367 18.3333 6.44563 18.3333 6.66665V18.3333H11.6667V6.66665C11.6667 6.44563 11.7545 6.23367 11.9107 6.07739C12.067 5.92111 12.279 5.83331 12.5 5.83331Z" fill="#C7CED5"/>
<path d="M5.62501 4.79169H4.37501C4.14489 4.79169 3.95834 4.97824 3.95834 5.20835V6.45835C3.95834 6.68847 4.14489 6.87502 4.37501 6.87502H5.62501C5.85513 6.87502 6.04168 6.68847 6.04168 6.45835V5.20835C6.04168 4.97824 5.85513 4.79169 5.62501 4.79169Z" fill="white"/>
<path d="M8.95832 4.79169H7.70832C7.47821 4.79169 7.29166 4.97824 7.29166 5.20835V6.45835C7.29166 6.68847 7.47821 6.87502 7.70832 6.87502H8.95832C9.18841 6.87502 9.37499 6.68847 9.37499 6.45835V5.20835C9.37499 4.97824 9.18841 4.79169 8.95832 4.79169Z" fill="white"/>
<path d="M5.62501 8.125H4.37501C4.14489 8.125 3.95834 8.31155 3.95834 8.54167V9.79167C3.95834 10.0217 4.14489 10.2083 4.37501 10.2083H5.62501C5.85513 10.2083 6.04168 10.0217 6.04168 9.79167V8.54167C6.04168 8.31155 5.85513 8.125 5.62501 8.125Z" fill="white"/>
<path d="M8.95832 8.125H7.70832C7.47821 8.125 7.29166 8.31155 7.29166 8.54167V9.79167C7.29166 10.0217 7.47821 10.2083 7.70832 10.2083H8.95832C9.18841 10.2083 9.37499 10.0217 9.37499 9.79167V8.54167C9.37499 8.31155 9.18841 8.125 8.95832 8.125Z" fill="white"/>
<path d="M5.62501 11.4583H4.37501C4.14489 11.4583 3.95834 11.6449 3.95834 11.875V13.125C3.95834 13.3551 4.14489 13.5416 4.37501 13.5416H5.62501C5.85513 13.5416 6.04168 13.3551 6.04168 13.125V11.875C6.04168 11.6449 5.85513 11.4583 5.62501 11.4583Z" fill="white"/>
<path d="M8.95832 11.4583H7.70832C7.47821 11.4583 7.29166 11.6449 7.29166 11.875V13.125C7.29166 13.3551 7.47821 13.5416 7.70832 13.5416H8.95832C9.18841 13.5416 9.37499 13.3551 9.37499 13.125V11.875C9.37499 11.6449 9.18841 11.4583 8.95832 11.4583Z" fill="white"/>
    </svg>
  );
};

export default BuildingIcon;
