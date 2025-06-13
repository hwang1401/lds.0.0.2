import React from 'react';

export interface ExternalLinkIconProps {
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
 * ExternalLinkIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4444 14.6667V10C15.4444 9.57067 15.792 9.22222 16.2221 9.22222C16.6523 9.22222 16.9999 9.57067 16.9999 10V14.6667C16.9999 15.9531 15.953 17 14.6666 17H5.33332C4.04688 17 3 15.9531 3 14.6667V5.33333C3 4.04689 4.04688 3 5.33332 3H9.99996C10.4301 3 10.7777 3.34844 10.7777 3.77778C10.7777 4.20711 10.4301 4.55556 9.99996 4.55556H5.33332C4.90399 4.55556 4.55555 4.90478 4.55555 5.33333V14.6667C4.55555 15.0952 4.90399 15.4444 5.33332 15.4444H14.6666C15.0959 15.4444 15.4444 15.0952 15.4444 14.6667ZM14.3385 4.56178L13.1073 4.55556C12.6771 4.55322 12.331 4.20322 12.3334 3.77389C12.3357 3.34533 12.6834 3 13.1111 3H13.115L16.2238 3.01556C16.6516 3.01789 16.9977 3.36478 16.9977 3.79256L17 6.88811C17 7.31822 16.6523 7.66667 16.223 7.66667H16.2222C15.7929 7.66667 15.4445 7.319 15.4445 6.88967L15.4437 5.65611L10.5499 10.5499C10.3983 10.7016 10.1992 10.7778 10 10.7778C9.80094 10.7778 9.60183 10.7016 9.45016 10.5499C9.14605 10.2458 9.14605 9.75422 9.45016 9.45011L14.3385 4.56178Z" fill="currentColor"/>
    </svg>
  );
};

export default ExternalLinkIcon;
