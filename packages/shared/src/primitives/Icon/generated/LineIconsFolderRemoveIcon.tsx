import React from 'react';

export interface LineIconsFolderRemoveIconProps {
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
 * LineIconsFolderRemoveIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsFolderRemoveIcon: React.FC<LineIconsFolderRemoveIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6003 10.8232H8.40025C7.96025 10.8232 7.60025 11.1938 7.60025 11.6467C7.60025 12.0997 7.96025 12.4702 8.40025 12.4702H11.6003C12.0403 12.4702 12.4003 12.0997 12.4003 11.6467C12.4003 11.1938 12.0403 10.8232 11.6003 10.8232ZM16.3998 14.9972C16.3998 15.1932 16.2206 15.3529 15.9998 15.3529H3.99976C3.77896 15.3529 3.59976 15.1932 3.59976 14.9972V11.4453V5.00199C3.59976 4.80599 3.77896 4.64705 3.99976 4.64705H7.30056L9.38056 7.26423C9.53256 7.45611 9.75976 7.56728 9.99976 7.56728H15.9998C16.2206 7.56728 16.3998 7.72622 16.3998 7.92305V14.9972ZM16.0002 5.92024H10.3794L8.30015 3.30224C8.14815 3.11035 7.92015 3 7.68095 3H4.00015C2.89775 3 2.00015 3.89765 2.00015 5.002V14.9972C2.00015 16.1015 2.89775 17 4.00015 17H16.0002C17.1026 17 18.0002 16.1015 18.0002 14.9972V7.92306C18.0002 6.81788 17.1026 5.92024 16.0002 5.92024Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsFolderRemoveIcon;
