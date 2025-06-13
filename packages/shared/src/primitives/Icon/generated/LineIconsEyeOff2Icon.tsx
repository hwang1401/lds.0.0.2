import React from 'react';

export interface LineIconsEyeOff2IconProps {
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
 * LineIconsEyeOff2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsEyeOff2Icon: React.FC<LineIconsEyeOff2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.1636 10.1078C16.6792 9.0582 17.7325 7.5583 17.9929 5.83324C18.0543 5.42809 17.7094 5.05774 17.2214 5.00663C16.7414 4.95182 16.2898 5.24291 16.2294 5.64881C15.8391 8.23529 13.1609 10.1855 10 10.1855C6.83909 10.1855 4.16085 8.23529 3.77063 5.64881C3.71018 5.24291 3.25685 4.95479 2.77773 5.00663C2.29062 5.05774 1.94573 5.42809 2.00706 5.83324C2.26751 7.5583 3.32085 9.0582 4.83641 10.1078L2.78129 11.8202C2.43551 12.1084 2.43551 12.5794 2.78129 12.8676C3.12618 13.1557 3.69241 13.1557 4.03819 12.8676L6.35198 10.9395C7.19998 11.2966 8.13066 11.5321 9.11111 11.6217V14.2593C9.11111 14.6667 9.51111 15 10 15C10.4889 15 10.8889 14.6667 10.8889 14.2593V11.6217C11.8685 11.5321 12.8 11.2966 13.6471 10.9395L15.9618 12.8676C16.3076 13.1557 16.8729 13.1557 17.2187 12.8676C17.5645 12.5794 17.5645 12.1084 17.2187 11.8202L15.1636 10.1078Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsEyeOff2Icon;
