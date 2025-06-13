declare module 'lumir-design-components' {
  import { ReactNode, CSSProperties, ElementType } from 'react';

  // 공통 타입 정의
  type SpacingValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  type ColorValue = 'primary' | 'secondary' | 'tertiary' | 'surface' | 'background' | 'transparent';
  type RadiusValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  type BorderValue = 'none' | 'thin' | 'medium' | 'thick';
  type ShadowValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  // Box 컴포넌트 타입 정의
  export interface BoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    paddingTop?: SpacingValue;
    paddingBottom?: SpacingValue;
    paddingLeft?: SpacingValue;
    paddingRight?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    marginTop?: SpacingValue;
    marginBottom?: SpacingValue;
    marginLeft?: SpacingValue;
    marginRight?: SpacingValue;
    backgroundColor?: ColorValue;
    color?: ColorValue;
    borderRadius?: RadiusValue;
    borderWidth?: BorderValue;
    borderColor?: ColorValue;
    shadow?: ShadowValue;
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    children?: ReactNode;
  }

  export const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;

  // Stack 컴포넌트 타입 정의
  type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
  type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  type Align = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

  export interface StackProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    direction?: Direction;
    spacing?: SpacingValue;
    justify?: Justify;
    align?: Align;
    wrap?: Wrap;
    divider?: React.ReactElement;
    inline?: boolean;
    children: ReactNode;
  }

  export const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;

  // Grid 컴포넌트 타입 정의
  type AlignValue = 'start' | 'end' | 'center' | 'stretch';
  type JustifyValue = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';

  export interface GridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    columns?: number | string;
    rows?: number | string;
    columnGap?: SpacingValue;
    rowGap?: SpacingValue;
    gap?: SpacingValue;
    alignItems?: AlignValue;
    justifyItems?: JustifyValue;
    alignContent?: AlignValue;
    justifyContent?: JustifyValue;
    templateAreas?: string;
    autoColumns?: string;
    autoRows?: string;
    autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
    children: ReactNode;
  }

  export const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;

  export interface GridItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
    area?: string;
    colStart?: number;
    colEnd?: number;
    colSpan?: number;
    rowStart?: number;
    rowEnd?: number;
    rowSpan?: number;
    children: ReactNode;
  }

  export const GridItem: React.ForwardRefExoticComponent<GridItemProps & React.RefAttributes<HTMLDivElement>>;

  // Icon 컴포넌트 타입 정의
  export type IconName = 'activity' | 'all-done' | 'archive' | 'at' | 'award' | 'backspace' | 'behance' | 'blank' | 'bluetooth' | 'book-open' | 'bookmark' | 'briefcase' | 'browser' | 'brush' | 'bulb' | 'calendar' | 'calendar-white' | 'camera' | 'car' | 'cast' | 'clipboard' | 'clock' | 'code' | 'code-download' | 'collapse' | 'color-palette' | 'color-picker' | 'compass' | 'copy' | 'credit-card' | 'crop' | 'cube' | 'darkmode' | 'download' | 'email' | 'expand' | 'external-link' | 'film' | 'fire' | 'flag' | 'fold' | 'funnel' | 'gift' | 'github' | 'grid' | 'hard-drive' | 'hash' | 'header-dots' | 'headphones' | 'heart' | 'height' | 'home' | 'image' | 'inbox' | 'info' | 'keypad' | 'layers' | 'layout' | 'lightdark' | 'lightmode' | 'list' | 'loader' | 'lock' | 'map' | 'maximize' | 'menu-4' | 'minimize' | 'monitor' | 'moon' | 'move' | 'music' | 'npm' | 'paper-plane' | 'pause-circle' | 'percent' | 'pie-chart' | 'pin' | 'play-circle' | 'power' | 'pricetag' | 'printer' | 'recording' | 'refresh' | 'repeat' | 'save' | 'scissors' | 'search' | 'shake' | 'share' | 'slash' | 'smartphone' | 'speaker' | 'square' | 'stop-circle' | 'sun' | 'swap' | 'sync' | 'text' | 'timer' | 'tv' | 'umbrella' | 'undo' | 'unlock' | 'upload' | 'weight' | 'alert-circle' | 'alert-triangle' | 'arrow-arrow-1-down' | 'arrow-arrow-1-left' | 'arrow-arrow-1-right' | 'arrow-arrow-1-up' | 'arrow-arrow-2-down' | 'arrow-arrow-2-left' | 'arrow-arrow-2-right' | 'arrow-arrow-2-up' | 'arrow-arrow-3-down' | 'arrow-arrow-3-left' | 'arrow-arrow-3-right' | 'arrow-arrow-3-up' | 'arrow-arrowhead-down' | 'arrow-arrowhead-left' | 'arrow-arrowhead-right' | 'arrow-arrowhead-up' | 'arrow-chevron-down' | 'arrow-chevron-left' | 'arrow-chevron-right' | 'arrow-chevron-up' | 'arrow-circle-down' | 'arrow-circle-left' | 'arrow-circle-right' | 'arrow-circle-up' | 'arrow-diagonal-left-down' | 'arrow-diagonal-left-up' | 'arrow-diagonal-right-down' | 'arrow-diagonal-right-up' | 'arrow-ios-down' | 'arrow-ios-left' | 'arrow-ios-right' | 'arrow-ios-up' | 'attach-attach-1' | 'attach-attach-2' | 'bar-chart-1' | 'bar-chart-2' | 'battery-battery' | 'batttery-charging' | 'bell-off' | 'bell-on' | 'cart-add-cart' | 'checkmark-checkmark' | 'checkmark-circle-2' | 'checkmark-circle' | 'checkmark-square-2' | 'checkmark-square' | 'close-circle' | 'close-close' | 'close-square' | 'cloud-download' | 'cloud-upload' | 'corner-down-left' | 'corner-down-right' | 'corner-left-down' | 'corner-left-up' | 'corner-right-down' | 'corner-right-up' | 'corner-up-left' | 'corner-up-right' | 'droplet-off' | 'droplet-on' | 'edit-edit-1' | 'edit-edit-2' | 'eye-eye' | 'eye-off-2' | 'eye-off' | 'file-add' | 'file-file' | 'file-remove' | 'file-text' | 'flash-off' | 'flash-on' | 'flip-flip-1' | 'flip-flip-2' | 'folder-add' | 'folder-folder' | 'folder-remove' | 'globe-globe-1' | 'globe-globe-2' | 'link-link-1' | 'link-link-2' | 'log-in' | 'log-out' | 'menu-arrow' | 'menu-menu-2' | 'menu-menu-3' | 'menu-menu' | 'message-circle' | 'message-square' | 'mic-off' | 'mic-on' | 'minus-circle' | 'minus-minus' | 'minus-square' | 'more-horizontal' | 'more-vertical' | 'navigation-navigation-1' | 'navigation-navigation-2' | 'options-options-1' | 'options-options-2' | 'person-add' | 'person-delete' | 'person-done' | 'person-person' | 'person-persones' | 'person-remove' | 'phone-call' | 'phone-missed' | 'phone-off' | 'phone-phone' | 'plus-circle' | 'plus-plus' | 'plus-square' | 'question-mark-circle' | 'question-mark' | 'radio-anten' | 'radio-button-off' | 'radio-button-on' | 'rewind-left' | 'rewind-right' | 'settings-setting-1' | 'settings-setting-2' | 'shield-off' | 'shield-on' | 'shopping-bag' | 'shopping-cart' | 'shuffle-shuffle-1' | 'shuffle-shuffle-2' | 'skip-back' | 'skip-forward' | 'social-facebook' | 'social-google' | 'social-linkedin' | 'social-pantone' | 'social-twitter' | 'star-filled' | 'star-outlined' | 'thermometer-minus' | 'thermometer-plus' | 'thermometer-thermometer' | 'toggle-left' | 'toggle-right' | 'trash-trash-1' | 'trash-trash-2' | 'trending-down' | 'trending-up' | 'video-off' | 'video-on' | 'volume-down' | 'volume-off' | 'volume-on' | 'volume-up' | 'wifi-off' | 'wifi-on' | 'administrator' | 'building' | 'calendar-selected' | 'calendar-unselected' | 'cancle' | 'confirm' | 'flag-selected' | 'flag-unselected' | 'link' | 'lumir-black' | 'lumir' | 'pen' | 'profile01-selected' | 'profile01-unselected' | 'profile01' | 'setting-selected' | 'setting-unselected' | 'success' | 'team-selected' | 'team-unselected' | 'team' | 'time-selected' | 'time-unselected' | 'time' | 'to-do-list-selected' | 'to-do-list-unselected' | 'to-do-list' | 'vacation' | 'warning' | 'check' | 'x';

  export interface IconProps {
    name: IconName;
    type?: 'line' | 'flat';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'secondary' | 'primary' | 'cta' | 'oncolor' | 'custom';
    customColor?: string;
    onClick?: () => void;
    className?: string;
    'aria-label'?: string;
    'aria-hidden'?: boolean;
  }

  export const Icon: React.FC<IconProps>;

  // 버튼 컴포넌트 타입 정의
  export interface ButtonProps {
    variant?: 'filled' | 'outlined' | 'transparent';
    buttonType?: 'text-icon' | 'text-only' | 'icon-only';
    colorScheme?: 'primary' | 'secondary' | 'cta';
    size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
    isDisabled?: boolean;
    isLoading?: boolean;
    isSelected?: boolean;
    isFullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    [key: string]: any;
  }

  export const Button: React.FC<ButtonProps>;

  // 텍스트 컴포넌트 타입 정의
  type TextVariant = 'hero-1' | 'hero-2' | 'title-1' | 'title-2' | 'heading-1' | 'heading-2' | 'heading-3' | 'body-1' | 'body-2' | 'label-1' | 'label-2' | 'caption-1' | 'caption-2' | 'caption-3';
  type FontWeight = 'regular' | 'medium' | 'bold';
  type TextAlign = 'left' | 'center' | 'right' | 'justify';
  type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  type TextColor = 'primary' | 'secondary' | 'tertiary' | 'onColor' | 'success' | 'warning' | 'error' | 'info';
  
  export interface TextProps {
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    variant?: TextVariant;
    weight?: FontWeight;
    align?: TextAlign;
    transform?: TextTransform;
    color?: TextColor;
    noWrap?: boolean;
    truncate?: number;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    [key: string]: any;
  }

  export const Text: React.FC<TextProps>;

  // 추가 컴포넌트 타입 정의를 확장할 수 있습니다.
} 