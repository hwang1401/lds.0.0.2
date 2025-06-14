import React from 'react';

export interface LineIconsShuffleShuffle2IconProps {
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
 * LineIconsShuffleShuffle2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsShuffleShuffle2Icon: React.FC<LineIconsShuffleShuffle2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2181 12.0076C14.9148 11.6646 14.4217 11.6629 14.1183 12.005C13.8134 12.3462 13.8119 12.9 14.1152 13.2421L14.3431 13.5002H13.1111C11.3953 13.5002 10 11.9297 10 10.0005C10 8.07038 11.3953 6.50074 13.1111 6.50074H14.3462L14.1183 6.75535C13.8134 7.09657 13.8119 7.65041 14.1152 7.99251C14.2669 8.164 14.4668 8.25062 14.6667 8.25062C14.865 8.25062 15.0641 8.16487 15.215 7.99513L16.7705 6.25313C16.9175 6.08952 16.9992 5.86729 17 5.63543C17.0008 5.40269 16.9191 5.18046 16.7737 5.01597L15.2181 3.25822C14.9148 2.91524 14.4217 2.91349 14.1183 3.25559C13.8134 3.59682 13.8119 4.15066 14.1152 4.49276L14.3431 4.75086H13.1111C11.4887 4.75086 10.0583 5.68705 9.22222 7.10445C8.38611 5.68705 6.95578 4.75086 5.33333 4.75086H3.77778C3.34767 4.75086 3 5.14196 3 5.6258C3 6.10877 3.34767 6.50074 3.77778 6.50074H5.33333C7.04911 6.50074 8.44444 8.07038 8.44444 10.0005C8.44444 11.9297 7.04911 13.5002 5.33333 13.5002H3.77778C3.34767 13.5002 3 13.8913 3 14.3752C3 14.8582 3.34767 15.2501 3.77778 15.2501H5.33333C6.95578 15.2501 8.38611 14.3131 9.22222 12.8957C10.0583 14.3131 11.4887 15.2501 13.1111 15.2501H14.3462L14.1183 15.5047C13.8134 15.846 13.8119 16.3998 14.1152 16.7419C14.2669 16.9134 14.4668 17 14.6667 17C14.865 17 15.0641 16.9143 15.215 16.7445L16.7705 15.0025C16.9175 14.8389 16.9992 14.6167 17 14.3848C17.0008 14.1521 16.9191 13.9298 16.7737 13.7654L15.2181 12.0076Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsShuffleShuffle2Icon;
