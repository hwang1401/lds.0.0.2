import React from 'react';

export interface SpeakerIconProps {
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
 * SpeakerIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SpeakerIcon: React.FC<SpeakerIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2498 15.6C15.2498 16.0416 14.8578 16.4 14.3748 16.4H5.62482C5.14182 16.4 4.74982 16.0416 4.74982 15.6V4.39999C4.74982 3.95839 5.14182 3.59999 5.62482 3.59999H14.3748C14.8578 3.59999 15.2498 3.95839 15.2498 4.39999V15.6ZM14.3748 1.99997H5.62482C4.17757 1.99997 2.99982 3.07677 2.99982 4.39997V15.6C2.99982 16.9232 4.17757 18 5.62482 18H14.3748C15.8221 18 16.9998 16.9232 16.9998 15.6V4.39997C16.9998 3.07677 15.8221 1.99997 14.3748 1.99997ZM9.99982 14C9.27619 14 8.68732 13.4616 8.68732 12.8C8.68732 12.1384 9.27619 11.6 9.99982 11.6C10.7234 11.6 11.3123 12.1384 11.3123 12.8C11.3123 13.4616 10.7234 14 9.99982 14ZM9.99982 9.99995C8.31107 9.99995 6.93732 11.256 6.93732 12.8C6.93732 14.344 8.31107 15.6 9.99982 15.6C11.6886 15.6 13.0623 14.344 13.0623 12.8C13.0623 11.256 11.6886 9.99995 9.99982 9.99995ZM9.99982 5.99999C10.4828 5.99999 10.8748 6.35839 10.8748 6.79999C10.8748 7.24159 10.4828 7.59999 9.99982 7.59999C9.51682 7.59999 9.12482 7.24159 9.12482 6.79999C9.12482 6.35839 9.51682 5.99999 9.99982 5.99999ZM9.99982 9.19997C11.4471 9.19997 12.6248 8.12317 12.6248 6.79997C12.6248 5.47677 11.4471 4.39997 9.99982 4.39997C8.55257 4.39997 7.37482 5.47677 7.37482 6.79997C7.37482 8.12317 8.55257 9.19997 9.99982 9.19997Z" fill="currentColor"/>
    </svg>
  );
};

export default SpeakerIcon;
