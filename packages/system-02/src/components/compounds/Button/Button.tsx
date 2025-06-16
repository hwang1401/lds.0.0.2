import React, { forwardRef, useState } from 'react';
import { Frame, Surface, BackgroundToken, StrokeToken, ForegroundToken, Sizing, HeightValue, Text, Icon, IconName } from '@lumir/shared';

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
  leftIcon?: any;
  
  /**
   * 버튼의 오른쪽에 표시될 아이콘 이름을 지정합니다.
   */
  rightIcon?: any;
  
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

  // 크기별 아이콘 크기 결정 (System-02: 더 큰 아이콘 사용)
  const getIconSize = () => {
    switch (size) {
      case 'xs': return 'xs';  // 12px
      case 'sm': return 'sm';  // 16px (xs → sm)
      case 'md': return 'md';  // 20px (xs → md)  
      case 'lg': return 'lg';  // 24px (sm → lg)
      case 'xl': return 'xl';  // 28px (md → xl)
      default: return 'md';
    }
  };

  // 크기별 패딩 결정 (System-02: Modern & Friendly - 더 여유로운 패딩)
  const getPadding = () => {
    switch (size) {
      case 'xs': return 'sm';   // xs → sm (더 여유로운)
      case 'sm': return 'sm';   // xs → sm
      case 'md': return 'md';   // sm → md
      case 'lg': return 'lg';   // md → lg
      case 'xl': return 'xl';   // lg → xl
      default: return 'md';
    }
  };

  // 배경색 결정 (hover/active 상태 포함)
  const getBackgroundColor = (): BackgroundToken | undefined => {
    const currentState = getCurrentState();
    
    if (variant === 'filled') {
      if (colorScheme === 'primary') {
        if (currentState === 'disabled') return 'primary-system02-1-disabled';
        if (currentState === 'pressed') return 'primary-system02-1-pressed';
        if (currentState === 'hovered') return 'primary-system02-1-hovered';
        return 'primary-system02-1-rest';
      }
      if (colorScheme === 'secondary') {
        if (currentState === 'disabled') return 'secondary-system02-1-disabled';
        if (currentState === 'pressed') return 'secondary-system02-1-pressed';
        if (currentState === 'hovered') return 'secondary-system02-1-hovered';
        return 'secondary-system02-1-rest';
      }
      if (colorScheme === 'cta') {
        if (currentState === 'disabled') return 'cta-system02-1-disabled';
        if (currentState === 'pressed') return 'cta-system02-1-pressed';
        if (currentState === 'hovered') return 'cta-system02-1-hovered';
        return 'cta-system02-1-rest';
      }
    }
    
    if (variant === 'outlined') {
      // outlined는 연한 배경색 위계 사용 (background-3 = 더 subtle)
      if (currentState === 'rest' || currentState === 'disabled') return undefined;
      if (currentState === 'hovered') {
        if (colorScheme === 'primary') return 'secondary-system02-3-hovered'; // 연한 배경
        if (colorScheme === 'secondary') return 'secondary-system02-3-hovered';
        if (colorScheme === 'cta') return 'secondary-system02-3-hovered';
      }
      if (currentState === 'pressed') {
        if (colorScheme === 'primary') return 'secondary-system02-3-pressed'; // 연한 배경
        if (colorScheme === 'secondary') return 'secondary-system02-3-pressed';
        if (colorScheme === 'cta') return 'secondary-system02-3-pressed';
      }
      return undefined;
    }
    
    if (variant === 'transparent') {
      // transparent는 항상 배경색 없음 (텍스트 색상만 변경)
      return undefined;
    }
    
    return 'primary-system02-1-rest';
  };

  // 전경색 결정 (hover/active 상태 포함)
  const getForegroundColor = (): ForegroundToken | undefined => {
    const currentState = getCurrentState();
    
    if (variant === 'filled') {
      // filled는 onColor 사용 (배경색 위에 올라가는 텍스트)
      if (colorScheme === 'primary') {
        if (currentState === 'disabled') return 'secondary-system02-3-disabled'; // 대비되는 disabled 색상 사용
        return 'primary-system02-oncolor'; // onColor 사용
      }
      if (colorScheme === 'secondary') {
        if (currentState === 'disabled') return 'secondary-system02-3-disabled'; // 대비되는 disabled 색상 사용
        return 'secondary-system02-oncolor'; // onColor 사용
      }
      if (colorScheme === 'cta') {
        if (currentState === 'disabled') return 'secondary-system02-3-disabled'; // 대비되는 disabled 색상 사용
        return 'cta-system02-oncolor'; // onColor 사용
      }
    }
    
    if (variant === 'outlined' || variant === 'transparent') {
      // outlined/transparent는 일반 foreground 색상 사용
      if (currentState === 'disabled') {
        return 'secondary-system02-2-disabled';
      }
      
      // hover/pressed 상태에서는 더 진한 색상 사용
      if (currentState === 'hovered') {
        if (colorScheme === 'primary') return 'primary-system02-1-hovered'; // 연한 색상 위계
        if (colorScheme === 'secondary') return 'secondary-system02-1-hovered';
        if (colorScheme === 'cta') return 'cta-system02-1-hovered';
      }
      
      if (currentState === 'pressed') {
        if (colorScheme === 'primary') return 'primary-system02-1-pressed';
        if (colorScheme === 'secondary') return 'secondary-system02-1-pressed';
        if (colorScheme === 'cta') return 'cta-system02-1-pressed';
      }
      
      // rest 상태
      if (colorScheme === 'primary') return 'primary-system02-1-rest';
      if (colorScheme === 'secondary') return 'secondary-system02-1-rest';
      if (colorScheme === 'cta') return 'cta-system02-1-rest';
      
      return 'secondary-system02-2-disabled';
    }
    
    return 'primary-system02-1-rest';
  };

  // 텍스트 색상 결정 (Icon과 Text 컴포넌트용)
  const getTextColor = () => {
    return getForegroundColor();
  };

  // 테두리 속성 결정 (outlined 버튼용)
  const getBorderProps = (): { borderWidth?: 'thin', borderColor?: StrokeToken } => {
    if (variant !== 'outlined') return {};
    
    const currentState = getCurrentState();
    
    if (colorScheme === 'primary') {
      let borderColor: StrokeToken = 'secondary-system02-2-rest';
      
      if (currentState === 'disabled') borderColor = 'secondary-system02-3-disabled';
      else if (currentState === 'pressed') borderColor = 'primary-system02-1-pressed';
      else if (currentState === 'hovered') borderColor = 'primary-system02-1-hovered';
      else borderColor = 'primary-system02-1-rest';
      
      return { borderWidth: 'thin', borderColor };
    }
    
    if (colorScheme === 'secondary') {
      let borderColor: StrokeToken = 'secondary-system02-2-rest';
      
      if (currentState === 'disabled') borderColor = 'secondary-system02-2-disabled';
      else if (currentState === 'pressed') borderColor = 'secondary-system02-1-pressed';
      else if (currentState === 'hovered') borderColor = 'secondary-system02-1-hovered';
      else borderColor = 'secondary-system02-1-rest';
      
      return { borderWidth: 'thin', borderColor };
    }
    
    if (colorScheme === 'cta') {
      let borderColor: StrokeToken = 'secondary-system02-2-rest';
      
      if (currentState === 'disabled') borderColor = 'secondary-system02-3-disabled';
      else if (currentState === 'pressed') borderColor = 'cta-system02-1-pressed';
      else if (currentState === 'hovered') borderColor = 'cta-system02-1-hovered';
      else borderColor = 'cta-system02-1-rest';
      
      return { borderWidth: 'thin', borderColor };
    }
    
    return { borderWidth: 'thin', borderColor: 'secondary-system02-2-rest' };
  };

  // 아이콘 색상 결정 (IconColor 타입에 맞춰 수정)
  const getIconColor = () => {
    const currentState = getCurrentState();
    
    // disabled 상태
    if (currentState === 'disabled') {
      return 'disabled';
    }
    
    // Icon 컴포넌트의 올바른 color 타입 사용
    if (variant === 'filled') {
      if (colorScheme === 'primary') return 'oncolor';
      if (colorScheme === 'secondary') return 'secondary-system02-2';
      if (colorScheme === 'cta') return 'oncolor';
    }
    if (variant === 'outlined') {
      if (colorScheme === 'primary') return 'primary-system02';
      if (colorScheme === 'secondary') return 'secondary-system02-1';
      if (colorScheme === 'cta') return 'cta-system02';
    }
    if (variant === 'transparent') {
      if (colorScheme === 'primary') return 'primary-system02';
      if (colorScheme === 'secondary') return 'secondary-system02-1';
      if (colorScheme === 'cta') return 'cta-system02';
    }
    return 'secondary-system02-1';
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
      borderRadius="lg"  // System-02: md → lg (더 둥근 모서리)
      borderWidth={borderProps.borderWidth}
      borderColor={borderProps.borderColor}
      borderStyle={borderProps.borderWidth ? 'solid' : 'none'}
      boxShadow="interaction-button-rest"  // System-02: 부드러운 그림자 추가
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
          gap="md"  // System-02: sm → md (더 넓은 간격)
          fill
          padding={getPadding()}
        >
          {isLoading && (
            <Icon 
              name="LineIconsMenuMenuIcon"
              size={getIconSize()}
              color={getIconColor()}
              aria-hidden={true}
            />
          )}
          
          {leftIcon && !isLoading && (
            <Icon 
              name={leftIcon} 
              size={getIconSize()}
              color={getIconColor()}
              aria-hidden={true}
            />
          )}
          
          {(actualButtonType !== 'icon-only' && children) && (
            <Text
              as="span"
              variant={getTextVariant()}
              weight="regular"  // System-02: medium → regular (더 부드러운 느낌)
            >
              {children}
            </Text>
          )}
          
          {rightIcon && !isLoading && (
            <Icon 
              name={rightIcon} 
              size={getIconSize()}
              color={getIconColor()}
              aria-hidden={true}
            />
          )}
        </Frame>
      </Sizing>
    </Surface>
  );
});

Button.displayName = 'Button'; 