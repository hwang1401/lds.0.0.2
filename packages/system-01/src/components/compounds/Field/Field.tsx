import React, { forwardRef, useState } from 'react';
import { Surface, Frame, Sizing, HeightValue, Text, Icon, IconName } from 'lumir-shared';
import { ResponsiveOrSingle } from 'lumir-shared';
import { Label } from '../Label';

export interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 필드의 스타일 변형을 지정합니다.
   */
  variant?: 'outlined' | 'transparent' | 'filled';
  
  /**
   * 라벨의 위치를 지정합니다.
   */
  labelPosition?: 'above' | 'before' | 'none';
  
  /**
   * 필드의 크기를 지정합니다.
   */
  size?: 'md' | 'lg' | 'xlg';
  
  /**
   * 필드의 너비를 지정합니다.
   * - 'fit-content': 내용에 맞춰 크기 조절
   * - 'fill-width': 부모 요소 너비에 맞게 조절 (100%)
   * - 커스텀 값: 직접 너비 지정 (예: '200px', '50%')
   */
  fieldWidth?: 'fit-content' | 'fill-width' | ResponsiveOrSingle<string | number>;
  
  /**
   * 필드의 최소 너비를 지정합니다. (기본값: 80px)
   */
  minWidth?: string | number;
  
  /**
   * fit-content일 때 텍스트가 길면 말줄임표로 처리할지 여부
   */
  truncateOnFit?: boolean;
  
  /**
   * 라벨 텍스트
   */
  label?: string;
  
  /**
   * 필수 입력 표시 (*)
   */
  required?: boolean;
  
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  
  /**
   * 에러 상태
   */
  error?: boolean;
  
  /**
   * 에러 메시지
   */
  errorMessage?: string;
  
  /**
   * 도움말 텍스트
   */
  helperText?: string;
  
  /**
   * 플레이스홀더 텍스트
   */
  placeholder?: string;
  
  /**
   * 입력 값
   */
  value?: string;
  
  /**
   * 입력 타입
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  
  /**
   * 필드의 왼쪽에 표시될 아이콘 이름을 지정합니다.
   */
  leftIcon?: IconName;
  
  /**
   * 필드의 오른쪽에 표시될 아이콘 이름을 지정합니다.
   */
  rightIcon?: IconName;
  
  /**
   * 값 변경 이벤트 핸들러
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * 포커스 이벤트 핸들러
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 블러 이벤트 핸들러
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Field 컴포넌트는 사용자 입력을 받기 위한 텍스트 필드입니다.
 * outlined, transparent, filled 스타일을 지원하며, 라벨 위치를 다양하게 설정할 수 있습니다.
 */
export const Field = forwardRef<HTMLInputElement, FieldProps>(({
  variant = 'outlined',
  labelPosition = 'above',
  size = 'md',
  fieldWidth,
  minWidth,
  truncateOnFit,
  label,
  required = false,
  disabled = false,
  error = false,
  errorMessage,
  helperText,
  placeholder,
  value,
  type = 'text',
  leftIcon,
  rightIcon,
  onChange,
  onFocus,
  onBlur,
  onClick,
  className,
  style,
  ...rest
}, ref) => {
  
  // 상태 관리 추가
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  // 이벤트 핸들러들
  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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

  // 현재 상태 결정
  const getCurrentState = (): 'rest' | 'hovered' | 'pressed' | 'disabled' => {
    if (disabled) return 'disabled';
    if (isFocused) return 'pressed'; // 포커스된 상태를 pressed로 처리
    if (isHovered) return 'hovered';
    return 'rest';
  };
  
  // 사이즈별 고정 높이 매핑
  const heightMap = {
    md: '32px',
    lg: '36px',
    xlg: '40px'
  } as const;

  // 필드 너비 설정
  const getFieldWidth = () => {
    if (fieldWidth === 'fit-content') {
      return 'fit-content';
    }
    if (fieldWidth === 'fill-width') {
      return '100%';
    }
    if (fieldWidth) {
      return fieldWidth;
    }
    return '100%'; // 기본값
  };

  // 최소 너비 설정
  const getMinWidth = () => {
    return minWidth || '80px';
  };

  // 텍스트 색상 결정 (Surface foreground용)
  const getTextColor = () => {
    if (error) return 'error';
    
    if (variant === 'transparent') {
      const state = getCurrentState();
      switch (state) {
        case 'disabled':
          return 'secondary-system01-1-disabled';
        case 'hovered':
          return 'secondary-system01-1-hovered';
        case 'pressed':
          return 'secondary-system01-1-pressed';
        default:
          return 'secondary-system01-1-rest';
      }
    }
    
    return 'secondary-system01-1-rest';
  };

  // input 스타일 결정
  const getInputStyle = () => {
    const baseStyle = {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      color: 'inherit', // Surface foreground 상속
      fontSize: '14px', // body-2와 동일
      fontFamily: 'inherit',
      lineHeight: '1.4',
      fontWeight: '400', // regular
      width: '100%',
      height: '100%'
    };

    if (fieldWidth === 'fit-content') {
      // 현재 값이나 placeholder의 길이에 따라 너비 계산
      const displayText = value || placeholder || '';
      const textLength = displayText.length;
      const dynamicWidth = Math.max(textLength * 0.6 + 2, 4); // 최소 4ch
      
      const fitContentStyle = {
        ...baseStyle,
        width: `${dynamicWidth}ch`,
        minWidth: '4ch', // 최소 4글자 너비
        maxWidth: truncateOnFit ? '25ch' : 'none',
      };

      // truncate 옵션이 활성화된 경우 input에 직접 적용
      if (truncateOnFit) {
        return {
          ...fitContentStyle,
          whiteSpace: 'nowrap' as const,
          overflow: 'hidden' as const,
          textOverflow: 'ellipsis' as const,
          maxWidth: '25ch',
        };
      }

      return fitContentStyle;
    }

    return baseStyle;
  };

  // 필드 배경색 결정 (상태별)
  const getFieldBackgroundColor = () => {
    if (variant !== 'filled') return undefined;
    
    const state = getCurrentState();
    switch (state) {
      case 'disabled':
        return 'secondary-system01-1-disabled';
      case 'hovered':
        return 'secondary-system01-1-hovered';
      case 'pressed':
        return 'secondary-system01-1-pressed';
      default:
        return 'secondary-system01-1-rest';
    }
  };

  // 필드 테두리 설정 (상태별)
  const getFieldBorderProps = () => {
    if (variant === 'transparent') {
      return {
        borderWidth: undefined,
        borderColor: undefined
      };
    }
    
    if (error) {
      return {
        borderWidth: 'thin' as const,
        borderColor: 'error' as const
      };
    }
    
    // outlined의 경우 상태별 테두리 색상
    const state = getCurrentState();
    let borderColor: 'secondary-system01-1-rest' | 'secondary-system01-1-hovered' | 'secondary-system01-1-pressed' | 'secondary-system01-1-disabled' = 'secondary-system01-1-rest';
    
    switch (state) {
      case 'disabled':
        borderColor = 'secondary-system01-1-disabled';
        break;
      case 'hovered':
        borderColor = 'secondary-system01-1-hovered';
        break;
      case 'pressed':
        borderColor = 'secondary-system01-1-pressed';
        break;
      default:
        borderColor = 'secondary-system01-1-rest';
    }
    
    return {
      borderWidth: 'thin' as const,
      borderColor
    };
  };

  // 아이콘 색상 결정
  const getIconColor = () => {
    if (disabled) return 'disabled';
    if (error) return 'status-error';
    return 'secondary-system01-3';
  };

  // 상태별 interactionState 적용 방식 결정
  const shouldApplyInteractionToBox = () => {
    return variant === 'filled' || variant === 'outlined'; // outlined에서도 Box에 적용 (border 색상용)
  };

  const shouldApplyInteractionToText = () => {
    return variant === 'transparent';
  };

  // 사이즈별 높이 토큰 매핑
  const getSizingHeight = (): HeightValue => {
    switch (size) {
      case 'md':
        return 'lg'; // 32px
      case 'lg':
        return 'xl'; // 36px  
      case 'xlg':
        return 'xxl'; // 40px
      default:
        return 'lg';
    }
  };

  // 라벨 컴포넌트 렌더링
  const renderLabel = () => {
    if (!label || labelPosition === 'none') return null;
    
    return (
      <Label
        size="md"
        type="regular"
        align="top"
        asterisk={required}
        disabled={disabled}
      >
        {label}
      </Label>
    );
  };

  // 입력 필드 렌더링
  const renderInputField = () => {
    const borderProps = getFieldBorderProps();
    
    return (
      <Surface
        background={getFieldBackgroundColor()}
        foreground={getTextColor()}
        borderWidth={borderProps.borderWidth}
        borderColor={borderProps.borderColor}
        borderStyle={borderProps.borderWidth ? 'solid' : 'none'}
        borderRadius="md"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={className}
        style={{
          width: getFieldWidth() as string,
          minWidth: getMinWidth() as string,
          ...style
        }}
      >
        <Sizing height={getSizingHeight()}>
          <Frame
            display="flex"
            direction="row"
            align="center"
            justify="flex-start"
            gap="sm"
            fill
            padding="md"
            style={{
              cursor: onClick ? 'pointer' : 'text'
            }}
          >
            {leftIcon && (
              <Icon
                name={leftIcon}
                size="sm"
                color={getIconColor()}
              />
            )}
            
            <Frame 
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <input
                ref={ref}
                type={type}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={getInputStyle()}
                {...rest}
              />
            </Frame>
            
            {rightIcon && (
              <Icon
                name={rightIcon}
                size="sm"
                color={getIconColor()}
              />
            )}
          </Frame>
        </Sizing>
      </Surface>
    );
  };

  // 도움말/에러 메시지 렌더링
  const renderMessage = () => {
    const message = error ? errorMessage : helperText;
    if (!message) return null;

    // 헬퍼 텍스트 색상 결정 (연한 secondary 색상 사용)
    const getHelperTextColor = () => {
      if (disabled) return 'secondary-system01-3-disabled';
      if (error) return 'error';
      return 'secondary-system01-3-rest'; // 기본 텍스트보다 연한 색상
    };

    return (
      <Surface foreground={getHelperTextColor()}>
        <Text variant="caption-1">
          {message}
        </Text>
      </Surface>
    );
  };

  // 라벨 위치에 따른 레이아웃 결정
  if (labelPosition === 'before') {
    return (
      <Frame display="flex" direction="row" gap="md" align="flex-start">
        {renderLabel()}
        <Frame display="flex" direction="column" gap="xxs" flex={1}>
          {renderInputField()}
          {renderMessage()}
        </Frame>
      </Frame>
    );
  }

  // labelPosition이 'above' 또는 'none'인 경우
  return (
    <Frame display="flex" direction="column" gap="xxs">
      {renderLabel()}
      {renderInputField()}
      {renderMessage()}
    </Frame>
  );
});

Field.displayName = 'Field'; 