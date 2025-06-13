import React from 'react';

export interface LineIconsLogInIconProps {
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
 * LineIconsLogInIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsLogInIcon: React.FC<LineIconsLogInIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.1763 4H17.0586C17.5763 4 17.9998 4.36562 17.9998 4.8125V16.1875C17.9998 16.6344 17.5763 17 17.0586 17H15.1763C14.6587 17 14.2352 16.6344 14.2352 16.1875C14.2352 15.7406 14.6587 15.375 15.1763 15.375H16.1175V5.625H15.1763C14.6587 5.625 14.2352 5.25937 14.2352 4.8125C14.2352 4.36562 14.6587 4 15.1763 4ZM8.96444 6.60032C9.38232 6.33138 9.97055 6.4045 10.2821 6.76282L13.1056 10.0128C13.3503 10.2939 13.3578 10.6791 13.1225 10.9675L10.4741 14.2175C10.2905 14.4426 9.99972 14.5628 9.70326 14.5628C9.51691 14.5628 9.32773 14.5149 9.16303 14.4149C8.73762 14.1566 8.63503 13.6496 8.93432 13.2823L10.5512 11.2982C10.5386 11.2993 10.5267 11.3023 10.5148 11.3054C10.5003 11.3091 10.4859 11.3128 10.4703 11.3128H2.94098C2.42146 11.3128 1.99982 10.9488 1.99982 10.5003C1.99982 10.051 2.42146 9.68782 2.94098 9.68782H10.4703H10.4712L8.77621 7.737C8.46468 7.37869 8.54845 6.86925 8.96444 6.60032Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsLogInIcon;
