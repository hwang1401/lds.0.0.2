import React, { forwardRef, useState } from 'react';
import { Surface, Frame, Sizing, Icon } from '@lumir/shared';
import { Label } from '../Label';

export interface CheckboxProps {
  /** 체크박스의 체크 상태 */
  checked?: boolean;
  /** 중간 상태 (indeterminate) */
  indeterminate?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 라벨 텍스트 */
  label?: string;
  /** 라벨 표시 여부 */
  showLabel?: boolean;
  /** 체크박스 이름 */
  name?: string;
  /** 체크박스 값 */
  value?: string;
  /** 체크 상태 변경 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 클릭 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** 포커스 핸들러 */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 블러 핸들러 */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 추가 스타일 */
  style?: React.CSSProperties;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked = false,
      indeterminate = false,
      disabled = false,
      label,
      showLabel = true,
      name,
      value,
      onChange,
      onClick,
      onFocus,
      onBlur,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(event.target.checked);
      }
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && onChange) {
        onChange(!checked);
      }
      if (onClick) {
        onClick(event);
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    };

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

    // 배경색 결정
    const getBackgroundColor = () => {
      if (!checked && !indeterminate) {
        // 체크되지 않은 상태는 투명 배경
        if (disabled) return 'secondary-system02-1-disabled';
        if (isPressed) return 'secondary-system02-1-pressed';
        if (isHovered) return 'secondary-system02-1-hovered';
        return 'secondary-system02-1-rest'; // 체크되지 않은 상태는 secondary 색상 사용
      }
      
      // 체크된 상태는 primary 색상 
      if (disabled) return 'primary-system02-1-disabled';
      if (isPressed) return 'primary-system02-1-pressed';
      if (isHovered) return 'primary-system02-1-hovered';
      return 'primary-system02-1-rest';
    };

    // 테두리 색상 결정
    const getBorderColor = () => {
      if (disabled) return 'secondary-system02-2-disabled'; // disabled일 때만 연한 색
      return 'secondary-system02-1-rest'; // 기본 상태는 더 진한 색
    };

    // 체크마크 아이콘 색상 결정
    const getIconColor = () => {
      if (checked || indeterminate) return 'primary-system02-oncolor';
      return 'secondary-system02-1';
    };

    const renderCheckIcon = () => {
      if (indeterminate) {
        return (
          <Surface background="primary-system02-1-rest" borderRadius="xl">
            <Sizing style={{ width: '8px', height: '2px' }} />
          </Surface>
        );
      }
      
      if (checked) {
        return (
          <Icon
            name="LineIconsCheckmarkCheckmarkIcon"
            size="xs"
            color={checked || indeterminate ? "primary-system02" : "secondary-system02-1"}
          />
        );
      }
      
      return null;
    };

    return (
      <Frame 
        display="flex"
        direction="row" 
        align="center" 
        gap="sm"
        className={className}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          ...style
        }}
      >
        {/* Hidden native input for accessibility */}
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            position: 'absolute',
            opacity: 0,
            width: 0,
            height: 0,
            margin: 0,
            padding: 0,
            border: 'none'
          }}
          {...props}
        />
        
        {/* Custom checkbox visual */}
        <Surface
          background={getBackgroundColor()}
                      foreground={checked || indeterminate ? "primary-system02-oncolor" : "secondary-system02-1-rest"}
          borderRadius="xl"
          borderWidth="thin"
          borderStyle="solid"
          borderColor={getBorderColor()}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          <Sizing width="sm" height="xxs">
            <Frame 
              display="flex"
              align="center"
              justify="center"
              fill
            >
              {renderCheckIcon()}
            </Frame>
          </Sizing>
        </Surface>
        
        {showLabel && label && (
          <Label
            htmlFor={name}
            disabled={disabled}
            onClick={!disabled ? (() => handleClick({} as React.MouseEvent<HTMLDivElement>)) : undefined}
          >
            {label}
          </Label>
        )}
      </Frame>
    );
  }
);

Checkbox.displayName = 'Checkbox'; 