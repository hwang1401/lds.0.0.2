import React from 'react';

export interface LineIconsBattteryChargingIconProps {
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
 * LineIconsBattteryChargingIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsBattteryChargingIcon: React.FC<LineIconsBattteryChargingIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.20317 15.901C7.32797 15.9685 7.46477 16 7.59917 16C7.87677 16 8.14717 15.8642 8.29437 15.622L11.4944 10.3718C11.636 10.14 11.6352 9.85427 11.492 9.62326C11.3488 9.39225 11.0848 9.24974 10.8 9.24974H7.37837L9.89437 5.12159C10.1136 4.76232 9.98077 4.30406 9.59677 4.09855C9.21437 3.89379 8.72477 4.0183 8.50557 4.37756L5.30557 9.62776C5.16397 9.85952 5.16477 10.1453 5.30797 10.3763C5.45117 10.6073 5.71517 10.7498 5.99997 10.7498H9.42157L6.90557 14.878C6.68637 15.2372 6.81917 15.6955 7.20317 15.901ZM10.5855 5.4996H13.0671C14.0231 5.4996 14.8007 6.31638 14.8007 7.32142V12.6781C14.8007 13.6832 14.0231 14.4999 13.0671 14.4999H9.90067L10.8143 12.9999H13.0623C13.1039 12.9826 13.2007 12.8679 13.2007 12.6781V7.32142C13.2007 7.12716 13.0999 7.0124 13.0599 6.9989H9.67188L10.5855 5.4996ZM16.3999 8.49972C16.3999 8.0857 16.7583 7.74969 17.1999 7.74969C17.6415 7.74969 17.9999 8.0857 17.9999 8.49972V11.4998C17.9999 11.9138 17.6415 12.2499 17.1999 12.2499C16.7583 12.2499 16.3999 11.9138 16.3999 11.4998V8.49972ZM3.6 12.6784V7.3209C3.6 7.1274 3.7008 7.01189 3.7336 6.99989L5.9856 6.99914L6.9 5.49984H3.7336C2.7776 5.49984 2 6.31662 2 7.3209V12.6784C2 13.6826 2.7776 14.5002 3.7336 14.5002H6.2144L7.128 13.0009H3.7408C3.7008 12.9874 3.6 12.8719 3.6 12.6784Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsBattteryChargingIcon;
