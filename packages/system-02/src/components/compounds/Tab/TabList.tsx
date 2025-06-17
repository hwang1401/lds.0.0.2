import React from 'react';
import { Surface, Frame } from '@lumir/shared';
import { TabListProps } from './types';

export const TabList = ({ children, ...props }: TabListProps) => {
  return (
    <Surface borderWidth="thin" borderColor="secondary-system02-1-rest" borderStyle="solid" {...props}>
      <Frame display="flex" direction="row" gap="sm">
        {children}
      </Frame>
    </Surface>
  );
};

export default TabList; 