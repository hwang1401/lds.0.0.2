import React from 'react';

export interface LineIconsEyeEyeIconProps {
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
 * LineIconsEyeEyeIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsEyeEyeIcon: React.FC<LineIconsEyeEyeIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0004 11.0719C9.33882 11.0719 8.80042 10.5912 8.80042 10.0005C8.80042 9.40981 9.33882 8.92912 10.0004 8.92912C10.662 8.92912 11.2004 9.40981 11.2004 10.0005C11.2004 10.5912 10.662 11.0719 10.0004 11.0719ZM9.99986 7.50062C8.45584 7.50062 7.19983 8.622 7.19983 10.0005C7.19983 11.379 8.45584 12.5004 9.99986 12.5004C11.5439 12.5004 12.7999 11.379 12.7999 10.0005C12.7999 8.622 11.5439 7.50062 9.99986 7.50062ZM10.1761 13.5701C6.73124 13.6415 4.48401 11.0109 3.7384 9.99735C4.55921 8.85098 6.62644 6.50393 9.82488 6.43108C13.2561 6.35322 15.5162 8.99026 16.2618 10.0038C15.4417 11.1502 13.3737 13.4972 10.1761 13.5701ZM17.8945 9.64523C17.3841 8.85098 14.5649 4.86972 9.78402 5.00328C5.36156 5.10328 2.78953 8.5817 2.10632 9.64523C1.96472 9.86522 1.96472 10.1359 2.10632 10.3559C2.60953 11.1395 5.32956 15 10.02 15C10.0856 15 10.1512 14.9993 10.2168 14.9979C14.6385 14.8971 17.2113 11.4194 17.8945 10.3559C18.0353 10.1359 18.0353 9.86522 17.8945 9.64523Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsEyeEyeIcon;
