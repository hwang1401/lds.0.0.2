import React from 'react';

export interface RefreshIconProps {
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
 * RefreshIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const RefreshIcon: React.FC<RefreshIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.458 11.1091C16.0489 10.9792 15.6118 11.2056 15.4811 11.6147C14.7523 13.906 12.6072 15.4445 10.1432 15.4445C7.0617 15.4445 4.55571 13.0022 4.55571 10C4.55571 6.99857 7.0617 4.55557 10.1432 4.55557C11.4872 4.55557 12.755 5.02379 13.756 5.85446L12.0713 5.57679C11.6436 5.49902 11.2469 5.79379 11.1769 6.2169C11.1069 6.64079 11.3939 7.04135 11.8178 7.11057L15.1202 7.65657C15.163 7.66357 15.2065 7.66668 15.2478 7.66668C15.3403 7.66668 15.4305 7.65035 15.5145 7.61924C15.5433 7.60835 15.5666 7.58813 15.5946 7.57335C15.646 7.5469 15.6996 7.52357 15.744 7.48624C15.772 7.46368 15.7899 7.43102 15.814 7.40457C15.8505 7.36646 15.8894 7.3299 15.9166 7.28324C15.9361 7.24979 15.9439 7.21013 15.9586 7.17279C15.9773 7.1269 16.0022 7.08413 16.0115 7.03357L16.598 3.92246C16.6773 3.50013 16.3996 3.09257 15.9773 3.01402C15.5565 2.93779 15.1482 3.21235 15.0689 3.6339L14.8573 4.75468C13.5631 3.6339 11.9041 3.00002 10.1432 3.00002C6.20459 3.00002 3.00017 6.1399 3.00017 10C3.00017 13.8601 6.20459 17 10.1432 17C13.287 17 16.0279 15.0252 16.9635 12.086C17.0934 11.6769 16.8671 11.2398 16.458 11.1091Z" fill="currentColor"/>
    </svg>
  );
};

export default RefreshIcon;
