import React from 'react';

export interface LineIconsFileFileIconProps {
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
 * LineIconsFileFileIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFileFileIcon: React.FC<LineIconsFileFileIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.763 16.4H5.23514C4.96739 16.4 4.74951 16.2208 4.74951 16V4C4.74951 3.7792 4.96739 3.6 5.23514 3.6H9.12451V6.92C9.12451 8.1776 10.1894 9.2 11.4993 9.2H15.2495V16C15.2495 16.2208 15.0308 16.4 14.763 16.4ZM14.9429 7.6H11.4998C11.155 7.6 10.875 7.2952 10.875 6.92V3.6H10.973L14.9429 7.6ZM16.7725 7.0624L12.009 2.2624C11.8436 2.0952 11.6083 2 11.3606 2H5.23563C4.00275 2 3 2.8976 3 4V16C3 17.1024 4.00275 18 5.23563 18H14.7635C15.9964 18 17 17.1024 17 16V7.6C17 7.4008 16.9186 7.2096 16.7725 7.0624Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFileFileIcon;
