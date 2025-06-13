import React from 'react';

export interface CompassIconProps {
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
 * CompassIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CompassIcon: React.FC<CompassIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.18875 11.8262L9.26374 9.20345L11.8112 8.17363L10.7362 10.7964L8.18875 11.8262ZM12.7623 7.23741C12.5567 7.01987 12.2342 6.93585 11.9379 7.05287L8.77753 8.32961C8.58999 8.40538 8.44071 8.55315 8.3642 8.74069L7.0552 11.9348C6.94418 12.2056 7.00945 12.4981 7.18873 12.7059C7.19473 12.7134 7.19923 12.7232 7.20598 12.7314C7.21798 12.7442 7.23224 12.7547 7.24574 12.7674C7.38677 12.9122 7.57805 13 7.78059 13C7.87436 13 7.96962 12.9827 8.06114 12.946L11.2215 11.67C11.409 11.5935 11.5583 11.4457 11.6348 11.2582L12.9438 8.06406C13.0653 7.76851 12.9813 7.44445 12.7623 7.23741ZM10.0001 15.6C6.91235 15.6 4.40005 13.0877 4.40005 10C4.40005 6.9123 6.91235 4.4 10.0001 4.4C13.0878 4.4 15.6001 6.9123 15.6001 10C15.6001 13.0877 13.0878 15.6 10.0001 15.6ZM10.0002 2.99998C6.14035 2.99998 3.00015 6.14018 3.00015 9.99998C3.00015 13.8598 6.14035 17 10.0002 17C13.86 17 17.0002 13.8598 17.0002 9.99998C17.0002 6.14018 13.86 2.99998 10.0002 2.99998Z" fill="currentColor"/>
    </svg>
  );
};

export default CompassIcon;
