import React, { forwardRef } from 'react';
import { Text, Icon } from '@lumir/shared';
import { ResponsiveOrSingle } from '@lumir/shared';

// Link variant 타입
type LinkVariant = 'default' | 'subtle' | 'prominent';

// 인터랙션 상태 타입
type InteractionState = 'rest' | 'hovered' | 'pressed' | 'visited' | 'disabled';

// 링크 색상 타입
type LinkColor = 
  | 'primary-foreground-1' | 'primary-foreground-2'
  | 'secondary-foreground-1' | 'secondary-foreground-2' | 'secondary-foreground-3'
  | 'cta-foreground-1' | 'cta-foreground-2'
  | 'status-error' | 'status-warning' | 'status-success' | 'status-info';

// 링크 크기 타입 (Text variant와 동일)
type LinkSize = 
  | 'hero-1' | 'hero-2' | 'title-1' | 'title-2'
  | 'heading-1' | 'heading-2' | 'heading-3'
  | 'body-1' | 'body-2' | 'reading'
  | 'label-1' | 'label-2'
  | 'caption-1' | 'caption-2' | 'caption-3';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  /**
   * Link의 스타일 변형을 지정합니다.
   * default: 기본 링크 스타일, subtle: 은은한 스타일, prominent: 강조 스타일
   */
  variant?: LinkVariant;
  
  /**
   * Link의 크기를 지정합니다.
   */
  size?: ResponsiveOrSingle<LinkSize>;
  
  /**
   * Link의 색상을 지정합니다.
   */
  color?: LinkColor;
  
  /**
   * 인터랙션 상태를 설정합니다.
   */
  interactionState?: InteractionState;
  
  /**
   * 밑줄 표시 여부를 지정합니다.
   */
  underline?: 'none' | 'always' | 'hover';
  
  /**
   * 외부 링크 여부를 지정합니다. true일 경우 새 탭에서 열리며 아이콘이 표시됩니다.
   */
  external?: boolean;
  
  /**
   * 비활성화 상태를 지정합니다.
   */
  disabled?: boolean;
  
  /**
   * 링크 텍스트를 지정합니다.
   */
  children: React.ReactNode;
}

/**
 * Link 컴포넌트는 다른 페이지나 외부 사이트로 이동하는 컴파운드 컴포넌트입니다.
 * Text와 Icon 프리미티브를 조합하여 만들어지며, 다양한 크기, 색상, 상태를 지원하고 접근성을 고려한 설계가 적용되어 있습니다.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  variant = 'default',
  size = 'body-1',
  color = 'primary-foreground-1',
  interactionState = 'rest',
  underline = 'hover',
  external = false,
  disabled = false,
  children,
  className,
  target,
  rel,
  onClick,
  style,
  ...rest
}, ref) => {
  
  // 현재 상태에 따른 색상 결정
  const getCurrentColor = () => {
    if (disabled) return `${color}--disabled` as any;
    return `${color}--${interactionState}` as any;
  };
  
  // 텍스트 스타일 결정
  const getTextStyle = () => {
    const baseStyle: React.CSSProperties = {
      textDecoration: underline === 'always' ? 'underline' : 
                     underline === 'hover' ? undefined : 'none',
      opacity: variant === 'subtle' ? 0.7 : 1,
      fontWeight: variant === 'prominent' ? 600 : undefined,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    };
    
    return baseStyle;
  };
  
  // 외부 링크 props 처리
  const externalProps = external ? {
    target: target || '_blank',
    rel: rel || 'noopener noreferrer'
  } : { target, rel };
  
  // 클릭 핸들러
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };
  
  return (
    <a
      ref={ref}
      className={className}
      onClick={handleClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--semantic-spacingHor-global-xxxs)',
        textDecoration: 'none',
        outline: 'none',
        transition: 'all var(--semantic-animation-duration-transition-button) var(--semantic-animation-easing-interaction-button)',
        ...style
      }}
      {...externalProps}
      {...rest}
    >
      <Text 
        variant={size} 
        color={getCurrentColor()}
        style={getTextStyle()}
      >
        {children}
      </Text>
      {external && (
        <Icon 
          name="ExternalLinkIcon" 
          size="xs" 
          color={getCurrentColor()}
          style={{ opacity: 0.7 }}
        />
      )}
    </a>
  );
});

Link.displayName = 'Link'; 