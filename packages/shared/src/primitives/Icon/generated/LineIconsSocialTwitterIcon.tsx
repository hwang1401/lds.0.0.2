import React from 'react';

export interface LineIconsSocialTwitterIconProps {
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
 * LineIconsSocialTwitterIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsSocialTwitterIcon: React.FC<LineIconsSocialTwitterIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.2358 5.32228V5.32403V5.32228ZM6.90019 15.2474C6.92153 15.2474 6.94464 15.2482 6.96597 15.25C12.0282 15.2176 15.0496 11.4105 15.0496 7.73027C15.0496 7.39602 15.2238 7.17989 15.3785 6.98827C15.5189 6.81327 15.7367 6.54377 15.9305 6.15527C15.2256 6.14827 14.5963 5.84027 14.23 5.41853C13.8469 5.01515 13.2967 4.7684 12.7029 4.7509C12.1305 4.72815 11.5465 4.94515 11.1127 5.35028C10.5349 5.89015 10.2878 6.70477 10.4673 7.47477L10.6993 8.47139L9.66288 8.54314C6.98197 8.74089 5.12418 7.61127 3.84861 6.44227C3.85394 8.20976 4.45039 10.5679 7.16153 12.0886L8.01309 12.5664L7.44686 13.3547C6.85753 14.1764 5.97041 14.7005 5.06729 15.0356C5.66374 15.1756 6.27708 15.2474 6.88864 15.2474H6.8993H6.90019ZM6.90014 17C6.87702 17 6.85213 16.9991 6.82902 16.9973C5.40412 16.9877 3.97478 16.6613 2.69121 16.0497C2.20854 15.8187 1.93565 15.313 2.01298 14.788C2.0912 14.2569 2.50543 13.8404 3.04232 13.7546C3.97122 13.6041 4.74189 13.3364 5.30012 12.9785C1.85387 10.4419 1.94453 6.64439 2.16765 5.03614C2.23343 4.56539 2.57387 4.17252 3.03432 4.03515C3.50188 3.89515 3.98633 4.03515 4.30633 4.39302C5.67168 5.91639 7.03614 6.68201 8.63615 6.79839C8.68237 5.77901 9.12327 4.79639 9.88861 4.08065C10.6682 3.35177 11.6877 2.97028 12.758 3.00178C13.8291 3.03415 14.8229 3.47865 15.5553 4.25302C15.63 4.33702 15.9091 4.48927 16.246 4.34052C16.6878 4.1454 17.19 4.21015 17.5562 4.51114C17.9216 4.80952 18.0771 5.27939 17.9633 5.73701C17.6762 6.90163 17.1091 7.65238 16.8229 8.01201C16.6736 12.4789 12.9864 17 6.90014 17Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsSocialTwitterIcon;
