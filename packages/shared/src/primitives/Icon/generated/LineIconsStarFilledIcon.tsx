import React from 'react';

export interface LineIconsStarFilledIconProps {
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
 * LineIconsStarFilledIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsStarFilledIcon: React.FC<LineIconsStarFilledIconProps> = ({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={combinedStyle}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6723 20.3998C16.5387 20.3998 16.4051 20.367 16.2833 20.2997L12 17.9386L7.71662 20.2997C7.43269 20.4556 7.08995 20.4282 6.83374 20.2296C6.57501 20.0311 6.44648 19.6952 6.50025 19.3628L7.31676 14.3748L3.85581 10.8429C3.6248 10.608 3.54247 10.2553 3.64076 9.93356C3.7382 9.61183 4.00197 9.37785 4.31867 9.3291L9.10772 8.59525L11.2473 4.05211C11.5312 3.44943 12.4687 3.44943 12.7526 4.05211L14.8922 8.59525L19.6813 9.3291C19.998 9.37785 20.2617 9.61183 20.3592 9.93356C20.4575 10.2553 20.3752 10.608 20.1441 10.8429L16.6832 14.3748L17.4997 19.3628C17.5535 19.6952 17.4249 20.0311 17.1662 20.2296C17.0209 20.3431 16.847 20.3998 16.6723 20.3998" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsStarFilledIcon;
