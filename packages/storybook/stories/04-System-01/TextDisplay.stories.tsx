import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextDisplay } from '@lumir/system-01';
import { Surface, Frame, Text } from '@lumir/shared';  

const meta: Meta<typeof TextDisplay> = {
  title: 'System-01/Compounds/TextDisplay',
  component: TextDisplay,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
TextDisplay는 다양한 텍스트 요소들을 조합하여 표시하는 컴파운드 컴포넌트입니다.
라벨, 메인 텍스트, 설명, 캡션을 선택적으로 표시할 수 있으며, 아이콘도 함께 표시할 수 있습니다.

### 주요 특징
- **Boolean 기반 제어**: 각 텍스트 요소를 boolean으로 on/off 제어
- **다양한 크기**: xsm, sm, md, lg, xlg 5단계 크기
- **정렬 옵션**: left, center 정렬 지원
- **아이콘 위치**: none, before, after, above 4가지 위치
- **프리미티브 기반**: Surface, Frame, Text, Icon 컴포넌트 사용
        `
      }
    }
  },
  argTypes: {
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
    showDescription: {
      control: 'boolean',
      description: '설명 텍스트 표시 여부'
    },
    showCaption: {
      control: 'boolean',
      description: '캡션 텍스트 표시 여부'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    primaryText: 'Hello World',
    size: 'md',
    style: 'left',
    iconPosition: 'none'
  }
};

// 모든 요소 포함
export const AllElements: Story = {
  args: {
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
    primaryText: 'Size Comparison'
  },
  render: () => (
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '200px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
        fill
      >
        <Frame display="flex" direction="column" gap="xl" align="center">
          <TextDisplay size="xlg" primaryText="Extra Large (xlg)" showDescription descriptionText="Hero-1 크기의 텍스트" />
          <TextDisplay size="lg" primaryText="Large (lg)" showDescription descriptionText="Heading-1 크기의 텍스트" />
          <TextDisplay size="md" primaryText="Medium (md)" showDescription descriptionText="Heading-2 크기의 텍스트" />
          <TextDisplay size="sm" primaryText="Small (sm)" showDescription descriptionText="Body-2 크기의 텍스트" />
          <TextDisplay size="xsm" primaryText="Extra Small (xsm)" showDescription descriptionText="Caption-1 크기의 텍스트" />
        </Frame>
      </Frame>
    </Surface>
  )
};

// 아이콘 위치별 비교
export const IconPositions: Story = {
  args: {
    primaryText: 'Icon Positions'
  },
  render: () => (
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '200px' }}
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
            <TextDisplay 
              iconPosition="none" 
              primaryText="No Icon"
              showDescription 
              descriptionText="아이콘 없음"
            />
            <TextDisplay 
              iconPosition="before" 
              iconName="InfoIcon" 
              primaryText="Icon Before"
              showDescription 
              descriptionText="아이콘이 앞에"
            />
          </Frame>
          <Frame display="flex" direction="row" gap="lg">
            <TextDisplay 
              iconPosition="after" 
              iconName="InfoIcon" 
              primaryText="Icon After"
              showDescription 
              descriptionText="아이콘이 뒤에"
            />
            <TextDisplay 
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

// 스타일별 비교
export const StyleComparison: Story = {
  args: {
    primaryText: 'Style Comparison'
  },
  render: () => (
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '200px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
        fill
      >
        <Frame display="flex" direction="column" gap="xl">
          <Frame display="flex" direction="column" gap="md" align="center">
            <Text variant="heading-3" weight="medium">Left Aligned</Text>
            <TextDisplay 
              size="lg"
              style="left"
              iconPosition="before"
              iconName="LineIconsCheckmarkCircleIcon"
              showLabel
              labelText="Success"
              primaryText="Operation Completed"
              showDescription
              descriptionText="Your task has been successfully completed."
              showCaption
              captionText="Completed at 2024-01-01"
            />
          </Frame>
          
          <Frame display="flex" direction="column" gap="md" align="center">
            <Text variant="heading-3" weight="medium">Center Aligned</Text>
            <TextDisplay 
              size="lg"
              style="center"
              iconPosition="above"
              iconName="LineIconsStarFilledIcon"
              showLabel
              labelText="Achievement"
              primaryText="Congratulations!"
              showDescription
              descriptionText="You have successfully completed all tasks."
              showCaption
              captionText="Level up!"
            />
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  )
};

// 실제 사용 예제들
export const UseCases: Story = {
  args: {
    primaryText: 'Use Cases'
  },
  render: () => (
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '200px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
        fill
      >
        <Frame display="flex" direction="column" gap="xl">
          {/* 성공 메시지 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="heading-3" weight="medium">성공 메시지</Text>
            <TextDisplay 
              size="md"
              style="left"
              iconPosition="before"
              iconName="LineIconsCheckmarkCircleIcon"
              iconType="flat"
              primaryText="파일이 성공적으로 업로드되었습니다"
              showDescription
              descriptionText="총 3개의 파일이 처리되었습니다."
              showCaption
              captionText="2024-01-01 14:30"
            />
          </Frame>

          {/* 경고 메시지 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="heading-3" weight="medium">경고 메시지</Text>
            <TextDisplay 
              size="md"
              style="left"
              iconPosition="before"
              iconName="LineIconsAlertTriangleIcon"
              iconType="line"
              showLabel
              labelText="Warning"
              primaryText="저장 공간이 부족합니다"
              showDescription
              descriptionText="현재 사용량: 95% (9.5GB / 10GB)"
            />
          </Frame>

          {/* 축하 메시지 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="heading-3" weight="medium">축하 메시지</Text>
            <TextDisplay 
              size="lg"
              style="center"
              iconPosition="above"
              iconName="GiftIcon"
              iconType="flat"
              showLabel
              labelText="Special Event"
              primaryText="축하합니다!"
              showDescription
              descriptionText="레벨 10에 도달했습니다"
              showCaption
              captionText="보상을 확인하세요"
            />
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  )
};

// Boolean 제어 데모
export const BooleanControls: Story = {
  args: {
    size: 'md',
    style: 'left',
    iconPosition: 'before',
    iconName: 'InfoIcon',
    iconType: 'line',
    showLabel: true,
    labelText: 'Information',
    primaryText: 'This is the main text',
    showDescription: true,
    descriptionText: 'This is the description text that provides additional context.',
    showCaption: true,
    captionText: 'This is the caption text'
  },
  parameters: {
    docs: {
      description: {
        story: '각 텍스트 요소를 boolean으로 제어할 수 있습니다. Controls 패널에서 show* 옵션들을 켜고 끄며 테스트해보세요.'
      }
    }
  }
};

// 다양한 아이콘
export const DifferentIcons: Story = {
  args: {
    primaryText: 'Different Icons'
  },
  render: () => (
    <Surface
      background="secondary-system01-1-rest"
      borderRadius="md"
      style={{ minHeight: '200px' }}
    >
      <Frame
        display="flex"
        padding="lg"
        align="center"
        justify="center"
      >
        <Frame display="flex" direction="column" gap="lg">
          <TextDisplay iconPosition="before" iconName="HeartIcon" iconType="flat" primaryText="좋아요" showDescription descriptionText="하트 아이콘" />
          <TextDisplay iconPosition="before" iconName="LineIconsStarFilledIcon" iconType="flat" primaryText="즐겨찾기" showDescription descriptionText="별 아이콘" />
          <TextDisplay iconPosition="before" iconName="LineIconsCheckmarkCircleIcon" iconType="flat" primaryText="완료됨" showDescription descriptionText="체크 아이콘" />
          <TextDisplay iconPosition="before" iconName="LineIconsAlertTriangleIcon" iconType="line" primaryText="주의사항" showDescription descriptionText="경고 아이콘" />
        </Frame>
      </Frame>
    </Surface>
  )
}; 
