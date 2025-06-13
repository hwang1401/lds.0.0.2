import React from 'react';

export interface LineIconsCheckmarkCheckmarkIconProps {
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
 * LineIconsCheckmarkCheckmarkIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCheckmarkCheckmarkIcon: React.FC<LineIconsCheckmarkCheckmarkIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8636 15.9999C7.5876 15.9999 7.32361 15.8859 7.13461 15.6849L2.27171 10.506C1.89272 10.104 1.91372 9.471 2.31571 9.09301C2.7187 8.71501 3.35169 8.73501 3.72868 9.13701L7.8536 13.5279L16.2614 4.32611C16.6354 3.91711 17.2674 3.89012 17.6754 4.26211C18.0824 4.6341 18.1104 5.26709 17.7384 5.67408L8.60158 15.6739C8.41458 15.8799 8.14859 15.9979 7.8706 15.9999H7.8636Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCheckmarkCheckmarkIcon;
