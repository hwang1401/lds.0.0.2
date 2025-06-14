import React from 'react';

export interface CodeDownloadIconProps {
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
 * CodeDownloadIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CodeDownloadIcon: React.FC<CodeDownloadIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8234 9.46285L13.9611 4.32024C13.6827 3.95169 13.1795 3.89169 12.8363 4.18996C12.4915 4.48652 12.4379 5.02564 12.7139 5.39505L16.1666 9.99083L12.5851 14.5935C12.3027 14.9577 12.3483 15.4986 12.6875 15.802C12.8379 15.9348 13.0187 16 13.1995 16C13.4291 16 13.6563 15.8954 13.8147 15.6923L17.8146 10.5497C18.0585 10.2351 18.0625 9.78084 17.8234 9.46285ZM3.83368 10.0096L7.41519 5.40691C7.69759 5.04265 7.65119 4.50181 7.3128 4.19926C6.972 3.8967 6.46882 3.94555 6.18482 4.30897L2.18492 9.45158C1.94173 9.76528 1.93773 10.2195 2.17692 10.5375L6.03923 15.6801C6.19762 15.8901 6.42882 15.9998 6.66321 15.9998C6.83921 15.9998 7.0168 15.9381 7.164 15.8113C7.50879 15.5139 7.56239 14.9747 7.2856 14.6053L3.83368 10.0096ZM11.8446 9.47248C12.1614 9.14336 12.6693 9.1545 12.9757 9.49391C13.2821 9.83418 13.2733 10.3767 12.9557 10.7059L10.5558 13.1889C10.4006 13.3483 10.1998 13.4289 9.99981 13.4289C9.79502 13.4289 9.59102 13.3449 9.43423 13.1777L7.03429 10.6064C6.72229 10.2713 6.72229 9.72876 7.03429 9.39449C7.34708 9.05936 7.85347 9.05936 8.16546 9.39449L9.19983 10.5019V6.57205C9.19983 6.09807 9.55822 5.71495 9.99981 5.71495C10.4422 5.71495 10.7998 6.09807 10.7998 6.57205V10.5524L11.8446 9.47248Z" fill="currentColor"/>
    </svg>
  );
};

export default CodeDownloadIcon;
