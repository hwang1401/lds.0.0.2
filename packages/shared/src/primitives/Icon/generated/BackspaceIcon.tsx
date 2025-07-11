import React from 'react';

export interface BackspaceIconProps {
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
 * BackspaceIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BackspaceIcon: React.FC<BackspaceIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.43434 12.3686C9.59035 12.5392 9.79515 12.625 9.99995 12.625C10.2048 12.625 10.4096 12.5392 10.5656 12.3686L11.6 11.2372L12.6344 12.3686C12.7904 12.5392 12.9952 12.625 13.2 12.625C13.4048 12.625 13.6096 12.5392 13.7656 12.3686C14.0784 12.0265 14.0784 11.4735 13.7656 11.1314L12.7312 10L13.7656 8.86862C14.0784 8.5265 14.0784 7.9735 13.7656 7.63137C13.4528 7.28925 12.9472 7.28925 12.6344 7.63137L11.6 8.76275L10.5656 7.63137C10.2528 7.28925 9.74715 7.28925 9.43434 7.63137C9.12154 7.9735 9.12154 8.5265 9.43434 8.86862L10.4688 10L9.43434 11.1314C9.12154 11.4735 9.12154 12.0265 9.43434 12.3686ZM16.3996 15.25H8.69546C8.49626 15.25 8.30506 15.1687 8.15705 15.0217L3.89456 10.7823L8.19625 4.94166C8.33786 4.81741 8.51386 4.75004 8.69546 4.75004H16.3996V15.25ZM16.5128 3.00002H8.69583C8.09742 3.00002 7.52381 3.24239 7.0814 3.68339C7.0502 3.71314 7.0222 3.74727 6.9966 3.78227L2.1773 10.3264C1.91169 10.6869 1.94849 11.211 2.2613 11.5225L7.0814 16.3166C7.52381 16.7576 8.09742 17 8.69583 17H16.5128C17.3328 17 18 16.2869 18 15.4093V4.59077C18 3.71314 17.3328 3.00002 16.5128 3.00002Z" fill="currentColor"/>
    </svg>
  );
};

export default BackspaceIcon;
