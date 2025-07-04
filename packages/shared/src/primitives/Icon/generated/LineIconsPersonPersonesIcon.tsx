import React from 'react';

export interface LineIconsPersonPersonesIconProps {
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
 * LineIconsPersonPersonesIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPersonPersonesIcon: React.FC<LineIconsPersonPersonesIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M18 16.2223C18 16.7129 17.6424 17.1111 17.2 17.1111C16.7576 17.1111 16.4 16.7129 16.4 16.2223C16.4 14.752 15.3232 13.5556 14 13.5556C13.4536 13.5556 12.9344 13.7636 12.5152 14.1325C12.9504 15.0178 13.2 16.0329 13.2 17.1111C13.2 17.6018 12.8424 18 12.4 18C11.9576 18 11.6 17.6018 11.6 17.1111C11.6 14.6605 9.8056 12.6667 7.6 12.6667C5.3944 12.6667 3.6 14.6605 3.6 17.1111C3.6 17.6018 3.2424 18 2.8 18C2.3576 18 2 17.6018 2 17.1111C2 13.68 4.5128 10.8889 7.6 10.8889C9.1416 10.8889 10.5384 11.5849 11.552 12.7076C12.2472 12.1103 13.1032 11.7778 14 11.7778C16.2056 11.7778 18 13.7716 18 16.2223ZM13.9998 7.33331C14.4414 7.33331 14.7998 7.73242 14.7998 8.2222C14.7998 8.71198 14.4414 9.11109 13.9998 9.11109C13.5582 9.11109 13.1998 8.71198 13.1998 8.2222C13.1998 7.73242 13.5582 7.33331 13.9998 7.33331ZM13.9999 10.8889C15.3231 10.8889 16.3999 9.69243 16.3999 8.22221C16.3999 6.75199 15.3231 5.55554 13.9999 5.55554C12.6767 5.55554 11.5999 6.75199 11.5999 8.22221C11.5999 9.69243 12.6767 10.8889 13.9999 10.8889ZM7.59944 3.77774C8.48184 3.77774 9.19944 4.57507 9.19944 5.55552C9.19944 6.53596 8.48184 7.3333 7.59944 7.3333C6.71704 7.3333 5.99944 6.53596 5.99944 5.55552C5.99944 4.57507 6.71704 3.77774 7.59944 3.77774ZM7.59977 9.11111C9.36457 9.11111 10.7998 7.51644 10.7998 5.55556C10.7998 3.59467 9.36457 2 7.59977 2C5.83497 2 4.39977 3.59467 4.39977 5.55556C4.39977 7.51644 5.83497 9.11111 7.59977 9.11111Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPersonPersonesIcon;
