import React from 'react';

export interface LineIconsCloseCloseIconProps {
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
 * LineIconsCloseCloseIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCloseCloseIcon: React.FC<LineIconsCloseCloseIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6499 10L16.6583 4.99158C17.1145 4.53542 17.1145 3.7981 16.6583 3.34194C16.2021 2.88578 15.4648 2.88578 15.0086 3.34194L10.0002 8.35038L4.99177 3.34194C4.53561 2.88578 3.79828 2.88578 3.34212 3.34194C2.88596 3.7981 2.88596 4.53542 3.34212 4.99158L8.35056 10L3.34212 15.0085C2.88596 15.4646 2.88596 16.202 3.34212 16.6581C3.56962 16.8856 3.86828 16.9999 4.16694 16.9999C4.46561 16.9999 4.76427 16.8856 4.99177 16.6581L10.0002 11.6497L15.0086 16.6581C15.2361 16.8856 15.5348 16.9999 15.8335 16.9999C16.1321 16.9999 16.4308 16.8856 16.6583 16.6581C17.1145 16.202 17.1145 15.4646 16.6583 15.0085L11.6499 10Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCloseCloseIcon;
