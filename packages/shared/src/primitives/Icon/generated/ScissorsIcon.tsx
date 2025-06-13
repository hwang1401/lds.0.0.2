import React from 'react';

export interface ScissorsIconProps {
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
 * ScissorsIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ScissorsIcon: React.FC<ScissorsIconProps> = ({
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
      <g clipPath="url(#clip0_3054_24654)">
<path fillRule="evenodd" clipRule="evenodd" d="M16.7587 14.8946C17.0807 15.1987 17.0807 15.6902 16.7587 15.9943C16.5981 16.146 16.3873 16.2222 16.1765 16.2222C15.9656 16.2222 15.7548 16.146 15.5942 15.9943L11.4766 12.1054C11.1546 11.8013 11.1546 11.3098 11.4766 11.0057C11.7986 10.7016 12.3191 10.7016 12.6411 11.0057L16.7587 14.8946ZM5.47059 15.4444C5.016 15.4444 4.64706 15.0952 4.64706 14.6667C4.64706 14.2381 5.016 13.8889 5.47059 13.8889C5.92518 13.8889 6.29412 14.2381 6.29412 14.6667C6.29412 15.0952 5.92518 15.4444 5.47059 15.4444ZM5.47059 6.11111C5.016 6.11111 4.64706 5.76189 4.64706 5.33333C4.64706 4.90478 5.016 4.55556 5.47059 4.55556C5.92518 4.55556 6.29412 4.90478 6.29412 5.33333C6.29412 5.76189 5.92518 6.11111 5.47059 6.11111ZM16.7595 5.10467C17.0815 4.79978 17.0799 4.30822 16.7579 4.00489C16.4351 3.70156 15.9146 3.70311 15.5934 4.00644L10.4216 8.90878L7.69988 6.339C7.69741 6.33744 7.69494 6.33667 7.69247 6.33433C7.84729 6.03022 7.94118 5.69267 7.94118 5.33333C7.94118 4.04689 6.83271 3 5.47059 3C4.10847 3 3 4.04689 3 5.33333C3 6.61978 4.10847 7.66667 5.47059 7.66667C5.85188 7.66667 6.20765 7.578 6.53047 7.43178C6.53294 7.43411 6.53294 7.43722 6.53541 7.43878L9.25882 10.0109L6.55024 12.5776C6.22247 12.4267 5.86012 12.3333 5.47059 12.3333C4.10847 12.3333 3 13.3802 3 14.6667C3 15.9531 4.10847 17 5.47059 17C6.83271 17 7.94118 15.9531 7.94118 14.6667C7.94118 14.3159 7.85306 13.9861 7.70565 13.6867L16.7595 5.10467Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3054_24654">
<rect width="14" height="14" fill="white" transform="translate(3 3)"/>
</clipPath>
</defs>
    </svg>
  );
};

export default ScissorsIcon;
