import React from 'react';

export interface ListIconProps {
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
 * ListIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ListIcon: React.FC<ListIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M2 5C2 4.448 2.39821 4 2.88886 4C3.37952 4 3.77773 4.448 3.77773 5C3.77773 5.552 3.37952 6 2.88886 6C2.39821 6 2 5.552 2 5ZM2 10C2 9.44801 2.39821 9.00001 2.88886 9.00001C3.37952 9.00001 3.77773 9.44801 3.77773 10C3.77773 10.552 3.37952 11 2.88886 11C2.39821 11 2 10.552 2 10ZM2.88886 14C2.39821 14 2 14.448 2 15C2 15.552 2.39821 16 2.88886 16C3.37952 16 3.77773 15.552 3.77773 15C3.77773 14.448 3.37952 14 2.88886 14ZM6.38724 9.00001H17.1683C17.626 9.00001 18.0002 9.42101 18.0002 9.93601V10.064C18.0002 10.579 17.626 11 17.1683 11H6.38724C5.92948 11 5.55615 10.579 5.55615 10.064V9.93601C5.55615 9.42101 5.92948 9.00001 6.38724 9.00001ZM17.1683 14H6.38724C5.92948 14 5.55615 14.421 5.55615 14.936V15.064C5.55615 15.579 5.92948 16 6.38724 16H17.1683C17.626 16 18.0002 15.579 18.0002 15.064V14.936C18.0002 14.421 17.626 14 17.1683 14ZM6.38744 4H17.1685C17.6262 4 18.0005 4.421 18.0005 4.936V5.064C18.0005 5.579 17.6262 6 17.1685 6H6.38744C5.92968 6 5.55636 5.579 5.55636 5.064V4.936C5.55636 4.421 5.92968 4 6.38744 4Z" fill="currentColor"/>
    </svg>
  );
};

export default ListIcon;
