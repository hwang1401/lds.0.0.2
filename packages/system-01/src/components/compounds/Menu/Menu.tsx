import React, { forwardRef, useState } from 'react';
import { Surface, Frame, Sizing, Text, Icon, IconName } from '@lumir/shared';
import { Button } from '../Button/Button';

type MenuSize = 'md' | 'lg' | 'xlg';
type MenuState = 'default' | 'hovered' | 'pressed' | 'focused' | 'selected' | 'disabled';

export interface MenuHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * 메뉴 헤더의 크기를 지정합니다.
   */
  size?: MenuSize;
  
  /**
   * 메뉴 헤더의 상태를 지정합니다.
   */
  state?: MenuState;
  
  /**
   * 메뉴 헤더의 텍스트 내용입니다.
   */
  children: React.ReactNode;
  
  /**
   * 왼쪽에 표시할 아이콘입니다.
   */
  leftIcon?: IconName;
  
  /**
   * 오른쪽에 표시할 아이콘입니다. (텍스트 옆)
   */
  rightIcon?: IconName;
  
  /**
   * 확장/축소 상태를 나타냅니다.
   */
  expanded?: boolean;
  
  /**
   * Chevron 버튼 표시 여부를 지정합니다.
   * @default true
   */
  showChevron?: boolean;
  
  /**
   * 비활성화 상태를 지정합니다.
   */
  disabled?: boolean;
  
  /**
   * 클릭 이벤트 핸들러입니다.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * MenuHeader 컴포넌트는 아코디언이나 GNB 메뉴에서 사용할 수 있는 헤더 역할을 합니다.
 * 클릭 가능한 버튼 형태로 구현되어 메뉴 확장/축소 등의 동작을 처리할 수 있습니다.
 * 

 */
export const MenuHeader = forwardRef<HTMLDivElement, MenuHeaderProps>(({
  size = 'lg',
  state,
  children,
  leftIcon,
  rightIcon,
  expanded = false,
  showChevron = true,
  disabled = false,
  className,
  onClick,
  color,
  ...rest
}, ref) => {
  // 실시간 인터랙션 상태 관리
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // 실제 상태 결정 (외부 state prop이 있으면 우선, 없으면 실시간 상태 사용)
  const getActualState = (): MenuState => {
    if (disabled) return 'disabled';
    if (state) return state; // 외부에서 명시적으로 상태를 지정한 경우
    if (isPressed) return 'pressed';
    if (isHovered) return 'hovered';
    if (isFocused) return 'focused';
    return 'default';
  };

  const actualState = getActualState();
  
  // 크기별 높이 토큰 매핑
  const heightMap: Record<MenuSize, 'lg' | 'xl' | 'xxl'> = {
    'md': 'lg',   // 32px
    'lg': 'xl',   // 36px 
    'xlg': 'xxl'  // 40px
  };
  
  // 크기별 아이콘 사이즈 매핑 - Button 컴포넌트와 일치
  const iconSizeMap: Record<MenuSize, 'xs' | 'sm' | 'md'> = {
    'md': 'xs',  // 16px (Button md와 동일)
    'lg': 'sm',  // 20px (Button lg와 동일)  
    'xlg': 'md'  // 24px (Button xl과 동일)
  };
  
  // 상태별 배경색 - 선택된 상태와 비활성화 상태는 배경색 없음
  const getBackgroundColor = () => {
    if (actualState === 'disabled') return undefined; // 비활성화시 배경색 없음
    if (actualState === 'selected') return undefined; // 선택된 상태에서 배경색 없음
    if (actualState === 'pressed') return 'secondary-system01-1-pressed';
    if (actualState === 'hovered') return 'secondary-system01-1-hovered';
    if (actualState === 'focused') return undefined; // 포커스시 배경색 없음
    return undefined; // 기본 상태도 배경색 없음
  };

  // 상태별 전경색
  const getForegroundColor = () => {
    if (actualState === 'disabled') return 'secondary-system01-1-disabled';
    if (actualState === 'selected') return 'primary-system01-1-rest';
    return 'secondary-system01-1-rest';
  };

  // 포커스 상태 보더 색상
  const getBorderProps = () => {
    if (actualState === 'focused') {
      return {
        borderWidth: 'thin' as const,
        borderStyle: 'solid' as const,
        borderColor: 'focused' as const
      };
    }
    return {};
  };

  // 이벤트 핸들러
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && !state) setIsHovered(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && !state) {
      setIsHovered(false);
      setIsPressed(false);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && !state) setIsPressed(true);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && !state) setIsPressed(false);
  };

  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!disabled && !state) setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!disabled && !state) setIsFocused(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Surface
      ref={ref}
      background={getBackgroundColor()}
      foreground={getForegroundColor()}
      borderRadius="sm"
      {...getBorderProps()}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: '100%',
        ...rest.style
      }}
      onClick={disabled ? undefined : handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-expanded={expanded}
      className={className}
      {...rest}
    >
      <Sizing height={heightMap[size]}>
        <Frame 
          display="flex" 
          align="center" 
          justify="space-between" 
          paddingX="sm"
          paddingY="xs"
          fill
        >
          {/* 좌측: 아이콘 + 텍스트 + 아이콘 */}
          <Frame 
            display="flex" 
            align="center"
            gap="xs"
          >
            {leftIcon && (
              <Icon 
                name={leftIcon} 
                size={iconSizeMap[size]} 
                color={undefined} // Surface의 foreground 상속
              />
            )}
            
            <Text 
              variant="heading-3" 
              weight="bold" 
              color={undefined} // Surface의 foreground 상속
            >
              {children}
            </Text>
            
            {rightIcon && (
              <Icon 
                name={rightIcon} 
                size={iconSizeMap[size]} 
                color={undefined} // Surface의 foreground 상속
              />
            )}
          </Frame>
          
          {/* 우측: Chevron 버튼 */}
          {showChevron && (
            <Button
              variant="transparent"
              buttonType="icon-only"
              colorScheme={actualState === 'selected' ? 'primary' : 'secondary'}
              size={size === 'xlg' ? 'md' : size === 'lg' ? 'sm' : 'xs'}
              rightIcon={expanded ? "LineIconsArrowChevronUpIcon" : "LineIconsArrowChevronDownIcon"}
              disabled={disabled}
              onClick={(e) => {
                e.stopPropagation();
                if (onClick) {
                  onClick(e as React.MouseEvent<HTMLDivElement>);
                }
              }}
            />
          )}
        </Frame>
      </Sizing>
    </Surface>
  );
});

MenuHeader.displayName = 'MenuHeader'; 