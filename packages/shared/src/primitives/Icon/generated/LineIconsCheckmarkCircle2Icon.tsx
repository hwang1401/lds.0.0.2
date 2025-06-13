import React from 'react';

export interface LineIconsCheckmarkCircle2IconProps {
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
 * LineIconsCheckmarkCircle2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCheckmarkCircle2Icon: React.FC<LineIconsCheckmarkCircle2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.2979 9.2818H16.3C16.6857 9.2818 16.9993 9.594 17 9.9797C17.0056 11.8494 16.2825 13.6099 14.9637 14.9357C13.6456 16.2615 11.89 16.9944 10.0203 17H10C8.13731 17 6.38522 16.2776 5.06432 14.9637C3.73853 13.6456 3.00563 11.89 3.00003 10.0203C2.99443 8.1499 3.71753 6.3901 5.03632 5.0643C6.35442 3.7385 8.11001 3.0056 9.9797 3C10.5362 3.0084 11.1032 3.0644 11.6464 3.1946C12.0216 3.2856 12.2533 3.6636 12.1623 4.0395C12.072 4.4147 11.6919 4.6457 11.3181 4.5561C10.8834 4.4511 10.4221 4.407 9.9839 4.4C8.48801 4.4042 7.08311 4.9908 6.02892 6.0513C4.97402 7.1118 4.39583 8.5202 4.40003 10.0161C4.40423 11.512 4.99082 12.9162 6.05132 13.9711C7.10831 15.0218 8.50971 15.6 10 15.6H10.0161C11.512 15.5958 12.9169 15.0092 13.9711 13.9487C15.026 12.8875 15.6042 11.4798 15.6 9.9839C15.5993 9.5975 15.9115 9.2825 16.2979 9.2818ZM7.40547 9.50502C7.67917 9.23133 8.12157 9.23133 8.39526 9.50502L9.96606 11.0758L14.3739 6.03862C14.6287 5.74952 15.0704 5.71872 15.3616 5.97352C15.6521 6.22762 15.6815 6.67002 15.4267 6.96123L10.5268 12.5612C10.3994 12.7068 10.2174 12.7929 10.0235 12.7999H10.0004C9.81486 12.7999 9.63706 12.7264 9.50546 12.5948L7.40547 10.4948C7.13177 10.2211 7.13177 9.77873 7.40547 9.50502Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCheckmarkCircle2Icon;
