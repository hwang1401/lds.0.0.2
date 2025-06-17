import React from 'react';
import { Surface, Frame, Text, Asterisk } from '@lumir/shared';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * 라벨 크기
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * 라벨 폰트 두께
   * @default 'regular'
   */
  type?: 'regular' | 'medium' | 'bold';
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 필수 입력 표시 (*)
   * @default false
   */
  asterisk?: boolean;
  
  /**
   * 별표 정렬 위치
   * @default 'top'
   */
  align?: 'top' | 'center';
  
  /**
   * 인터랙션 상태
   */
  interactionState?: 'rest' | 'hovered' | 'pressed' | 'disabled';
  
  /**
   * 추가 클래스
   */
  className?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ 
    size = 'md',
    type = 'regular',
    disabled = false,
    asterisk = false,
    align = 'top',
    interactionState,
    className,
    children,
    ...props 
  }, ref) => {
    // 현재 토큰 시스템에 맞춰 Text variant 매핑
    // 피그마 원본: lg=15px, md=14px, sm=13px
    // 토큰 시스템: lg=16px, md=14px, sm=12px (가장 가까운 값)
    const getTextVariant = () => {
      if (size === 'lg') {
        // 16px - heading-3 계열 사용 (bold=600, medium=500, regular=400)
        return 'heading-3';
      } else if (size === 'md') {
        // 14px - body-2 계열 사용 (bold=700, medium=500, regular=400)  
        return 'body-2';
      } else {
        // 12px - label-2 계열 사용 (bold=700, medium=500, regular=400)
        return 'label-2';
      }
    };

    // 피그마 기준 fontWeight 매핑
    const getFontWeight = () => {
      switch (type) {
        case 'bold': return 'bold';
        case 'medium': return 'medium';
        case 'regular': return 'regular';
        default: return 'regular';
      }
    };

    // 색상 결정 (피그마 기준)
    const getTextColor = () => {
      return disabled ? 'secondary-system02-1-disabled' : 'secondary-system02-1-rest';
    };

    // 상태 결정
    const getCurrentState = (): 'rest' | 'hovered' | 'pressed' | 'disabled' => {
      if (disabled) return 'disabled';
      return interactionState || 'rest';
    };

    return (
      <label
        ref={ref}
        className={className}
        {...props}
      >
        <Surface foreground={getTextColor()}>
          <Frame 
            display="flex"
            align={align === 'center' ? 'center' : 'flex-start'}
            direction="row"
            gap="xxxs"
          >
            <Text
              as="span"
              variant={getTextVariant()}
              weight={getFontWeight()}
            >
              {children}
            </Text>
            
            {asterisk && (
              <Asterisk disabled={disabled} />
            )}
          </Frame>
        </Surface>
      </label>
    );
  }
);

Label.displayName = 'Label'; 