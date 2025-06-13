import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@lumir/system-01';
import { Frame } from '@lumir/shared';

const meta: Meta<typeof Badge> = {
  title: 'System-01/Compounds/Badge',
  component: Badge,
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
};

export const Sizes: Story = {
  render: () => (
    <Frame display="flex" gap="md" direction="column">
      <h3>크기별 배지</h3>
      <Frame display="flex" gap="sm" direction="row">
        <Badge size="sm" color="primary" text="Small" />
        <Badge size="md" color="primary" text="Medium" />
        <Badge size="lg" color="primary" text="Large" />
      </Frame>
    </Frame>
  ),
};

export const Colors: Story = {
  render: () => (
    <Frame display="flex" gap="md" direction="column">
      <h3>색상별 배지</h3>
      <Frame display="flex" gap="sm" direction="row">
        <Badge color="primary" text="Primary" />
        <Badge color="secondary" text="Secondary" />
        <Badge color="cta" text="CTA" />
        <Badge color="error" text="Error" />
        <Badge color="warning" text="Warning" />
      </Frame>
    </Frame>
  ),
};

export const Layouts: Story = {
  render: () => (
    <Frame display="flex" gap="lg" direction="column">
      <Frame display="flex" gap="md" direction="column">
        <h3>텍스트만</h3>
        <Frame display="flex" gap="sm" direction="row">
          <Badge layout="only text" color="primary" text="Text Only" />
          <Badge layout="only text" color="secondary" text="Text Only" />
          <Badge layout="only text" color="error" text="Text Only" />
        </Frame>
      </Frame>

      <Frame display="flex" gap="md" direction="column">
        <h3>아이콘 + 텍스트</h3>
        <Frame display="flex" gap="sm" direction="row">
          <Badge 
            layout="text+icon" 
            color="primary" 
            text="Success" 
            iconName="SuccessIcon"
          />
          <Badge 
            layout="text+icon" 
            color="warning" 
            text="Warning" 
            iconName="WarningIcon"
          />
          <Badge 
            layout="text+icon" 
            color="secondary" 
            text="Info" 
            iconName="InfoIcon"
          />
        </Frame>
      </Frame>

      <Frame display="flex" gap="md" direction="column">
        <h3>아이콘만</h3>
        <Frame display="flex" gap="sm" direction="row">
          <Badge 
            layout="only icon" 
            color="primary" 
            iconName="LineIconsStarFilledIcon"
          />
          <Badge 
            layout="only icon" 
            color="secondary" 
            iconName="LineIconsCheckmarkCheckmarkIcon"
          />
          <Badge 
            layout="only icon" 
            color="error" 
            iconName="LineIconsCloseCloseIcon"
          />
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <Frame display="flex" gap="md" direction="column">
      <h3>긴 텍스트가 있는 배지</h3>
      <Frame display="flex" gap="sm" direction="column">
        <Badge color="primary" text="This is a very long badge text that might wrap" />
        <Badge 
          layout="text+icon" 
          color="secondary" 
          text="Long text with icon" 
          iconName="InfoIcon"
        />
      </Frame>
    </Frame>
  ),
};

export const InteractiveStates: Story = {
  render: () => (
    <Frame display="flex" gap="lg" direction="column">
      <div>
        <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>Primary 배지들</h4>
        <Frame display="flex" gap="sm" direction="column">
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>텍스트만:</span>
            <Badge color="primary" text="기본 상태" />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
            <Badge layout="text+icon" color="primary" text="성공" iconName="LineIconsStarFilledIcon" />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘만:</span>
            <Badge layout="only icon" color="primary" iconName="LineIconsCheckmarkCheckmarkIcon" />
          </div>
        </Frame>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>Warning 배지들</h4>
        <Frame display="flex" gap="sm" direction="column">
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>텍스트만:</span>
            <Badge color="warning" text="경고" />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
            <Badge layout="text+icon" color="warning" text="주의" iconName="LineIconsCloseCloseIcon" />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘만:</span>
            <Badge layout="only icon" color="warning" iconName="WarningIcon" />
          </div>
        </Frame>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>Error 배지들</h4>
        <Frame display="flex" gap="sm" direction="column">
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>텍스트만:</span>
            <Badge color="error" text="에러" />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
            <Badge layout="text+icon" color="error" text="실패" iconName="LineIconsStarFilledIcon" />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘+텍스트:</span>
            <Badge layout="text+icon" color="error" text="확인" iconName="LineIconsCheckmarkCheckmarkIcon" />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>아이콘만:</span>
            <Badge layout="only icon" color="error" iconName="LineIconsCloseCloseIcon" />
          </div>
        </Frame>
      </div>
    </Frame>
  ),
};

export const AllSizesAndColors: Story = {
  render: () => (
    <Frame display="flex" gap="lg" direction="column">
      <h3>모든 크기와 색상 조합</h3>
      
      <div>
        <h4 style={{ marginBottom: '12px' }}>Small 크기</h4>
        <Frame display="flex" gap="sm" direction="row" style={{ flexWrap: 'wrap' }}>
          <Badge size="sm" color="primary" text="Primary" />
          <Badge size="sm" color="secondary" text="Secondary" />
          <Badge size="sm" color="cta" text="CTA" />
          <Badge size="sm" color="error" text="Error" />
          <Badge size="sm" color="warning" text="Warning" />
        </Frame>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px' }}>Medium 크기</h4>
        <Frame display="flex" gap="sm" direction="row" style={{ flexWrap: 'wrap' }}>
          <Badge size="md" color="primary" text="Primary" />
          <Badge size="md" color="secondary" text="Secondary" />
          <Badge size="md" color="cta" text="CTA" />
          <Badge size="md" color="error" text="Error" />
          <Badge size="md" color="warning" text="Warning" />
        </Frame>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px' }}>Large 크기</h4>
        <Frame display="flex" gap="sm" direction="row" style={{ flexWrap: 'wrap' }}>
          <Badge size="lg" color="primary" text="Primary" />
          <Badge size="lg" color="secondary" text="Secondary" />
          <Badge size="lg" color="cta" text="CTA" />
          <Badge size="lg" color="error" text="Error" />
          <Badge size="lg" color="warning" text="Warning" />
        </Frame>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px' }}>아이콘과 함께</h4>
        <Frame display="flex" gap="sm" direction="column">
          <Frame display="flex" gap="sm" direction="row">
            <Badge layout="text+icon" size="sm" color="warning" text="경고" iconName="WarningIcon" />
            <Badge layout="text+icon" size="md" color="warning" text="경고" iconName="WarningIcon" />
            <Badge layout="text+icon" size="lg" color="warning" text="경고" iconName="WarningIcon" />
          </Frame>
          <Frame display="flex" gap="sm" direction="row">
            <Badge layout="text+icon" size="sm" color="secondary" text="정보" iconName="InfoIcon" />
            <Badge layout="text+icon" size="md" color="secondary" text="정보" iconName="InfoIcon" />
            <Badge layout="text+icon" size="lg" color="secondary" text="정보" iconName="InfoIcon" />
          </Frame>
          <Frame display="flex" gap="sm" direction="row">
            <Badge layout="text+icon" size="sm" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" />
            <Badge layout="text+icon" size="md" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" />
            <Badge layout="text+icon" size="lg" color="primary" text="성공" iconName="LineIconsCheckmarkCheckmarkIcon" />
          </Frame>
        </Frame>
      </div>
    </Frame>
  ),
};

export const UsageExamples: Story = {
  args: {
    layout: 'text+icon',
    color: 'primary',
    text: '새로운',
    iconName: 'LineIconsStarFilledIcon',
    size: 'md',
  },
}; 
