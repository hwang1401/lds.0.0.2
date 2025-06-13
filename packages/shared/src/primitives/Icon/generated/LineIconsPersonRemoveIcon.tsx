import React from 'react';

export interface LineIconsPersonRemoveIconProps {
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
 * LineIconsPersonRemoveIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPersonRemoveIcon: React.FC<LineIconsPersonRemoveIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.1579 10.8889C5.31442 10.8889 3 13.68 3 17.1111C3 17.6018 3.32937 18 3.73684 18C4.14432 18 4.47368 17.6018 4.47368 17.1111C4.47368 14.6604 6.12642 12.6667 8.1579 12.6667C10.1894 12.6667 11.8421 14.6604 11.8421 17.1111C11.8421 17.6018 12.1715 18 12.5789 18C12.9864 18 13.3158 17.6018 13.3158 17.1111C13.3158 13.68 11.0014 10.8889 8.1579 10.8889ZM6.68408 5.55553C6.68408 6.53598 7.34503 7.33331 8.15777 7.33331C8.9705 7.33331 9.63145 6.53598 9.63145 5.55553C9.63145 4.57509 8.9705 3.77775 8.15777 3.77775C7.34503 3.77775 6.68408 4.57509 6.68408 5.55553ZM5.21039 5.55556C5.21039 3.59467 6.53228 2 8.15775 2C9.78323 2 11.1051 3.59467 11.1051 5.55556C11.1051 7.51644 9.78323 9.11111 8.15775 9.11111C6.53228 9.11111 5.21039 7.51644 5.21039 5.55556ZM17.0002 5.55557C17.0002 6.04446 16.6686 6.44446 16.2633 6.44446H13.3159C12.9107 6.44446 12.5791 6.04446 12.5791 5.55557C12.5791 5.06668 12.9107 4.66668 13.3159 4.66668H16.2633C16.6686 4.66668 17.0002 5.06668 17.0002 5.55557Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPersonRemoveIcon;
