import React from 'react';

export interface SettingIconProps {
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
 * SettingIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SettingIcon: React.FC<SettingIconProps> = ({
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
      <path d="M10 16.4584C13.5669 16.4584 16.4584 13.5669 16.4584 10C16.4584 6.43318 13.5669 3.54169 10 3.54169C6.43318 3.54169 3.54169 6.43318 3.54169 10C3.54169 13.5669 6.43318 16.4584 10 16.4584Z" fill="#C7CED5"/>
<path d="M8.33333 1.66669H11.6667C11.8877 1.66669 12.0997 1.75449 12.2559 1.91076C12.4122 2.06705 12.5 2.279 12.5 2.50002V4.16669H7.5V2.50002C7.5 2.279 7.5878 2.06705 7.74407 1.91076C7.90036 1.75449 8.11232 1.66669 8.33333 1.66669Z" fill="#C7CED5"/>
<path d="M1.95068 7.28285L3.61735 4.3961C3.72786 4.2047 3.90989 4.06503 4.12338 4.00783C4.33686 3.95063 4.5643 3.98058 4.75571 4.09108L6.19908 4.92442L3.69908 9.25457L2.25571 8.42123C2.0643 8.3107 1.92465 8.12868 1.86745 7.9152C1.81025 7.70172 1.84018 7.47426 1.95068 7.28285Z" fill="#C7CED5"/>
<path d="M3.61816 15.6162L1.95149 12.7294C1.84098 12.5381 1.81104 12.3106 1.86824 12.0971C1.92544 11.8836 2.06511 11.7016 2.25651 11.5911L3.69988 10.7578L6.19988 15.0879L4.75651 15.9213C4.56511 16.0318 4.33765 16.0617 4.12417 16.0044C3.91068 15.9473 3.72867 15.8076 3.61816 15.6162Z" fill="#C7CED5"/>
<path d="M11.6585 18.3333H8.32522C8.10421 18.3333 7.89226 18.2455 7.73597 18.0892C7.5797 17.933 7.49188 17.721 7.49188 17.5V15.8333H12.4919V17.5C12.4919 17.721 12.4041 17.933 12.2479 18.0892C12.0915 18.2455 11.8796 18.3333 11.6585 18.3333Z" fill="#C7CED5"/>
<path d="M18.0444 12.7302L16.3778 15.6169C16.2673 15.8083 16.0853 15.948 15.8718 16.0052C15.6583 16.0624 15.4309 16.0324 15.2394 15.9219L13.796 15.0886L16.296 10.7585L17.7394 11.5918C17.9309 11.7023 18.0705 11.8843 18.1277 12.0978C18.1849 12.3112 18.1549 12.5387 18.0444 12.7302Z" fill="#C7CED5"/>
<path d="M16.3786 4.39682L18.0452 7.28357C18.1557 7.47498 18.1856 7.70245 18.1285 7.91593C18.0712 8.12942 17.9316 8.31142 17.7402 8.42192L16.2968 9.25525L13.7968 4.92513L15.2402 4.0918C15.4316 3.98129 15.6591 3.95136 15.8726 4.00857C16.0861 4.06577 16.2681 4.20542 16.3786 4.39682Z" fill="#C7CED5"/>
<path d="M10 12.0834C11.1506 12.0834 12.0834 11.1506 12.0834 10C12.0834 8.84944 11.1506 7.91669 10 7.91669C8.84944 7.91669 7.91669 8.84944 7.91669 10C7.91669 11.1506 8.84944 12.0834 10 12.0834Z" fill="white"/>
    </svg>
  );
};

export default SettingIcon;
