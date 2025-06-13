import React from 'react';

export interface ImageIconProps {
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
 * ImageIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ImageIcon: React.FC<ImageIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.88874 8.44445C7.53274 8.44445 8.0554 7.92179 8.0554 7.27779C8.0554 6.63379 7.53274 6.11112 6.88874 6.11112C6.24474 6.11112 5.72207 6.63379 5.72207 7.27779C5.72207 7.92179 6.24474 8.44445 6.88874 8.44445ZM14.6665 15.4445H5.76947L11.2178 10.8983C11.4091 10.7358 11.756 10.7366 11.9435 10.8976L15.4442 13.8842V14.6667C15.4442 15.096 15.0958 15.4445 14.6665 15.4445ZM5.33318 4.55555H14.6665C15.0958 4.55555 15.4443 4.90399 15.4443 5.33332V11.8387L12.9531 9.71377C12.1831 9.05888 10.9783 9.05888 10.2153 9.7091L4.5554 14.4318V5.33332C4.5554 4.90399 4.90385 4.55555 5.33318 4.55555ZM14.6667 3H5.33333C4.04689 3 3 4.04689 3 5.33333V14.6667C3 15.9531 4.04689 17 5.33333 17H14.6667C15.9531 17 17 15.9531 17 14.6667V5.33333C17 4.04689 15.9531 3 14.6667 3Z" fill="currentColor"/>
    </svg>
  );
};

export default ImageIcon;
