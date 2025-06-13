import React from 'react';

export interface UmbrellaIconProps {
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
 * UmbrellaIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const UmbrellaIcon: React.FC<UmbrellaIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.44314 9.29996C4.78828 6.5417 7.1489 4.3995 9.99956 4.3995C12.8509 4.3995 15.2115 6.5417 15.5567 9.29996H4.44314ZM9.99934 2.99937C6.13988 2.99937 2.99869 6.13987 2.99869 10C2.99869 10.3872 3.31232 10.7001 3.69945 10.7001H9.29927V14.9005C9.29927 16.0584 10.2416 17.0007 11.4002 17.0007C12.5581 17.0007 13.5004 16.0584 13.5004 14.9005C13.5004 14.5133 13.1867 14.2004 12.8003 14.2004C12.4132 14.2004 12.1002 14.5133 12.1002 14.9005C12.1002 15.2869 11.7859 15.6005 11.4002 15.6005C11.0137 15.6005 10.7001 15.2869 10.7001 14.9005V10.7001H16.2999C16.6871 10.7001 17 10.3872 17 10C17 6.13987 13.8595 2.99937 9.99934 2.99937Z" fill="currentColor"/>
    </svg>
  );
};

export default UmbrellaIcon;
