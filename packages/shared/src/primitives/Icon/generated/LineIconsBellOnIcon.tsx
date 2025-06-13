import React from 'react';

export interface LineIconsBellOnIconProps {
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
 * LineIconsBellOnIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsBellOnIcon: React.FC<LineIconsBellOnIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.23604 13.1997L5.28495 12.254C5.62095 11.9516 5.80585 11.55 5.80585 11.1228V7.38096C5.80585 6.2953 6.3303 5.25764 7.24587 4.536C8.16856 3.80796 9.3437 3.48794 10.5677 3.63275C12.6362 3.87996 14.1962 5.56326 14.1962 7.54897V11.1228C14.1962 11.55 14.3811 11.9516 14.7163 12.2532L15.766 13.1997H4.23604ZM11.7777 15.0726C11.7777 15.7919 10.9635 16.3999 9.99992 16.3999C9.03634 16.3999 8.2221 15.7919 8.2221 15.0726V14.7998H11.7777V15.0726ZM17.5748 12.5661L15.9739 11.1228V7.549C15.9739 4.76404 13.7499 2.39831 10.8005 2.04709C9.092 1.84228 7.36752 2.3119 6.07416 3.33276C4.7728 4.35842 4.0279 5.8337 4.0279 7.38099L4.02701 11.1228L2.42608 12.5661C2.00919 12.9421 1.88563 13.5013 2.11141 13.9918C2.33808 14.483 2.8652 14.7998 3.45544 14.7998H6.44483V15.0726C6.44483 16.6871 8.03953 18 10.0005 18C11.9614 18 13.5561 16.6871 13.5561 15.0726V14.7998H16.5455C17.1357 14.7998 17.662 14.483 17.8877 13.9926C18.1144 13.5013 17.9917 12.9413 17.5748 12.5661Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsBellOnIcon;
