import React from 'react';

export interface SwapIconProps {
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
 * SwapIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SwapIcon: React.FC<SwapIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.4444 7.11787H2.88891C2.39824 7.11787 2.00002 6.74976 2.00002 6.29436C2.00002 5.83896 2.39824 5.47085 2.88891 5.47085H14.5173L13.1324 4.4744C12.7449 4.19523 12.6747 3.67724 12.976 3.31902C13.2773 2.95914 13.8364 2.89408 14.2231 3.17325L17.656 5.64379C17.8755 5.80108 18.0018 6.04401 18 6.30177C17.9982 6.55788 17.8667 6.79917 17.6444 6.95317L14.0889 9.4237C13.9289 9.53487 13.7413 9.5884 13.5564 9.5884C13.2862 9.5884 13.0187 9.47476 12.8444 9.259C12.5502 8.89501 12.6293 8.37867 13.0222 8.10608L14.4444 7.11787ZM5.55557 12.8825H17.1111C17.6018 12.8825 18 13.2506 18 13.706C18 14.1614 17.6018 14.5295 17.1111 14.5295H5.48268L6.86756 15.5259C7.25512 15.8051 7.32534 16.3231 7.02401 16.6813C6.8489 16.8905 6.58667 17 6.32179 17C6.13068 17 5.93868 16.944 5.7769 16.8271L2.34402 14.3565C2.12446 14.1992 1.99824 13.9563 2.00002 13.6986C2.0018 13.4424 2.13335 13.2011 2.35557 13.0472L5.91112 10.5766C6.3049 10.304 6.86134 10.3773 7.15556 10.7413C7.44978 11.1053 7.37067 11.6217 6.97778 11.8942L5.55557 12.8825Z" fill="currentColor"/>
    </svg>
  );
};

export default SwapIcon;
