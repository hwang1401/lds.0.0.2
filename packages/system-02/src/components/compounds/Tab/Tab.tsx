import React, { createContext, useContext, useState } from 'react';
import { Surface, Frame, Sizing, Text, Icon, IconName } from 'lumir-shared';

interface TabContextType {
  selectedId: string;
  setSelectedId: (id: string) => void;
  size?: 'md' | 'lg';
  showBorder?: boolean;
}

export const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a Tab');
  }
  return context;
};

interface TabProps {
  children: React.ReactNode;
  defaultSelectedId: string;
  size?: 'md' | 'lg';
  showBorder?: boolean;
}

interface TabListProps {
  children: React.ReactNode;
}

interface TabItemProps {
  id: string;
  children: React.ReactNode;
  icon?: IconName;
  iconPosition?: 'before' | 'after' | 'above';
  disabled?: boolean;
}

interface TabPanelProps {
  id: string;
  children: React.ReactNode;
}

const Tab = ({ children, defaultSelectedId, size = 'lg', showBorder = true }: TabProps) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  return (
    <TabContext.Provider value={{ selectedId, setSelectedId, size, showBorder }}>
      <Surface>{children}</Surface>
    </TabContext.Provider>
  );
};

const TabList = ({ children }: TabListProps) => {
  const { showBorder } = useTabContext();
  
  return (
    <Surface
      borderWidth={showBorder ? "thin" : undefined}
      borderColor={showBorder ? "secondary-system01-2-rest" : undefined}
      borderStyle={showBorder ? "solid" : undefined}
      style={{
        borderTop: 'none',
        borderLeft: 'none', 
        borderRight: 'none'
      }}
    >
      <Frame 
        display="flex"
        direction="row" 
        gap="none"
      >
        {children}
      </Frame>
    </Surface>
  );
};

const TabItem = ({ id, children, icon, iconPosition = 'before', disabled = false }: TabItemProps) => {
  const { selectedId, setSelectedId, size, showBorder } = useTabContext();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isSelected = selectedId === id;

  const handleClick = () => {
    if (!disabled) {
      setSelectedId(id);
    }
  };

  // 마우스 이벤트 핸들러들
  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  // 현재 상태 결정
  const getCurrentState = (): 'rest' | 'hovered' | 'pressed' | 'disabled' => {
    if (disabled) return 'disabled';
    if (isPressed) return 'pressed';
    if (isHovered) return 'hovered';
    return 'rest';
  };

  // 아이콘 색상 결정
  const getIconColor = () => {
    if (disabled) return 'secondary-system01-1';
    if (isSelected) return 'primary-system02';
    return 'secondary-system01-1';
  };

  // 텍스트 variant 결정
  const getTextVariant = () => {
    return size === 'lg' ? 'body-1' : 'body-2';
  };

  // 텍스트 weight 결정
  const getTextWeight = () => {
    return isSelected ? 'bold' : 'regular';
  };

  // 아이콘 크기 결정
  const getIconSize = () => {
    return size === 'lg' ? 'lg' : 'md';
  };

  const renderContent = () => {
    const textElement = (
      <Text 
        variant={getTextVariant()}
        weight={getTextWeight()}
      >
        {children}
      </Text>
    );

    if (!icon) {
      return textElement;
    }

    const iconElement = (
      <Icon
        name={icon}
        size={getIconSize()}
        color={getIconColor()}
      />
    );

    // iconPosition에 따른 순서 결정
    if (iconPosition === 'after') {
      return (
        <>
          {textElement}
          {iconElement}
        </>
      );
    } else {
      // 'before' 및 'above' 모두 아이콘이 먼저
      return (
        <>
          {iconElement}
          {textElement}
        </>
      );
    }
  };

  // Surface에 적용할 색상 결정
  const getSurfaceColors = () => {
    if (disabled) {
      return {
        foreground: 'secondary-system01-1-rest' as const,
        background: undefined
      };
    }
    
    if (isSelected) {
      return {
        foreground: 'primary-system01-1-rest' as const,
        background: isHovered ? ('secondary-system01-1-rest' as const) : undefined
      };
    }
    
    return {
      foreground: 'secondary-system01-3-rest' as const,
      background: isHovered ? ('secondary-system01-1-rest' as const) : undefined
    };
  };

  const surfaceColors = getSurfaceColors();

  return (
    <Surface
      foreground={surfaceColors.foreground}
      background={surfaceColors.background}
      borderWidth={isSelected && showBorder ? "thin" : undefined}
      borderColor={isSelected && showBorder ? "primary-system01-1-rest" : undefined}
      borderStyle={isSelected && showBorder ? "solid" : undefined}
      style={isSelected && showBorder ? {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none'
      } : undefined}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Frame 
        display="flex" 
        direction={iconPosition === 'above' ? 'column' : 'row'}
        align="center"
        justify="center"
        gap="xs"
        padding="sm"
      >
        {renderContent()}
      </Frame>
    </Surface>
  );
};

const TabPanel = ({ id, children }: TabPanelProps) => {
  const { selectedId } = useTabContext();

  if (selectedId !== id) {
    return null;
  }

  return (
    <Surface>
      <Frame display="flex" direction="column" padding="lg" gap="md">
        {children}
      </Frame>
    </Surface>
  );
};

Tab.List = TabList;
Tab.Item = TabItem;
Tab.Panel = TabPanel;

export default Tab;