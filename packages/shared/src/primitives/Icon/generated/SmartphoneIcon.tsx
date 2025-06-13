import React from 'react';

export interface SmartphoneIconProps {
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
 * SmartphoneIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SmartphoneIcon: React.FC<SmartphoneIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8125 5.19999H12.1875C12.6714 5.19999 13.0625 5.55759 13.0625 5.99999C13.0625 6.44239 12.6714 6.79999 12.1875 6.79999H7.8125C7.32863 6.79999 6.9375 6.44239 6.9375 5.99999C6.9375 5.55759 7.32863 5.19999 7.8125 5.19999ZM8.68701 13.5999C8.68701 12.9375 9.27501 12.3999 9.99951 12.3999C10.724 12.3999 11.312 12.9375 11.312 13.5999C11.312 14.2623 10.724 14.7999 9.99951 14.7999C9.27501 14.7999 8.68701 14.2623 8.68701 13.5999ZM15.2495 15.6C15.2495 16.0416 14.8575 16.4 14.3745 16.4H5.62451C5.14151 16.4 4.74951 16.0416 4.74951 15.6V4.40003C4.74951 3.95843 5.14151 3.60003 5.62451 3.60003H14.3745C14.8575 3.60003 15.2495 3.95843 15.2495 4.40003V15.6ZM14.375 2H5.625C4.17775 2 3 3.0768 3 4.4V15.6C3 16.9232 4.17775 18 5.625 18H14.375C15.8223 18 17 16.9232 17 15.6V4.4C17 3.0768 15.8223 2 14.375 2Z" fill="currentColor"/>
    </svg>
  );
};

export default SmartphoneIcon;
