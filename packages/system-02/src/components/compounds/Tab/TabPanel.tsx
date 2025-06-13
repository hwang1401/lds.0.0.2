import React from 'react';
import { Surface, Frame } from '@lumir/shared';
import { TabPanelProps } from './types';
import { useTabContext } from './Tab';

export const TabPanel = ({ id, children, ...props }: TabPanelProps) => {
  const { selectedId } = useTabContext();

  if (selectedId !== id) {
    return null;
  }

  return (
    <Surface role="tabpanel" {...props}>
      <Frame display="flex" direction="column" padding="lg" gap="md">
        {children}
      </Frame>
    </Surface>
  );
};

export default TabPanel; 