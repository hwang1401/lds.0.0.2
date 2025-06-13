import React from 'react';

export interface FoldIconProps {
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
 * FoldIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const FoldIcon: React.FC<FoldIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6 3.23077H4.66667C3.93029 3.23077 3.33333 3.7818 3.33333 4.46154V15.5385C3.33333 16.2182 3.93029 16.7692 4.66667 16.7692H6V3.23077ZM4.66667 2C3.19391 2 2 3.10207 2 4.46154V15.5385C2 16.8979 3.19391 18 4.66667 18H7.33333V2H4.66667ZM18 4.46154C18 3.10207 16.8061 2 15.3333 2H7.33333V3.23077H15.3333C16.0697 3.23077 16.6667 3.7818 16.6667 4.46154V15.5385C16.6667 16.2182 16.0697 16.7692 15.3333 16.7692H7.33333V18H15.3333C16.8061 18 18 16.8979 18 15.5385V4.46154ZM12.7785 6.57143C12.6288 6.57143 12.4796 6.64137 12.3676 6.78057L10.16 9.52336C9.94402 9.79283 9.94688 10.22 10.1675 10.4847L12.4534 13.2275C12.6762 13.4956 13.038 13.4956 13.2614 13.2275C13.4843 12.9594 13.4843 12.526 13.2614 12.2579L11.3727 9.99169L13.1894 7.73369C13.4089 7.46078 13.4026 7.02673 13.1757 6.76411C13.0643 6.6352 12.9214 6.57143 12.7785 6.57143Z" fill="currentColor"/>
    </svg>
  );
};

export default FoldIcon;
