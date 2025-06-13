import React from 'react';

export interface LineIconsMoreVerticalIconProps {
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
 * LineIconsMoreVerticalIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMoreVerticalIcon: React.FC<LineIconsMoreVerticalIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99982 5.89189C11.074 5.89189 11.9458 5.02011 11.9458 3.94595C11.9458 2.87178 11.074 2 9.99982 2C8.92566 2 8.05388 2.87178 8.05388 3.94595C8.05388 5.02011 8.92566 5.89189 9.99982 5.89189ZM9.99982 8.054C8.92566 8.054 8.05388 8.92579 8.05388 9.99995C8.05388 11.0741 8.92566 11.9459 9.99982 11.9459C11.074 11.9459 11.9458 11.0741 11.9458 9.99995C11.9458 8.92579 11.074 8.054 9.99982 8.054ZM8.05388 16.054C8.05388 14.9799 8.92566 14.1081 9.99982 14.1081C11.074 14.1081 11.9458 14.9799 11.9458 16.054C11.9458 17.1282 11.074 18 9.99982 18C8.92566 18 8.05388 17.1282 8.05388 16.054Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMoreVerticalIcon;
