import React from 'react';

export interface RepeatIconProps {
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
 * RepeatIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const RepeatIcon: React.FC<RepeatIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.51553 5.10016H14.3545C15.8127 5.10016 16.9998 6.20825 16.9998 7.57043V9.30011C16.9998 9.68721 16.6704 10.0001 16.2629 10.0001C15.8555 10.0001 15.5261 9.68721 15.5261 9.30011V7.57043C15.5261 6.98104 15.0007 6.50015 14.3545 6.50015H5.51553L6.46825 7.40524C6.75561 7.67893 6.75561 8.12133 6.46825 8.39502C6.32457 8.53152 6.13594 8.60012 5.94731 8.60012C5.75868 8.60012 5.57005 8.53152 5.42637 8.39502L3.21588 6.29505C2.92778 6.02135 2.92778 5.57896 3.21588 5.30526L5.42637 3.20529C5.71373 2.93159 6.18015 2.93159 6.46825 3.20529C6.75561 3.47898 6.75561 3.92138 6.46825 4.19508L5.51553 5.10016ZM13.5313 11.6052C13.8194 11.3315 14.2851 11.3315 14.5732 11.6052L16.7837 13.7052C17.0718 13.9789 17.0718 14.4213 16.7837 14.695L14.5732 16.7949C14.4295 16.9314 14.2409 17 14.0523 17C13.8636 17 13.675 16.9314 13.5313 16.7949C13.2432 16.5212 13.2432 16.0788 13.5313 15.8051L14.484 14.9001H5.64502C4.1861 14.9001 2.9998 13.792 2.9998 12.4298V10.7001C2.9998 10.313 3.3299 10.0001 3.73663 10.0001C4.14336 10.0001 4.47346 10.313 4.47346 10.7001V12.4298C4.47346 13.0199 4.99882 13.5001 5.64502 13.5001H14.484L13.5313 12.595C13.2432 12.3213 13.2432 11.8789 13.5313 11.6052Z" fill="currentColor"/>
    </svg>
  );
};

export default RepeatIcon;
