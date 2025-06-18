import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComboBox as System01ComboBox } from 'lumir-design-system-01';
import { ComboBox as System02ComboBox } from 'lumir-design-system-02';
import { Surface, Frame, Sizing, Text } from 'lumir-design-system-shared';

// 시스템별 ComboBox 컴포넌트 매핑
const ComboBoxComponents = {
  'system-01': System01ComboBox,
  'system-02': System02ComboBox,
};

// 동적 ComboBox 컴포넌트
const UniversalComboBox = ({ system, ...props }: any) => {
  const ComboBoxComponent = ComboBoxComponents[system as keyof typeof ComboBoxComponents] || System01ComboBox;
  return <ComboBoxComponent {...props} />;
};

const meta: Meta<typeof UniversalComboBox> = {
  title: 'Components/ComboBox',
  component: UniversalComboBox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ComboBox 컴포넌트는 검색 기능과 단일/다중 선택을 지원하는 드롭다운 메뉴입니다. 선택된 항목은 Chip으로 표시됩니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
      description: '선택 가능한 옵션들'
    },
    multiple: {
      control: { type: 'boolean' },
      description: '다중 선택 허용 여부'
    },
    searchable: {
      control: { type: 'boolean' },
      description: '검색 가능 여부'
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트'
    },
    label: {
      control: { type: 'text' },
      description: '라벨'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태'
    },
    errorMessage: {
      control: { type: 'text' },
      description: '에러 메시지'
    },
    helperText: {
      control: { type: 'text' },
      description: '도움말 텍스트'
    },
    required: {
      control: { type: 'boolean' },
      description: '필수 입력 여부'
    },
    direction: {
      control: { type: 'select' },
      options: ['up', 'down'],
      description: '드롭다운 방향'
    },
    fieldWidth: {
      control: { type: 'text' },
      description: '컴보박스 필드 너비'
    },
    fieldVariant: {
      control: { type: 'select' },
      options: ['outlined', 'filled'],
      description: '컴보박스 필드 변형'
    },
    fieldSize: {
      control: { type: 'select' },
      options: ['md', 'lg'],
      description: '컴보박스 필드 크기'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
];

const groupedOptions = [
  { value: 'js', label: 'JavaScript', group: 'Languages' },
  { value: 'ts', label: 'TypeScript', group: 'Languages' },
  { value: 'python', label: 'Python', group: 'Languages' },
  { value: 'react', label: 'React', group: 'Frameworks' },
  { value: 'vue', label: 'Vue.js', group: 'Frameworks' },
  { value: 'angular', label: 'Angular', group: 'Frameworks' },
  { value: 'node', label: 'Node.js', group: 'Runtime' },
  { value: 'deno', label: 'Deno', group: 'Runtime' },
];

export const Default: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <UniversalComboBox
        {...args}
        system={system}
        options={sampleOptions}
        value={selectedValue}
        placeholder="프레임워크를 선택하세요"
        label="프레임워크"
        onChange={(value: any) => setSelectedValue(value as string)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '기본 단일 선택 ComboBox입니다.'
      }
    }
  }
};

export const SystemComparison: Story = {
  decorators: [
    (Story) => (
      <Frame display="flex" direction="column" gap="xl" style={{ minHeight: '400px' }}>
        <Story />
      </Frame>
    )
  ],
  render: () => {
    const [system01Value, setSystem01Value] = useState<string>('');
    const [system02Value, setSystem02Value] = useState<string>('');
    
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 01 - Clean & Efficient (파란색, 직각)
          </Text>
          <Sizing width="300px">
            <UniversalComboBox
              system="system-01"
              options={sampleOptions}
              value={system01Value}
              placeholder="프레임워크를 선택하세요"
              label="프레임워크"
              onChange={(value: any) => setSystem01Value(value as string)}
            />
          </Sizing>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 02 - Modern & Friendly (초록색, 둥근 모서리)
          </Text>
          <Sizing width="300px">
            <UniversalComboBox
              system="system-02"
              options={sampleOptions}
              value={system02Value}
              placeholder="프레임워크를 선택하세요"
              label="프레임워크"
              onChange={(value: any) => setSystem02Value(value as string)}
            />
          </Sizing>
        </Frame>
      </Frame>
    );
  },
};

export const Searchable: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          {systemName} - Searchable
        </Text>
        <UniversalComboBox
          system={system}
          options={sampleOptions}
          value={selectedValue}
          searchable
          placeholder="검색하여 선택하세요"
          label="검색 가능한 선택"
          onChange={(value: any) => setSelectedValue(value as string)}
        />
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '검색 기능이 있는 ComboBox입니다. 타이핑하여 옵션을 필터링할 수 있습니다.'
      }
    }
  }
};

export const MultipleWithChips: Story = {
  decorators: [
    (Story) => (
      <Sizing width="400px" style={{ minHeight: '300px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValues, setSelectedValues] = useState<string[]>(['react', 'vue']);
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          {systemName} - Multiple Selection
        </Text>
        <UniversalComboBox
          system={system}
          options={sampleOptions}
          value={selectedValues}
          multiple
          placeholder="여러 개를 선택하세요"
          label="다중 선택 (칩 표시)"
          onChange={(value: any) => setSelectedValues(value as string[])}
        />
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다중 선택이 가능한 ComboBox입니다. 선택된 항목들이 칩으로 표시되며, 칩의 X 버튼으로 개별 제거가 가능합니다.'
      }
    }
  }
};

export const WithGroups: Story = {
  decorators: [
    (Story) => (
      <Sizing width="350px" style={{ minHeight: '300px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          {systemName} - Grouped Options
        </Text>
        <UniversalComboBox
          system={system}
          options={groupedOptions}
          value={selectedValue}
          searchable
          placeholder="기술을 선택하세요"
          label="기술 스택"
          onChange={(value: any) => setSelectedValue(value as string)}
        />
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '그룹으로 분류된 옵션들을 보여주는 ComboBox입니다.'
      }
    }
  }
};

export const ErrorState: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          {systemName} - Error State
        </Text>
        <UniversalComboBox
          system={system}
          options={sampleOptions}
          value={selectedValue}
          placeholder="프레임워크를 선택하세요"
          label="필수 선택"
          required
          errorMessage="프레임워크를 선택해주세요"
          onChange={(value: any) => setSelectedValue(value as string)}
        />
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '에러 상태의 ComboBox입니다.'
      }
    }
  }
};

export const Disabled: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          {systemName} - Disabled State
        </Text>
        <UniversalComboBox
          system={system}
          options={sampleOptions}
          value="react"
          placeholder="프레임워크를 선택하세요"
          label="비활성화된 선택"
          disabled
          helperText="현재 선택할 수 없습니다"
          onChange={() => {}}
        />
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 ComboBox입니다.'
      }
    }
  }
};

export const FormExample: Story = {
  decorators: [
    (Story) => (
      <Frame display="flex" direction="column" gap="lg" style={{ minHeight: '400px' }}>
        <Story />
      </Frame>
    )
  ],
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    const [framework, setFramework] = useState<string>('');
    const [skills, setSkills] = useState<string[]>([]);
    const [experience, setExperience] = useState<string>('');
    
    const experienceOptions = [
      { value: '1', label: '1년 미만' },
      { value: '2', label: '1-3년' },
      { value: '3', label: '3-5년' },
      { value: '4', label: '5-10년' },
      { value: '5', label: '10년 이상' },
    ];
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - 개발자 정보 입력 폼
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <Sizing width="350px">
            <UniversalComboBox
              system={system}
              options={sampleOptions}
              value={framework}
              placeholder="주 사용 프레임워크"
              label="메인 프레임워크"
              required
              helperText="가장 자주 사용하는 프레임워크를 선택하세요"
              onChange={(value: any) => setFramework(value as string)}
            />
          </Sizing>
          
          <Sizing width="400px">
            <UniversalComboBox
              system={system}
              options={groupedOptions}
              value={skills}
              multiple
              searchable
              placeholder="보유 기술을 선택하세요"
              label="보유 기술"
              helperText="여러 개 선택 가능합니다"
              onChange={(value: any) => setSkills(value as string[])}
            />
          </Sizing>
          
          <Sizing width="300px">
            <UniversalComboBox
              system={system}
              options={experienceOptions}
              value={experience}
              placeholder="경력을 선택하세요"
              label="개발 경력"
              required
              onChange={(value: any) => setExperience(value as string)}
            />
          </Sizing>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 다양한 ComboBox의 예시입니다.'
      }
    }
  }
}; 