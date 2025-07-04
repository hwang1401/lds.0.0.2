import React from 'react';

export interface DownloadIconProps {
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
 * DownloadIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const DownloadIcon: React.FC<DownloadIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.8753 10.4704L12.9752 8.7765C13.3619 8.46309 13.9106 8.54873 14.2002 8.96473C14.4907 9.38073 14.4119 9.97085 14.0252 10.2824L10.5252 13.1059C10.3703 13.2311 10.1848 13.2941 10.0002 13.2941C9.82431 13.2941 9.64844 13.2367 9.49706 13.1229L5.99706 10.4744C5.60156 10.1751 5.50619 9.58779 5.78444 9.16332C6.06269 8.73791 6.60781 8.63532 7.00331 8.93462L9.12775 10.5421C9.1261 10.5185 9.12526 10.4946 9.12526 10.4706V2.94118C9.12526 2.42165 9.51639 2 10.0003 2C10.4841 2 10.8753 2.42165 10.8753 2.94118V10.4704ZM4.75 15.1765V16.1176H15.25V15.1765C15.25 14.6588 15.6438 14.2353 16.125 14.2353C16.6062 14.2353 17 14.6588 17 15.1765V17.0588V17.0588C17 17.0912 16.9985 17.1232 16.9955 17.1547C16.9905 17.2064 16.9817 17.257 16.9692 17.3059C16.8677 17.7047 16.5268 18 16.125 18L16.118 18H3.88196L3.875 18C3.39375 18 3 17.5765 3 17.0588V17.0588V15.1765C3 14.6588 3.39375 14.2353 3.875 14.2353C4.35625 14.2353 4.75 14.6588 4.75 15.1765Z" fill="currentColor"/>
    </svg>
  );
};

export default DownloadIcon;
