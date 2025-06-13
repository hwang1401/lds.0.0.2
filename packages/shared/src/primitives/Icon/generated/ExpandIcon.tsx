import React from 'react';

export interface ExpandIconProps {
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
 * ExpandIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ExpandIcon: React.FC<ExpandIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1266 3.02206C16.6078 3.02468 16.9972 3.41494 16.9972 3.8962L16.9998 8.24943C17.0007 8.73244 16.6087 9.12533 16.1257 9.12533H16.1248C15.6418 9.12533 15.2507 8.73332 15.2498 8.25118L15.248 5.98925L12.3683 8.86895C12.1977 9.03958 11.9737 9.12533 11.7497 9.12533C11.5266 9.12533 11.3026 9.03958 11.1311 8.86895C10.7898 8.52681 10.7898 7.97293 11.1311 7.63167L14.0011 4.7616L11.7462 4.75022C11.2623 4.7476 10.8721 4.35296 10.8747 3.87083C10.8773 3.38869 11.2693 3.00018 11.7497 3.00018H11.7541L16.1266 3.02206ZM7.6315 11.1314C7.97363 10.7893 8.52664 10.7893 8.86878 11.1314C9.21091 11.4735 9.21091 12.0265 8.86878 12.3687L5.98821 15.2492L8.25014 15.2501C8.73402 15.2501 9.12516 15.6421 9.12516 16.126C9.12428 16.609 8.73315 17.0002 8.25014 17.0002H8.24926L3.89603 16.9975C3.41477 16.9975 3.02451 16.6081 3.02189 16.1269L3.00001 11.7544C2.99739 11.2714 3.38765 10.8776 3.87066 10.875H3.87503C4.3563 10.875 4.74743 11.2635 4.75005 11.7457L4.76143 14.0015L7.6315 11.1314Z" fill="currentColor"/>
    </svg>
  );
};

export default ExpandIcon;
