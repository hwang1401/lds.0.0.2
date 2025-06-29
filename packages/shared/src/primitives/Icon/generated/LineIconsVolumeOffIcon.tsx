import React from 'react';

export interface LineIconsVolumeOffIconProps {
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
 * LineIconsVolumeOffIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsVolumeOffIcon: React.FC<LineIconsVolumeOffIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9301 8.96691V5.25473L8.82259 6.76434L7.75171 5.64594L11.2538 3.13615C11.4808 2.97283 11.7763 2.95494 12.0211 3.09027C12.2652 3.22482 12.4185 3.48925 12.4185 3.77857V10.5224L10.9301 8.96691ZM4.38661 3.2285C4.09563 2.9244 3.62531 2.9244 3.33433 3.2285C3.04335 3.5326 3.04335 4.02414 3.33433 4.32823L15.2413 16.7722C15.3864 16.9238 15.5769 17 15.7674 17C15.958 17 16.1485 16.9238 16.2936 16.7722C16.5846 16.4681 16.5846 15.9765 16.2936 15.6724L4.38661 3.2285ZM13.4681 11.6195L14.5383 12.7387C15.6977 11.1536 15.6843 8.73562 14.4869 7.17935C14.2287 6.84492 13.7606 6.79281 13.4399 7.06113C13.1199 7.33024 13.0693 7.81944 13.3268 8.15465C14.0434 9.08483 14.0843 10.6053 13.4681 11.6195ZM15.1886 13.4177C16.043 12.4276 16.5118 11.2439 16.5118 10.0003C16.5118 8.47276 15.8145 7.02926 14.5486 5.93342C14.2324 5.65888 14.1877 5.16812 14.4504 4.83758C14.7124 4.50703 15.1812 4.46115 15.4982 4.73414C17.1116 6.13097 18.0002 8.00222 18.0002 10.0003C18.0002 11.6623 17.3773 13.2318 16.2417 14.5182L15.1886 13.4177ZM10.93 14.7457L7.13396 12.0252C7.00968 11.9373 6.86307 11.8891 6.71275 11.8891H3.48819V8.11157H5.90158L4.41321 6.55608H2.744C2.33321 6.55608 1.99982 6.90373 1.99982 7.33382V12.6668C1.99982 13.0969 2.33321 13.4446 2.744 13.4446H6.48205L11.2538 16.8643C11.3795 16.9545 11.5269 16.9996 11.6742 16.9996C11.7933 16.9996 11.9124 16.9701 12.021 16.9102C12.2651 16.7757 12.4184 16.5112 12.4184 16.2219V14.9223L10.93 13.3668V14.7457Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsVolumeOffIcon;
