import React from 'react';

export interface MaximizeIconProps {
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
 * MaximizeIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const MaximizeIcon: React.FC<MaximizeIconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7776 8.44446H9.99986V7.66669C9.99986 7.23891 9.64985 6.88891 9.22208 6.88891C8.7943 6.88891 8.4443 7.23891 8.4443 7.66669V8.44446H7.66652C7.23874 8.44446 6.88874 8.79446 6.88874 9.22224C6.88874 9.65002 7.23874 10 7.66652 10H8.4443V10.7778C8.4443 11.2056 8.7943 11.5556 9.22208 11.5556C9.64985 11.5556 9.99986 11.2056 9.99986 10.7778V10H10.7776C11.2054 10 11.5554 9.65002 11.5554 9.22224C11.5554 8.79446 11.2054 8.44446 10.7776 8.44446ZM4.55541 9.22224C4.55541 6.64857 6.64841 4.55557 9.22208 4.55557C11.7957 4.55557 13.8887 6.64857 13.8887 9.22224C13.8887 11.7959 11.7957 13.8889 9.22208 13.8889C6.64841 13.8889 4.55541 11.7959 4.55541 9.22224ZM16.7721 15.6723L14.1316 13.031C14.9506 11.9779 15.4444 10.658 15.4444 9.22222C15.4444 5.79144 12.653 3 9.22222 3C5.79144 3 3 5.79144 3 9.22222C3 12.653 5.79144 15.4444 9.22222 15.4444C10.658 15.4444 11.9779 14.9506 13.031 14.1316L15.6723 16.7721C15.824 16.9238 16.0231 17 16.2222 17C16.4213 17 16.6204 16.9238 16.7721 16.7721C17.0762 16.468 17.0762 15.9764 16.7721 15.6723Z" fill="currentColor"/>
    </svg>
  );
};

export default MaximizeIcon;
