import React from 'react';

export interface InfoIconProps {
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
 * InfoIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const InfoIcon: React.FC<InfoIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.30015 7.2C9.30015 6.8136 9.61375 6.5 10.0002 6.5C10.3866 6.5 10.7002 6.8136 10.7002 7.2C10.7002 7.5864 10.3866 7.9 10.0002 7.9C9.61375 7.9 9.30015 7.5864 9.30015 7.2ZM9.30035 9.29999C9.30035 8.91359 9.61395 8.59999 10.0003 8.59999C10.3867 8.59999 10.7003 8.91359 10.7003 9.29999V12.8C10.7003 13.1864 10.3867 13.5 10.0003 13.5C9.61395 13.5 9.30035 13.1864 9.30035 12.8V9.29999ZM10 15.6C6.91232 15.6 4.40002 13.0877 4.40002 10C4.40002 6.9123 6.91232 4.4 10 4.4C13.0877 4.4 15.6 6.9123 15.6 10C15.6 13.0877 13.0877 15.6 10 15.6ZM10.0002 3C6.13405 3 3.00015 6.1339 3.00015 10C3.00015 13.8661 6.13405 17 10.0002 17C13.8656 17 17.0002 13.8661 17.0002 10C17.0002 6.1339 13.8656 3 10.0002 3Z" fill="currentColor"/>
    </svg>
  );
};

export default InfoIcon;
