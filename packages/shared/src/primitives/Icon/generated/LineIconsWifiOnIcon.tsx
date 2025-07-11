import React from 'react';

export interface LineIconsWifiOnIconProps {
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
 * LineIconsWifiOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsWifiOnIcon: React.FC<LineIconsWifiOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.9998 3C12.9095 3 15.6637 4.22064 17.7566 6.43792C18.0733 6.77305 18.082 7.3278 17.7765 7.67518C17.6202 7.85281 17.4112 7.94206 17.2031 7.94206C17.0037 7.94206 16.8035 7.86069 16.6487 7.69618C14.8541 5.79654 12.4931 4.75002 9.9998 4.75002C7.50646 4.75002 5.14552 5.79654 3.35088 7.69618C3.03583 8.03306 2.53014 8.02344 2.22306 7.67518C1.91837 7.3278 1.92634 6.77305 2.2438 6.43792C4.33674 4.22064 7.0909 3 9.9998 3ZM10.0001 7.37489C8.0635 7.37489 6.18113 8.25078 4.83556 9.77942C4.53087 10.1277 4.53884 10.6816 4.8563 11.0167C5.17215 11.3527 5.67864 11.3431 5.98412 10.9957C7.0298 9.80655 8.49342 9.12492 10.0001 9.12492C11.5068 9.12492 12.9704 9.80655 14.0161 10.9957C14.1724 11.1733 14.3814 11.2626 14.5904 11.2626C14.7898 11.2626 14.99 11.1812 15.1439 11.0167C15.4614 10.6816 15.4694 10.1277 15.1647 9.77942C13.8191 8.25078 11.9367 7.37489 10.0001 7.37489ZM7.22986 12.9776C7.97722 12.1866 8.96068 11.7499 9.99997 11.7499C11.0393 11.7499 12.0227 12.1866 12.7701 12.9776C13.0867 13.3136 13.0955 13.8675 12.79 14.2148C12.6337 14.3933 12.4247 14.4826 12.2157 14.4826C12.0163 14.4826 11.8161 14.4003 11.6622 14.2367C10.7649 13.2864 9.23506 13.2864 8.33774 14.2367C8.02268 14.5727 7.517 14.5631 7.20991 14.2148C6.90443 13.8675 6.9132 13.3136 7.22986 12.9776ZM9.2026 16.125C9.2026 15.642 9.55914 15.25 10.0002 15.25C10.4413 15.25 10.7978 15.642 10.7978 16.125C10.7978 16.608 10.4413 17 10.0002 17C9.55914 17 9.2026 16.608 9.2026 16.125Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsWifiOnIcon;
