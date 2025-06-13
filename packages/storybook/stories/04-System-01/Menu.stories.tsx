import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuHeader } from 'lumir-system-01';
import { Frame, Surface, Text } from 'lumir-shared';

const meta: Meta<typeof MenuHeader> = {
  title: 'System-01/Compounds/MenuHeader',
  component: MenuHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xlg'],
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'pressed', 'focused', 'selected', 'disabled'],
    },
    expanded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'text',
    },
    rightIcon: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuHeader>;

export const Default: Story = {
  args: {
    children: '메뉴 헤더',
    size: 'lg',
    expanded: false,
    disabled: false,
  },
};

export const WithIcons: Story = {
  args: {
    children: '아이콘이 있는 메뉴',
    leftIcon: 'LineIconsFolderFolderIcon',
    rightIcon: 'LineIconsStarOutlinedIcon',
    size: 'lg',
    expanded: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="sm">
      <MenuHeader size="md">Small 메뉴 헤더</MenuHeader>
      <MenuHeader size="lg">Medium 메뉴 헤더</MenuHeader>
      <MenuHeader size="xlg">Large 메뉴 헤더</MenuHeader>
    </Frame>
  ),
};

export const States: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="sm">
      <MenuHeader state="default">기본 상태</MenuHeader>
      <MenuHeader state="selected" leftIcon="LineIconsFolderFolderIcon">선택된 상태</MenuHeader>
      <MenuHeader state="disabled" disabled leftIcon="LineIconsFolderFolderIcon">비활성화 상태</MenuHeader>
    </Frame>
  ),
};

export const InteractionStates: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="sm">
      <Frame display="flex" direction="column" gap="xxs">
        <Surface foreground="secondary-system01-1-rest">
          <Text variant="body-2" weight="medium">기본 상태</Text>
        </Surface>
        <MenuHeader leftIcon="LineIconsFolderFolderIcon">기본 메뉴</MenuHeader>
      </Frame>
      <Frame display="flex" direction="column" gap="xxs">
        <Surface foreground="secondary-system01-1-rest">
          <Text variant="body-2" weight="medium">호버 상태</Text>
        </Surface>
        <MenuHeader state="hovered" leftIcon="LineIconsFolderFolderIcon">호버된 메뉴</MenuHeader>
      </Frame>
      <Frame display="flex" direction="column" gap="xxs">
        <Surface foreground="secondary-system01-1-rest">
          <Text variant="body-2" weight="medium">눌림 상태</Text>
        </Surface>
        <MenuHeader state="pressed" leftIcon="LineIconsFolderFolderIcon">눌린 메뉴</MenuHeader>
      </Frame>
      <Frame display="flex" direction="column" gap="xxs">
        <Surface foreground="secondary-system01-1-rest">
          <Text variant="body-2" weight="medium">포커스 상태</Text>
        </Surface>
        <MenuHeader state="focused" leftIcon="LineIconsFolderFolderIcon">포커스된 메뉴</MenuHeader>
      </Frame>
      <Frame display="flex" direction="column" gap="xxs">
        <Surface foreground="secondary-system01-1-rest">
          <Text variant="body-2" weight="medium">선택된 상태</Text>
        </Surface>
        <MenuHeader state="selected" leftIcon="LineIconsFolderFolderIcon">선택된 메뉴</MenuHeader>
      </Frame>
      <Frame display="flex" direction="column" gap="xxs">
        <Surface foreground="secondary-system01-1-rest">
          <Text variant="body-2" weight="medium">비활성화 상태</Text>
        </Surface>
        <MenuHeader state="disabled" disabled leftIcon="LineIconsFolderFolderIcon">비활성화된 메뉴</MenuHeader>
      </Frame>
    </Frame>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [expandedStates, setExpandedStates] = useState({
      menu1: false,
      menu2: true,
      menu3: false,
    });

    const toggleExpanded = (menuKey: string) => {
      setExpandedStates(prev => ({
        ...prev,
        [menuKey]: !prev[menuKey as keyof typeof prev]
      }));
    };

    return (
      <Frame display="flex" direction="column" gap="xxs">
        <MenuHeader
          leftIcon="LineIconsFolderFolderIcon"
          expanded={expandedStates.menu1}
          onClick={() => toggleExpanded('menu1')}
        >
          문서 폴더
        </MenuHeader>
        <MenuHeader
          leftIcon="LineIconsSettingsSetting1Icon"
          expanded={expandedStates.menu2}
          onClick={() => toggleExpanded('menu2')}
        >
          설정
        </MenuHeader>
        <MenuHeader
          leftIcon="LineIconsPersonPersonIcon"
          rightIcon="LineIconsStarFilledIcon"
          expanded={expandedStates.menu3}
          onClick={() => toggleExpanded('menu3')}
        >
          사용자 관리
        </MenuHeader>
      </Frame>
    );
  },
};

export const AccordionExample: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <Frame display="flex" direction="column">
        <MenuHeader
          leftIcon="LineIconsFolderFolderIcon"
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          size="lg"
        >
          프로젝트 파일
        </MenuHeader>
        {expanded && (
          <Frame display="flex" direction="column" gap="xxxs" style={{ marginLeft: '32px' }} padding="xxs">
            <MenuHeader size="md" leftIcon="LineIconsFileFileIcon">문서1.pdf</MenuHeader>
            <MenuHeader size="md" leftIcon="LineIconsFileFileIcon">문서2.docx</MenuHeader>
            <MenuHeader size="md" leftIcon="LineIconsFileFileIcon">이미지.jpg</MenuHeader>
          </Frame>
        )}
      </Frame>
    );
  },
}; 
