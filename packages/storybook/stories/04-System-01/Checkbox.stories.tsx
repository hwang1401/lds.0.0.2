import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Button } from 'lumir-system-01';
import { Frame, Surface, Sizing, Text } from 'lumir-shared';

const meta: Meta<typeof Checkbox> = {
  title: 'System-01/Compounds/SelectionControls/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Checkbox 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있는 입력 컨트롤입니다. 체크, 미체크, 중간 상태를 지원하며 다양한 인터랙션 상태를 제공합니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: '체크박스의 체크 상태',
    },
    indeterminate: {
      control: 'boolean',
      description: '중간 상태 (일부 선택된 상태)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    label: {
      control: 'text',
      description: '라벨 텍스트',
    },
    showLabel: {
      control: 'boolean',
      description: '라벨 표시 여부',
    },
    name: {
      control: 'text',
      description: '체크박스 이름',
    },
    value: {
      control: 'text',
      description: '체크박스 값',
    },
    onChange: {
      action: 'changed',
      description: '체크 상태 변경 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '기본 체크박스',
    checked: false,
    disabled: false,
    indeterminate: false,
    showLabel: true,
  },
};

// 체크된 상태
export const Checked: Story = {
  args: {
    label: '체크된 체크박스',
    checked: true,
    disabled: false,
    indeterminate: false,
    showLabel: true,
  },
};

// 중간 상태
export const Indeterminate: Story = {
  args: {
    label: '중간 상태 체크박스',
    checked: false,
    indeterminate: true,
    disabled: false,
    showLabel: true,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: '비활성화된 체크박스',
    checked: false,
    disabled: true,
    indeterminate: false,
    showLabel: true,
  },
};

// 라벨 없는 체크박스
export const WithoutLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    showLabel: false,
  },
};

// 모든 상태 비교
export const AllStates: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Text variant="heading-3" weight="bold">기본 상태</Text>
      <Frame display="flex" direction="row" gap="xl">
        <Checkbox label="미체크" checked={false} />
        <Checkbox label="체크됨" checked={true} />
        <Checkbox label="중간 상태" indeterminate={true} />
      </Frame>
      
      <Text variant="heading-3" weight="bold">비활성화 상태</Text>
      <Frame display="flex" direction="row" gap="xl">
        <Checkbox label="미체크 (비활성)" checked={false} disabled={true} />
        <Checkbox label="체크됨 (비활성)" checked={true} disabled={true} />
        <Checkbox label="중간 상태 (비활성)" indeterminate={true} disabled={true} />
      </Frame>
      
      <Text variant="heading-3" weight="bold">라벨 없음</Text>
      <Frame display="flex" direction="row" gap="xl">
        <Checkbox checked={false} showLabel={false} />
        <Checkbox checked={true} showLabel={false} />
        <Checkbox indeterminate={true} showLabel={false} />
      </Frame>
    </Frame>
  ),
};

// 인터랙티브 예제
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    
    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
      setIndeterminate(false);
    };
    
    const handleIndeterminate = () => {
      setIndeterminate(!indeterminate);
      setChecked(false);
    };
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text variant="heading-3" weight="bold">인터랙티브 체크박스</Text>
        <Checkbox 
          label="클릭해보세요" 
          checked={checked}
          indeterminate={indeterminate}
          onChange={handleChange}
        />
        
        <Sizing height="md" />
        <Frame display="flex" direction="row" gap="sm">
          <Button 
            onClick={() => setChecked(!checked)}
            variant="outlined"
            size="sm"
          >
            체크 상태 토글
          </Button>
          <Button 
            onClick={handleIndeterminate}
            variant="outlined"
            size="sm"
          >
            중간 상태 토글
          </Button>
          <Button 
            onClick={() => { setChecked(false); setIndeterminate(false); }}
            variant="outlined"
            size="sm"
          >
            초기화
          </Button>
        </Frame>
        
        <Surface background="secondary-system01-2-rest">
          <Frame display="flex" padding="sm">
            <Text variant="body-2" color="secondary-foreground-2">
            현재 상태: {indeterminate ? '중간 상태' : checked ? '체크됨' : '미체크'}
            </Text>
          </Frame>
        </Surface>
      </Frame>
    );
  },
};

// 폼 예제
export const FormExample: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      newsletter: false,
      notifications: true,
      marketing: false,
    });
    
    const handlePreferenceChange = (key: keyof typeof preferences) => (checked: boolean) => {
      setPreferences(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    
    const allChecked = Object.values(preferences).every(Boolean);
    const someChecked = Object.values(preferences).some(Boolean);
    const indeterminate = someChecked && !allChecked;
    
    const handleSelectAll = (checked: boolean) => {
      setPreferences({
        newsletter: checked,
        notifications: checked,
        marketing: checked,
      });
    };
    
    return (
      <Frame direction="column" gap="md">
        <Text variant="heading-3" weight="bold">설정 예제</Text>
        
        <Checkbox
          label="모두 선택"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleSelectAll}
        />
        
        <Surface background="secondary-system01-2-rest">
          <Sizing height="1px" />
        </Surface>
        
        <Frame paddingLeft="lg">
          <Frame direction="column" gap="sm">
          <Checkbox
            label="뉴스레터 구독"
            checked={preferences.newsletter}
            onChange={handlePreferenceChange('newsletter')}
          />
          <Checkbox
            label="알림 받기"
            checked={preferences.notifications}
            onChange={handlePreferenceChange('notifications')}
          />
          <Checkbox
            label="마케팅 정보 수신"
            checked={preferences.marketing}
            onChange={handlePreferenceChange('marketing')}
          />
        </Frame>
        </Frame>
        
        <Surface background="secondary-system01-2-rest">
          <Frame display="flex" padding="sm">
            <Text variant="body-2" color="secondary-foreground-2">
            선택된 항목: {Object.entries(preferences).filter(([, value]) => value).map(([key]) => key).join(', ') || '없음'}
            </Text>
          </Frame>
        </Surface>
      </Frame>
    );
  },
};

// 접근성 예제
export const Accessibility: Story = {
  render: () => (
    <Frame direction="column" gap="lg">
      <Text variant="heading-3" weight="bold">접근성 고려사항</Text>
      
      <Frame direction="column" gap="md">
        <Checkbox
          label="키보드로 포커스 가능"
          name="keyboard-focus"
          checked={false}
        />
        
        <Checkbox
          label="스크린 리더 지원"
          name="screen-reader"
          checked={true}
        />
        
        <Checkbox
          label="적절한 색상 대비"
          name="color-contrast"
          indeterminate={true}
        />
        
        <Checkbox
          label="비활성화 상태 표시"
          name="disabled-state"
          disabled={true}
          checked={false}
        />
      </Frame>
      
      <Surface background="secondary-system01-2-rest">
        <Frame display="flex" padding="sm">
          <Text variant="body-2" color="secondary-foreground-2">
          Tab 키로 포커스 이동, Space 키로 선택/해제 가능
          </Text>
        </Frame>
      </Surface>
    </Frame>
  ),
}; 
