import React from 'react';

export interface RecordingIconProps {
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
 * RecordingIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const RecordingIcon: React.FC<RecordingIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.7999 12C13.9175 12 13.1999 11.103 13.1999 9.99998C13.1999 8.89698 13.9175 7.99998 14.7999 7.99998C15.6823 7.99998 16.3999 8.89698 16.3999 9.99998C16.3999 11.103 15.6823 12 14.7999 12ZM3.59979 9.99998C3.59979 8.89698 4.31739 7.99998 5.19979 7.99998C6.08219 7.99998 6.79979 8.89698 6.79979 9.99998C6.79979 11.103 6.08219 12 5.19979 12C4.31739 12 3.59979 11.103 3.59979 9.99998ZM14.8002 5.99998C13.0354 5.99998 11.6002 7.79398 11.6002 9.99998C11.6002 10.731 11.7698 11.409 12.0458 12H7.95458C8.23058 11.409 8.40018 10.731 8.40018 9.99998C8.40018 7.79398 6.96498 5.99998 5.20018 5.99998C3.43538 5.99998 2.00018 7.79398 2.00018 9.99998C2.00018 12.206 3.43538 14 5.20018 14H14.8002C16.565 14 18.0002 12.206 18.0002 9.99998C18.0002 7.79398 16.565 5.99998 14.8002 5.99998Z" fill="currentColor"/>
    </svg>
  );
};

export default RecordingIcon;
