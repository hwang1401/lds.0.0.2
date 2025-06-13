import React from 'react';

export interface PieChartIconProps {
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
 * PieChartIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PieChartIcon: React.FC<PieChartIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1748 11.5094C15.8087 11.3729 15.4097 11.5732 15.2816 11.9561C14.492 14.296 12.3689 15.8679 10 15.8679C6.9123 15.8679 4.39996 13.2361 4.39996 9.99981C4.39996 7.5176 5.90008 5.29285 8.13312 4.46544C8.49782 4.33121 8.68892 3.91237 8.56012 3.53021C8.43132 3.14878 8.03161 2.9478 7.66691 3.0835C4.87527 4.11702 2.99994 6.89631 2.99994 9.99981C2.99994 14.0444 6.14019 17.335 10 17.335C12.9618 17.335 15.6141 15.3706 16.6011 12.4446C16.7299 12.0632 16.5395 11.6443 16.1748 11.5094ZM11.3998 8.53309V4.18408C13.5426 4.50683 15.2422 6.28707 15.5502 8.53309H11.3998ZM10.6998 2.66498C10.3134 2.66498 9.99977 2.99286 9.99977 3.39849V9.26661C9.99977 9.67224 10.3134 10.0001 10.6998 10.0001H16.2999C16.6863 10.0001 16.9999 9.67224 16.9999 9.26661C16.9999 5.62618 14.1732 2.66498 10.6998 2.66498Z" fill="currentColor"/>
    </svg>
  );
};

export default PieChartIcon;
