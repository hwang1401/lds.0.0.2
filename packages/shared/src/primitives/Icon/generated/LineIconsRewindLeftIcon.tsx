import React from 'react';

export interface LineIconsRewindLeftIconProps {
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
 * LineIconsRewindLeftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsRewindLeftIcon: React.FC<LineIconsRewindLeftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1172 13.3212L11.5789 10.002L16.1172 6.74286V13.3212ZM8.58802 13.3212L4.04966 10.002L8.58802 6.74286V13.3212ZM17.0116 5.16784C16.3208 4.88034 15.5048 4.96534 14.9326 5.38451L10.4704 8.64784V6.48951C10.4704 5.92867 10.0921 5.42201 9.4822 5.16784C8.79138 4.88034 7.97538 4.96534 7.40314 5.38451L2.60314 8.89451C2.22008 9.17451 1.99985 9.57867 1.99985 10.0003C1.99985 10.422 2.22008 10.8253 2.60408 11.1053L7.40314 14.617C7.74949 14.8695 8.1862 15.0012 8.62949 15.0012C8.91844 15.0012 9.2102 14.9453 9.4822 14.832C10.0921 14.5778 10.4704 14.0712 10.4704 13.5112V11.352L14.9326 14.617C15.2789 14.8695 15.7156 15.0012 16.1589 15.0012C16.4478 15.0012 16.7396 14.9453 17.0116 14.832C17.6215 14.5778 17.9998 14.0712 17.9998 13.5112V6.48951C17.9998 5.92867 17.6215 5.42201 17.0116 5.16784Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsRewindLeftIcon;
