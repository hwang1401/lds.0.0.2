import React from 'react';

export interface LineIconsPhoneMissedIconProps {
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
 * LineIconsPhoneMissedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPhoneMissedIcon: React.FC<LineIconsPhoneMissedIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6614 6.66258L13.1745 6.15015L12.6614 5.63703C12.38 5.35492 12.38 4.8936 12.6614 4.61078C12.9435 4.32937 13.4049 4.32937 13.6877 4.61078L14.2001 5.12461L14.7132 4.61078C14.9953 4.32937 15.4567 4.32937 15.7388 4.61078C16.0209 4.8936 16.0209 5.35492 15.7388 5.63703L15.2256 6.15015L15.7388 6.66258C16.0209 6.94469 16.0209 7.40601 15.7388 7.68883C15.4567 7.97024 14.9953 7.97024 14.7132 7.68883L14.2001 7.175L13.6877 7.68883C13.4049 7.97024 12.9435 7.97024 12.6614 7.68883C12.38 7.40601 12.38 6.94469 12.6614 6.66258ZM13.7806 15.6006C8.60804 15.6006 4.39944 11.392 4.39944 6.21947C4.39944 5.21632 5.21568 4.40008 6.21952 4.40008C6.29583 4.40008 6.37213 4.40428 6.44914 4.41478L7.19187 7.64893C7.06866 7.71334 6.93426 7.78334 6.81035 7.84844C6.20062 8.16696 5.7603 8.39797 5.98571 8.95939C6.80825 11.3024 8.69764 13.1918 11.0126 14.0038C11.6056 14.2411 11.8324 13.7987 12.1509 13.1897C12.2167 13.0651 12.2867 12.9314 12.3511 12.8082L15.5853 13.5509C15.5951 13.6258 15.6 13.7028 15.6 13.7805C15.6 14.7844 14.7837 15.6006 13.7806 15.6006ZM16.9554 13.2471C16.9274 13.0721 16.8833 12.9006 16.8259 12.7361C16.7474 12.5085 16.5563 12.337 16.3218 12.2831L12.1468 11.3248C11.9165 11.2737 11.6757 11.3388 11.5056 11.5019C11.4055 11.5978 11.4034 11.5999 10.9484 12.4693C9.45031 11.7868 8.22595 10.5646 7.53222 9.05108C8.39956 8.59676 8.40236 8.59466 8.49827 8.49456C8.66138 8.32445 8.72788 8.08294 8.67538 7.85333L7.71703 3.67833C7.66243 3.44312 7.49162 3.25271 7.26411 3.17431C7.0982 3.11621 6.92599 3.0728 6.75519 3.0455C6.58088 3.0154 6.40237 3 6.21966 3C4.44438 3 2.99951 4.44417 2.99951 6.21945C2.99951 12.1641 7.83534 17.0007 13.7807 17.0007C15.556 17.0007 17.0002 15.5558 17.0002 13.7805C17.0002 13.5992 16.9848 13.4207 16.9554 13.2471Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPhoneMissedIcon;
