import React from 'react';

export interface LineIconsStarOutlinedIconProps {
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
 * LineIconsStarOutlinedIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsStarOutlinedIcon: React.FC<LineIconsStarOutlinedIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99985 13.377C10.1112 13.377 10.2225 13.4051 10.324 13.4605L12.9624 14.9155L12.4605 11.8452C12.4206 11.6044 12.4969 11.3592 12.6635 11.1886L14.7888 9.02015L11.8465 8.56814C11.619 8.53343 11.4223 8.3835 11.3201 8.16636L9.99985 5.36419L8.67959 8.16636C8.57739 8.3835 8.38068 8.53343 8.15317 8.56814L5.21094 9.02015L7.33623 11.1886C7.50284 11.3592 7.57914 11.6044 7.53924 11.8452L7.03732 14.9155L9.67574 13.4605C9.77724 13.4051 9.88855 13.377 9.99985 13.377ZM13.8936 16.9997C13.7823 16.9997 13.671 16.9724 13.5695 16.9163L10 14.9487L6.43054 16.9163C6.19393 17.0463 5.90831 17.0234 5.6948 16.8579C5.47919 16.6925 5.37209 16.4126 5.41689 16.1356L6.09732 11.9789L3.21319 9.03563C3.02068 8.83991 2.95208 8.54596 3.03398 8.27785C3.11519 8.00975 3.335 7.81476 3.59891 7.77414L7.58979 7.1626L9.37277 3.37664C9.60938 2.87441 10.3906 2.87441 10.6272 3.37664L12.4102 7.1626L16.4011 7.77414C16.665 7.81476 16.8848 8.00975 16.966 8.27785C17.0479 8.54596 16.9793 8.83991 16.7868 9.03563L13.9027 11.9789L14.5831 16.1356C14.6279 16.4126 14.5208 16.6925 14.3052 16.8579C14.1841 16.9525 14.0392 16.9997 13.8936 16.9997Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsStarOutlinedIcon;
