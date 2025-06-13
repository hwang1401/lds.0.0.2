import React from 'react';

export interface CameraIconProps {
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
 * CameraIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const CameraIcon: React.FC<CameraIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0002 12.7222C9.33856 12.7222 8.80016 12.1988 8.80016 11.5556C8.80016 10.9123 9.33856 10.3889 10.0002 10.3889C10.6618 10.3889 11.2002 10.9123 11.2002 11.5556C11.2002 12.1988 10.6618 12.7222 10.0002 12.7222ZM9.99973 8.83331C8.45573 8.83331 7.19973 10.0544 7.19973 11.5555C7.19973 13.0566 8.45573 14.2778 9.99973 14.2778C11.5437 14.2778 12.7997 13.0566 12.7997 11.5555C12.7997 10.0544 11.5437 8.83331 9.99973 8.83331ZM16.4 14.6667C16.4 15.0952 16.0416 15.4445 15.6 15.4445H4.39995C3.95835 15.4445 3.59995 15.0952 3.59995 14.6667V8.44446C3.59995 8.01591 3.95835 7.66669 4.39995 7.66669H15.6C16.0416 7.66669 16.4 8.01591 16.4 8.44446V14.6667ZM8.39981 4.94446C8.39981 4.72979 8.57981 4.55557 8.79981 4.55557H11.1998C11.4198 4.55557 11.5998 4.72979 11.5998 4.94446V6.11113H8.39981V4.94446ZM15.6 6.11111H13.2V4.94444C13.2 3.87267 12.3032 3 11.2 3H8.8C7.6968 3 6.8 3.87267 6.8 4.94444V6.11111H4.4C3.0768 6.11111 2 7.158 2 8.44444V14.6667C2 15.9531 3.0768 17 4.4 17H15.6C16.9232 17 18 15.9531 18 14.6667V8.44444C18 7.158 16.9232 6.11111 15.6 6.11111Z" fill="currentColor"/>
    </svg>
  );
};

export default CameraIcon;
