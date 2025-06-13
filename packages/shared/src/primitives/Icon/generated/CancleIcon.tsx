import React from 'react';

export interface CancleIconProps {
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
 * CancleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CancleIcon: React.FC<CancleIconProps> = ({
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
      <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99999C18.3334 5.39761 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39761 1.66669 9.99999C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" fill="#F57C75"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.07 7.40326L7.40332 14.0699L5.93018 12.5968L12.5968 5.93011L14.07 7.40326Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.40332 5.93011L14.07 12.5968L12.5968 14.0699L5.93018 7.40326L7.40332 5.93011Z" fill="white"/>
    </svg>
  );
};

export default CancleIcon;
