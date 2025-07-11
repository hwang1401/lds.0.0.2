import React from 'react';

export interface HeartIconProps {
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
 * HeartIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const HeartIcon: React.FC<HeartIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M6.65461 4.64703C6.04996 4.64703 5.48309 4.92209 5.059 5.42198C4.17861 6.45962 4.17861 8.14868 5.0597 9.18798L9.99979 15.0112L14.9406 9.18798C15.8217 8.14868 15.8217 6.45962 14.9406 5.42198C14.0924 4.42139 12.5976 4.42303 11.7494 5.42198L10.4953 6.90021C10.2321 7.21068 9.76745 7.21068 9.50431 6.90021L8.25022 5.42115C7.82612 4.92209 7.25996 4.64703 6.65461 4.64703ZM9.99969 17C9.81424 17 9.63578 16.9135 9.50491 16.7579L4.06864 10.3508C2.64379 8.67082 2.64379 5.93753 4.06864 4.25753C4.75727 3.44718 5.67545 3 6.65451 3C7.63357 3 8.55245 3.44718 9.24038 4.25753L9.99969 5.15271L10.759 4.25835C11.4476 3.44718 12.3658 3 13.3456 3C14.3239 3 15.2428 3.44718 15.9307 4.25753C17.3563 5.93753 17.3563 8.67082 15.9314 10.3508L10.4952 16.7587C10.3636 16.9135 10.1858 17 9.99969 17Z" fill="currentColor"/>
    </svg>
  );
};

export default HeartIcon;
