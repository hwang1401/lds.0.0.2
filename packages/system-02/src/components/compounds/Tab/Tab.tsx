import React, { useState, useEffect } from 'react';
import { Surface, Frame, Text, Icon, SurfaceProps } from 'lumir-design-system-shared';

export type TabSize = 'lg' | 'md';

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface TabProps extends Omit<SurfaceProps, 'size' | 'onChange'> {
  items: TabItem[];
  selectedId?: string;
  defaultSelectedId?: string;
  size?: TabSize;
  showBorder?: boolean;
  onChange?: (selectedId: string) => void;
}

const Tab: React.FC<TabProps> = ({
  items,
  selectedId: controlledSelectedId,
  defaultSelectedId,
  size = 'lg',
  showBorder = true,
  onChange,
  ...surfaceProps
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState(
    defaultSelectedId || items[0]?.id || ''
  );

  // 마우스 상태 관리
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pressedId, setPressedId] = useState<string | null>(null);

  // controlled vs uncontrolled 지원
  const selectedId = controlledSelectedId !== undefined ? controlledSelectedId : internalSelectedId;

  const handleTabClick = (id: string) => {
    if (selectedId !== id) {
      if (controlledSelectedId === undefined) {
        setInternalSelectedId(id);
    }
      onChange?.(id);
    }
  };

  // 현재 상태 결정
  const getCurrentState = (itemId: string): 'rest' | 'hovered' | 'pressed' | 'disabled' => {
    const item = items.find(item => item.id === itemId);
    if (item?.disabled) return 'disabled';
    if (pressedId === itemId) return 'pressed';
    if (hoveredId === itemId) return 'hovered';
    return 'rest';
  };

  // 크기별 설정 - System-02는 패딩을 줄여서 간격을 좁힘
  const getSizeConfig = () => {
    if (size === 'md') {
      return {
        padding: 'sm' as const,  // md -> sm으로 변경
        textVariant: 'body-2' as const,
        iconSize: 'xs' as const,
        minHeight: '40px'
      };
    }
    return {
      padding: 'md' as const,  // lg -> md로 변경
      textVariant: 'body-1' as const,
      iconSize: 'sm' as const,
      minHeight: '48px'
    };
  };

  const config = getSizeConfig();

  return (
    <Surface {...surfaceProps}>
      <Frame display="flex" direction="row" gap="none" align="flex-start">
        {items.map((item) => {
          const isSelected = selectedId === item.id;
          const isDisabled = item.disabled;
          const currentState = getCurrentState(item.id);

          // Surface 색상 결정 - 더 연한 호버 색상 사용 (System-02: Purple 계열)
  const getSurfaceColors = () => {
            if (isDisabled) {
      return {
                foreground: 'secondary-system02-1-disabled' as const,
                borderColor: 'secondary-system02-1-disabled' as const
      };
    }
    
    if (isSelected) {
              // 선택된 탭은 primary 색상 사용
              if (currentState === 'pressed') {
                return {
                  foreground: 'primary-system02-1-pressed' as const,
                  borderColor: 'primary-system02-1-pressed' as const
                };
              }
              if (currentState === 'hovered') {
                return {
                  foreground: 'primary-system02-1-hovered' as const,
                  borderColor: 'primary-system02-1-hovered' as const
                };
              }
      return {
        foreground: 'primary-system02-1-rest' as const,
                borderColor: 'primary-system02-1-rest' as const
              };
            }
            
            // 비선택 탭은 secondary 색상 사용
            if (currentState === 'pressed') {
              return {
                foreground: 'secondary-system02-1-pressed' as const,
                borderColor: 'secondary-system02-1-pressed' as const
              };
            }
            if (currentState === 'hovered') {
              return {
                foreground: 'secondary-system02-1-hovered' as const,
                borderColor: 'secondary-system02-1-hovered' as const
      };
    }
    return {
              foreground: 'secondary-system02-1-rest' as const,
              borderColor: 'secondary-system02-1-rest' as const
    };
  };

  const surfaceColors = getSurfaceColors();

  return (
    <Surface
              key={item.id}
              background={undefined}
      foreground={surfaceColors.foreground}
              borderRadius="none"
              borderWidth={isSelected && showBorder ? "medium" : undefined}
              borderColor={isSelected && showBorder ? surfaceColors.borderColor : undefined}
      borderStyle={isSelected && showBorder ? "solid" : undefined}
              style={{
                ...(isSelected && showBorder ? {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none'
                } : {}),
                cursor: isDisabled ? "not-allowed" : "pointer",
                minHeight: config.minHeight
              }}
              onClick={() => !isDisabled && handleTabClick(item.id)}
              onMouseEnter={() => !isDisabled && setHoveredId(item.id)}
              onMouseLeave={() => {
                setHoveredId(null);
                setPressedId(null);
              }}
              onMouseDown={() => !isDisabled && setPressedId(item.id)}
              onMouseUp={() => setPressedId(null)}
    >
      <Frame 
        display="flex" 
                direction="row"
        align="center"
        justify="center"
                gap="sm"
                padding={config.padding}
      >
                {item.icon && (
                  <Icon
                    name={item.icon as any}
                    size={config.iconSize}
                  />
                )}
                
                <Text
                  variant={config.textVariant}
                  weight={isSelected ? 'bold' : 'regular'}
                >
                  {item.label}
                </Text>
      </Frame>
    </Surface>
  );
        })}
      </Frame>
    </Surface>
  );
};

export default Tab;