import React from 'react';

export interface LineIconsDropletOffIconProps {
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
 * LineIconsDropletOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsDropletOffIcon: React.FC<LineIconsDropletOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.49698 4.38895L12.5178 7.46812C13.5849 8.55465 13.9675 10.0752 13.6774 11.4775L14.9281 12.7289C15.7424 10.6033 15.3099 8.09266 13.6284 6.37925L10.0515 2.73309C9.9053 2.58453 9.70542 2.49976 9.49698 2.49976H9.4962C9.28698 2.49976 9.0871 2.58453 8.94088 2.73386L6.95761 4.75838L8.05735 5.85892L9.49698 4.38895ZM9.50159 14.9442H9.50003C8.36062 14.9442 7.28809 14.4916 6.48078 13.6687C5.01005 12.1707 4.83038 9.84599 5.9418 8.14191L4.82805 7.02815C3.12788 9.34744 3.30443 12.6537 5.37093 14.7584C6.47301 15.8814 7.93908 16.4998 9.50003 16.4998H9.50159C10.8082 16.499 12.0449 16.0611 13.0606 15.26L11.9476 14.1478C11.2344 14.6604 10.3906 14.9435 9.50159 14.9442ZM3.82761 2.72789L16.2717 15.1721C16.5758 15.4762 16.5758 15.9678 16.2717 16.2719C16.12 16.4235 15.9209 16.4998 15.7218 16.4998C15.5227 16.4998 15.3236 16.4235 15.172 16.2719L2.72786 3.82764C2.42376 3.52354 2.42376 3.03199 2.72786 2.72789C3.03197 2.42378 3.52351 2.42378 3.82761 2.72789Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsDropletOffIcon;
