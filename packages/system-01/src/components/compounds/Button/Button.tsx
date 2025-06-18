import React, { forwardRef, useState } from 'react';
import { Frame, Surface, BackgroundToken, StrokeToken, ForegroundToken, Sizing, HeightValue, Text, Icon, IconName } from 'lumir-design-system-shared';

export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * 버튼의 스타일 변형을 지정합니다.
   */
  variant?: 'filled' | 'outlined' | 'transparent';
  
  /**
   * 버튼의 종류를 지정합니다.
   */
  buttonType?: 'text-icon' | 'text-only' | 'icon-only';
  
  /**
   * 버튼의 색상 테마를 지정합니다.
   */
  colorScheme?: 'primary' | 'secondary' | 'cta';
  
  /**
   * 버튼의 크기를 지정합니다.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * 버튼의 전체 너비 여부를 지정합니다.
   */
  isFullWidth?: boolean;
  
  /**
   * 버튼의 로딩 상태를 지정합니다.
   */
  isLoading?: boolean;
  
  /**
   * 버튼의 선택 상태를 지정합니다.
   */
  isSelected?: boolean;
  
  /**
   * 버튼의 왼쪽에 표시될 아이콘 이름을 지정합니다.
   */
  leftIcon?: IconName;
  
  /**
   * 버튼의 오른쪽에 표시될 아이콘 이름을 지정합니다.
   */
  rightIcon?: IconName;
  
  /**
   * 비활성화 상태를 지정합니다.
   */
  disabled?: boolean;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /**
   * 버튼의 내용물을 지정합니다.
   */
  children?: React.ReactNode;
}

/**
 * Button 컴포넌트는 사용자 상호작용을 위한 기본적인 요소입니다.
 * Lumir Design System의 스타일링을 따르며, 시맨틱 토큰을 사용하여 일관된 디자인을 제공합니다.
 */
export const Button = forwardRef<HTMLDivElement, ButtonProps>(({
  variant = 'filled',
  buttonType = 'text-only',
  colorScheme = 'primary',
  size = 'md',
  isFullWidth = false,
  isLoading = false,
  isSelected = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}, ref) => {
  // 마우스 상태 관리 추가
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // 마우스 이벤트 핸들러들
  const handleMouseEnter = () => {
    if (!disabled && !isLoading) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    if (!disabled && !isLoading) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const resolveButtonType = () => {
    if (buttonType === 'icon-only' && (leftIcon || rightIcon)) {
      return 'icon-only';
    } 
    
    if (buttonType === 'text-icon' && (leftIcon || rightIcon)) {
      return 'text-icon';
    }
    
    return 'text-only';
  };

  const actualButtonType = resolveButtonType();

  // 크기별 높이 토큰 결정 (Sizing 컴포넌트용)
  const getSizingHeight = (): HeightValue => {
    switch (size) {
      case 'xs': return 'sm';   // 24px
      case 'sm': return 'md';   // 28px  
      case 'md': return 'lg';   // 32px
      case 'lg': return 'xl';   // 36px
      case 'xl': return 'xxl';  // 40px
      default: return 'lg';
    }
  };

  // 크기별 텍스트 variant 결정 (텍스트: xl(16), lg(16), md(14), sm(14), xs(12))
  const getTextVariant = () => {
    switch (size) {
      case 'xs': return 'label-2';  // 12px
      case 'sm': return 'body-2';   // 14px
      case 'md': return 'body-2';   // 14px
      case 'lg': return 'body-1';   // 16px
      case 'xl': return 'body-1';   // 16px
      default: return 'body-2';
    }
  };

  // 크기별 아이콘 크기 결정 (아이콘: xl(24), lg(20), md(16), sm(16), xs(12))
  const getIconSize = () => {
    switch (size) {
      case 'xs': return 'xs';  // 16px (12px 토큰이 없어서 최소값 사용)
      case 'sm': return 'xs';  // 16px
      case 'md': return 'xs';  // 16px  
      case 'lg': return 'sm';  // 20px
      case 'xl': return 'md';  // 24px
      default: return 'xs';
    }
  };

  // 크기별 패딩 결정 (System-01: 타이트하지만 기능성 유지)
  const getPadding = () => {
    switch (size) {
      case 'xs': return 'xs';
      case 'sm': return 'xs';
      case 'md': return 'sm';
      case 'lg': return 'sm'; // System-01: 타이트한 느낌으로 조정
      case 'xl': return 'md'; // System-01: 타이트한 느낌으로 조정
      default: return 'sm';
    }
  };

  // 배경색 결정 (hover/active 상태 포함)
  const getBackgroundColor = (): BackgroundToken | undefined => {
    const currentState = getCurrentState();
    
    if (variant === 'filled') {
      if (colorScheme === 'primary') {
        if (currentState === 'disabled') return 'primary-system01-1-disabled';
        if (currentState === 'pressed') return 'primary-system01-1-pressed';
        if (currentState === 'hovered') return 'primary-system01-1-hovered';
        return 'primary-system01-1-rest';
      }
      if (colorScheme === 'secondary') {
        if (currentState === 'disabled') return 'secondary-system01-2-disabled';
        if (currentState === 'pressed') return 'secondary-system01-2-pressed';
        if (currentState === 'hovered') return 'secondary-system01-2-hovered';
        return 'secondary-system01-2-rest';
      }
      if (colorScheme === 'cta') {
        if (currentState === 'disabled') return 'cta-system01-1-disabled';
        if (currentState === 'pressed') return 'cta-system01-1-pressed';
        if (currentState === 'hovered') return 'cta-system01-1-hovered';
        return 'cta-system01-1-rest';
      }
    }
    
    if (variant === 'outlined') {
      // outlined는 연한 배경색 위계 사용 (background-3 = 더 subtle)
      if (currentState === 'rest' || currentState === 'disabled') return undefined;
      if (currentState === 'hovered') {
        if (colorScheme === 'primary') return 'secondary-system01-3-hovered'; // 연한 배경
        if (colorScheme === 'secondary') return 'secondary-system01-3-hovered';
        if (colorScheme === 'cta') return 'secondary-system01-3-hovered';
      }
      if (currentState === 'pressed') {
        if (colorScheme === 'primary') return 'secondary-system01-3-pressed'; // 연한 배경
        if (colorScheme === 'secondary') return 'secondary-system01-3-pressed';
        if (colorScheme === 'cta') return 'secondary-system01-3-pressed';
      }
      return undefined;
    }
    
    if (variant === 'transparent') {
      // transparent는 항상 배경색 없음 (텍스트 색상만 변경)
      return undefined;
    }
    
    return 'primary-system01-1-rest';
  };

  // 전경색 결정 (Surface에서 사용)
  const getForegroundColor = (): ForegroundToken | undefined => {
    const currentState = getCurrentState();
    
    if (variant === 'filled') {
      if (colorScheme === 'primary') {
        if (currentState === 'disabled') return 'secondary-system01-3-disabled'; // 대비되는 disabled 색상 사용
        // filled에서는 모든 상태에서 oncolor 사용 (배경색이 진하므로)
        return 'primary-system01-oncolor'; // onColor 사용
      }
      if (colorScheme === 'secondary') {
        if (currentState === 'disabled') return 'secondary-system01-1-disabled'; // 대비되는 색상 사용
        // filled에서는 모든 상태에서 oncolor 사용 (배경색이 진하므로)
        return 'secondary-system01-2-rest'; // onColor 사용
      }
      if (colorScheme === 'cta') {
        if (currentState === 'disabled') return 'secondary-system01-3-disabled'; // 대비되는 disabled 색상 사용
        // filled에서는 모든 상태에서 oncolor 사용 (배경색이 진하므로)
        return 'cta-system01-oncolor'; // onColor 사용
      }
    }
    
    if (variant === 'outlined') {
      if (currentState === 'disabled') {
        return 'secondary-system01-2-disabled';
      }
      
      // outlined hover/pressed 시에는 onColor가 아닌 더 연한 색상 사용
      if (currentState === 'hovered' || currentState === 'pressed') {
        if (colorScheme === 'primary') return 'primary-system01-1-hovered'; // 연한 색상 위계
        if (colorScheme === 'secondary') return 'secondary-system01-1-hovered';
        if (colorScheme === 'cta') return 'cta-system01-1-hovered';
      }
      
      // rest 상태에서는 일반 foreground 사용
      if (colorScheme === 'primary') return 'primary-system01-1-rest';
      if (colorScheme === 'secondary') return 'secondary-system01-2-rest';
      if (colorScheme === 'cta') return 'cta-system01-1-rest';
    }
    
    if (variant === 'transparent') {
      if (currentState === 'disabled') {
        return 'secondary-system01-2-disabled';
      }
      
      // transparent는 더 강한 색상 변화로 시각적 피드백 제공
      if (currentState === 'hovered') {
        if (colorScheme === 'primary') return 'primary-system01-1-hovered';
        if (colorScheme === 'secondary') return 'secondary-system01-2-hovered';
        if (colorScheme === 'cta') return 'cta-system01-1-hovered';
      }
      if (currentState === 'pressed') {
        if (colorScheme === 'primary') return 'primary-system01-1-pressed';
        if (colorScheme === 'secondary') return 'secondary-system01-2-pressed';
        if (colorScheme === 'cta') return 'cta-system01-1-pressed';
      }
      
      // rest 상태
      if (colorScheme === 'primary') return 'primary-system01-1-rest';
      if (colorScheme === 'secondary') return 'secondary-system01-2-rest';
      if (colorScheme === 'cta') return 'cta-system01-1-rest';
    }
    
    return 'primary-system01-1-rest';
  };



  // 테두리 설정 (outlined 가시성 개선)
  const getBorderProps = (): { borderWidth?: 'thin', borderColor?: StrokeToken } => {
    const currentState = getCurrentState();
    
    if (variant === 'outlined') {
      let borderColor: StrokeToken = 'secondary-system01-2-rest';
      
      if (colorScheme === 'primary') {
        if (currentState === 'disabled') borderColor = 'secondary-system01-3-disabled';
        else if (currentState === 'pressed') borderColor = 'primary-system01-1-pressed';
        else if (currentState === 'hovered') borderColor = 'primary-system01-1-hovered';
        else borderColor = 'primary-system01-1-rest';
      } else if (colorScheme === 'secondary') {
        if (currentState === 'disabled') borderColor = 'secondary-system01-2-disabled';
        else if (currentState === 'pressed') borderColor = 'secondary-system01-1-pressed';
        else if (currentState === 'hovered') borderColor = 'secondary-system01-1-hovered';
        else borderColor = 'secondary-system01-1-rest';
      } else if (colorScheme === 'cta') {
        if (currentState === 'disabled') borderColor = 'secondary-system01-3-disabled';
        else if (currentState === 'pressed') borderColor = 'cta-system01-1-pressed';
        else if (currentState === 'hovered') borderColor = 'cta-system01-1-hovered';
        else borderColor = 'cta-system01-1-rest';
      }
      
      return {
        borderWidth: 'thin',
        borderColor
      };
    }
    return {};
  };

  // 현재 상태 결정
  const getCurrentState = (): 'rest' | 'hovered' | 'pressed' | 'disabled' => {
    if (disabled || isLoading) return 'disabled';
    if (isPressed) return 'pressed';
    if (isHovered) return 'hovered';
    return 'rest';
  };

  // onClick과 style을 제외한 나머지 props
  const { onClick, style: customStyle, color, ...otherProps } = rest;

  const borderProps = getBorderProps();

  return (
    <Surface
      ref={ref}
      background={getBackgroundColor()}
      foreground={getForegroundColor()}
      borderRadius="sm"
      borderWidth={borderProps.borderWidth}
      borderColor={borderProps.borderColor}
      borderStyle={borderProps.borderWidth ? 'solid' : 'none'}
      className={className}
      onClick={disabled || isLoading ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        ...customStyle
      }}
      {...otherProps}
    >
      <Sizing
        height={getSizingHeight()}
        width={isFullWidth ? '100%' : 'fit-content'}
      >
        <Frame
          display="flex"
          direction="row"
          align="center"
          justify="center"
          gap="xs"
          fill
          padding={getPadding()}
        >
          {isLoading && (
            <Icon
              name="LineIconsMenuMenuIcon"
              size={getIconSize()}
              aria-hidden={true}
            />
          )}
          
          {leftIcon && !isLoading && (
            <Icon
              name={leftIcon}
              size={getIconSize()}
              aria-hidden={true}
            />
          )}
          
          {(actualButtonType !== 'icon-only' && children) && (
            <Text
              as="span"
              variant={getTextVariant()}
              weight="medium"
            >
              {children}
            </Text>
          )}
          
          {rightIcon && !isLoading && (
            <Icon
              name={rightIcon}
              size={getIconSize()}
              aria-hidden={true}
            />
          )}
        </Frame>
      </Sizing>
    </Surface>
  );
});

Button.displayName = 'Button'; 