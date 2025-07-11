import React from 'react';

export interface LineIconsGlobeGlobe2IconProps {
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
 * LineIconsGlobeGlobe2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsGlobeGlobe2Icon: React.FC<LineIconsGlobeGlobe2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.422 14.4227C13.3016 14.1196 13.1308 13.855 12.981 13.6289C12.9054 13.5155 12.8277 13.4 12.7598 13.281C12.4875 12.8078 12.5813 12.6161 13.023 11.8762L13.0944 11.7551C13.4521 11.1524 13.4717 10.5743 13.4899 10.0647C13.4983 9.81409 13.5067 9.5782 13.555 9.35631C13.6677 8.84393 14.7505 8.70744 15.4218 8.62694C15.5345 9.06722 15.5996 9.5257 15.5996 10.0003C15.5996 11.7985 14.7442 13.3972 13.422 14.4227ZM5.07357 12.6595C5.51875 12.7729 6.00103 12.8513 6.49171 12.8513C7.24767 12.8513 8.01974 12.6665 8.68751 12.1436C9.88865 11.2042 9.88865 10.0031 9.88865 9.03714C9.88865 8.41277 9.88865 7.8745 10.149 7.39642C10.289 7.14023 10.5872 6.96244 10.9323 6.75595C11.1437 6.62926 11.3628 6.49906 11.5728 6.33387C12.0229 5.98179 12.3574 5.52891 12.5646 5.02773C13.5446 5.53521 14.3565 6.32127 14.8927 7.28373C13.8932 7.42232 12.4743 7.7499 12.188 9.05674C12.1124 9.40253 12.1005 9.72801 12.0914 10.0157C12.0767 10.4238 12.0655 10.7465 11.8906 11.0419L11.8206 11.1594C11.3677 11.9175 10.8553 12.7771 11.5462 13.9789C11.6295 14.1245 11.7226 14.2645 11.8143 14.4038C12.055 14.765 12.1733 14.9645 12.174 15.1605C11.5056 15.4432 10.7706 15.6 9.99995 15.6C7.87414 15.6 6.02203 14.4087 5.07357 12.6595ZM9.99987 4.40058C10.431 4.40058 10.8475 4.45378 11.2507 4.54617C11.1324 4.80656 10.9497 5.04385 10.7089 5.23214C10.5563 5.35254 10.3849 5.45263 10.2148 5.55413C9.75908 5.82571 9.2432 6.1337 8.91982 6.72587C8.48864 7.51683 8.48864 8.3246 8.48864 9.03716C8.48864 9.98562 8.45784 10.5463 7.82507 11.0412C6.86681 11.7922 5.40038 11.373 4.49322 10.9915C4.43583 10.6688 4.40013 10.3384 4.40013 10.0003C4.40013 6.91276 6.91231 4.40058 9.99987 4.40058ZM9.99984 3.00065C6.14022 3.00065 3.00017 6.1407 3.00017 10.0003C3.00017 13.8592 6.14022 17 9.99984 17C13.8595 17 16.9995 13.8592 16.9995 10.0003C16.9995 6.1407 13.8595 3.00065 9.99984 3.00065Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsGlobeGlobe2Icon;
