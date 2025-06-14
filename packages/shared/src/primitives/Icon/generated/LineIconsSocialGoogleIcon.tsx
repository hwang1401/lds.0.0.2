import React from 'react';

export interface LineIconsSocialGoogleIconProps {
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
 * LineIconsSocialGoogleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsSocialGoogleIcon: React.FC<LineIconsSocialGoogleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0022 4.40006C8.47474 4.40006 7.04812 5.00279 5.9841 6.09835C4.92008 7.1925 4.35867 8.63668 4.40277 10.1649C4.48468 13.0378 6.88712 15.4732 9.75716 15.595C12.8246 15.7161 15.4406 13.3465 15.5967 10.2937C15.6016 10.2041 15.6009 9.80853 15.5995 9.44032H10.698V10.5478H14.4143L14.1308 11.4564C13.6261 13.0763 12.3465 14.188 10.7078 14.4302C9.48556 14.6073 8.21224 14.258 7.21612 13.462C6.2382 12.6829 5.62499 11.5502 5.53259 10.3539C5.43599 9.0889 5.8539 7.88344 6.71211 6.95729C7.87833 5.69723 9.76346 5.2121 11.3791 5.73643L11.9202 4.73608C11.3077 4.51277 10.6644 4.40006 10.0022 4.40006ZM9.99738 17C9.89868 17 9.79857 16.9979 9.69847 16.9937C6.10881 16.8418 3.10576 13.7966 3.00286 10.2047C2.94896 8.29504 3.65037 6.49035 4.97969 5.12248C6.31042 3.75391 8.09335 2.99998 10.0023 2.99998C11.0061 2.99998 11.9763 3.20859 12.8856 3.61951C13.1383 3.73361 13.335 3.95062 13.4239 4.21524C13.5142 4.48335 13.489 4.78017 13.3546 5.02868L12.4502 6.69756C12.2045 7.15398 11.6501 7.34999 11.1657 7.14768C10.0086 6.67656 8.59455 6.98458 7.73914 7.90862C7.14973 8.54495 6.86203 9.3752 6.92853 10.246C6.99153 11.0567 7.41433 11.8295 8.08915 12.3678C8.78496 12.923 9.66837 13.1701 10.5028 13.0455C11.2728 12.9314 11.9112 12.545 12.3452 11.9478H10.3131C9.75377 11.9478 9.29807 11.4928 9.29807 10.9328V9.05528C9.29807 8.49595 9.75377 8.04023 10.3131 8.04023H15.9832C16.5383 8.04023 16.994 8.49175 16.9982 9.04688C17.0003 9.4886 17.0017 10.2355 16.9954 10.3643C16.8043 14.0829 13.6941 17 9.99738 17Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsSocialGoogleIcon;
