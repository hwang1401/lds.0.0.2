import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Label as System01Label } from '@lumir/system-01';
import { Label as System02Label } from '@lumir/system-02';
import { Frame, Surface, Text } from '@lumir/shared';

// 시스템별 Label 컴포넌트 매핑
const LabelComponents = {
  'system-01': System01Label,
  'system-02': System02Label,
};

// 동적 Label 컴포넌트
const UniversalLabel = ({ system, ...props }: any) => {
  const LabelComponent = LabelComponents[system as keyof typeof LabelComponents] || System01Label;
  return <LabelComponent {...props} />;
};

const meta: Meta<typeof UniversalLabel> = {
  title: 'Components/Label',
  component: UniversalLabel,
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
type Story = StoryObj<typeof UniversalLabel>;

export const Default: Story = {
  args: {
    children: '이름',
    size: 'md',
    type: 'regular'
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLabel {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 라벨 스타일입니다. 중간 크기와 일반 폰트 두께를 사용합니다.'
      }
    }
  }
};

export const SystemComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 01 - Clean & Efficient (파란색)
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalLabel system="system-01" size="md" type="regular">기본 라벨</UniversalLabel>
          <UniversalLabel system="system-01" size="md" type="medium" asterisk>필수 입력 라벨</UniversalLabel>
          <UniversalLabel system="system-01" size="md" type="regular" disabled>비활성화 라벨</UniversalLabel>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 02 - Modern & Friendly (초록색)
        </Text>
        <Frame display="flex" direction="column" gap="sm">
          <UniversalLabel system="system-02" size="md" type="regular">기본 라벨</UniversalLabel>
          <UniversalLabel system="system-02" size="md" type="medium" asterisk>필수 입력 라벨</UniversalLabel>
          <UniversalLabel system="system-02" size="md" type="regular" disabled>비활성화 라벨</UniversalLabel>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const Required: Story = {
  args: {
    children: '이메일 주소',
    asterisk: true,
    type: 'medium'
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLabel {...args} system={system} />;
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
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLabel {...args} system={system} />;
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
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Sizes
        </Text>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} size="sm" asterisk>
            <Text variant="caption-1">작은 크기 라벨 (label-2 variant)</Text>
          </UniversalLabel>
        </Surface>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} size="md" asterisk>
            <Text variant="caption-1">중간 크기 라벨 (label-1 variant)</Text>
          </UniversalLabel>
        </Surface>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} size="lg" asterisk>
            <Text variant="caption-1">큰 크기 라벨 (heading-3 variant)</Text>
          </UniversalLabel>
        </Surface>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '라벨은 디자인 시스템의 시멘틱 폰트 사이즈를 따르는 세 가지 크기를 지원합니다.'
      }
    }
  }
};

export const FontWeights: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Font Weights
        </Text>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} type="regular">
            <Text variant="body-1">Regular - 기본 본문</Text>
            <Text variant="caption-2"> (var(--semantic-font-weight-regular))</Text>
          </UniversalLabel>
        </Surface>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} type="medium">
            <Text variant="body-1">Medium - 중요 라벨</Text>
            <Text variant="caption-2"> (var(--semantic-font-weight-medium))</Text>
          </UniversalLabel>
        </Surface>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} type="bold">
            <Text variant="body-1">Bold - 강조 라벨</Text>
            <Text variant="caption-2"> (var(--semantic-font-weight-bold))</Text>
          </UniversalLabel>
        </Surface>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '디자인 시스템의 시멘틱 폰트 웨이트를 사용하여 텍스트의 강조 수준을 조절할 수 있습니다.'
      }
    }
  }
};

export const AsteriskAlignment: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Asterisk Alignment
        </Text>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} asterisk align="top" size="lg">
            <Text variant="body-1">
              여러 줄 텍스트의 경우
              <br />
              별표를 상단에 정렬합니다
            </Text>
          </UniversalLabel>
        </Surface>
        <Surface background="secondary-system01-1-rest" borderRadius="md">
          <UniversalLabel system={system} asterisk align="center" size="lg">
            <Text variant="body-1">
              한 줄 텍스트는
              <br />
              별표를 중앙에 정렬합니다
            </Text>
          </UniversalLabel>
        </Surface>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 표시(*)의 정렬 위치를 제어할 수 있습니다. 여러 줄 텍스트에서는 top 정렬을, 한 줄 텍스트에서는 center 정렬을 권장합니다.'
      }
    }
  }
};

export const FormExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - 폼 사용 예시
        </Text>
        <Frame display="flex" direction="column" gap="md">
          <UniversalLabel system={system} size="md" type="medium" asterisk>
            사용자 이름
          </UniversalLabel>
          <UniversalLabel system={system} size="md" type="medium" asterisk>
            이메일 주소
          </UniversalLabel>
          <UniversalLabel system={system} size="md" type="regular">
            전화번호 (선택사항)
          </UniversalLabel>
          <UniversalLabel system={system} size="md" type="regular" disabled>
            자동 생성된 ID
          </UniversalLabel>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 다양한 라벨의 예시입니다.'
      }
    }
  }
}; 