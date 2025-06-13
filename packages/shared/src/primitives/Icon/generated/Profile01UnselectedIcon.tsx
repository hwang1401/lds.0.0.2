import React from 'react';

export interface Profile01UnselectedIconProps {
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
 * Profile01UnselectedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const Profile01UnselectedIcon: React.FC<Profile01UnselectedIconProps> = ({
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
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={combinedStyle}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <path d="M12.1667 11.6666H16.8334C18.3805 11.6666 19.8643 12.2812 20.9581 13.3751C22.0521 14.4691 22.6667 15.9528 22.6667 17.5V24.5C22.6667 25.1188 22.4209 25.7122 21.9833 26.1499C21.5457 26.5875 20.9522 26.8333 20.3334 26.8333H8.66671C8.04787 26.8333 7.45438 26.5875 7.0168 26.1499C6.5792 25.7122 6.33337 25.1188 6.33337 24.5V17.5C6.33337 15.9528 6.94795 14.4691 8.04192 13.3751C9.13588 12.2812 10.6196 11.6666 12.1667 11.6666Z" fill="#C2C2C2"/>
<path d="M14.5 10.5C17.0773 10.5 19.1667 8.41062 19.1667 5.83329C19.1667 3.25596 17.0773 1.16663 14.5 1.16663C11.9227 1.16663 9.83337 3.25596 9.83337 5.83329C9.83337 8.41062 11.9227 10.5 14.5 10.5Z" fill="#C2C2C2"/>
    </svg>
  );
};

export default Profile01UnselectedIcon;
