import React from 'react';

export interface BrowserIconProps {
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
 * BrowserIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BrowserIcon: React.FC<BrowserIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.11133 6.11111C6.11133 5.681 6.45977 5.33333 6.88911 5.33333C7.31844 5.33333 7.66688 5.681 7.66688 6.11111C7.66688 6.54122 7.31844 6.88889 6.88911 6.88889C6.45977 6.88889 6.11133 6.54122 6.11133 6.11111ZM9.22253 6.11111C9.22253 5.681 9.57097 5.33333 10.0003 5.33333C10.4296 5.33333 10.7781 5.681 10.7781 6.11111C10.7781 6.54122 10.4296 6.88889 10.0003 6.88889C9.57097 6.88889 9.22253 6.54122 9.22253 6.11111ZM4.55518 7.66669V5.33335C4.55518 4.90402 4.9044 4.55557 5.33295 4.55557H14.6663C15.0948 4.55557 15.4441 4.90402 15.4441 5.33335V7.66669H4.55518ZM15.4441 14.6667C15.4441 15.096 15.0948 15.4445 14.6663 15.4445H5.33295C4.9044 15.4445 4.55518 15.096 4.55518 14.6667V9.22224H15.4441V14.6667ZM14.6667 3H5.33333C4.04689 3 3 4.04689 3 5.33333V7.66667V9.22222V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V9.22222V7.66667V5.33333C17 4.04689 15.9531 3 14.6667 3Z" fill="currentColor"/>
    </svg>
  );
};

export default BrowserIcon;
