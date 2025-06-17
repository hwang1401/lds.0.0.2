import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge as System01Badge } from '@lumir/system-01';
import { Badge as System02Badge } from '@lumir/system-02';
import { Frame } from '@lumir/shared';

// 시스템별 Badge 컴포넌트 매핑
const BadgeComponents = {
  'system-01': System01Badge,
  'system-02': System02Badge,
};

// 동적 Badge 컴포넌트
const UniversalBadge = ({ system, ...props }: any) => {
  const BadgeComponent = BadgeComponents[system as keyof typeof BadgeComponents] || System01Badge;
  return <BadgeComponent {...props} />;
};

const meta: Meta<typeof UniversalBadge> = {
  title: 'Components/Badge',
  component: UniversalBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '배지 크기',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'cta', 'error', 'warning'],
      description: '배지 색상',
    },
    layout: {
      control: { type: 'select' },
      options: ['only text', 'text+icon', 'only icon'],
      description: '배지 레이아웃',
    },
    text: {
      control: { type: 'text' },
      description: '배지 텍스트',
    },
    iconName: {
      control: { type: 'select' },
      options: [
        'LineIconsStarFilledIcon',
        'LineIconsCheckmarkCheckmarkIcon', 
        'LineIconsCloseCloseIcon',
        'WarningIcon',
        'InfoIcon',
        'SuccessIcon'
      ],
      description: '아이콘 이름',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
    layout: 'only text',
    text: '배지',
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalBadge {...args} system={system} />;
  },
};

export const Sizes: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return (
      <Frame display="flex" gap="md" direction="column">
        <h3>크기별 배지</h3>
        <Frame display="flex" gap="sm" direction="row">
          <UniversalBadge size="sm" color="primary" text="Small" system={system} />
          <UniversalBadge size="md" color="primary" text="Medium" system={system} />
          <UniversalBadge size="lg" color="primary" text="Large" system={system} />
        </Frame>
      </Frame>
    );
  },
};

export const Colors: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return (
      <Frame display="flex" gap="md" direction="column">
        <h3>색상별 배지</h3>
        <Frame display="flex" gap="sm" direction="row">
          <UniversalBadge color="primary" text="Primary" system={system} />
          <UniversalBadge color="secondary" text="Secondary" system={system} />
          <UniversalBadge color="cta" text="CTA" system={system} />
          <UniversalBadge color="error" text="Error" system={system} />
          <UniversalBadge color="warning" text="Warning" system={system} />
        </Frame>
      </Frame>
    );
  },
};

export const Layouts: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return (
      <Frame display="flex" gap="lg" direction="column">
        <Frame display="flex" gap="md" direction="column">
          <h3>텍스트만</h3>
          <Frame display="flex" gap="sm" direction="row">
            <UniversalBadge layout="only text" color="primary" text="Text Only" system={system} />
            <UniversalBadge layout="only text" color="secondary" text="Text Only" system={system} />
            <UniversalBadge layout="only text" color="error" text="Text Only" system={system} />
          </Frame>
        </Frame>

        <Frame display="flex" gap="md" direction="column">
          <h3>아이콘 + 텍스트</h3>
          <Frame display="flex" gap="sm" direction="row">
            <UniversalBadge 
              layout="text+icon" 
              color="primary" 
              text="Success" 
              iconName="SuccessIcon"
              system={system}
            />
            <UniversalBadge 
              layout="text+icon" 
              color="warning" 
              text="Warning" 
              iconName="WarningIcon"
              system={system}
            />
            <UniversalBadge 
              layout="text+icon" 
              color="secondary" 
              text="Info" 
              iconName="InfoIcon"
              system={system}
            />
          </Frame>
        </Frame>

        <Frame display="flex" gap="md" direction="column">
          <h3>아이콘만</h3>
          <Frame display="flex" gap="sm" direction="row">
            <UniversalBadge 
              layout="only icon" 
              color="primary" 
              iconName="LineIconsStarFilledIcon"
              system={system}
            />
            <UniversalBadge 
              layout="only icon" 
              color="secondary" 
              iconName="LineIconsCheckmarkCheckmarkIcon"
              system={system}
            />
            <UniversalBadge 
              layout="only icon" 
              color="error" 
              iconName="LineIconsCloseCloseIcon"
              system={system}
            />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const WithLongText: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return (
      <Frame display="flex" gap="md" direction="column">
        <h3>긴 텍스트가 있는 배지</h3>
        <Frame display="flex" gap="sm" direction="column">
          <UniversalBadge color="primary" text="This is a very long badge text that might wrap" system={system} />
          <UniversalBadge 
            layout="text+icon" 
            color="secondary" 
            text="Long text with icon" 
            iconName="InfoIcon"
            system={system}
          />
        </Frame>
      </Frame>
    );
  },
};

export const InteractiveStates: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return (
      <Frame display="flex" gap="lg" direction="column">
        <div>
          <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>Primary 배지들</h4>
          <Frame display="flex" gap="sm" direction="column">
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>텍스트만:</span>
              <UniversalBadge color="primary" text="기본 상태" system={system} />
            </div>
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
              <UniversalBadge layout="text+icon" color="primary" text="성공" iconName="LineIconsStarFilledIcon" system={system} />
            </div>
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘만:</span>
              <UniversalBadge layout="only icon" color="primary" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />
            </div>
          </Frame>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>Warning 배지들</h4>
          <Frame display="flex" gap="sm" direction="column">
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>텍스트만:</span>
              <UniversalBadge color="warning" text="경고" system={system} />
            </div>
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
              <UniversalBadge layout="text+icon" color="warning" text="주의" iconName="LineIconsCloseCloseIcon" system={system} />
            </div>
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘만:</span>
              <UniversalBadge layout="only icon" color="warning" iconName="WarningIcon" system={system} />
            </div>
          </Frame>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>Error 배지들</h4>
          <Frame display="flex" gap="sm" direction="column">
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>텍스트만:</span>
              <UniversalBadge color="error" text="에러" system={system} />
            </div>
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
              <UniversalBadge layout="text+icon" color="error" text="실패" iconName="LineIconsStarFilledIcon" system={system} />
            </div>
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
              <UniversalBadge layout="text+icon" color="error" text="확인" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />
            </div>
            <div>
              <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘만:</span>
              <UniversalBadge layout="only icon" color="error" iconName="LineIconsCloseCloseIcon" system={system} />
            </div>
          </Frame>
        </div>
      </Frame>
    );
  },
};

export const AllSizesAndColors: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return (
      <Frame display="flex" gap="lg" direction="column">
        <h3>모든 크기와 색상 조합</h3>
        
        <div>
          <h4 style={{ marginBottom: '12px' }}>Small 크기</h4>
          <Frame display="flex" gap="sm" direction="row" style={{ flexWrap: 'wrap' }}>
            <UniversalBadge size="sm" color="primary" text="Primary" system={system} />
            <UniversalBadge size="sm" color="secondary" text="Secondary" system={system} />
            <UniversalBadge size="sm" color="cta" text="CTA" system={system} />
            <UniversalBadge size="sm" color="error" text="Error" system={system} />
            <UniversalBadge size="sm" color="warning" text="Warning" system={system} />
          </Frame>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>Medium 크기</h4>
          <Frame display="flex" gap="sm" direction="row" style={{ flexWrap: 'wrap' }}>
            <UniversalBadge size="md" color="primary" text="Primary" system={system} />
            <UniversalBadge size="md" color="secondary" text="Secondary" system={system} />
            <UniversalBadge size="md" color="cta" text="CTA" system={system} />
            <UniversalBadge size="md" color="error" text="Error" system={system} />
            <UniversalBadge size="md" color="warning" text="Warning" system={system} />
          </Frame>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>Large 크기</h4>
          <Frame display="flex" gap="sm" direction="row" style={{ flexWrap: 'wrap' }}>
            <UniversalBadge size="lg" color="primary" text="Primary" system={system} />
            <UniversalBadge size="lg" color="secondary" text="Secondary" system={system} />
            <UniversalBadge size="lg" color="cta" text="CTA" system={system} />
            <UniversalBadge size="lg" color="error" text="Error" system={system} />
            <UniversalBadge size="lg" color="warning" text="Warning" system={system} />
          </Frame>
        </div>

        <div>
          <h4 style={{ marginBottom: '12px' }}>아이콘과 함께</h4>
          <Frame display="flex" gap="sm" direction="column">
            <Frame display="flex" gap="sm" direction="row">
              <UniversalBadge layout="text+icon" size="sm" color="warning" text="경고" iconName="WarningIcon" system={system} />
              <UniversalBadge layout="text+icon" size="md" color="warning" text="경고" iconName="WarningIcon" system={system} />
              <UniversalBadge layout="text+icon" size="lg" color="warning" text="경고" iconName="WarningIcon" system={system} />
            </Frame>
            <Frame display="flex" gap="sm" direction="row">
              <UniversalBadge layout="text+icon" size="sm" color="secondary" text="정보" iconName="InfoIcon" system={system} />
              <UniversalBadge layout="text+icon" size="md" color="secondary" text="정보" iconName="InfoIcon" system={system} />
              <UniversalBadge layout="text+icon" size="lg" color="secondary" text="정보" iconName="InfoIcon" system={system} />
            </Frame>
            <Frame display="flex" gap="sm" direction="row">
              <UniversalBadge layout="text+icon" size="sm" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />
              <UniversalBadge layout="text+icon" size="md" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />
              <UniversalBadge layout="text+icon" size="lg" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" system={system} />
            </Frame>
          </Frame>
        </div>
      </Frame>
    );
  },
};

export const UsageExamples: Story = {
  args: {
    layout: 'text+icon',
    color: 'primary',
    text: '새로운',
    iconName: 'LineIconsStarFilledIcon',
    size: 'md',
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalBadge {...args} system={system} />;
  },
}; 