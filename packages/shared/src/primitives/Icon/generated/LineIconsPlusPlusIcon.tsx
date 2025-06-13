import React from 'react';

export interface LineIconsPlusPlusIconProps {
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
 * LineIconsPlusPlusIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPlusPlusIcon: React.FC<LineIconsPlusPlusIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1252 9.12501H10.8752V3.875C10.8752 3.39113 10.4832 3 10.0002 3C9.51716 3 9.12516 3.39113 9.12516 3.875V9.12501H3.87515C3.39215 9.12501 3.00015 9.51613 3.00015 10C3.00015 10.4839 3.39215 10.875 3.87515 10.875H9.12516V16.125C9.12516 16.6089 9.51716 17 10.0002 17C10.4832 17 10.8752 16.6089 10.8752 16.125V10.875H16.1252C16.6082 10.875 17.0002 10.4839 17.0002 10C17.0002 9.51613 16.6082 9.12501 16.1252 9.12501Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPlusPlusIcon;
