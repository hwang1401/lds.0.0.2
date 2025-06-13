import React from 'react';

export interface PercentIconProps {
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
 * PercentIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PercentIcon: React.FC<PercentIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7724 3.21494C16.4687 2.92835 15.9761 2.92835 15.6725 3.21494L3.22845 14.927C3.0762 15.0703 3.00008 15.2572 3.00008 15.445C3.00008 15.6319 3.0762 15.8197 3.22845 15.9621C3.53207 16.2479 4.02381 16.2479 4.32831 15.9621L16.7724 4.2501C17.076 3.96351 17.076 3.5007 16.7724 3.21494ZM13.5005 15.353C12.7769 15.353 12.1881 14.7987 12.1881 14.1177C12.1881 13.4366 12.7769 12.8824 13.5005 12.8824C14.2242 12.8824 14.813 13.4366 14.813 14.1177C14.813 14.7987 14.2242 15.353 13.5005 15.353ZM13.5 11.2354C11.8113 11.2354 10.4376 12.5283 10.4376 14.1177C10.4376 15.7071 11.8113 17 13.5 17C15.1888 17 16.5625 15.7071 16.5625 14.1177C16.5625 12.5283 15.1888 11.2354 13.5 11.2354ZM6.50006 4.64729C7.22367 4.64729 7.81254 5.20152 7.81254 5.88256C7.81254 6.56361 7.22367 7.11784 6.50006 7.11784C5.77644 7.11784 5.18758 6.56361 5.18758 5.88256C5.18758 5.20152 5.77644 4.64729 6.50006 4.64729ZM6.50036 8.76491C8.18909 8.76491 9.56282 7.47199 9.56282 5.88261C9.56282 4.29322 8.18909 3.00031 6.50036 3.00031C4.81164 3.00031 3.43791 4.29322 3.43791 5.88261C3.43791 7.47199 4.81164 8.76491 6.50036 8.76491Z" fill="currentColor"/>
    </svg>
  );
};

export default PercentIcon;
