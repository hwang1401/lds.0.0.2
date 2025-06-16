import { ReactNode } from 'react';
import { SurfaceProps, TextProps, IconProps } from '@lumir/shared';

export type TabSize = 'lg' | 'md';
export type TabState = 'default' | 'hovered' | 'pressed' | 'disabled' | 'focused';
export type TabStatus = 'selected' | 'unselected';
export type TabIconPosition = 'above' | 'before' | 'after' | 'none';

export interface TabContextValue {
  selectedId: string;
  setSelectedId: (id: string) => void;
  size: TabSize;
  showBorder?: boolean;
}

export interface TabProps extends Omit<SurfaceProps, 'size'> {
  defaultSelectedId?: string;
  size?: TabSize;
  showBorder?: boolean;
  children: ReactNode;
}

export interface TabListProps extends SurfaceProps {
  children: ReactNode;
}

export interface TabItemProps extends SurfaceProps {
  id: string;
  icon?: ReactNode;
  iconPosition?: TabIconPosition;
  disabled?: boolean;
  children: ReactNode;
}

export interface TabPanelProps extends SurfaceProps {
  id: string;
  children: ReactNode;
} 