import React from 'react';

export interface UnlockIconProps {
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
 * UnlockIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const UnlockIcon: React.FC<UnlockIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 13.2C9.51708 13.2 9.12508 12.8416 9.12508 12.4C9.12508 11.9584 9.51708 11.6 10.0001 11.6C10.4831 11.6 10.8751 11.9584 10.8751 12.4C10.8751 12.8416 10.4831 13.2 10.0001 13.2ZM10.0001 10C8.55283 10 7.37508 11.0768 7.37508 12.4C7.37508 13.7232 8.55283 14.8 10.0001 14.8C11.4473 14.8 12.6251 13.7232 12.6251 12.4C12.6251 11.0768 11.4473 10 10.0001 10ZM15.2501 15.6C15.2501 16.0416 14.8581 16.4 14.3751 16.4H5.62508C5.14208 16.4 4.75008 16.0416 4.75008 15.6V9.19999C4.75008 8.75839 5.14208 8.39999 5.62508 8.39999H14.3751C14.8581 8.39999 15.2501 8.75839 15.2501 9.19999V15.6ZM14.3751 6.79999H8.25008V5.2C8.25008 4.3176 9.03495 3.6 10.0001 3.6C10.9652 3.6 11.7501 4.3176 11.7501 5.2C11.7501 5.6424 12.1412 5.99999 12.6251 5.99999C13.109 5.99999 13.5001 5.6424 13.5001 5.2C13.5001 3.4352 11.9303 2 10.0001 2C8.06983 2 6.50008 3.4352 6.50008 5.2V6.79999H5.62508C4.17783 6.79999 3.00008 7.87679 3.00008 9.19999V15.6C3.00008 16.9232 4.17783 18 5.62508 18H14.3751C15.8223 18 17.0001 16.9232 17.0001 15.6V9.19999C17.0001 7.87679 15.8223 6.79999 14.3751 6.79999Z" fill="currentColor"/>
    </svg>
  );
};

export default UnlockIcon;
