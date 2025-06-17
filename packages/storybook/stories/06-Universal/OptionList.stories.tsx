import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionList as System01OptionList } from '@lumir/system-01';
import { OptionList as System02OptionList } from '@lumir/system-02';
import { Frame, Surface, Sizing, Text } from '@lumir/shared';

// 시스템별 OptionList 컴포넌트 매핑
const OptionListComponents = {
  'system-01': System01OptionList,
  'system-02': System02OptionList,
};

// 동적 OptionList 컴포넌트
const UniversalOptionList = ({ system, ...props }: any) => {
  const OptionListComponent = OptionListComponents[system as keyof typeof OptionListComponents] || System01OptionList;
  return <OptionListComponent {...props} />;
};

const meta: Meta<typeof UniversalOptionList> = {
  title: 'Components/OptionList',
  component: UniversalOptionList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'OptionList 컴포넌트는 선택 가능한 옵션 아이템을 나타냅니다. ComboBox, 드롭다운 메뉴, 선택 목록 등에서 사용할 수 있는 범용적인 컴포넌트입니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['menu-header', 'single-select', 'radio', 'multi-select', 'radio-component', 'checkbox-component'],
      description: '옵션 아이템의 타입'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hovered', 'pressed', 'focused', 'disabled', 'selected'],
      description: '옵션 아이템의 상태'
    },
    selected: {
      control: { type: 'boolean' },
      description: '선택 상태 여부'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태 여부'
    },
    children: {
      control: { type: 'text' },
      description: '옵션 아이템 텍스트'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single-select',
    children: '기본 옵션',
  },
  decorators: [
    (Story) => (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Sizing width="200px">
          <Frame display="flex" padding="lg" fill>
            <Story />
          </Frame>
        </Sizing>
      </Surface>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalOptionList {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '기본 OptionList 컴포넌트입니다.'
      }
    }
  }
};

export const SystemComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 01 - Clean & Efficient (파란색, 직각)
        </Text>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Sizing width="250px">
            <Frame display="flex" padding="lg" direction="column" gap="xs" fill>
              <UniversalOptionList system="system-01" type="menu-header">메뉴 헤더</UniversalOptionList>
              <UniversalOptionList system="system-01" type="single-select">단일 선택 옵션</UniversalOptionList>
              <UniversalOptionList system="system-01" type="radio" selected>라디오 옵션 (선택됨)</UniversalOptionList>
              <UniversalOptionList system="system-01" type="multi-select" selected>다중 선택 옵션 (선택됨)</UniversalOptionList>
              <UniversalOptionList system="system-01" type="single-select" disabled>비활성화 옵션</UniversalOptionList>
            </Frame>
          </Sizing>
        </Surface>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 02 - Modern & Friendly (초록색, 둥근 모서리)
        </Text>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Sizing width="250px">
            <Frame display="flex" padding="lg" direction="column" gap="xs" fill>
              <UniversalOptionList system="system-02" type="menu-header">메뉴 헤더</UniversalOptionList>
              <UniversalOptionList system="system-02" type="single-select">단일 선택 옵션</UniversalOptionList>
              <UniversalOptionList system="system-02" type="radio" selected>라디오 옵션 (선택됨)</UniversalOptionList>
              <UniversalOptionList system="system-02" type="multi-select" selected>다중 선택 옵션 (선택됨)</UniversalOptionList>
              <UniversalOptionList system="system-02" type="single-select" disabled>비활성화 옵션</UniversalOptionList>
            </Frame>
          </Sizing>
        </Surface>
      </Frame>
    </Frame>
  ),
};

export const Types: Story = {
  decorators: [
    (Story) => (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Sizing width="250px">
          <Frame display="flex" padding="lg" fill>
            <Story />
          </Frame>
        </Sizing>
      </Surface>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Option Types
        </Text>
        <Frame display="flex" direction="column" gap="xs">
          <UniversalOptionList system={system} type="menu-header">헤더 옵션</UniversalOptionList>
          <UniversalOptionList system={system} type="single-select">단일 선택 옵션</UniversalOptionList>
          <UniversalOptionList system={system} type="radio" selected>라디오 옵션 (선택됨)</UniversalOptionList>
          <UniversalOptionList system={system} type="radio">라디오 옵션</UniversalOptionList>
          <UniversalOptionList system={system} type="multi-select" selected>다중 선택 옵션 (선택됨)</UniversalOptionList>
          <UniversalOptionList system={system} type="multi-select">다중 선택 옵션</UniversalOptionList>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 타입의 OptionList를 보여줍니다.'
      }
    }
  }
};

export const States: Story = {
  decorators: [
    (Story) => (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Sizing width="200px">
          <Frame display="flex" padding="lg" fill>
            <Story />
          </Frame>
        </Sizing>
      </Surface>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Option States
        </Text>
        <Frame display="flex" direction="column" gap="xs">
          <UniversalOptionList system={system} state="default">기본 상태</UniversalOptionList>
          <UniversalOptionList system={system} state="hovered">호버 상태</UniversalOptionList>
          <UniversalOptionList system={system} state="pressed">눌림 상태</UniversalOptionList>
          <UniversalOptionList system={system} state="focused">포커스 상태</UniversalOptionList>
          <UniversalOptionList system={system} state="selected">선택 상태</UniversalOptionList>
          <UniversalOptionList system={system} state="disabled" disabled>비활성화 상태</UniversalOptionList>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'OptionList의 다양한 상태를 보여줍니다.'
      }
    }
  }
};

export const WithRadioComponent: Story = {
  decorators: [
    (Story) => (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Sizing width="250px">
          <Frame display="flex" padding="lg" fill>
            <Story />
          </Frame>
        </Sizing>
      </Surface>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = React.useState('option1');
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Radio Component
        </Text>
        <Frame display="flex" direction="column" gap="xs">
          <UniversalOptionList system={system} type="menu-header">우선순위 선택</UniversalOptionList>
          <UniversalOptionList 
            system={system}
            type="radio-component"
            radioName="priority"
            radioValue="option1"
            radioChecked={selectedValue === 'option1'}
            onRadioChange={setSelectedValue}
          >
            높음
          </UniversalOptionList>
          <UniversalOptionList 
            system={system}
            type="radio-component"
            radioName="priority"
            radioValue="option2"
            radioChecked={selectedValue === 'option2'}
            onRadioChange={setSelectedValue}
          >
            보통
          </UniversalOptionList>
          <UniversalOptionList 
            system={system}
            type="radio-component"
            radioName="priority"
            radioValue="option3"
            radioChecked={selectedValue === 'option3'}
            onRadioChange={setSelectedValue}
          >
            낮음
          </UniversalOptionList>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'OptionList에 실제 Radio 컴포넌트를 사용하는 예시입니다.'
      }
    }
  }
};

export const WithCheckboxComponent: Story = {
  decorators: [
    (Story) => (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Sizing width="250px">
          <Frame display="flex" padding="lg" fill>
            <Story />
          </Frame>
        </Sizing>
      </Surface>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [permissions, setPermissions] = React.useState({
      read: true,
      write: false,
      delete: false,
      admin: false,
    });

    const handlePermissionChange = (permission: string, checked: boolean) => {
      setPermissions(prev => ({
        ...prev,
        [permission]: checked
      }));
    };
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Checkbox Component
        </Text>
        <Frame display="flex" direction="column" gap="xs">
          <UniversalOptionList system={system} type="menu-header">권한 설정</UniversalOptionList>
          <UniversalOptionList 
            system={system}
            type="checkbox-component"
            checkboxChecked={permissions.read}
            onCheckboxChange={(checked: boolean) => handlePermissionChange('read', checked)}
          >
            읽기 권한
          </UniversalOptionList>
          <UniversalOptionList 
            system={system}
            type="checkbox-component"
            checkboxChecked={permissions.write}
            onCheckboxChange={(checked: boolean) => handlePermissionChange('write', checked)}
          >
            쓰기 권한
          </UniversalOptionList>
          <UniversalOptionList 
            system={system}
            type="checkbox-component"
            checkboxChecked={permissions.delete}
            onCheckboxChange={(checked: boolean) => handlePermissionChange('delete', checked)}
          >
            삭제 권한
          </UniversalOptionList>
          <UniversalOptionList 
            system={system}
            type="checkbox-component"
            checkboxChecked={permissions.admin}
            onCheckboxChange={(checked: boolean) => handlePermissionChange('admin', checked)}
          >
            관리자 권한
          </UniversalOptionList>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'OptionList에 실제 Checkbox 컴포넌트를 사용하는 예시입니다.'
      }
    }
  }
};

export const MenuExample: Story = {
  decorators: [
    (Story) => (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Sizing width="300px">
          <Frame display="flex" padding="lg" fill>
            <Story />
          </Frame>
        </Sizing>
      </Surface>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedAction, setSelectedAction] = React.useState('');
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - 컨텍스트 메뉴 예시
        </Text>
        <Frame display="flex" direction="column" gap="xs">
          <UniversalOptionList 
            system={system} 
            type="single-select"
            state={selectedAction === 'copy' ? 'selected' : 'default'}
            onClick={() => setSelectedAction('copy')}
          >
            복사
          </UniversalOptionList>
          <UniversalOptionList 
            system={system} 
            type="single-select"
            state={selectedAction === 'cut' ? 'selected' : 'default'}
            onClick={() => setSelectedAction('cut')}
          >
            잘라내기
          </UniversalOptionList>
          <UniversalOptionList 
            system={system} 
            type="single-select"
            state={selectedAction === 'paste' ? 'selected' : 'default'}
            onClick={() => setSelectedAction('paste')}
          >
            붙여넣기
          </UniversalOptionList>
          <UniversalOptionList system={system} type="menu-header">---</UniversalOptionList>
          <UniversalOptionList 
            system={system} 
            type="single-select"
            state={selectedAction === 'delete' ? 'selected' : 'default'}
            onClick={() => setSelectedAction('delete')}
          >
            삭제
          </UniversalOptionList>
        </Frame>
        {selectedAction && (
          <Text variant="caption-1" color="secondary-foreground-2">
            선택된 액션: {selectedAction}
          </Text>
        )}
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 컨텍스트 메뉴에서 사용되는 OptionList의 예시입니다.'
      }
    }
  }
}; 