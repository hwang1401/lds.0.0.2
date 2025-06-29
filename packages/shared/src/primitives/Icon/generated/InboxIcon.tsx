import React from 'react';

export interface InboxIconProps {
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
 * InboxIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const InboxIcon: React.FC<InboxIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.6663 15.4445H5.33295C4.9044 15.4445 4.55518 15.096 4.55518 14.6667V10.7778H6.11073V13.1111C6.11073 13.5412 6.45918 13.8889 6.88851 13.8889H13.1107C13.5401 13.8889 13.8885 13.5412 13.8885 13.1111V10.7778H15.4441V14.6667C15.4441 15.096 15.0948 15.4445 14.6663 15.4445ZM7.1548 4.98563C7.28702 4.72041 7.5538 4.55552 7.85013 4.55552H12.1497C12.446 4.55552 12.7128 4.72041 12.845 4.98563L14.9637 9.22218H13.111C12.6817 9.22218 12.3332 9.56985 12.3332 9.99996V12.3333H7.66658V9.99996C7.66658 9.56985 7.31813 9.22218 6.8888 9.22218H5.03613L7.1548 4.98563ZM16.8359 9.48822L14.2366 4.28956C13.8391 3.49467 13.0396 3 12.1498 3H7.85022C6.96044 3 6.16089 3.49467 5.76344 4.28956L3.16411 9.48822C3.05678 9.70289 3 9.944 3 10.1836V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V10.1836C17 9.944 16.9432 9.70289 16.8359 9.48822Z" fill="currentColor"/>
    </svg>
  );
};

export default InboxIcon;
