import React from 'react';

export interface CodeIconProps {
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
 * CodeIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CodeIcon: React.FC<CodeIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13.9607 4.32023L17.8229 9.4627C18.0621 9.78067 18.0581 10.2349 17.8141 10.5495L13.8143 15.6919C13.6559 15.8951 13.4287 15.9996 13.1991 15.9996C13.0183 15.9996 12.8375 15.9345 12.6871 15.8016C12.3479 15.4982 12.3023 14.9574 12.5847 14.5932L16.1662 9.99066L12.7135 5.39501C12.4375 5.02561 12.4911 4.4865 12.8359 4.18996C13.1799 3.89169 13.6831 3.95169 13.9607 4.32023ZM6.18527 4.30866C6.46766 3.94526 6.97084 3.8964 7.31242 4.19895C7.65161 4.50236 7.69721 5.04232 7.41482 5.40657L3.83336 10.0091L7.28602 14.6056C7.56201 14.9741 7.50841 15.5132 7.16363 15.8106C7.01643 15.9375 6.83884 16.0001 6.66285 16.0001C6.42926 16.0001 6.19727 15.8903 6.03887 15.6804L2.17662 10.5379C1.93743 10.2191 1.94143 9.76481 2.18542 9.45112L6.18527 4.30866Z" fill="currentColor"/>
    </svg>
  );
};

export default CodeIcon;
