import React, { useState, createContext, useContext } from 'react';
import { Icon, Frame, Surface, SurfaceProps } from 'lumir-design-system-shared';
import { Button } from '../Button';

export type SegmentButtonMode = 'single' | 'multi';
export type SegmentButtonSize = 'sm' | 'md' | 'lg';
export type SegmentButtonVariant = 'primary' | 'secondary';

export interface SegmentButtonProps extends Omit<SurfaceProps, 'onChange'> {
  mode: SegmentButtonMode;
  selectedValues?: string[];
  defaultSelectedValues?: string[];
  size?: SegmentButtonSize;
  variant?: SegmentButtonVariant;
  onChange?: (values: string[]) => void;
  children: React.ReactNode;
}

export interface SegmentButtonItemProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}

// Context for SegmentButton state management
interface SegmentButtonContextType {
  selectedValues: string[];
  mode: SegmentButtonMode;
  size: SegmentButtonSize;
  variant: SegmentButtonVariant;
  onItemClick: (value: string) => void;
  children: React.ReactNode;
}

const SegmentButtonContext = createContext<SegmentButtonContextType | null>(null);

export const SegmentButton: React.FC<SegmentButtonProps> & {
  Item: React.FC<SegmentButtonItemProps>;
} = ({ 
  mode, 
  selectedValues, 
  defaultSelectedValues = [], 
  size = 'md', 
  variant = 'primary', 
  onChange, 
  children, 
  ...rest 
}) => {
  // Internal state for uncontrolled component
  const [internalSelectedValues, setInternalSelectedValues] = useState<string[]>(defaultSelectedValues);
  
  // Use controlled values if provided, otherwise use internal state
  const currentSelectedValues = selectedValues ?? internalSelectedValues;
  
  const handleItemClick = (value: string) => {
    let newSelectedValues: string[];
    
    if (mode === 'single') {
      // Single select: replace current selection
      newSelectedValues = [value];
    } else {
      // Multi select: toggle selection
      if (currentSelectedValues.includes(value)) {
        newSelectedValues = currentSelectedValues.filter(v => v !== value);
      } else {
        newSelectedValues = [...currentSelectedValues, value];
      }
    }
    
    // Update internal state if uncontrolled
    if (selectedValues === undefined) {
      setInternalSelectedValues(newSelectedValues);
    }
    
    // Call onChange callback
    onChange?.(newSelectedValues);
  };

  // Surface props 분리
  const { style, ...surfaceProps } = rest;

  const contextValue: SegmentButtonContextType = {
    selectedValues: currentSelectedValues,
    mode,
    size,
    variant,
    onItemClick: handleItemClick,
    children,
  };

  return (
    <SegmentButtonContext.Provider value={contextValue}>
      <Surface
        background="secondary-system02-1-rest"
        borderColor="secondary-system02-1-rest"
        borderWidth="thin"
        borderStyle="solid"
        borderRadius="xl"
        style={{ width: 'fit-content', ...style }}
        {...surfaceProps}
      >
        <Frame
          display="flex"
          direction="row"
          align="stretch"
          justify="flex-start"
          gap="none"
          fill
        >
          {children}
        </Frame>
      </Surface>
    </SegmentButtonContext.Provider>
  );
};

const SegmentButtonItem: React.FC<SegmentButtonItemProps> = ({ value, disabled = false, children }) => {
  const context = useContext(SegmentButtonContext);
  if (!context) {
    throw new Error('SegmentButton.Item must be used within SegmentButton');
  }

  const { selectedValues, onItemClick, size, variant } = context;
  const selected = selectedValues.includes(value);

  // 현재 아이템의 위치 정보 계산
  const items = React.Children.toArray(context.children);
  const currentIndex = items.findIndex((child) => 
    React.isValidElement(child) && 
    child.props && 
    (child.props as any).value === value
  );
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === items.length - 1;
  const isSingle = items.length === 1;

  // 위치에 따른 스타일 결정 (구분선과 radius)
  const getButtonStyle = () => {
    const baseStyle: React.CSSProperties = {};
    
    if (isSingle) {
      // 단일 버튼은 기본 radius
      return baseStyle;
    }
    
    if (isFirst) {
      // 첫 번째 버튼: 왼쪽만 radius
      baseStyle.borderTopRightRadius = '0';
      baseStyle.borderBottomRightRadius = '0';
    } else if (isLast) {
      // 마지막 버튼: 오른쪽만 radius
      baseStyle.borderTopLeftRadius = '0';
      baseStyle.borderBottomLeftRadius = '0';
    } else {
      // 가운데 버튼: radius 없음
      baseStyle.borderRadius = '0';
    }
    
    // 구분선 추가 (마지막 버튼 제외) - System-02 색상 사용
    if (!isLast) {
      baseStyle.borderRight = '1px solid var(--foundation-foundation-color-grey-light-80)';
    }
    
    return baseStyle;
  };

  // 선택 상태별 variant 결정
  const getButtonVariant = () => {
    if (selected) {
      return 'filled'; // 선택된 상태는 filled
    }
    return 'transparent'; // 비선택 상태는 transparent
  };

  // 선택 상태별 colorScheme 결정 (Tab처럼)
  const getButtonColorScheme = () => {
    if (selected) {
      return 'primary'; // 선택된 상태는 primary (System-02: purple)
    }
    return 'secondary'; // 비선택 상태는 secondary
  };

  return (
    <Button
      variant={getButtonVariant()}
      colorScheme={getButtonColorScheme()}
      size={size}
      disabled={disabled}
      onClick={() => !disabled && onItemClick(value)}
      style={getButtonStyle()}
      aria-pressed={selected}
    >
      {children}
    </Button>
  );
};

// Attach the Item component to the main component
SegmentButton.Item = SegmentButtonItem;

export default SegmentButton; 