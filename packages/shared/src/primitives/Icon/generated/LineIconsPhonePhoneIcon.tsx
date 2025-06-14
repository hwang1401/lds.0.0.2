import React from 'react';

export interface LineIconsPhonePhoneIconProps {
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
 * LineIconsPhonePhoneIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPhonePhoneIcon: React.FC<LineIconsPhonePhoneIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.22001 4.39978C5.21617 4.39978 4.39993 5.21601 4.39993 6.21986C4.39993 11.3917 8.60782 15.6003 13.7804 15.6003C14.7835 15.6003 15.6004 14.7841 15.6004 13.7802C15.6004 13.7025 15.5955 13.6262 15.5857 13.5506L12.3516 12.8086C12.2872 12.9318 12.2165 13.0655 12.1521 13.1901C11.8329 13.7991 11.6019 14.2415 11.0124 14.0042C8.69813 13.1922 6.80874 11.3021 5.9862 8.95979C5.73629 8.41026 6.21231 8.16105 6.81574 7.84604C6.93825 7.78163 7.07055 7.71233 7.19166 7.64933L6.44962 4.41448C6.37192 4.40468 6.29632 4.39978 6.22001 4.39978ZM13.7805 17.0003C7.83582 17.0003 3 12.1645 3 6.21984C3 4.44386 4.44417 2.99969 6.22015 2.99969C6.40216 2.99969 6.58207 3.0151 6.75637 3.0452C6.92648 3.0725 7.09729 3.1159 7.2639 3.1733C7.49141 3.25241 7.66292 3.44352 7.71682 3.67873L8.67516 7.85372C8.72837 8.08333 8.66186 8.32414 8.49806 8.49495C8.40285 8.59435 8.40075 8.59646 7.53271 9.05078C8.23554 10.5726 9.4571 11.79 10.9482 12.469C11.4032 11.6003 11.406 11.5975 11.5054 11.5023C11.6762 11.3385 11.9184 11.2748 12.1466 11.3252L16.3223 12.2835C16.5568 12.3374 16.7479 12.5082 16.8263 12.7357C16.8837 12.901 16.9271 13.0718 16.9558 13.2475C16.9853 13.4204 17.0007 13.5996 17.0007 13.7802C17.0007 15.5562 15.5558 17.0003 13.7805 17.0003Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPhonePhoneIcon;
