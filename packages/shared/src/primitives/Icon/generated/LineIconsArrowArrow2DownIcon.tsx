import React from 'react';

export interface LineIconsArrowArrow2DownIconProps {
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
 * LineIconsArrowArrow2DownIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrow2DownIcon: React.FC<LineIconsArrowArrow2DownIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.8012 11.1883C15.4978 10.8174 14.9578 10.7666 14.5944 11.0763L10.8573 14.2545V3.87482C10.8573 3.39192 10.4733 3 10.0001 3C9.527 3 9.14301 3.39192 9.14301 3.87482V14.2545L5.4059 11.0763C5.04162 10.7666 4.50162 10.8174 4.19906 11.1883C3.89563 11.5592 3.94449 12.1112 4.30877 12.42L9.45157 16.7941C9.49186 16.8291 9.53986 16.8457 9.58443 16.872C9.61957 16.893 9.65043 16.9175 9.689 16.9332C9.78928 16.9734 9.89386 16.9971 10.0001 16.9971C10.1064 16.9971 10.211 16.9734 10.3113 16.9332C10.3499 16.9175 10.3807 16.893 10.4158 16.872C10.4604 16.8457 10.5084 16.8291 10.5487 16.7941L15.6915 12.42C16.0549 12.1112 16.1046 11.5592 15.8012 11.1883Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrow2DownIcon;
