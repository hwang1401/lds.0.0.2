import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Link } from '@lumir/system-01';
import { Frame, Text } from '@lumir/shared';

const meta: Meta<typeof Link> = {
  title: 'System-01/Compounds/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다른 페이지나 외부 사이트로 이동하는 컴파운드 컴포넌트입니다. Text와 Icon을 조합하여 만들어지며, 다양한 크기, 색상, 상태를 지원하고 접근성을 고려한 설계가 적용되어 있습니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'prominent'],
      description: '링크 스타일 변형',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      control: 'select',
      options: ['hero-1', 'hero-2', 'title-1', 'title-2', 'heading-1', 'heading-2', 'heading-3', 'body-1', 'body-2', 'reading', 'label-1', 'label-2', 'caption-1', 'caption-2', 'caption-3'],
      description: '링크 크기',
      table: {
        defaultValue: { summary: 'body-1' }
      }
    },
    color: {
      control: 'select',
      options: ['primary-foreground-1', 'primary-foreground-2', 'secondary-foreground-1', 'secondary-foreground-2', 'secondary-foreground-3', 'cta-foreground-1', 'cta-foreground-2', 'status-error', 'status-warning', 'status-success', 'status-info'],
      description: '링크 색상',
      table: {
        defaultValue: { summary: 'primary-foreground-1' }
      }
    },
    underline: {
      control: 'select',
      options: ['none', 'always', 'hover'],
      description: '밑줄 표시 방식',
      table: {
        defaultValue: { summary: 'hover' }
      }
    },
    external: {
      control: 'boolean',
      description: '외부 링크 여부',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    href: {
      control: 'text',
      description: '링크 URL'
    },
    children: {
      control: 'text',
      description: '링크 텍스트'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    children: '기본 링크',
  },
  parameters: {
    docs: {
      description: {
        story: '가장 기본적인 링크 컴포넌트입니다.'
      }
    }
  }
};

export const Variants: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">링크 변형</Text>
      <Frame display="flex" direction="column" gap="md" align="flex-start">
        <Link href="#" variant="default">Default 링크</Link>
        <Link href="#" variant="subtle">Subtle 링크</Link>
        <Link href="#" variant="prominent">Prominent 링크</Link>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 링크 스타일 변형을 보여줍니다.'
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">링크 크기</Text>
      <Frame display="flex" direction="column" gap="md" align="flex-start">
        <Link href="#" size="hero-1">Hero 1 크기 링크</Link>
        <Link href="#" size="title-1">Title 1 크기 링크</Link>
        <Link href="#" size="heading-1">Heading 1 크기 링크</Link>
        <Link href="#" size="body-1">Body 1 크기 링크</Link>
        <Link href="#" size="body-2">Body 2 크기 링크</Link>
        <Link href="#" size="label-1">Label 1 크기 링크</Link>
        <Link href="#" size="caption-1">Caption 1 크기 링크</Link>
        <Link href="#" size="caption-2">Caption 2 크기 링크</Link>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 링크를 보여줍니다. Text 컴포넌트와 동일한 크기 옵션을 지원합니다.'
      }
    }
  }
};

export const Colors: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">링크 색상</Text>
      <Frame display="flex" direction="column" gap="md" align="flex-start">
        <Link href="#" color="primary-foreground-1">Primary Foreground 1</Link>
        <Link href="#" color="primary-foreground-2">Primary Foreground 2</Link>
        <Link href="#" color="secondary-foreground-1">Secondary Foreground 1</Link>
        <Link href="#" color="secondary-foreground-2">Secondary Foreground 2</Link>
        <Link href="#" color="cta-foreground-1">CTA Foreground 1</Link>
        <Link href="#" color="status-error">Status Error</Link>
        <Link href="#" color="status-warning">Status Warning</Link>
        <Link href="#" color="status-success">Status Success</Link>
        <Link href="#" color="status-info">Status Info</Link>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 링크를 보여줍니다. 시멘틱 토큰 기반의 색상을 사용합니다.'
      }
    }
  }
};

export const UnderlineStyles: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">밑줄 스타일</Text>
      <Frame display="flex" direction="column" gap="md" align="flex-start">
        <Link href="#" underline="none">밑줄 없음</Link>
        <Link href="#" underline="always">항상 밑줄</Link>
        <Link href="#" underline="hover">호버 시 밑줄</Link>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 밑줄 스타일을 보여줍니다.'
      }
    }
  }
};

export const ExternalLinks: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">외부 링크</Text>
      <Frame display="flex" direction="column" gap="md" align="flex-start">
        <Link href="https://example.com" external>외부 사이트로 이동</Link>
        <Link href="https://google.com" external variant="prominent">Google로 이동</Link>
        <Link href="#" external={false}>내부 링크 (external=false)</Link>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '외부 링크는 자동으로 새 탭에서 열리며 화살표 아이콘이 표시됩니다.'
      }
    }
  }
};

export const InteractionStates: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">인터랙션 상태</Text>
      <Frame display="flex" direction="column" gap="md" align="flex-start">
        <Link href="#" interactionState="rest">Rest 상태</Link>
        <Link href="#" interactionState="hovered">Hovered 상태</Link>
        <Link href="#" interactionState="pressed">Pressed 상태</Link>
        <Link href="#" interactionState="visited">Visited 상태</Link>
        <Link href="#" disabled>Disabled 상태</Link>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 인터랙션 상태의 링크를 보여줍니다.'
      }
    }
  }
};

export const InlineText: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">텍스트 내 링크</Text>
      <Text variant="body-1">
        이것은 일반 텍스트이고, <Link href="#" size="body-1">여기는 인라인 링크</Link>입니다. 
        또한 <Link href="#" size="body-1" variant="prominent">강조된 링크</Link>도 포함할 수 있습니다.
      </Text>
      <Text variant="body-2">
        작은 텍스트에서는 <Link href="#" size="body-2">이런 링크</Link>를 사용하고, 
        <Link href="https://example.com" size="body-2" external>외부 링크</Link>도 자연스럽게 포함됩니다.
      </Text>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '텍스트 내에서 자연스럽게 사용되는 인라인 링크의 예시입니다.'
      }
    }
  }
};

export const NavigationLinks: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg" align="flex-start">
      <Text variant="heading-3">네비게이션 링크</Text>
      <Frame display="flex" direction="row" gap="lg" align="center">
        <Link href="#" variant="prominent" underline="none">홈</Link>
        <Link href="#" variant="default" underline="hover">제품</Link>
        <Link href="#" variant="default" underline="hover">서비스</Link>
        <Link href="#" variant="default" underline="hover">회사소개</Link>
        <Link href="#" variant="default" underline="hover">문의하기</Link>
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '네비게이션 메뉴에서 사용되는 링크들의 예시입니다.'
      }
    }
  }
}; 
