import React from 'react';

export interface LineIconsRadioButtonOnIconProps {
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
 * LineIconsRadioButtonOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsRadioButtonOnIcon: React.FC<LineIconsRadioButtonOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 12.1C8.84231 12.1 7.90009 11.1578 7.90009 9.99999C7.90009 8.84216 8.84231 7.89994 10.0001 7.89994C11.158 7.89994 12.1002 8.84216 12.1002 9.99999C12.1002 11.1578 11.158 12.1 10.0001 12.1ZM9.99987 6.49994C8.06992 6.49994 6.49979 8.07008 6.49979 10C6.49979 11.93 8.06992 13.5001 9.99987 13.5001C11.9298 13.5001 13.4999 11.93 13.4999 10C13.4999 8.07008 11.9298 6.49994 9.99987 6.49994ZM9.99987 15.6002C6.9121 15.6002 4.39974 13.0878 4.39974 10C4.39974 6.91225 6.9121 4.39989 9.99987 4.39989C13.0876 4.39989 15.6 6.91225 15.6 10C15.6 13.0878 13.0876 15.6002 9.99987 15.6002ZM9.99984 2.99986C6.13995 2.99986 2.99968 6.14014 2.99968 10C2.99968 13.8599 6.13995 17.0002 9.99984 17.0002C13.8597 17.0002 17 13.8599 17 10C17 6.14014 13.8597 2.99986 9.99984 2.99986Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsRadioButtonOnIcon;
