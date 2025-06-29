import React from 'react';

export interface LineIconsPhoneCallIconProps {
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
 * LineIconsPhoneCallIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsPhoneCallIcon: React.FC<LineIconsPhoneCallIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5991 13.7798C15.5991 13.7021 15.5942 13.6251 15.5844 13.5502L12.3498 12.8075C12.2861 12.9307 12.2161 13.0651 12.1503 13.189C11.8318 13.798 11.6036 14.2404 11.0114 14.0031C8.69724 13.1911 6.80799 11.3018 5.98551 8.95898C5.73561 8.41019 6.2116 8.161 6.81499 7.8453C6.93748 7.78161 7.06978 7.71231 7.19088 7.64861L6.44889 4.41468C6.3712 4.40418 6.2956 4.39998 6.2193 4.39998C5.21622 4.39998 4.39934 5.21617 4.39934 6.21924C4.39934 11.3914 8.60694 15.5997 13.7791 15.5997C14.7829 15.5997 15.5991 14.7835 15.5991 13.7798ZM16.9544 13.2464C16.9838 13.42 16.9992 13.5985 16.9992 13.7797C16.9992 15.5549 15.5551 16.9997 13.7793 16.9997C7.8357 16.9997 2.99951 12.1635 2.99951 6.21923C2.99951 4.44407 4.44358 3 6.21944 3C6.40143 3 6.58133 3.0154 6.75562 3.0455C6.92572 3.0728 7.09722 3.1162 7.26311 3.1736C7.49131 3.25269 7.6621 3.44309 7.716 3.67828L8.67428 7.85299C8.72748 8.08258 8.66098 8.32408 8.49718 8.49417C8.40199 8.59427 8.39989 8.59637 7.53191 9.04996C8.23469 10.5724 9.45616 11.789 10.9471 12.4687C11.4028 11.6 11.4049 11.5972 11.5043 11.5013C11.6751 11.3382 11.9152 11.2731 12.1455 11.3242L16.3202 12.2825C16.5554 12.3364 16.7465 12.5079 16.8249 12.7354C16.8823 12.8999 16.9264 13.0714 16.9544 13.2464ZM10.7 4.39997C13.4012 4.39997 15.5998 6.59792 15.5998 9.29985C15.5998 9.68624 15.9127 9.99984 16.2998 9.99984C16.6869 9.99984 16.9998 9.68624 16.9998 9.29985C16.9998 5.82583 14.174 3 10.7 3C10.3136 3 9.99997 3.31289 9.99997 3.69998C9.99997 4.08637 10.3136 4.39997 10.7 4.39997ZM9.99997 6.5001C9.99997 6.11301 10.3136 5.80011 10.7 5.80011C12.6298 5.80011 14.1999 7.37018 14.1999 9.30003C14.1999 9.68642 13.887 10 13.4999 10C13.1128 10 12.7999 9.68642 12.7999 9.30003C12.7999 8.14156 11.8577 7.20008 10.7 7.20008C10.3136 7.20008 9.99997 6.88649 9.99997 6.5001Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsPhoneCallIcon;
