import React from 'react';

export interface AwardIconProps {
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
 * AwardIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const AwardIcon: React.FC<AwardIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2612 13.7656C9.99464 13.6288 9.67237 13.6312 9.41266 13.776L6.2002 15.536L7.45844 10.968C8.20842 11.368 9.07496 11.6 9.99893 11.6C10.9229 11.6 11.7894 11.368 12.5403 10.968L13.8165 15.6016L10.2612 13.7656ZM10.0003 3.59998C11.8911 3.59998 13.4288 5.03518 13.4288 6.79998C13.4288 8.56478 11.8911 9.99998 10.0003 9.99998C8.10951 9.99998 6.57185 8.56478 6.57185 6.79998C6.57185 5.03518 8.10951 3.59998 10.0003 3.59998ZM15.9728 17.0008L13.9937 9.8176C14.7103 8.992 15.1422 7.9432 15.1422 6.8C15.1422 4.1528 12.8358 2 9.99956 2C7.16422 2 4.85687 4.1528 4.85687 6.8C4.85687 7.9432 5.28886 8.992 6.0054 9.8176L4.02718 17.0008C3.94062 17.3144 4.0649 17.6448 4.34174 17.8392C4.61774 18.0336 4.99315 18.0512 5.29057 17.8896L9.85899 15.3864L14.7274 17.9C14.8568 17.9672 15 18 15.1422 18C15.3282 18 15.5134 17.944 15.6677 17.8328C15.9376 17.6376 16.0585 17.3104 15.9728 17.0008Z" fill="currentColor"/>
    </svg>
  );
};

export default AwardIcon;
