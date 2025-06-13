import React from 'react';

export interface UndoIconProps {
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
 * UndoIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const UndoIcon: React.FC<UndoIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.69782 9.17666C11.6982 9.17666 14.4048 10.5223 16.1168 12.684C15.3294 9.49783 12.302 7.1179 8.69782 7.1179C8.23213 7.1179 7.85571 6.74979 7.85571 6.29439V4.71079L3.7934 8.1481L7.85571 11.6167V10.0002C7.85571 9.54477 8.23213 9.17666 8.69782 9.17666ZM16.9229 17C16.5347 17 16.1961 16.7406 16.1044 16.3717C15.3549 13.3667 12.7183 11.1959 9.54015 10.8673V11.7905C9.54015 12.3719 9.18731 12.8899 8.61973 13.141C8.00415 13.4153 7.28583 13.3165 6.78647 12.8907L2.52036 9.24751C2.18941 8.96422 1.99994 8.56318 1.99994 8.1473C1.99994 7.73143 2.18941 7.33039 2.52036 7.0471L6.78647 3.40391C7.28583 2.97815 8.00415 2.87933 8.61973 3.15356C9.18731 3.40473 9.54015 3.92272 9.54015 4.50411V5.50714C14.2761 5.91313 17.9999 9.71197 17.9999 14.3236C17.9999 14.9906 17.9124 15.6791 17.7406 16.3708C17.6496 16.7406 17.3119 17 16.9229 17Z" fill="currentColor"/>
    </svg>
  );
};

export default UndoIcon;
