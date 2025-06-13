import React from 'react';

export interface LineIconsArrowDiagonalLeftUpIconProps {
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
 * LineIconsArrowDiagonalLeftUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowDiagonalLeftUpIcon: React.FC<LineIconsArrowDiagonalLeftUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6581 15.0085L6.98767 5.33805L13.5011 5.33338C14.1451 5.33338 14.6666 4.80955 14.6666 4.16555C14.6666 3.52156 14.144 3.00006 13.5 3.00006H13.4988L4.22386 3.00706C3.58219 3.00823 3.06303 3.52622 3.05836 4.16672L3.00003 13.493C2.99536 14.137 3.51453 14.6632 4.15969 14.6667H4.16669C4.80835 14.6667 5.32868 14.1487 5.33335 13.507L5.37418 7.02387L15.0085 16.6581C15.236 16.8856 15.5346 17 15.8333 17C16.1319 17 16.4306 16.8856 16.6581 16.6581C17.1143 16.202 17.1143 15.4646 16.6581 15.0085Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowDiagonalLeftUpIcon;
