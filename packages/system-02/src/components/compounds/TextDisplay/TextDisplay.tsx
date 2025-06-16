import React, { forwardRef } from 'react';
import { Frame, Surface, Text, Icon, IconName } from '@lumir/shared';

type Size = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
type Style = 'left' | 'center';
type IconPosition = 'none' | 'before' | 'after' | 'above';

export interface TextDisplayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /**
   * 텍스트 디스플레이의 크기를 설정합니다.
   * @default 'md'
   */
  size?: Size;
  
  /**
   * 텍스트 정렬 스타일을 설정합니다.
   * @default 'left'
   */
  style?: Style;
  
  /**
   * 아이콘의 위치를 설정합니다.
   * @default 'none'
   */
  iconPosition?: IconPosition;
  
  /**
   * 사용할 아이콘 이름을 설정합니다.
   */
  iconName?: IconName;
  
  /**
   * 아이콘 타입을 설정합니다.
   */
  iconType?: 'line' | 'flat';
  
  /**
   * 라벨 텍스트 표시 여부를 설정합니다.
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * 라벨 텍스트 내용을 설정합니다.
   */
  labelText?: string;
  
  /**
   * 메인 텍스트 내용을 설정합니다.
   */
  primaryText?: string;
  
  /**
   * 설명 텍스트 표시 여부를 설정합니다.
   * @default false
   */
  showDescription?: boolean;
  
  /**
   * 설명 텍스트 내용을 설정합니다.
   */
  descriptionText?: string;
  
  /**
   * 캡션 텍스트 표시 여부를 설정합니다.
   * @default false
   */
  showCaption?: boolean;
  
  /**
   * 캡션 텍스트 내용을 설정합니다.
   */
  captionText?: string;
}

/**
 * TextDisplay 컴포넌트는 다양한 텍스트 요소들을 조합하여 표시하는 컴파운드 컴포넌트입니다.
 * 라벨, 메인 텍스트, 설명, 캡션을 선택적으로 표시할 수 있으며, 아이콘도 함께 표시할 수 있습니다.
 * 
 * @example
 * ```tsx
 * // 기본 사용법
 * <TextDisplay 
 *   primaryText="Hello World" 
 * />
 * 
 * // 모든 요소 포함
 * <TextDisplay
 *   size="lg"
 *   style="center"
 *   iconPosition="above"
 *   iconName="star-filled"
 *   iconType="flat"
 *   showLabel={true}
 *   labelText="Status"
 *   primaryText="Success"
 *   showDescription={true}
 *   descriptionText="Your operation completed successfully"
 *   showCaption={true}
 *   captionText="Last updated: 2024-01-01"
 * />
 * 
 * // 좌측 정렬 + 앞쪽 아이콘
 * <TextDisplay
 *   style="left"
 *   iconPosition="before"
 *   iconName="info"
 *   primaryText="Information"
 *   showDescription={true}
 *   descriptionText="Additional details here"
 * />
 * ```
 */
export const TextDisplay = forwardRef<HTMLDivElement, TextDisplayProps>(({
  size = 'md',
  style = 'left',
  iconPosition = 'none',
  iconName = 'LineIconsStarFilledIcon',
  iconType = 'line',
  showLabel = false,
  labelText = 'label',
  primaryText,
  showDescription = false,
  descriptionText = 'description text',
  showCaption = false,
  captionText = 'caption',
  className,
  ...rest
}, ref) => {
  
  // 크기별 텍스트 variant 매핑 (피그마 실제 크기 기준 - 수정됨)
  const getTextVariants = (size: Size) => {
    switch (size) {
      case 'xlg':
        return {
          label: 'body-2' as const,         // 14px (피그마는 15px이지만 가장 근접한 토큰)
          primary: 'title-1' as const,      // 30px (피그마 28px에 가장 가까움)
          description: 'heading-3' as const, // 16px (피그마는 18px이지만 가장 근접한 토큰)
          caption: 'body-2' as const,       // 14px (피그마는 15px이지만 가장 근접한 토큰)
        };
      case 'lg':
        return {
          label: 'label-1' as const,        // 14px (정확히 일치)
          primary: 'title-2' as const,      // 24px (피그마는 22px이지만 가장 근접한 토큰)
          description: 'body-1' as const,   // 16px (정확히 일치)
          caption: 'label-1' as const,      // 14px (정확히 일치)
        };
      case 'md':
        return {
          label: 'label-2' as const,        // 12px (피그마는 13px이지만 가장 근접한 토큰)
          primary: 'heading-3' as const,    // 16px (피그마는 18px이지만 가장 근접한 토큰)
          description: 'label-1' as const,  // 14px (정확히 일치)
          caption: 'label-2' as const,      // 12px (피그마는 13px이지만 가장 근접한 토큰)
        };
      case 'sm':
        return {
          label: 'caption-1' as const,      // 12px (정확히 일치)
          primary: 'body-1' as const,       // 16px (정확히 일치)
          description: 'label-1' as const,  // 14px (정확히 일치)
          caption: 'caption-1' as const,    // 12px (정확히 일치)
        };
      case 'xsm':
        return {
          label: 'caption-1' as const,      // 12px (정확히 일치)
          primary: 'label-1' as const,      // 14px (정확히 일치)
          description: 'caption-1' as const, // 12px (정확히 일치)
          caption: 'caption-3' as const,    // 11px (정확히 일치)
        };
    }
  };

  // 크기별 font weight 매핑 (피그마 기준)
  const getTextWeights = (size: Size) => {
    switch (size) {
      case 'xlg':
        return {
          label: 'regular' as const,     // 400
          primary: 'bold' as const,      // 700
          description: 'regular' as const, // 400
          caption: 'regular' as const,   // 400
        };
      case 'lg':
        return {
          label: 'regular' as const,     // 400
          primary: 'bold' as const,      // 700
          description: 'regular' as const, // 400
          caption: 'regular' as const,   // 400
        };
      case 'md':
        return {
          label: 'regular' as const,     // 400
          primary: 'bold' as const,      // 700
          description: 'regular' as const, // 400
          caption: 'regular' as const,   // 400
        };
      case 'sm':
        return {
          label: 'regular' as const,     // 400
          primary: 'bold' as const,      // 700
          description: 'regular' as const, // 400
          caption: 'regular' as const,   // 400
        };
      case 'xsm':
        return {
          label: 'regular' as const,     // 400
          primary: 'bold' as const,      // 700
          description: 'regular' as const, // 400
          caption: 'regular' as const,   // 400
        };
    }
  };

  // 크기별 아이콘 크기 매핑
  const getIconSize = (size: Size) => {
    switch (size) {
      case 'xlg': return 'lg' as const;
      case 'lg': return 'md' as const;
      case 'md': return 'sm' as const;
      case 'sm': return 'xs' as const;
      case 'xsm': return 'xs' as const;
    }
  };

  // Surface foreground 색상 결정
  const getForegroundColors = () => {
    return {
      label: 'secondary-system02-2-rest' as const,
      primary: 'secondary-system02-1-rest' as const,
      description: 'secondary-system02-2-rest' as const,
      caption: 'secondary-system02-3-rest' as const,
    };
  };

  const textVariants = getTextVariants(size);
  const textWeights = getTextWeights(size);
  const iconSize = getIconSize(size);
  const foregroundColors = getForegroundColors();

  // 아이콘 렌더링
  const renderIcon = () => {
    if (iconPosition === 'none' || !iconName) return null;
    
    return (
      <Icon 
        name={iconName} 
        size={iconSize}
      />
    );
  };

  // 텍스트 콘텐츠 렌더링
  const renderTextContent = () => {
    const alignItems = style === 'center' ? 'center' : 'flex-start';
    const textAlign = style === 'center' ? 'center' : 'left';
    
    return (
      <Frame 
        display="flex"
        direction="column" 
        gap="xxxs"
        align={alignItems}
      >
        {/* Label */}
        {showLabel && labelText && (
          <Surface foreground={foregroundColors.label}>
            <Text 
              variant={textVariants.label} 
              weight={textWeights.label}
              textAlign={textAlign}
            >
              {labelText}
            </Text>
          </Surface>
        )}
        
        {/* Primary Text */}
        {primaryText && (
          <Surface foreground={foregroundColors.primary}>
            <Text 
              variant={textVariants.primary} 
              weight={textWeights.primary}
              textAlign={textAlign}
            >
              {primaryText}
            </Text>
          </Surface>
        )}
        
        {/* Description */}
        {showDescription && descriptionText && (
          <Surface foreground={foregroundColors.description}>
            <Text 
              variant={textVariants.description} 
              weight={textWeights.description}
              textAlign={textAlign}
            >
              {descriptionText}
            </Text>
          </Surface>
        )}
        
        {/* Caption */}
        {showCaption && captionText && (
          <Surface foreground={foregroundColors.caption}>
            <Text 
              variant={textVariants.caption} 
              weight={textWeights.caption}
              textAlign={textAlign}
            >
              {captionText}
            </Text>
          </Surface>
        )}
      </Frame>
    );
  };

  // 레이아웃 구성
  if (iconPosition === 'above') {
    // 아이콘이 위에 있는 경우 (세로 레이아웃)
    return (
      <div ref={ref} className={className} {...rest}>
        <Frame 
          display="flex"
          direction="column" 
          gap="sm"
          align="center"
        >
          {renderIcon()}
          {renderTextContent()}
        </Frame>
      </div>
    );
  } else if (iconPosition === 'before' || iconPosition === 'after') {
    // 아이콘이 앞뒤에 있는 경우 (가로 레이아웃)
    return (
      <div ref={ref} className={className} {...rest}>
        <Frame 
          display="flex"
          direction="row" 
          gap="sm"
          align="center"
        >
          {iconPosition === 'before' && renderIcon()}
          {renderTextContent()}
          {iconPosition === 'after' && renderIcon()}
        </Frame>
      </div>
    );
  } else {
    // 아이콘이 없는 경우
    return (
      <div ref={ref} className={className} {...rest}>
        {renderTextContent()}
      </div>
    );
  }
});

TextDisplay.displayName = 'TextDisplay'; 