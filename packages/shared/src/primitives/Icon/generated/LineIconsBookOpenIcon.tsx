import React from 'react';

export interface LineIconsBookOpenIconProps {
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
 * LineIconsBookOpenIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsBookOpenIcon: React.FC<LineIconsBookOpenIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.2225 13.8519L10.8892 15.0314V6.14804L16.2225 4.96948V13.8519ZM3.77783 4.96948L9.11117 6.14804V15.0314L3.77783 13.8519V4.96948ZM17.6667 3.19159C17.4551 3.02623 17.1796 2.96323 16.9156 3.02185L10 4.55126L3.08444 3.02185C2.81956 2.96236 2.54489 3.02623 2.33333 3.19159C2.12267 3.35871 2 3.60982 2 3.8758V14.5519C2 14.9614 2.288 15.3157 2.69333 15.405L9.80444 16.9781C9.87022 16.993 9.93511 17 10 17C10.0649 17 10.1298 16.993 10.1956 16.9781L17.3067 15.405C17.712 15.3157 18 14.9614 18 14.5519V3.8758C18 3.60982 17.8773 3.35871 17.6667 3.19159Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsBookOpenIcon;
