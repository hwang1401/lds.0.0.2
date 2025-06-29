import React from 'react';

export interface CarIconProps {
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
 * CarIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CarIcon: React.FC<CarIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6005 14.6667C15.6005 15.096 15.2421 15.4445 14.8005 15.4445C14.3589 15.4445 14.0005 15.096 14.0005 14.6667C14.0005 14.2373 14.3589 13.8889 14.8005 13.8889C15.2421 13.8889 15.6005 14.2373 15.6005 14.6667ZM10.0002 12.3333H3.6001L3.6129 4.55554H12.4003L12.3875 12.3333H10.0002ZM6.00042 14.6667C6.00042 15.096 5.64202 15.4445 5.20041 15.4445C4.7588 15.4445 4.40039 15.096 4.40039 14.6667C4.40039 14.2373 4.7588 13.8889 5.20041 13.8889C5.64202 13.8889 6.00042 14.2373 6.00042 14.6667ZM16.4005 10.3733V12.3333H14.0005V8.50743L16.4005 10.3733ZM17.7003 9.39254L14.0002 6.51476V4.55554C14.0002 3.69765 13.3498 2.99998 12.5498 2.99998H3.44963C2.65041 2.99998 2 3.69765 2 4.55554V12.3333C2 13.0123 2.41041 13.5848 2.97682 13.7971C2.86482 14.0662 2.80002 14.3587 2.80002 14.6667C2.80002 15.9531 3.87684 17 5.20007 17C6.52329 17 7.60011 15.9531 7.60011 14.6667C7.60011 14.3921 7.54251 14.1331 7.45211 13.8889H10.0002H12.5482C12.4578 14.1331 12.4002 14.3921 12.4002 14.6667C12.4002 15.9531 13.477 17 14.8003 17C16.1235 17 17.2003 15.9531 17.2003 14.6667C17.2003 14.3921 17.1427 14.1331 17.0523 13.8889H17.2003C17.6427 13.8889 18.0003 13.5412 18.0003 13.1111V9.99998C18.0003 9.76354 17.8899 9.54032 17.7003 9.39254Z" fill="currentColor"/>
    </svg>
  );
};

export default CarIcon;
