import React from 'react';

export interface LineIconsTrendingUpIconProps {
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
 * LineIconsTrendingUpIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsTrendingUpIcon: React.FC<LineIconsTrendingUpIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17.9929 5.80241C17.9911 5.74241 17.9724 5.68574 17.9556 5.62824C17.9422 5.57991 17.936 5.53074 17.9138 5.48658C17.8933 5.44324 17.8587 5.40824 17.8284 5.36824C17.7911 5.31741 17.7573 5.26658 17.7093 5.22491C17.7013 5.21741 17.6978 5.20741 17.6889 5.20074C17.6569 5.17491 17.6178 5.16574 17.5831 5.14491C17.5298 5.11241 17.4773 5.07908 17.4169 5.05741C17.3574 5.03741 17.2987 5.03241 17.2374 5.02408C17.1947 5.01824 17.1565 4.99991 17.1111 4.99991H12.6668C12.1753 4.99991 11.7779 5.37324 11.7779 5.83324C11.7779 6.29324 12.1753 6.66658 12.6668 6.66658H15.1787L11.5913 10.5899L7.7905 8.45241C7.41451 8.23908 6.93097 8.31741 6.65009 8.63324L2.20577 13.6332C1.892 13.9866 1.94266 14.5124 2.31954 14.8066C2.48665 14.9366 2.68753 14.9999 2.88842 14.9999C3.14352 14.9999 3.39596 14.8982 3.57195 14.6999L7.52918 10.2482L11.3202 12.3816C11.6926 12.5907 12.1708 12.5174 12.4526 12.2091L16.2223 8.08574V9.99991C16.2223 10.4599 16.6196 10.8332 17.1111 10.8332C17.6027 10.8332 18 10.4599 18 9.99991V5.83324C18 5.82241 17.9938 5.81324 17.9929 5.80241Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsTrendingUpIcon;
