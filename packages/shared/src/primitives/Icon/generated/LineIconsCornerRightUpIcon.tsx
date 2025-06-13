import React from 'react';

export interface LineIconsCornerRightUpIconProps {
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
 * LineIconsCornerRightUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCornerRightUpIcon: React.FC<LineIconsCornerRightUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6248 6.93773L11.625 3.2044C11.26 2.93187 10.741 2.93187 10.376 3.2044L5.37617 6.93773C4.94418 7.25973 4.87518 7.8468 5.22017 8.24907C5.56416 8.65133 6.19414 8.71667 6.62512 8.3956L10 5.87467V14.2C10 14.7143 9.55203 15.1333 9.00004 15.1333H4.00021C3.44823 15.1333 3.00024 15.5515 3.00024 16.0667C3.00024 16.5819 3.44823 17 4.00021 17H9.00004C10.655 17 11.9999 15.7437 11.9999 14.2V5.87467L15.3758 8.3956C15.5598 8.5328 15.7808 8.6 15.9998 8.6C16.2928 8.6 16.5838 8.4796 16.7808 8.24907C17.1258 7.8468 17.0568 7.25973 16.6248 6.93773Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCornerRightUpIcon;
