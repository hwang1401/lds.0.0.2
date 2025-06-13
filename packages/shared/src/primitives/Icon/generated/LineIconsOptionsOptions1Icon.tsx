import React from 'react';

export interface LineIconsOptionsOptions1IconProps {
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
 * LineIconsOptionsOptions1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsOptionsOptions1Icon: React.FC<LineIconsOptionsOptions1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99995 5.20003C9.57061 5.20003 9.22217 4.84163 9.22217 4.40003C9.22217 3.95843 9.57061 3.60003 9.99995 3.60003C10.4293 3.60003 10.7777 3.95843 10.7777 4.40003C10.7777 4.84163 10.4293 5.20003 9.99995 5.20003ZM12.3333 4.4C12.3333 3.0768 11.2864 2 10 2C8.71356 2 7.66667 3.0768 7.66667 4.4C7.66667 5.4416 8.31922 6.3208 9.22222 6.652V17.2C9.22222 17.6424 9.56989 18 10 18C10.4301 18 10.7778 17.6424 10.7778 17.2V6.652C11.6808 6.3208 12.3333 5.4416 12.3333 4.4ZM5.33295 14.8C4.90362 14.8 4.55518 14.4416 4.55518 14C4.55518 13.5584 4.90362 13.2 5.33295 13.2C5.76229 13.2 6.11073 13.5584 6.11073 14C6.11073 14.4416 5.76229 14.8 5.33295 14.8ZM6.11111 11.748V2.8C6.11111 2.3576 5.76344 2 5.33333 2C4.90322 2 4.55556 2.3576 4.55556 2.8V11.748C3.65256 12.0792 3 12.9584 3 14C3 15.0416 3.65256 15.9208 4.55556 16.252V17.2C4.55556 17.6424 4.90322 18 5.33333 18C5.76344 18 6.11111 17.6424 6.11111 17.2V16.252C7.01411 15.9208 7.66667 15.0416 7.66667 14C7.66667 12.9584 7.01411 12.0792 6.11111 11.748ZM14.6664 11.6C14.2371 11.6 13.8887 11.2416 13.8887 10.8C13.8887 10.3584 14.2371 9.99997 14.6664 9.99997C15.0958 9.99997 15.4442 10.3584 15.4442 10.8C15.4442 11.2416 15.0958 11.6 14.6664 11.6ZM17 10.8C17 9.7584 16.3474 8.8792 15.4444 8.548V2.8C15.4444 2.3576 15.0968 2 14.6667 2C14.2366 2 13.8889 2.3576 13.8889 2.8V8.548C12.9859 8.8792 12.3333 9.7584 12.3333 10.8C12.3333 11.8416 12.9859 12.7208 13.8889 13.052V17.2C13.8889 17.6424 14.2366 18 14.6667 18C15.0968 18 15.4444 17.6424 15.4444 17.2V13.052C16.3474 12.7208 17 11.8416 17 10.8Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsOptionsOptions1Icon;
