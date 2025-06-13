import React from 'react';

export interface BriefcaseIconProps {
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
 * BriefcaseIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const BriefcaseIcon: React.FC<BriefcaseIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.39979 4.94445C8.39979 4.72978 8.57899 4.55556 8.79979 4.55556H11.1998C11.4206 4.55556 11.5998 4.72978 11.5998 4.94445V6.11111H8.39979V4.94445ZM7.59959 15.4444H12.3996V7.66666H7.59959V15.4444ZM16.4 14.6667C16.4 15.0952 16.0408 15.4444 15.6 15.4444H14V7.66666H15.6C16.0408 7.66666 16.4 8.01588 16.4 8.44444V14.6667ZM3.6001 8.44444V14.6667C3.6001 15.0952 3.9593 15.4444 4.4001 15.4444H6.0001V7.66666H4.4001C3.9593 7.66666 3.6001 8.01588 3.6001 8.44444ZM15.6 6.11111H13.2V4.94444C13.2 3.87267 12.3024 3 11.2 3H8.8C7.6976 3 6.8 3.87267 6.8 4.94444V6.11111H4.4C3.0768 6.11111 2 7.158 2 8.44444V14.6667C2 15.9531 3.0768 17 4.4 17H15.6C16.9232 17 18 15.9531 18 14.6667V8.44444C18 7.158 16.9232 6.11111 15.6 6.11111Z" fill="currentColor"/>
    </svg>
  );
};

export default BriefcaseIcon;
