import React from 'react';

export interface PaperPlaneIconProps {
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
 * PaperPlaneIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const PaperPlaneIcon: React.FC<PaperPlaneIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1017 14.0862L10.8022 10.1887L14.7006 6.28979L12.1017 14.0862ZM13.7106 5.29984L9.81222 9.19803L5.91386 7.89863L13.7106 5.29984ZM16.9957 3.6616C16.9922 3.59649 16.9803 3.53348 16.9586 3.47257C16.9516 3.45087 16.9439 3.42986 16.9341 3.40886C16.9005 3.33395 16.8578 3.26324 16.7976 3.20303C16.7374 3.14282 16.6667 3.10012 16.591 3.06651C16.5707 3.05671 16.5504 3.04901 16.5287 3.04201C16.4664 3.0203 16.4027 3.0077 16.3362 3.0042C16.3208 3.0035 16.3068 3 16.2907 3C16.2207 3.0014 16.15 3.0112 16.0813 3.03361L3.47889 7.23423C3.19254 7.33015 3 7.59689 3 7.89863C3 8.20038 3.19254 8.46782 3.47889 8.56303L9.44755 10.5527L11.438 16.5218C11.5333 16.8075 11.8 17 12.1018 17C12.4035 17 12.6703 16.8075 12.7655 16.5218L16.9663 3.91994C16.9887 3.85063 16.9992 3.78062 16.9999 3.71061C17.0006 3.6938 16.9964 3.6784 16.9957 3.6616Z" fill="currentColor"/>
    </svg>
  );
};

export default PaperPlaneIcon;
