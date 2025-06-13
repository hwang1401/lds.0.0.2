import React from 'react';

export interface LineIconsLinkLink2IconProps {
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
 * LineIconsLinkLink2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsLinkLink2Icon: React.FC<LineIconsLinkLink2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.66912 4.32981C11.1965 2.79891 13.6612 2.52241 15.3636 3.85381C17.4027 5.44841 17.5364 8.4199 15.7647 10.1958L14.7686 11.1933C14.4935 11.4691 14.0483 11.4691 13.7732 11.1933C13.4981 10.9182 13.4981 10.4709 13.7732 10.1958L14.7686 9.1976C15.9271 8.0377 15.8641 6.10921 14.5782 5.03261C13.4393 4.07851 11.7299 4.26051 10.6806 5.31191L9.78952 6.20441C9.51512 6.4802 9.06852 6.4802 8.79412 6.20441C8.51902 5.92931 8.51622 5.48481 8.91802 5.08231L9.66912 4.32981ZM10.9053 8.10512L8.10533 10.9051C7.83163 11.1788 7.83163 11.6212 8.10533 11.8949C8.24183 12.0314 8.42103 12.1 8.60023 12.1C8.77943 12.1 8.95863 12.0314 9.09513 11.8949L11.8951 9.09492C12.1688 8.82122 12.1688 8.37882 11.8951 8.10512C11.6214 7.83142 11.179 7.83142 10.9053 8.10512ZM10.1963 13.7776L9.30448 14.6673C8.25378 15.7152 6.54088 15.8958 5.40129 14.9459C4.11399 13.8735 4.05029 11.9513 5.21019 10.7942L6.20769 9.80016C6.48278 9.52576 6.48278 9.08056 6.20769 8.80546C5.93259 8.53176 5.48599 8.53176 5.21019 8.80546L4.31769 9.69656C2.79729 11.2128 2.53059 13.6516 3.84519 15.3484C5.43489 17.4014 8.41688 17.54 10.1963 15.7663L11.1938 14.7723C11.4689 14.4972 11.4689 14.0527 11.1938 13.7776C10.918 13.5025 10.4721 13.5025 10.1963 13.7776Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsLinkLink2Icon;
