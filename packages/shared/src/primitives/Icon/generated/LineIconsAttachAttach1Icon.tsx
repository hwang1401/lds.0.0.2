import React from 'react';

export interface LineIconsAttachAttach1IconProps {
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
 * LineIconsAttachAttach1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsAttachAttach1Icon: React.FC<LineIconsAttachAttach1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 18C7.2425 18 5 15.9544 5 13.4416V5.30557C5 3.48317 6.62 1.99997 8.61083 1.99997C10.6025 1.99997 12.2225 3.48317 12.2225 5.30557L12.2175 13.4472C12.2175 14.5784 11.22 15.4992 9.995 15.4992C8.77 15.4992 7.77333 14.5784 7.77333 13.4464L7.7775 5.93357C7.77833 5.49197 8.15167 5.13437 8.61083 5.13437H8.61167C9.07167 5.13437 9.445 5.49277 9.44417 5.93517L9.44 13.4472C9.44 13.696 9.68833 13.8992 9.995 13.8992C10.3017 13.8992 10.5508 13.696 10.5508 13.4464L10.5558 5.30477C10.5558 4.36477 9.68333 3.59997 8.61083 3.59997C7.53917 3.59997 6.66667 4.36477 6.66667 5.30557V13.4416C6.66667 15.0728 8.16167 16.4 10 16.4C11.8383 16.4 13.3333 15.0728 13.3333 13.4416V5.30557C13.3333 4.86317 13.7067 4.50557 14.1667 4.50557C14.6267 4.50557 15 4.86317 15 5.30557V13.4416C15 15.9544 12.7575 18 10 18Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsAttachAttach1Icon;
