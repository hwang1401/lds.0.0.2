import React from 'react';

export interface LineIconsArrowArrowheadDownIconProps {
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
 * LineIconsArrowArrowheadDownIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrowheadDownIcon: React.FC<LineIconsArrowArrowheadDownIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99994 10.0002C9.77295 10.0002 9.54496 9.92316 9.35996 9.76815L3.36013 4.76791C2.93614 4.41389 2.87914 3.78386 3.23213 3.35984C3.58612 2.93482 4.2151 2.87882 4.64009 3.23183L10.0109 7.70705L15.3728 3.39284C15.8028 3.04682 16.4338 3.11483 16.7788 3.54485C17.1257 3.97487 17.0567 4.6039 16.6268 4.95092L10.6269 9.77915C10.4439 9.92616 10.2219 10.0002 9.99994 10.0002ZM10.011 14.7079L15.3729 10.3927C15.8029 10.0477 16.4339 10.1157 16.7789 10.5447C17.1248 10.9757 17.0568 11.6047 16.6269 11.9518L10.627 16.78C10.444 16.927 10.222 17 10 17C9.77205 17 9.54505 16.923 9.36006 16.768L3.36023 11.7678C2.93524 11.4147 2.87824 10.7847 3.23223 10.3597C3.58522 9.93566 4.2152 9.87766 4.64019 10.2317L10.011 14.7079Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrowheadDownIcon;
