import React from 'react';

export interface LineIconsAlertTriangleIconProps {
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
 * LineIconsAlertTriangleIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsAlertTriangleIcon: React.FC<LineIconsAlertTriangleIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.36364 8.1579C9.36364 7.75116 9.64873 7.42105 10 7.42105C10.3513 7.42105 10.6364 7.75116 10.6364 8.1579V11.1053C10.6364 11.512 10.3513 11.8421 10 11.8421C9.64873 11.8421 9.36364 11.512 9.36364 11.1053V8.1579ZM9.3636 13.3158C9.3636 12.909 9.6487 12.5789 9.99998 12.5789C10.3513 12.5789 10.6364 12.909 10.6364 13.3158C10.6364 13.7225 10.3513 14.0526 9.99998 14.0526C9.6487 14.0526 9.3636 13.7225 9.3636 13.3158ZM15.6412 15.0496C15.4955 15.348 15.2116 15.5263 14.882 15.5263H5.11737C4.78773 15.5263 4.5039 15.348 4.35881 15.0496C4.29008 14.9096 4.19971 14.6244 4.36962 14.3002L9.2513 4.92906C9.54849 4.35875 10.4509 4.35875 10.7481 4.92906L15.6304 14.3002C15.7997 14.6244 15.7099 14.9096 15.6412 15.0496ZM16.7205 13.5391L11.8382 4.16716C11.457 3.43621 10.7697 3 9.99968 3C9.22966 3 8.54237 3.43621 8.16182 4.16716L3.2795 13.5391C2.9174 14.2339 2.90659 15.0695 3.25023 15.7739C3.6187 16.5306 4.33462 17 5.11737 17H14.882C15.6654 17 16.3807 16.5306 16.7498 15.7739C17.0934 15.0695 17.0826 14.2339 16.7205 13.5391Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsAlertTriangleIcon;
