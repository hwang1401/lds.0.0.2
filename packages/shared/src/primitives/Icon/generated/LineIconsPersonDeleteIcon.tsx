import React from 'react';

export interface LineIconsPersonDeleteIconProps {
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
 * LineIconsPersonDeleteIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPersonDeleteIcon: React.FC<LineIconsPersonDeleteIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.29723 10.7778C5.37694 10.7778 3 13.2208 3 16.2222C3 16.6523 3.33827 17 3.75675 17C4.17523 17 4.51349 16.6523 4.51349 16.2222C4.51349 14.0779 6.21088 12.3333 8.29723 12.3333C10.3836 12.3333 12.081 14.0779 12.081 16.2222C12.081 16.6523 12.4192 17 12.8377 17C13.2562 17 13.5945 16.6523 13.5945 16.2222C13.5945 13.2208 11.2175 10.7778 8.29723 10.7778ZM6.78369 6.11108C6.78369 6.96897 7.46249 7.66663 8.29718 7.66663C9.13188 7.66663 9.81068 6.96897 9.81068 6.11108C9.81068 5.25319 9.13188 4.55552 8.29718 4.55552C7.46249 4.55552 6.78369 5.25319 6.78369 6.11108ZM5.27026 6.11111C5.27026 4.39533 6.62787 3 8.29725 3C9.96663 3 11.3242 4.39533 11.3242 6.11111C11.3242 7.82689 9.96663 9.22222 8.29725 9.22222C6.62787 9.22222 5.27026 7.82689 5.27026 6.11111ZM16.7717 7.06933C17.0767 7.38356 17.0767 7.89611 16.7717 8.20956C16.4667 8.523 15.968 8.523 15.6623 8.20956L15.1084 7.63945L14.5544 8.20956C14.2487 8.523 13.75 8.523 13.445 8.20956C13.1401 7.89611 13.1401 7.38356 13.445 7.06933L13.9997 6.5L13.445 5.93067C13.1401 5.61645 13.1401 5.10389 13.445 4.79045C13.75 4.477 14.2487 4.477 14.5544 4.79045L15.1084 5.36056L15.6623 4.79045C15.968 4.477 16.4667 4.477 16.7717 4.79045C17.0767 5.10389 17.0767 5.61645 16.7717 5.93067L16.217 6.5L16.7717 7.06933Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPersonDeleteIcon;
