import React from 'react';

export interface LineIconsLogOutIconProps {
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
 * LineIconsLogOutIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsLogOutIcon: React.FC<LineIconsLogOutIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.76449 4.8125C5.76449 5.25937 5.34097 5.625 4.82333 5.625H3.88217V15.375H4.82333C5.34097 15.375 5.76449 15.7406 5.76449 16.1875C5.76449 16.6344 5.34097 17 4.82333 17H2.94101C2.42337 17 1.99985 16.6344 1.99985 16.1875V4.8125C1.99985 4.36562 2.42337 4 2.94101 4H4.82333C5.34097 4 5.76449 4.36562 5.76449 4.8125ZM15.1796 6.78265L17.8281 10.0326C18.0633 10.3203 18.0558 10.7062 17.8111 10.9873L14.9876 14.2373C14.8032 14.4502 14.5199 14.5623 14.2338 14.5623C14.038 14.5623 13.8394 14.5095 13.67 14.3998C13.254 14.1309 13.1702 13.6215 13.4818 13.2631L15.1768 11.3123H15.1759H7.64657C7.12705 11.3123 6.70541 10.9491 6.70541 10.4998C6.70541 10.0505 7.12705 9.68733 7.64657 9.68733H15.1759C15.1914 9.68733 15.2058 9.69103 15.2204 9.69476C15.2322 9.6978 15.2441 9.70086 15.2568 9.70196L13.6399 7.71702C13.3406 7.35058 13.4432 6.84358 13.8686 6.58521C14.2931 6.32602 14.8803 6.4154 15.1796 6.78265Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsLogOutIcon;
