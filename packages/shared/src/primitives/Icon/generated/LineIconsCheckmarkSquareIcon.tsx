import React from 'react';

export interface LineIconsCheckmarkSquareIconProps {
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
 * LineIconsCheckmarkSquareIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCheckmarkSquareIcon: React.FC<LineIconsCheckmarkSquareIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1034 7.19574L9.16024 11.0605L7.89013 9.43808C7.62491 9.09897 7.13647 9.03985 6.79813 9.30508C6.4598 9.56952 6.39991 10.0587 6.66513 10.3963L8.55591 12.8129C8.70369 13.0011 8.92924 13.1107 9.1688 13.1107H9.17424C9.41458 13.11 9.64169 12.9964 9.78713 12.8043L13.3408 8.13763C13.6014 7.79541 13.5352 7.30852 13.193 7.04797C12.8508 6.78741 12.3624 6.8543 12.1034 7.19574ZM15.4443 14.6667C15.4443 15.096 15.0951 15.4445 14.6665 15.4445H5.33318C4.90463 15.4445 4.5554 15.096 4.5554 14.6667V5.33335C4.5554 4.90402 4.90463 4.55557 5.33318 4.55557H14.6665C15.0951 4.55557 15.4443 4.90402 15.4443 5.33335V14.6667ZM14.6667 3H5.33333C4.04689 3 3 4.04689 3 5.33333V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V5.33333C17 4.04689 15.9531 3 14.6667 3Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCheckmarkSquareIcon;
