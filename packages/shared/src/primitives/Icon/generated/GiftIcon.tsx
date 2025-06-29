import React from 'react';

export interface GiftIconProps {
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
 * GiftIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const GiftIcon: React.FC<GiftIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7778 15.4444H14.2778V12.3333H10.7778V15.4444ZM5.72217 15.4444H9.22217V12.3333H5.72217V15.4444ZM4.55518 7.82222C4.55518 7.75767 4.56529 7.70556 4.5754 7.66667H6.99973H9.22184V10.7778H4.5754C4.56529 10.7389 4.55518 10.6868 4.55518 10.6222V7.82222ZM6.11133 5.33335C6.11133 4.90402 6.51033 4.55557 7.00033 4.55557C7.97799 4.55557 8.57688 5.40335 8.90666 6.11113H7.00033C6.51033 6.11113 6.11133 5.76269 6.11133 5.33335ZM12.9999 4.55557C13.4899 4.55557 13.8889 4.90402 13.8889 5.33335C13.8889 5.76269 13.4899 6.11113 12.9999 6.11113H11.0889C11.4155 5.40335 12.0129 4.55557 12.9999 4.55557ZM15.4445 7.82222V10.6222C15.4445 10.6868 15.4344 10.7389 15.4243 10.7778H10.7778V7.66667H12.9999H15.4243C15.4344 7.70556 15.4445 7.75767 15.4445 7.82222ZM15.6 6.11111H15.2943C15.3861 5.86689 15.4444 5.60789 15.4444 5.33333C15.4444 4.04689 14.3478 3 12.9999 3C11.505 3 10.567 3.93256 10 4.86433C9.433 3.93256 8.495 3 7.00011 3C5.65222 3 4.55556 4.04689 4.55556 5.33333C4.55556 5.60789 4.61467 5.86689 4.70567 6.11111H4.4C3.61522 6.11111 3 6.86322 3 7.82222V10.6222C3 11.4832 3.49778 12.1723 4.16667 12.3053V15.7034C4.16667 16.4182 4.799 17 5.576 17H14.4232C15.201 17 15.8333 16.4182 15.8333 15.7034V12.3053C16.5022 12.1723 17 11.4832 17 10.6222V7.82222C17 6.86322 16.3848 6.11111 15.6 6.11111Z" fill="currentColor"/>
    </svg>
  );
};

export default GiftIcon;
