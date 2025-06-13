import React from 'react';

export interface LineIconsCloudDownloadIconProps {
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
 * LineIconsCloudDownloadIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCloudDownloadIcon: React.FC<LineIconsCloudDownloadIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 3C12.0648 3 13.884 4.2919 14.54 6.14613C16.4912 6.40357 18 8.03381 18 10C18 10.9497 17.6448 11.8636 17 12.5737C16.8416 12.7472 16.6216 12.8366 16.4 12.8366C16.212 12.8366 16.0232 12.7728 15.8704 12.6422C15.54 12.3567 15.508 11.8659 15.8008 11.5432C16.1872 11.1185 16.4 10.5694 16.4 10C16.4 8.71359 15.3232 7.66669 14 7.66669H13.92C13.5392 7.66669 13.2112 7.40536 13.136 7.04213C12.8368 5.60168 11.5184 4.55556 10 4.55556C8.4824 4.55556 7.1632 5.60168 6.8648 7.04213C6.7896 7.40536 6.4608 7.66669 6.08 7.66669H6C4.6768 7.66669 3.6 8.71359 3.6 10C3.6 10.5694 3.8128 11.1185 4.2 11.5432C4.492 11.8659 4.4608 12.3567 4.1296 12.6422C3.7976 12.9268 3.2928 12.8949 3.0008 12.5737C2.3552 11.8636 2 10.9497 2 10C2 8.03381 3.5088 6.40357 5.46 6.14613C6.1168 4.2919 7.936 3 10 3ZM10.8001 14.3898L11.8441 13.4098C12.1625 13.1119 12.6689 13.1204 12.9753 13.4292C13.2825 13.7388 13.2737 14.2311 12.9561 14.529L10.5561 16.7822C10.4001 16.9269 10.2001 17 10.0001 17C9.79526 17 9.59046 16.9246 9.43446 16.7721L7.03446 14.4388C6.72166 14.1354 6.72166 13.6431 7.03446 13.339C7.34646 13.0357 7.85286 13.0357 8.16566 13.339L9.20006 14.3447V9.99998C9.20006 9.56987 9.55846 9.2222 10.0001 9.2222C10.4417 9.2222 10.8001 9.56987 10.8001 9.99998V14.3898Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCloudDownloadIcon;
