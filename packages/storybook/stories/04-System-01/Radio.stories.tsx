import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@lumir/system-01';
import { Frame, Text } from '@lumir/shared';

const meta: Meta<typeof Radio> = {
  title: 'System-01/Compounds/SelectionControls/Radio',
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

// 기본 라디오 버튼 (radio 스타일)
export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'default-group',
    value: 'option1',
    variant: 'radio'
  }
};

// 체크마크 스타일
export const Checkmark: Story = {
  args: {
    label: 'Option 1',
    name: 'checkmark-group',
    value: 'option1',
    variant: 'checkmark'
  }
};

// 선택된 상태 (radio)
export const CheckedRadio: Story = {
  args: {
    label: 'Selected Option',
    checked: true,
    name: 'checked-radio-group',
    value: 'selected',
    variant: 'radio'
  }
};

// 선택된 상태 (checkmark)
export const CheckedCheckmark: Story = {
  args: {
    label: 'Selected Option',
    checked: true,
    name: 'checked-checkmark-group',
    value: 'selected',
    variant: 'checkmark'
  }
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    disabled: true,
    name: 'disabled-group',
    value: 'disabled'
  }
};

// 비활성화 + 선택된 상태
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Selected',
    checked: true,
    disabled: true,
    name: 'disabled-checked-group',
    value: 'disabled-checked'
  }
};

// 라벨 없음
export const NoLabel: Story = {
  args: {
    showLabel: false,
    name: 'no-label-group',
    value: 'no-label'
  }
};

// 모든 상태 비교
export const AllStates: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xxxl">
      <Text variant="heading-2" weight="medium" color="primary-foreground-1">
        Radio 버튼 모든 상태
      </Text>
      
      <Frame display="flex" direction="column" gap="lg">
        <Text variant="body-1" weight="medium" color="secondary-foreground-1">
          Radio 스타일 (원형)
        </Text>
        <Frame display="flex" direction="column" gap="md">
          <Text variant="caption-1" color="secondary-foreground-3">기본 상태</Text>
          <Frame display="flex" direction="column" gap="sm">
            <Radio label="기본 상태" name="radio-states" value="default" variant="radio" />
            <Radio label="선택된 상태" checked name="radio-states" value="checked" variant="radio" />
          </Frame>
          
          <Text variant="caption-1" color="secondary-foreground-3">비활성화 상태</Text>
          <Frame display="flex" direction="column" gap="sm">
            <Radio label="비활성화" disabled name="radio-disabled" value="disabled" variant="radio" />
            <Radio label="비활성화 + 선택" checked disabled name="radio-disabled" value="disabled-checked" variant="radio" />
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
            <Radio label="기본 상태" name="checkmark-states" value="default" variant="checkmark" />
            <Radio label="선택된 상태" checked name="checkmark-states" value="checked" variant="checkmark" />
          </Frame>
          
          <Text variant="caption-1" color="secondary-foreground-3">비활성화 상태</Text>
          <Frame display="flex" direction="column" gap="sm">
            <Radio label="비활성화" disabled name="checkmark-disabled" value="disabled" variant="checkmark" />
            <Radio label="비활성화 + 선택" checked disabled name="checkmark-disabled" value="disabled-checked" variant="checkmark" />
          </Frame>
        </Frame>
      </Frame>

      <Frame display="flex" direction="column" gap="md">
        <Text variant="body-1" weight="medium" color="secondary-foreground-1">
          라벨 없음
        </Text>
        <Frame display="flex" direction="row" gap="md">
          <Radio showLabel={false} name="no-label-radio" value="no-label-1" variant="radio" />
          <Radio showLabel={false} checked name="no-label-radio" value="no-label-2" variant="radio" />
          <Radio showLabel={false} name="no-label-checkmark" value="no-label-3" variant="checkmark" />
          <Radio showLabel={false} checked name="no-label-checkmark" value="no-label-4" variant="checkmark" />
        </Frame>
      </Frame>
    </Frame>
  )
};

// 인터랙티브 라디오 그룹 (두 스타일 비교)
export const InteractiveGroup: Story = {
  render: () => {
    const [radioValue, setRadioValue] = useState('option1');
    const [checkmarkValue, setCheckmarkValue] = useState('option1');

    return (
      <Frame display="flex" direction="column" gap="xxxl">
        <Text variant="heading-2" weight="medium" color="primary-foreground-1">
          인터랙티브 라디오 그룹
        </Text>
        
        <Frame display="flex" direction="row" gap="xxxl">
          <Frame display="flex" direction="column" gap="lg">
            <Text variant="body-1" weight="medium" color="secondary-foreground-1">
              Radio 스타일
            </Text>
            <Frame display="flex" direction="column" gap="sm">
              <Radio
                label="옵션 1"
                name="interactive-radio"
                value="option1"
                variant="radio"
                checked={radioValue === 'option1'}
                onChange={setRadioValue}
              />
              <Radio
                label="옵션 2"
                name="interactive-radio"
                value="option2"
                variant="radio"
                checked={radioValue === 'option2'}
                onChange={setRadioValue}
              />
              <Radio
                label="옵션 3"
                name="interactive-radio"
                value="option3"
                variant="radio"
                checked={radioValue === 'option3'}
                onChange={setRadioValue}
              />
            </Frame>
            <Text variant="caption-1" color="secondary-foreground-3">
              선택된 값: <Text as="span" weight="medium" color="primary-foreground-1">{radioValue}</Text>
            </Text>
          </Frame>

          <Frame display="flex" direction="column" gap="lg">
            <Text variant="body-1" weight="medium" color="secondary-foreground-1">
              Checkmark 스타일
            </Text>
            <Frame display="flex" direction="column" gap="sm">
              <Radio
                label="옵션 1"
                name="interactive-checkmark"
                value="option1"
                variant="checkmark"
                checked={checkmarkValue === 'option1'}
                onChange={setCheckmarkValue}
              />
              <Radio
                label="옵션 2"
                name="interactive-checkmark"
                value="option2"
                variant="checkmark"
                checked={checkmarkValue === 'option2'}
                onChange={setCheckmarkValue}
              />
              <Radio
                label="옵션 3"
                name="interactive-checkmark"
                value="option3"
                variant="checkmark"
                checked={checkmarkValue === 'option3'}
                onChange={setCheckmarkValue}
              />
            </Frame>
            <Text variant="caption-1" color="secondary-foreground-3">
              선택된 값: <Text as="span" weight="medium" color="primary-foreground-1">{checkmarkValue}</Text>
            </Text>
          </Frame>
        </Frame>
      </Frame>
    );
  }
};

// 폼 예제
export const FormExample: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [shippingMethod, setShippingMethod] = useState('standard');

    return (
      <Frame display="flex" direction="column" gap="xxxl">
        <Text variant="heading-2" weight="medium" color="primary-foreground-1">
          주문 폼 예제
        </Text>
        
        <Frame display="flex" direction="column" gap="lg">
          <Frame display="flex" direction="column" gap="md">
            <Text variant="body-1" weight="medium" color="secondary-foreground-1">
              결제 방법 (Radio 스타일)
            </Text>
            <Frame display="flex" direction="column" gap="sm">
              <Radio
                label="신용카드"
                name="payment"
                value="card"
                variant="radio"
                checked={paymentMethod === 'card'}
                onChange={setPaymentMethod}
              />
              <Radio
                label="계좌이체"
                name="payment"
                value="transfer"
                variant="radio"
                checked={paymentMethod === 'transfer'}
                onChange={setPaymentMethod}
              />
              <Radio
                label="무통장입금"
                name="payment"
                value="deposit"
                variant="radio"
                checked={paymentMethod === 'deposit'}
                onChange={setPaymentMethod}
              />
            </Frame>
          </Frame>

          <Frame display="flex" direction="column" gap="md">
            <Text variant="body-1" weight="medium" color="secondary-foreground-1">
              배송 방법 (Checkmark 스타일)
            </Text>
            <Frame display="flex" direction="column" gap="sm">
              <Radio
                label="일반배송 (2-3일)"
                name="shipping"
                value="standard"
                variant="checkmark"
                checked={shippingMethod === 'standard'}
                onChange={setShippingMethod}
              />
              <Radio
                label="빠른배송 (1일)"
                name="shipping"
                value="express"
                variant="checkmark"
                checked={shippingMethod === 'express'}
                onChange={setShippingMethod}
              />
              <Radio
                label="당일배송"
                name="shipping"
                value="same-day"
                variant="checkmark"
                checked={shippingMethod === 'same-day'}
                onChange={setShippingMethod}
              />
            </Frame>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="xs">
          <Text variant="caption-1" color="secondary-foreground-3">
            결제 방법: <Text as="span" weight="medium" color="primary-foreground-1">{paymentMethod}</Text>
          </Text>
          <Text variant="caption-1" color="secondary-foreground-3">
            배송 방법: <Text as="span" weight="medium" color="primary-foreground-1">{shippingMethod}</Text>
          </Text>
        </Frame>
      </Frame>
    );
  }
};

// 접근성 예제
export const AccessibilityExample: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Text variant="heading-2" weight="medium" color="primary-foreground-1">
        접근성 예제
      </Text>
      
      <Frame display="flex" direction="column" gap="md">
        <Text variant="caption-1" color="secondary-foreground-3">
          키보드로 탐색해보세요 (Tab, Arrow keys, Space)
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <Radio
            label="첫 번째 옵션"
            name="accessibility"
            value="first"
            variant="radio"
          />
          <Radio
            label="두 번째 옵션"
            name="accessibility"
            value="second"
            variant="radio"
          />
          <Radio
            label="세 번째 옵션"
            name="accessibility"
            value="third"
            variant="radio"
          />
        </Frame>
      </Frame>
    </Frame>
  )
}; 
