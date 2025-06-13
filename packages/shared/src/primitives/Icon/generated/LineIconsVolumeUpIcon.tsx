import React from 'react';

export interface LineIconsVolumeUpIconProps {
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
 * LineIconsVolumeUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsVolumeUpIcon: React.FC<LineIconsVolumeUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9298 5.25475L7.13371 7.97524C7.00943 8.06313 6.86283 8.11134 6.7125 8.11134H3.48795V11.8888H6.7125C6.86283 11.8888 7.00943 11.937 7.13371 12.0249L10.9298 14.7454V5.25475ZM12.4183 3.77862V16.2223C12.4183 16.5108 12.265 16.7752 12.0209 16.9098C11.9122 16.9697 11.7932 17 11.6741 17C11.5267 17 11.3794 16.9541 11.2536 16.8639L6.4819 13.4442H2.74385C2.33306 13.4442 1.99966 13.0966 1.99966 12.6665V7.33361C1.99966 6.90353 2.33306 6.55588 2.74385 6.55588H6.4819L11.2536 3.13621C11.4806 2.97289 11.776 2.955 12.0209 3.09033C12.265 3.22487 12.4183 3.4893 12.4183 3.77862ZM15.4981 4.73445C15.181 4.46069 14.7122 4.50657 14.4503 4.83789C14.1876 5.16842 14.2322 5.65917 14.5485 5.93293C15.8144 7.02875 16.5117 8.47299 16.5117 10.0004C16.5117 11.5271 15.8144 12.9714 14.5485 14.0672C14.2322 14.3417 14.1876 14.8317 14.4503 15.1622C14.5976 15.3489 14.8097 15.4445 15.0233 15.4445C15.1907 15.4445 15.3589 15.3854 15.4981 15.2657C17.1115 13.8689 18 11.9984 18 10.0004C18 8.00169 17.1115 6.13125 15.4981 4.73445ZM14.486 12.8213C14.3394 13.0118 14.1236 13.1114 13.9063 13.1114C13.7419 13.1114 13.5774 13.0546 13.4397 12.9395C13.1197 12.6696 13.0691 12.1804 13.3266 11.846C14.0968 10.8451 14.0968 9.15507 13.3266 8.15491C13.0691 7.81971 13.1197 7.33051 13.4397 7.06064C13.7597 6.7931 14.2286 6.84521 14.486 7.17964C15.7043 8.76154 15.7043 11.2386 14.486 12.8213Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsVolumeUpIcon;
