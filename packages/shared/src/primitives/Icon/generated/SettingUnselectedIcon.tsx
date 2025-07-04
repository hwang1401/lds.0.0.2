import React from 'react';

export interface SettingUnselectedIconProps {
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
 * SettingUnselectedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SettingUnselectedIcon: React.FC<SettingUnselectedIconProps> = ({
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
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={combinedStyle}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      <path d="M14.6999 23.0417C19.6934 23.0417 23.7415 18.9936 23.7415 14C23.7415 9.00646 19.6934 4.95837 14.6999 4.95837C9.70629 4.95837 5.6582 9.00646 5.6582 14C5.6582 18.9936 9.70629 23.0417 14.6999 23.0417Z" fill="#E0E0E0"/>
<path d="M12.3666 2.33337H17.0333C17.3427 2.33337 17.6395 2.45629 17.8582 2.67508C18.077 2.89388 18.2 3.19062 18.2 3.50004V5.83337H11.2V3.50004C11.2 3.19062 11.3229 2.89388 11.5417 2.67508C11.7605 2.45629 12.0572 2.33337 12.3666 2.33337Z" fill="#E0E0E0"/>
<path d="M3.43095 10.196L5.76428 6.1545C5.91899 5.88654 6.17384 5.691 6.47271 5.61092C6.77159 5.53084 7.09001 5.57277 7.35798 5.72748L9.37871 6.89415L5.87871 12.9564L3.85798 11.7897C3.59001 11.6349 3.3945 11.3801 3.31442 11.0812C3.23434 10.7824 3.27623 10.4639 3.43095 10.196Z" fill="#E0E0E0"/>
<path d="M5.76527 21.8626L3.43194 17.8211C3.27723 17.5533 3.23531 17.2348 3.31539 16.9359C3.39547 16.637 3.591 16.3822 3.85896 16.2275L5.87969 15.0608L9.37969 21.123L7.35896 22.2897C7.091 22.4444 6.77256 22.4863 6.47368 22.4061C6.17481 22.3261 5.91998 22.1306 5.76527 21.8626Z" fill="#E0E0E0"/>
<path d="M17.0218 25.6666H12.3551C12.0457 25.6666 11.749 25.5437 11.5302 25.3249C11.3114 25.1062 11.1885 24.8094 11.1885 24.5V22.1666H18.1884V24.5C18.1884 24.8094 18.0656 25.1062 17.8468 25.3249C17.628 25.5437 17.3313 25.6666 17.0218 25.6666Z" fill="#E0E0E0"/>
<path d="M25.9622 17.8222L23.6289 21.8637C23.4742 22.1317 23.2194 22.3272 22.9205 22.4072C22.6216 22.4874 22.3032 22.4454 22.0352 22.2907L20.0144 21.124L23.5144 15.0619L25.5352 16.2286C25.8032 16.3833 25.9987 16.6381 26.0787 16.937C26.1588 17.2357 26.1169 17.5542 25.9622 17.8222Z" fill="#E0E0E0"/>
<path d="M23.6301 6.15558L25.9634 10.197C26.1181 10.465 26.16 10.7835 26.08 11.0823C25.9998 11.3812 25.8044 11.636 25.5364 11.7907L23.5156 12.9574L20.0156 6.89523L22.0364 5.72856C22.3044 5.57385 22.6228 5.53194 22.9217 5.61203C23.2206 5.69211 23.4754 5.88762 23.6301 6.15558Z" fill="#E0E0E0"/>
<path d="M14.6999 16.9167C16.3107 16.9167 17.6165 15.6109 17.6165 14C17.6165 12.3892 16.3107 11.0834 14.6999 11.0834C13.0891 11.0834 11.7832 12.3892 11.7832 14C11.7832 15.6109 13.0891 16.9167 14.6999 16.9167Z" fill="white"/>
    </svg>
  );
};

export default SettingUnselectedIcon;
