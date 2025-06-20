import React, { forwardRef, useState } from 'react';
import { Surface, BackgroundToken, StrokeToken, ForegroundToken, Frame, Icon, Text, Sizing } from 'lumir-design-system-shared';
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

    // 체크박스 배경색 결정
    const getBackgroundColor = () => {
      if (checked || indeterminate) {
        if (disabled) return 'primary-system01-1-disabled';
        if (isPressed) return 'primary-system01-1-pressed';
        if (isHovered) return 'primary-system01-1-hovered';
        return 'primary-system01-1-rest'; // 체크된 상태는 primary 색상 사용
      }
      if (disabled) return 'secondary-system01-1-disabled';
      if (isPressed) return 'secondary-system01-1-pressed';
      if (isHovered) return 'secondary-system01-1-hovered';
      return 'secondary-system01-1-rest'; // 체크되지 않은 상태는 secondary 색상 사용
    };

    // 체크박스 테두리 색상 결정
    const getBorderColor = () => {
      if (checked || indeterminate) {
        if (disabled) return 'primary-system01-1-disabled';
        return 'primary-system01-1-rest';
      }
      if (disabled) return 'secondary-system01-2-disabled'; // disabled일 때만 연한 색
      return 'secondary-system01-1-rest'; // 기본 상태는 더 진한 색
    };

    // 전경색 결정
    const getForegroundColor = () => {
      if (checked || indeterminate) {
        return 'primary-system01-oncolor'; // 체크된 상태에서 아이콘 색상
      }
      return 'secondary-system01-1-rest';
    };

    const renderCheckIcon = () => {
      if (indeterminate) {
        return (
          <Surface background="secondary-system01-inverse-rest" borderRadius="sm">
            <Sizing style={{ width: '8px', height: '2px' }} />
          </Surface>
        );
      }
      
      if (checked) {
        return (
          <Icon
            name="LineIconsCheckmarkCheckmarkIcon"
            size="xs"
          />
        );
      }
      
      return null;
    };

    // children과 dangerouslySetInnerHTML을 제외한 나머지 props
    const { children, dangerouslySetInnerHTML, ...inputProps } = props as any;

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
          {...inputProps}
        />
        
        {/* Custom checkbox visual */}
        <Surface
          background={getBackgroundColor()}
          foreground={getForegroundColor()}
          borderRadius="sm"
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