import React from 'react';

export interface LineIconsCloudUploadIconProps {
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
 * LineIconsCloudUploadIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCloudUploadIcon: React.FC<LineIconsCloudUploadIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 3C12.0648 3 13.884 4.29188 14.54 6.14609C16.4912 6.40354 18 8.03375 18 9.99996C18 10.9496 17.6448 11.8635 17 12.5736C16.8416 12.7471 16.6216 12.8365 16.4 12.8365C16.212 12.8365 16.0232 12.7727 15.8704 12.6421C15.54 12.3566 15.508 11.8658 15.8008 11.5431C16.1872 11.1184 16.4 10.5693 16.4 9.99996C16.4 8.71352 15.3232 7.66664 14 7.66664H13.92C13.5392 7.66664 13.2112 7.40531 13.136 7.04209C12.8368 5.60165 11.5184 4.55555 10 4.55555C8.4824 4.55555 7.1632 5.60165 6.8648 7.04209C6.7896 7.40531 6.4608 7.66664 6.08 7.66664H6C4.6768 7.66664 3.6 8.71352 3.6 9.99996C3.6 10.5693 3.8128 11.1184 4.2 11.5431C4.492 11.8658 4.4608 12.3566 4.1296 12.6421C3.7984 12.9267 3.2928 12.8948 3.0008 12.5736C2.3552 11.8635 2 10.9496 2 9.99996C2 8.03375 3.5088 6.40354 5.46 6.14609C6.1168 4.29188 7.936 3 10 3ZM9.44387 9.44006C9.75907 9.14761 10.2575 9.14995 10.5655 9.45017L12.9655 11.7835C13.2783 12.0876 13.2783 12.5792 12.9655 12.8833C12.8095 13.0349 12.6047 13.1111 12.3999 13.1111C12.1951 13.1111 11.9903 13.0349 11.8343 12.8833L10.7999 11.8776V16.2222C10.7999 16.6524 10.4415 17 9.99987 17C9.55827 17 9.19987 16.6524 9.19987 16.2222V11.8325L8.15587 12.8125C7.83827 13.1119 7.33187 13.1018 7.02467 12.793C6.71747 12.4835 6.72627 11.9919 7.04387 11.6933L9.44387 9.44006Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCloudUploadIcon;
