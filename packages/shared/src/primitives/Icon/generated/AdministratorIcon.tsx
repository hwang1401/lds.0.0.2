import React from 'react';

export interface AdministratorIconProps {
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
 * AdministratorIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const AdministratorIcon: React.FC<AdministratorIconProps> = ({
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
      <path d="M8.71667 8.33334H11.2167C12.3217 8.33334 13.3815 8.77234 14.1629 9.55368C14.9443 10.3351 15.3833 11.3949 15.3833 12.5V17.5C15.3833 17.942 15.2077 18.3659 14.8952 18.6785C14.5826 18.9911 14.1587 19.1667 13.7167 19.1667H6.21664C5.77461 19.1667 5.35069 18.9911 5.03813 18.6785C4.72556 18.3659 4.54997 17.942 4.54997 17.5V12.5C4.54997 11.3949 4.98896 10.3351 5.77036 9.55368C6.55176 8.77234 7.61157 8.33334 8.71667 8.33334Z" fill="#C7CED5"/>
<path d="M10 7.50001C11.8409 7.50001 13.3333 6.00763 13.3333 4.16668C13.3333 2.32573 11.8409 0.833344 10 0.833344C8.15905 0.833344 6.66667 2.32573 6.66667 4.16668C6.66667 6.00763 8.15905 7.50001 10 7.50001Z" fill="#C7CED5"/>
<path d="M14.5833 18.3333C16.1942 18.3333 17.5 17.0275 17.5 15.4167C17.5 13.8058 16.1942 12.5 14.5833 12.5C12.9725 12.5 11.6667 13.8058 11.6667 15.4167C11.6667 17.0275 12.9725 18.3333 14.5833 18.3333Z" fill="#6B758F"/>
<path d="M14.5833 16.6667C15.2737 16.6667 15.8333 16.107 15.8333 15.4167C15.8333 14.7263 15.2737 14.1667 14.5833 14.1667C13.893 14.1667 13.3333 14.7263 13.3333 15.4167C13.3333 16.107 13.893 16.6667 14.5833 16.6667Z" fill="white"/>
<path d="M15.6413 11.6748H13.5579V13.3415H15.6413V11.6748Z" fill="#6B758F"/>
<path d="M11.8791 12.6351L10.8374 14.4392L12.2808 15.2726L13.3224 13.4684L11.8791 12.6351Z" fill="#6B758F"/>
<path d="M10.8228 16.3786L11.8644 18.1828L13.3078 17.3494L12.2662 15.5453L10.8228 16.3786Z" fill="#6B758F"/>
<path d="M13.5246 19.1585H15.6079V17.4918H13.5246V19.1585Z" fill="#6B758F"/>
<path d="M17.2933 18.2088L18.335 16.4046L16.8916 15.5713L15.8499 17.3755L17.2933 18.2088Z" fill="#6B758F"/>
<path d="M18.3496 14.4621L17.3079 12.6579L15.8646 13.4913L16.9062 15.2954L18.3496 14.4621Z" fill="#6B758F"/>
    </svg>
  );
};

export default AdministratorIcon;
