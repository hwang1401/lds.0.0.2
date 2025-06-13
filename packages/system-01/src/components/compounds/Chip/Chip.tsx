import React, { forwardRef, useState } from 'react';
import { Surface, Frame, Sizing, Text, type TextProps, Icon, type IconColor } from 'lumir-shared';

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'color'> {
  /**
   * 칩에 표시할 텍스트
   */
  children: React.ReactNode;
  
  /**
   * 칩의 변형
   */
  variant?: 'filled' | 'outlined';
  
  /**
   * 칩의 크기
   */
  size?: 'sm' | 'md';
  
  /**
   * 칩의 상태
   */
  state?: 'default' | 'hovered' | 'pressed' | 'disabled';
  
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  
  /**
   * 삭제 가능 여부
   */
  removable?: boolean;
  
  /**
   * 선택 가능 여부
   */
  selectable?: boolean;
  
  /**
   * 선택 상태
   */
  selected?: boolean;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  
  /**
   * 삭제 버튼 클릭 핸들러
   */
  onRemove?: () => void;
}

/**
 * Chip 컴포넌트는 선택된 항목이나 태그를 표시하는 컴포넌트입니다.
 * ComboBox에서 선택된 항목을 표시하거나 태그 입력에서 사용할 수 있습니다.
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(({
  children,
  variant = 'filled',
  size = 'md',
  state,
  disabled = false,
  removable = false,
  selectable = false,
  selected = false,
  onClick,
  onRemove,
  ...rest
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // 실제 상태 결정
  const getActualState = () => {
    if (disabled) return 'disabled';
    if (state && state !== 'default') return state;
    if (isPressed) return 'pressed';
    if (isHovered) return 'hovered';
    return 'default';
  };

  // 크기별 설정 - 시멘틱 토큰 활용
  const sizeConfig = {
    sm: {
      padding: 'xxs' as const, // 4px
      variant: 'caption-1' as const, // 12px/16px
      iconSize: 'xs' as const,
    },
    md: {
      padding: 'xs' as const, // 6px
      variant: 'body-2' as const, // 14px/20px
      iconSize: 'sm' as const,
    }
  };

  const config = sizeConfig[size];
  const actualState = getActualState();

  // 배경색 결정
  const getBackgroundColor = () => {
    if (variant === 'outlined') {
      return undefined; // outlined는 투명 배경
    }
    // filled variant
    if (selected) {
      if (disabled) return 'primary-system01-1-disabled';
      if (actualState === 'pressed') return 'primary-system01-1-pressed';
      if (actualState === 'hovered') return 'primary-system01-1-hovered';
      return 'primary-system01-1-rest';
    }
    if (disabled) return 'secondary-system01-1-disabled';
    if (actualState === 'pressed') return 'secondary-system01-1-pressed';
    if (actualState === 'hovered') return 'secondary-system01-1-hovered';
    return 'secondary-system01-1-rest';
  };

  // 테두리 색상 결정
  const getBorderColor = () => {
    if (variant === 'filled') return undefined; // filled는 테두리 없음
    
    // outlined variant
    if (disabled) return 'secondary-system01-2-disabled';
    if (selected) {
      if (actualState === 'pressed') return 'primary-system01-1-pressed';
      if (actualState === 'hovered') return 'primary-system01-1-hovered';
      return 'primary-system01-1-rest';
    }
    if (actualState === 'pressed') return 'secondary-system01-1-pressed';
    if (actualState === 'hovered') return 'secondary-system01-1-hovered';
    return 'secondary-system01-1-rest';
  };

  // 전경색 결정
  const getForegroundColor = () => {
    if (disabled) return 'secondary-system01-1-disabled';
    
    if (variant === 'outlined') {
      if (selected) {
        if (actualState === 'pressed') return 'primary-system01-1-pressed';
        if (actualState === 'hovered') return 'primary-system01-1-hovered';
        return 'primary-system01-1-rest';
      }
      if (actualState === 'pressed') return 'secondary-system01-1-pressed';
      if (actualState === 'hovered') return 'secondary-system01-1-hovered';
      return 'secondary-system01-2-rest';
    }
    
    // filled variant
    if (selected) return 'primary-system01-oncolor'; // primary 배경에서 잘 보이도록 onColor 사용
    return 'secondary-system01-1-rest'; // secondary 배경에서도 onColor 사용
  };

  // 아이콘 색상 결정 (Icon 컴포넌트용)
  const getIconColor = (): IconColor | undefined => {
    if (disabled) return 'disabled';
    
    if (variant === 'outlined') {
      // outlined는 Surface의 foreground 상속
      return undefined;
    }
    
    // filled variant - onColor 사용
    return 'oncolor';
  };

  // 이벤트 핸들러
  const handleMouseEnter = () => {
    if (!disabled && (!state || state === 'default')) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && (!state || state === 'default')) {
      setIsHovered(false);
      setIsPressed(false);
    }
  };

  const handleMouseDown = () => {
    if (!disabled && (!state || state === 'default')) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    if (!disabled && (!state || state === 'default')) {
      setIsPressed(false);
    }
  };

  const handleClick = () => {
    if (disabled) return;
    if (selectable && onClick) {
      onClick();
    }
  };

  const handleRemoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (disabled) return;
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <Surface
      ref={ref}
      background={getBackgroundColor()}
      foreground={getForegroundColor()}
      borderRadius="pill"
      borderWidth={variant === 'outlined' ? 'thin' : undefined}
      borderStyle={variant === 'outlined' ? 'solid' : undefined}
      borderColor={getBorderColor()}
      style={{
        cursor: disabled ? 'not-allowed' : selectable ? 'pointer' : 'default',
        userSelect: 'none',
        display: 'inline-flex',
        width: 'fit-content',
      }}
      onClick={selectable ? handleClick : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...rest}
    >
      <Frame
        display="flex" 
        direction="row" 
        gap="xxs" 
        align="center"
        padding={config.padding}
        fill
      >
        <Text
          variant={config.variant}
          color={undefined} // Surface의 foreground 상속
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1,
          }}
        >
          {children}
        </Text>
        
        {removable && (
          <Surface
            borderRadius="sm"
            onClick={handleRemoveClick}
            style={{
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          >
            <Frame 
              display="flex"
              align="center"
              justify="center"
              padding="xxxs"
              style={{
                flexShrink: 0,
              }}
            >
              <Icon
                name="LineIconsCloseCloseIcon"
                size={config.iconSize}
                color={getIconColor()}
              />
            </Frame>
          </Surface>
        )}
      </Frame>
    </Surface>
  );
});

Chip.displayName = 'Chip'; 