import React from 'react';

export interface LineIconsFlipFlip1IconProps {
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
 * LineIconsFlipFlip1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFlipFlip1Icon: React.FC<LineIconsFlipFlip1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6051 5.96393C11.3314 5.63468 11.3314 5.10247 11.6051 4.77322L13.7051 2.24694C13.9788 1.91768 14.4212 1.91768 14.6949 2.24694L16.7948 4.77322C16.9313 4.93742 16.9999 5.153 16.9999 5.36857C16.9999 5.58415 16.9313 5.79973 16.7948 5.96393C16.5211 6.29319 16.0787 6.29319 15.805 5.96393L14.9 4.87511V14.9768C14.9 16.6442 13.7919 18 12.4297 18H10.7C10.3129 18 10 17.6235 10 17.1579C10 16.6922 10.3129 16.3158 10.7 16.3158H12.4297C13.0198 16.3158 13.5 15.7154 13.5 14.9768V4.87511L12.5949 5.96393C12.3212 6.29319 11.8788 6.29319 11.6051 5.96393ZM5.10012 15.1249V5.02316C5.10012 3.35666 6.2082 2.00005 7.57039 2.00005H9.30007C9.68716 2.00005 10.0001 2.37646 10.0001 2.84214C10.0001 3.30782 9.68716 3.68423 9.30007 3.68423H7.57039C6.981 3.68423 6.5001 4.28464 6.5001 5.02316V15.1249L7.40519 14.0361C7.67889 13.7077 8.12128 13.7077 8.39498 14.0361C8.53148 14.2003 8.60008 14.4159 8.60008 14.6314C8.60008 14.847 8.53148 15.0626 8.39498 15.2268L6.295 17.7531C6.02131 18.0823 5.57891 18.0823 5.30522 17.7531L3.20524 15.2268C2.93155 14.8984 2.93155 14.3653 3.20524 14.0361C3.47894 13.7077 3.92133 13.7077 4.19503 14.0361L5.10012 15.1249Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFlipFlip1Icon;
