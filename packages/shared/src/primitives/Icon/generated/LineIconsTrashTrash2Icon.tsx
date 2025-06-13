import React from 'react';

export interface LineIconsTrashTrash2IconProps {
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
 * LineIconsTrashTrash2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsTrashTrash2Icon: React.FC<LineIconsTrashTrash2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.3998 13.2C8.3998 13.64 8.0398 14 7.5998 14C7.1598 14 6.7998 13.64 6.7998 13.2V10C6.7998 9.56001 7.1598 9.20001 7.5998 9.20001C8.0398 9.20001 8.3998 9.56001 8.3998 10V13.2ZM13.1999 13.2C13.1999 13.64 12.8399 14 12.3999 14C11.9599 14 11.5999 13.64 11.5999 13.2V10C11.5999 9.56001 11.9599 9.20001 12.3999 9.20001C12.8399 9.20001 13.1999 9.56001 13.1999 10V13.2ZM14.8002 15.6C14.8002 16.0408 14.4418 16.4 14.0002 16.4H6.0002C5.5586 16.4 5.2002 16.0408 5.2002 15.6V6.8H14.8002V15.6ZM8.3999 3.86232C8.3999 3.73836 8.5711 3.6 8.7999 3.6H11.1999C11.4287 3.6 11.5999 3.73836 11.5999 3.86232V5.1995H8.3999V3.86232ZM17.2 5.2H16.4H13.2V3.8624C13.2 2.8352 12.3032 2 11.2 2H8.8C7.6968 2 6.8 2.8352 6.8 3.8624V5.2H3.6H2.8C2.36 5.2 2 5.56 2 6C2 6.44 2.36 6.8 2.8 6.8H3.6V15.6C3.6 16.9232 4.6768 18 6 18H14C15.3232 18 16.4 16.9232 16.4 15.6V6.8H17.2C17.64 6.8 18 6.44 18 6C18 5.56 17.64 5.2 17.2 5.2Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsTrashTrash2Icon;
