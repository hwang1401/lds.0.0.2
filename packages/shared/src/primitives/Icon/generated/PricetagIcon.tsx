import React from 'react';

export interface PricetagIconProps {
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
 * PricetagIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PricetagIcon: React.FC<PricetagIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.88086 7.23125C9.33663 7.68628 9.33663 8.42599 8.88086 8.88101C8.42508 9.33682 7.68698 9.33682 7.2312 8.88101C6.77543 8.42599 6.77543 7.68628 7.2312 7.23125C7.68698 6.77545 8.42508 6.77545 8.88086 7.23125ZM5.20416 10.6942L9.89567 15.3868L15.3852 9.89694L10.6937 5.20434L4.63872 4.63964L5.20416 10.6942ZM9.89584 17C9.53418 17 9.1733 16.8623 8.89719 16.5878L3.90624 11.5957C3.7779 11.4681 3.69857 11.2986 3.68146 11.1181L3.00324 3.85014C2.98224 3.6199 3.06391 3.392 3.22802 3.22788C3.39213 3.06376 3.61924 2.98053 3.85024 3.00387L11.1177 3.68213C11.2982 3.69846 11.4669 3.7778 11.5953 3.90614L16.5862 8.89743C16.853 9.16422 17 9.51891 17 9.89693C17 10.2749 16.853 10.6296 16.5862 10.8964L10.8953 16.587C10.6199 16.8623 10.2583 17 9.89584 17Z" fill="currentColor"/>
    </svg>
  );
};

export default PricetagIcon;
