import React from 'react';

export interface LineIconsMessageCircleIconProps {
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
 * LineIconsMessageCircleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMessageCircleIcon: React.FC<LineIconsMessageCircleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.99979C6.5 9.61337 6.81359 9.29976 7.19997 9.29976C7.58635 9.29976 7.89994 9.61337 7.89994 9.99979C7.89994 10.3862 7.58635 10.6998 7.19997 10.6998C6.81359 10.6998 6.5 10.3862 6.5 9.99979ZM10.0003 9.29976C9.61388 9.29976 9.30029 9.61337 9.30029 9.99979C9.30029 10.3862 9.61388 10.6998 10.0003 10.6998C10.3866 10.6998 10.7002 10.3862 10.7002 9.99979C10.7002 9.61337 10.3866 9.29976 10.0003 9.29976ZM12.7995 9.29976C12.4132 9.29976 12.0996 9.61337 12.0996 9.99979C12.0996 10.3862 12.4132 10.6998 12.7995 10.6998C13.1859 10.6998 13.4995 10.3862 13.4995 9.99979C13.4995 9.61337 13.1859 9.29976 12.7995 9.29976ZM15.5289 10.9062C15.174 13.1841 13.338 15.0735 11.0638 15.4998C9.96558 15.707 8.84703 15.5887 7.83207 15.1589C7.54438 15.0371 7.2469 14.9755 6.95501 14.9755C6.82202 14.9755 6.69042 14.9881 6.56093 15.014L4.59261 15.4074L4.9867 13.4355C5.06929 13.0259 5.01889 12.5877 4.8418 12.1684C4.41202 11.1534 4.29443 10.0354 4.50092 8.93637C4.9272 6.66197 6.81572 4.8258 9.09411 4.47088C10.907 4.18877 12.6801 4.75999 13.9596 6.03965C15.2398 7.32 15.8117 9.09387 15.5289 10.9062ZM14.9496 5.0498C13.3502 3.45094 11.1383 2.73761 8.87806 3.08692C6.02429 3.53214 3.65839 5.83104 3.12431 8.67806C2.86673 10.0487 3.01512 11.4446 3.552 12.7137C3.61989 12.8754 3.64089 13.0259 3.61429 13.161L3.01372 16.1628C2.96752 16.3924 3.03962 16.6297 3.20551 16.7949C3.33781 16.9279 3.5163 17 3.70039 17C3.74589 17 3.79139 16.9958 3.83758 16.9867L6.83555 16.3868C7.00774 16.3539 7.17434 16.4022 7.28563 16.4484C8.55608 16.9853 9.95181 17.133 11.321 16.8761C14.1684 16.342 16.4671 13.9759 16.9123 11.1219C17.2637 8.86286 16.549 6.64937 14.9496 5.0498Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMessageCircleIcon;
