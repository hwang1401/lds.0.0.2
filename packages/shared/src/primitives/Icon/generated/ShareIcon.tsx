import React from 'react';

export interface ShareIconProps {
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
 * ShareIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const ShareIcon: React.FC<ShareIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4735 15.4444C15.0086 15.4444 14.6313 15.096 14.6313 14.6666C14.6313 14.2373 15.0086 13.8889 15.4735 13.8889C15.9383 13.8889 16.3156 14.2373 16.3156 14.6666C16.3156 15.096 15.9383 15.4444 15.4735 15.4444ZM4.5257 10.7778C4.06086 10.7778 3.68359 10.4293 3.68359 9.99998C3.68359 9.57064 4.06086 9.2222 4.5257 9.2222C4.99054 9.2222 5.3678 9.57064 5.3678 9.99998C5.3678 10.4293 4.99054 10.7778 4.5257 10.7778ZM15.4735 4.55557C15.9383 4.55557 16.3156 4.90401 16.3156 5.33335C16.3156 5.76268 15.9383 6.11112 15.4735 6.11112C15.0086 6.11112 14.6313 5.76268 14.6313 5.33335C14.6313 4.90401 15.0086 4.55557 15.4735 4.55557ZM15.4737 12.3333C14.7857 12.3333 14.1625 12.59 13.7061 13.003L7.024 10.2606C7.03495 10.1742 7.05263 10.0887 7.05263 10C7.05263 9.91133 7.03495 9.82578 7.024 9.73944L13.7061 6.997C14.1625 7.41 14.7857 7.66667 15.4737 7.66667C16.8665 7.66667 18 6.61978 18 5.33333C18 4.04689 16.8665 3 15.4737 3C14.0808 3 12.9474 4.04689 12.9474 5.33333C12.9474 5.422 12.9651 5.50756 12.976 5.59389L6.29389 8.33633C5.83747 7.92333 5.21432 7.66667 4.52632 7.66667C3.13347 7.66667 2 8.71356 2 10C2 11.2864 3.13347 12.3333 4.52632 12.3333C5.21432 12.3333 5.83747 12.0767 6.29389 11.6637L12.976 14.4061C12.9651 14.4924 12.9474 14.578 12.9474 14.6667C12.9474 15.9531 14.0808 17 15.4737 17C16.8665 17 18 15.9531 18 14.6667C18 13.3802 16.8665 12.3333 15.4737 12.3333Z" fill="currentColor"/>
    </svg>
  );
};

export default ShareIcon;
