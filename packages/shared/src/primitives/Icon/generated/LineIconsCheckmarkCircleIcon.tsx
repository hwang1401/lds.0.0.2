import React from 'react';

export interface LineIconsCheckmarkCircleIconProps {
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
 * LineIconsCheckmarkCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCheckmarkCircleIcon: React.FC<LineIconsCheckmarkCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.8932 7.4761L9.24434 10.9545L8.10122 9.49424C7.86321 9.18904 7.4222 9.13584 7.11839 9.37454C6.81389 9.61255 6.75999 10.0529 6.99869 10.3567L8.70043 12.5316C8.83343 12.701 9.03644 12.7997 9.25204 12.7997H9.25694C9.47325 12.799 9.67765 12.6968 9.80856 12.5239L13.0069 8.32382C13.2414 8.01581 13.1819 7.5776 12.8739 7.34309C12.5652 7.10859 12.127 7.16879 11.8932 7.4761ZM9.99987 15.6002C6.9121 15.6002 4.39974 13.0878 4.39974 10C4.39974 6.91225 6.9121 4.39989 9.99987 4.39989C13.0876 4.39989 15.6 6.91225 15.6 10C15.6 13.0878 13.0876 15.6002 9.99987 15.6002ZM9.99984 2.99986C6.13365 2.99986 2.99968 6.13454 2.99968 10C2.99968 13.8655 6.13365 17.0002 9.99984 17.0002C13.866 17.0002 17 13.8655 17 10C17 6.13454 13.866 2.99986 9.99984 2.99986Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCheckmarkCircleIcon;
