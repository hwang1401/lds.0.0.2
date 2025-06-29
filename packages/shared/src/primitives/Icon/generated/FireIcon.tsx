import React from 'react';

export interface FireIconProps {
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
 * FireIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const FireIcon: React.FC<FireIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.25772 7.78764C4.35996 9.74297 4.40012 12.8427 6.3782 14.7624C7.3439 15.7023 8.62713 16.2207 9.99442 16.2216H9.99909C11.3692 16.2216 12.6571 15.7032 13.6274 14.7624C15.641 12.808 15.6373 9.62915 13.619 7.67738L10.8303 4.96446C10.5482 7.17143 9.67875 9.10809 8.13027 9.10809C7.65583 9.10809 6.88253 8.90713 6.25772 7.78764ZM9.99885 18H9.99231C8.11883 17.9982 6.36116 17.2913 5.04337 16.0064C2.32187 13.3655 2.31813 9.06807 5.03496 6.43162L5.95302 5.54777C6.19024 5.32191 6.53487 5.23477 6.86081 5.31569C7.18489 5.39927 7.43705 5.64202 7.52111 5.95146C7.73592 6.74195 7.99181 7.13053 8.13284 7.27813C8.46439 6.94557 9.06398 5.60201 9.06398 3.32835C9.06398 3.19764 9.06398 3.07404 9.05651 2.95044C9.03876 2.68813 9.1443 2.43116 9.34416 2.24976C9.71493 1.91454 10.3089 1.91454 10.6648 2.2631L14.9515 6.43251C17.6786 9.06807 17.6833 13.3655 14.9609 16.0073C13.6356 17.2931 11.8742 18 9.99885 18Z" fill="currentColor"/>
    </svg>
  );
};

export default FireIcon;
