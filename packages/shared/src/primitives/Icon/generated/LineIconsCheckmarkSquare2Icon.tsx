import React from 'react';

export interface LineIconsCheckmarkSquare2IconProps {
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
 * LineIconsCheckmarkSquare2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsCheckmarkSquare2Icon: React.FC<LineIconsCheckmarkSquare2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4444 10.6479C15.4444 10.2186 15.7929 9.87011 16.2222 9.87011C16.6516 9.87011 17 10.2186 17 10.6479V14.977C17 16.0923 16.0923 17 14.9778 17H5.02222C3.90767 17 3 16.0923 3 14.977V5.02222C3 3.90689 3.90767 3 5.02222 3H12.4632C12.8926 3 13.241 3.34767 13.241 3.77778C13.241 4.20711 12.8926 4.55556 12.4632 4.55556H5.02222C4.76478 4.55556 4.55556 4.76478 4.55556 5.02222V14.977C4.55556 15.2344 4.76478 15.4444 5.02222 15.4444H14.9778C15.2352 15.4444 15.4444 15.2344 15.4444 14.977V10.6479ZM7.90767 9.18023C8.21878 8.88312 8.71034 8.89556 9.00745 9.2059L10.178 10.4332L14.8859 5.56978C15.1838 5.26178 15.6761 5.25245 15.9857 5.55189C16.2945 5.85056 16.3022 6.34289 16.0036 6.65167L10.7326 12.0961C10.5863 12.2478 10.3849 12.3333 10.1741 12.3333H10.171C9.95945 12.3326 9.75723 12.2455 9.61101 12.0922L7.88201 10.28C7.5849 9.96889 7.59734 9.47656 7.90767 9.18023Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsCheckmarkSquare2Icon;
