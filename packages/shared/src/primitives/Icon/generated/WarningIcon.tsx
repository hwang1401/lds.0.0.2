import React from 'react';

export interface WarningIconProps {
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
 * WarningIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const WarningIcon: React.FC<WarningIconProps> = ({
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
      <path d="M18.3334 9.99999C18.3334 5.39761 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39761 1.66669 9.99999C1.66669 14.6023 5.39765 18.3333 10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99999Z" fill="#FFC738"/>
<path d="M10.585 5.41666H9.41469C9.30136 5.41647 9.18919 5.43686 9.08511 5.47654C8.98103 5.51622 8.88719 5.57436 8.80944 5.64738C8.73169 5.7204 8.6717 5.80676 8.63303 5.90112C8.59436 5.99549 8.57786 6.09587 8.5847 6.19608L8.94986 11.6667H11.0415L11.415 6.19608C11.4219 6.09587 11.4054 5.99549 11.3667 5.90112C11.3281 5.80676 11.268 5.7204 11.1903 5.64738C11.1125 5.57436 11.0187 5.51622 10.9146 5.47654C10.8105 5.43686 10.6984 5.41647 10.585 5.41666Z" fill="white"/>
<path d="M10 15.3003C10.6903 15.3003 11.25 14.7407 11.25 14.0503C11.25 13.3599 10.6903 12.8003 10 12.8003C9.30967 12.8003 8.75 13.3599 8.75 14.0503C8.75 14.7407 9.30967 15.3003 10 15.3003Z" fill="white"/>
    </svg>
  );
};

export default WarningIcon;
