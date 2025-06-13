import React from 'react';

export interface LineIconsFlashOffIconProps {
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
 * LineIconsFlashOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFlashOffIcon: React.FC<LineIconsFlashOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.46217 7.35619L9.63683 5.59546L8.92018 6.76491L7.95887 5.71691L10.0388 2.32345C10.2088 2.04417 10.5321 1.92926 10.8201 2.04417C11.1088 2.15835 11.2888 2.47326 11.2554 2.80563L10.7428 7.96419H14.6667C14.9127 7.96419 15.1387 8.11183 15.2547 8.34819C15.3707 8.58528 15.3573 8.87256 15.2207 9.0951L13.5521 11.8187L12.5914 10.77L13.4194 9.41874H11.3521L9.46217 7.35619ZM15.8045 15.3043L5.13814 3.66791C4.87748 3.38354 4.45615 3.38354 4.19549 3.66791C3.93484 3.95227 3.93484 4.41191 4.19549 4.69627L14.8619 16.3327C14.9919 16.4745 15.1625 16.5458 15.3332 16.5458C15.5038 16.5458 15.6745 16.4745 15.8045 16.3327C16.0652 16.0483 16.0652 15.5887 15.8045 15.3043ZM10.3632 14.4051L10.5379 12.6444L8.64791 10.5818H6.58064L7.40862 9.23052L6.44798 8.18179L4.77936 10.9054C4.64269 11.128 4.62936 11.4153 4.74536 11.6523C4.86135 11.8887 5.08735 12.0364 5.33334 12.0364H9.25723L8.74458 17.1949C8.71125 17.5273 8.89124 17.8422 9.1799 17.9564C9.25457 17.9862 9.33123 18 9.40723 18C9.62522 18 9.83522 17.8836 9.96121 17.6771L12.0412 14.2836L11.0798 13.2356L10.3632 14.4051Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFlashOffIcon;
