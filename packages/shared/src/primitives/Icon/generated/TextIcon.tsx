import React from 'react';

export interface TextIconProps {
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
 * TextIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const TextIcon: React.FC<TextIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.2222 2H3.77778C3.34767 2 3 2.42071 3 2.94118V5.76471C3 6.28518 3.34767 6.70588 3.77778 6.70588C4.20789 6.70588 4.55556 6.28518 4.55556 5.76471V3.88235H9.22222V16.1176H7.66667C7.23656 16.1176 6.88889 16.5384 6.88889 17.0588C6.88889 17.5793 7.23656 18 7.66667 18H12.3333C12.7634 18 13.1111 17.5793 13.1111 17.0588C13.1111 16.5384 12.7634 16.1176 12.3333 16.1176H10.7778V3.88235H15.4444V5.76471C15.4444 6.28518 15.7921 6.70588 16.2222 6.70588C16.6523 6.70588 17 6.28518 17 5.76471V2.94118C17 2.42071 16.6523 2 16.2222 2Z" fill="currentColor"/>
    </svg>
  );
};

export default TextIcon;
