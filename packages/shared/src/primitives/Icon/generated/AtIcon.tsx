import React from 'react';

export interface AtIconProps {
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
 * AtIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const AtIcon: React.FC<AtIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.42763 12.1661C8.23481 12.1661 7.2639 11.195 7.2639 10.002C7.2639 8.80891 8.23481 7.8378 9.42763 7.8378C10.6204 7.8378 11.5914 8.80891 11.5914 10.002C11.5914 11.195 10.6204 12.1661 9.42763 12.1661ZM10.6686 3.03125C8.56786 2.8338 6.51333 3.57807 5.03421 5.06799C3.55439 6.55721 2.82568 8.61776 3.03569 10.7203C3.28629 13.2213 4.86201 15.3987 7.14894 16.402C8.06386 16.8032 9.03407 17 9.99728 17C11.5149 17 13.0164 16.5106 14.2561 15.5612C14.5634 15.3259 14.6215 14.8862 14.3863 14.5788C14.1511 14.2729 13.7122 14.2148 13.4049 14.4493C11.7823 15.6921 9.60108 15.9469 7.71105 15.1194C5.91343 14.331 4.62611 12.5498 4.42871 10.5803C4.2607 8.89642 4.84311 7.24686 6.02753 6.0545C7.21054 4.86284 8.85697 4.26631 10.5391 4.42595C13.3776 4.68991 15.6002 7.20835 15.6002 10.1595V10.6321C15.6002 10.9598 15.47 11.265 15.2327 11.4919C14.9961 11.7187 14.6825 11.835 14.3555 11.8209C13.7297 11.7936 13.2201 11.2048 13.2201 10.5089V7.48141C13.2201 7.09423 12.9072 6.78126 12.5201 6.78126C12.1638 6.78126 11.8824 7.04942 11.8376 7.39389C11.202 6.80576 10.3592 6.43748 9.42748 6.43748C7.46255 6.43748 5.86373 8.03733 5.86373 10.002C5.86373 11.9673 7.46255 13.5664 9.42748 13.5664C10.6175 13.5664 11.6668 12.9741 12.3143 12.0751C12.7658 12.7332 13.4819 13.1841 14.2939 13.2199C15.0031 13.2577 15.6849 12.9972 16.2008 12.5036C16.7167 12.01 17.0002 11.3455 17.0002 10.6321V10.1595C17.0002 6.4928 14.2197 3.36242 10.6686 3.03125Z" fill="currentColor"/>
    </svg>
  );
};

export default AtIcon;
