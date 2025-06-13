import React from 'react';

export interface LineIconsFlipFlip2IconProps {
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
 * LineIconsFlipFlip2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFlipFlip2Icon: React.FC<LineIconsFlipFlip2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.0361 11.6052C14.3653 11.3315 14.8975 11.3315 15.2268 11.6052L17.7531 13.7052C18.0823 13.9789 18.0823 14.4213 17.7531 14.6949L15.2268 16.7949C15.0626 16.9314 14.847 17 14.6314 17C14.4158 17 14.2003 16.9314 14.0361 16.7949C13.7068 16.5212 13.7068 16.0788 14.0361 15.8051L15.1249 14.9L5.02315 14.9C3.35581 14.9 2.00004 13.792 2.00004 12.4298L2.00004 10.7001C2.00004 10.313 2.37646 10.0001 2.84213 10.0001C3.30781 10.0001 3.68422 10.313 3.68422 10.7001L3.68422 12.4298C3.68422 13.0199 4.28464 13.5001 5.02315 13.5001L15.1249 13.5001L14.0361 12.595C13.7068 12.3213 13.7068 11.8789 14.0361 11.6052ZM4.8751 5.10015L14.9768 5.10015C16.6433 5.10015 17.9999 6.20824 17.9999 7.57042L17.9999 9.3001C17.9999 9.68719 17.6235 10.0001 17.1579 10.0001C16.6922 10.0001 16.3158 9.68719 16.3158 9.3001L16.3158 7.57042C16.3158 6.98103 15.7154 6.50013 14.9768 6.50013L4.8751 6.50013L5.96393 7.40522C6.29234 7.67892 6.29234 8.12131 5.96393 8.39501C5.79972 8.53151 5.58414 8.60011 5.36857 8.60011C5.15299 8.60011 4.93742 8.53151 4.77321 8.39501L2.24693 6.29503C1.91767 6.02134 1.91767 5.57894 2.24693 5.30525L4.77321 3.20527C5.10163 2.93158 5.63467 2.93158 5.96393 3.20527C6.29234 3.47897 6.29234 3.92136 5.96393 4.19506L4.8751 5.10015Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFlipFlip2Icon;
