import React from 'react';

export interface SaveIconProps {
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
 * SaveIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const SaveIcon: React.FC<SaveIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4441 15.3333C15.4441 15.8231 15.0956 16.2222 14.6663 16.2222H13.1107V13.5555C13.1107 13.0649 12.7631 12.6666 12.333 12.6666H7.66629C7.23618 12.6666 6.88851 13.0649 6.88851 13.5555V16.2222H5.33295C4.90362 16.2222 4.55518 15.8231 4.55518 15.3333V4.66664C4.55518 4.17686 4.90362 3.77775 5.33295 3.77775H6.88851V8.2222C6.88851 8.71286 7.23618 9.11109 7.66629 9.11109H10.7774C11.2075 9.11109 11.5552 8.71286 11.5552 8.2222C11.5552 7.73153 11.2075 7.33331 10.7774 7.33331H8.44406V3.77775H10.9112C11.1157 3.77775 11.3156 3.87286 11.4611 4.0382L15.2162 8.32975C15.3632 8.49775 15.4441 8.72175 15.4441 8.95909V15.3333ZM8.44482 16.2222H11.5559V14.4444H8.44482V16.2222ZM16.3163 7.07289L12.5612 2.78133C12.121 2.27733 11.5346 2 10.9116 2H5.33333C4.04689 2 3 3.19644 3 4.66667V15.3333C3 16.8036 4.04689 18 5.33333 18H7.66667H12.3333H14.6667C15.9531 18 17 16.8036 17 15.3333V8.95911C17 8.24622 16.7566 7.576 16.3163 7.07289Z" fill="currentColor"/>
    </svg>
  );
};

export default SaveIcon;
