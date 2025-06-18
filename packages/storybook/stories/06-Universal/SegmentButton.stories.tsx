import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentButton as System01SegmentButton } from 'lumir-design-system-01';
import { SegmentButton as System02SegmentButton } from 'lumir-design-system-02';
import { Text, Frame } from 'lumir-design-system-shared';

// 시스템별 SegmentButton 컴포넌트 매핑
const SegmentButtonComponents = {
  'system-01': System01SegmentButton,
  'system-02': System02SegmentButton,
};

// 동적 SegmentButton 컴포넌트 - children을 render prop으로 처리
const UniversalSegmentButton = ({ system, children, ...props }: any) => {
  const SegmentButtonComponent = SegmentButtonComponents[system as keyof typeof SegmentButtonComponents] || System01SegmentButton;
  
  // children이 함수인 경우 해당 시스템의 Item 컴포넌트를 전달
  if (typeof children === 'function') {
    return children(SegmentButtonComponent, SegmentButtonComponent.Item);
  }
  
  return <SegmentButtonComponent {...props}>{children}</SegmentButtonComponent>;
};

const meta: Meta<typeof UniversalSegmentButton> = {
  title: 'Components/SegmentButton',
  component: UniversalSegmentButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '연결된 버튼 그룹으로 단일 또는 다중 선택을 지원하는 SegmentButton 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    system: {
      control: { type: 'select' },
      options: ['system-01', 'system-02'],
      description: '디자인 시스템 테마',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'system-01' },
      },
    },
    mode: {
      control: { type: 'select' },
      options: ['single', 'multi'],
      description: '선택 모드 (단일/다중)',
      table: {
        type: { summary: 'single | multi' },
        defaultValue: { summary: 'single' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: '버튼 스타일 변형',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    selectedValues: {
      control: 'object',
      description: '선택된 값들 (controlled)'
    },
    defaultSelectedValues: {
      control: 'object',
      description: '기본 선택된 값들 (uncontrolled)'
    }
  },
};

export default meta;
type Story = StoryObj<typeof UniversalSegmentButton>;

export const Default: Story = {
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'md',
    variant: 'primary',
  },
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['option1']);
    
    return (
      <UniversalSegmentButton
        {...args}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      >
        {(SegmentButton: any, Item: any) => (
          <SegmentButton
            mode={args.mode}
            size={args.size}
            variant={args.variant}
            selectedValues={selectedValues}
            onChange={setSelectedValues}
          >
            <Item value="option1">옵션 1</Item>
            <Item value="option2">옵션 2</Item>
            <Item value="option3">옵션 3</Item>
          </SegmentButton>
        )}
      </UniversalSegmentButton>
    );
  },
};

export const PriceFilter: Story = {
  args: {
    system: 'system-01',
    mode: 'multi',
    size: 'md',
    variant: 'primary',
  },
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['under-50']);
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text variant="body-1" weight="bold">가격대 필터</Text>
        <UniversalSegmentButton {...args}>
          {(SegmentButton: any, Item: any) => (
            <SegmentButton
              mode={args.mode}
              size={args.size}
              variant={args.variant}
              selectedValues={selectedValues}
              onChange={setSelectedValues}
            >
              <Item value="under-50">5만원 미만</Item>
              <Item value="50-100">5-10만원</Item>
              <Item value="100-200">10-20만원</Item>
              <Item value="over-200">20만원 이상</Item>
            </SegmentButton>
          )}
        </UniversalSegmentButton>
      </Frame>
    );
  },
};

export const ViewModeToggle: Story = {
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'sm',
    variant: 'secondary',
  },
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['grid']);
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text variant="body-2" weight="bold">보기 모드</Text>
        <UniversalSegmentButton {...args}>
          {(SegmentButton: any, Item: any) => (
            <SegmentButton
              mode={args.mode}
              size={args.size}
              variant={args.variant}
              selectedValues={selectedValues}
              onChange={setSelectedValues}
            >
              <Item value="list">목록</Item>
              <Item value="grid">격자</Item>
              <Item value="card">카드</Item>
            </SegmentButton>
          )}
        </UniversalSegmentButton>
      </Frame>
    );
  },
};

export const SizeShowcase: Story = {
  args: {
    system: 'system-01',
    mode: 'single',
    variant: 'primary',
  },
  render: (args) => {
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2" weight="medium">Small (sm)</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode={args.mode}
                size="sm"
                variant={args.variant}
                defaultSelectedValues={['option1']}
              >
                <Item value="option1">옵션 1</Item>
                <Item value="option2">옵션 2</Item>
                <Item value="option3">옵션 3</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
        
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2" weight="medium">Medium (md)</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode={args.mode}
                size="md"
                variant={args.variant}
                defaultSelectedValues={['option2']}
              >
                <Item value="option1">옵션 1</Item>
                <Item value="option2">옵션 2</Item>
                <Item value="option3">옵션 3</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
        
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2" weight="medium">Large (lg)</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode={args.mode}
                size="lg"
                variant={args.variant}
                defaultSelectedValues={['option3']}
              >
                <Item value="option1">옵션 1</Item>
                <Item value="option2">옵션 2</Item>
                <Item value="option3">옵션 3</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
      </Frame>
    );
  },
};

export const VariantShowcase: Story = {
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'md',
  },
  render: (args) => {
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2" weight="medium">Primary</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode={args.mode}
                size={args.size}
                variant="primary"
                defaultSelectedValues={['option1']}
              >
                <Item value="option1">옵션 1</Item>
                <Item value="option2">옵션 2</Item>
                <Item value="option3">옵션 3</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
        
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2" weight="medium">Secondary</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode={args.mode}
                size={args.size}
                variant="secondary"
                defaultSelectedValues={['option2']}
              >
                <Item value="option1">옵션 1</Item>
                <Item value="option2">옵션 2</Item>
                <Item value="option3">옵션 3</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
      </Frame>
    );
  },
};

export const SystemComparison: Story = {
  args: {
    mode: 'single',
    size: 'md',
    variant: 'primary',
  },
  render: (args) => {
    const [system01Values, setSystem01Values] = useState<string[]>(['option1']);
    const [system02Values, setSystem02Values] = useState<string[]>(['option1']);
    
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">System-01 (Blue Theme)</Text>
          <System01SegmentButton
            mode={args.mode}
            size={args.size}
            variant={args.variant}
            selectedValues={system01Values}
            onChange={setSystem01Values}
          >
            <System01SegmentButton.Item value="option1">옵션 1</System01SegmentButton.Item>
            <System01SegmentButton.Item value="option2">옵션 2</System01SegmentButton.Item>
            <System01SegmentButton.Item value="option3">옵션 3</System01SegmentButton.Item>
          </System01SegmentButton>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">System-02 (Purple Theme)</Text>
          <System02SegmentButton
            mode={args.mode}
            size={args.size}
            variant={args.variant}
            selectedValues={system02Values}
            onChange={setSystem02Values}
          >
            <System02SegmentButton.Item value="option1">옵션 1</System02SegmentButton.Item>
            <System02SegmentButton.Item value="option2">옵션 2</System02SegmentButton.Item>
            <System02SegmentButton.Item value="option3">옵션 3</System02SegmentButton.Item>
          </System02SegmentButton>
        </Frame>
      </Frame>
    );
  },
};

export const ModeComparison: Story = {
  args: {
    system: 'system-01',
    size: 'md',
    variant: 'primary',
  },
  render: (args) => {
    const [singleValues, setSingleValues] = useState<string[]>(['option2']);
    const [multiValues, setMultiValues] = useState<string[]>(['option1', 'option3']);
    
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">Single Select Mode</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode="single"
                size={args.size}
                variant={args.variant}
                selectedValues={singleValues}
                onChange={setSingleValues}
              >
                <Item value="option1">옵션 1</Item>
                <Item value="option2">옵션 2</Item>
                <Item value="option3">옵션 3</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">Multi Select Mode</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode="multi"
                size={args.size}
                variant={args.variant}
                selectedValues={multiValues}
                onChange={setMultiValues}
              >
                <Item value="option1">옵션 1</Item>
                <Item value="option2">옵션 2</Item>
                <Item value="option3">옵션 3</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
      </Frame>
    );
  },
};

export const DisabledState: Story = {
  args: {
    system: 'system-01',
    mode: 'single',
    size: 'md',
    variant: 'primary',
  },
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['option1']);
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text variant="body-1" weight="bold">비활성화된 옵션 포함</Text>
        <UniversalSegmentButton {...args}>
          {(SegmentButton: any, Item: any) => (
            <SegmentButton
              mode={args.mode}
              size={args.size}
              variant={args.variant}
              selectedValues={selectedValues}
              onChange={setSelectedValues}
            >
              <Item value="option1">활성 옵션</Item>
              <Item value="option2" disabled>비활성 옵션</Item>
              <Item value="option3">활성 옵션</Item>
            </SegmentButton>
          )}
        </UniversalSegmentButton>
      </Frame>
    );
  },
};

export const RealWorldExamples: Story = {
  args: {
    system: 'system-01',
  },
  render: (args) => {
    const [timeRange, setTimeRange] = useState<string[]>(['today']);
    const [sortBy, setSortBy] = useState<string[]>(['date']);
    const [difficulty, setDifficulty] = useState<string[]>(['beginner', 'intermediate']);
    
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">시간 범위 선택</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode="single"
                size="sm"
                variant="secondary"
                selectedValues={timeRange}
                onChange={setTimeRange}
              >
                <Item value="today">오늘</Item>
                <Item value="week">이번 주</Item>
                <Item value="month">이번 달</Item>
                <Item value="year">올해</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">정렬 기준</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode="single"
                size="md"
                variant="primary"
                selectedValues={sortBy}
                onChange={setSortBy}
              >
                <Item value="date">날짜순</Item>
                <Item value="name">이름순</Item>
                <Item value="size">크기순</Item>
                <Item value="type">유형순</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">난이도 필터 (다중 선택)</Text>
          <UniversalSegmentButton {...args}>
            {(SegmentButton: any, Item: any) => (
              <SegmentButton
                mode="multi"
                size="md"
                variant="primary"
                selectedValues={difficulty}
                onChange={setDifficulty}
              >
                <Item value="beginner">초급</Item>
                <Item value="intermediate">중급</Item>
                <Item value="advanced">고급</Item>
                <Item value="expert">전문가</Item>
              </SegmentButton>
            )}
          </UniversalSegmentButton>
        </Frame>
      </Frame>
    );
  },
}; 