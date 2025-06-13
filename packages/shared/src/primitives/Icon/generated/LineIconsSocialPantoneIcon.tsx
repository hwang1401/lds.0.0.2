import React from 'react';

export interface LineIconsSocialPantoneIconProps {
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
 * LineIconsSocialPantoneIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsSocialPantoneIcon: React.FC<LineIconsSocialPantoneIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4445 15.4445H8.84424L11.6123 12.4749H15.4445V15.4445ZM4.55518 13.9597V12.3333H7.52473V13.9597C7.52473 14.7787 6.85895 15.4444 6.03995 15.4444C5.22095 15.4444 4.55518 14.7787 4.55518 13.9597ZM4.55518 6.88891H7.52473V4.55557H4.55518V6.88891ZM4.55518 10.7778H7.52473V8.44443H4.55518V10.7778ZM11.1059 6.56842L13.1849 8.50742L9.08057 12.9089V8.74075L11.1059 6.56842ZM16.2222 10.9193H13.0621L14.8526 8.999C15.1458 8.68556 15.1287 8.19322 14.8137 7.9L11.5976 4.90011C11.4459 4.76011 11.253 4.67922 11.0399 4.69244C10.8338 4.69944 10.6386 4.78811 10.4986 4.939L9.08067 6.45956V3.77778C9.08067 3.34767 8.733 3 8.30289 3H3.77778C3.34767 3 3 3.34767 3 3.77778V13.9597C3 15.6358 4.36422 17 6.04033 17H16.2222C16.6523 17 17 16.6523 17 16.2222V11.6971C17 11.267 16.6523 10.9193 16.2222 10.9193Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsSocialPantoneIcon;
