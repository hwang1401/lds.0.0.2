import React from 'react';

export interface ShakeIconProps {
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
 * ShakeIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ShakeIcon: React.FC<ShakeIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.762 6.78885C10.5174 6.7277 10.2645 6.68422 10.0001 6.68422C9.73576 6.68422 9.48282 6.7277 9.23826 6.78885V3.73685C9.23826 3.32938 9.57958 3.00001 10.0001 3.00001C10.4207 3.00001 10.762 3.32938 10.762 3.73685V6.78885ZM5.04769 14.7895C4.87398 14.7895 4.70028 14.7328 4.55704 14.6163C2.90836 13.2738 2.00021 11.5039 2.00021 9.6316C2.00021 7.75928 2.90836 5.98939 4.55704 4.64686C4.87855 4.38381 5.35929 4.42433 5.63128 4.73602C5.90174 5.04696 5.8606 5.51191 5.53909 5.77423C4.23935 6.8316 3.52395 8.20212 3.52395 9.6316C3.52395 11.0611 4.23935 12.4316 5.53909 13.489C5.8606 13.7513 5.90174 14.2162 5.63128 14.5272C5.48043 14.7003 5.26482 14.7895 5.04769 14.7895ZM10.0004 10.3685C9.58057 10.3685 9.23849 10.0383 9.23849 9.63161C9.23849 9.22487 9.58057 8.89477 10.0004 8.89477C10.4202 8.89477 10.7622 9.22487 10.7622 9.63161C10.7622 10.0383 10.4202 10.3685 10.0004 10.3685ZM10.0004 12.579C9.73599 12.579 9.48305 12.5355 9.23849 12.4744V16.2632C9.23849 16.6707 9.57981 17 10.0004 17C10.4209 17 10.7622 16.6707 10.7622 16.2632V12.4744C10.5177 12.5355 10.2647 12.579 10.0004 12.579ZM12.4646 13.0542C12.6162 13.2266 12.831 13.3158 13.0482 13.3158C13.2219 13.3158 13.3956 13.259 13.5388 13.1426C14.6961 12.1995 15.3338 10.9527 15.3338 9.63156C15.3338 8.31041 14.6961 7.06367 13.5388 6.12051C13.2173 5.8582 12.7358 5.89872 12.4646 6.20893C12.1941 6.52062 12.2352 6.98556 12.5568 7.24788C13.3651 7.90514 13.81 8.75251 13.81 9.63156C13.81 10.5106 13.3651 11.358 12.5568 12.0152C12.2352 12.2776 12.1941 12.7425 12.4646 13.0542ZM6.95232 13.3158C6.77862 13.3158 6.60491 13.2591 6.46168 13.1426C5.3044 12.1995 4.66672 10.9527 4.66672 9.63159C4.66672 8.31043 5.3044 7.0637 6.46168 6.12054C6.78319 5.85822 7.26393 5.89801 7.53591 6.20896C7.80638 6.52064 7.76524 6.98559 7.44373 7.24791C6.63539 7.90517 6.19045 8.75254 6.19045 9.63159C6.19045 10.5106 6.63539 11.358 7.44373 12.0153C7.76524 12.2776 7.80638 12.7425 7.53591 13.0542C7.38506 13.2266 7.16946 13.3158 6.95232 13.3158ZM14.3689 14.5272C14.5197 14.7004 14.7353 14.7895 14.9525 14.7895C15.1262 14.7895 15.2999 14.7328 15.4431 14.6164C17.0918 13.2738 17.9999 11.5039 17.9999 9.63162C17.9999 7.7593 17.0918 5.98941 15.4431 4.64688C15.1208 4.38456 14.6401 4.42435 14.3689 4.73604C14.0984 5.04698 14.1395 5.51193 14.461 5.77425C15.7608 6.83162 16.4762 8.20214 16.4762 9.63162C16.4762 11.0611 15.7608 12.4316 14.461 13.489C14.1395 13.7513 14.0984 14.2162 14.3689 14.5272Z" fill="currentColor"/>
    </svg>
  );
};

export default ShakeIcon;
