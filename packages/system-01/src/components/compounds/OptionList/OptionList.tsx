import React, { forwardRef, useState } from 'react';
import { Surface, Frame, Sizing, Text } from 'lumir-shared';
import { Radio } from '../Radio';
import { Checkbox } from '../Checkbox';

export interface OptionListProps {
  /**
   * 옵션 아이템의 타입을 지정합니다.
   */
  type?: 'menu-header' | 'single-select' | 'radio' | 'multi-select' | 'radio-component' | 'checkbox-component';
  
  /**
   * 옵션 아이템의 상태를 지정합니다.
   */
  state?: 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled' | 'selected';
  
  /**
   * 선택 상태 여부
   */
  selected?: boolean;
  
  /**
   * 비활성화 상태 여부
   */
  disabled?: boolean;
  
  /**
   * 옵션 아이템 텍스트
   */
  children: React.ReactNode;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  
  /**
   * 마우스 호버 이벤트 핸들러
   */
  onMouseEnter?: () => void;
  
  /**
   * 마우스 호버 종료 이벤트 핸들러
   */
  onMouseLeave?: () => void;

  // Radio 컴포넌트 관련 props
  /**
   * Radio 타입일 때 라디오 그룹 이름
   */
  radioName?: string;
  
  /**
   * Radio 타입일 때 라디오 값
   */
  radioValue?: string;
  
  /**
   * Radio 타입일 때 체크 상태
   */
  radioChecked?: boolean;
  
  /**
   * Radio 타입일 때 변경 핸들러
   */
  onRadioChange?: (value: string) => void;

  // Checkbox 컴포넌트 관련 props
  /**
   * Checkbox 타입일 때 체크박스 이름
   */
  checkboxName?: string;
  
  /**
   * Checkbox 타입일 때 체크박스 값
   */
  checkboxValue?: string;
  
  /**
   * Checkbox 타입일 때 체크 상태
   */
  checkboxChecked?: boolean;
  
  /**
   * Checkbox 타입일 때 중간 상태
   */
  checkboxIndeterminate?: boolean;
  
  /**
   * Checkbox 타입일 때 변경 핸들러
   */
  onCheckboxChange?: (checked: boolean) => void;
}

/**
 * OptionList 컴포넌트는 선택 가능한 옵션 아이템을 나타냅니다.
 * ComboBox, 드롭다운 메뉴, 선택 목록 등에서 사용할 수 있는 범용적인 컴포넌트입니다.
 */
export const OptionList = forwardRef<HTMLDivElement, OptionListProps>(({
  type = 'single-select',
  state = 'default',
  selected = false,
  disabled = false,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  
  // Radio props
  radioName,
  radioValue,
  radioChecked,
  onRadioChange,
  
  // Checkbox props
  checkboxName,
  checkboxValue,
  checkboxChecked,
  checkboxIndeterminate,
  onCheckboxChange,
  
  ...rest
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // 실제 상태 결정 (외부 state prop이 있으면 우선, 없으면 실시간 상태 사용)
  const getActualState = () => {
    if (disabled) return 'disabled';
    if (state && state !== 'default') return state;
    if (isPressed) return 'pressed';
    if (isHovered) return 'hovered';
    if (selected) return 'selected';
    return 'default';
  };

  // 상태에 따른 배경색 결정
  const getBackgroundColor = () => {
    const actualState = getActualState();
    if (actualState === 'disabled') return 'secondary-system01-1-disabled';
    if (actualState === 'pressed') return 'secondary-system01-1-pressed';
    if (actualState === 'hovered') return 'secondary-system01-1-hovered';
    if (actualState === 'selected') return 'secondary-system01-1-selected';
    return 'secondary-system01-1-rest';
  };

  // 상태에 따른 텍스트 색상 결정
  const getForegroundColor = () => {
    const actualState = getActualState();
    if (actualState === 'disabled') return 'secondary-system01-1-disabled';
    return 'secondary-system01-1-rest';
  };

  // 이벤트 핸들러들
  const handleMouseEnter = () => {
    if (!disabled && (!state || state === 'default')) {
      setIsHovered(true);
    }
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    if (!disabled && (!state || state === 'default')) {
      setIsHovered(false);
      setIsPressed(false);
    }
    if (onMouseLeave) onMouseLeave();
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

    // Radio 컴포넌트 타입일 때
    if (type === 'radio-component' && onRadioChange && radioValue) {
      onRadioChange(radioValue);
    }
    
    // Checkbox 컴포넌트 타입일 때
    if (type === 'checkbox-component' && onCheckboxChange) {
      onCheckboxChange(!checkboxChecked);
    }
    
    // 기본 클릭 핸들러
    if (onClick) {
      onClick();
    }
  };

  // 텍스트 스타일 결정
  const getTextVariant = () => {
    if (type === 'menu-header') return 'caption-1' as const;
    return 'body-2' as const;
  };

  // 텍스트 굵기 결정
  const getFontWeight = () => {
    if (type === 'menu-header') return 'bold' as const;
    return 'regular' as const;
  };

  // 패딩 결정
  const getPadding = () => {
    if (type === 'menu-header') return 'xs';
    if (type === 'radio-component' || type === 'checkbox-component') return 'sm';
    return 'sm';
  };

  // 테두리 스타일
  const getBorderProps = () => {
    if (state === 'focused') {
      return {
        borderWidth: 'thin' as const,
        borderColor: 'primary-system01-1-rest' as const,
        borderStyle: 'solid' as const
      };
    }
    return {};
  };

  const borderProps = getBorderProps();

  // 컨텐츠 렌더링
  const renderContent = () => {
    // Radio 컴포넌트 렌더링
    if (type === 'radio-component') {
      return (
        <Radio
          name={radioName}
          value={radioValue}
          label={children as string}
          checked={radioChecked || false}
          disabled={disabled}
          onChange={onRadioChange}
          showLabel={true}
        />
      );
    }
    
    // Checkbox 컴포넌트 렌더링
    if (type === 'checkbox-component') {
      return (
        <Checkbox
          name={checkboxName}
          value={checkboxValue}
          label={children as string}
          checked={checkboxChecked || false}
          indeterminate={checkboxIndeterminate || false}
          disabled={disabled}
          onChange={onCheckboxChange}
          showLabel={true}
        />
      );
    }
    
    // 기본 텍스트 렌더링
    return (
      <Text
        variant={getTextVariant()}
        weight={getFontWeight()}
        color={undefined} // Surface의 foreground 상속
      >
        {children}
      </Text>
    );
  };

  return (
    <Surface
      ref={ref}
      background={getBackgroundColor()}
      foreground={getForegroundColor()}
      borderRadius="md"
      {...borderProps}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none'
      }}
      onClick={disabled ? undefined : handleClick}
      onMouseEnter={disabled ? undefined : handleMouseEnter}
      onMouseLeave={disabled ? undefined : handleMouseLeave}
      onMouseDown={disabled ? undefined : handleMouseDown}
      onMouseUp={disabled ? undefined : handleMouseUp}
      {...rest}
    >
      <Sizing height="lg" width="100%"> {/* 32px */}
        <Frame display="flex" align="center" padding={getPadding()} fill>
          {renderContent()}
        </Frame>
      </Sizing>
    </Surface>
  );
});

OptionList.displayName = 'OptionList'; 