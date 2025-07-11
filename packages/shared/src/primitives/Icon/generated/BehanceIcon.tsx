import React from 'react';

export interface BehanceIconProps {
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
 * BehanceIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BehanceIcon: React.FC<BehanceIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.8752 8.39211H12.9752V8.04211H10.8752V8.39211ZM12.6517 10.2058H11.209V10.1988C11.209 9.76616 11.4974 9.43156 11.9356 9.43156C12.3696 9.43156 12.6517 9.76266 12.6517 10.1988V10.2058ZM11.9285 8.8079C10.9807 8.8079 10.3325 9.3938 10.3325 10.3843V10.693C10.3325 11.7283 10.9772 12.3079 11.9656 12.3079C12.9302 12.3079 13.3985 11.7689 13.4839 11.2278H12.6551C12.5802 11.5022 12.3289 11.6674 11.9726 11.6674C11.5176 11.6674 11.2089 11.3426 11.2089 10.8302V10.7378H13.5175V10.406C13.5175 9.4344 12.9099 8.8079 11.9285 8.8079ZM8.05358 11.5659H7.38228V10.2128H8.24118C8.77108 10.2128 9.06018 10.476 9.06018 10.9058C9.06018 11.3391 8.76828 11.5659 8.05358 11.5659ZM7.38228 8.369H8.18378C8.60728 8.369 8.85508 8.5958 8.85508 8.9654C8.85508 9.3623 8.58698 9.5856 7.97938 9.5856H7.38228V8.369ZM8.9629 9.84876V9.80956C9.4158 9.69896 9.7483 9.36576 9.7483 8.81276C9.7483 8.11626 9.2114 7.69206 8.3924 7.69206H6.4828V12.2421H8.3889C9.3185 12.2421 9.9828 11.7724 9.9828 10.959C9.9828 10.2765 9.5131 9.90196 8.9629 9.84876ZM10 15.6C6.91233 15.6 4.40003 13.0877 4.40003 10C4.40003 6.91231 6.91233 4.40001 10 4.40001C13.0877 4.40001 15.6 6.91231 15.6 10C15.6 13.0877 13.0877 15.6 10 15.6ZM10.0002 2.99998C6.14037 2.99998 3.00017 6.14018 3.00017 9.99998C3.00017 13.8598 6.14037 17 10.0002 17C13.86 17 17.0002 13.8598 17.0002 9.99998C17.0002 6.14018 13.86 2.99998 10.0002 2.99998Z" fill="currentColor"/>
    </svg>
  );
};

export default BehanceIcon;
