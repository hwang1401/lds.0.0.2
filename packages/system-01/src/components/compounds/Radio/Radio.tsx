import React, { forwardRef, useState } from 'react';
import { Surface, Frame, Sizing, Icon } from '@lumir/shared';
import { Label } from '../Label';

export interface RadioProps {
  /** 라디오 버튼의 선택 상태 */
  checked?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 라벨 텍스트 */
  label?: string;
  /** 라벨 표시 여부 */
  showLabel?: boolean;
  /** 라디오 버튼 이름 (같은 그룹의 라디오 버튼들은 같은 name을 가져야 함) */
  name?: string;
  /** 라디오 버튼 값 */
  value?: string;
  /** 라디오 버튼 스타일 */
  variant?: 'radio' | 'checkmark';
  /** 선택 상태 변경 핸들러 */
  onChange?: (value: string) => void;
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

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      checked = false,
      disabled = false,
      label,
      showLabel = true,
      name,
      value,
      variant = 'radio',
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
      if (!disabled && onChange && value) {
        onChange(value);
      }
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && onChange && value) {
        onChange(value);
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

    // 현재 상태 결정
    const getCurrentState = (): 'rest' | 'hovered' | 'pressed' | 'disabled' => {
      if (disabled) return 'disabled';
      if (isPressed) return 'pressed';
      if (isHovered) return 'hovered';
      return 'rest';
    };

    // 라디오 버튼 배경색 결정 (기존 secondary-1 로직 유지)
    const getBackgroundColor = () => {
      const state = getCurrentState();
      switch (state) {
        case 'disabled':
          return 'secondary-system01-2-disabled';
        case 'pressed':
          return 'secondary-system01-2-pressed';
        case 'hovered':
          return 'secondary-system01-2-hovered';
        default:
          return 'secondary-system01-2-rest';
      }
    };

    // 라디오 버튼 테두리 색상 결정 (기존 secondary-stroke-1 로직 유지)
    const getBorderColor = () => {
      const state = getCurrentState();
      switch (state) {
        case 'disabled':
          return 'secondary-system01-3-disabled';
        case 'pressed':
          return 'secondary-system01-2-pressed';
        case 'hovered':
          return 'secondary-system01-1-hovered';
        default:
          return 'secondary-system01-1-rest';
      }
    };

    // 내부 원/체크마크 배경색 결정 (기존 primary-1 로직 유지)
    const getInnerBackgroundColor = () => {
      const state = getCurrentState();
      switch (state) {
        case 'disabled':
          return 'primary-system01-1-disabled';
        case 'pressed':
          return 'primary-system01-1-pressed';
        case 'hovered':
          return 'primary-system01-1-hovered';
        default:
          return 'primary-system01-1-rest';
      }
    };

    // 내부 표시 렌더링
    const renderInnerContent = () => {
      if (!checked) return null;
      
      if (variant === 'checkmark') {
        return (
          <Icon
            name="LineIconsCheckmarkCheckmarkIcon"
            size="xs"
            color="primary-system01"
          />
        );
      }
      
      // radio 스타일: 내부 원 (기존 6px x 6px 크기 유지)
      return (
        <Sizing width="6px" height="6px">
          <Surface 
            background={getInnerBackgroundColor()}
            borderRadius="circular"
            fill
          />
        </Sizing>
      );
    };

    return (
      <Frame 
        display="flex"
        direction="row"
        align="center" 
        gap="sm"
        className={className}
        style={style}
      >
        {/* Hidden native input for accessibility */}
        <input
          ref={ref}
          type="radio"
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
        
        {/* Custom radio visual (기존 16px x 16px 크기 유지) */}
        <Sizing width="16px" height="16px">
          <Surface
            background={getBackgroundColor()}
            borderRadius={variant === 'checkmark' ? 'sm' : 'circular'}
            borderWidth="thin"
            borderColor={getBorderColor()}
            borderStyle="solid"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
            fill
          >
            <Frame
              display="flex"
              direction="column"
              align="center"
              justify="center"
              fill
            >
              {renderInnerContent()}
            </Frame>
          </Surface>
        </Sizing>
        
        {showLabel && label && (
          <Label
            htmlFor={name}
            disabled={disabled}
            interactionState={getCurrentState()}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
            onClick={!disabled ? (() => handleClick({} as React.MouseEvent<HTMLDivElement>)) : undefined}
          >
            {label}
          </Label>
        )}
      </Frame>
    );
  }
);

Radio.displayName = 'Radio'; 