import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Link as System01Link } from '@lumir/system-01';
import { Link as System02Link } from '@lumir/system-02';
import { Frame, Text } from '@lumir/shared';

// 시스템별 Link 컴포넌트 매핑
const LinkComponents = {
  'system-01': System01Link,
  'system-02': System02Link,
};

// 동적 Link 컴포넌트
const UniversalLink = ({ system, ...props }: any) => {
  const LinkComponent = LinkComponents[system as keyof typeof LinkComponents] || System01Link;
  return <LinkComponent {...props} />;
};

const meta: Meta<typeof UniversalLink> = {
  title: 'Components/Link',
  component: UniversalLink,
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
type Story = StoryObj<typeof UniversalLink>;

export const Default: Story = {
  args: {
    href: '#',
    children: '기본 링크',
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalLink {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '가장 기본적인 링크 컴포넌트입니다.'
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
        <Frame display="flex" direction="column" gap="sm" align="flex-start">
          <UniversalLink system="system-01" href="#" variant="default">Default 링크</UniversalLink>
          <UniversalLink system="system-01" href="#" variant="subtle">Subtle 링크</UniversalLink>
          <UniversalLink system="system-01" href="#" variant="prominent">Prominent 링크</UniversalLink>
          <UniversalLink system="system-01" href="https://example.com" external>외부 링크</UniversalLink>
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 02 - Modern & Friendly (초록색)
        </Text>
        <Frame display="flex" direction="column" gap="sm" align="flex-start">
          <UniversalLink system="system-02" href="#" variant="default">Default 링크</UniversalLink>
          <UniversalLink system="system-02" href="#" variant="subtle">Subtle 링크</UniversalLink>
          <UniversalLink system="system-02" href="#" variant="prominent">Prominent 링크</UniversalLink>
          <UniversalLink system="system-02" href="https://example.com" external>외부 링크</UniversalLink>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const Variants: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" align="flex-start">
        <Text as="h2" variant="heading-2">
          {systemName} - Link Variants
        </Text>
        <Frame display="flex" direction="column" gap="md" align="flex-start">
          <UniversalLink system={system} href="#" variant="default">Default 링크</UniversalLink>
          <UniversalLink system={system} href="#" variant="subtle">Subtle 링크</UniversalLink>
          <UniversalLink system={system} href="#" variant="prominent">Prominent 링크</UniversalLink>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 링크 스타일 변형을 보여줍니다.'
      }
    }
  }
};

export const Sizes: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" align="flex-start">
        <Text as="h2" variant="heading-2">
          {systemName} - Link Sizes
        </Text>
        <Frame display="flex" direction="column" gap="md" align="flex-start">
          <UniversalLink system={system} href="#" size="hero-1">Hero 1 크기 링크</UniversalLink>
          <UniversalLink system={system} href="#" size="title-1">Title 1 크기 링크</UniversalLink>
          <UniversalLink system={system} href="#" size="heading-1">Heading 1 크기 링크</UniversalLink>
          <UniversalLink system={system} href="#" size="body-1">Body 1 크기 링크</UniversalLink>
          <UniversalLink system={system} href="#" size="body-2">Body 2 크기 링크</UniversalLink>
          <UniversalLink system={system} href="#" size="label-1">Label 1 크기 링크</UniversalLink>
          <UniversalLink system={system} href="#" size="caption-1">Caption 1 크기 링크</UniversalLink>
          <UniversalLink system={system} href="#" size="caption-2">Caption 2 크기 링크</UniversalLink>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 링크를 보여줍니다. Text 컴포넌트와 동일한 크기 옵션을 지원합니다.'
      }
    }
  }
};

export const Colors: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" align="flex-start">
        <Text as="h2" variant="heading-2">
          {systemName} - Link Colors
        </Text>
        <Frame display="flex" direction="column" gap="md" align="flex-start">
          <UniversalLink system={system} href="#" color="primary-foreground-1">Primary Foreground 1</UniversalLink>
          <UniversalLink system={system} href="#" color="primary-foreground-2">Primary Foreground 2</UniversalLink>
          <UniversalLink system={system} href="#" color="secondary-foreground-1">Secondary Foreground 1</UniversalLink>
          <UniversalLink system={system} href="#" color="secondary-foreground-2">Secondary Foreground 2</UniversalLink>
          <UniversalLink system={system} href="#" color="cta-foreground-1">CTA Foreground 1</UniversalLink>
          <UniversalLink system={system} href="#" color="status-error">Status Error</UniversalLink>
          <UniversalLink system={system} href="#" color="status-warning">Status Warning</UniversalLink>
          <UniversalLink system={system} href="#" color="status-success">Status Success</UniversalLink>
          <UniversalLink system={system} href="#" color="status-info">Status Info</UniversalLink>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 링크를 보여줍니다. 시멘틱 토큰 기반의 색상을 사용합니다.'
      }
    }
  }
};

export const UnderlineStyles: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" align="flex-start">
        <Text as="h2" variant="heading-2">
          {systemName} - Underline Styles
        </Text>
        <Frame display="flex" direction="column" gap="md" align="flex-start">
          <UniversalLink system={system} href="#" underline="none">밑줄 없음</UniversalLink>
          <UniversalLink system={system} href="#" underline="always">항상 밑줄</UniversalLink>
          <UniversalLink system={system} href="#" underline="hover">호버 시 밑줄</UniversalLink>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 밑줄 스타일을 보여줍니다.'
      }
    }
  }
};

export const ExternalLinks: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" align="flex-start">
        <Text as="h2" variant="heading-2">
          {systemName} - External Links
        </Text>
        <Frame display="flex" direction="column" gap="md" align="flex-start">
          <UniversalLink system={system} href="https://example.com" external>외부 사이트로 이동</UniversalLink>
          <UniversalLink system={system} href="https://google.com" external variant="prominent">Google로 이동</UniversalLink>
          <UniversalLink system={system} href="#" external={false}>내부 링크 (external=false)</UniversalLink>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '외부 링크는 자동으로 새 탭에서 열리며 화살표 아이콘이 표시됩니다.'
      }
    }
  }
};

export const DisabledStates: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" align="flex-start">
        <Text as="h2" variant="heading-2">
          {systemName} - Disabled States
        </Text>
        <Frame display="flex" direction="column" gap="md" align="flex-start">
          <UniversalLink system={system} href="#" disabled>비활성화된 링크</UniversalLink>
          <UniversalLink system={system} href="#" disabled variant="prominent">비활성화된 Prominent 링크</UniversalLink>
          <UniversalLink system={system} href="#" disabled external>비활성화된 외부 링크</UniversalLink>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 링크들을 보여줍니다.'
      }
    }
  }
};

export const NavigationExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg" align="flex-start">
        <Text as="h2" variant="heading-2">
          {systemName} - 네비게이션 예시
        </Text>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">메인 네비게이션</Text>
          <Frame display="flex" direction="row" gap="lg" align="flex-start">
            <UniversalLink system={system} href="#" variant="prominent">홈</UniversalLink>
            <UniversalLink system={system} href="#" variant="default">제품</UniversalLink>
            <UniversalLink system={system} href="#" variant="default">서비스</UniversalLink>
            <UniversalLink system={system} href="#" variant="default">회사소개</UniversalLink>
            <UniversalLink system={system} href="#" variant="default">연락처</UniversalLink>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">푸터 링크</Text>
          <Frame display="flex" direction="column" gap="sm" align="flex-start">
            <UniversalLink system={system} href="#" variant="subtle" size="caption-1">개인정보처리방침</UniversalLink>
            <UniversalLink system={system} href="#" variant="subtle" size="caption-1">이용약관</UniversalLink>
            <UniversalLink system={system} href="mailto:support@example.com" external size="caption-1">고객지원</UniversalLink>
          </Frame>
        </Frame>
        
        <Frame display="flex" direction="column" gap="md">
          <Text variant="body-1" weight="bold">외부 리소스</Text>
          <Frame display="flex" direction="column" gap="sm" align="flex-start">
            <UniversalLink system={system} href="https://github.com" external>GitHub</UniversalLink>
            <UniversalLink system={system} href="https://docs.example.com" external>문서</UniversalLink>
            <UniversalLink system={system} href="https://blog.example.com" external>블로그</UniversalLink>
          </Frame>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 웹사이트에서 사용되는 다양한 링크의 예시입니다.'
      }
    }
  }
}; 