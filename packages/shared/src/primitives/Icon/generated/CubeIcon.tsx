import React from 'react';

export interface CubeIconProps {
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
 * CubeIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CubeIcon: React.FC<CubeIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2031 13.0815L10.7776 15.1376V9.91504L15.4442 7.74779V12.7518C15.4442 12.8871 15.3525 13.0131 15.2031 13.0815ZM4.79063 13.0823C4.64363 13.0139 4.55341 12.8879 4.55497 12.7464V7.74779L9.22161 9.91504V15.1391L4.79063 13.0823ZM9.77197 4.60619C9.84275 4.57276 9.9213 4.55643 9.99986 4.55643C10.0776 4.55643 10.1562 4.57276 10.227 4.60619L14.3717 6.53004L9.99986 8.5612L5.62721 6.53004L9.77197 4.60619ZM16.7322 6.31309C16.7299 6.30687 16.7307 6.29987 16.7276 6.29365C16.7252 6.28743 16.719 6.28354 16.7151 6.27732C16.6793 6.21822 16.6358 6.16612 16.5946 6.11169C16.5704 6.08525 16.551 6.0557 16.5246 6.03315C16.3418 5.81852 16.1263 5.62956 15.8588 5.50592L10.881 3.19403C10.8802 3.19403 10.8795 3.19403 10.8795 3.19326C10.3202 2.93508 9.67858 2.93586 9.11781 3.19403L4.14239 5.50514C3.87483 5.62878 3.65861 5.81697 3.47583 6.03159C3.44706 6.0557 3.42606 6.08836 3.40039 6.11713C3.35994 6.16923 3.31872 6.21978 3.2845 6.27577C3.28061 6.28277 3.27439 6.28743 3.27128 6.29365C3.26817 6.30065 3.26895 6.30765 3.26583 6.31465C3.10172 6.59615 2.99984 6.91264 2.99984 7.24547V12.741C2.99361 13.4797 3.4385 14.1671 4.13383 14.4922L9.11081 16.8033C9.39236 16.9347 9.69414 17 9.99669 17C10.2985 17 10.6002 16.9347 10.881 16.8041L15.8564 14.4929C16.5502 14.1726 16.999 13.4898 16.9998 12.7526V7.24469C16.999 6.91187 16.8971 6.59537 16.7322 6.31309Z" fill="currentColor"/>
    </svg>
  );
};

export default CubeIcon;
