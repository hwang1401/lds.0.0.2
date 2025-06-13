import React from 'react';

export interface SlashIconProps {
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
 * SlashIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SlashIcon: React.FC<SlashIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.40005 9.99999C4.40005 8.70779 4.84455 7.52059 5.58165 6.57209L13.4279 14.4184C12.4794 15.1562 11.2922 15.6 10 15.6C6.91235 15.6 4.40005 13.0877 4.40005 9.99999ZM15.6001 10C15.6001 11.2922 15.1556 12.4794 14.4185 13.4279L6.57223 5.5816C7.52073 4.8438 8.70793 4.4 10.0001 4.4C13.0878 4.4 15.6001 6.9123 15.6001 10ZM10.0002 3C6.14038 3 3.00018 6.1402 3.00018 10C3.00018 13.8598 6.14038 17 10.0002 17C13.86 17 17.0002 13.8598 17.0002 10C17.0002 6.1402 13.86 3 10.0002 3Z" fill="currentColor"/>
    </svg>
  );
};

export default SlashIcon;
