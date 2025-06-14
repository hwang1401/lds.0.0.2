import React from 'react';

export interface LineIconsShuffleShuffle1IconProps {
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
 * LineIconsShuffleShuffle1Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsShuffleShuffle1Icon: React.FC<LineIconsShuffleShuffle1IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1252 8.51947C15.6422 8.51947 15.2502 8.12747 15.2502 7.64447L15.2493 5.98811L4.4939 16.7435C4.32327 16.9142 4.09927 16.9999 3.87527 16.9999C3.65128 16.9999 3.42728 16.9142 3.25665 16.7435C2.91453 16.4014 2.91453 15.8475 3.25665 15.5063L8.75774 10.0052L3.65478 4.90311C3.31265 4.56099 3.31265 4.00712 3.65478 3.66587C3.9969 3.32375 4.5499 3.32375 4.89202 3.66587L9.99499 8.76796L14.0042 4.75786L12.3513 4.74999C11.8684 4.74736 11.4781 4.35362 11.4807 3.87062C11.4834 3.38762 11.8981 3.00875 12.3601 3L16.1269 3.01837C16.6082 3.021 16.9976 3.41212 16.9976 3.89337L17.0002 7.6436C17.0002 8.12659 16.6091 8.51859 16.1261 8.51947H16.1252ZM16.125 11.4692H16.1294C16.6133 11.4718 17.0026 11.8655 17 12.3485L16.9816 16.0305C17.0096 16.2851 16.9396 16.5485 16.7436 16.7436C16.573 16.9142 16.349 17 16.125 17C16.1117 17 16.0987 16.9964 16.0856 16.9928C16.0755 16.99 16.0653 16.9871 16.055 16.986L12.3564 16.9886C11.8734 16.9886 11.4814 16.5966 11.4814 16.1136C11.4814 15.6306 11.8726 15.2386 12.3556 15.2386L13.9997 15.2378L11.5689 12.8061C11.2268 12.464 11.2268 11.9101 11.5689 11.5689C11.9111 11.2268 12.4649 11.2268 12.8062 11.5689L15.2413 14.004L15.25 12.3398C15.2527 11.8576 15.6438 11.4692 16.125 11.4692Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsShuffleShuffle1Icon;
