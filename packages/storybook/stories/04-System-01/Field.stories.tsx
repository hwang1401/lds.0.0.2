import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Field } from 'lumir-system-01';
import { Frame, Text } from 'lumir-shared';

const meta: Meta<typeof Field> = {
  title: 'System-01/Compounds/Field',
  component: Field,
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

// 기본 스토리 - Outlined with Label Above
export const Default: Story = {
  args: {
    variant: 'outlined',
    labelPosition: 'above',
    label: '이름',
    placeholder: '이름을 입력하세요',
    helperText: '실명을 입력해주세요'
  }
};

// Outlined 스타일 변형들
export const OutlinedVariations: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xxxl">
      <Field
        variant="outlined"
        labelPosition="above"
        label="라벨 위쪽 (Above)"
        placeholder="텍스트를 입력하세요"
        helperText="도움말 텍스트"
      />
      
      <Field
        variant="outlined"
        labelPosition="before"
        label="라벨 앞쪽"
        placeholder="텍스트를 입력하세요"
      />
      
      <Field
        variant="outlined"
        labelPosition="none"
        placeholder="라벨 없음"
        helperText="라벨이 없는 필드"
      />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outlined 스타일의 다양한 라벨 위치를 보여줍니다.'
      }
    }
  }
};

// 필수 입력 필드
export const Required: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xxxl">
      <Field
        variant="outlined"
        labelPosition="above"
        label="이메일"
        required
        type="email"
        placeholder="example@email.com"
        helperText="유효한 이메일 주소를 입력하세요"
      />
      
      <Field
        variant="outlined"
        labelPosition="before"
        label="전화번호"
        required
        type="tel"
        placeholder="010-0000-0000"
      />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '필수 입력 표시(*)가 있는 필드입니다.'
      }
    }
  }
};

// 에러 상태
export const ErrorState: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xxxl">
      <Field
        variant="outlined"
        labelPosition="above"
        label="이메일"
        required
        error
        errorMessage="유효한 이메일 주소를 입력하세요"
        value="invalid-email"
        type="email"
      />
      
      <Field
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
  ),
  parameters: {
    docs: {
      description: {
        story: '에러 상태의 필드들입니다. 테두리와 메시지가 에러 색상으로 표시됩니다.'
      }
    }
  }
};

// 비활성화 상태
export const Disabled: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xxxl">
      <Field
        variant="outlined"
        labelPosition="above"
        label="읽기 전용 필드"
        disabled
        value="비활성화된 값"
        helperText="이 필드는 수정할 수 없습니다"
      />
      
      <Field
        variant="outlined"
        labelPosition="before"
        label="비활성화 필드"
        disabled
        placeholder="입력할 수 없음"
      />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '비활성화된 필드들입니다. 라벨, 테두리, 텍스트가 모두 비활성화 색상으로 표시됩니다.'
      }
    }
  }
};

// 모든 스타일 변형
export const AllVariants: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Frame display="flex" direction="column" gap="md">
        <Field
          variant="outlined"
          labelPosition="above"
          label="Outlined 스타일"
          placeholder="테두리가 있는 스타일"
          helperText="가장 일반적인 필드 스타일"
        />
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Field
          variant="transparent"
          labelPosition="above"
          label="Transparent 스타일"
          placeholder="투명한 배경"
          helperText="테두리가 없는 깔끔한 스타일"
        />
      </Frame>
      
      <Frame display="flex" direction="column" gap="md">
        <Field
          variant="filled"
          labelPosition="above"
          label="Filled 스타일"
          placeholder="채워진 배경"
          helperText="배경색이 있는 스타일"
        />
      </Frame>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 스타일 변형(outlined, transparent, filled)을 보여줍니다.'
      }
    }
  }
};

// 다양한 입력 타입
export const InputTypes: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Field
        variant="outlined"
        labelPosition="above"
        label="텍스트"
        type="text"
        placeholder="일반 텍스트"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="이메일"
        type="email"
        placeholder="example@email.com"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="비밀번호"
        type="password"
        placeholder="비밀번호 입력"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="숫자"
        type="number"
        placeholder="숫자만 입력"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="전화번호"
        type="tel"
        placeholder="010-0000-0000"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="웹사이트"
        type="url"
        placeholder="https://example.com"
      />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 입력 타입(text, email, password, number, tel, url)을 지원합니다.'
      }
    }
  }
};

// 사이즈 비교
export const SizeComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Field
        variant="outlined"
        labelPosition="above"
        label="Extra Large (xlg)"
        size="xlg"
        placeholder="40px 높이"
        helperText="높이: 40px"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="Large (lg)"
        size="lg"
        placeholder="36px 높이"
        helperText="높이: 36px"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="Medium (md)"
        size="md"
        placeholder="32px 높이"
        helperText="높이: 32px (기본값)"
      />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '필드의 크기별 높이를 비교합니다. md(32px), lg(36px), xlg(40px)의 고정 높이를 가집니다.'
      }
    }
  }
};

// 너비 설정
export const WidthSettings: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Field
        variant="outlined"
        labelPosition="above"
        label="기본 너비 (100%)"
        placeholder="전체 너비"
        helperText="fieldWidth를 지정하지 않으면 100%"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="고정 너비 (300px)"
        fieldWidth="300px"
        placeholder="300px 너비"
        helperText="fieldWidth='300px'"
      />
      
      <Field
        variant="outlined"
        labelPosition="above"
        label="내용에 맞춤 (fit)"
        fieldWidth="fit"
        placeholder="짧은 텍스트"
        helperText="fieldWidth='fit'"
      />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '필드의 다양한 너비 설정을 보여줍니다. 기본값(100%), 고정값(px), 내용 맞춤(fit)을 지원합니다.'
      }
    }
  }
};

export const WithIcons: Story = {
  args: {
    label: '아이콘이 있는 필드',
    placeholder: '검색어를 입력하세요',
    leftIcon: 'SearchIcon',
    size: 'md',
    variant: 'outlined',
    fieldWidth: '300px',
  },
};

export const IconsExamples: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Field 
        label="검색 필드" 
        placeholder="검색어를 입력하세요" 
        leftIcon="SearchIcon"
        fieldWidth="300px"
        variant="outlined"
      />
      
      <Field 
        label="이메일 주소" 
        placeholder="이메일을 입력하세요" 
        leftIcon="EmailIcon"
        type="email"
        fieldWidth="300px"
        variant="outlined"
      />
      
      <Field 
        label="비밀번호" 
        placeholder="비밀번호를 입력하세요" 
        leftIcon="LockIcon"
        rightIcon="UnlockIcon"
        type="password"
        fieldWidth="300px"
        variant="outlined"
      />
      
      <Field 
        label="날짜" 
        placeholder="날짜를 선택하세요" 
        rightIcon="CalendarIcon"
        type="text"
        fieldWidth="300px"
        variant="outlined"
      />
      
      <Field 
        label="URL" 
        placeholder="웹사이트 주소를 입력하세요" 
        leftIcon="ExternalLinkIcon"
        type="url"
        fieldWidth="300px"
        variant="outlined"
      />
    </Frame>
  ),
};

export const IconStates: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <Field 
        label="기본 상태" 
        placeholder="검색어를 입력하세요" 
        leftIcon="SearchIcon"
        fieldWidth="300px"
        variant="outlined"
      />
      
      <Field 
        label="에러 상태" 
        placeholder="검색어를 입력하세요" 
        leftIcon="SearchIcon"
        error
        errorMessage="검색어는 필수입니다"
        fieldWidth="300px"
        variant="outlined"
      />
      
      <Field 
        label="비활성화 상태" 
        placeholder="검색어를 입력하세요" 
        leftIcon="SearchIcon"
        disabled
        fieldWidth="300px"
        variant="outlined"
      />
    </Frame>
  ),
};

export const InteractionStates: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <div>
        <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>Outlined 스타일 상태들</h4>
        <Frame display="flex" direction="column" gap="md">
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>기본 상태:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="이름"
              placeholder="이름을 입력하세요"
              helperText="실명을 입력해주세요"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>값이 입력됨:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="이름"
              value="김루미"
              helperText="올바른 이름입니다"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>필수 입력:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="이메일"
              required
              placeholder="example@email.com"
              helperText="필수 입력 사항입니다"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>에러 상태:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="이메일"
              required
              error
              value="invalid-email"
              errorMessage="유효한 이메일 주소를 입력하세요"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>비활성화:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="읽기 전용"
              disabled
              value="수정할 수 없는 값"
              helperText="이 필드는 수정할 수 없습니다"
              fieldWidth="300px"
            />
          </div>
        </Frame>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>아이콘이 있는 필드 상태들</h4>
        <Frame display="flex" direction="column" gap="md">
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>기본 상태:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="검색"
              leftIcon="SearchIcon"
              placeholder="검색어를 입력하세요"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>값이 입력됨:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="검색"
              leftIcon="SearchIcon"
              value="검색어"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>에러 상태:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="비밀번호"
              leftIcon="LockIcon"
              rightIcon="UnlockIcon"
              error
              errorMessage="비밀번호는 8자 이상이어야 합니다"
              value="123"
              type="password"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>비활성화:</span>
            <Field
              variant="outlined"
              labelPosition="above"
              label="이메일"
              leftIcon="EmailIcon"
              disabled
              value="user@example.com"
              fieldWidth="300px"
            />
          </div>
        </Frame>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', color: 'var(--semantic-color-secondary-foreground-1)' }}>다른 스타일 변형 상태들</h4>
        <Frame display="flex" direction="column" gap="md">
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>Transparent:</span>
            <Field
              variant="transparent"
              labelPosition="above"
              label="투명 스타일"
              placeholder="테두리가 없는 스타일"
              fieldWidth="300px"
            />
          </div>
          <div>
            <span style={{ display: 'inline-block', width: '120px', fontSize: '14px', color: 'var(--semantic-color-secondary-foreground-2)' }}>Filled:</span>
            <Field
              variant="filled"
              labelPosition="above"
              label="채워진 스타일"
              placeholder="배경이 채워진 스타일"
              fieldWidth="300px"
            />
          </div>
        </Frame>
      </div>
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: '필드의 모든 인터랙션 상태를 시각적으로 확인할 수 있습니다. 기본, 입력됨, 필수, 에러, 비활성화 상태를 포함합니다.'
      }
    }
  }
};

export const FieldWidthOptions: Story = {
  name: 'Field Width Options',
  render: () => (
    <Frame display="flex" direction="column" gap="lg">
      <div>
        <Text variant="title-2" weight="medium">Field Width 옵션들</Text>
        <Text variant="body-2" color="secondary-foreground-2">
          다양한 너비 옵션을 테스트해보세요
        </Text>
      </div>
      
      <Frame display="flex" direction="column" gap="md">
        <Frame>
          <Text variant="body-2" weight="medium" style={{ marginBottom: '8px' }}>
            fit-content: 내용에 맞춰 크기 조절
          </Text>
          <Frame display="flex" direction="column" gap="sm">
            <Frame display="flex" direction="row" gap="md">
              <Field
                fieldWidth="fit-content"
                label="짧은 값"
                placeholder="짧음"
                value="짧음"
              />
              <Field
                fieldWidth="fit-content"
                label="중간 값"
                placeholder="중간 길이"
                value="중간 길이 텍스트"
              />
            </Frame>
            <Frame display="flex" direction="row" gap="md">
              <Field
                fieldWidth="fit-content"
                label="긴 값"
                placeholder="긴 텍스트"
                value="이것은 매우 긴 텍스트 내용입니다"
              />
              <Field
                fieldWidth="fit-content"
                label="Placeholder만"
                placeholder="플레이스홀더로만 크기 결정"
              />
            </Frame>
            <Field
              fieldWidth="fit-content"
              truncateOnFit
              label="Truncate 적용"
              placeholder="너무 긴 텍스트"
              value="이것은 매우 매우 매우 긴 텍스트여서 truncate가 적용되어야 합니다"
              readOnly
            />
          </Frame>
        </Frame>
        
        <Frame>
          <Text variant="body-2" weight="medium" style={{ marginBottom: '8px' }}>
            fill-width: 부모 요소 너비에 맞게 조절 (기본값)
          </Text>
          <Field
            fieldWidth="fill-width"
            label="Fill Width"
            placeholder="전체 너비를 차지합니다"
            value="이 필드는 부모 요소의 전체 너비를 차지합니다"
          />
        </Frame>
        
        <Frame>
          <Text variant="body-2" weight="medium" style={{ marginBottom: '8px' }}>
            커스텀 너비: 직접 지정
          </Text>
          <Frame display="flex" direction="row" gap="md">
            <Field
              fieldWidth="200px"
              label="200px 고정"
              placeholder="200px"
              value="200px 너비"
            />
            <Field
              fieldWidth="50%"
              label="50% 비율"
              placeholder="50%"
              value="50% 너비"
            />
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
}; 
