import React from 'react';

export interface MapIconProps {
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
 * MapIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const MapIcon: React.FC<MapIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.2216 14.7713L14.4438 13.9852V5.22261L16.2216 6.00871V14.7713ZM10.8892 6.00871L12.6669 5.22261V13.9852L10.8892 14.7713V6.00871ZM7.33301 5.22261L9.11079 6.00871V14.7713L7.33301 13.9852V5.22261ZM3.77783 6.00871L5.55561 5.22261V13.9852L3.77783 14.7713V6.00871ZM17.4756 4.64484L13.92 3.07091C13.9067 3.06478 13.8924 3.0639 13.8791 3.05865C13.8427 3.04464 13.8062 3.03502 13.7689 3.02539C13.7342 3.01663 13.6996 3.00875 13.664 3.00525C13.6293 3.00088 13.5947 3 13.5591 3C13.52 3 13.4818 3.00088 13.4427 3.00525C13.4098 3.00875 13.3787 3.01663 13.3467 3.02451C13.3076 3.03414 13.2693 3.04464 13.2311 3.05865C13.2187 3.0639 13.2036 3.06478 13.1911 3.07091L10 4.4829L6.80889 3.07091C6.79556 3.06478 6.78133 3.0639 6.768 3.05865C6.73156 3.04464 6.69511 3.03502 6.65778 3.02539C6.62311 3.01663 6.58844 3.00875 6.55289 3.00525C6.51822 3.00088 6.48356 3 6.448 3C6.40889 3 6.37067 3.00088 6.33156 3.00525C6.29867 3.00875 6.26756 3.01663 6.23556 3.02451C6.19644 3.03414 6.15822 3.04464 6.12 3.05865C6.10756 3.0639 6.09244 3.06478 6.08 3.07091L2.52444 4.64484C2.20533 4.78578 2 5.09829 2 5.44319V16.1246C2 16.4214 2.15289 16.698 2.40622 16.8599C2.552 16.9527 2.72 17 2.88889 17C3.01244 17 3.13689 16.9746 3.25333 16.923L6.44444 15.511L9.63556 16.923C9.64889 16.9291 9.66311 16.9265 9.67733 16.9317C9.78133 16.9729 9.88889 17 10 17C10.1111 17 10.2187 16.9729 10.3227 16.9317C10.336 16.9265 10.352 16.9291 10.3644 16.923L13.5556 15.511L16.7467 16.923C16.8631 16.9746 16.9876 17 17.1111 17C17.28 17 17.448 16.9527 17.5938 16.8599C17.8471 16.698 18 16.4214 18 16.1246V5.44319C18 5.09829 17.7947 4.78578 17.4756 4.64484Z" fill="currentColor"/>
    </svg>
  );
};

export default MapIcon;
