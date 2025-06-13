import React from 'react';

export interface LineIconsFolderFolderIconProps {
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
 * LineIconsFolderFolderIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFolderFolderIcon: React.FC<LineIconsFolderFolderIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M3.60005 11.4453V14.9972C3.60005 15.1932 3.77925 15.3529 4.00005 15.3529H16C16.2208 15.3529 16.4 15.1932 16.4 14.9972V7.92303C16.4 7.72621 16.2208 7.56727 16 7.56727H10C9.76005 7.56727 9.53285 7.45609 9.38085 7.26421L7.30085 4.64703H4.00005C3.77925 4.64703 3.60005 4.80597 3.60005 5.00197V11.4453ZM16 17H4C2.8976 17 2 16.1015 2 14.9972V5.002C2 3.89765 2.8976 3 4 3H7.6808C7.92 3 8.148 3.11035 8.3 3.30224L10.3792 5.92024H16C17.1024 5.92024 18 6.81788 18 7.92306V14.9972C18 16.1015 17.1024 17 16 17Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFolderFolderIcon;
