import React from 'react';

export interface ClipboardIconProps {
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
 * ClipboardIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ClipboardIcon: React.FC<ClipboardIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4443 15.6C15.4443 16.0416 15.0951 16.4 14.6665 16.4H5.33318C4.90463 16.4 4.5554 16.0416 4.5554 15.6V6.79998C4.5554 6.35838 4.90463 5.99998 5.33318 5.99998V6.79998C5.33318 7.68238 6.03085 8.39998 6.88874 8.39998H13.111C13.9688 8.39998 14.6665 7.68238 14.6665 6.79998V5.99998C15.0951 5.99998 15.4443 6.35838 15.4443 6.79998V15.6ZM6.88874 3.60002L13.111 3.60242V4.40002V6.80002H6.88874V4.40002V3.60002ZM14.6667 4.39998V3.59998C14.6667 2.71758 13.969 1.99998 13.1111 1.99998H6.88889C6.031 1.99998 5.33333 2.71758 5.33333 3.59998V4.39998C4.04689 4.39998 3 5.47678 3 6.79998V15.6C3 16.9232 4.04689 18 5.33333 18H14.6667C15.9531 18 17 16.9232 17 15.6V6.79998C17 5.47678 15.9531 4.39998 14.6667 4.39998Z" fill="currentColor"/>
    </svg>
  );
};

export default ClipboardIcon;
