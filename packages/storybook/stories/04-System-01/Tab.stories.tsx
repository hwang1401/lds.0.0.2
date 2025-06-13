import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tab } from 'lumir-system-01';
import { Text, Frame, Surface } from 'lumir-shared';

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
- **다양한 크기**: \`md\`, \`lg\` 두 가지 크기 지원
- **테두리 제어**: \`showBorder\` prop으로 하단 테두리 표시/숨김 제어
- **아이콘 지원**: 탭 항목에 아이콘 추가 및 위치 설정 가능
- **상태 관리**: Active/Inactive/Hover/Pressed/Disabled 상태 지원
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원

### 사용법
\`\`\`tsx
<Tab defaultSelectedId="tab1" size="lg" showBorder={true}>
  <Tab.List>
    <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">사용자</Tab.Item>
    <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">설정</Tab.Item>
  </Tab.List>
  <Tab.Panel id="tab1">사용자 관련 내용</Tab.Panel>
  <Tab.Panel id="tab2">설정 관련 내용</Tab.Panel>
</Tab>
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
  args: {
    defaultSelectedId: 'tab1',
    size: 'lg',
    showBorder: true,
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: (args) => (
    <Tab {...args}>
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">탭 1</Tab.Item>
        <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">탭 2</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon">탭 3</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">탭 1의 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">탭 2의 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">탭 3의 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tab 컴포넌트의 기본 사용법입니다. Controls 패널에서 size와 showBorder 옵션을 조정해보세요.',
      },
    },
  },
};

export const WithBorder: Story = {
  render: () => (
    <Tab defaultSelectedId="tab1" showBorder={true}>
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">사용자</Tab.Item>
        <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">설정</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon">알림</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">사용자 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">설정 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">알림 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: '기본 테두리가 있는 탭입니다. 선택된 탭은 하단에 강조 테두리가 표시됩니다.',
      },
    },
  },
};

export const WithoutBorder: Story = {
  render: () => (
    <Tab defaultSelectedId="tab1" showBorder={false}>
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">사용자</Tab.Item>
        <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">설정</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon">알림</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">사용자 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">설정 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">알림 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: '테두리가 없는 깔끔한 탭입니다. 선택된 탭은 색상 변화로만 구분됩니다.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <Tab defaultSelectedId="tab1">
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">사용자</Tab.Item>
        <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">설정</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon">알림</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">사용자 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">설정 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">알림 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘이 포함된 탭입니다. 각 탭에 관련된 아이콘을 표시하여 시각적 구분을 개선합니다.',
      },
    },
  },
};

export const IconAbove: Story = {
  render: () => (
    <Tab defaultSelectedId="tab1">
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon" iconPosition="above">사용자</Tab.Item>
        <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon" iconPosition="above">설정</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon" iconPosition="above">알림</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">사용자 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">설정 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">알림 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘이 텍스트 위에 위치한 탭입니다. 수직적인 레이아웃을 제공합니다.',
      },
    },
  },
};

export const IconAfter: Story = {
  render: () => (
    <Tab defaultSelectedId="tab1">
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon" iconPosition="after">사용자</Tab.Item>
        <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon" iconPosition="after">설정</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon" iconPosition="after">알림</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">사용자 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">설정 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">알림 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘이 텍스트 뒤에 위치한 탭입니다. 우측 정렬 아이콘 레이아웃을 제공합니다.',
      },
    },
  },
};

export const WithDisabled: Story = {
  render: () => (
    <Tab defaultSelectedId="tab1">
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">활성화</Tab.Item>
        <Tab.Item id="tab2" disabled icon="LineIconsSettingsSetting1Icon">비활성화</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon">활성화</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">활성화된 탭의 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">비활성화된 탭의 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">활성화된 탭의 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: '비활성화된 탭을 포함한 예제입니다. 비활성화된 탭은 클릭할 수 없고 시각적으로 구분됩니다.',
      },
    },
  },
};

export const MediumSize: Story = {
  render: () => (
    <Tab defaultSelectedId="tab1" size="md">
      <Tab.List>
        <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">사용자</Tab.Item>
        <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">설정</Tab.Item>
        <Tab.Item id="tab3" icon="LineIconsBellOnIcon">알림</Tab.Item>
      </Tab.List>
      <Tab.Panel id="tab1">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-2" weight="bold">사용자 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab2">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-2" weight="bold">설정 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
      <Tab.Panel id="tab3">
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-2" weight="bold">알림 관련 내용입니다.</Text>
          </Frame>
        </Surface>
      </Tab.Panel>
    </Tab>
  ),
  parameters: {
    docs: {
      description: {
        story: '중간 크기(md)의 탭입니다. 더 컴팩트한 인터페이스에 적합합니다.',
      },
    },
  },
};

export const Comparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium" color="secondary-foreground-1-rest">테두리 있음 (showBorder=true)</Text>
        <Tab defaultSelectedId="tab1" showBorder={true}>
          <Tab.List>
            <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">홈</Tab.Item>
            <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">프로필</Tab.Item>
            <Tab.Item id="tab3" icon="LineIconsBellOnIcon">설정</Tab.Item>
          </Tab.List>
          <Tab.Panel id="tab1">
            <Surface background="secondary-system01-1-rest" borderRadius="md">
              <Frame display="flex" direction="column" padding="lg" gap="xs">
                <Text variant="body-1" weight="bold">홈 콘텐츠</Text>
                <Text variant="body-2" color="secondary-foreground-2-rest">
                  선택된 탭에는 파란색 하단 강조 테두리가 표시되고, 전체 탭 리스트에는 회색 하단 테두리가 있습니다.
                </Text>
              </Frame>
            </Surface>
          </Tab.Panel>
          <Tab.Panel id="tab2">
            <Surface background="secondary-system01-1-rest" borderRadius="md">
              <Frame display="flex" direction="column" padding="lg" gap="xs">
                <Text variant="body-1" weight="bold">프로필 콘텐츠</Text>
                <Text variant="body-2" color="secondary-foreground-2-rest">
                  각 탭을 클릭해보세요. 선택된 탭의 색상이 변경됩니다.
                </Text>
              </Frame>
            </Surface>
          </Tab.Panel>
          <Tab.Panel id="tab3">
            <Surface background="secondary-system01-1-rest" borderRadius="md">
              <Frame display="flex" direction="column" padding="lg" gap="xs">
                <Text variant="body-1" weight="bold">설정 콘텐츠</Text>
                <Text variant="body-2" color="secondary-foreground-2-rest">
                  아이콘과 텍스트 모두 선택 상태에 따라 색상이 변경됩니다.
                </Text>
              </Frame>
            </Surface>
          </Tab.Panel>
        </Tab>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium" color="secondary-foreground-1-rest">테두리 없음 (showBorder=false)</Text>
        <Tab defaultSelectedId="tab1" showBorder={false}>
          <Tab.List>
            <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">홈</Tab.Item>
            <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">프로필</Tab.Item>
            <Tab.Item id="tab3" icon="LineIconsBellOnIcon">설정</Tab.Item>
          </Tab.List>
          <Tab.Panel id="tab1">
            <Surface background="secondary-system01-1-rest" borderRadius="md">
              <Frame display="flex" direction="column" padding="lg" gap="xs">
                <Text variant="body-1" weight="bold">홈 콘텐츠</Text>
                <Text variant="body-2" color="secondary-foreground-2-rest">
                  테두리가 없는 깔끔한 스타일입니다. 선택된 탭은 색상 변화로만 구분됩니다.
                </Text>
              </Frame>
            </Surface>
          </Tab.Panel>
          <Tab.Panel id="tab2">
            <Surface background="secondary-system01-1-rest" borderRadius="md">
              <Frame display="flex" direction="column" padding="lg" gap="xs">
                <Text variant="body-1" weight="bold">프로필 콘텐츠</Text>
                <Text variant="body-2" color="secondary-foreground-2-rest">
                  하단 테두리 없이도 선택 상태를 명확하게 구분할 수 있습니다.
                </Text>
              </Frame>
            </Surface>
          </Tab.Panel>
          <Tab.Panel id="tab3">
            <Surface background="secondary-system01-1-rest" borderRadius="md">
              <Frame display="flex" direction="column" padding="lg" gap="xs">
                <Text variant="body-1" weight="bold">설정 콘텐츠</Text>
                <Text variant="body-2" color="secondary-foreground-2-rest">
                  미니멀한 디자인을 원할 때 적합한 스타일입니다.
                </Text>
              </Frame>
            </Surface>
          </Tab.Panel>
        </Tab>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '테두리 있음/없음을 비교해볼 수 있는 예제입니다. **Surface의 foreground 속성**을 통해 선택된 탭의 텍스트와 아이콘 색상이 일관되게 변경됩니다. 테두리가 있는 경우 선택된 탭에는 **파란색 하단 강조 테두리**가 표시됩니다.',
      },
    },
  },
}; 
