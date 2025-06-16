import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComboBox } from '@lumir/system-01';
import { Surface, Frame, Sizing, Text } from '@lumir/shared';

const meta: Meta<typeof ComboBox> = {
  title: 'System-01/Compounds/ComboBox',
  component: ComboBox,
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

// 기본 단일 선택
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
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <ComboBox
        options={sampleOptions}
        value={selectedValue}
        placeholder="프레임워크를 선택하세요"
        label="프레임워크"
        onChange={(value) => setSelectedValue(value as string)}
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

// 검색 가능한 단일 선택
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
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <ComboBox
        options={sampleOptions}
        value={selectedValue}
        searchable
        placeholder="검색하여 선택하세요"
        label="검색 가능한 선택"
        onChange={(value) => setSelectedValue(value as string)}
      />
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

// 다중 선택 (칩으로 표시)
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
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['react', 'vue']);
    
    return (
      <ComboBox
        options={sampleOptions}
        value={selectedValues}
        multiple
        placeholder="여러 개를 선택하세요"
        label="다중 선택 (칩 표시)"
        onChange={(value) => setSelectedValues(value as string[])}
      />
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

// 검색 가능한 다중 선택
export const SearchableMultiple: Story = {
  decorators: [
    (Story) => (
      <Sizing width="400px" style={{ minHeight: '300px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    
    return (
      <ComboBox
        options={sampleOptions}
        value={selectedValues}
        multiple
        searchable
        placeholder="검색하여 다중 선택하세요"
        label="검색 가능한 다중 선택"
        onChange={(value) => setSelectedValues(value as string[])}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '검색 기능과 다중 선택이 모두 가능한 ComboBox입니다.'
      }
    }
  }
};

// 그룹화된 옵션
export const GroupedOptions: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '350px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <ComboBox
        options={groupedOptions}
        value={selectedValue}
        placeholder="프로그래밍 언어/프레임워크 선택"
        label="그룹화된 옵션"
        onChange={(value) => setSelectedValue(value as string)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '옵션들이 그룹별로 구분되어 표시되는 ComboBox입니다. 그룹 헤더와 구분선으로 시각적으로 구분됩니다.'
      }
    }
  }
};

// 에러 상태
export const WithError: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <ComboBox
        options={sampleOptions}
        value={selectedValue}
        placeholder="필수 선택 항목"
        label="에러 상태"
        errorMessage="항목을 선택해주세요"
        onChange={(value) => setSelectedValue(value as string)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '에러 메시지가 표시되는 ComboBox입니다.'
      }
    }
  }
};

// 도움말 텍스트
export const WithHelperText: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <ComboBox
        options={sampleOptions}
        value={selectedValue}
        placeholder="선택하세요"
        label="도움말 있는 선택"
        helperText="원하는 프레임워크를 선택해주세요"
        onChange={(value) => setSelectedValue(value as string)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '도움말 텍스트가 표시되는 ComboBox입니다.'
      }
    }
  }
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    options: sampleOptions,
    placeholder: '비활성화됨',
    label: '비활성화된 ComboBox',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 ComboBox입니다.'
      }
    }
  }
};

// 위쪽 방향 드롭다운
export const DirectionUp: Story = {
  decorators: [
    (Story) => (
      <Sizing width="300px" style={{ minHeight: '250px', marginTop: '200px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <ComboBox
        options={sampleOptions}
        value={selectedValue}
        placeholder="위쪽으로 열림"
        label="위쪽 드롭다운"
        direction="up"
        onChange={(value) => setSelectedValue(value as string)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: '드롭다운이 위쪽으로 열리는 ComboBox입니다.'
      }
    }
  }
};

// 인터랙티브 예제
export const Interactive: Story = {
  decorators: [
    (Story) => (
      <Sizing width="500px" style={{ minHeight: '400px' }}>
        <Frame padding="lg">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: () => {
    const [singleValue, setSingleValue] = useState<string>('react');
    const [multipleValues, setMultipleValues] = useState<string[]>(['react', 'vue']);
    
    return (
      <Frame direction="column" gap="lg">
        <ComboBox
          options={sampleOptions}
          value={singleValue}
          searchable
          placeholder="검색하여 선택하세요"
          label="검색 가능한 단일 선택"
          onChange={(value) => setSingleValue(value as string)}
        />
        <ComboBox
          options={sampleOptions}
          value={multipleValues}
          multiple
          searchable
          placeholder="검색하여 다중 선택하세요"
          label="검색 가능한 다중 선택"
          onChange={(value) => setMultipleValues(value as string[])}
        />
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 기능을 조합한 인터랙티브한 ComboBox 예제입니다.'
      }
    }
  }
};

// 필드 너비 옵션들
export const FieldWidthOptions: Story = {
  name: 'ComboBox Field Width Options',
  decorators: [
    (Story) => (
      <Sizing style={{ width: 'fit-content', minWidth: '600px', minHeight: '800px' }}>
        <Frame padding="md">
          <Story />
        </Frame>
      </Sizing>
    )
  ],
  render: () => {
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Text variant="title-2" weight="medium">ComboBox Field Width 옵션들</Text>
        
        <Frame display="flex" direction="column" gap="xl">
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-1" weight="medium">fit-content 옵션</Text>
            
            <Frame display="flex" direction="row" gap="lg" wrap="wrap">
              <ComboBox
                options={sampleOptions}
                fieldWidth="fit-content"
                placeholder="내용에 맞춰 조절"
              />
              <ComboBox
                options={sampleOptions}
                fieldWidth="fit-content"
                placeholder="긴 플레이스홀더 텍스트입니다"
              />
            </Frame>
          </Frame>

          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-1" weight="medium">fill-width 옵션</Text>
            
            <ComboBox
              options={sampleOptions}
              fieldWidth="fill-width"
              placeholder="부모 요소 전체 너비 사용"
            />
          </Frame>

          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-1" weight="medium">고정 너비 (픽셀)</Text>
            
            <Frame display="flex" direction="row" gap="lg" wrap="wrap">
              <ComboBox
                options={sampleOptions}
                fieldWidth="200px"
                placeholder="200px 너비"
              />
              <ComboBox
                options={sampleOptions}
                fieldWidth="300px"
                placeholder="300px 너비"
              />
            </Frame>
          </Frame>

          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-1" weight="medium">상대 너비 (퍼센트)</Text>
            
            <Frame display="flex" direction="row" gap="lg" wrap="wrap">
              <ComboBox
                options={sampleOptions}
                fieldWidth="30%"
                placeholder="30% 너비"
              />
              <ComboBox
                options={sampleOptions}
                fieldWidth="50%"
                placeholder="50% 너비"
              />
            </Frame>
          </Frame>

          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-1" weight="medium">검색 가능한 ComboBox - 필드 전체 클릭 테스트</Text>
            
            <Frame display="flex" direction="row" gap="lg" wrap="wrap">
              <ComboBox
                options={sampleOptions}
                searchable
                fieldWidth="200px"
                placeholder="검색 가능"
              />
              <ComboBox
                options={sampleOptions}
                searchable={false}
                fieldWidth="200px"
                placeholder="검색 불가능"
              />
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    );
  },
}; 
