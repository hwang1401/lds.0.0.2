import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Field as System01Field } from '@lumir/system-01';
import { Field as System02Field } from '@lumir/system-02';
import { Frame, Text } from '@lumir/shared';

// 시스템별 Field 컴포넌트 매핑
const FieldComponents = {
  'system-01': System01Field,
  'system-02': System02Field,
};

// 동적 Field 컴포넌트
const UniversalField = ({ system, ...props }: any) => {
  const FieldComponent = FieldComponents[system as keyof typeof FieldComponents] || System01Field;
  return <FieldComponent {...props} />;
};

const meta: Meta<typeof UniversalField> = {
  title: 'Components/Field',
  component: UniversalField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Field 컴포넌트는 사용자 입력을 받기 위한 텍스트 필드입니다.

## 주요 특징
- **3가지 스타일**: outlined, transparent, filled
- **3가지 라벨 위치**: above, before, none
- **상태 관리**: 기본, 비활성화, 에러 상태
- **접근성**: 라벨과 입력 필드의 적절한 연결
- **프리미티브 컴포넌트 활용**: Surface, Frame, Sizing, Text, Label 조합

## 디자인 토큰 활용
- 색상: 시맨틱 컬러 토큰 (secondary, error 등)
- 높이: sizing 토큰 (lg, xl, xxl)
- 간격: gap 토큰 (xs, md 등)
- 테두리: borderRadius, borderWidth 토큰
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'transparent', 'filled'],
      description: '필드의 스타일 변형'
    },
    labelPosition: {
      control: 'select',
      options: ['above', 'before', 'none'],
      description: '라벨의 위치'
    },
    size: {
      control: 'select',
      options: ['md', 'lg', 'xlg'],
      description: '필드의 크기 (32px, 36px, 40px)'
    },
    fieldWidth: {
      control: 'text',
      description: '필드의 너비 (fit, 100%, 300px 등)'
    },
    label: {
      control: 'text',
      description: '라벨 텍스트'
    },
    required: {
      control: 'boolean',
      description: '필수 입력 표시 (*)'
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태'
    },
    error: {
      control: 'boolean',
      description: '에러 상태'
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지'
    },
    helperText: {
      control: 'text',
      description: '도움말 텍스트'
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트'
    },
    leftIcon: {
      control: 'text',
      description: '왼쪽 아이콘'
    },
    rightIcon: {
      control: 'text',
      description: '오른쪽 아이콘'
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'outlined',
    labelPosition: 'above',
    label: '이름',
    placeholder: '이름을 입력하세요',
    helperText: '실명을 입력해주세요'
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalField {...args} system={system} />;
  }
};

export const SystemComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 01 - Clean & Efficient (파란색, 직각)
        </Text>
        <Frame display="flex" direction="column" gap="lg">
          <UniversalField
            system="system-01"
            variant="outlined"
            labelPosition="above"
            label="이름"
            placeholder="이름을 입력하세요"
            helperText="실명을 입력해주세요"
          />
          <UniversalField
            system="system-01"
            variant="outlined"
            labelPosition="above"
            label="이메일"
            required
            placeholder="example@email.com"
            type="email"
          />
          <UniversalField
            system="system-01"
            variant="outlined"
            labelPosition="above"
            label="에러 상태"
            error
            errorMessage="유효한 값을 입력하세요"
            value="invalid"
          />
        </Frame>
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Text as="h2" variant="heading-2">
          System 02 - Modern & Friendly (초록색, 둥근 모서리)
        </Text>
        <Frame display="flex" direction="column" gap="lg">
          <UniversalField
            system="system-02"
            variant="outlined"
            labelPosition="above"
            label="이름"
            placeholder="이름을 입력하세요"
            helperText="실명을 입력해주세요"
          />
          <UniversalField
            system="system-02"
            variant="outlined"
            labelPosition="above"
            label="이메일"
            required
            placeholder="example@email.com"
            type="email"
          />
          <UniversalField
            system="system-02"
            variant="outlined"
            labelPosition="above"
            label="에러 상태"
            error
            errorMessage="유효한 값을 입력하세요"
            value="invalid"
          />
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const OutlinedVariations: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Outlined Variations
        </Text>
        <Frame display="flex" direction="column" gap="lg">
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="라벨 위쪽 (Above)"
            placeholder="텍스트를 입력하세요"
            helperText="도움말 텍스트"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="before"
            label="라벨 앞쪽"
            placeholder="텍스트를 입력하세요"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="none"
            placeholder="라벨 없음"
            helperText="라벨이 없는 필드"
          />
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Outlined 스타일의 다양한 라벨 위치를 보여줍니다.'
      }
    }
  }
};

export const Required: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Required Fields
        </Text>
        <Frame display="flex" direction="column" gap="lg">
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="이메일"
            required
            type="email"
            placeholder="example@email.com"
            helperText="유효한 이메일 주소를 입력하세요"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="before"
            label="전화번호"
            required
            type="tel"
            placeholder="010-0000-0000"
          />
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '필수 입력 표시(*)가 있는 필드입니다.'
      }
    }
  }
};

export const ErrorState: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Error States
        </Text>
        <Frame display="flex" direction="column" gap="lg">
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="이메일"
            required
            error
            errorMessage="유효한 이메일 주소를 입력하세요"
            value="invalid-email"
            type="email"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="before"
            label="비밀번호"
            required
            error
            errorMessage="비밀번호는 8자 이상이어야 합니다"
            value="123"
            type="password"
          />
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '에러 상태의 필드를 보여줍니다.'
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
          {systemName} - Field Sizes
        </Text>
        <Frame display="flex" direction="column" gap="lg">
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="Medium (md)"
            size="md"
            placeholder="32px 높이"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="Large (lg)"
            size="lg"
            placeholder="36px 높이"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="Extra Large (xlg)"
            size="xlg"
            placeholder="40px 높이"
          />
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 필드를 보여줍니다.'
      }
    }
  }
};

export const WithIcons: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    const systemName = system === 'system-01' ? 'Clean & Efficient' : 'Modern & Friendly';
    
    return (
      <Frame display="flex" direction="column" gap="lg">
        <Text as="h2" variant="heading-2">
          {systemName} - Fields with Icons
        </Text>
        <Frame display="flex" direction="column" gap="lg">
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="검색"
            leftIcon="search"
            placeholder="검색어를 입력하세요"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="이메일"
            leftIcon="mail"
            rightIcon="checkmark-circle"
            placeholder="example@email.com"
            type="email"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="비밀번호"
            leftIcon="lock-closed"
            rightIcon="eye"
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘이 포함된 필드를 보여줍니다.'
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
          {systemName} - 회원가입 폼 예시
        </Text>
        <Frame display="flex" direction="column" gap="md">
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="이름"
            required
            placeholder="실명을 입력하세요"
            helperText="한글 또는 영문으로 입력"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="이메일"
            required
            type="email"
            leftIcon="mail"
            placeholder="example@email.com"
            helperText="로그인 시 사용할 이메일 주소"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="비밀번호"
            required
            type="password"
            leftIcon="lock-closed"
            placeholder="8자 이상 입력하세요"
            helperText="영문, 숫자, 특수문자 조합"
          />
          
          <UniversalField
            system={system}
            variant="outlined"
            labelPosition="above"
            label="전화번호"
            type="tel"
            leftIcon="phone"
            placeholder="010-0000-0000"
            helperText="선택사항입니다"
          />
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 다양한 필드의 예시입니다.'
      }
    }
  }
}; 