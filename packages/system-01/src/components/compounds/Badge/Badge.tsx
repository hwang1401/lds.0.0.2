import React from 'react';
import { Surface, BackgroundToken, ForegroundToken, StrokeToken, RadiusToken, BorderWidthToken, Frame, Text, Icon, IconName } from '@lumir/shared';

type SpacingValue = 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
type RadiusValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

type TextColor = 
  | 'primary-foreground-1' | 'primary-foreground-2'
  | 'secondary-foreground-1' | 'secondary-foreground-2' | 'secondary-foreground-3' | 'secondary-foreground-inverse'
  | 'cta-foreground-1' | 'cta-foreground-2'
  | 'status-error' | 'status-warning' | 'status-success' | 'status-info' | 'status-focused'
  | 'disabled' | 'onColor' | 'transparent';

export type BadgeColor = 'primary' | 'secondary' | 'cta' | 'error' | 'warning';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeLayout = 'text+icon' | 'only text' | 'only icon';
export type BadgeStyle = 'filled' | 'outlined' | 'transparent';
export type BadgeType = 'round-square' | 'circle';

export interface BadgeProps {
  /** 뱃지 색상 */
  color: BadgeColor;
  /** 뱃지 크기 */
  size?: BadgeSize;
  /** 뱃지 레이아웃 */
  layout?: BadgeLayout;
  /** 뱃지 스타일 */
  style?: BadgeStyle;
  /** 뱃지 형태 */
  type?: BadgeType;
  /** 텍스트 내용 (layout이 'only icon'이 아닌 경우 필수) */
  text?: string;
  /** 아이콘 이름 (layout이 'only text'가 아닌 경우 필수) */
  iconName?: IconName;
  /** 아이콘 타입 */
  iconType?: 'line' | 'flat';
  /** 커스텀 클래스명 */
  className?: string;
  /** 뱃지 비활성 상태 */
  disabled?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  color,
  size = 'md',
  layout = 'only text',
  style = 'filled',
  type = 'round-square',
  text,
  iconName,
  iconType = 'line',
  className,
  disabled,
}) => {
  // 크기별 텍스트 variant 매핑
  const getTextVariant = (size: BadgeSize) => {
    switch (size) {
      case 'lg':
        return 'label-1' as const;  // label-1 medium
      case 'md':
        return 'label-2' as const;  // label-2 medium
      case 'sm':
        return 'caption-2' as const;  // caption-2 medium
    }
  };

  // 크기별 아이콘-텍스트 간격 매핑 (Frame gap)
  const getContentGap = (size: BadgeSize) => {
    switch (size) {
      case 'lg': return 'xxs'; // 4px (Figma gap 값)
      case 'md': return 'xxs'; // 4px (Figma gap 값)  
      case 'sm': return 'xxs'; // 4px (Figma gap 값)
    }
  };

  // 스타일별 배경색 결정
  const getBackgroundColor = (): BackgroundToken | undefined => {
    if (style === 'filled') {
      switch (color) {
        case 'primary': return 'primary-system01-1-rest';
        case 'secondary': return 'secondary-system01-2-rest';
        case 'cta': return 'cta-system01-1-rest';
        case 'error': return 'error-1-rest';
        case 'warning': return 'warning-1-rest';
        default: return 'primary-system01-1-rest';
      }
    }
    return undefined; // outlined, transparent 스타일은 배경 투명
  };

  // 스타일별 테두리 색상 결정
  const getBorderColor = (): StrokeToken | undefined => {
    if (style === 'outlined') {
      switch (color) {
        case 'primary': return 'primary-system01-1-rest';
        case 'secondary': return 'secondary-system01-1-rest';
        case 'cta': return 'cta-system01-1-rest';
        case 'error': return 'error-1-rest';
        case 'warning': return 'warning-1-rest';
        default: return 'primary-system01-1-rest';
      }
    }
    return undefined; // filled, transparent 스타일은 테두리 없음
  };

  // 스타일별 전경색 결정 (텍스트와 아이콘 모두 적용)
  const getForegroundColor = (): ForegroundToken | undefined => {
    // disabled 상태 처리
    if (disabled) return 'secondary-system01-1-disabled';
    
    if (style === 'filled') {
      switch (color) {
        case 'primary': 
        case 'cta':
          // primary, cta filled일 때는 oncolor 사용
          return 'primary-system01-oncolor';
        case 'error': 
          return 'error-oncolor'; // error 배경에 oncolor 적용
        case 'warning': 
          return 'warning-oncolor'; // warning 배경에 oncolor 적용
        case 'secondary': return 'secondary-system01-2-rest';
        default: return 'primary-system01-oncolor';
      }
    } else {
      // outlined, transparent 스타일
      switch (color) {
        case 'primary': return 'primary-system01-1-rest';
        case 'secondary': return 'secondary-system01-1-rest';
        case 'cta': return 'cta-system01-1-rest';
        case 'error': return 'error-1-rest';
        case 'warning': return 'warning-1-rest';
        default: return 'secondary-system01-1-rest';
      }
    }
  };

  // 형태별 border radius 매핑 (System-01: 직각에 가까운 모서리)
  const getBorderRadius = (type: BadgeType): RadiusToken => {
    return type === 'circle' ? 'circular' : 'sm'; // System-01 가이드라인: sm 사용
  };

  // 크기별 아이콘 크기 매핑
  const getIconSize = (size: BadgeSize) => {
    switch (size) {
      case 'lg': return 'sm' as const;  // 16px
      case 'md': return 'sm' as const;  // 16px
      case 'sm': return 'xs' as const;  // 12px
    }
  };

  // ForegroundToken을 Icon color string으로 변환
  const getIconColor = (foregroundToken?: ForegroundToken) => {
    switch (foregroundToken) {
      case 'primary-system01-oncolor':
        return 'oncolor';
      case 'secondary-system01-oncolor':
        return 'oncolor';
      case 'error-oncolor':
        return 'oncolor';
      case 'warning-oncolor':
        return 'oncolor';
      case 'primary-system01-1-rest':
        return 'primary-system01';
      case 'secondary-system01-1-rest':
        return 'secondary-system01-1';
      case 'secondary-system01-2-rest':
        return 'secondary-system01-2';
      case 'secondary-system01-1-disabled':
        return 'disabled';
      case 'cta-system01-1-rest':
        return 'cta-system01';
      case 'error-1-rest':
        return 'status-error';
      case 'warning-1-rest':
        return 'status-warning';
      case 'error':
        return 'status-error';
      case 'warning':
        return 'status-warning';
      default:
        return 'secondary-system01-1';
    }
  };

  const backgroundColor = getBackgroundColor();
  const borderColor = getBorderColor();
  const foregroundColor = getForegroundColor();
  const iconColor = getIconColor(foregroundColor);
  const textVariant = getTextVariant(size);
  const iconSize = getIconSize(size);
  const contentGap = getContentGap(size);
  const borderRadius = getBorderRadius(type);

  return (
    <Surface
      background={backgroundColor}
      foreground={foregroundColor}
      borderColor={borderColor}
      borderWidth={borderColor ? 'thin' : undefined}
      borderStyle={borderColor ? 'solid' : 'none'}
      borderRadius={borderRadius}
      className={className}
      style={{ width: 'fit-content', height: 'fit-content' }}
    >
      <Frame
        display="flex"
        direction="row"
        align="center"
        justify="center"
        gap={contentGap}
        padding="xxs"
      >
        {/* 아이콘 (왼쪽) */}
        {(layout === 'text+icon' || layout === 'only icon') && iconName && (
          <Icon
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
        )}

        {/* 텍스트 */}
        {(layout === 'text+icon' || layout === 'only text') && text && (
          <Text
            variant={textVariant}
            weight="medium"
          >
            {text}
          </Text>
        )}
      </Frame>
    </Surface>
  );
}; 