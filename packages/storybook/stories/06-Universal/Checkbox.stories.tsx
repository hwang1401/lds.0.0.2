import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox as System01Checkbox } from 'lumir-design-system-01';
import { Checkbox as System02Checkbox } from 'lumir-design-system-02';
import { Text, Frame } from 'lumir-design-system-shared';

// 시스템별 Checkbox 컴포넌트 매핑
const CheckboxComponents = {
  'system-01': System01Checkbox,
  'system-02': System02Checkbox,
};

// 동적 Checkbox 컴포넌트
const UniversalCheckbox = ({ system, ...props }: any) => {
  const CheckboxComponent = CheckboxComponents[system as keyof typeof CheckboxComponents] || System01Checkbox;
  return <CheckboxComponent {...props} />;
};

const meta: Meta<typeof UniversalCheckbox> = {
  title: 'Components/Checkbox',
  component: UniversalCheckbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 시스템에서 사용되는 범용 Checkbox 컴포넌트입니다. 시스템별로 디자인이 다르게 적용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '체크박스 라벨 텍스트',
    },
    checked: {
      control: { type: 'boolean' },
      description: '체크 상태',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: '중간 상태 (일부 선택)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '체크박스 크기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UniversalCheckbox>;

export const Default: Story = {
  args: {
    children: '기본 체크박스',
    checked: false,
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalCheckbox {...args} system={system} />;
  },
};

export const SystemComparison: Story = {
  render: () => {
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 01 - Clean & Efficient (파란색)
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalCheckbox system="system-01" checked={false}>체크 안됨</UniversalCheckbox>
            <UniversalCheckbox system="system-01" checked={true}>체크됨</UniversalCheckbox>
            <UniversalCheckbox system="system-01" indeterminate={true}>중간 상태</UniversalCheckbox>
            <UniversalCheckbox system="system-01" disabled={true}>비활성화</UniversalCheckbox>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 02 - Modern & Friendly (초록색)
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalCheckbox system="system-02" checked={false}>체크 안됨</UniversalCheckbox>
            <UniversalCheckbox system="system-02" checked={true}>체크됨</UniversalCheckbox>
            <UniversalCheckbox system="system-02" indeterminate={true}>중간 상태</UniversalCheckbox>
            <UniversalCheckbox system="system-02" disabled={true}>비활성화</UniversalCheckbox>
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const Sizes: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Size Variations
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <UniversalCheckbox system={system} size="sm" checked={true}>
            Small 체크박스
          </UniversalCheckbox>
          <UniversalCheckbox system={system} size="md" checked={true}>
            Medium 체크박스
          </UniversalCheckbox>
          <UniversalCheckbox system={system} size="lg" checked={true}>
            Large 체크박스
          </UniversalCheckbox>
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
          {systemName} - All States
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h3" variant="heading-3">Normal States</Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalCheckbox system={system} checked={false}>체크 안됨</UniversalCheckbox>
            <UniversalCheckbox system={system} checked={true}>체크됨</UniversalCheckbox>
            <UniversalCheckbox system={system} indeterminate={true}>중간 상태 (일부 선택)</UniversalCheckbox>
          </Frame>
          
          <Text as="h3" variant="heading-3">Disabled States</Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalCheckbox system={system} checked={false} disabled={true}>비활성화 (체크 안됨)</UniversalCheckbox>
            <UniversalCheckbox system={system} checked={true} disabled={true}>비활성화 (체크됨)</UniversalCheckbox>
            <UniversalCheckbox system={system} indeterminate={true} disabled={true}>비활성화 (중간 상태)</UniversalCheckbox>
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const UseCaseExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - 실제 사용 예시
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h3" variant="heading-3">지원자 필터링</Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalCheckbox system={system} checked={true}>
              면접 완료
            </UniversalCheckbox>
            <UniversalCheckbox system={system} checked={false}>
              서류심사 중
            </UniversalCheckbox>
            <UniversalCheckbox system={system} indeterminate={true}>
              일부 단계 완료
            </UniversalCheckbox>
            <UniversalCheckbox system={system} checked={true}>
              최종합격
            </UniversalCheckbox>
          </Frame>
          
          <Text as="h3" variant="heading-3">권한 설정</Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalCheckbox system={system} checked={true}>
              지원자 정보 열람
            </UniversalCheckbox>
            <UniversalCheckbox system={system} checked={true}>
              면접 일정 관리
            </UniversalCheckbox>
            <UniversalCheckbox system={system} checked={false}>
              최종 결정 권한
            </UniversalCheckbox>
            <UniversalCheckbox system={system} disabled={true}>
              시스템 관리 (관리자만)
            </UniversalCheckbox>
          </Frame>
        </Frame>
      </Frame>
    );
  },
}; 