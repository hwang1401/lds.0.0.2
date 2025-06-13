import React from 'react';

export interface CreditCardIconProps {
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
 * CreditCardIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CreditCardIcon: React.FC<CreditCardIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.2002 12.5714H6.0002C5.5602 12.5714 5.2002 12.1857 5.2002 11.7143C5.2002 11.2428 5.5602 10.8571 6.0002 10.8571H9.2002C9.6402 10.8571 10.0002 11.2428 10.0002 11.7143C10.0002 12.1857 9.6402 12.5714 9.2002 12.5714ZM13.9999 12.5714H12.3999C11.9599 12.5714 11.5999 12.1857 11.5999 11.7143C11.5999 11.2428 11.9599 10.8571 12.3999 10.8571H13.9999C14.4399 10.8571 14.7999 11.2428 14.7999 11.7143C14.7999 12.1857 14.4399 12.5714 13.9999 12.5714ZM16.4001 13.4286C16.4001 13.9009 16.0417 14.2857 15.6001 14.2857H4.4001C3.9585 14.2857 3.6001 13.9009 3.6001 13.4286V9.14286H16.4001V13.4286ZM3.6001 6.57142C3.6001 6.09913 3.9585 5.71428 4.4001 5.71428H15.6001C16.0417 5.71428 16.4001 6.09913 16.4001 6.57142V7.42856H3.6001V6.57142ZM15.6 4H4.4C3.0768 4 2 5.15371 2 6.57143V13.4286C2 14.8463 3.0768 16 4.4 16H15.6C16.9232 16 18 14.8463 18 13.4286V6.57143C18 5.15371 16.9232 4 15.6 4Z" fill="currentColor"/>
    </svg>
  );
};

export default CreditCardIcon;
