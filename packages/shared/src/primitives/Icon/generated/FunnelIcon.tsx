import React from 'react';

export interface FunnelIconProps {
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
 * FunnelIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const FunnelIcon: React.FC<FunnelIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.01757 13.9618L10.7903 15.3244V11.2773C10.7903 11.1298 10.8271 10.9849 10.8953 10.8551L14.6578 3.77777H5.31284L8.91957 10.8693C8.98432 10.9955 9.01757 11.136 9.01757 11.2773V13.9618ZM11.6653 18C11.4789 18 11.2925 17.9396 11.1377 17.8196L7.61493 15.1129C7.39618 14.9449 7.26755 14.6827 7.26755 14.4044V11.4942L3.0982 3.29689C2.95733 3.02133 2.9687 2.69156 3.12795 2.42667C3.28632 2.16178 3.56982 2 3.8752 2H16.1251C16.4331 2 16.7184 2.16444 16.8768 2.43378C17.0343 2.70222 17.0413 3.03556 16.8951 3.31111L12.5403 11.5022V17.1111C12.5403 17.448 12.353 17.7564 12.0555 17.9067C11.9322 17.9689 11.7983 18 11.6653 18Z" fill="currentColor"/>
    </svg>
  );
};

export default FunnelIcon;
