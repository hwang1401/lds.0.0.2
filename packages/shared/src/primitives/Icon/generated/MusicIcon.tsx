import React from 'react';

export interface MusicIconProps {
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
 * MusicIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const MusicIcon: React.FC<MusicIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.9361 14.4498C13.214 14.4498 12.627 13.8551 12.627 13.1235C12.627 12.392 13.214 11.7973 13.9361 11.7973C14.5687 11.7973 15.096 12.2524 15.2189 12.856V12.8569C15.2355 12.9431 15.2452 13.032 15.2452 13.1235C15.2452 13.8551 14.6582 14.4498 13.9361 14.4498ZM6.06372 16.2222C5.34161 16.2222 4.75462 15.6266 4.75462 14.8951C4.75462 14.1644 5.34161 13.5689 6.06372 13.5689C6.69546 13.5689 7.22366 14.024 7.3465 14.6275V14.6302C7.36405 14.7155 7.3737 14.8044 7.3737 14.8951C7.3737 15.6266 6.78671 16.2222 6.06372 16.2222ZM16.9535 12.6595V2.88886C16.9535 2.61864 16.8333 2.36353 16.6253 2.19464C16.4174 2.02664 16.1445 1.96264 15.8866 2.02131L8.01441 3.79286C7.61256 3.88353 7.3274 4.24442 7.3274 4.66042V12.0747C6.94046 11.8969 6.51579 11.7911 6.06393 11.7911C4.37491 11.7911 3 13.184 3 14.8951C3 16.6071 4.37491 18 6.06393 18C7.75382 18 9.12873 16.6071 9.12873 14.8951C9.12873 14.7369 9.10504 14.584 9.08223 14.4311V5.3742L15.1987 3.99642V10.3022C14.8126 10.1244 14.3879 10.0195 13.9361 10.0195C12.2462 10.0195 10.8721 11.4115 10.8721 13.1235C10.8721 14.8356 12.2462 16.2276 13.9361 16.2276C15.626 16.2276 17 14.8356 17 13.1235C17 12.9644 16.9772 12.8124 16.9535 12.6595Z" fill="currentColor"/>
    </svg>
  );
};

export default MusicIcon;
