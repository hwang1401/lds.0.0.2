import React from 'react';

export interface LineIconsQuestionMarkIconProps {
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
 * LineIconsQuestionMarkIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsQuestionMarkIcon: React.FC<LineIconsQuestionMarkIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99982 2.00002C12.7568 2.00002 14.9998 4.24302 14.9998 7.00002C14.9998 9.41402 13.2788 11.435 10.9998 11.898V13C10.9998 13.553 10.5528 14 9.99982 14C9.44682 14 8.99982 13.553 8.99982 13V11C8.99982 10.447 9.44682 10 9.99982 10C11.6538 10 12.9998 8.65402 12.9998 7.00002C12.9998 5.34602 11.6538 4.00002 9.99982 4.00002C8.34582 4.00002 6.99982 5.34602 6.99982 7.00002C6.99982 7.55302 6.55282 8.00002 5.99982 8.00002C5.44682 8.00002 4.99982 7.55302 4.99982 7.00002C4.99982 4.24302 7.24282 2.00002 9.99982 2.00002ZM9.00001 17C9.00001 16.447 9.44701 16 10 16C10.553 16 11 16.447 11 17C11 17.553 10.553 18 10 18C9.44701 18 9.00001 17.553 9.00001 17Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsQuestionMarkIcon;
