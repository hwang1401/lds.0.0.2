import React from 'react';

export interface UploadIconProps {
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
 * UploadIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const UploadIcon: React.FC<UploadIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M3.875 2H16.125H16.125C16.6063 2 17 2.42353 17 2.94118V4.82353C17 5.34118 16.6063 5.76471 16.125 5.76471C15.6438 5.76471 15.25 5.34118 15.25 4.82353V3.88235H4.75V4.82353C4.75 5.34118 4.35625 5.76471 3.875 5.76471C3.39375 5.76471 3 5.34118 3 4.82353V2.94118C3 2.42353 3.39375 2 3.875 2ZM6.50068 11.4118C6.2338 11.4118 5.97218 11.2819 5.7998 11.0353C5.5093 10.6193 5.58805 10.0292 5.9748 9.71765L9.4748 6.89412C9.77755 6.64941 10.1941 6.64283 10.5029 6.87718L14.0029 9.52565C14.3984 9.82494 14.4938 10.4122 14.2156 10.8367C13.9373 11.2612 13.3922 11.3647 12.9967 11.0654L10.8728 9.45835C10.8744 9.48181 10.8753 9.50551 10.8753 9.52941V17.0588C10.8753 17.5784 10.4841 18 10.0003 18C9.51639 18 9.12526 17.5784 9.12526 17.0588V9.52941C9.12526 9.52934 9.12526 9.52927 9.12526 9.52921L7.0248 11.2235C6.8673 11.3506 6.68355 11.4118 6.50068 11.4118Z" fill="currentColor"/>
    </svg>
  );
};

export default UploadIcon;
