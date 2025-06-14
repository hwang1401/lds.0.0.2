import React from 'react';

export interface LineIconsPersonDoneIconProps {
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
 * LineIconsPersonDoneIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPersonDoneIcon: React.FC<LineIconsPersonDoneIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.15787 10.7778C5.31441 10.7778 3 13.22 3 16.2222C3 16.6515 3.32937 17 3.73684 17C4.14431 17 4.47368 16.6515 4.47368 16.2222C4.47368 14.0779 6.12641 12.3333 8.15787 12.3333C10.1893 12.3333 11.8421 14.0779 11.8421 16.2222C11.8421 16.6515 12.1714 17 12.5789 17C12.9864 17 13.3157 16.6515 13.3157 16.2222C13.3157 13.22 11.0013 10.7778 8.15787 10.7778ZM6.68408 6.11107C6.68408 6.96896 7.34503 7.66663 8.15776 7.66663C8.97049 7.66663 9.63144 6.96896 9.63144 6.11107C9.63144 5.25318 8.97049 4.55552 8.15776 4.55552C7.34503 4.55552 6.68408 5.25318 6.68408 6.11107ZM5.21038 6.11111C5.21038 4.39533 6.53226 3 8.15773 3C9.7832 3 11.1051 4.39533 11.1051 6.11111C11.1051 7.82689 9.7832 9.22222 8.15773 9.22222C6.53226 9.22222 5.21038 7.82689 5.21038 6.11111ZM16.8194 5.06579L14.8962 7.39912C14.7569 7.5679 14.5565 7.66512 14.3443 7.66668H14.3399C14.1299 7.66668 13.9302 7.57256 13.791 7.40768L12.7667 6.19979C12.4956 5.87934 12.5214 5.38779 12.8242 5.10157C13.1285 4.81457 13.5942 4.84179 13.8646 5.16223L14.3318 5.71368L15.7067 4.04534C15.9742 3.72023 16.4392 3.68679 16.7464 3.96912C17.0537 4.25068 17.0861 4.74223 16.8194 5.06579Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPersonDoneIcon;
