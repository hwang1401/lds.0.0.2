import React from 'react';

export interface LineIconsFileTextIconProps {
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
 * LineIconsFileTextIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFileTextIcon: React.FC<LineIconsFileTextIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 11.6H7.375C6.892 11.6 6.5 11.2416 6.5 10.8C6.5 10.3584 6.892 10 7.375 10H10C10.483 10 10.875 10.3584 10.875 10.8C10.875 11.2416 10.483 11.6 10 11.6ZM7.37479 13.2H12.6248C13.1087 13.2 13.4998 13.5584 13.4998 14C13.4998 14.4416 13.1087 14.8 12.6248 14.8H7.37479C6.89179 14.8 6.49979 14.4416 6.49979 14C6.49979 13.5584 6.89179 13.2 7.37479 13.2ZM14.7631 16.4H5.23527C4.96752 16.4 4.74965 16.2208 4.74965 16V4C4.74965 3.7792 4.96752 3.6 5.23527 3.6H9.99965V6.12C9.99965 7.3776 11.0645 8.4 12.3744 8.4H15.2496V16C15.2496 16.2208 15.0318 16.4 14.7631 16.4ZM11.7502 4.38241L14.1495 6.80001H12.375C12.0302 6.80001 11.7502 6.49521 11.7502 6.12001V4.38241ZM16.7725 7.0624L12.009 2.2624C11.8427 2.0952 11.6083 2 11.3606 2H5.23563C4.00275 2 3 2.8976 3 4V16C3 17.1024 4.00275 18 5.23563 18H14.7635C15.9964 18 17 17.1024 17 16V7.6C17 7.4008 16.9186 7.2096 16.7725 7.0624Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFileTextIcon;
