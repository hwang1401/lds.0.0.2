import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio as System01Radio } from 'lumir-design-system-01';
import { Radio as System02Radio } from 'lumir-design-system-02';
import { Frame, Text } from 'lumir-design-system-shared';

// 시스템별 Radio 컴포넌트 매핑
const RadioComponents = {
  'system-01': System01Radio,
  'system-02': System02Radio,
};

// 동적 Radio 컴포넌트
const UniversalRadio = ({ system, ...props }: any) => {
  const RadioComponent = RadioComponents[system as keyof typeof RadioComponents] || System01Radio;
  return <RadioComponent {...props} />;
};

const meta: Meta<typeof UniversalRadio> = {
  title: 'Components/Radio',
  component: UniversalRadio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Radio 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있게 해주는 입력 컴포넌트입니다.

## 주요 특징
- **단일 선택**: 같은 그룹 내에서 하나의 옵션만 선택 가능
- **두 가지 스타일**: radio (원형 + 점), checkmark (사각형 + 체크)
- **상태 표시**: 선택된 상태에서 내부에 점 또는 체크 표시
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원
- **반응형**: 다양한 화면 크기에 대응

## 사용 시나리오
- 설정 옵션 선택
- 설문조사 응답
- 결제 방법 선택
- 배송 옵션 선택
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: '라디오 버튼의 선택 상태'
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태'
    },
    label: {
      control: 'text',
      description: '라벨 텍스트'
    },
    showLabel: {
      control: 'boolean',
      description: '라벨 표시 여부'
    },
    variant: {
      control: 'select',
      options: ['radio', 'checkmark'],
      description: '라디오 버튼 스타일'
    },
    name: {
      control: 'text',
      description: '라디오 버튼 그룹 이름'
    },
    value: {
      control: 'text',
      description: '라디오 버튼 값'
    },
    onChange: {
      action: 'changed',
      description: '선택 상태 변경 핸들러'
    }
  }
};

export default meta;
type Story = StoryObj<typeof UniversalRadio>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'default-group',
    value: 'option1',
    variant: 'radio'
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalRadio {...args} system={system} />;
  }
};

export const SystemComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 01 - Clean & Efficient (파란색, 직각)
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalRadio system="system-01" label="Radio 스타일" name="system01-radio" value="radio" variant="radio" />
          <UniversalRadio system="system-01" label="Checkmark 스타일" name="system01-checkmark" value="checkmark" variant="checkmark" />
          <UniversalRadio system="system-01" label="선택된 상태" checked name="system01-selected" value="selected" variant="radio" />
          <UniversalRadio system="system-01" label="비활성화" disabled name="system01-disabled" value="disabled" variant="radio" />
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 02 - Modern & Friendly (초록색, 둥근 모서리)
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalRadio system="system-02" label="Radio 스타일" name="system02-radio" value="radio" variant="radio" />
          <UniversalRadio system="system-02" label="Checkmark 스타일" name="system02-checkmark" value="checkmark" variant="checkmark" />
          <UniversalRadio system="system-02" label="선택된 상태" checked name="system02-selected" value="selected" variant="radio" />
          <UniversalRadio system="system-02" label="비활성화" disabled name="system02-disabled" value="disabled" variant="radio" />
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const Checkmark: Story = {
  args: {
    label: 'Option 1',
    name: 'checkmark-group',
    value: 'option1',
    variant: 'checkmark'
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalRadio {...args} system={system} />;
  }
};

export const AllStates: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Radio 버튼 모든 상태
        </Text>
        
        <Frame display="flex" direction="column" gap="lg">
          <Text variant="body-1" weight="medium" color="secondary-foreground-1">
            Radio 스타일 (원형)
          </Text>
          <Frame display="flex" direction="column" gap="md">
            <Text variant="caption-1" color="secondary-foreground-3">기본 상태</Text>
            <Frame display="flex" direction="column" gap="sm">
              <UniversalRadio system={system} label="기본 상태" name="radio-states" value="default" variant="radio" />
              <UniversalRadio system={system} label="선택된 상태" checked name="radio-states" value="checked" variant="radio" />
            </Frame>
            
            <Text variant="caption-1" color="secondary-foreground-3">비활성화 상태</Text>
            <Frame display="flex" direction="column" gap="sm">
              <UniversalRadio system={system} label="비활성화" disabled name="radio-disabled" value="disabled" variant="radio" />
              <UniversalRadio system={system} label="비활성화 + 선택" checked disabled name="radio-disabled" value="disabled-checked" variant="radio" />
            </Frame>
          </Frame>
        </Frame>

        <Frame display="flex" direction="column" gap="lg">
          <Text variant="body-1" weight="medium" color="secondary-foreground-1">
            Checkmark 스타일 (사각형)
          </Text>
          <Frame display="flex" direction="column" gap="md">
            <Text variant="caption-1" color="secondary-foreground-3">기본 상태</Text>
            <Frame display="flex" direction="column" gap="sm">
              <UniversalRadio system={system} label="기본 상태" name="checkmark-states" value="default" variant="checkmark" />
              <UniversalRadio system={system} label="선택된 상태" checked name="checkmark-states" value="checked" variant="checkmark" />
            </Frame>
            
            <Text variant="caption-1" color="secondary-foreground-3">비활성화 상태</Text>
            <Frame display="flex" direction="column" gap="sm">
              <UniversalRadio system={system} label="비활성화" disabled name="checkmark-disabled" value="disabled" variant="checkmark" />
              <UniversalRadio system={system} label="비활성화 + 선택" checked disabled name="checkmark-disabled" value="disabled-checked" variant="checkmark" />
            </Frame>
          </Frame>
        </Frame>

        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="medium" color="secondary-foreground-1">
            라벨 없음
          </Text>
          <Frame display="flex" direction="row" gap="md">
            <UniversalRadio system={system} showLabel={false} name="no-label-radio" value="no-label-1" variant="radio" />
            <UniversalRadio system={system} showLabel={false} checked name="no-label-radio" value="no-label-2" variant="radio" />
            <UniversalRadio system={system} showLabel={false} name="no-label-checkmark" value="no-label-3" variant="checkmark" />
            <UniversalRadio system={system} showLabel={false} checked name="no-label-checkmark" value="no-label-4" variant="checkmark" />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const InteractiveGroup: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - 인터랙티브 라디오 그룹
        </Text>
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="medium">
            선택된 값: {selectedValue}
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalRadio
              system={system}
              label="첫 번째 옵션"
              name="interactive-group"
              value="option1"
              checked={selectedValue === 'option1'}
              onChange={(e: any) => setSelectedValue(e.target.value)}
              variant="radio"
            />
            <UniversalRadio
              system={system}
              label="두 번째 옵션"
              name="interactive-group"
              value="option2"
              checked={selectedValue === 'option2'}
              onChange={(e: any) => setSelectedValue(e.target.value)}
              variant="radio"
            />
            <UniversalRadio
              system={system}
              label="세 번째 옵션"
              name="interactive-group"
              value="option3"
              checked={selectedValue === 'option3'}
              onChange={(e: any) => setSelectedValue(e.target.value)}
              variant="radio"
            />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

export const FormExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [deliveryOption, setDeliveryOption] = useState('standard');

    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - 주문 폼 예시
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="medium">
            결제 방법
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalRadio
              system={system}
              label="신용카드"
              name="payment-method"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e: any) => setPaymentMethod(e.target.value)}
              variant="radio"
            />
            <UniversalRadio
              system={system}
              label="계좌이체"
              name="payment-method"
              value="transfer"
              checked={paymentMethod === 'transfer'}
              onChange={(e: any) => setPaymentMethod(e.target.value)}
              variant="radio"
            />
            <UniversalRadio
              system={system}
              label="무통장입금"
              name="payment-method"
              value="deposit"
              checked={paymentMethod === 'deposit'}
              onChange={(e: any) => setPaymentMethod(e.target.value)}
              variant="radio"
            />
          </Frame>
        </Frame>

        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="medium">
            배송 옵션
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <UniversalRadio
              system={system}
              label="일반 배송 (2-3일)"
              name="delivery-option"
              value="standard"
              checked={deliveryOption === 'standard'}
              onChange={(e: any) => setDeliveryOption(e.target.value)}
              variant="checkmark"
            />
            <UniversalRadio
              system={system}
              label="빠른 배송 (1일)"
              name="delivery-option"
              value="express"
              checked={deliveryOption === 'express'}
              onChange={(e: any) => setDeliveryOption(e.target.value)}
              variant="checkmark"
            />
            <UniversalRadio
              system={system}
              label="당일 배송"
              name="delivery-option"
              value="same-day"
              checked={deliveryOption === 'same-day'}
              onChange={(e: any) => setDeliveryOption(e.target.value)}
              variant="checkmark"
            />
          </Frame>
        </Frame>

        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-2" color="secondary-foreground-2">
            선택된 옵션: 결제방법 - {paymentMethod}, 배송 - {deliveryOption}
          </Text>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 주문 폼에서 사용되는 라디오 버튼의 예시입니다.'
      }
    }
  }
}; 