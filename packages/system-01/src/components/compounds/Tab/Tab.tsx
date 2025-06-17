import React, { createContext, useContext, useState } from 'react';
import { Surface, Frame, Sizing, Text, Icon, IconName } from '@lumir/shared';

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

// 메인 Tab 컴포넌트
const Tab = ({ children, defaultSelectedId, size = 'lg', showBorder = true }: TabProps) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const contextValue: TabContextType = {
    selectedId,
    setSelectedId,
    size,
    showBorder,
  };

  return (
    <TabContext.Provider value={contextValue}>
      <Frame display="flex" direction="column" gap="none">
        {children}
      </Frame>
    </TabContext.Provider>
  );
};

// TabList 컴포넌트
const TabList = ({ children }: TabListProps) => {
  return (
    <Frame display="flex" direction="row" gap="none" align="flex-start">
      {children}
    </Frame>
  );
};

// TabItem 컴포넌트
const TabItem = ({ 
  id, 
  children, 
  icon, 
  iconPosition = 'before', 
  disabled = false 
}: TabItemProps) => {
  const { selectedId, setSelectedId, size = 'lg', showBorder = true } = useTabContext();
  
  const isSelected = selectedId === id;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setSelectedId(id);
    }
  };

  // 아이콘 색상 결정
  const getIconColor = () => {
    if (disabled) return 'secondary-system01-1';
    if (isSelected) return 'primary-system01';
    return 'secondary-system01-1';
  };

  // Surface에 적용할 색상 결정
  const getSurfaceColors = () => {
    if (disabled) {
      return {
        foreground: 'secondary-system01-1-disabled' as const,
        background: undefined
      };
    }
    
    if (isSelected) {
      return {
        foreground: 'primary-system01-1-rest' as const,
        background: isHovered ? ('secondary-system01-2-hovered' as const) : undefined
      };
    }
    
    return {
      foreground: 'secondary-system01-1-rest' as const,
      background: isHovered ? ('secondary-system01-2-hovered' as const) : undefined
    };
  };

  const surfaceColors = getSurfaceColors();

  // 크기별 설정
  const getSizeConfig = () => {
    if (size === 'md') {
      return {
        padding: 'md' as const,
        textVariant: 'body-2' as const,
        iconSize: 'xs' as const,
        minHeight: '40px'
      };
    }
    return {
      padding: 'lg' as const,
      textVariant: 'body-1' as const,
      iconSize: 'sm' as const,
      minHeight: '48px'
    };
  };

  const config = getSizeConfig();

  return (
    <Sizing minHeight={config.minHeight}>
      <Surface
        background={surfaceColors.background}
        foreground={surfaceColors.foreground}
        borderRadius="none"
        borderWidth={isSelected && showBorder ? "medium" : undefined}
        borderColor={isSelected && showBorder ? "primary-system01-1-rest" as const : undefined}
        borderStyle={isSelected && showBorder ? "solid" : undefined}
        style={{
          ...(isSelected && showBorder ? {
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none'
          } : {}),
          cursor: disabled ? "not-allowed" : "pointer"
        }}
        onClick={handleClick}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
      >
        <Frame
          display="flex"
          direction={iconPosition === 'above' ? 'column' : 'row'}
          align="center"
          justify="center"
          gap={iconPosition === 'above' ? 'xs' : 'sm'}
          padding={config.padding}
        >
          {icon && (iconPosition === 'before' || iconPosition === 'above') && (
            <Icon
              name={icon}
              size={config.iconSize}
              color={getIconColor()}
            />
          )}
          
          <Text
            variant={config.textVariant}
            weight={isSelected ? 'bold' : 'regular'}
          >
            {children}
          </Text>
          
          {icon && iconPosition === 'after' && (
            <Icon
              name={icon}
              size={config.iconSize}
              color={getIconColor()}
            />
          )}
        </Frame>
      </Surface>
    </Sizing>
  );
};

// TabPanel 컴포넌트
const TabPanel = ({ id, children }: TabPanelProps) => {
  const { selectedId } = useTabContext();
  
  if (selectedId !== id) {
    return null;
  }

  return (
    <Frame padding="lg">
      {children}
    </Frame>
  );
};

// 복합 컴포넌트로 export
const TabCompound = Tab as typeof Tab & {
  List: typeof TabList;
  Item: typeof TabItem;
  Panel: typeof TabPanel;
};

TabCompound.List = TabList;
TabCompound.Item = TabItem;
TabCompound.Panel = TabPanel;

export default TabCompound;
export { TabProps, TabListProps, TabItemProps, TabPanelProps };