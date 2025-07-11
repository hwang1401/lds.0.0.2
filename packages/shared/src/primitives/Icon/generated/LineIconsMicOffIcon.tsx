import React from 'react';

export interface LineIconsMicOffIconProps {
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
 * LineIconsMicOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsMicOffIcon: React.FC<LineIconsMicOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.44416 5.2C8.44416 4.3176 9.14181 3.6 9.99967 3.6C10.8575 3.6 11.5552 4.3176 11.5552 5.2V9.2C11.5552 9.22603 11.5518 9.2509 11.5484 9.27565L11.5484 9.27567C11.5462 9.292 11.544 9.30827 11.5427 9.3248L12.7833 10.6008C12.9863 10.176 13.1107 9.7048 13.1107 9.2V5.2C13.1107 3.4352 11.7154 2 9.99967 2C8.4846 2 7.22308 3.1208 6.94776 4.5984L8.44416 6.1376V5.2ZM15.4446 9.20001C15.4446 8.75841 15.097 8.40001 14.6669 8.40001C14.2368 8.40001 13.8891 8.75841 13.8891 9.20001C13.8891 9.92721 13.6853 10.6 13.354 11.1872L14.4919 12.3576C15.0923 11.4584 15.4446 10.3712 15.4446 9.20001ZM10.0666 12.3934C10.0448 12.3967 10.023 12.4 10.0002 12.4C8.28445 12.4 6.88916 10.9648 6.88916 9.20001V9.06241L10.1215 12.3872C10.103 12.3879 10.0848 12.3907 10.0666 12.3934ZM16.7719 15.8344L4.32782 3.0344C4.02372 2.7216 3.53218 2.7216 3.22808 3.0344C2.92397 3.3472 2.92397 3.8528 3.22808 4.1656L15.6722 16.9656C15.8238 17.1216 16.0229 17.2 16.222 17.2C16.4212 17.2 16.6203 17.1216 16.7719 16.9656C17.076 16.6528 17.076 16.1472 16.7719 15.8344ZM10.7777 16.4H12.3332C12.761 16.4 13.111 16.76 13.111 17.2C13.111 17.64 12.761 18 12.3332 18H7.66669C7.23892 18 6.88893 17.64 6.88893 17.2C6.88893 16.76 7.23892 16.4 7.66669 16.4H9.2222V14.736C6.58794 14.3456 4.55566 12.016 4.55566 9.20001C4.55566 8.75841 4.90332 8.40001 5.33342 8.40001C5.76352 8.40001 6.11118 8.75841 6.11118 9.20001C6.11118 11.4056 7.85568 13.2 9.99996 13.2C10.2815 13.2 10.5553 13.1656 10.8205 13.1064L12.0595 14.3808C11.6542 14.552 11.2234 14.6688 10.7777 14.7352V16.4Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsMicOffIcon;
