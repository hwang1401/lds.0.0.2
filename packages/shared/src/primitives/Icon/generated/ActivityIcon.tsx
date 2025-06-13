import React from 'react';

export interface ActivityIconProps {
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
 * ActivityIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ActivityIcon: React.FC<ActivityIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.8633 16C11.8097 16 11.7545 15.9978 11.6993 15.9925C10.9953 15.9273 10.4433 15.4616 10.2913 14.8054L8.14486 5.51233L5.93444 10.2983C5.80724 10.5728 5.51843 10.7505 5.20003 10.7505H2.80001C2.3576 10.7505 2 10.4146 2 10.0006C2 9.58591 2.3576 9.25069 2.80001 9.25069H4.67522L6.68004 4.90939C6.96405 4.29745 7.58965 3.94124 8.30086 4.00798C9.00486 4.07323 9.55687 4.53893 9.70887 5.19511L11.8553 14.4882L14.0657 9.70215C14.1929 9.42768 14.4809 9.25069 14.8001 9.25069H17.2001C17.6425 9.25069 18.0001 9.58591 18.0001 10.0006C18.0001 10.4146 17.6425 10.7505 17.2001 10.7505H15.3249L13.3201 15.0911C13.0585 15.6558 12.4977 16 11.8633 16Z" fill="currentColor"/>
    </svg>
  );
};

export default ActivityIcon;
