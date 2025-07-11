import React from 'react';

export interface LineIconsEyeOffIconProps {
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
 * LineIconsEyeOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsEyeOffIcon: React.FC<LineIconsEyeOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8943 10.3318C17.5623 10.8139 16.7815 11.8259 15.5639 12.7512L14.435 11.8106C15.2831 11.1765 15.8967 10.4792 16.2615 10.0032C15.5159 9.05714 13.2574 6.59574 9.82459 6.66841C9.34458 6.67841 8.89418 6.74108 8.46537 6.83575L7.20135 5.78239C7.97896 5.52638 8.83578 5.35571 9.78379 5.33571C14.5638 5.21104 17.3839 8.92714 17.8943 9.66849C18.0351 9.87383 18.0351 10.1265 17.8943 10.3318ZM11.5345 13.1646L12.7985 14.218C12.0217 14.474 11.1641 14.6446 10.2169 14.6646C10.1513 14.666 10.0857 14.6666 10.0201 14.6666C5.32962 14.6666 2.60959 11.0632 2.10638 10.3319C1.96478 10.1265 1.96478 9.87384 2.10638 9.6685C2.43759 9.18649 3.2184 8.17446 4.43601 7.24844L5.56483 8.1898C4.71682 8.82381 4.10401 9.52117 3.7384 9.99718C4.48401 10.9432 6.73204 13.3986 10.1761 13.3319C10.6561 13.3219 11.1065 13.2593 11.5345 13.1646ZM10 10.9999C9.33839 10.9999 8.79999 10.5519 8.79999 9.99986C8.79999 9.98319 8.80879 9.96786 8.80959 9.95052L10.06 10.9926C10.0392 10.9932 10.0208 10.9999 10 10.9999ZM4.16557 4.19501C3.85356 3.935 3.34716 3.935 3.03435 4.19501C2.72235 4.45568 2.72235 4.87769 3.03435 5.1377L7.53921 8.8918C7.31761 9.23048 7.2 9.60716 7.2 9.99983C7.2 11.2865 8.45682 12.3332 10 12.3332C10.472 12.3332 10.9241 12.2352 11.3305 12.0512L15.8345 15.8047C15.9913 15.9353 16.1953 16 16.4001 16C16.6049 16 16.8097 15.9353 16.9657 15.8047C17.2785 15.5447 17.2785 15.1226 16.9657 14.862L4.16557 4.19501Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsEyeOffIcon;
