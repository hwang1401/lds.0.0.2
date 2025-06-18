import React from 'react';
import { Surface, Frame, Sizing, IconName } from 'lumir-design-system-shared';
import { Badge, BadgeProps } from '../Badge';
import { Button, ButtonProps } from '../Button';
import { TextDisplay, TextDisplayProps } from '../TextDisplay';

// Sizing 컴포넌트의 이미지 관련 타입들
type ObjectFitValue = 'fill' | 'contain' | 'cover' | 'none' | 'scaleDown' | 'stretch' | 'fitInside' | 'fillArea' | 'crop';
type ObjectPositionValue = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'cropCenter' | 'cropTop' | 'cropBottom' | 'cropLeft' | 'cropRight' | 'cropTopLeft' | 'cropTopRight' | 'cropBottomLeft' | 'cropBottomRight';
type AspectRatioValue = 'square' | 'landscape.classic' | 'landscape.wide' | 'landscape.ultraWide' | 'landscape.film' | 'portrait.classic' | 'portrait.tall' | 'portrait.book';

// Button 컴포넌트의 타입들
type ButtonVariant = 'filled' | 'outlined' | 'transparent';
type ButtonType = 'text-icon' | 'text-only' | 'icon-only';
type ButtonColorScheme = 'primary' | 'secondary' | 'cta';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonPosition = 'top-right' | 'bottom-full' | 'bottom-right';

export interface CardProps {
  /** 카드 variant (스타일 변형) */
  variant?: 'filled' | 'outlined' | 'transparent';
  
  /** 카드 메인 제목 (상품명, 이름 등) */
  title: string;
  
  /** 제목 옆에 표시할 뱃지 */
  badge?: {
    text: string;
    color?: BadgeProps['color'];
    iconName?: IconName;
    size?: BadgeProps['size'];
    style?: BadgeProps['style'];
    layout?: BadgeProps['layout'];
    type?: BadgeProps['type'];
  };
  /** 뱃지 표시 여부 */
  showBadge?: boolean;
  
  /** 상세 설명 텍스트 (브랜드명) */
  description?: string;
  
  /** 추가 정보 텍스트 (일정 등) */
  additionalInfo?: string;
  
  /** 상태 텍스트 */
  statusText?: string;
  
  /** 액션 버튼 설정 (Button 컴포넌트 props 제어) */
  actionButton?: {
    /** 버튼 텍스트 */
    text?: string;
    /** 버튼에 표시할 아이콘 */
    iconName?: IconName;
    /** 버튼 클릭 이벤트 */
    onClick?: ButtonProps['onClick'];
    /** 버튼 비활성화 상태 */
    disabled?: ButtonProps['disabled'];
    /** 버튼 로딩 상태 */
    isLoading?: ButtonProps['isLoading'];
    /** 추가 Button props */
    buttonProps?: Partial<ButtonProps>;
  };
  /** 액션 버튼 표시 여부 */
  showActionButton?: boolean;

  /** 이미지 URL (프로필, 상품 이미지 등) */
  imageUrl?: string;
  /** 이미지 영역 표시 여부 */
  showImage?: boolean;
  /** 이미지 높이 (기본값: 242px) */
  imageHeight?: string | number;
  /** 이미지 object-fit 설정 (기본값: cover) */
  imageObjectFit?: ObjectFitValue;
  /** 이미지 object-position 설정 (기본값: center) */
  imageObjectPosition?: ObjectPositionValue;
  /** 이미지 aspect-ratio 설정 */
  imageAspectRatio?: AspectRatioValue;

  // TextDisplay 컴포넌트의 모든 props를 Card에서 직접 제어
  /** TextDisplay 크기 */
  size?: TextDisplayProps['size'];
  /** 텍스트 정렬 */
  textStyle?: TextDisplayProps['style'];
  /** 라벨 표시 여부 */
  showLabel?: boolean;
  /** 라벨 텍스트 */
  labelText?: string;
  /** 설명 표시 여부 */
  showDescription?: boolean;
  /** 캡션 표시 여부 */
  showCaption?: boolean;
  /** 캡션 텍스트 */
  captionText?: string;
  
  /** 클릭 이벤트 */
  onClick?: () => void;
  
  /** 커스텀 클래스명 */
  className?: string;

  /** 카드의 너비 (반응형 지원) */
  width?: any;
  /** 카드의 최소 너비 (반응형 지원) */
  minWidth?: any;
  /** 카드의 최대 너비 (반응형 지원) */
  maxWidth?: any;

  // Badge 개별 props 제어
  /** 뱃지 텍스트 */
  badgeText?: string;
  /** 뱃지 색상 */
  badgeColor?: BadgeProps['color'];
  /** 뱃지 아이콘 */
  badgeIconName?: IconName;
  /** 뱃지 크기 */
  badgeSize?: BadgeProps['size'];
  /** 뱃지 스타일 (variant) */
  badgeStyle?: BadgeProps['style'];
  /** 뱃지 레이아웃 */
  badgeLayout?: BadgeProps['layout'];
  /** 뱃지 형태 */
  badgeType?: BadgeProps['type'];

  // Button 개별 props 제어
  /** 버튼 variant */
  buttonVariant?: ButtonVariant;
  /** 버튼 타입 */
  buttonType?: ButtonType;
  /** 버튼 색상 스키마 */
  buttonColorScheme?: ButtonColorScheme;
  /** 버튼 크기 */
  buttonSize?: ButtonSize;
  /** 버튼 위치 */
  buttonPosition?: ButtonPosition;
  /** 버튼 텍스트 */
  buttonText?: string;
  /** 버튼 아이콘 (leftIcon) */
  buttonIcon?: IconName;
  /** 버튼 오른쪽 아이콘 */
  buttonRightIcon?: IconName;
  /** 버튼 전체 너비 여부 */
  buttonIsFullWidth?: boolean;
  /** 버튼 선택 상태 */
  buttonIsSelected?: boolean;
}

export const Card: React.FC<CardProps> = ({
  // 🚨🚨🚨 실시간 테스트: 이 주석이 콘솔에 보이면 로컬 파일 참조 중! 🚨🚨🚨
  variant = "filled",
  title,
  badge,
  showBadge = true,
  description,
  additionalInfo,
  statusText,
  actionButton,
  showActionButton = true,
  imageUrl,
  showImage = true,
  imageHeight = "242",
  imageObjectFit = "cover",
  imageObjectPosition = "center",
  imageAspectRatio,
  size,
  textStyle,
  showLabel,
  labelText,
  showDescription,
  showCaption,
  captionText,
  onClick,
  className,
  width = '100%',
  minWidth,
  maxWidth, // maxWidth 제한 제거 - Grid에서 자유롭게 확장 가능
  badgeText,
  badgeColor,
  badgeIconName,
  badgeSize,
  badgeStyle,
  badgeLayout,
  badgeType,
  // Button props
  buttonVariant = "filled",
  buttonType = "icon-only",
  buttonColorScheme = "primary",
  buttonSize = "md",
  buttonPosition = "top-right",
  buttonText,
  buttonIcon,
  buttonRightIcon,
  buttonIsFullWidth = false,
  buttonIsSelected = false,
}) => {
  // 🚨 실시간 테스트 로그
  console.log('🚨🚨🚨 Card 컴포넌트 로컬 파일에서 실행 중! 🚨🚨🚨');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleActionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (actionButton?.onClick) {
      actionButton.onClick(e);
    }
  };

  // Variant에 따른 스타일 설정 (System-01 스타일)
  const getCardStyles = () => {
    switch (variant) {
      case 'filled':
        return {
          background: "secondary-system01-1-rest" as const,
          borderColor: "secondary-system01-2-rest" as const,
          borderWidth: "thin" as const,
          borderStyle: "solid" as const,
        };
      case 'outlined':
        return {
          background: undefined,
          borderColor: "secondary-system01-2-rest" as const,
          borderWidth: "thin" as const,
          borderStyle: "solid" as const,
        };
      case 'transparent':
        return {
          background: undefined,
          borderColor: undefined,
          borderWidth: undefined,
          borderStyle: undefined,
        };
      default:
        return {
          background: "secondary-system01-1-rest" as const,
          borderColor: "secondary-system01-2-rest" as const,
          borderWidth: "thin" as const,
          borderStyle: "solid" as const,
        };
    }
  };

  const cardStyles = getCardStyles();

  return (
    <Sizing width={width} minWidth={minWidth} maxWidth={maxWidth} className={className}>
      <Surface
        borderRadius={variant === 'transparent' ? undefined : "sm"} // System-01: 작은 radius (4px)
        background={cardStyles.background}
        borderColor={cardStyles.borderColor}
        borderWidth={cardStyles.borderWidth}
        borderStyle={cardStyles.borderStyle}
        onClick={handleClick}
        style={{
          cursor: onClick ? 'pointer' : 'default'
        }}
      >
        {/* System-01 스타일: 더 촘촘한 패딩과 간격 */}
        <Frame display="flex" direction="column" gap="md" padding={variant === 'transparent' ? undefined : "md"}>
          
          {/* 이미지 컨테이너: 높이, border-radius (조건부 렌더링) */}
          {showImage && (
            <Sizing 
              height={imageHeight}
              aspectRatio={imageAspectRatio}
            >
              <Surface
                borderRadius="sm" // System-01: 작은 radius
              >
                {imageUrl ? (
                  <Sizing 
                    width="100%" 
                    height="100%"
                    objectFit={imageObjectFit}
                    objectPosition={imageObjectPosition}
                  >
                    <img
                      src={imageUrl}
                      alt={title}
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </Sizing>
                ) : (
              <Frame 
                display="flex"
                    align="center" 
                    justify="center" 
                    fill
                  >
                  <TextDisplay
                      size="lg"
                      style="center"
                      primaryText="Product"
                  />
                </Frame>
                )}
              </Surface>
            </Sizing>
          )}

          {/* 콘텐츠 영역: 버튼 위치에 따라 레이아웃 변경 */}
          {buttonPosition === 'bottom-full' ? (
            /* bottom-full: 텍스트 아래에 full-width 버튼 */
            <Frame display="flex" direction="column" gap="sm"> {/* System-01: 더 작은 간격 */}
              {/* 텍스트 영역 */}
              <Frame display="flex" direction="column" gap="xs">
                {/* 뱃지 (TextDisplay 상단에 표시) - 조건부 렌더링 */}
                {showBadge && (badge || badgeText) && (
                  <Badge
                    text={badgeText || badge?.text || 'Badge'}
                    color={badgeColor || badge?.color || 'primary'}
                    iconName={badgeIconName || badge?.iconName}
                    size={badgeSize || badge?.size || 'sm'}
                    style={badgeStyle || badge?.style || 'filled'}
                    layout={badgeLayout || badge?.layout || 'only text'}
                    type={badgeType || badge?.type || 'round-square'}
                  />
                )}
                
                {/* TextDisplay 컴포넌트 */}
                <TextDisplay
                  size={size || 'md'}
                  style={textStyle || 'left'}
                  primaryText={title}
                  showLabel={showLabel}
                  labelText={labelText}
                  showDescription={showDescription && !!description}
                  descriptionText={description}
                  showCaption={showCaption}
                  captionText={captionText}
                />
              </Frame>
              
              {/* Full-width 버튼 */}
              {showActionButton && (
                <Button
                  variant={buttonVariant}
                  buttonType={buttonType}
                  colorScheme={buttonColorScheme}
                  size={buttonSize}
                  leftIcon={buttonIcon || actionButton?.iconName || 'LineIconsPlusPlusIcon'}
                  rightIcon={buttonRightIcon}
                  isFullWidth={true}
                  isSelected={buttonIsSelected}
                  disabled={actionButton?.disabled}
                  isLoading={actionButton?.isLoading}
                  onClick={handleActionClick}
                  {...actionButton?.buttonProps}
                >
                  {buttonText}
                </Button>
              )}
            </Frame>
          ) : buttonPosition === 'bottom-right' ? (
            /* bottom-right: 전체를 세로로 배치하고 마지막에 우측 정렬 버튼 */
            <Frame display="flex" direction="column" gap="sm">
              {/* 텍스트 영역 */}
              <Frame display="flex" direction="column" gap="xs">
                {/* 뱃지 (TextDisplay 상단에 표시) - 조건부 렌더링 */}
                {showBadge && (badge || badgeText) && (
                  <Badge
                    text={badgeText || badge?.text || 'Badge'}
                    color={badgeColor || badge?.color || 'primary'}
                    iconName={badgeIconName || badge?.iconName}
                    size={badgeSize || badge?.size || 'sm'}
                    style={badgeStyle || badge?.style || 'filled'}
                    layout={badgeLayout || badge?.layout || 'only text'}
                    type={badgeType || badge?.type || 'round-square'}
                  />
                )}
                
                {/* TextDisplay 컴포넌트 */}
                <TextDisplay
                  size={size || 'md'}
                  style={textStyle || 'left'}
                  primaryText={title}
                  showLabel={showLabel}
                  labelText={labelText}
                  showDescription={showDescription && !!description}
                  descriptionText={description}
                  showCaption={showCaption}
                  captionText={captionText}
                />
              </Frame>
              
              {/* 우측 정렬 버튼 */}
              {showActionButton && (
                <Frame display="flex" justify="flex-end">
                  <Button
                    variant={buttonVariant}
                    buttonType={buttonType}
                    colorScheme={buttonColorScheme}
                    size={buttonSize}
                    leftIcon={buttonIcon || actionButton?.iconName || 'LineIconsPlusPlusIcon'}
                    rightIcon={buttonRightIcon}
                    isFullWidth={buttonIsFullWidth}
                    isSelected={buttonIsSelected}
                    disabled={actionButton?.disabled}
                    isLoading={actionButton?.isLoading}
                      onClick={handleActionClick}
                    {...actionButton?.buttonProps}
                  >
                    {buttonText}
                  </Button>
                    </Frame>
                  )}
                </Frame>
          ) : (
            /* top-right (기본): 기존 가로 배치 */
            <Frame display="flex" direction="row" justify="space-between" align="flex-start" gap="md"> {/* System-01: 더 작은 간격 */}
              {/* 텍스트 영역: 세로 배치로 뱃지를 상단에 배치 */}
              <Frame display="flex" direction="column" gap="xs">
                {/* 뱃지 (TextDisplay 상단에 표시) - 조건부 렌더링 */}
                {showBadge && (badge || badgeText) && (
                  <Badge
                    text={badgeText || badge?.text || 'Badge'}
                    color={badgeColor || badge?.color || 'primary'}
                    iconName={badgeIconName || badge?.iconName}
                    size={badgeSize || badge?.size || 'sm'}
                    style={badgeStyle || badge?.style || 'filled'}
                    layout={badgeLayout || badge?.layout || 'only text'}
                    type={badgeType || badge?.type || 'round-square'}
                  />
                )}
                
                {/* TextDisplay 컴포넌트 */}
                <TextDisplay
                  size={size || 'md'}
                  style={textStyle || 'left'}
                  primaryText={title}
                  showLabel={showLabel}
                  labelText={labelText}
                  showDescription={showDescription && !!description}
                  descriptionText={description}
                  showCaption={showCaption}
                  captionText={captionText}
                />
              </Frame>
              
              {/* 액션 버튼 - Button 컴포넌트 사용 (조건부 렌더링) */}
              {showActionButton && (
                <Button
                  variant={buttonVariant}
                  buttonType={buttonType}
                  colorScheme={buttonColorScheme}
                  size={buttonSize}
                  leftIcon={buttonIcon || actionButton?.iconName || 'LineIconsPlusPlusIcon'}
                  rightIcon={buttonRightIcon}
                  isFullWidth={buttonIsFullWidth}
                  isSelected={buttonIsSelected}
                  disabled={actionButton?.disabled}
                  isLoading={actionButton?.isLoading}
                  onClick={handleActionClick}
                  {...actionButton?.buttonProps}
                >
                  {buttonText}
                </Button>
              )}
            </Frame>
          )}
        </Frame>
      </Surface>
    </Sizing>
  );
}; 