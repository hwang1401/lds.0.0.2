import React from 'react';

export interface MinimizeIconProps {
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
 * MinimizeIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const MinimizeIcon: React.FC<MinimizeIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7778 8.4445H7.66677C7.23901 8.4445 6.88902 8.79449 6.88902 9.22226C6.88902 9.65002 7.23901 10 7.66677 10H10.7778C11.2056 10 11.5555 9.65002 11.5555 9.22226C11.5555 8.79449 11.2056 8.4445 10.7778 8.4445ZM4.55575 9.22229C4.55575 6.6487 6.64869 4.55576 9.22228 4.55576C11.7959 4.55576 13.8888 6.6487 13.8888 9.22229C13.8888 11.7959 11.7959 13.8888 9.22228 13.8888C6.64869 13.8888 4.55575 11.7959 4.55575 9.22229ZM16.7719 15.6722L14.1314 13.0309C14.9504 11.9778 15.4443 10.658 15.4443 9.22226C15.4443 5.79158 12.6529 3.00021 9.22223 3.00021C5.79155 3.00021 3.00018 5.79158 3.00018 9.22226C3.00018 12.6529 5.79155 15.4443 9.22223 15.4443C10.658 15.4443 11.9778 14.9504 13.0309 14.1315L15.6722 16.7719C15.8238 16.9236 16.0229 16.9998 16.222 16.9998C16.4211 16.9998 16.6202 16.9236 16.7719 16.7719C17.076 16.4678 17.076 15.9763 16.7719 15.6722Z" fill="currentColor"/>
    </svg>
  );
};

export default MinimizeIcon;
