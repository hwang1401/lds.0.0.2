import React from 'react';

export interface LightdarkIconProps {
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
 * LightdarkIcon 아이콘 컴포넌트
 * 
 * @param props - 아이콘 속성
 * @returns JSX 엘리먼트
 */
export const LightdarkIcon: React.FC<LightdarkIconProps> = ({
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
      <path d="M6.79684 3.35656C5.56114 4.13023 4.72584 5.49592 4.72584 7.0567C4.72584 8.61749 5.56114 9.98318 6.81755 10.7568C4.69823 10.7568 3 9.10187 3 7.0567C3 6.07536 3.40002 5.13422 4.11207 4.44031C4.82412 3.74639 5.78986 3.35656 6.79684 3.35656ZM14.784 4.36569L15.7712 5.32773L5.02268 15.8025L4.0355 14.8405L14.784 4.36569ZM10.5178 6.00048L9.49606 5.37482L8.50197 6.04757L8.79191 4.90389L7.83235 4.19077L9.04043 4.11004L9.44083 3L9.90335 4.09659L11.0976 4.11677L10.1657 4.87698L10.5178 6.00048ZM8.23965 8.42912L7.43886 7.93801L6.66568 8.46276L6.90039 7.57472L6.14793 7.01634L7.08678 6.95579L7.39744 6.08794L7.74951 6.94233L8.68836 6.96252L7.96351 7.54781L8.23965 8.42912ZM14.7357 11.0932C14.7357 12.0746 14.3357 13.0157 13.6236 13.7096C12.9116 14.4035 11.9458 14.7934 10.9389 14.7934C10.0966 14.7934 9.31657 14.5243 8.68836 14.0735L13.997 8.90005C14.4596 9.51225 14.7357 10.2725 14.7357 11.0932ZM11.6982 15.5199L13.6105 14.7463L13.4448 17L11.6982 15.5199ZM14.6874 13.7035L15.4813 11.84L17 13.5488L14.6874 13.7035ZM15.4813 10.3667L14.6943 8.4964L17 8.65786L15.4813 10.3667ZM8.26726 14.7463L10.1795 15.5199L8.43294 16.9933L8.26726 14.7463Z" fill="currentColor"/>
    </svg>
  );
};

export default LightdarkIcon;
