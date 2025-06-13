import React from 'react';

export interface LineIconsAttachAttach2IconProps {
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
 * LineIconsAttachAttach2Icon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LineIconsAttachAttach2Icon: React.FC<LineIconsAttachAttach2IconProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.89296 17C6.60464 17 5.38013 16.5092 4.44501 15.6184C2.58723 13.8478 2.51099 11.0404 4.27464 9.35965L10.0207 3.88492C10.6189 3.3146 11.4265 2.99997 12.2939 2.99997C13.222 2.99997 14.1042 3.35292 14.7772 3.99397C16.1161 5.26944 16.1674 7.2965 14.8908 8.51229L9.1377 13.9863C8.76505 14.3422 8.26327 14.5374 7.72491 14.5374C7.15622 14.5374 6.61709 14.3223 6.20788 13.9325C5.38868 13.1507 5.36301 11.9047 6.15109 11.1531L11.4607 6.10207C11.7641 5.81323 12.2558 5.81176 12.5607 6.09913C12.8649 6.3865 12.8665 6.85292 12.5631 7.14102L7.25425 12.1928C7.06753 12.3711 7.09321 12.6858 7.31181 12.8935C7.4254 13.0019 7.57632 13.0638 7.72491 13.0638C7.81049 13.0638 7.93341 13.0439 8.03454 12.9473L13.7876 7.47334C14.4621 6.83007 14.4115 5.73586 13.674 5.03292C12.9684 4.36092 11.7711 4.30786 11.1238 4.92386L5.37779 10.3986C4.21551 11.5061 4.29175 13.3821 5.54894 14.5794C6.18921 15.1903 7.02163 15.5263 7.89296 15.5263C8.6717 15.5263 9.39365 15.2478 9.92422 14.7423L15.6711 9.26755C15.9737 8.97944 16.4661 8.97723 16.7711 9.2646C17.0753 9.55197 17.0768 10.0177 16.7742 10.3065L11.0274 15.7812C10.2027 16.5667 9.08947 17 7.89296 17Z" fill="currentColor"/>
    </svg>
  );
};

export default LineIconsAttachAttach2Icon;
