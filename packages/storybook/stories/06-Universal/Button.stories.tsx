import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button as System01Button } from 'lumir-design-system-01';
import { Button as System02Button } from 'lumir-design-system-02';
import { Text, Frame } from 'lumir-design-system-shared';

// 시스템별 Button 컴포넌트 매핑
const ButtonComponents = {
  'system-01': System01Button,
  'system-02': System02Button,
};

// 동적 Button 컴포넌트
const UniversalButton = ({ system, ...props }: any) => {
  if (system === 'system-02') {
    const Component = System02Button as any;
    return <Component {...props} />;
  }
  const Component = System01Button as any;
  return <Component {...props} />;
};

const meta: Meta<typeof UniversalButton> = {
  title: 'Components/Button',
  component: UniversalButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'transparent'],
      description: '버튼의 스타일 변형'
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'cta'],
      description: '버튼의 색상 테마'
    },
    buttonType: {
      control: 'select',
      options: ['text-only', 'text-icon', 'icon-only'],
      description: '버튼의 타입'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '버튼의 크기'
    },
    isFullWidth: {
      control: 'boolean',
      description: '전체 너비 적용 여부'
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'full width일 때 텍스트 정렬 방식 (isFullWidth=true일 때만 적용)'
    },
    isLoading: {
      control: 'boolean',
      description: '로딩 상태 여부'
    },
    isSelected: {
      control: 'boolean',
      description: '선택 상태 여부'
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부'
    },
    leftIcon: {
      control: 'select',
      options: ['LineIconsArrowChevronRightIcon', 'LineIconsArrowArrow1RightIcon', 'SearchIcon', 'DownloadIcon'],
      description: '버튼의 왼쪽에 표시될 아이콘 이름'
    },
    rightIcon: {
      control: 'select', 
      options: ['LineIconsArrowChevronRightIcon', 'LineIconsArrowArrow1RightIcon', 'SearchIcon', 'DownloadIcon'],
      description: '버튼의 오른쪽에 표시될 아이콘 이름'
    }
  },
};

export default meta;
type Story = StoryObj<typeof UniversalButton>;

export const Default: Story = {
  args: {
    children: '버튼',
    variant: 'filled',
    colorScheme: 'primary',
    buttonType: 'text-only',
    size: 'md',
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const { buttonType, ...rest } = args;
    let renderProps = { ...rest, system };
    
    // 버튼 타입에 따른 아이콘 표시 로직
    if (buttonType === 'text-only') {
      renderProps.leftIcon = undefined;
      renderProps.rightIcon = undefined;
    } 
    else if (buttonType === 'text-icon') {
      renderProps.leftIcon = 'LineIconsArrowChevronRightIcon';
      renderProps.rightIcon = undefined;
    }
    else if (buttonType === 'icon-only') {
      renderProps.leftIcon = 'LineIconsArrowChevronRightIcon';
      renderProps.rightIcon = undefined;
      renderProps.children = undefined;
      renderProps['aria-label'] = '아이콘 버튼';
    }
    
    return <UniversalButton {...renderProps} />;
  },
};

export const SystemComparison: Story = {
  render: (args) => {
    const baseProps = {
      children: 'Primary Button',
      variant: 'filled' as const,
      colorScheme: 'primary' as const,
      buttonType: 'text-only' as const,
      size: 'md' as const,
    };

    return (
      <Frame display="flex" direction="column" gap="xl">
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 01 - Clean & Efficient (파란색)
          </Text>
          <Frame display="flex" direction="row" gap="sm">
            <UniversalButton {...baseProps} system="system-01" colorScheme="primary">Primary</UniversalButton>
            <UniversalButton {...baseProps} system="system-01" colorScheme="secondary">Secondary</UniversalButton>
            <UniversalButton {...baseProps} system="system-01" colorScheme="cta">CTA</UniversalButton>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 02 - Modern & Friendly (초록색)
          </Text>
          <Frame display="flex" direction="row" gap="sm">
            <UniversalButton {...baseProps} system="system-02" colorScheme="primary">Primary</UniversalButton>
            <UniversalButton {...baseProps} system="system-02" colorScheme="secondary">Secondary</UniversalButton>
            <UniversalButton {...baseProps} system="system-02" colorScheme="cta">CTA</UniversalButton>
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const VariantShowcase: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const systemColors = system === 'system-01' ? '(파란색)' : '(초록색/오렌지)';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} {systemColors}
        </Text>
        
        <Frame display="flex" direction="row" gap="sm">
          <UniversalButton system={system} variant="filled" colorScheme="primary">Primary Filled</UniversalButton>
          <UniversalButton system={system} variant="outlined" colorScheme="primary">Primary Outlined</UniversalButton>
          <UniversalButton system={system} variant="transparent" colorScheme="primary">Primary Transparent</UniversalButton>
        </Frame>
        <Frame display="flex" direction="row" gap="sm">
          <UniversalButton system={system} variant="filled" colorScheme="secondary">Secondary Filled</UniversalButton>
          <UniversalButton system={system} variant="outlined" colorScheme="secondary">Secondary Outlined</UniversalButton>
          <UniversalButton system={system} variant="transparent" colorScheme="secondary">Secondary Transparent</UniversalButton>
        </Frame>
        <Frame display="flex" direction="row" gap="sm">
          <UniversalButton system={system} variant="filled" colorScheme="cta">CTA Filled</UniversalButton>
          <UniversalButton system={system} variant="outlined" colorScheme="cta">CTA Outlined</UniversalButton>
          <UniversalButton system={system} variant="transparent" colorScheme="cta">CTA Transparent</UniversalButton>
        </Frame>
      </Frame>
    );
  },
};

export const StateShowcase: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Button States
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h3" variant="heading-3">
            Normal States
          </Text>
          <Frame display="flex" direction="row" gap="sm">
            <UniversalButton system={system}>Normal</UniversalButton>
            <UniversalButton system={system} isLoading>Loading</UniversalButton>
            <UniversalButton system={system} isSelected>Selected</UniversalButton>
            <UniversalButton system={system} disabled>Disabled</UniversalButton>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h3" variant="heading-3">
            With Icons
          </Text>
          <Frame display="flex" direction="row" gap="sm">
            <UniversalButton system={system} leftIcon="LineIconsArrowChevronRightIcon">Left Icon</UniversalButton>
            <UniversalButton system={system} rightIcon="LineIconsArrowChevronRightIcon">Right Icon</UniversalButton>
            <UniversalButton system={system} leftIcon="LineIconsArrowChevronRightIcon" aria-label="Icon Only" />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const FullWidthAlignment: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" width="400px">
        <Text as="h2" variant="heading-2">
          {systemName} - Full Width Text Alignment
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h3" variant="heading-3">
            Text Only Buttons
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalButton system={system} isFullWidth textAlign="left">Left Aligned</UniversalButton>
            <UniversalButton system={system} isFullWidth textAlign="center">Center Aligned</UniversalButton>
            <UniversalButton system={system} isFullWidth textAlign="right">Right Aligned</UniversalButton>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h3" variant="heading-3">
            With Icons
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalButton system={system} isFullWidth textAlign="left" leftIcon="LineIconsArrowArrow1LeftIcon">← Back</UniversalButton>
            <UniversalButton system={system} isFullWidth textAlign="center" leftIcon="SearchIcon">Search</UniversalButton>
            <UniversalButton system={system} isFullWidth textAlign="right" rightIcon="LineIconsArrowArrow1RightIcon">Next →</UniversalButton>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h3" variant="heading-3">
            Different Variants
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalButton system={system} variant="filled" isFullWidth textAlign="left">Filled Left</UniversalButton>
            <UniversalButton system={system} variant="outlined" isFullWidth textAlign="center">Outlined Center</UniversalButton>
            <UniversalButton system={system} variant="transparent" isFullWidth textAlign="right">Transparent Right</UniversalButton>
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const SizeShowcase: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Button Sizes
        </Text>
        
        <Frame display="flex" direction="row" gap="sm" align="center">
          <UniversalButton system={system} size="xs">Extra Small</UniversalButton>
          <UniversalButton system={system} size="sm">Small</UniversalButton>
          <UniversalButton system={system} size="md">Medium</UniversalButton>
          <UniversalButton system={system} size="lg">Large</UniversalButton>
          <UniversalButton system={system} size="xl">Extra Large</UniversalButton>
        </Frame>
        
        <Frame display="flex" direction="row" gap="sm" align="center">
          <UniversalButton system={system} size="xs" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <UniversalButton system={system} size="sm" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <UniversalButton system={system} size="md" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <UniversalButton system={system} size="lg" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <UniversalButton system={system} size="xl" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
        </Frame>
      </Frame>
    );
  },
}; 