import React from 'react';

export interface BulbIconProps {
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
 * BulbIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BulbIcon: React.FC<BulbIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.0177 5.5736L14.0111 6.6856C13.8753 6.8352 13.6996 6.9104 13.5246 6.9104C13.3412 6.9104 13.1585 6.828 13.0213 6.6656C12.7532 6.3488 12.7602 5.8416 13.0388 5.5352L14.0454 4.424C14.3233 4.1176 14.7685 4.1256 15.0345 4.4432C15.3033 4.76 15.2956 5.2672 15.0177 5.5736ZM6.97873 6.6656C6.84153 6.828 6.65883 6.9104 6.47543 6.9104C6.30043 6.9104 6.12473 6.836 5.98893 6.6864L4.98163 5.5744C4.70373 5.2672 4.69603 4.76 4.96483 4.4432C5.23363 4.1256 5.67603 4.116 5.95463 4.4232L6.96193 5.5344C7.23983 5.8416 7.24753 6.3488 6.97873 6.6656ZM5.8 9.99999C5.8 10.4424 5.4864 10.8 5.1 10.8H3.7C3.3136 10.8 3 10.4424 3 9.99999C3 9.55759 3.3136 9.19999 3.7 9.19999H5.1C5.4864 9.19999 5.8 9.55759 5.8 9.99999ZM17.0003 9.99999C17.0003 10.4424 16.6874 10.8 16.3003 10.8H14.9003C14.5132 10.8 14.2003 10.4424 14.2003 9.99999C14.2003 9.55759 14.5132 9.19999 14.9003 9.19999H16.3003C16.6874 9.19999 17.0003 9.55759 17.0003 9.99999ZM9.29984 4.4V2.8C9.29984 2.3576 9.61344 2 9.99984 2C10.3862 2 10.6998 2.3576 10.6998 2.8V4.4C10.6998 4.8424 10.3862 5.2 9.99984 5.2C9.61344 5.2 9.29984 4.8424 9.29984 4.4ZM11.0507 12.0744C10.8337 12.2176 10.7 12.4824 10.7 12.768V16.4H9.29998V12.768C9.29998 12.4824 9.16628 12.2176 8.94928 12.0744C8.30178 11.6496 7.89998 10.8544 7.89998 10C7.89998 8.67681 8.84218 7.60001 9.99998 7.60001C11.1578 7.60001 12.1 8.67681 12.1 10C12.1 10.8544 11.6982 11.6496 11.0507 12.0744ZM9.99967 6C8.06977 6 6.49967 7.7944 6.49967 10C6.49967 11.2632 7.02677 12.4496 7.89967 13.1968V16.4C7.89967 17.2824 8.52757 18 9.29967 18H10.6997C11.4718 18 12.0997 17.2824 12.0997 16.4V13.1968C12.9719 12.4496 13.4997 11.2632 13.4997 10C13.4997 7.7944 11.9296 6 9.99967 6Z" fill="currentColor"/>
    </svg>
  );
};

export default BulbIcon;
