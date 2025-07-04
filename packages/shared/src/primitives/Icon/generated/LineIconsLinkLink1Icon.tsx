import React from 'react';

export interface LineIconsLinkLink1IconProps {
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
 * LineIconsLinkLink1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsLinkLink1Icon: React.FC<LineIconsLinkLink1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.81802 13.3333H6.51617C4.9845 13.3333 3.60264 12.0542 3.46664 10.305C3.31173 8.33 4.67103 6.66667 6.36344 6.66667H7.81802C8.21949 6.66667 8.54531 6.29417 8.54531 5.83333C8.54531 5.3725 8.21949 5 7.81802 5H6.51544C4.29793 5 2.31897 6.8225 2.03679 9.3425C1.69569 12.3908 3.76847 15 6.36344 15H7.81802C8.21949 15 8.54531 14.6275 8.54531 14.1667C8.54531 13.7058 8.21949 13.3333 7.81802 13.3333ZM7.09063 9.99999C7.09063 10.4608 7.41645 10.8333 7.81792 10.8333H12.1817C12.5831 10.8333 12.909 10.4608 12.909 9.99999C12.909 9.53916 12.5831 9.16666 12.1817 9.16666H7.81792C7.41645 9.16666 7.09063 9.53916 7.09063 9.99999ZM13.461 5.00021C15.6916 5.00021 17.6931 6.83105 17.9658 9.36855C18.2924 12.4069 16.224 15.0002 13.6362 15.0002H12.1817C11.7802 15.0002 11.4544 14.6277 11.4544 14.1669C11.4544 13.706 11.7802 13.3335 12.1817 13.3335H13.6362C15.3287 13.3335 16.688 11.6702 16.533 9.69521C16.397 7.94605 15.0152 6.66688 13.4828 6.66688H12.1817C11.7802 6.66688 11.4544 6.29438 11.4544 5.83355C11.4544 5.37271 11.7766 5.00021 12.3628 5.00021H13.461Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsLinkLink1Icon;
