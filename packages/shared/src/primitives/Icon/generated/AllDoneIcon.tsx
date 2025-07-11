import React from 'react';

export interface AllDoneIconProps {
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
 * AllDoneIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const AllDoneIcon: React.FC<AllDoneIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4659 5.17742C13.1005 4.89242 12.5716 4.95742 12.2845 5.31992L6.34361 12.8266L3.49822 9.32909C3.20517 8.97159 2.67635 8.91325 2.31425 9.20242C1.95132 9.49159 1.8949 10.0166 2.18541 10.3741L5.69605 14.6891C5.85689 14.8858 6.09772 14.9999 6.35288 14.9999H6.35877C6.61476 14.9983 6.85728 14.8808 7.01559 14.6799L13.6099 6.34659C13.8971 5.98492 13.8331 5.46075 13.4659 5.17742ZM17.6763 5.17742C17.31 4.89242 16.782 4.95742 16.4948 5.31992L10.554 12.8266L10.0453 12.2024L8.98011 13.5499L9.9064 14.6891C10.0672 14.8858 10.3081 14.9999 10.5632 14.9999H10.5691C10.8251 14.9983 11.0676 14.8808 11.2259 14.6799L17.8203 6.34659C18.1074 5.98492 18.0434 5.46075 17.6763 5.17742ZM7.87756 9.53708L6.81065 10.8837L6.39634 10.3746C6.10498 10.0162 6.1614 9.49125 6.52434 9.20208C6.88728 8.91375 7.41695 8.97125 7.70831 9.32958L7.87756 9.53708Z" fill="currentColor"/>
    </svg>
  );
};

export default AllDoneIcon;
