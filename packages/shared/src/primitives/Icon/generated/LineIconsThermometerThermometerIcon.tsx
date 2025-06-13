import React from 'react';

export interface LineIconsThermometerThermometerIconProps {
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
 * LineIconsThermometerThermometerIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsThermometerThermometerIcon: React.FC<LineIconsThermometerThermometerIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99984 3.60001C9.55824 3.60001 9.19984 3.95921 9.19984 4.40001V11.232C9.19984 11.5184 9.04704 11.7832 8.79824 11.9256C8.05904 12.3504 7.59984 13.1456 7.59984 14C7.59984 15.3232 8.67664 16.4 9.99984 16.4C11.323 16.4 12.3998 15.3232 12.3998 14C12.3998 13.1456 11.9406 12.3504 11.2014 11.9256C10.9526 11.7832 10.7998 11.5184 10.7998 11.232V4.40001C10.7998 4.18641 10.7174 3.98961 10.5702 3.84481C10.411 3.68161 10.2134 3.60001 9.99984 3.60001ZM10 18C7.7944 18 6 16.2056 6 14C6 12.736 6.6032 11.5504 7.6 10.8024V4.4C7.6 3.0768 8.6768 2 10 2C10.6496 2 11.2528 2.2536 11.7016 2.7136C12.1472 3.1472 12.4 3.7512 12.4 4.4V10.8024C13.3968 11.5504 14 12.736 14 14C14 16.2056 12.2056 18 10 18Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsThermometerThermometerIcon;
