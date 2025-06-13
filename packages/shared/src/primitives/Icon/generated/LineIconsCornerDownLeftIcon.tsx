import React from 'react';

export interface LineIconsCornerDownLeftIconProps {
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
 * LineIconsCornerDownLeftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerDownLeftIcon: React.FC<LineIconsCornerDownLeftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.9805 3.99337C16.9787 3.44383 16.5603 3 16.0467 3H16.0429C15.5274 3.00199 15.1109 3.45081 15.1128 4.00135L15.1324 8.98817C15.1324 9.25447 15.0372 9.50581 14.8616 9.69431C14.6851 9.88381 14.4516 9.98853 14.2023 9.98953L5.87318 10.0264L8.38153 6.64936C8.70185 6.2175 8.63368 5.59015 8.23025 5.24806C7.82682 4.90596 7.23942 4.97977 6.91817 5.40963L3.20234 10.4124C2.93059 10.7784 2.93339 11.2951 3.20701 11.6591L6.96113 16.629C7.14604 16.8733 7.41592 17 7.68861 17C7.89499 17 8.10231 16.9272 8.27507 16.7786C8.6757 16.4335 8.7392 15.8052 8.41515 15.3763L5.88065 12.0212L14.2098 11.9843C14.9578 11.9813 15.66 11.6671 16.1877 11.0996C16.7144 10.5321 17.0029 9.77908 17.0001 8.9802L16.9805 3.99337Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerDownLeftIcon;
