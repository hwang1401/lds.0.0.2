import React from 'react';

export interface LinkIconProps {
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
 * LinkIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LinkIcon: React.FC<LinkIconProps> = ({
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
      <path d="M11.328 4.25317L8.96975 6.61138L7.49664 5.13824L9.855 2.77992C10.8317 1.80351 12.1563 1.25488 13.5374 1.25488C14.9184 1.25488 16.2429 1.8034 17.2197 2.77981C17.7043 3.26344 18.0888 3.83789 18.3513 4.4703C18.6138 5.10306 18.749 5.78142 18.749 6.4665C18.749 7.15158 18.6138 7.82992 18.3513 8.46267C18.0887 9.09542 17.7038 9.67017 17.2188 10.154L14.8602 12.5043L13.3896 11.0286L15.7476 8.679C16.0384 8.38875 16.2696 8.04368 16.427 7.66419C16.5846 7.28452 16.6657 6.87753 16.6657 6.4665C16.6657 6.05546 16.5846 5.64843 16.427 5.26877C16.2695 4.88912 16.0386 4.54428 15.7476 4.25399L15.7468 4.25317C15.1608 3.66732 14.366 3.33822 13.5374 3.33822C12.7088 3.33822 11.914 3.66739 11.328 4.25317Z" fill="#88BFFF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.61139 8.96984L4.25317 11.328C4.25313 11.3281 4.25321 11.328 4.25317 11.328C3.6674 11.914 3.33822 12.7088 3.33822 13.5374C3.33822 14.3659 3.66724 15.1606 4.25295 15.7466C4.83895 16.3323 5.63379 16.6615 6.46232 16.6615C7.29092 16.6615 8.08557 16.3324 8.67158 15.7467L11.0299 13.3883L12.5031 14.8614L10.1447 17.2198C9.168 18.1963 7.84338 18.7448 6.46232 18.7448C5.08127 18.7448 3.75674 18.1963 2.78003 17.2199C1.80362 16.2432 1.25488 14.9185 1.25488 13.5374C1.25488 12.1563 1.80339 10.8318 2.77981 9.85509L5.13826 7.49667L6.61139 8.96984Z" fill="#88BFFF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.8034 7.19637C13.2103 7.60316 13.2103 8.26271 12.8034 8.66949L8.67851 12.7945C8.27168 13.2013 7.61213 13.2013 7.20533 12.7945C6.79854 12.3877 6.79853 11.7282 7.20533 11.3213L11.3303 7.19637C11.7371 6.78957 12.3967 6.78957 12.8034 7.19637Z" fill="#88BFFF"/>
    </svg>
  );
};

export default LinkIcon;
