import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Surface, Frame, Text } from '@lumir/shared';

// System 컴포넌트들을 import
import { Tab as System01Tab } from '@lumir/system-01';
import { Tab as System02Tab } from '@lumir/system-02';

// Universal props 타입
interface UniversalTabProps {
  system: 'system-01' | 'system-02';
  defaultSelectedId?: string;
  size?: 'md' | 'lg';
  showBorder?: boolean;
}

// Universal 래퍼 컴포넌트
const UniversalTab: React.FC<UniversalTabProps> = ({ 
  system,
  defaultSelectedId = 'tab1',
  size = 'lg',
  showBorder = true
}) => {
  const TabComponent = system === 'system-01' ? System01Tab : System02Tab;
  const bgToken = system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest';
  
  return (
    <TabComponent 
      defaultSelectedId={defaultSelectedId}
      size={size}
      showBorder={showBorder}
    >
      <TabComponent.List>
        <TabComponent.Item id="tab1" icon="LineIconsPersonPersonIcon">홈</TabComponent.Item>
        <TabComponent.Item id="tab2" icon="LineIconsSettingsSetting1Icon">제품</TabComponent.Item>
        <TabComponent.Item id="tab3" icon="LineIconsBellOnIcon">서비스</TabComponent.Item>
        <TabComponent.Item id="tab4" icon="LineIconsMessageCircleIcon">연락처</TabComponent.Item>
      </TabComponent.List>
      
      <TabComponent.Panel id="tab1">
        <Surface background={bgToken} borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">홈 페이지</Text>
            <Text variant="body-2">메인 페이지의 내용입니다. 여기에서 전체적인 개요를 확인할 수 있습니다.</Text>
          </Frame>
        </Surface>
      </TabComponent.Panel>
      
      <TabComponent.Panel id="tab2">
        <Surface background={bgToken} borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">제품 정보</Text>
            <Text variant="body-2">다양한 제품들의 상세 정보와 사양을 확인할 수 있습니다.</Text>
          </Frame>
        </Surface>
      </TabComponent.Panel>
      
      <TabComponent.Panel id="tab3">
        <Surface background={bgToken} borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">서비스 안내</Text>
            <Text variant="body-2">제공되는 서비스들의 자세한 설명과 이용 방법을 안내합니다.</Text>
          </Frame>
        </Surface>
      </TabComponent.Panel>
      
      <TabComponent.Panel id="tab4">
        <Surface background={bgToken} borderRadius="md">
          <Frame display="flex" direction="column" padding="lg" gap="xs">
            <Text variant="body-1" weight="bold">연락처</Text>
            <Text variant="body-2">문의사항이 있으시면 언제든지 연락주세요.</Text>
          </Frame>
        </Surface>
      </TabComponent.Panel>
    </TabComponent>
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

<Tab defaultSelectedId="tab1" size="lg" showBorder={true}>
  <Tab.List>
    <Tab.Item id="tab1" icon="LineIconsPersonPersonIcon">탭 1</Tab.Item>
    <Tab.Item id="tab2" icon="LineIconsSettingsSetting1Icon">탭 2</Tab.Item>
  </Tab.List>
  <Tab.Panel id="tab1">탭 1 내용</Tab.Panel>
  <Tab.Panel id="tab2">탭 2 내용</Tab.Panel>
</Tab>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    system: {
      control: { type: 'select' },
      options: ['system-01', 'system-02'],
      description: '디자인 시스템 선택',
    },
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
    system: 'system-02',
    defaultSelectedId: 'tab1',
    size: 'lg',
    showBorder: true,
  },
};

// 크기별 탭
export const Sizes: Story = {
  render: (args) => {
    const TabComponent = args.system === 'system-01' ? System01Tab : System02Tab;
    const bgToken = args.system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest';
    
    return (
      <Frame gap="xl" maxWidth="800px">
        <Frame gap="md">
          <Text variant="heading-3" weight="bold">Large 크기 (기본)</Text>
          <TabComponent defaultSelectedId="large1" size="lg" showBorder={true}>
            <TabComponent.List>
              <TabComponent.Item id="large1" icon="LineIconsPersonPersonIcon">Large Tab</TabComponent.Item>
              <TabComponent.Item id="large2" icon="LineIconsSettingsSetting1Icon">Large Tab</TabComponent.Item>
              <TabComponent.Item id="large3" icon="LineIconsBellOnIcon">Large Tab</TabComponent.Item>
            </TabComponent.List>
            <TabComponent.Panel id="large1">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">Large 크기 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="large2">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">Large 크기 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="large3">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">Large 크기 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
          </TabComponent>
        </Frame>

        <Frame gap="md">
          <Text variant="heading-3" weight="bold">Medium 크기</Text>
          <TabComponent defaultSelectedId="medium1" size="md" showBorder={true}>
            <TabComponent.List>
              <TabComponent.Item id="medium1" icon="LineIconsPersonPersonIcon">Medium Tab</TabComponent.Item>
              <TabComponent.Item id="medium2" icon="LineIconsSettingsSetting1Icon">Medium Tab</TabComponent.Item>
              <TabComponent.Item id="medium3" icon="LineIconsBellOnIcon">Medium Tab</TabComponent.Item>
            </TabComponent.List>
            <TabComponent.Panel id="medium1">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-2">Medium 크기 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="medium2">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-2">Medium 크기 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="medium3">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-2">Medium 크기 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
          </TabComponent>
        </Frame>
      </Frame>
    );
  },
  args: {
    system: 'system-02',
  },
};

// 상태별 탭
export const States: Story = {
  render: (args) => {
    const TabComponent = args.system === 'system-01' ? System01Tab : System02Tab;
    const bgToken = args.system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest';
    
    return (
      <Frame gap="xl" maxWidth="800px">
        <Frame gap="md">
          <Text variant="heading-3" weight="bold">정상 상태</Text>
          <TabComponent defaultSelectedId="normal1" size="lg" showBorder={true}>
            <TabComponent.List>
              <TabComponent.Item id="normal1" icon="LineIconsPersonPersonIcon">활성 탭</TabComponent.Item>
              <TabComponent.Item id="normal2" icon="LineIconsSettingsSetting1Icon">비활성 탭</TabComponent.Item>
              <TabComponent.Item id="normal3" icon="LineIconsBellOnIcon">비활성 탭</TabComponent.Item>
            </TabComponent.List>
            <TabComponent.Panel id="normal1">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">활성 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="normal2">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">비활성 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="normal3">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">비활성 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
          </TabComponent>
        </Frame>

        <Frame gap="md">
          <Text variant="heading-3" weight="bold">비활성화 상태</Text>
          <TabComponent defaultSelectedId="disabled1" size="lg" showBorder={true}>
            <TabComponent.List>
              <TabComponent.Item id="disabled1" icon="LineIconsPersonPersonIcon">활성 탭</TabComponent.Item>
              <TabComponent.Item id="disabled2" icon="LineIconsSettingsSetting1Icon" disabled={true}>비활성화 탭</TabComponent.Item>
              <TabComponent.Item id="disabled3" icon="LineIconsBellOnIcon" disabled={true}>비활성화 탭</TabComponent.Item>
            </TabComponent.List>
            <TabComponent.Panel id="disabled1">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">활성 탭의 내용입니다. 비활성화된 탭은 클릭할 수 없습니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="disabled2">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">비활성화된 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="disabled3">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">비활성화된 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
          </TabComponent>
        </Frame>
      </Frame>
    );
  },
  args: {
    system: 'system-02',
  },
};

// 보더 옵션
export const BorderOptions: Story = {
  render: (args) => {
    const TabComponent = args.system === 'system-01' ? System01Tab : System02Tab;
    const bgToken = args.system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest';
    
    return (
      <Frame gap="xl" maxWidth="800px">
        <Frame gap="md">
          <Text variant="heading-3" weight="bold">보더 있음 (기본)</Text>
          <TabComponent defaultSelectedId="border1" size="lg" showBorder={true}>
            <TabComponent.List>
              <TabComponent.Item id="border1" icon="LineIconsPersonPersonIcon">탭 1</TabComponent.Item>
              <TabComponent.Item id="border2" icon="LineIconsSettingsSetting1Icon">탭 2</TabComponent.Item>
              <TabComponent.Item id="border3" icon="LineIconsBellOnIcon">탭 3</TabComponent.Item>
            </TabComponent.List>
            <TabComponent.Panel id="border1">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">보더가 있는 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="border2">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">보더가 있는 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="border3">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">보더가 있는 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
          </TabComponent>
        </Frame>

        <Frame gap="md">
          <Text variant="heading-3" weight="bold">보더 없음</Text>
          <TabComponent defaultSelectedId="noborder1" size="lg" showBorder={false}>
            <TabComponent.List>
              <TabComponent.Item id="noborder1" icon="LineIconsPersonPersonIcon">탭 1</TabComponent.Item>
              <TabComponent.Item id="noborder2" icon="LineIconsSettingsSetting1Icon">탭 2</TabComponent.Item>
              <TabComponent.Item id="noborder3" icon="LineIconsBellOnIcon">탭 3</TabComponent.Item>
            </TabComponent.List>
            <TabComponent.Panel id="noborder1">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">보더가 없는 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="noborder2">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">보더가 없는 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
            <TabComponent.Panel id="noborder3">
              <Surface background={bgToken} borderRadius="md">
                <Frame padding="lg">
                  <Text variant="body-1">보더가 없는 탭의 내용입니다.</Text>
                </Frame>
              </Surface>
            </TabComponent.Panel>
          </TabComponent>
        </Frame>
      </Frame>
    );
  },
  args: {
    system: 'system-02',
  },
};

// 시스템 비교
export const SystemComparison: Story = {
  render: () => {
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
              <Frame padding="lg">
                <System01Tab defaultSelectedId="system01-1" size="lg" showBorder={true}>
                  <System01Tab.List>
                    <System01Tab.Item id="system01-1" icon="LineIconsPersonPersonIcon">홈</System01Tab.Item>
                    <System01Tab.Item id="system01-2" icon="LineIconsSettingsSetting1Icon">제품</System01Tab.Item>
                    <System01Tab.Item id="system01-3" icon="LineIconsBellOnIcon">서비스</System01Tab.Item>
                  </System01Tab.List>
                  <System01Tab.Panel id="system01-1">
                    <Surface background="secondary-system01-1-rest" borderRadius="md">
                      <Frame padding="lg">
                        <Text variant="body-1">System-01의 탭 내용입니다. 블루 계열 색상과 작은 border-radius를 사용합니다.</Text>
                      </Frame>
                    </Surface>
                  </System01Tab.Panel>
                  <System01Tab.Panel id="system01-2">
                    <Surface background="secondary-system01-1-rest" borderRadius="md">
                      <Frame padding="lg">
                        <Text variant="body-1">전문적이고 깔끔한 디자인을 지향합니다.</Text>
                      </Frame>
                    </Surface>
                  </System01Tab.Panel>
                  <System01Tab.Panel id="system01-3">
                    <Surface background="secondary-system01-1-rest" borderRadius="md">
                      <Frame padding="lg">
                        <Text variant="body-1">GitHub, 백오피스 등에 적합한 디자인입니다.</Text>
                      </Frame>
                    </Surface>
                  </System01Tab.Panel>
                </System01Tab>
              </Frame>
            </Surface>
          </Frame>

          <Frame display="flex" direction="column" gap="md" style={{ flex: 1 }}>
            <Text variant="heading-3" weight="bold">System-02 (Friendly & Bright)</Text>
            <Surface 
              background="secondary-system02-2-rest"
              borderRadius="lg"
            >
              <Frame padding="lg">
                <System02Tab defaultSelectedId="system02-1" size="lg" showBorder={true}>
                  <System02Tab.List>
                    <System02Tab.Item id="system02-1" icon="LineIconsPersonPersonIcon">홈</System02Tab.Item>
                    <System02Tab.Item id="system02-2" icon="LineIconsSettingsSetting1Icon">제품</System02Tab.Item>
                    <System02Tab.Item id="system02-3" icon="LineIconsBellOnIcon">서비스</System02Tab.Item>
                  </System02Tab.List>
                  <System02Tab.Panel id="system02-1">
                    <Surface background="secondary-system02-1-rest" borderRadius="md">
                      <Frame padding="lg">
                        <Text variant="body-1">System-02의 탭 내용입니다. 퍼플 계열 색상과 큰 border-radius를 사용합니다.</Text>
                      </Frame>
                    </Surface>
                  </System02Tab.Panel>
                  <System02Tab.Panel id="system02-2">
                    <Surface background="secondary-system02-1-rest" borderRadius="md">
                      <Frame padding="lg">
                        <Text variant="body-1">친근하고 밝은 디자인을 지향합니다.</Text>
                      </Frame>
                    </Surface>
                  </System02Tab.Panel>
                  <System02Tab.Panel id="system02-3">
                    <Surface background="secondary-system02-1-rest" borderRadius="md">
                      <Frame padding="lg">
                        <Text variant="body-1">커머스, 소비자 대상 서비스에 적합한 디자인입니다.</Text>
                      </Frame>
                    </Surface>
                  </System02Tab.Panel>
                </System02Tab>
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