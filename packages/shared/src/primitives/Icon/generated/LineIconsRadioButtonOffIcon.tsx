import React from 'react';

export interface LineIconsRadioButtonOffIconProps {
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
 * LineIconsRadioButtonOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsRadioButtonOffIcon: React.FC<LineIconsRadioButtonOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99986 4.39988C6.91209 4.39988 4.39973 6.91224 4.39973 10C4.39973 13.0878 6.91209 15.6001 9.99986 15.6001C13.0876 15.6001 15.6 13.0878 15.6 10C15.6 6.91224 13.0876 4.39988 9.99986 4.39988ZM10.0002 17.0003C6.14029 17.0003 3.00002 13.8601 3.00002 10.0002C3.00002 6.14029 6.14029 3.00002 10.0002 3.00002C13.8601 3.00002 17.0003 6.14029 17.0003 10.0002C17.0003 13.8601 13.8601 17.0003 10.0002 17.0003Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsRadioButtonOffIcon;
