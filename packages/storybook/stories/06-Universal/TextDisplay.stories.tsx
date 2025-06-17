import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Surface, Frame } from '@lumir/shared';
import type { GeneratedIconName } from '@lumir/shared';

// System 컴포넌트들을 import
import { TextDisplay as System01TextDisplay } from '@lumir/system-01';
import { TextDisplay as System02TextDisplay } from '@lumir/system-02';

// 컴포넌트 매핑 객체
const componentMap = {
  'system-01': System01TextDisplay,
  'system-02': System02TextDisplay,
} as const;

// Universal props 타입 (두 시스템의 공통 인터페이스)
interface UniversalTextDisplayProps {
  system: keyof typeof componentMap;
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  style?: 'left' | 'center';
  iconPosition?: 'none' | 'before' | 'after' | 'above';
  iconName?: GeneratedIconName;
  iconType?: 'line' | 'flat';
  showLabel?: boolean;
  labelText?: string;
  primaryText?: string;
  showDescription?: boolean;
  descriptionText?: string;
  showCaption?: boolean;
  captionText?: string;
}

// Universal TextDisplay 컴포넌트
const UniversalTextDisplay: React.FC<UniversalTextDisplayProps> = ({ 
  system, 
  ...props 
}) => {
  const Component = componentMap[system];
  return <Component {...props} />;
};

const meta: Meta<UniversalTextDisplayProps> = {
  title: 'components/TextDisplay',
  component: UniversalTextDisplay,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Universal TextDisplay 컴포넌트는 System-01과 System-02의 TextDisplay를 통합하여 제공합니다.
다양한 텍스트 요소들을 조합하여 표시하는 컴파운드 컴포넌트입니다.

### 시스템별 특징
- **System-01**: Professional & Clean - 파란색 계열, 각진 디자인
- **System-02**: Friendly & Bright - 보라색 계열, 둥근 디자인

### 주요 기능
- **Boolean 기반 제어**: 각 텍스트 요소를 boolean으로 on/off 제어
- **다양한 크기**: xsm, sm, md, lg, xlg 5단계 크기
- **정렬 옵션**: left, center 정렬 지원
- **아이콘 위치**: none, before, after, above 4가지 위치
        `
      }
    }
  },
  argTypes: {
    system: {
      control: 'select',
      options: ['system-01', 'system-02'],
      description: '사용할 디자인 시스템 선택'
    },
    size: {
      control: 'select',
      options: ['xsm', 'sm', 'md', 'lg', 'xlg'],
      description: '텍스트 디스플레이의 크기'
    },
    style: {
      control: 'select',
      options: ['left', 'center'],
      description: '텍스트 정렬 스타일'
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'before', 'after', 'above'],
      description: '아이콘의 위치'
    },
    iconName: {
      control: 'select',
      options: ['LineIconsCheckmarkCircleIcon', 'LineIconsStarFilledIcon', 'InfoIcon', 'LineIconsAlertTriangleIcon', 'GiftIcon', 'HeartIcon'],
      description: '사용할 아이콘 이름'
    },
    iconType: {
      control: 'select',
      options: ['line', 'flat'],
      description: '아이콘 타입'
    },
    showLabel: {
      control: 'boolean',
      description: '라벨 텍스트 표시 여부'
    },
    labelText: {
      control: 'text',
      description: '라벨 텍스트 내용'
    },
    primaryText: {
      control: 'text',
      description: '메인 텍스트 내용'
    },
    showDescription: {
      control: 'boolean',
      description: '설명 텍스트 표시 여부'
    },
    descriptionText: {
      control: 'text',
      description: '설명 텍스트 내용'
    },
    showCaption: {
      control: 'boolean',
      description: '캡션 텍스트 표시 여부'
    },
    captionText: {
      control: 'text',
      description: '캡션 텍스트 내용'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UniversalTextDisplayProps>;

// 기본 스토리
export const Default: Story = {
  args: {
    system: 'system-01',
    primaryText: 'Hello World',
    size: 'md',
    style: 'left',
    iconPosition: 'none'
  }
};

// 모든 요소 포함
export const AllElements: Story = {
  args: {
    system: 'system-01',
    size: 'lg',
    style: 'left',
    iconPosition: 'before',
    iconName: 'LineIconsCheckmarkCircleIcon',
    iconType: 'flat',
    showLabel: true,
    labelText: 'Success',
    primaryText: 'Operation Completed',
    showDescription: true,
    descriptionText: 'Your task has been successfully completed without any errors.',
    showCaption: true,
    captionText: 'Completed at 2024-01-01 14:30'
  }
};

// 중앙 정렬 + 상단 아이콘
export const CenteredWithIconAbove: Story = {
  args: {
    system: 'system-02',
    size: 'xlg',
    style: 'center',
    iconPosition: 'above',
    iconName: 'LineIconsStarFilledIcon',
    iconType: 'flat',
    showLabel: true,
    labelText: 'Achievement',
    primaryText: 'Congratulations!',
    showDescription: true,
    descriptionText: 'You have successfully completed all tasks.',
    showCaption: true,
    captionText: 'Level up!'
  }
};

// 크기별 비교
export const SizeComparison: Story = {
  args: {
    system: 'system-01',
    primaryText: 'Size Comparison'
  },
  render: (args) => (
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '400px', width: '600px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
        fill
      >
        <Frame display="flex" direction="column" gap="xl" align="center">
          <UniversalTextDisplay 
            {...args}
            size="xlg" 
            primaryText="Extra Large (xlg)" 
            showDescription 
            descriptionText="Hero-1 크기의 텍스트" 
          />
          <UniversalTextDisplay 
            {...args}
            size="lg" 
            primaryText="Large (lg)" 
            showDescription 
            descriptionText="Heading-1 크기의 텍스트" 
          />
          <UniversalTextDisplay 
            {...args}
            size="md" 
            primaryText="Medium (md)" 
            showDescription 
            descriptionText="Heading-2 크기의 텍스트" 
          />
          <UniversalTextDisplay 
            {...args}
            size="sm" 
            primaryText="Small (sm)" 
            showDescription 
            descriptionText="Body-2 크기의 텍스트" 
          />
          <UniversalTextDisplay 
            {...args}
            size="xsm" 
            primaryText="Extra Small (xsm)" 
            showDescription 
            descriptionText="Caption-1 크기의 텍스트" 
          />
        </Frame>
      </Frame>
    </Surface>
  )
};

// 아이콘 위치별 비교
export const IconPositions: Story = {
  args: {
    system: 'system-02',
    primaryText: 'Icon Positions'
  },
  render: (args) => (
    <Surface 
      background="secondary-system02-1-rest"
      borderRadius="md"
      style={{ minHeight: '300px', width: '700px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
        fill
      >
        <Frame display="flex" direction="column" gap="lg">
          <Frame display="flex" direction="row" gap="lg">
            <UniversalTextDisplay 
              {...args}
              iconPosition="none" 
              primaryText="No Icon"
              showDescription 
              descriptionText="아이콘 없음"
            />
            <UniversalTextDisplay 
              {...args}
              iconPosition="before" 
              iconName="InfoIcon" 
              primaryText="Icon Before"
              showDescription 
              descriptionText="아이콘이 앞에"
            />
          </Frame>
          <Frame display="flex" direction="row" gap="lg">
            <UniversalTextDisplay 
              {...args}
              iconPosition="after" 
              iconName="InfoIcon" 
              primaryText="Icon After"
              showDescription 
              descriptionText="아이콘이 뒤에"
            />
            <UniversalTextDisplay 
              {...args}
              style="center"
              iconPosition="above" 
              iconName="InfoIcon" 
              primaryText="Icon Above"
              showDescription 
              descriptionText="아이콘이 위에"
            />
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  )
};

// 스타일별 비교 (좌측 정렬 vs 중앙 정렬)
export const StyleComparison: Story = {
  args: {
    system: 'system-01'
  },
  render: (args) => (
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '300px', width: '800px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
        fill
      >
        <Frame display="flex" direction="row" gap="xl" align="flex-start">
          <Frame display="flex" direction="column" gap="md" style={{ flex: 1 }}>
            <UniversalTextDisplay 
              {...args}
              style="left"
              iconPosition="before"
              iconName="LineIconsCheckmarkCircleIcon"
              showLabel
              labelText="Left Aligned"
              primaryText="좌측 정렬"
              showDescription
              descriptionText="텍스트가 왼쪽으로 정렬됩니다."
              showCaption
              captionText="Left alignment example"
            />
          </Frame>
          <Frame display="flex" direction="column" gap="md" style={{ flex: 1 }}>
            <UniversalTextDisplay 
              {...args}
              style="center"
              iconPosition="above"
              iconName="LineIconsStarFilledIcon"
              showLabel
              labelText="Center Aligned"
              primaryText="중앙 정렬"
              showDescription
              descriptionText="텍스트가 중앙으로 정렬됩니다."
              showCaption
              captionText="Center alignment example"
            />
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  )
};

// 시스템 비교
export const SystemComparison: Story = {
  args: {
    size: 'lg',
    iconPosition: 'before',
    iconName: 'LineIconsCheckmarkCircleIcon',
    iconType: 'flat',
    showLabel: true,
    labelText: 'System',
    primaryText: 'Design System',
    showDescription: true,
    descriptionText: '각 시스템의 고유한 스타일을 확인해보세요.',
    showCaption: true,
    captionText: 'System comparison'
  },
  render: (args) => (
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '300px', width: '800px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
        fill
      >
        <Frame display="flex" direction="row" gap="xl" align="flex-start">
          <Frame display="flex" direction="column" gap="md" style={{ flex: 1 }}>
            <Surface 
              background="secondary-system01-2-rest"
              borderRadius="sm"
              style={{ padding: '16px' }}
            >
              <UniversalTextDisplay 
                {...args}
                system="system-01"
              />
            </Surface>
            <div style={{ textAlign: 'center', fontSize: '14px', color: 'var(--foundation-foundation-color-grey-light-40)' }}>
              System-01: Professional & Clean
            </div>
          </Frame>
          <Frame display="flex" direction="column" gap="md" style={{ flex: 1 }}>
            <Surface 
              background="secondary-system02-2-rest"
              borderRadius="sm"
              style={{ padding: '16px' }}
            >
              <UniversalTextDisplay 
                {...args}
                system="system-02"
              />
            </Surface>
            <div style={{ textAlign: 'center', fontSize: '14px', color: 'var(--foundation-foundation-color-grey-light-40)' }}>
              System-02: Friendly & Bright
            </div>
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  )
};

// 인터랙티브 예제
export const Interactive: Story = {
  args: {
    system: 'system-01',
    size: 'md',
    style: 'left',
    iconPosition: 'before',
    iconName: 'LineIconsCheckmarkCircleIcon',
    iconType: 'line',
    showLabel: true,
    labelText: 'Interactive',
    primaryText: 'Text Display',
    showDescription: true,
    descriptionText: 'Controls에서 속성을 변경해보세요.',
    showCaption: true,
    captionText: 'Try changing the controls above'
  }
}; 