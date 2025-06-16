import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@lumir/system-02';
import { Text, Frame, Surface } from '@lumir/shared';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'System-02/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: '버튼',
    variant: 'filled',
    colorScheme: 'primary',
    buttonType: 'text-only',
    size: 'md',
  },
  render: (args) => {
    // 버튼 타입에 따른 아이콘 표시 로직
    const { buttonType, ...rest } = args;
    let renderProps = { ...rest };
    
    // text-only인 경우 아이콘 제거
    if (buttonType === 'text-only') {
      renderProps.leftIcon = undefined;
      renderProps.rightIcon = undefined;
    } 
    // text-icon인 경우 왼쪽 아이콘만 표시
    else if (buttonType === 'text-icon') {
      renderProps.leftIcon = 'LineIconsArrowChevronRightIcon';
      renderProps.rightIcon = undefined;
    }
    // icon-only인 경우 왼쪽 아이콘만 표시하고 children 제거
    else if (buttonType === 'icon-only') {
      renderProps.leftIcon = 'LineIconsArrowChevronRightIcon';
      renderProps.rightIcon = undefined;
      renderProps.children = undefined;
      renderProps['aria-label'] = '아이콘 버튼';
    }
    
    return <Button {...renderProps} />;
  },
};

export const TextOnly: Story = {
  args: {
    children: '텍스트 버튼',
    variant: 'filled',
    colorScheme: 'primary',
    buttonType: 'text-only',
  },
};

export const TextWithLeftIcon: Story = {
  args: {
    children: '아이콘 버튼',
    variant: 'filled',
    colorScheme: 'primary',
    buttonType: 'text-icon',
    leftIcon: 'LineIconsArrowArrow1RightIcon'
  },
};

export const TextWithRightIcon: Story = {
  args: {
    children: '아이콘 버튼',
    variant: 'filled',
    colorScheme: 'primary',
    buttonType: 'text-icon',
    rightIcon: 'LineIconsArrowChevronRightIcon'
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'filled',
    colorScheme: 'primary',
    buttonType: 'icon-only',
    leftIcon: 'SearchIcon',
    'aria-label': '검색 버튼'
  },
};

export const WithIcons: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system01-2-rest">
          아이콘과 텍스트
        </Text>
        <Frame display="flex" direction="row" gap="sm">
          <Button leftIcon="LineIconsArrowArrow1RightIcon">추가</Button>
          <Button rightIcon="LineIconsArrowChevronRightIcon">다음</Button>
          <Button leftIcon="DownloadIcon" rightIcon="LineIconsArrowChevronRightIcon">다운로드</Button>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system01-2-rest">
          아이콘만
        </Text>
        <Frame display="flex" direction="row" gap="sm">
          <Button buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <Button buttonType="icon-only" leftIcon="LineIconsArrowArrow1RightIcon" aria-label="추가" />
          <Button buttonType="icon-only" leftIcon="HeartIcon" aria-label="좋아요" />
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system01-2-rest">
          다양한 크기
        </Text>
        <Frame display="flex" direction="row" gap="sm" align="center">
          <Button size="xs" leftIcon="HeartIcon">확인</Button>
          <Button size="sm" leftIcon="HeartIcon">확인</Button>
          <Button size="md" leftIcon="HeartIcon">확인</Button>
          <Button size="lg" leftIcon="HeartIcon">확인</Button>
          <Button size="xl" leftIcon="HeartIcon">확인</Button>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const VariantShowcase: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Frame display="flex" direction="row" gap="sm">
        <Button variant="filled" colorScheme="primary">Primary Filled</Button>
        <Button variant="outlined" colorScheme="primary">Primary Outlined</Button>
        <Button variant="transparent" colorScheme="primary">Primary Transparent</Button>
      </Frame>
      <Frame display="flex" direction="row" gap="sm">
        <Button variant="filled" colorScheme="secondary">Secondary Filled</Button>
        <Button variant="outlined" colorScheme="secondary">Secondary Outlined</Button>
        <Button variant="transparent" colorScheme="secondary">Secondary Transparent</Button>
      </Frame>
      <Frame display="flex" direction="row" gap="sm">
        <Button variant="filled" colorScheme="cta">CTA Filled</Button>
        <Button variant="outlined" colorScheme="cta">CTA Outlined</Button>
        <Button variant="transparent" colorScheme="cta">CTA Transparent</Button>
      </Frame>
    </Frame>
  ),
};

export const ColorSchemeShowcase: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system02-1-rest">
          Primary (Green Theme)
        </Text>
        <Frame display="flex" direction="row" gap="sm">
          <Button variant="filled" colorScheme="primary">Filled</Button>
          <Button variant="outlined" colorScheme="primary">Outlined</Button>
          <Button variant="transparent" colorScheme="primary">Transparent</Button>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system02-1-rest">
          Secondary (Gray Theme)
        </Text>
        <Frame display="flex" direction="row" gap="sm">
          <Button variant="filled" colorScheme="secondary">Filled</Button>
          <Button variant="outlined" colorScheme="secondary">Outlined</Button>
          <Button variant="transparent" colorScheme="secondary">Transparent</Button>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system02-1-rest">
          CTA (Call to Action)
        </Text>
        <Frame display="flex" direction="row" gap="sm">
          <Button variant="filled" colorScheme="cta">Filled</Button>
          <Button variant="outlined" colorScheme="cta">Outlined</Button>
          <Button variant="transparent" colorScheme="cta">Transparent</Button>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const StateShowcase: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system02-1-rest">
          Normal States
        </Text>
        <Frame display="flex" direction="row" gap="sm">
          <Button>Normal</Button>
          <Button isLoading>Loading</Button>
          <Button isSelected>Selected</Button>
          <Button disabled>Disabled</Button>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system02-1-rest">
          Full Width
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <Button isFullWidth>Full Width Button</Button>
          <Button isFullWidth isLoading>Full Width Loading</Button>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const SizeShowcase: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system02-1-rest">
          Button Sizes
        </Text>
        <Frame display="flex" direction="row" gap="sm" align="center">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h3" variant="heading-3" color="secondary-system02-1-rest">
          Icon Button Sizes
        </Text>
        <Frame display="flex" direction="row" gap="sm" align="center">
          <Button size="xs" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <Button size="sm" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <Button size="md" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <Button size="lg" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
          <Button size="xl" buttonType="icon-only" leftIcon="SearchIcon" aria-label="검색" />
        </Frame>
      </Frame>
    </Frame>
  ),
}; 