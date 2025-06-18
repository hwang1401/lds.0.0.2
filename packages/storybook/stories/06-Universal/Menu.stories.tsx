import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuHeader as System01MenuHeader } from 'lumir-design-system-01';
import { MenuHeader as System02MenuHeader } from 'lumir-design-system-02';
import { Frame, Surface, Text } from 'lumir-design-system-shared';

// 시스템별 MenuHeader 컴포넌트 매핑
const MenuHeaderComponents = {
  'system-01': System01MenuHeader,
  'system-02': System02MenuHeader,
};

// 동적 MenuHeader 컴포넌트
const UniversalMenuHeader = ({ system, ...props }: any) => {
  const MenuHeaderComponent = MenuHeaderComponents[system as keyof typeof MenuHeaderComponents] || System01MenuHeader;
  return <MenuHeaderComponent {...props} />;
};

const meta: Meta<typeof UniversalMenuHeader> = {
  title: 'Components/Menu',
  component: UniversalMenuHeader,
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
type Story = StoryObj<typeof UniversalMenuHeader>;

export const Default: Story = {
  args: {
    children: '메뉴 헤더',
    size: 'lg',
    expanded: false,
    disabled: false,
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalMenuHeader {...args} system={system} />;
  },
};

export const SystemComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 01 - Clean & Efficient (파란색, 직각)
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalMenuHeader system="system-01" size="lg" leftIcon="LineIconsFolderFolderIcon">
            문서 폴더
          </UniversalMenuHeader>
          <UniversalMenuHeader system="system-01" size="lg" leftIcon="LineIconsSettingsSetting1Icon" state="selected">
            설정 (선택됨)
          </UniversalMenuHeader>
          <UniversalMenuHeader system="system-01" size="lg" leftIcon="LineIconsPersonPersonIcon" disabled>
            사용자 관리 (비활성화)
          </UniversalMenuHeader>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 02 - Modern & Friendly (초록색, 둥근 모서리)
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalMenuHeader system="system-02" size="lg" leftIcon="LineIconsFolderFolderIcon">
            문서 폴더
          </UniversalMenuHeader>
          <UniversalMenuHeader system="system-02" size="lg" leftIcon="LineIconsSettingsSetting1Icon" state="selected">
            설정 (선택됨)
          </UniversalMenuHeader>
          <UniversalMenuHeader system="system-02" size="lg" leftIcon="LineIconsPersonPersonIcon" disabled>
            사용자 관리 (비활성화)
          </UniversalMenuHeader>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const WithIcons: Story = {
  args: {
    children: '아이콘이 있는 메뉴',
    leftIcon: 'LineIconsFolderFolderIcon',
    rightIcon: 'LineIconsStarOutlinedIcon',
    size: 'lg',
    expanded: false,
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalMenuHeader {...args} system={system} />;
  },
};

export const Sizes: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Menu Sizes
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalMenuHeader system={system} size="md">Small 메뉴 헤더</UniversalMenuHeader>
          <UniversalMenuHeader system={system} size="lg">Medium 메뉴 헤더</UniversalMenuHeader>
          <UniversalMenuHeader system={system} size="xlg">Large 메뉴 헤더</UniversalMenuHeader>
        </Frame>
      </Frame>
    );
  },
};

export const States: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Menu States
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalMenuHeader system={system} state="default">기본 상태</UniversalMenuHeader>
          <UniversalMenuHeader system={system} state="selected" leftIcon="LineIconsFolderFolderIcon">선택된 상태</UniversalMenuHeader>
          <UniversalMenuHeader system={system} state="disabled" disabled leftIcon="LineIconsFolderFolderIcon">비활성화 상태</UniversalMenuHeader>
        </Frame>
      </Frame>
    );
  },
};

export const InteractionStates: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Interaction States
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <Frame display="flex" direction="column" gap="xxs">
            <Surface foreground="secondary-system01-1-rest">
              <Text variant="body-2" weight="medium">기본 상태</Text>
            </Surface>
            <UniversalMenuHeader system={system} leftIcon="LineIconsFolderFolderIcon">기본 메뉴</UniversalMenuHeader>
          </Frame>
          <Frame display="flex" direction="column" gap="xxs">
            <Surface foreground="secondary-system01-1-rest">
              <Text variant="body-2" weight="medium">호버 상태</Text>
            </Surface>
            <UniversalMenuHeader system={system} state="hovered" leftIcon="LineIconsFolderFolderIcon">호버된 메뉴</UniversalMenuHeader>
          </Frame>
          <Frame display="flex" direction="column" gap="xxs">
            <Surface foreground="secondary-system01-1-rest">
              <Text variant="body-2" weight="medium">눌림 상태</Text>
            </Surface>
            <UniversalMenuHeader system={system} state="pressed" leftIcon="LineIconsFolderFolderIcon">눌린 메뉴</UniversalMenuHeader>
          </Frame>
          <Frame display="flex" direction="column" gap="xxs">
            <Surface foreground="secondary-system01-1-rest">
              <Text variant="body-2" weight="medium">포커스 상태</Text>
            </Surface>
            <UniversalMenuHeader system={system} state="focused" leftIcon="LineIconsFolderFolderIcon">포커스된 메뉴</UniversalMenuHeader>
          </Frame>
          <Frame display="flex" direction="column" gap="xxs">
            <Surface foreground="secondary-system01-1-rest">
              <Text variant="body-2" weight="medium">선택된 상태</Text>
            </Surface>
            <UniversalMenuHeader system={system} state="selected" leftIcon="LineIconsFolderFolderIcon">선택된 메뉴</UniversalMenuHeader>
          </Frame>
          <Frame display="flex" direction="column" gap="xxs">
            <Surface foreground="secondary-system01-1-rest">
              <Text variant="body-2" weight="medium">비활성화 상태</Text>
            </Surface>
            <UniversalMenuHeader system={system} state="disabled" disabled leftIcon="LineIconsFolderFolderIcon">비활성화된 메뉴</UniversalMenuHeader>
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const Interactive: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
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
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Interactive Menu
        </Text>
        <Frame display="flex" direction="column" gap="xxs">
          <UniversalMenuHeader
            system={system}
            leftIcon="LineIconsFolderFolderIcon"
            expanded={expandedStates.menu1}
            onClick={() => toggleExpanded('menu1')}
          >
            문서 폴더
          </UniversalMenuHeader>
          <UniversalMenuHeader
            system={system}
            leftIcon="LineIconsSettingsSetting1Icon"
            expanded={expandedStates.menu2}
            onClick={() => toggleExpanded('menu2')}
          >
            설정
          </UniversalMenuHeader>
          <UniversalMenuHeader
            system={system}
            leftIcon="LineIconsPersonPersonIcon"
            rightIcon="LineIconsStarFilledIcon"
            expanded={expandedStates.menu3}
            onClick={() => toggleExpanded('menu3')}
          >
            사용자 관리
          </UniversalMenuHeader>
        </Frame>
      </Frame>
    );
  },
};

export const AccordionExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [expanded, setExpanded] = useState(false);

    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Accordion Example
        </Text>
        <Frame display="flex" direction="column">
          <UniversalMenuHeader
            system={system}
            leftIcon="LineIconsFolderFolderIcon"
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            size="lg"
          >
            프로젝트 파일
          </UniversalMenuHeader>
          {expanded && (
            <Frame display="flex" direction="column" gap="xxxs" style={{ marginLeft: '32px' }} padding="xxs">
              <UniversalMenuHeader system={system} size="md" leftIcon="LineIconsFileFileIcon">문서1.pdf</UniversalMenuHeader>
              <UniversalMenuHeader system={system} size="md" leftIcon="LineIconsFileFileIcon">문서2.docx</UniversalMenuHeader>
              <UniversalMenuHeader system={system} size="md" leftIcon="LineIconsFileFileIcon">이미지.jpg</UniversalMenuHeader>
            </Frame>
          )}
        </Frame>
      </Frame>
    );
  },
};

export const NavigationExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedMenu, setSelectedMenu] = useState('dashboard');

    const menuItems = [
      { id: 'dashboard', label: '대시보드', icon: 'LineIconsBarChart1Icon' },
      { id: 'users', label: '사용자 관리', icon: 'LineIconsPersonPersonIcon' },
      { id: 'settings', label: '설정', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'reports', label: '보고서', icon: 'LineIconsFileFileIcon' },
      { id: 'help', label: '도움말', icon: 'LineIconsQuestionMarkIcon' },
    ];

    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - 사이드바 네비게이션 예시
        </Text>
        <Frame display="flex" direction="column" gap="xxs">
          {menuItems.map((item) => (
            <UniversalMenuHeader
              key={item.id}
              system={system}
              leftIcon={item.icon}
              state={selectedMenu === item.id ? 'selected' : 'default'}
              onClick={() => setSelectedMenu(item.id)}
            >
              {item.label}
            </UniversalMenuHeader>
          ))}
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 사이드바 네비게이션에서 사용되는 메뉴의 예시입니다.'
      }
    }
  }
}; 