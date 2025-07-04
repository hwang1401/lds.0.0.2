import React from 'react';

export interface HeightIconProps {
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
 * HeightIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const HeightIcon: React.FC<HeightIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M2.80016 3.00002H8.4001C8.84009 3.00002 9.20009 3.39377 9.20009 3.87502C9.20009 4.35627 8.84009 4.75002 8.4001 4.75002H2.80016C2.36016 4.75002 2.00017 4.35627 2.00017 3.87502C2.00017 3.39377 2.36016 3.00002 2.80016 3.00002ZM5.20006 9.125H8.40003C8.84002 9.125 9.20002 9.51875 9.20002 10C9.20002 10.4812 8.84002 10.875 8.40003 10.875H5.20006C4.76007 10.875 4.40007 10.4812 4.40007 10C4.40007 9.51875 4.76007 9.125 5.20006 9.125ZM8.40014 15.25H6.80016C6.36016 15.25 6.00017 15.6438 6.00017 16.125C6.00017 16.6063 6.36016 17 6.80016 17H8.40014C8.84014 17 9.20013 16.6063 9.20013 16.125C9.20013 15.6438 8.84014 15.25 8.40014 15.25ZM15.6002 14.0633L16.6442 12.9608C16.9626 12.6257 17.469 12.6353 17.7754 12.9827C18.0826 13.331 18.0738 13.8848 17.7562 14.22L15.3562 16.7548C15.2002 16.9176 15.0002 16.9998 14.8002 16.9998C14.5954 16.9998 14.3906 16.915 14.2346 16.7435L11.8347 14.1185C11.5219 13.7772 11.5219 13.2233 11.8347 12.8812C12.1467 12.54 12.653 12.54 12.9658 12.8812L14.0002 14.0126V5.93721L12.9562 7.03884C12.6386 7.37484 12.1323 7.36434 11.8251 7.01696C11.5179 6.66959 11.5267 6.11571 11.8443 5.77971L14.2442 3.24484C14.5594 2.91584 15.0578 2.91759 15.3658 3.25621L17.7658 5.88121C18.0778 6.22334 18.0778 6.77721 17.7658 7.11846C17.6098 7.28996 17.405 7.37484 17.2002 7.37484C16.9954 7.37484 16.7906 7.28996 16.6346 7.11846L15.6002 5.98709V14.0633Z" fill="currentColor"/>
    </svg>
  );
};

export default HeightIcon;
