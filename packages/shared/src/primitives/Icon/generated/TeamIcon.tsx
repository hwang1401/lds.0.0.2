import React from 'react';

export interface TeamIconProps {
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
 * TeamIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const TeamIcon: React.FC<TeamIconProps> = ({
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
      <path d="M5.00002 7.5C5.88408 7.5 6.73191 7.85118 7.35703 8.47633C7.98215 9.10142 8.33335 9.94925 8.33335 10.8333V15C8.33335 15.221 8.24555 15.433 8.08928 15.5892C7.933 15.7455 7.72104 15.8333 7.50002 15.8333H2.50002C2.279 15.8333 2.06705 15.7455 1.91076 15.5892C1.75449 15.433 1.66669 15.221 1.66669 15V10.8333C1.66669 9.94925 2.01787 9.10142 2.643 8.47633C3.26812 7.85118 4.11596 7.5 5.00002 7.5Z" fill="#C7CED5"/>
<path d="M5.00002 6.66667C6.15061 6.66667 7.08335 5.73392 7.08335 4.58333C7.08335 3.43274 6.15061 2.5 5.00002 2.5C3.84943 2.5 2.91669 3.43274 2.91669 4.58333C2.91669 5.73392 3.84943 6.66667 5.00002 6.66667Z" fill="#C7CED5"/>
<path d="M17.5 15.8333H12.5C12.279 15.8333 12.067 15.7455 11.9108 15.5892C11.7544 15.433 11.6667 15.221 11.6667 15V10.8333C11.6667 9.94925 12.0179 9.10142 12.643 8.47633C13.2681 7.85118 14.1159 7.5 15 7.5C15.8841 7.5 16.7319 7.85118 17.357 8.47633C17.9822 9.10142 18.3334 9.94925 18.3334 10.8333V15C18.3334 15.221 18.2455 15.433 18.0893 15.5892C17.933 15.7455 17.721 15.8333 17.5 15.8333Z" fill="#C7CED5"/>
<path d="M15 6.66667C16.1506 6.66667 17.0834 5.73392 17.0834 4.58333C17.0834 3.43274 16.1506 2.5 15 2.5C13.8494 2.5 12.9167 3.43274 12.9167 4.58333C12.9167 5.73392 13.8494 6.66667 15 6.66667Z" fill="#C7CED5"/>
<path d="M9.26673 10H10.7251C11.6091 10 12.457 10.3512 13.0821 10.9763C13.7072 11.6014 14.0584 12.4492 14.0584 13.3333V17.5C14.0584 17.721 13.9706 17.933 13.8143 18.0892C13.6581 18.2455 13.4461 18.3333 13.2251 18.3333H6.76674C6.54573 18.3333 6.33377 18.2455 6.17749 18.0892C6.0212 17.933 5.93341 17.721 5.93341 17.5V13.3333C5.93341 12.4492 6.28459 11.6014 6.90972 10.9763C7.53484 10.3512 8.38273 10 9.26673 10Z" fill="#6B758F"/>
<path d="M10 9.16667C11.1506 9.16667 12.0834 8.23392 12.0834 7.08333C12.0834 5.93274 11.1506 5 10 5C8.84944 5 7.91669 5.93274 7.91669 7.08333C7.91669 8.23392 8.84944 9.16667 10 9.16667Z" fill="#6B758F"/>
    </svg>
  );
};

export default TeamIcon;
