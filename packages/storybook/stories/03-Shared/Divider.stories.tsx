import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Divider, Frame, Text, Surface } from '@lumir/shared';

const meta: Meta<typeof Divider> = {
  title: 'Shared/Primitives/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '콘텐츠를 구분하는 선을 그리는 순수한 프리미티브 컴포넌트입니다. 수평/수직 방향, 다양한 스타일과 색상을 지원하며 시멘틱 토큰만을 사용합니다.'
      }
    }
  },
  decorators: [
    (Story, context) => {
      const { orientation } = context.args;
      
      // 수직 Divider의 경우 flex 컨테이너로 감싸기
      if (orientation === 'vertical') {
        return (
          <Frame display="flex" align="center" gap="md" style={{ height: '100px' }}>
            <span>왼쪽</span>
            <Story />
            <span>오른쪽</span>
          </Frame>
        );
      }
      
      // 수평 Divider의 경우 최소 너비 컨테이너
      return (
        <div style={{ minWidth: '300px' }}>
          <Story />
        </div>
      );
    }
  ],
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '구분선 방향',
      table: {
        defaultValue: { summary: 'horizontal' }
      }
    },
    thickness: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
      description: '구분선 두께',
      table: {
        defaultValue: { summary: 'thin' }
      }
    },
    color: {
      control: 'select',
      options: [
        'primary-stroke-1',
        'secondary-stroke-1', 
        'secondary-stroke-2', 
        'secondary-stroke-3', 
        'secondary-stroke-inverse',
        'cta-stroke-1', 
        'cta-stroke-2',
        'status-error', 
        'status-warning', 
        'status-success', 
        'status-info', 
        'status-focused'
      ],
      description: '구분선 색상',
      table: {
        defaultValue: { summary: 'secondary-stroke-2' }
      }
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: '구분선 스타일',
      table: {
        defaultValue: { summary: 'solid' }
      }
    },
    length: {
      control: 'text',
      description: '구분선 길이 (px, %, rem 등)'
    },
    spacing: {
      control: 'select',
      options: ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      description: '전체 마진'
    },
    spacingY: {
      control: 'select',
      options: ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      description: '수직 마진'
    },
    spacingX: {
      control: 'select',
      options: ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      description: '수평 마진'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// 기본 스토리 - Controls에서 모든 props 조작 가능
export const Default: Story = {
  args: {
    thickness: 'medium',
    color: 'secondary-stroke-2',
    variant: 'solid',
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: '하단 Controls 패널에서 모든 속성을 실시간으로 조작할 수 있습니다.'
      }
    }
  }
};

// 수평 구분선 변형들
export const HorizontalVariations: Story = {
  args: {
    orientation: 'horizontal',
    thickness: 'medium',
    color: 'primary-stroke-1',
    variant: 'solid'
  },
  parameters: {
    docs: {
      description: {
        story: '수평 구분선의 다양한 설정을 테스트할 수 있습니다.'
      }
    }
  }
};

// 수직 구분선 변형들
export const VerticalVariations: Story = {
  args: {
    orientation: 'vertical',
    thickness: 'medium',
    color: 'cta-stroke-1',
    variant: 'solid'
  },
  parameters: {
    docs: {
      description: {
        story: '수직 구분선의 다양한 설정을 테스트할 수 있습니다.'
      }
    }
  }
};

// 커스텀 길이 테스트
export const CustomLength: Story = {
  args: {
    orientation: 'horizontal',
    thickness: 'thick',
    color: 'status-success',
    variant: 'dashed',
    length: '200px'
  },
  parameters: {
    docs: {
      description: {
        story: 'length 속성으로 구분선의 길이를 조정할 수 있습니다. (px, %, rem 등 지원)'
      }
    }
  }
};

// 간격 테스트
export const SpacingTest: Story = {
  args: {
    orientation: 'horizontal',
    thickness: 'medium',
    color: 'status-error',
    variant: 'solid',
    spacing: 'lg'
  },
  render: (args) => (
    <Frame display="flex" direction="column">
      <Text variant="body-2">위 텍스트</Text>
      <Divider {...args} />
      <Text variant="body-2">아래 텍스트</Text>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: 'spacing, spacingX, spacingY 속성으로 구분선 주변 여백을 조정할 수 있습니다.'
      }
    }
  }
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="md">
      <Text variant="heading-2">사용자 정보</Text>
      <Text variant="body-2">이름: 홍길동</Text>
      <Text variant="body-2">이메일: hong@example.com</Text>
      
      <Divider thickness="thin" color="secondary-stroke-2" />
      
      <Text variant="heading-3">연락처</Text>
      <Text variant="body-2">전화: 010-1234-5678</Text>
      <Text variant="body-2">주소: 서울시 강남구</Text>
      
      <Divider thickness="medium" color="cta-stroke-1" variant="dashed" />
      
      <Text variant="body-2">정보 수정일: 2024년 1월 15일</Text>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 UI에서 콘텐츠를 구분하는 구분선의 사용 예시입니다.'
      }
    }
  }
}; 