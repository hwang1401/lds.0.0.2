import React from 'react';

export interface LineIconsPersonPersonIconProps {
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
 * LineIconsPersonPersonIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPersonPersonIcon: React.FC<LineIconsPersonPersonIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 17.1111C17 17.6018 16.553 18 16 18C15.447 18 15 17.6018 15 17.1111C15 14.6605 12.757 12.6667 10 12.6667C7.243 12.6667 5 14.6605 5 17.1111C5 17.6018 4.553 18 4 18C3.447 18 3 17.6018 3 17.1111C3 13.68 6.141 10.8889 10 10.8889C13.859 10.8889 17 13.68 17 17.1111ZM10 3.77773C11.103 3.77773 12 4.57507 12 5.55551C12 6.53596 11.103 7.33329 10 7.33329C8.897 7.33329 8 6.53596 8 5.55551C8 4.57507 8.897 3.77773 10 3.77773ZM10.0001 9.11111C12.2061 9.11111 14.0001 7.51644 14.0001 5.55556C14.0001 3.59467 12.2061 2 10.0001 2C7.79406 2 6.00007 3.59467 6.00007 5.55556C6.00007 7.51644 7.79406 9.11111 10.0001 9.11111Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPersonPersonIcon;
