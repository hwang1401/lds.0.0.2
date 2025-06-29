import React from 'react';

export interface CastIconProps {
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
 * CastIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CastIcon: React.FC<CastIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.02194 3.00009H14.9782C16.0935 3.00009 17.0004 3.96919 17.0004 5.15996V14.8401C17.0004 16.0308 16.0935 16.9999 14.9782 16.9999H13.8893C13.4592 16.9999 13.1115 16.6523 13.1115 16.2222C13.1115 15.7921 13.4592 15.4444 13.8893 15.4444H14.9782C15.2309 15.4444 15.4448 15.1675 15.4448 14.8401V5.15996C15.4448 4.83251 15.2309 4.55563 14.9782 4.55563H5.02194C4.76917 4.55563 4.55606 4.83251 4.55606 5.15996V6.11117C4.55606 6.54127 4.20762 6.88894 3.77829 6.88894C3.34819 6.88894 3.00052 6.54127 3.00052 6.11117V5.15996C3.00052 3.96919 3.9074 3.00009 5.02194 3.00009ZM3.00709 12.4656C2.94798 12.0401 3.24586 11.6473 3.6713 11.589C4.77573 11.4381 5.85372 11.7998 6.63771 12.583C7.67759 13.6244 7.95992 15.2189 7.33848 16.5512C7.20626 16.8335 6.92626 16.9999 6.63305 16.9999C6.5226 16.9999 6.4106 16.9766 6.30483 16.9268C5.91594 16.7456 5.74717 16.2828 5.92839 15.8932C6.27449 15.152 6.11816 14.263 5.53795 13.6835C5.10084 13.2472 4.49885 13.0473 3.88363 13.129C3.45353 13.1904 3.06542 12.891 3.00709 12.4656ZM3.67054 8.50445C3.2451 8.56356 2.94799 8.95633 3.0071 9.38177C3.06621 9.80643 3.45743 10.1043 3.88443 10.0444C5.35519 9.84376 6.7995 10.3244 7.84871 11.3729C9.05892 12.5838 9.51392 14.3587 9.03481 16.0052C8.91504 16.4175 9.15226 16.8491 9.56447 16.9689C9.63758 16.9899 9.71069 17 9.78147 17C10.119 17 10.4294 16.7799 10.5281 16.4392C11.1659 14.249 10.56 11.8862 8.94848 10.2731C7.55238 8.877 5.63207 8.23145 3.67054 8.50445ZM3.00007 15.4444C3.00007 15.0143 3.34773 14.6666 3.77784 14.6666C4.20794 14.6666 4.5556 15.0143 4.5556 15.4444C4.5556 15.8745 4.20794 16.2222 3.77784 16.2222C3.34773 16.2222 3.00007 15.8745 3.00007 15.4444Z" fill="currentColor"/>
    </svg>
  );
};

export default CastIcon;
