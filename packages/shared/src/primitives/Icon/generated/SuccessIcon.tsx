import React from 'react';

export interface SuccessIconProps {
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
 * SuccessIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SuccessIcon: React.FC<SuccessIconProps> = ({
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
      <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99999C18.3334 5.39761 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39761 1.66669 9.99999C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" fill="#9889F8"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.3333 11.0417H5.83331V8.95834H13.3333V11.0417Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.9397 10L9.2215 6.94204L10.7786 5.55795L14.7271 10L10.7786 14.4421L9.2215 13.0579L11.9397 10Z" fill="white"/>
    </svg>
  );
};

export default SuccessIcon;
