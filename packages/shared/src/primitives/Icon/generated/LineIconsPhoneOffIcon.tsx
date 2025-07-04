import React from 'react';

export interface LineIconsPhoneOffIconProps {
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
 * LineIconsPhoneOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPhoneOffIcon: React.FC<LineIconsPhoneOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.28894 11.8409C5.10876 10.2722 4.40037 8.32901 4.40037 6.21995C4.40037 5.21616 5.21656 4.39998 6.21964 4.39998C6.29664 4.39998 6.37224 4.40488 6.44924 4.41538L7.19192 7.64932L7.07272 7.71152L7.07271 7.71152C6.98521 7.75713 6.89569 7.8038 6.81043 7.84882C6.20074 8.16732 5.76045 8.39761 5.98584 8.9597C6.24904 9.70869 6.63053 10.4031 7.09113 11.0387L8.09141 10.0384C7.88001 9.72619 7.69102 9.39719 7.53212 9.0514C8.4001 8.59641 8.4029 8.59431 8.4981 8.49491C8.6619 8.32481 8.7277 8.08332 8.6752 7.85372L7.71692 3.67899C7.66302 3.44379 7.49222 3.2527 7.26472 3.1743C7.09813 3.1162 6.92593 3.0735 6.75583 3.0462C6.58153 3.0161 6.40234 3 6.21964 3C4.44447 3 3.00039 4.44478 3.00039 6.21995C3.00039 8.71611 3.86068 11.01 5.29006 12.8397L6.28894 11.8409ZM15.4177 4.58254C15.1748 4.33894 14.7814 4.33894 14.5378 4.58254L4.58255 14.5378C4.46145 14.6596 4.40055 14.8185 4.40055 14.9781C4.40055 15.137 4.46145 15.2966 4.58255 15.4177C4.82544 15.6606 5.21954 15.6606 5.46243 15.4177L15.4177 5.46242C15.6613 5.21883 15.6613 4.82543 15.4177 4.58254ZM16.8252 12.736C16.8826 12.9005 16.9267 13.072 16.9547 13.247C16.9841 13.4206 16.9995 13.5991 16.9995 13.7804C16.9995 15.5555 15.5554 16.9996 13.7802 16.9996C11.2834 16.9996 8.98951 16.1393 7.16045 14.71L8.15933 13.7111C9.728 14.8913 11.6705 15.5996 13.7802 15.5996C14.7833 15.5996 15.5995 14.7835 15.5995 13.7804C15.5995 13.702 15.5953 13.6257 15.5848 13.5508L12.3509 12.8081L12.1514 13.1896L12.1481 13.1959C11.8313 13.8016 11.6019 14.2402 11.0125 14.0037C10.2754 13.7454 9.58941 13.3674 8.95872 12.911L9.9597 11.91C10.2726 12.1228 10.6023 12.3118 10.9481 12.4693C11.4024 11.6004 11.4052 11.5978 11.5049 11.5023L11.5053 11.5019C11.6754 11.3381 11.9162 11.2737 12.1465 11.3248L16.3212 12.2831C16.5564 12.337 16.7468 12.5078 16.8252 12.736Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPhoneOffIcon;
