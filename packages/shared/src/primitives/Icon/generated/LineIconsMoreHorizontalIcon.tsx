import React from 'react';

export interface LineIconsMoreHorizontalIconProps {
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
 * LineIconsMoreHorizontalIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMoreHorizontalIcon: React.FC<LineIconsMoreHorizontalIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0002 8.22217C9.01885 8.22217 8.22239 9.01863 8.22239 9.99998C8.22239 10.9813 9.01885 11.7778 10.0002 11.7778C10.9816 11.7778 11.778 10.9813 11.778 9.99998C11.778 9.01863 10.9816 8.22217 10.0002 8.22217ZM16.2223 8.22217C15.2409 8.22217 14.4445 9.01863 14.4445 9.99998C14.4445 10.9813 15.2409 11.7778 16.2223 11.7778C17.2036 11.7778 18.0001 10.9813 18.0001 9.99998C18.0001 9.01863 17.2036 8.22217 16.2223 8.22217ZM1.99994 9.99999C1.99994 9.01864 2.7964 8.22217 3.77776 8.22217C4.75911 8.22217 5.55557 9.01864 5.55557 9.99999C5.55557 10.9813 4.75911 11.7778 3.77776 11.7778C2.7964 11.7778 1.99994 10.9813 1.99994 9.99999Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMoreHorizontalIcon;
