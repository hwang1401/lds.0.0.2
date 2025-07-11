import React from 'react';

export interface LineIconsSocialLinkedinIconProps {
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
 * LineIconsSocialLinkedinIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsSocialLinkedinIcon: React.FC<LineIconsSocialLinkedinIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.40002 8.85703H4.39862L4.40002 16.4759H5.80003V8.85703H4.40002ZM5.8002 17.9997H4.40019C3.62809 17.9997 3.00018 17.3163 3.00018 16.4759V8.85701C3.00018 8.01665 3.62809 7.33323 4.40019 7.33323H5.8002C6.5723 7.33323 7.2002 8.01665 7.2002 8.85701V16.4759C7.2002 17.3163 6.5723 17.9997 5.8002 17.9997ZM12.4535 10.1464C12.5606 10.1464 12.6691 10.1563 12.7762 10.1746C13.7212 10.343 14.4331 11.2923 14.4331 12.3841V16.4762H15.6V12.3148C15.6 10.4085 14.1874 8.85731 12.45 8.85731C10.7133 8.85731 9.29999 10.4085 9.29999 12.3148V16.4762H10.4669V12.3148C10.4669 11.6755 10.7224 11.0721 11.169 10.6592C11.5302 10.3255 11.9845 10.1464 12.4535 10.1464ZM15.6001 18H14.4332C13.6618 18 13.0332 17.3159 13.0332 16.4762V12.3841C13.0332 12.036 12.8211 11.7266 12.5516 11.6794C12.3164 11.6352 12.1526 11.7495 12.0763 11.8196C11.9433 11.943 11.867 12.1236 11.867 12.3148V16.4762C11.867 17.3159 11.2391 18 10.467 18H9.30009C8.52869 18 7.90009 17.3159 7.90009 16.4762V12.3148C7.90009 9.56743 9.9413 7.33357 12.4501 7.33357C14.9589 7.33357 17.0001 9.56743 17.0001 12.3148V16.4762C17.0001 17.3159 16.3722 18 15.6001 18ZM5.10009 3.52382C4.71369 3.52382 4.40009 3.86514 4.40009 4.28571C4.40009 4.70627 4.71369 5.0476 5.10009 5.0476C5.48649 5.0476 5.80009 4.70627 5.80009 4.28571C5.80009 3.86514 5.48649 3.52382 5.10009 3.52382ZM5.10019 6.57136C3.94239 6.57136 3.00018 5.54586 3.00018 4.28569C3.00018 3.02552 3.94239 2.00002 5.10019 2.00002C6.258 2.00002 7.2002 3.02552 7.2002 4.28569C7.2002 5.54586 6.258 6.57136 5.10019 6.57136Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsSocialLinkedinIcon;
