import React from 'react';

export interface LineIconsPlusSquareIconProps {
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
 * LineIconsPlusSquareIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPlusSquareIcon: React.FC<LineIconsPlusSquareIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3333 9.22222H10.7777V7.66667C10.7777 7.23889 10.4277 6.88889 9.99995 6.88889C9.57217 6.88889 9.22217 7.23889 9.22217 7.66667V9.22222H7.66662C7.23884 9.22222 6.88884 9.57222 6.88884 10C6.88884 10.4278 7.23884 10.7778 7.66662 10.7778H9.22217V12.3333C9.22217 12.7611 9.57217 13.1111 9.99995 13.1111C10.4277 13.1111 10.7777 12.7611 10.7777 12.3333V10.7778H12.3333C12.7611 10.7778 13.1111 10.4278 13.1111 10C13.1111 9.57222 12.7611 9.22222 12.3333 9.22222ZM15.4442 14.6667C15.4442 15.0952 15.0958 15.4444 14.6665 15.4444H5.33312C4.90379 15.4444 4.55534 15.0952 4.55534 14.6667V5.33333C4.55534 4.90477 4.90379 4.55555 5.33312 4.55555H14.6665C15.0958 4.55555 15.4442 4.90477 15.4442 5.33333V14.6667ZM14.6668 3H5.3335C4.04706 3 3.00017 4.04689 3.00017 5.33333V14.6667C3.00017 15.9531 4.04706 17 5.3335 17H14.6668C15.9533 17 17.0002 15.9531 17.0002 14.6667V5.33333C17.0002 4.04689 15.9533 3 14.6668 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPlusSquareIcon;
