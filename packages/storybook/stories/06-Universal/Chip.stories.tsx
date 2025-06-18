import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip as System01Chip } from 'lumir-design-system-01';
import { Chip as System02Chip } from 'lumir-design-system-02';
import { Surface, Frame, Text } from 'lumir-design-system-shared';

// 시스템별 Chip 컴포넌트 매핑
const ChipComponents = {
  'system-01': System01Chip,
  'system-02': System02Chip,
};

// 동적 Chip 컴포넌트
const UniversalChip = ({ system, ...props }: any) => {
  const ChipComponent = ChipComponents[system as keyof typeof ChipComponents] || System01Chip;
  return <ChipComponent {...props} />;
};

const meta: Meta<typeof UniversalChip> = {
  title: 'Components/Chip',
  component: UniversalChip,
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
type Story = StoryObj<typeof UniversalChip>;

// 기본 칩
export const Default: Story = {
  args: {
    children: 'React',
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return (
      <Surface>
        <Frame display="flex" padding="lg">
          <UniversalChip {...args} system={system} />
        </Frame>
      </Surface>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '기본 Chip 컴포넌트입니다.'
      }
    }
  }
};

export const SystemComparison: Story = {
  render: () => (
    <Surface>
      <Frame display="flex" direction="column" gap="xl" padding="lg">
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 01 - Clean & Efficient (파란색)
          </Text>
          <Frame display="flex" direction="row" gap="md" align="center">
            <UniversalChip system="system-01" variant="filled">기본</UniversalChip>
            <UniversalChip system="system-01" variant="filled" selected>선택됨</UniversalChip>
            <UniversalChip system="system-01" variant="filled" removable onRemove={() => {}}>삭제가능</UniversalChip>
            <UniversalChip system="system-01" variant="outlined">Outlined</UniversalChip>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text as="h2" variant="heading-2">
            System 02 - Modern & Friendly (초록색)
          </Text>
          <Frame display="flex" direction="row" gap="md" align="center">
            <UniversalChip system="system-02" variant="filled">기본</UniversalChip>
            <UniversalChip system="system-02" variant="filled" selected>선택됨</UniversalChip>
            <UniversalChip system="system-02" variant="filled" removable onRemove={() => {}}>삭제가능</UniversalChip>
            <UniversalChip system="system-02" variant="outlined">Outlined</UniversalChip>
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  ),
};

// 변형별 표시
export const Variants: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Surface>
        <Frame display="flex" direction="column" gap="lg" padding="lg">
          <Text as="h2" variant="heading-2">
            {systemName} - Variants
          </Text>
          
          {/* Filled Variant */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-1" weight="bold">Filled Variant</Text>
            <Frame display="flex" direction="row" gap="md" align="center">
              <UniversalChip system={system} variant="filled">기본</UniversalChip>
              <UniversalChip system={system} variant="filled" selected>선택됨</UniversalChip>
              <UniversalChip system={system} variant="filled" removable onRemove={() => {}}>삭제가능</UniversalChip>
              <UniversalChip system={system} variant="filled" disabled>비활성화</UniversalChip>
            </Frame>
          </Frame>
          
          {/* Outlined Variant */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-1" weight="bold">Outlined Variant</Text>
            <Frame display="flex" direction="row" gap="md" align="center">
              <UniversalChip system={system} variant="outlined">기본</UniversalChip>
              <UniversalChip system={system} variant="outlined" selected>선택됨</UniversalChip>
              <UniversalChip system={system} variant="outlined" removable onRemove={() => {}}>삭제가능</UniversalChip>
              <UniversalChip system={system} variant="outlined" disabled>비활성화</UniversalChip>
            </Frame>
          </Frame>
        </Frame>
      </Surface>
    );
  },
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
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Surface>
        <Frame display="flex" direction="column" gap="lg" padding="lg">
          <Text as="h2" variant="heading-2">
            {systemName} - Sizes
          </Text>
          <Frame display="flex" direction="row" gap="md" align="center">
            <UniversalChip system={system} size="sm">Small</UniversalChip>
            <UniversalChip system={system} size="md">Medium</UniversalChip>
          </Frame>
        </Frame>
      </Surface>
    );
  },
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
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Surface>
        <Frame display="flex" direction="column" gap="lg" padding="lg">
          <Text as="h2" variant="heading-2">
            {systemName} - States
          </Text>
          <Frame display="flex" direction="row" gap="md" align="center">
            <UniversalChip system={system} state="default">기본 상태</UniversalChip>
            <UniversalChip system={system} state="hovered">호버 상태</UniversalChip>
            <UniversalChip system={system} state="pressed">눌림 상태</UniversalChip>
            <UniversalChip system={system} state="disabled" disabled>비활성화 상태</UniversalChip>
          </Frame>
        </Frame>
      </Surface>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip의 다양한 상태를 보여줍니다.'
      }
    }
  }
};

// 선택 가능한 칩
export const SelectableChips: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    const [selectedChips, setSelectedChips] = useState<string[]>(['react']);
    
    const toggleChip = (chipId: string) => {
      setSelectedChips(prev => 
        prev.includes(chipId) 
          ? prev.filter(id => id !== chipId)
          : [...prev, chipId]
      );
    };
    
    const chips = [
      { id: 'react', label: 'React' },
      { id: 'vue', label: 'Vue' },
      { id: 'angular', label: 'Angular' },
      { id: 'svelte', label: 'Svelte' },
      { id: 'typescript', label: 'TypeScript' },
    ];
    
    return (
      <Surface>
        <Frame display="flex" direction="column" gap="lg" padding="lg">
          <Text as="h2" variant="heading-2">
            {systemName} - 선택 가능한 칩
          </Text>
          <Frame display="flex" direction="row" gap="sm" wrap="wrap">
            {chips.map(chip => (
              <UniversalChip
                key={chip.id}
                system={system}
                selectable
                selected={selectedChips.includes(chip.id)}
                onClick={() => toggleChip(chip.id)}
              >
                {chip.label}
              </UniversalChip>
            ))}
          </Frame>
          <Text variant="body-2" color="secondary-foreground-1">
            선택된 항목: {selectedChips.join(', ') || '없음'}
          </Text>
        </Frame>
      </Surface>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '선택 가능한 Chip들을 보여줍니다. 클릭하여 선택/해제할 수 있습니다.'
      }
    }
  }
};

// 삭제 가능한 칩
export const RemovableChips: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    const [chips, setChips] = useState([
      { id: 'react', label: 'React' },
      { id: 'vue', label: 'Vue' },
      { id: 'angular', label: 'Angular' },
      { id: 'svelte', label: 'Svelte' },
    ]);
    
    const removeChip = (chipId: string) => {
      setChips(prev => prev.filter(chip => chip.id !== chipId));
    };
    
    return (
      <Surface>
        <Frame display="flex" direction="column" gap="lg" padding="lg">
          <Text as="h2" variant="heading-2">
            {systemName} - 삭제 가능한 칩
          </Text>
          <Frame display="flex" direction="row" gap="sm" wrap="wrap">
            {chips.map(chip => (
              <UniversalChip
                key={chip.id}
                system={system}
                removable
                onRemove={() => removeChip(chip.id)}
              >
                {chip.label}
              </UniversalChip>
            ))}
          </Frame>
          {chips.length === 0 && (
            <Text variant="body-2" color="secondary-foreground-1">
              모든 칩이 삭제되었습니다.
            </Text>
          )}
        </Frame>
      </Surface>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '삭제 가능한 Chip들을 보여줍니다. X 버튼을 클릭하여 삭제할 수 있습니다.'
      }
    }
  }
};

// 태그 입력 예시
export const TagInputExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    const [tags, setTags] = useState(['JavaScript', 'React', 'TypeScript']);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    
    const removeTag = (tagToRemove: string) => {
      setTags(prev => prev.filter(tag => tag !== tagToRemove));
    };
    
    const toggleTag = (tag: string) => {
      setSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      );
    };
    
    return (
      <Surface>
        <Frame display="flex" direction="column" gap="lg" padding="lg">
          <Text as="h2" variant="heading-2">
            {systemName} - 태그 입력 예시
          </Text>
          
          <Frame display="flex" direction="column" gap="md">
            <Text variant="body-1" weight="bold">기술 스택 (삭제 가능)</Text>
                         <Frame display="flex" direction="row" gap="sm" wrap="wrap">
               {tags.map(tag => (
                 <UniversalChip
                   key={tag}
                   system={system}
                   variant="filled"
                   removable
                   onRemove={() => removeTag(tag)}
                 >
                   {tag}
                 </UniversalChip>
               ))}
            </Frame>
          </Frame>
          
          <Frame display="flex" direction="column" gap="md">
            <Text variant="body-1" weight="bold">관심 분야 (선택 가능)</Text>
                         <Frame display="flex" direction="row" gap="sm" wrap="wrap">
               {['프론트엔드', '백엔드', '모바일', 'DevOps', 'AI/ML'].map(interest => (
                 <UniversalChip
                   key={interest}
                   system={system}
                   variant="outlined"
                   selectable
                   selected={selectedTags.includes(interest)}
                   onClick={() => toggleTag(interest)}
                 >
                   {interest}
                 </UniversalChip>
               ))}
            </Frame>
            <Text variant="body-2" color="secondary-foreground-1">
              선택된 관심 분야: {selectedTags.join(', ') || '없음'}
            </Text>
          </Frame>
        </Frame>
      </Surface>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 태그 입력 시나리오에서 사용되는 Chip의 예시입니다.'
      }
    }
  }
}; 