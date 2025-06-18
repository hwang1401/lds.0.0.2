import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Surface, Frame, Text } from '@lumir/shared';

// System 컴포넌트들을 import
import { Tab as System01Tab, TabItem } from '@lumir/system-01';
import { Tab as System02Tab } from '@lumir/system-02';

// Universal props 타입
interface UniversalTabProps {
  system?: 'system-01' | 'system-02';
  defaultSelectedId?: string;
  size?: 'md' | 'lg';
  showBorder?: boolean;
}

// 공통 탭 아이템 데이터
const commonTabItems: TabItem[] = [
  { id: 'tab1', label: '홈', icon: 'LineIconsPersonPersonIcon' },
  { id: 'tab2', label: '제품', icon: 'LineIconsSettingsSetting1Icon' },
  { id: 'tab3', label: '서비스', icon: 'LineIconsBellOnIcon' },
  { id: 'tab4', label: '연락처', icon: 'LineIconsMessageCircleIcon' }
];

// Universal 래퍼 컴포넌트
const UniversalTab: React.FC<UniversalTabProps> = ({ 
  system = 'system-01',
  defaultSelectedId = 'tab1',
  size = 'lg',
  showBorder = true
}) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);
  const TabComponent = system === 'system-01' ? System01Tab : System02Tab;
  
  return (
    <Frame display="flex" direction="column" gap="md" key={system}>
      {/* 탭 버튼들만 표시 */}
      <TabComponent 
        items={commonTabItems}
        selectedId={selectedId}
        size={size}
        showBorder={showBorder}
        onChange={setSelectedId}
      />
    </Frame>
  );
};

const meta: Meta<UniversalTabProps> = {
  title: 'components/Tab',
  component: UniversalTab,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
탭 네비게이션 컴포넌트입니다. 두 시스템 간의 시각적 차이를 보여줍니다.

## 시스템별 특징
- **System-01**: Professional & Clean (블루 계열, 작은 radius)
- **System-02**: Friendly & Bright (퍼플 계열, 큰 radius)

## 사용법
\`\`\`tsx
import { Tab } from '@lumir/system-01'; // 또는 system-02

const tabItems = [
  { id: 'tab1', label: '홈', icon: 'LineIconsPersonPersonIcon' },
  { id: 'tab2', label: '설정', icon: 'LineIconsSettingsSetting1Icon' }
];

<Tab 
  items={tabItems}
  defaultSelectedId="tab1" 
  size="lg" 
  showBorder={true}
  onChange={(selectedId) => console.log(selectedId)}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    defaultSelectedId: {
      control: { type: 'select' },
      options: ['tab1', 'tab2', 'tab3', 'tab4'],
      description: '기본 선택된 탭',
    },
    size: {
      control: { type: 'select' },
      options: ['md', 'lg'],
      description: '탭 크기',
    },
    showBorder: {
      control: { type: 'boolean' },
      description: '하단 테두리 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<UniversalTabProps>;

// 기본 탭
export const Default: Story = {
  args: {
    defaultSelectedId: 'tab1',
    size: 'lg',
    showBorder: true,
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalTab {...args} system={system} />;
  },
};

// 크기별 탭
export const Sizes: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const TabComponent = system === 'system-01' ? System01Tab : System02Tab;
    
    const largeItems = [
      { id: 'large1', label: 'Large Tab', icon: 'LineIconsPersonPersonIcon' },
      { id: 'large2', label: 'Large Tab', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'large3', label: 'Large Tab', icon: 'LineIconsBellOnIcon' }
    ];

    const mediumItems = [
      { id: 'medium1', label: 'Medium Tab', icon: 'LineIconsPersonPersonIcon' },
      { id: 'medium2', label: 'Medium Tab', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'medium3', label: 'Medium Tab', icon: 'LineIconsBellOnIcon' }
    ];
    
    return (
      <Frame gap="xl" maxWidth="800px" key={system}>
        <Frame gap="md">
          <Text variant="heading-3" weight="bold">Large 크기 (기본)</Text>
          <Frame gap="sm">
            <TabComponent 
              items={largeItems}
              defaultSelectedId="large1" 
              size="lg" 
              showBorder={true}
            />
          </Frame>
        </Frame>

        <Frame gap="md">
          <Text variant="heading-3" weight="bold">Medium 크기</Text>
          <Frame gap="sm">
            <TabComponent 
              items={mediumItems}
              defaultSelectedId="medium1" 
              size="md" 
              showBorder={true}
            />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

// 상태별 탭
export const States: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const TabComponent = system === 'system-01' ? System01Tab : System02Tab;
    
    const normalItems = [
      { id: 'normal1', label: '정상', icon: 'LineIconsPersonPersonIcon' },
      { id: 'normal2', label: '정상', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'normal3', label: '정상', icon: 'LineIconsBellOnIcon' }
    ];

    const disabledItems = [
      { id: 'disabled1', label: '활성', icon: 'LineIconsPersonPersonIcon' },
      { id: 'disabled2', label: '비활성', icon: 'LineIconsSettingsSetting1Icon', disabled: true },
      { id: 'disabled3', label: '활성', icon: 'LineIconsBellOnIcon' }
    ];
    
    return (
      <Frame gap="xl" maxWidth="800px" key={system}>
        <Frame gap="md">
          <Text variant="heading-3" weight="bold">정상 상태</Text>
          <Frame gap="sm">
            <TabComponent 
              items={normalItems}
              defaultSelectedId="normal1" 
              size="lg" 
              showBorder={true}
            />
          </Frame>
        </Frame>

        <Frame gap="md">
          <Text variant="heading-3" weight="bold">비활성화 상태</Text>
          <Frame gap="sm">
            <TabComponent 
              items={disabledItems}
              defaultSelectedId="disabled1" 
              size="lg" 
              showBorder={true}
            />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

// 보더 옵션
export const BorderOptions: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const TabComponent = system === 'system-01' ? System01Tab : System02Tab;
    
    const borderItems = [
      { id: 'border1', label: '탭 1', icon: 'LineIconsPersonPersonIcon' },
      { id: 'border2', label: '탭 2', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'border3', label: '탭 3', icon: 'LineIconsBellOnIcon' }
    ];

    const noBorderItems = [
      { id: 'noborder1', label: '탭 1', icon: 'LineIconsPersonPersonIcon' },
      { id: 'noborder2', label: '탭 2', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'noborder3', label: '탭 3', icon: 'LineIconsBellOnIcon' }
    ];
    
    return (
      <Frame gap="xl" maxWidth="800px" key={system}>
        <Frame gap="md">
          <Text variant="heading-3" weight="bold">보더 있음 (기본)</Text>
          <Frame gap="sm">
            <TabComponent 
              items={borderItems}
              defaultSelectedId="border1" 
              size="lg" 
              showBorder={true}
            />
          </Frame>
        </Frame>

        <Frame gap="md">
          <Text variant="heading-3" weight="bold">보더 없음</Text>
          <Frame gap="sm">
            <TabComponent 
              items={noBorderItems}
              defaultSelectedId="noborder1" 
              size="lg" 
              showBorder={false}
            />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

// 시스템 비교
export const SystemComparison: Story = {
  render: () => {
    const [system01Selected, setSystem01Selected] = useState('system01-1');
    const [system02Selected, setSystem02Selected] = useState('system02-1');

    const comparisonItems = [
      { id: 'system01-1', label: '홈', icon: 'LineIconsPersonPersonIcon' },
      { id: 'system01-2', label: '제품', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'system01-3', label: '서비스', icon: 'LineIconsBellOnIcon' }
    ];

    const system02Items = [
      { id: 'system02-1', label: '홈', icon: 'LineIconsPersonPersonIcon' },
      { id: 'system02-2', label: '제품', icon: 'LineIconsSettingsSetting1Icon' },
      { id: 'system02-3', label: '서비스', icon: 'LineIconsBellOnIcon' }
    ];
    
    return (
      <Frame gap="xl" maxWidth="1200px">
        <Text variant="heading-2" weight="bold">시스템별 Tab 컴포넌트 비교</Text>
        
        <Frame display="flex" direction="row" gap="xl" align="flex-start">
          <Frame display="flex" direction="column" gap="md" style={{ flex: 1 }}>
            <Text variant="heading-3" weight="bold">System-01 (Professional & Clean)</Text>
            <Surface 
              background="secondary-system01-2-rest"
              borderRadius="lg"
            >
              <Frame padding="lg" gap="md">
                <System01Tab 
                  items={comparisonItems}
                  selectedId={system01Selected}
                  size="lg" 
                  showBorder={true}
                  onChange={setSystem01Selected}
                />
              </Frame>
            </Surface>
          </Frame>

          <Frame display="flex" direction="column" gap="md" style={{ flex: 1 }}>
            <Text variant="heading-3" weight="bold">System-02 (Friendly & Bright)</Text>
            <Surface 
              background="secondary-system02-2-rest"
              borderRadius="lg"
            >
              <Frame padding="lg" gap="md">
                <System02Tab 
                  items={system02Items}
                  selectedId={system02Selected}
                  size="lg" 
                  showBorder={true}
                  onChange={setSystem02Selected}
                />
              </Frame>
            </Surface>
          </Frame>
        </Frame>

        <Frame gap="md">
          <Text variant="heading-1" weight="bold">주요 차이점</Text>
          <Surface background="secondary-system01-1-rest" borderRadius="md">
            <Frame padding="md" display="flex" direction="column" gap="xs">
              <Text variant="body-2"><strong>Border Radius:</strong> System-01은 작은 모서리 반경(sm), System-02는 큰 모서리 반경(xl)</Text>
              <Text variant="body-2"><strong>색상:</strong> System-01은 블루 계열, System-02는 퍼플 계열</Text>
              <Text variant="body-2"><strong>간격:</strong> System-01은 타이트한 간격, System-02는 여유로운 간격</Text>
              <Text variant="body-2"><strong>디자인 철학:</strong> System-01은 전문적/효율적, System-02는 친근함/접근성</Text>
              <Text variant="body-2"><strong>구조:</strong> 단순화된 items 배열 방식으로 탭과 컨텐츠를 분리하여 더 유연한 사용 가능</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    controls: { disable: true },
  },
}; 