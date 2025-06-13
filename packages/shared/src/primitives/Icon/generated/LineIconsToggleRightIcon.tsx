import React from 'react';

export interface LineIconsToggleRightIconProps {
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
 * LineIconsToggleRightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsToggleRightIcon: React.FC<LineIconsToggleRightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.4002 10.8571C11.9586 10.8571 11.6002 10.4731 11.6002 10C11.6002 9.52685 11.9586 9.14285 12.4002 9.14285C12.8418 9.14285 13.2002 9.52685 13.2002 10C13.2002 10.4731 12.8418 10.8571 12.4002 10.8571ZM12.4002 7.4285C11.077 7.4285 10.0002 8.58221 10.0002 9.99993C10.0002 11.4176 11.077 12.5714 12.4002 12.5714C13.7234 12.5714 14.8002 11.4176 14.8002 9.99993C14.8002 8.58221 13.7234 7.4285 12.4002 7.4285ZM12.4002 14.2857H7.60018C5.39458 14.2857 3.60018 12.3631 3.60018 9.99998C3.60018 7.63684 5.39458 5.71426 7.60018 5.71426H12.4002C14.6058 5.71426 16.4002 7.63684 16.4002 9.99998C16.4002 12.3631 14.6058 14.2857 12.4002 14.2857ZM12.4002 3.99997H7.60018C4.51298 3.99997 2.00018 6.69226 2.00018 9.99997C2.00018 13.3077 4.51298 16 7.60018 16H12.4002C15.4874 16 18.0002 13.3077 18.0002 9.99997C18.0002 6.69226 15.4874 3.99997 12.4002 3.99997Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsToggleRightIcon;
