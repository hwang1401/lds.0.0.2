import React from 'react';

export interface LineIconsVolumeDownIconProps {
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
 * LineIconsVolumeDownIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsVolumeDownIcon: React.FC<LineIconsVolumeDownIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1018 5.25475L7.80775 7.97524C7.66717 8.06313 7.50134 8.11134 7.33129 8.11134H3.68375V11.8888H7.33129C7.50134 11.8888 7.66717 11.937 7.80775 12.0249L12.1018 14.7454V5.25475ZM13.7854 3.77862V16.2223C13.7854 16.5108 13.612 16.7752 13.3359 16.9098C13.213 16.9697 13.0783 17 12.9436 17C12.777 17 12.6103 16.9541 12.468 16.8639L7.07035 13.4442H2.84196C2.37728 13.4442 2.00015 13.0966 2.00015 12.6665V7.33361C2.00015 6.90353 2.37728 6.55588 2.84196 6.55588H7.07035L12.468 3.13621C12.7256 2.97289 13.0598 2.955 13.3359 3.09033C13.612 3.22487 13.7854 3.4893 13.7854 3.77862ZM16.9668 12.8213C16.801 13.0118 16.5569 13.1114 16.3111 13.1114C16.125 13.1114 15.939 13.0546 15.7832 12.9395C15.4213 12.6696 15.364 12.1804 15.6553 11.846C16.5266 10.8451 16.5266 9.15507 15.6553 8.15491C15.364 7.81971 15.4213 7.33051 15.7832 7.06064C16.1452 6.7931 16.6756 6.84521 16.9668 7.17964C18.3449 8.76154 18.3449 11.2386 16.9668 12.8213Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsVolumeDownIcon;
