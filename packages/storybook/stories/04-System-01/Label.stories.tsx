import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Label } from 'lumir-system-01';
import { Frame, Surface, Text } from 'lumir-shared';

const meta: Meta<typeof Label> = {
  title: 'System-01/Compounds/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '폼 요소에 사용되는 레이블 컴포넌트입니다. 크기, 글꼴 두께, 필수 입력 표시 등을 지원하며, 디자인 시스템의 시멘틱 토큰을 따릅니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '라벨 크기',
      table: {
        defaultValue: { summary: 'md' }
      }
    },
    type: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
      description: '폰트 두께',
      table: {
        defaultValue: { summary: 'regular' }
      }
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    asterisk: {
      control: 'boolean',
      description: '필수 입력 표시',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    align: {
      control: 'select',
      options: ['top', 'center'],
      description: '별표 정렬 위치',
      table: {
        defaultValue: { summary: 'center' }
      }
    },
    className: {
      control: 'text',
      description: '추가 클래스명'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: '이름',
    size: 'md',
    type: 'regular'
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 라벨 스타일입니다. 중간 크기와 일반 폰트 두께를 사용합니다.'
      }
    }
  }
};

export const Required: Story = {
  args: {
    children: '이메일 주소',
    asterisk: true,
    type: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 필드를 나타내는 별표(*)가 있는 라벨입니다. 시각적 강조를 위해 medium 폰트 두께를 사용합니다.'
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    children: '비활성화된 필드',
    disabled: true,
    asterisk: true,
    type: 'regular'
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 라벨입니다. 시멘틱 컬러의 disabled 상태와 opacity가 적용됩니다.'
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label size="sm" asterisk>
          <Text variant="caption-1">작은 크기 라벨 (label-2 variant)</Text>
        </Label>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label size="md" asterisk>
          <Text variant="caption-1">중간 크기 라벨 (label-1 variant)</Text>
        </Label>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label size="lg" asterisk>
          <Text variant="caption-1">큰 크기 라벨 (heading-3 variant)</Text>
        </Label>
      </Surface>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '라벨은 디자인 시스템의 시멘틱 폰트 사이즈를 따르는 세 가지 크기를 지원합니다.'
      }
    }
  }
};

export const FontWeights: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label type="regular">
          <Text variant="body-1">Regular - 기본 본문</Text>
          <Text variant="caption-2"> (var(--semantic-font-weight-regular))</Text>
        </Label>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label type="medium">
          <Text variant="body-1">Medium - 중요 라벨</Text>
          <Text variant="caption-2"> (var(--semantic-font-weight-medium))</Text>
        </Label>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label type="bold">
          <Text variant="body-1">Bold - 강조 라벨</Text>
          <Text variant="caption-2"> (var(--semantic-font-weight-bold))</Text>
        </Label>
      </Surface>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '디자인 시스템의 시멘틱 폰트 웨이트를 사용하여 텍스트의 강조 수준을 조절할 수 있습니다.'
      }
    }
  }
};

export const AsteriskAlignment: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label asterisk align="top" size="lg">
          <Text variant="body-1">
            여러 줄 텍스트의 경우
            <br />
            별표를 상단에 정렬합니다
          </Text>
        </Label>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Label asterisk align="center" size="lg">
          <Text variant="body-1">
            한 줄 텍스트는
            <br />
            별표를 중앙에 정렬합니다
          </Text>
        </Label>
      </Surface>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '필수 입력 표시(*)의 정렬 위치를 제어할 수 있습니다. 여러 줄 텍스트에서는 top 정렬을, 한 줄 텍스트에서는 center 정렬을 권장합니다.'
      }
    }
  }
};

export const FormExample: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl" style={{ width: '300px' }}>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame display="flex" direction="column" gap="xs">
          <Label size="md" type="medium" asterisk>
            <Text variant="label-1">이름</Text>
          </Label>
          <input
            type="text"
            placeholder="실명을 입력하세요"
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          />
        </Frame>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame display="flex" direction="column" gap="xs">
          <Label size="md" type="medium" asterisk>
            <Text variant="label-1">이메일</Text>
          </Label>
          <input
            type="email"
            placeholder="example@email.com"
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          />
        </Frame>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame display="flex" direction="column" gap="xs">
          <Label size="md" type="medium" disabled>
            <Text variant="label-1">비활성화된 필드</Text>
          </Label>
          <input
            type="text"
            placeholder="수정할 수 없음"
            disabled
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
              backgroundColor: '#f5f5f5',
              color: '#999'
            }}
          />
        </Frame>
      </Surface>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 폼 환경에서 라벨이 어떻게 사용되는지 보여주는 예제입니다.'
      }
    }
  }
}; 
