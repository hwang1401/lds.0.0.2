import React from 'react';

export interface LineIconsEditEdit2IconProps {
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
 * LineIconsEditEdit2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsEditEdit2Icon: React.FC<LineIconsEditEdit2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.83984 13.1113L7.44472 12.8943L12.3447 8.40529L9.98572 6.24528L5.07084 10.7439L4.83984 13.1113ZM11.1587 5.17289L13.5168 7.33129L15.2204 5.76955L12.8632 3.61195L11.1587 5.17289ZM3.25639 14.5626C3.07264 14.3944 2.98076 14.1605 3.00351 13.9235L3.33514 10.5837C3.37189 10.2177 3.54864 9.87254 3.83389 9.61145L11.7054 2.40661C12.3196 1.84199 13.4335 1.87002 14.0819 2.46188L16.4776 4.65472L16.4785 4.65552C17.1479 5.26901 17.175 6.24449 16.538 6.82915L8.66564 14.0348C8.38126 14.2951 8.00414 14.4569 7.60339 14.4905L3.95464 14.794C3.92839 14.7956 3.90214 14.7964 3.87501 14.7964C3.64489 14.7964 3.42176 14.7131 3.25639 14.5626ZM17 17.1991C17 17.6396 16.6062 18 16.125 18H3.875C3.39462 18 3 17.6396 3 17.1991C3 16.7594 3.39462 16.3982 3.875 16.3982H16.125C16.6062 16.3982 17 16.7594 17 17.1991Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsEditEdit2Icon;
