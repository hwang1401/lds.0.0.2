import React from 'react';

export interface LineIconsArrowArrow2UpIconProps {
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
 * LineIconsArrowArrow2UpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsArrowArrow2UpIcon: React.FC<LineIconsArrowArrow2UpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.19872 8.81C4.50214 9.181 5.04214 9.23175 5.40556 8.922L9.14267 5.74312V16.125C9.14267 16.608 9.52666 17 9.9998 17C10.4729 17 10.8569 16.608 10.8569 16.125V5.74312L14.594 8.922C14.9583 9.23175 15.4983 9.181 15.8009 8.81C16.1043 8.439 16.0555 7.88687 15.6912 7.578L10.5484 3.203C10.5081 3.168 10.4601 3.15138 10.4155 3.12513C10.3804 3.10413 10.3495 3.07962 10.3109 3.06387C10.2107 3.02362 10.1061 3 9.9998 3C9.89351 3 9.78894 3.02362 9.68866 3.06387C9.65009 3.07962 9.61923 3.10413 9.58409 3.12513C9.53952 3.15138 9.49152 3.168 9.45123 3.203L4.30843 7.578C3.945 7.88687 3.89529 8.439 4.19872 8.81Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsArrowArrow2UpIcon;
