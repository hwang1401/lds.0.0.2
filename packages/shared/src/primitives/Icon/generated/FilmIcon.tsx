import React from 'react';

export interface FilmIconProps {
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
 * FilmIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const FilmIcon: React.FC<FilmIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4442 14.8658C15.4442 15.1847 15.1844 15.4444 14.8656 15.4444H13.8887V13.8889H15.4442V14.8658ZM4.55518 14.8658V13.8889H6.11073V15.4444H5.13384C4.81495 15.4444 4.55518 15.1847 4.55518 14.8658ZM5.13384 4.55556H6.11073V6.11111H4.55518V5.13423C4.55518 4.81534 4.81495 4.55556 5.13384 4.55556ZM15.4442 5.13423V6.11111H13.8887V4.55556H14.8656C15.1844 4.55556 15.4442 4.81534 15.4442 5.13423ZM13.8887 12.3333H15.4442V10.7777H13.8887V12.3333ZM13.8887 9.22221H15.4442V7.66665H13.8887V9.22221ZM7.6665 15.4444H12.3332V4.55556H7.6665V15.4444ZM4.55518 12.3333H6.11073V10.7777H4.55518V12.3333ZM4.55518 9.22221H6.11073V7.66665H4.55518V9.22221ZM14.8658 2.99998H5.13422C3.95744 2.99998 3 3.95821 3 5.13421V14.8658C3 16.0425 3.95744 17 5.13422 17H14.8658C16.0426 17 17 16.0425 17 14.8658V5.13421C17 3.95821 16.0426 2.99998 14.8658 2.99998Z" fill="currentColor"/>
    </svg>
  );
};

export default FilmIcon;
