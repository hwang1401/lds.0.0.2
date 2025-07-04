import React from 'react';

export interface BrushIconProps {
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
 * BrushIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BrushIcon: React.FC<BrushIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.045 5.95018L9.91154 11.0908C9.77942 10.8927 9.62805 10.7051 9.45568 10.5333C9.28331 10.3607 9.09606 10.2099 8.89832 10.0802L14.0336 4.93783C14.3013 4.66875 14.7755 4.66788 15.0459 4.93871C15.1798 5.07281 15.2524 5.24811 15.2498 5.45496C15.2524 5.6399 15.1789 5.8152 15.045 5.95018ZM6.71495 15.1953L4.7655 15.2313L4.79963 13.2758C4.818 12.1662 5.73585 11.2459 6.8462 11.2266C6.85845 11.2266 6.86895 11.2257 6.8812 11.2257C7.39218 11.2257 7.86555 11.4186 8.21816 11.7727C8.57953 12.1338 8.7729 12.6211 8.76415 13.1452C8.74577 14.2566 7.82617 15.1761 6.71495 15.1953ZM16.9997 5.45494C17.0084 4.79232 16.7529 4.16826 16.2831 3.69847C15.3538 2.76851 13.7237 2.76588 12.7963 3.69847L7.01005 9.49204C6.94442 9.48853 6.88142 9.47451 6.8158 9.47363C4.7736 9.51044 3.08402 11.2029 3.0499 13.246L3.00002 16.1086C2.99565 16.3462 3.08927 16.5758 3.25639 16.7432C3.42089 16.908 3.64401 17 3.875 17H3.89163L6.7493 16.9483C8.78975 16.9124 10.4785 15.2199 10.5143 13.175C10.5152 13.1093 10.5012 13.0471 10.4995 12.9805L16.2822 7.18951C16.7529 6.71796 17.0084 6.0939 16.9997 5.45494Z" fill="currentColor"/>
    </svg>
  );
};

export default BrushIcon;
