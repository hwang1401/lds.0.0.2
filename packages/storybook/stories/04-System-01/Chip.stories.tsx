import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@lumir/system-01';
import { Surface, Frame, Text } from '@lumir/shared';

const meta: Meta<typeof Chip> = {
  title: 'System-01/Compounds/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Chip 컴포넌트는 선택된 항목이나 태그를 표시하는 컴포넌트입니다. ComboBox에서 선택된 항목을 표시하거나 태그 입력에서 사용할 수 있습니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '칩에 표시할 텍스트'
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
      description: '칩의 변형'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      description: '칩의 크기'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hovered', 'pressed', 'disabled'],
      description: '칩의 상태'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태'
    },
    removable: {
      control: { type: 'boolean' },
      description: '삭제 가능 여부'
    },
    selectable: {
      control: { type: 'boolean' },
      description: '선택 가능 여부'
    },
    selected: {
      control: { type: 'boolean' },
      description: '선택 상태'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 칩
export const Default: Story = {
  args: {
    children: 'React',
  },
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  parameters: {
    docs: {
      description: {
        story: '기본 Chip 컴포넌트입니다.'
      }
    }
  }
};

// 변형별 표시
export const Variants: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      {/* Filled Variant */}
      <Frame display="flex" direction="column" gap="sm">
        <Text variant="body-1" weight="bold">Filled Variant</Text>
        <Frame display="flex" direction="row" gap="md" align="center">
          <Chip variant="filled">기본</Chip>
          <Chip variant="filled" selected>선택됨</Chip>
          <Chip variant="filled" removable onRemove={() => {}}>삭제가능</Chip>
          <Chip variant="filled" disabled>비활성화</Chip>
        </Frame>
      </Frame>
      
      {/* Outlined Variant */}
      <Frame display="flex" direction="column" gap="sm">
        <Text variant="body-1" weight="bold">Outlined Variant</Text>
        <Frame display="flex" direction="row" gap="md" align="center">
          <Chip variant="outlined">기본</Chip>
          <Chip variant="outlined" selected>선택됨</Chip>
          <Chip variant="outlined" removable onRemove={() => {}}>삭제가능</Chip>
          <Chip variant="outlined" disabled>비활성화</Chip>
        </Frame>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip의 filled와 outlined 변형을 비교합니다.'
      }
    }
  }
};

// 크기별 표시
export const Sizes: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => (
    <Frame display="flex" direction="row" gap="md" align="center">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip의 다양한 크기를 보여줍니다.'
      }
    }
  }
};

// 상태별 표시
export const States: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => (
    <Frame display="flex" direction="column" gap="md">
      <Frame display="flex" direction="row" gap="md" align="center">
        <Chip state="default">기본 상태</Chip>
        <Chip state="hovered">호버 상태</Chip>
        <Chip state="pressed">눌림 상태</Chip>
        <Chip state="disabled" disabled>비활성화 상태</Chip>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip의 다양한 상태를 보여줍니다.'
      }
    }
  }
};

// 선택 가능한 칩
export const Selectable: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => {
    const [selectedChips, setSelectedChips] = useState<string[]>(['react']);
    
    const toggleChip = (chipId: string) => {
      setSelectedChips(prev => 
        prev.includes(chipId) 
          ? prev.filter(id => id !== chipId)
          : [...prev, chipId]
      );
    };
    
    return (
      <Frame display="flex" direction="row" gap="md" align="center">
        <Chip 
          selectable
          selected={selectedChips.includes('react')}
          onClick={() => toggleChip('react')}
        >
          React
        </Chip>
        <Chip 
          selectable
          selected={selectedChips.includes('vue')}
          onClick={() => toggleChip('vue')}
        >
          Vue.js
        </Chip>
        <Chip 
          selectable
          selected={selectedChips.includes('angular')}
          onClick={() => toggleChip('angular')}
        >
          Angular
        </Chip>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '선택 가능한 Chip입니다. 클릭하여 선택/해제할 수 있습니다.'
      }
    }
  }
};

// 삭제 가능한 칩
export const Removable: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => {
    const [chips, setChips] = useState([
      { id: '1', label: 'JavaScript' },
      { id: '2', label: 'TypeScript' },
      { id: '3', label: 'React' },
      { id: '4', label: 'Vue.js' }
    ]);
    
    const removeChip = (chipId: string) => {
      setChips(prev => prev.filter(chip => chip.id !== chipId));
    };
    
    return (
      <Frame display="flex" direction="row" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
        {chips.map(chip => (
          <Chip 
            key={chip.id}
            removable
            onRemove={() => removeChip(chip.id)}
          >
            {chip.label}
          </Chip>
        ))}
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '삭제 가능한 Chip입니다. X 버튼을 클릭하여 제거할 수 있습니다.'
      }
    }
  }
};

// 선택과 삭제가 모두 가능한 칩
export const SelectableAndRemovable: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => {
    const [chips, setChips] = useState([
      { id: '1', label: 'Frontend', selected: true },
      { id: '2', label: 'Backend', selected: false },
      { id: '3', label: 'Mobile', selected: true },
      { id: '4', label: 'DevOps', selected: false }
    ]);
    
    const toggleChip = (chipId: string) => {
      setChips(prev => prev.map(chip => 
        chip.id === chipId ? { ...chip, selected: !chip.selected } : chip
      ));
    };
    
    const removeChip = (chipId: string) => {
      setChips(prev => prev.filter(chip => chip.id !== chipId));
    };
    
    return (
      <Frame display="flex" direction="row" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
        {chips.map(chip => (
          <Chip 
            key={chip.id}
            selectable
            removable
            selected={chip.selected}
            onClick={() => toggleChip(chip.id)}
            onRemove={() => removeChip(chip.id)}
          >
            {chip.label}
          </Chip>
        ))}
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '선택과 삭제가 모두 가능한 Chip입니다. 클릭하여 선택하거나 X 버튼으로 제거할 수 있습니다.'
      }
    }
  }
};

// 다양한 크기와 조합
export const Combinations: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg">
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      {/* Small Size - Filled */}
      <Frame display="flex" direction="column" gap="sm">
        <Text variant="body-1" weight="bold">Small Size - Filled</Text>
        <Frame display="flex" direction="row" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
          <Chip size="sm" variant="filled">기본</Chip>
          <Chip size="sm" variant="filled" selected>선택됨</Chip>
          <Chip size="sm" variant="filled" removable onRemove={() => {}}>삭제가능</Chip>
          <Chip size="sm" variant="filled" selectable removable selected onClick={() => {}} onRemove={() => {}}>모든기능</Chip>
          <Chip size="sm" variant="filled" disabled>비활성화</Chip>
        </Frame>
      </Frame>
      
      {/* Small Size - Outlined */}
      <Frame display="flex" direction="column" gap="sm">
        <Text variant="body-1" weight="bold">Small Size - Outlined</Text>
        <Frame display="flex" direction="row" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
          <Chip size="sm" variant="outlined">기본</Chip>
          <Chip size="sm" variant="outlined" selected>선택됨</Chip>
          <Chip size="sm" variant="outlined" removable onRemove={() => {}}>삭제가능</Chip>
          <Chip size="sm" variant="outlined" selectable removable selected onClick={() => {}} onRemove={() => {}}>모든기능</Chip>
          <Chip size="sm" variant="outlined" disabled>비활성화</Chip>
        </Frame>
      </Frame>
      
      {/* Medium Size - Filled */}
      <Frame display="flex" direction="column" gap="sm">
        <Text variant="body-1" weight="bold">Medium Size - Filled</Text>
        <Frame display="flex" direction="row" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
          <Chip size="md" variant="filled">기본</Chip>
          <Chip size="md" variant="filled" selected>선택됨</Chip>
          <Chip size="md" variant="filled" removable onRemove={() => {}}>삭제가능</Chip>
          <Chip size="md" variant="filled" selectable removable selected onClick={() => {}} onRemove={() => {}}>모든기능</Chip>
          <Chip size="md" variant="filled" disabled>비활성화</Chip>
        </Frame>
      </Frame>
      
      {/* Medium Size - Outlined */}
      <Frame display="flex" direction="column" gap="sm">
        <Text variant="body-1" weight="bold">Medium Size - Outlined</Text>
        <Frame display="flex" direction="row" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
          <Chip size="md" variant="outlined">기본</Chip>
          <Chip size="md" variant="outlined" selected>선택됨</Chip>
          <Chip size="md" variant="outlined" removable onRemove={() => {}}>삭제가능</Chip>
          <Chip size="md" variant="outlined" selectable removable selected onClick={() => {}} onRemove={() => {}}>모든기능</Chip>
          <Chip size="md" variant="outlined" disabled>비활성화</Chip>
        </Frame>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기와 변형, 기능 조합의 Chip을 보여줍니다.'
      }
    }
  }
};

// ComboBox에서 사용되는 형태
export const ComboBoxExample: Story = {
  decorators: [
    (Story) => (
      <Surface>
        <Frame display="flex" padding="lg" style={{ maxWidth: '400px' }}>
          <Story />
        </Frame>
      </Surface>
    )
  ],
  render: () => {
    const [selectedTags, setSelectedTags] = useState([
      'React', 'TypeScript', 'Node.js'
    ]);
    
    const removeTag = (tagToRemove: string) => {
      setSelectedTags(prev => prev.filter(tag => tag !== tagToRemove));
    };
    
    return (
      <Frame display="flex" direction="column" gap="md">
        <Text variant="body-1" weight="bold">
          선택된 기술 스택
        </Text>
        <Frame display="flex" direction="row" gap="xs" align="center" style={{ flexWrap: 'wrap' }}>
          {selectedTags.map(tag => (
            <Chip 
              key={tag}
              size="sm"
              removable
              onRemove={() => removeTag(tag)}
            >
              {tag}
            </Chip>
          ))}
        </Frame>
        {selectedTags.length === 0 && (
          <Surface foreground="secondary-system01-2-rest">
            <Text variant="body-2">
              선택된 기술이 없습니다.
            </Text>
          </Surface>
        )}
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'ComboBox에서 선택된 항목을 표시하는 형태의 Chip 사용 예시입니다.'
      }
    }
  }
}; 
