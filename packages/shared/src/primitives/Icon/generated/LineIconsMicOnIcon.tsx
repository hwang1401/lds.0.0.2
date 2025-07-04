import React from 'react';

export interface LineIconsMicOnIconProps {
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
 * LineIconsMicOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMicOnIcon: React.FC<LineIconsMicOnIconProps> = ({
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
      <g clipPath="url(#clip0_3054_24691)">
<path fillRule="evenodd" clipRule="evenodd" d="M11 14.7359V16.3999H13.105C13.598 16.3999 14 16.7215 14 17.1159V17.2847C14 17.6783 13.598 17.9999 13.105 17.9999H6.895C6.402 17.9999 6 17.6783 6 17.2847V17.1159C6 16.7215 6.402 16.3999 6.895 16.3999H9V14.7359C5.613 14.3455 3 12.0159 3 9.19988C3 8.75828 3.447 8.39988 4 8.39988C4.553 8.39988 5 8.75828 5 9.19988C5 11.4055 7.243 13.1999 10 13.1999C12.757 13.1999 15 11.4055 15 9.19988C15 8.75828 15.447 8.39988 16 8.39988C16.553 8.39988 17 8.75828 17 9.19988C17 12.0159 14.387 14.3455 11 14.7359ZM8 5.19988C8 4.31748 8.897 3.59988 10 3.59988C11.103 3.59988 12 4.31748 12 5.19988V9.19988C12 10.0823 11.103 10.7999 10 10.7999C8.897 10.7999 8 10.0823 8 9.19988V5.19988ZM10 12.3999C12.206 12.3999 14 10.9647 14 9.19988V5.19988C14 3.43588 12.206 1.99988 10 1.99988C7.794 1.99988 6 3.43588 6 5.19988V9.19988C6 10.9647 7.794 12.3999 10 12.3999Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3054_24691">
<rect width="14" height="16" fill="white" transform="translate(3 2)"/>
</clipPath>
</defs>
    </svg>
  );
};

export default LineIconsMicOnIcon;
