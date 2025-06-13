import React from 'react';

export interface PrinterIconProps {
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
 * PrinterIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PrinterIcon: React.FC<PrinterIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6001 13.3701C15.6001 13.6563 15.4006 13.8889 15.1542 13.8889H14.5501V12.3333C14.5501 11.4754 13.9222 10.7778 13.1501 10.7778H6.85006C6.07796 10.7778 5.45006 11.4754 5.45006 12.3333V13.8889H4.84596C4.59956 13.8889 4.40006 13.6563 4.40006 13.3701V8.18544C4.40006 7.89922 4.59956 7.66667 4.84596 7.66667H5.80006H7.20006H12.8001H14.2001H15.1542C15.4006 7.66667 15.6001 7.89922 15.6001 8.18544V13.3701ZM6.85026 15.4444V12.3333H13.1503L13.1517 15.4444H6.85026ZM7.21014 4.55557H12.8003V6.11113H7.20524L7.21014 4.55557ZM15.1543 6.11111H14.2002V4.55556C14.2002 3.69767 13.6248 3 12.9171 3H7.08326C6.37556 3 5.80016 3.69767 5.80016 4.55556V6.11111H4.84606C3.82826 6.11111 3.00016 7.04133 3.00016 8.18544V13.3701C3.00016 14.5142 3.82826 15.4444 4.84606 15.4444H5.45016C5.45016 16.3023 6.07806 17 6.85016 17H13.1502C13.9223 17 14.5502 16.3023 14.5502 15.4444H15.1543C16.1721 15.4444 17.0002 14.5142 17.0002 13.3701V8.18544C17.0002 7.04133 16.1721 6.11111 15.1543 6.11111Z" fill="currentColor"/>
    </svg>
  );
};

export default PrinterIcon;
