import React from 'react';

export interface Profile01IconProps {
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
 * Profile01Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const Profile01Icon: React.FC<Profile01IconProps> = ({
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
      <path d="M8.33335 8.33334H11.6667C12.7718 8.33334 13.8316 8.77234 14.6129 9.55368C15.3944 10.3351 15.8334 11.3949 15.8334 12.5V17.5C15.8334 17.942 15.6578 18.3659 15.3452 18.6785C15.0326 18.9911 14.6087 19.1667 14.1667 19.1667H5.83335C5.39133 19.1667 4.9674 18.9911 4.65485 18.6785C4.34228 18.3659 4.16669 17.942 4.16669 17.5V12.5C4.16669 11.3949 4.60567 10.3351 5.38708 9.55368C6.16848 8.77234 7.22829 8.33334 8.33335 8.33334Z" fill="#6B758F"/>
<path d="M10 7.50001C11.8409 7.50001 13.3334 6.00763 13.3334 4.16668C13.3334 2.32573 11.8409 0.833344 10 0.833344C8.15907 0.833344 6.66669 2.32573 6.66669 4.16668C6.66669 6.00763 8.15907 7.50001 10 7.50001Z" fill="#6B758F"/>
    </svg>
  );
};

export default Profile01Icon;
