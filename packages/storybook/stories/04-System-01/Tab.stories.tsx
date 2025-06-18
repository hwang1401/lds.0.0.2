import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tab } from '@lumir/system-01';
import { Text, Frame, Surface } from '@lumir/shared';

const meta: Meta<typeof Tab> = {
  title: 'System-01/Compounds/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Tab 컴포넌트는 사용자가 여러 콘텐츠 섹션 사이를 전환할 수 있게 해주는 네비게이션 컴포넌트입니다.

### 주요 특징
- **단순한 구조**: 하나의 컴포넌트로 탭과 내용을 모두 관리
- **다양한 크기**: \`md\`, \`lg\` 두 가지 크기 지원
- **테두리 제어**: \`showBorder\` prop으로 하단 테두리 표시/숨김 제어
- **아이콘 지원**: 탭 항목에 아이콘 추가 가능
- **상태 관리**: Active/Inactive/Disabled 상태 지원
- **콜백 지원**: \`onChange\` 콜백으로 탭 변경 감지

### 사용법
\`\`\`tsx
const tabItems = [
  { id: 'tab1', label: '사용자', content: <div>사용자 내용</div>, icon: 'LineIconsPersonPersonIcon' },
  { id: 'tab2', label: '설정', content: <div>설정 내용</div>, icon: 'LineIconsSettingsSetting1Icon' },
];

<Tab 
  items={tabItems} 
  defaultSelectedId="tab1" 
  size="lg" 
  showBorder={true}
  onChange={(selectedId) => console.log('Selected:', selectedId)}
/>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: '탭의 크기를 설정합니다.',
      table: {
        defaultValue: { summary: 'lg' }
      }
    },
    showBorder: {
      control: 'boolean',
      description: '하단 테두리 표시 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    defaultSelectedId: {
      control: 'text',
      description: '초기에 선택될 탭의 ID를 설정합니다.',
      table: {
        type: { summary: 'string' }
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

const sampleItems = [
  {
    id: 'tab1',
    label: '사용자',
    icon: 'LineIconsPersonPersonIcon',
    content: (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame display="flex" direction="column" padding="lg" gap="xs">
          <Text variant="body-1" weight="bold">사용자 관련 내용입니다.</Text>
          <Text variant="body-2">사용자 프로필, 계정 설정 등을 관리할 수 있습니다.</Text>
        </Frame>
      </Surface>
    )
  },
  {
    id: 'tab2',
    label: '설정',
    icon: 'LineIconsSettingsSetting1Icon',
    content: (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame display="flex" direction="column" padding="lg" gap="xs">
          <Text variant="body-1" weight="bold">설정 관련 내용입니다.</Text>
          <Text variant="body-2">애플리케이션 설정을 변경할 수 있습니다.</Text>
        </Frame>
      </Surface>
    )
  },
  {
    id: 'tab3',
    label: '알림',
    icon: 'LineIconsBellOnIcon',
    content: (
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame display="flex" direction="column" padding="lg" gap="xs">
          <Text variant="body-1" weight="bold">알림 관련 내용입니다.</Text>
          <Text variant="body-2">알림 설정을 관리할 수 있습니다.</Text>
        </Frame>
      </Surface>
    )
  }
];

export const Default: Story = {
  args: {
    items: sampleItems,
    defaultSelectedId: 'tab1',
    size: 'lg',
    showBorder: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab 컴포넌트의 기본 사용법입니다. Controls 패널에서 size와 showBorder 옵션을 조정해보세요.',
      },
    },
  },
};

export const WithBorder: Story = {
  args: {
    items: sampleItems,
    defaultSelectedId: 'tab1',
    showBorder: true,
  },
  parameters: {
    docs: {
      description: {
        story: '기본 테두리가 있는 탭입니다. 선택된 탭은 하단에 강조 테두리가 표시됩니다.',
      },
    },
  },
};

export const WithoutBorder: Story = {
  args: {
    items: sampleItems,
    defaultSelectedId: 'tab1',
    showBorder: false,
  },
  parameters: {
    docs: {
      description: {
        story: '테두리가 없는 깔끔한 탭입니다. 선택된 탭은 색상 변화로만 구분됩니다.',
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    items: sampleItems,
    defaultSelectedId: 'tab1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘이 포함된 탭입니다. 각 탭에 의미를 나타내는 아이콘이 표시됩니다.',
      },
    },
  },
};

export const WithoutIcons: Story = {
  args: {
    items: sampleItems.map(item => ({ ...item, icon: undefined })),
    defaultSelectedId: 'tab1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘 없이 텍스트만 표시되는 탭입니다.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    items: sampleItems,
    defaultSelectedId: 'tab1',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '작은 크기의 탭입니다. 공간이 제한적인 곳에서 사용하기 적합합니다.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    items: sampleItems,
    defaultSelectedId: 'tab1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: '큰 크기의 탭입니다. 기본 크기로 설정되어 있습니다.',
      },
    },
  },
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      ...sampleItems.slice(0, 2),
      {
        ...sampleItems[2],
        disabled: true,
      }
    ],
    defaultSelectedId: 'tab1',
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 탭이 포함된 예시입니다. 비활성화된 탭은 클릭할 수 없습니다.',
      },
    },
  },
};

export const WithCallback: Story = {
  args: {
    items: sampleItems,
    defaultSelectedId: 'tab1',
    onChange: (selectedId: string) => {
      console.log('Tab changed to:', selectedId);
      alert(`탭이 변경되었습니다: ${selectedId}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'onChange 콜백이 설정된 탭입니다. 탭을 클릭하면 콜백이 실행됩니다.',
      },
    },
  },
}; 
