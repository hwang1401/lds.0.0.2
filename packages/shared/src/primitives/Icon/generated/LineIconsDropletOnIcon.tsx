import React from 'react';

export interface LineIconsDropletOnIconProps {
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
 * LineIconsDropletOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsDropletOnIcon: React.FC<LineIconsDropletOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0595 4.15906L6.40773 7.64878C4.37546 9.5892 4.34837 12.7678 6.34422 14.7349C7.30525 15.6833 8.58849 16.2113 9.95579 16.222H9.95766C11.3259 16.2318 12.6185 15.7242 13.5954 14.7909C15.6258 12.854 15.6529 9.67631 13.6561 7.70745L10.0595 4.15906ZM9.9408 17.9998C8.06637 17.9847 6.31242 17.2638 5.00022 15.9696C2.30205 13.3101 2.33847 9.01592 5.08147 6.3964L9.40845 2.26224C9.5859 2.09336 9.82686 1.99825 10.0781 2.00002C10.3293 2.00269 10.5684 2.10136 10.7421 2.27202L15.0009 6.47374C17.6982 9.13414 17.6617 13.4292 14.9187 16.046C13.5841 17.3207 11.8171 18.014 9.94267 17.9998H9.9408Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsDropletOnIcon;
