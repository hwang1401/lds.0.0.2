import React, { useState } from 'react';
import { Surface, Frame, Text } from 'lumir-shared';
import { TabItemProps, TabState } from './types';
import { useTabContext } from './Tab';

export const TabItem = ({ 
  id, 
  icon, 
  iconPosition = 'none',
  disabled = false,
  children,
  ...props
}: TabItemProps) => {
  const { selectedId, setSelectedId, size } = useTabContext();
  const [state, setState] = useState<TabState>('default');
  const isSelected = selectedId === id;

  const handleMouseEnter = () => !disabled && setState('hovered');
  const handleMouseLeave = () => !disabled && setState('default');
  const handleMouseDown = () => !disabled && setState('pressed');
  const handleMouseUp = () => !disabled && setState('default');
  const handleFocus = () => !disabled && setState('focused');
  const handleBlur = () => !disabled && setState('default');
  const handleClick = () => !disabled && setSelectedId(id);

  const getColor = () => {
    if (disabled) return 'tertiary';
    if (isSelected) {
      switch (state) {
        case 'default': return 'primary';
        case 'hovered': return 'primary';
        case 'pressed': return 'primary';
        default: return 'primary';
      }
    } else {
      switch (state) {
        case 'default': return 'secondary';
        case 'hovered': return 'primary';
        case 'pressed': return 'primary';
        default: return 'secondary';
      }
    }
  };

  const direction = iconPosition === 'above' ? 'column' : 'row';
  const reverse = iconPosition === 'after';

  const borderProps = (state === 'focused' || isSelected) ? {
    borderWidth: 'thin' as const,
    borderColor: getColor() as any,
    borderStyle: 'solid' as const
  } : {};

  return (
    <Surface
      role="tab"
      borderRadius="md"
      {...borderProps}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      onClick={!disabled ? handleClick : undefined}
      onMouseEnter={!disabled ? handleMouseEnter : undefined}
      onMouseLeave={!disabled ? handleMouseLeave : undefined}
      onMouseDown={!disabled ? handleMouseDown : undefined}
      onMouseUp={!disabled ? handleMouseUp : undefined}
      onFocus={!disabled ? handleFocus : undefined}
      onBlur={!disabled ? handleBlur : undefined}
      {...props}
    >
      <Frame 
        display="flex"
        direction={direction} 
        gap="sm"
        align="center"
        padding="md"
        style={{ flexDirection: reverse ? 'row-reverse' : direction }}
      >
        {icon && (
          <Surface style={{ width: size === 'lg' ? '24px' : '20px', height: size === 'lg' ? '24px' : '20px' }}>
            {icon}
          </Surface>
        )}
        <Text 
          variant={size === 'lg' ? 'body-1' : 'body-2'} 
          weight={isSelected ? 'bold' : 'regular'}
          color={getColor()}
        >
          {children}
        </Text>
      </Frame>
    </Surface>
  );
};

export default TabItem; 