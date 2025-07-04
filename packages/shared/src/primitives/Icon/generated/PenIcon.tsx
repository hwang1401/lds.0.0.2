import React from 'react';

export interface PenIconProps {
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
 * PenIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PenIcon: React.FC<PenIconProps> = ({
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
      <path d="M15.2171 8.31672L11.6838 4.7834L13.4504 0.658386L19.3421 6.55006L15.2171 8.31672Z" fill="#F4868F"/>
<path d="M13.45 6.55017L11.6834 4.78351L5.79169 5.95852L2.05003 17.0585L1.66669 18.3335L2.93335 17.9418L14.0417 14.2085L15.2167 8.31683L13.45 6.55017Z" fill="#E7ECEF"/>
<path d="M11.0917 8.90839C10.9369 8.75339 10.7531 8.63047 10.5508 8.54664C10.3484 8.46272 10.1315 8.41956 9.91252 8.41956C9.69352 8.41956 9.4766 8.46272 9.27427 8.54664C9.07194 8.63047 8.8881 8.75339 8.73335 8.90839C8.50044 9.14347 8.34277 9.44256 8.2804 9.76756C8.21807 10.0926 8.25391 10.4288 8.38335 10.7334L2.05001 17.0667L1.66669 18.3334L2.93335 17.9501L9.26669 11.6167C9.57127 11.7461 9.90744 11.782 10.2325 11.7196C10.5575 11.6573 10.8566 11.4996 11.0917 11.2667C11.2467 11.1119 11.3696 10.9281 11.4534 10.7258C11.5374 10.5235 11.5805 10.3066 11.5805 10.0876C11.5805 9.86847 11.5374 9.65164 11.4534 9.44931C11.3696 9.24697 11.2467 9.06314 11.0917 8.90839Z" fill="#A0A6AB"/>
    </svg>
  );
};

export default PenIcon;
