import React from 'react';

export interface LineIconsVolumeOnIconProps {
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
 * LineIconsVolumeOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsVolumeOnIcon: React.FC<LineIconsVolumeOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.71397 12.1592H9.42797C9.60111 12.1592 9.76997 12.2143 9.91311 12.3147L14.2854 15.4241V4.57703L9.91311 7.68634C9.76997 7.78678 9.60111 7.84189 9.42797 7.84189H5.71397V12.1592ZM15.1427 18C14.973 18 14.8033 17.9484 14.6584 17.8444L9.16242 13.9369H4.85699C4.38385 13.9369 3.99985 13.5396 3.99985 13.048V6.95298C3.99985 6.46142 4.38385 6.06409 4.85699 6.06409H9.16242L14.6584 2.15568C14.9198 1.96901 15.2601 1.94857 15.5421 2.10323C15.8233 2.25612 15.9998 2.55923 15.9998 2.88901V17.1111C15.9998 17.4409 15.8233 17.744 15.5421 17.8978C15.417 17.9662 15.2798 18 15.1427 18Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsVolumeOnIcon;
