import React from 'react';

export interface NpmIconProps {
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
 * NpmIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const NpmIcon: React.FC<NpmIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 15.4444H13.1111V7.66667H10V15.4444ZM5.33295 4.55557C4.9044 4.55557 4.55518 4.9048 4.55518 5.33335V14.6667C4.55518 15.0952 4.9044 15.4445 5.33295 15.4445H14.6663C15.0948 15.4445 15.4441 15.0952 15.4441 14.6667V5.33335C15.4441 4.9048 15.0948 4.55557 14.6663 4.55557H5.33295ZM14.6667 17H5.33333C4.04689 17 3 15.9531 3 14.6667V5.33333C3 4.04689 4.04689 3 5.33333 3H14.6667C15.9531 3 17 4.04689 17 5.33333V14.6667C17 15.9531 15.9531 17 14.6667 17Z" fill="currentColor"/>
    </svg>
  );
};

export default NpmIcon;
