import React from 'react';

export interface LineIconsQuestionMarkCircleIconProps {
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
 * LineIconsQuestionMarkCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsQuestionMarkCircleIcon: React.FC<LineIconsQuestionMarkCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.54996 8.24997C7.54996 6.89897 8.64896 5.79997 9.99996 5.79997C11.351 5.79997 12.45 6.89897 12.45 8.24997C12.45 9.35597 11.708 10.2821 10.7 10.5859V11.4C10.7 11.7871 10.3871 12.1 9.99996 12.1C9.61286 12.1 9.29996 11.7871 9.29996 11.4V9.99997C9.29996 9.61287 9.61286 9.29997 9.99996 9.29997C10.5789 9.29997 11.05 8.82887 11.05 8.24997C11.05 7.67107 10.5789 7.19997 9.99996 7.19997C9.42106 7.19997 8.94996 7.67107 8.94996 8.24997C8.94996 8.63707 8.63706 8.94997 8.24996 8.94997C7.86286 8.94997 7.54996 8.63707 7.54996 8.24997ZM9.29996 13.4999C9.29996 13.1128 9.61286 12.7999 9.99996 12.7999C10.3871 12.7999 10.7 13.1128 10.7 13.4999C10.7 13.887 10.3871 14.1999 9.99996 14.1999C9.61286 14.1999 9.29996 13.887 9.29996 13.4999ZM10.0001 15.6C6.91235 15.6 4.40005 13.0877 4.40005 10C4.40005 6.9123 6.91235 4.4 10.0001 4.4C13.0878 4.4 15.6001 6.9123 15.6001 10C15.6001 13.0877 13.0878 15.6 10.0001 15.6ZM10.0002 2.99998C6.14035 2.99998 3.00015 6.14018 3.00015 9.99998C3.00015 13.8598 6.14035 17 10.0002 17C13.86 17 17.0002 13.8598 17.0002 9.99998C17.0002 6.14018 13.86 2.99998 10.0002 2.99998Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsQuestionMarkCircleIcon;
