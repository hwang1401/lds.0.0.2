import React from 'react';

export interface LineIconsOptionsOptions2IconProps {
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
 * LineIconsOptionsOptions2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsOptionsOptions2Icon: React.FC<LineIconsOptionsOptions2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.19981 15.4444C8.75821 15.4444 8.39981 15.096 8.39981 14.6666C8.39981 14.2373 8.75821 13.8889 9.19981 13.8889C9.64141 13.8889 9.99981 14.2373 9.99981 14.6666C9.99981 15.096 9.64141 15.4444 9.19981 15.4444ZM17.2 13.8889H11.452C11.1208 12.9859 10.2416 12.3334 9.2 12.3334C8.1584 12.3334 7.2792 12.9859 6.948 13.8889H2.8C2.3576 13.8889 2 14.2366 2 14.6667C2 15.0968 2.3576 15.4445 2.8 15.4445H6.948C7.2792 16.3475 8.1584 17 9.2 17C10.2416 17 11.1208 16.3475 11.452 15.4445H17.2C17.6424 15.4445 18 15.0968 18 14.6667C18 14.2366 17.6424 13.8889 17.2 13.8889ZM15.6001 10.7778C15.1585 10.7778 14.8001 10.4293 14.8001 10C14.8001 9.57067 15.1585 9.22223 15.6001 9.22223C16.0417 9.22223 16.4001 9.57067 16.4001 10C16.4001 10.4293 16.0417 10.7778 15.6001 10.7778ZM15.6 7.66665C14.5584 7.66665 13.6792 8.3192 13.348 9.2222H2.8C2.3576 9.2222 2 9.56987 2 9.99998C2 10.4301 2.3576 10.7778 2.8 10.7778H13.348C13.6792 11.6808 14.5584 12.3333 15.6 12.3333C16.9232 12.3333 18 11.2864 18 9.99998C18 8.71354 16.9232 7.66665 15.6 7.66665ZM6.00038 4.5556C6.44198 4.5556 6.80038 4.90405 6.80038 5.33338C6.80038 5.76271 6.44198 6.11116 6.00038 6.11116C5.55878 6.11116 5.20038 5.76271 5.20038 5.33338C5.20038 4.90405 5.55878 4.5556 6.00038 4.5556ZM2.8 6.11111H3.748C4.0792 7.01411 4.9584 7.66667 6 7.66667C7.0416 7.66667 7.9208 7.01411 8.252 6.11111H17.2C17.6424 6.11111 18 5.76344 18 5.33333C18 4.90322 17.6424 4.55556 17.2 4.55556H8.252C7.9208 3.65256 7.0416 3 6 3C4.9584 3 4.0792 3.65256 3.748 4.55556H2.8C2.3576 4.55556 2 4.90322 2 5.33333C2 5.76344 2.3576 6.11111 2.8 6.11111Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsOptionsOptions2Icon;
