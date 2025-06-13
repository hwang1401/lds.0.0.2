import React from 'react';

export interface EmailIconProps {
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
 * EmailIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const EmailIcon: React.FC<EmailIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5998 15.25H4.39979C3.95899 15.25 3.59979 14.858 3.59979 14.375V5.84375L9.51979 10.7C9.66219 10.8173 9.83099 10.875 9.99979 10.875C10.1686 10.875 10.3374 10.8173 10.4798 10.7L16.3998 5.84375V14.375C16.3998 14.858 16.0406 15.25 15.5998 15.25ZM15.0666 4.75L10.0002 8.90625L4.93378 4.75H15.0666ZM15.6 3H4.4C3.0768 3 2 4.17775 2 5.625V14.375C2 15.8223 3.0768 17 4.4 17H15.6C16.9232 17 18 15.8223 18 14.375V5.625C18 4.17775 16.9232 3 15.6 3Z" fill="currentColor"/>
    </svg>
  );
};

export default EmailIcon;
