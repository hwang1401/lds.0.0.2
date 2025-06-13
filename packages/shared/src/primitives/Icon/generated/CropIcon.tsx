import React from 'react';

export interface CropIconProps {
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
 * CropIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CropIcon: React.FC<CropIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5893 12.8C7.3751 12.8 7.2001 12.6257 7.2001 12.4108V7.19999H12.4116C12.6258 7.19999 12.8001 7.37429 12.8001 7.58919V12.8H7.5893ZM16.2999 12.8H14.1999V7.58918C14.1999 6.60218 13.3977 5.79998 12.4114 5.79998H7.19991V3.69998C7.19991 3.31288 6.88701 2.99998 6.49991 2.99998C6.11351 2.99998 5.79991 3.31288 5.79991 3.69998V5.79998H3.69991C3.31351 5.79998 2.99991 6.11288 2.99991 6.49998C2.99991 6.88708 3.31351 7.19998 3.69991 7.19998H5.79991V12.4108C5.79991 13.3978 6.60281 14.2 7.58911 14.2H12.7999V16.3C12.7999 16.6871 13.1135 17 13.4999 17C13.887 17 14.1999 16.6871 14.1999 16.3V14.2H16.2999C16.687 14.2 16.9999 13.8871 16.9999 13.5C16.9999 13.1129 16.687 12.8 16.2999 12.8Z" fill="currentColor"/>
    </svg>
  );
};

export default CropIcon;
