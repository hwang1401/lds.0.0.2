import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionList } from '@lumir/system-01';
import { Frame, Surface, Sizing } from '@lumir/shared';

const meta: Meta<typeof OptionList> = {
  title: 'System-01/Compounds/OptionList',
  component: OptionList,
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

// 기본 옵션
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
  parameters: {
    docs: {
      description: {
        story: '기본 OptionList 컴포넌트입니다.'
      }
    }
  }
};

// 다양한 타입들
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
  render: () => (
    <Frame display="flex" direction="column" gap="xs">
      <OptionList type="menu-header">헤더 옵션</OptionList>
      <OptionList type="single-select">단일 선택 옵션</OptionList>
      <OptionList type="radio" selected>라디오 옵션 (선택됨)</OptionList>
      <OptionList type="radio">라디오 옵션</OptionList>
      <OptionList type="multi-select" selected>다중 선택 옵션 (선택됨)</OptionList>
      <OptionList type="multi-select">다중 선택 옵션</OptionList>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 타입의 OptionList를 보여줍니다.'
      }
    }
  }
};

// 상태별 표시
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
  render: () => (
    <Frame display="flex" direction="column" gap="xs">
      <OptionList state="default">기본 상태</OptionList>
      <OptionList state="hovered">호버 상태</OptionList>
      <OptionList state="pressed">눌림 상태</OptionList>
      <OptionList state="focused">포커스 상태</OptionList>
      <OptionList state="selected">선택 상태</OptionList>
      <OptionList state="disabled" disabled>비활성화 상태</OptionList>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: 'OptionList의 다양한 상태를 보여줍니다.'
      }
    }
  }
};

// Radio 컴포넌트 사용
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
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');
    
    return (
      <Frame display="flex" direction="column" gap="xs">
        <OptionList type="menu-header">우선순위 선택</OptionList>
        <OptionList 
          type="radio-component"
          radioName="priority"
          radioValue="option1"
          radioChecked={selectedValue === 'option1'}
          onRadioChange={setSelectedValue}
        >
          높음
        </OptionList>
        <OptionList 
          type="radio-component"
          radioName="priority"
          radioValue="option2"
          radioChecked={selectedValue === 'option2'}
          onRadioChange={setSelectedValue}
        >
          보통
        </OptionList>
        <OptionList 
          type="radio-component"
          radioName="priority"
          radioValue="option3"
          radioChecked={selectedValue === 'option3'}
          onRadioChange={setSelectedValue}
        >
          낮음
        </OptionList>
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

// Checkbox 컴포넌트 사용
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
  render: () => {
    const [permissions, setPermissions] = React.useState({
      read: true,
      write: false,
      execute: false
    });
    
    const handlePermissionChange = (permission: string, checked: boolean) => {
      setPermissions(prev => ({
        ...prev,
        [permission]: checked
      }));
    };
    
    return (
      <Frame display="flex" direction="column" gap="xs">
        <OptionList type="menu-header">권한 설정</OptionList>
        <OptionList 
          type="checkbox-component"
          checkboxName="read"
          checkboxValue="read"
          checkboxChecked={permissions.read}
          onCheckboxChange={(checked) => handlePermissionChange('read', checked)}
        >
          읽기 권한
        </OptionList>
        <OptionList 
          type="checkbox-component"
          checkboxName="write"
          checkboxValue="write"
          checkboxChecked={permissions.write}
          onCheckboxChange={(checked) => handlePermissionChange('write', checked)}
        >
          쓰기 권한
        </OptionList>
        <OptionList 
          type="checkbox-component"
          checkboxName="execute"
          checkboxValue="execute"
          checkboxChecked={permissions.execute}
          onCheckboxChange={(checked) => handlePermissionChange('execute', checked)}
        >
          실행 권한
        </OptionList>
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
