import React from 'react';

export interface HeadphonesIconProps {
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
 * HeadphonesIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const HeadphonesIcon: React.FC<HeadphonesIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.1998 16.3158C13.4277 16.3158 12.7998 15.5604 12.7998 14.6316C12.7998 13.7027 13.4277 12.9474 14.1998 12.9474C14.9719 12.9474 15.5998 13.7027 15.5998 14.6316C15.5998 15.5604 14.9719 16.3158 14.1998 16.3158ZM5.7999 12.9474C6.572 12.9474 7.1999 13.7027 7.1999 14.6316C7.1999 15.5604 6.572 16.3158 5.7999 16.3158C5.0278 16.3158 4.3999 15.5604 4.3999 14.6316C4.3999 13.7027 5.0278 12.9474 5.7999 12.9474ZM10 2C6.1402 2 3 5.91579 3 10.7293V14.6316C3 16.4893 4.2558 18 5.8 18C7.3442 18 8.6 16.4893 8.6 14.6316C8.6 12.7739 7.3442 11.2632 5.8 11.2632C5.2876 11.2632 4.8137 11.4417 4.4 11.7322V10.7293C4.4 6.84463 6.9123 3.68421 10 3.68421C13.0877 3.68421 15.6 6.84463 15.6 10.7293V11.7322C15.1863 11.4417 14.7124 11.2632 14.2 11.2632C12.6558 11.2632 11.4 12.7739 11.4 14.6316C11.4 16.4893 12.6558 18 14.2 18C15.7442 18 17 16.4893 17 14.6316V10.7293C17 5.91579 13.8598 2 10 2Z" fill="currentColor"/>
    </svg>
  );
};

export default HeadphonesIcon;
