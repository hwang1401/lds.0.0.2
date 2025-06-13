import React from 'react';

export interface ArchiveIconProps {
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
 * ArchiveIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ArchiveIcon: React.FC<ArchiveIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.34055 11.5556H11.6601C12.0303 11.5556 12.3337 11.2522 12.3337 10.882V10.6736C12.3337 10.3033 12.0303 10 11.6601 10H8.34055C7.96955 10 7.66699 10.3033 7.66699 10.6736V10.882C7.66699 11.2522 7.96955 11.5556 8.34055 11.5556ZM14.6663 14.6667C14.6663 15.0952 14.3179 15.4444 13.8886 15.4444H6.11079C5.68223 15.4444 5.33301 15.0952 5.33301 14.6667V7.66666H14.6663V14.6667ZM5.33295 4.55556H14.6663C15.0956 4.55556 15.4441 4.90478 15.4441 5.33334C15.4441 5.76189 15.0956 6.11111 14.6663 6.11111H5.33295C4.9044 6.11111 4.55518 5.76189 4.55518 5.33334C4.55518 4.90478 4.9044 4.55556 5.33295 4.55556ZM17 5.33333C17 4.04689 15.9531 3 14.6667 3H5.33333C4.04689 3 3 4.04689 3 5.33333C3 6.02011 3.30411 6.63222 3.77778 7.06V14.6667C3.77778 15.9531 4.82467 17 6.11111 17H13.8889C15.1753 17 16.2222 15.9531 16.2222 14.6667V7.06C16.6959 6.63222 17 6.02011 17 5.33333Z" fill="currentColor"/>
    </svg>
  );
};

export default ArchiveIcon;
