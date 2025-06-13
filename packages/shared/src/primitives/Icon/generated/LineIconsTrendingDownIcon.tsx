import React from 'react';

export interface LineIconsTrendingDownIconProps {
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
 * LineIconsTrendingDownIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsTrendingDownIcon: React.FC<LineIconsTrendingDownIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 9.54 17.6027 9.16666 17.1111 9.16666C16.6196 9.16666 16.2222 9.54 16.2222 10V11.9142L12.4525 7.79083C12.1716 7.4825 11.6934 7.40916 11.3201 7.61916L7.52899 9.75166L3.57258 5.3C3.25792 4.9475 2.69881 4.8975 2.31926 5.19333C1.94326 5.4875 1.89171 6.01333 2.20548 6.36666L6.64988 11.3667C6.93166 11.6825 7.4161 11.76 7.79121 11.5475L11.5912 9.41L15.1787 13.3333H12.6667C12.1752 13.3333 11.7778 13.7067 11.7778 14.1667C11.7778 14.6267 12.1752 15 12.6667 15H17.1111C17.2213 15 17.3307 14.9775 17.4347 14.9383C17.4782 14.9225 17.512 14.8958 17.552 14.875C17.5982 14.8492 17.648 14.8333 17.6889 14.7992C17.6978 14.7925 17.7013 14.7825 17.7093 14.775C17.7582 14.7333 17.792 14.6825 17.8293 14.6317C17.8587 14.5917 17.8933 14.5567 17.9138 14.5133C17.936 14.4692 17.9431 14.42 17.9556 14.3725C17.9724 14.3142 17.9911 14.2575 17.9929 14.1975C17.9938 14.1867 18 14.1775 18 14.1667V10Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsTrendingDownIcon;
