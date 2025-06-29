import React from 'react';

export interface MoveIconProps {
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
 * MoveIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const MoveIcon: React.FC<MoveIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7965 9.51524L14.6964 7.40604C14.4234 7.13232 13.9795 7.13022 13.7065 7.40394C13.4321 7.67695 13.4307 8.11937 13.7037 8.39378L14.6061 9.29963H10.6999V5.38574L11.6036 6.29368C11.7401 6.43089 11.92 6.49949 12.0999 6.49949C12.2785 6.49949 12.4577 6.43159 12.5942 6.29578C12.8679 6.02277 12.8693 5.57965 12.5963 5.30594L10.5053 3.20584C10.373 3.07353 10.2204 3.00563 10.0089 2.99933C9.82344 2.99933 9.64563 3.07283 9.51472 3.20374L7.40553 5.30384C7.13181 5.57685 7.13041 6.01997 7.40343 6.29368C7.67574 6.5674 8.11886 6.5688 8.39397 6.29578L9.29981 5.39344V9.29963H5.38523L6.29317 8.39588C6.56759 8.12287 6.56899 7.67975 6.29597 7.40604C6.02296 7.13232 5.57914 7.13022 5.30613 7.40394L3.20603 9.49494C3.07372 9.62584 3.00022 9.80365 2.99952 9.98916C2.99882 10.1747 3.07302 10.3532 3.20323 10.4848L5.30333 12.594C5.43983 12.7312 5.61974 12.7998 5.79965 12.7998C5.97816 12.7998 6.15737 12.7319 6.29317 12.5961C6.56759 12.3231 6.56899 11.8799 6.29597 11.6062L5.39363 10.6997H9.29981V14.6143L8.39607 13.7063C8.12306 13.4319 7.67994 13.4305 7.40553 13.7042C7.13181 13.9772 7.13041 14.4204 7.40343 14.6941L9.49442 16.7942C9.62603 16.9258 9.80384 17 9.98935 17H9.99075C10.1763 17 10.3541 16.9265 10.485 16.7963L12.5942 14.6962C12.8679 14.4232 12.8693 13.98 12.5963 13.7063C12.3233 13.4319 11.8801 13.4305 11.6057 13.7042L10.6999 14.6059V10.6997H14.6145L13.7065 11.6041C13.4321 11.8771 13.4307 12.3196 13.7037 12.594C13.8402 12.7312 14.0201 12.7998 14.2 12.7998C14.3786 12.7998 14.5578 12.7319 14.6936 12.5961L16.7937 10.5051C16.926 10.3742 16.9995 10.1964 17.0002 10.0109C17.0009 9.82465 16.9274 9.64684 16.7965 9.51524Z" fill="currentColor"/>
    </svg>
  );
};

export default MoveIcon;
