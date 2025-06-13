import React from 'react';

export interface CollapseIconProps {
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
 * CollapseIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CollapseIcon: React.FC<CollapseIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.8632 7.37421L16.125 7.37508C16.608 7.37508 16.9999 7.76707 16.9999 8.25093C16.9991 8.73392 16.6071 9.12503 16.125 9.12503H16.1241L11.7711 9.1224C11.2899 9.1224 10.8988 8.73304 10.8961 8.25181L10.8751 3.87957C10.8725 3.39658 11.2619 3.00284 11.7457 3.00022H11.7501C12.2313 3.00022 12.6225 3.38871 12.6251 3.87082L12.6356 6.1265L15.5055 3.25659C15.8476 2.91447 16.4015 2.91447 16.7436 3.25659C17.0848 3.5987 17.0848 4.15168 16.7436 4.4938L13.8632 7.37421ZM3.87906 10.8753L8.2513 10.8972C8.73253 10.8998 9.1219 11.2901 9.1219 11.7713L9.1254 16.1243C9.1254 16.6073 8.73341 17.0001 8.25042 17.0001C7.76656 17.0001 7.37545 16.6082 7.37545 16.126L7.3737 13.8642L4.49416 16.7438C4.32267 16.9144 4.09868 17.0001 3.87556 17.0001C3.65156 17.0001 3.42757 16.9144 3.25695 16.7438C2.91484 16.4017 2.91484 15.8478 3.25695 15.5066L6.12599 12.6367L3.87118 12.6253C3.38732 12.6227 2.99796 12.228 3.00058 11.7459C3.00233 11.2638 3.39432 10.8753 3.87556 10.8753H3.87906Z" fill="currentColor"/>
    </svg>
  );
};

export default CollapseIcon;
