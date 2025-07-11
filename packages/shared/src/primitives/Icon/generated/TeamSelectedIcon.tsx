import React from 'react';

export interface TeamSelectedIconProps {
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
 * TeamSelectedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const TeamSelectedIcon: React.FC<TeamSelectedIconProps> = ({
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
      <path d="M7.29997 10.5C8.53765 10.5 9.72462 10.9917 10.5998 11.8669C11.475 12.742 11.9666 13.9289 11.9666 15.1667V21C11.9666 21.3094 11.8437 21.6062 11.6249 21.8249C11.4061 22.0437 11.1094 22.1667 10.8 22.1667H3.79997C3.49054 22.1667 3.1938 22.0437 2.97501 21.8249C2.75622 21.6062 2.6333 21.3094 2.6333 21V15.1667C2.6333 13.9289 3.12496 12.742 4.00013 11.8669C4.87531 10.9917 6.06229 10.5 7.29997 10.5Z" fill="#009FE9"/>
<path d="M7.29997 9.33333C8.9108 9.33333 10.2166 8.02749 10.2166 6.41667C10.2166 4.80584 8.9108 3.5 7.29997 3.5C5.68914 3.5 4.3833 4.80584 4.3833 6.41667C4.3833 8.02749 5.68914 9.33333 7.29997 9.33333Z" fill="#009FE9"/>
<path d="M24.8 22.1667H17.8C17.4906 22.1667 17.1938 22.0437 16.975 21.8249C16.7562 21.6062 16.6333 21.3094 16.6333 21V15.1667C16.6333 13.9289 17.1249 12.742 18.0002 11.8669C18.8753 10.9917 20.0623 10.5 21.3 10.5C22.5377 10.5 23.7246 10.9917 24.5998 11.8669C25.475 12.742 25.9666 13.9289 25.9666 15.1667V21C25.9666 21.3094 25.8437 21.6062 25.6249 21.8249C25.4062 22.0437 25.1094 22.1667 24.8 22.1667Z" fill="#009FE9"/>
<path d="M21.3 9.33333C22.9108 9.33333 24.2166 8.02749 24.2166 6.41667C24.2166 4.80584 22.9108 3.5 21.3 3.5C19.6892 3.5 18.3833 4.80584 18.3833 6.41667C18.3833 8.02749 19.6892 9.33333 21.3 9.33333Z" fill="#009FE9"/>
<path d="M13.2736 14H15.3152C16.553 14 17.7399 14.4916 18.615 15.3669C19.4903 16.242 19.9819 17.4289 19.9819 18.6667V24.5C19.9819 24.8094 19.8591 25.1062 19.6402 25.3249C19.4214 25.5437 19.1246 25.6667 18.8152 25.6667H9.7736C9.46418 25.6667 9.16744 25.5437 8.94864 25.3249C8.72984 25.1062 8.60693 24.8094 8.60693 24.5V18.6667C8.60693 17.4289 9.09859 16.242 9.97377 15.3669C10.8489 14.4916 12.036 14 13.2736 14Z" fill="#009FE9"/>
<path d="M14.3 12.8333C15.9108 12.8333 17.2166 11.5275 17.2166 9.91667C17.2166 8.30584 15.9108 7 14.3 7C12.6892 7 11.3833 8.30584 11.3833 9.91667C11.3833 11.5275 12.6892 12.8333 14.3 12.8333Z" fill="#009FE9"/>
    </svg>
  );
};

export default TeamSelectedIcon;
