import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Text, Surface, Frame } from '@lumir/shared';

const meta: Meta<typeof Text> = {
  title: 'Shared/Primitives/Text',
  component: Text,
  parameters: {
    componentSubtitle: '순수한 타이포그래피 프리미티브 - 텍스트 스타일링의 모든 것',
    docs: {
      description: {
        component: `
Text는 순수한 타이포그래피 프리미티브로, 디자인 시스템의 모든 텍스트 요소의 기초가 됩니다.

## 핵심 책임
- **타이포그래피 계층**: Hero, Title, Heading, Body, Label, Caption (15가지 변형)
- **폰트 굵기**: Regular(400), Medium(500), Bold(700)
- **텍스트 정렬**: Left, Center, Right, Justify
- **텍스트 변형**: None, Capitalize, Uppercase, Lowercase
- **오버플로우 제어**: NoWrap, Truncate(라인 수 지정)
- **시멘틱 HTML**: as prop으로 적절한 HTML 요소 지정

## 색상 적용 방법
Text는 색상 기능이 없으며, Surface 프리미티브와 조합하여 색상을 적용합니다:
\`\`\`tsx
<Surface foreground="primary-system01-1-rest">
  <Text variant="title-1" weight="bold">색상이 적용된 제목</Text>
</Surface>
\`\`\`

## 반응형 지원
모든 주요 props는 반응형 객체를 지원합니다:
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '타이포그래피 계층을 지정합니다',
      control: 'select',
      options: [
        'hero-1', 'hero-2', 
        'title-1', 'title-2', 
        'heading-1', 'heading-2', 'heading-3', 
        'body-1', 'body-2', 'reading',
        'label-1', 'label-2', 
        'caption-1', 'caption-2', 'caption-3'
      ],
      table: {
        type: { summary: 'TextVariant | ResponsiveOrSingle<TextVariant>' },
        defaultValue: { summary: 'body-1' },
      },
    },
    weight: {
      description: '폰트 굵기를 지정합니다',
      control: 'select',
      options: ['regular', 'medium', 'bold'],
      table: {
        type: { summary: 'FontWeight | ResponsiveOrSingle<FontWeight>' },
        defaultValue: { summary: 'regular' },
      },
    },
    as: {
      description: '렌더링할 HTML 요소를 지정합니다',
      control: 'select',
      options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
      table: {
        type: { summary: 'HTMLTag' },
        defaultValue: { summary: 'p' },
      },
    },
    textAlign: {
      description: '텍스트 정렬을 지정합니다',
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      table: {
        type: { summary: 'TextAlign | ResponsiveOrSingle<TextAlign>' },
      },
    },
    transform: {
      description: '텍스트 변형을 지정합니다',
      control: 'select',
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
      table: {
        type: { summary: 'TextTransform | ResponsiveOrSingle<TextTransform>' },
      },
    },
    noWrap: {
      description: '한 줄 표시 및 생략 부호 처리',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    truncate: {
      description: '지정 라인 수 이후 생략 부호 처리',
      control: 'number',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// 샘플 컨텐츠 컴포넌트
const SampleContent = ({ text = "샘플 텍스트", long = false }: { text?: string; long?: boolean }) => 
  long ? "긴 샘플 텍스트입니다. 이 텍스트는 여러 줄에 걸쳐 표시되며 오버플로우 테스트에 사용됩니다. 컨테이너의 크기에 따라 어떻게 동작하는지 확인할 수 있습니다." : text;

export const Playground: Story = {
  args: {
    variant: 'body-1',
    weight: 'regular',
    as: 'p',
    textAlign: 'left',
    transform: 'none',
    noWrap: false,
    truncate: undefined,
    children: '순수한 타이포그래피 프리미티브입니다. 다양한 속성을 조절해보세요.',
  },
};

export const VariantShowcase: Story = {
  name: 'Variant 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '15가지 텍스트 변형과 3가지 폰트 굵기의 모든 조합(총 45개)을 보여줍니다. 각 변형은 특정 용도에 최적화되어 있습니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Hero */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">Hero (대형 제목) - 48px, 36px</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="hero-1" weight="regular">Hero 1 - Regular</Text>
          <Text variant="hero-1" weight="medium">Hero 1 - Medium</Text>
          <Text variant="hero-1" weight="bold">Hero 1 - Bold</Text>
          <Text variant="hero-2" weight="regular">Hero 2 - Regular</Text>
          <Text variant="hero-2" weight="medium">Hero 2 - Medium</Text>
          <Text variant="hero-2" weight="bold">Hero 2 - Bold</Text>
        </Frame>
      </Frame>

      {/* Title */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">Title (페이지 제목) - 30px, 24px</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="title-1" weight="regular">Title 1 - Regular</Text>
          <Text variant="title-1" weight="medium">Title 1 - Medium</Text>
          <Text variant="title-1" weight="bold">Title 1 - Bold</Text>
          <Text variant="title-2" weight="regular">Title 2 - Regular</Text>
          <Text variant="title-2" weight="medium">Title 2 - Medium</Text>
          <Text variant="title-2" weight="bold">Title 2 - Bold</Text>
        </Frame>
      </Frame>

      {/* Heading */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">Heading (섹션 제목) - 20px, 20px, 16px</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="heading-1" weight="regular">Heading 1 - Regular</Text>
          <Text variant="heading-1" weight="medium">Heading 1 - Medium</Text>
          <Text variant="heading-1" weight="bold">Heading 1 - Bold</Text>
          <Text variant="heading-2" weight="regular">Heading 2 - Regular</Text>
          <Text variant="heading-2" weight="medium">Heading 2 - Medium</Text>
          <Text variant="heading-2" weight="bold">Heading 2 - Bold</Text>
          <Text variant="heading-3" weight="regular">Heading 3 - Regular</Text>
          <Text variant="heading-3" weight="medium">Heading 3 - Medium</Text>
          <Text variant="heading-3" weight="bold">Heading 3 - Bold</Text>
        </Frame>
      </Frame>

      {/* Body */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">Body (본문) - 16px, 14px, 16px</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-1" weight="regular">Body 1 - Regular (기본 본문)</Text>
          <Text variant="body-1" weight="medium">Body 1 - Medium</Text>
          <Text variant="body-1" weight="bold">Body 1 - Bold</Text>
          <Text variant="body-2" weight="regular">Body 2 - Regular (작은 본문)</Text>
          <Text variant="body-2" weight="medium">Body 2 - Medium</Text>
          <Text variant="body-2" weight="bold">Body 2 - Bold</Text>
          <Text variant="reading" weight="regular">Reading - Regular (읽기 전용, 넓은 줄간격)</Text>
          <Text variant="reading" weight="medium">Reading - Medium</Text>
          <Text variant="reading" weight="bold">Reading - Bold</Text>
        </Frame>
      </Frame>

      {/* Label */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">Label (레이블) - 14px, 12px</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="label-1" weight="regular">Label 1 - Regular (폼 레이블)</Text>
          <Text variant="label-1" weight="medium">Label 1 - Medium</Text>
          <Text variant="label-1" weight="bold">Label 1 - Bold</Text>
          <Text variant="label-2" weight="regular">Label 2 - Regular (작은 레이블)</Text>
          <Text variant="label-2" weight="medium">Label 2 - Medium</Text>
          <Text variant="label-2" weight="bold">Label 2 - Bold</Text>
        </Frame>
      </Frame>

      {/* Caption */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">Caption (설명) - 12px</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="caption-1" weight="regular">Caption 1 - Regular (설명 텍스트)</Text>
          <Text variant="caption-1" weight="medium">Caption 1 - Medium</Text>
          <Text variant="caption-1" weight="bold">Caption 1 - Bold</Text>
          <Text variant="caption-2" weight="regular">Caption 2 - Regular (작은 설명)</Text>
          <Text variant="caption-2" weight="medium">Caption 2 - Medium</Text>
          <Text variant="caption-2" weight="bold">Caption 2 - Bold</Text>
          <Text variant="caption-3" weight="regular">Caption 3 - Regular (최소 텍스트)</Text>
          <Text variant="caption-3" weight="medium">Caption 3 - Medium</Text>
          <Text variant="caption-3" weight="bold">Caption 3 - Bold</Text>
        </Frame>
      </Frame>

      {/* Summary Table */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">📊 전체 조합 요약</Text>
        </Surface>
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
          <Frame padding="md">
            <Frame display="flex" direction="column" gap="xs">
              <Surface foreground="secondary-system01-1-rest">
                <Text variant="body-2" weight="medium">
                  총 15가지 Variant × 3가지 Weight = 45개 조합
                </Text>
              </Surface>
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">
                  각 조합은 특정 용도에 최적화되어 있으며, 일관된 시각적 계층을 제공합니다.
                </Text>
              </Surface>
            </Frame>
          </Frame>
        </Surface>
      </Frame>
    </Frame>
  ),
};

export const WeightShowcase: Story = {
  name: 'Weight 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '3가지 폰트 굵기의 시각적 차이를 보여줍니다. 계층 구조와 강조에 사용됩니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Weight Comparison - Same Variant */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">동일 변형에서 굵기 비교</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="title-2" weight="regular">Regular - 400 (기본 굵기)</Text>
          <Text variant="title-2" weight="medium">Medium - 500 (중간 굵기)</Text>
          <Text variant="title-2" weight="bold">Bold - 700 (강조 굵기)</Text>
        </Frame>
      </Frame>

      {/* Weight Usage Examples */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">사용 사례별 굵기</Text>
        </Surface>
        <Frame display="flex" direction="column" gap="lg">
          
          {/* Hero/Title - Bold for impact */}
          <Frame display="flex" direction="column" gap="xs">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">Hero/Title - 임팩트를 위한 Bold</Text>
            </Surface>
            <Text variant="hero-2" weight="bold">강력한 첫인상을 주는 제목</Text>
          </Frame>

          {/* Heading - Medium for hierarchy */}
          <Frame display="flex" direction="column" gap="xs">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">Heading - 계층을 위한 Medium</Text>
            </Surface>
            <Text variant="heading-1" weight="medium">섹션을 구분하는 중간 제목</Text>
          </Frame>

          {/* Body - Regular for readability */}
          <Frame display="flex" direction="column" gap="xs">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">Body - 가독성을 위한 Regular</Text>
            </Surface>
            <Text variant="body-1" weight="regular">
              긴 본문 텍스트는 Regular 굵기로 가독성을 최우선으로 합니다. 
              너무 두꺼우면 피로감을 주고, 너무 얇으면 읽기 어려워집니다.
            </Text>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const AlignShowcase: Story = {
  name: 'Align 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '4가지 텍스트 정렬 방식의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">텍스트 정렬 방식</Text>
        </Surface>
        
        <Frame display="flex" direction="column" gap="lg">
          {/* Single Line Alignment */}
          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">한 줄 텍스트 정렬</Text>
            </Surface>
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" direction="column" gap="sm">
                <Text textAlign="left" variant="body-1">왼쪽 정렬 (Left)</Text>
                <Text textAlign="center" variant="body-1">가운데 정렬 (Center)</Text>
                <Text textAlign="right" variant="body-1">오른쪽 정렬 (Right)</Text>
              </Frame>
            </Surface>
          </Frame>

          {/* Multi Line Alignment */}
          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">여러 줄 텍스트 정렬</Text>
            </Surface>
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" direction="column" gap="md">
                <Frame maxWidth="300px">
                  <Text textAlign="left" variant="body-2">
                    왼쪽 정렬: 기본적인 정렬 방식으로 대부분의 본문 텍스트에 사용됩니다. 
                    읽기 시작점이 일정하여 가독성이 좋습니다.
                  </Text>
                </Frame>
                <Frame maxWidth="300px">
                  <Text textAlign="center" variant="body-2">
                    가운데 정렬: 제목이나 강조하고 싶은 텍스트에 사용합니다. 
                    균형감을 주지만 긴 텍스트에는 적합하지 않습니다.
                  </Text>
                </Frame>
                <Frame maxWidth="300px">
                  <Text textAlign="right" variant="body-2">
                    오른쪽 정렬: 날짜, 가격 등 특별한 의미를 가진 텍스트에 사용합니다. 
                    시선을 끌고 싶을 때 효과적입니다.
                  </Text>
                </Frame>
                <Frame maxWidth="300px">
                  <Text textAlign="justify" variant="body-2">
                    양쪽 정렬: 양 끝을 맞춰 정돈된 느낌을 줍니다. 신문이나 잡지 스타일의 텍스트에 적합하며, 줄의 끝이 깔끔하게 정리됩니다.
                  </Text>
                </Frame>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const TransformShowcase: Story = {
  name: 'Transform 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '텍스트 변형 옵션들의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">텍스트 변형 옵션</Text>
        </Surface>
        
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
          <Frame padding="md" direction="column" gap="lg">
            
            {[
              { transform: 'none' as const, text: 'Transform None - 원본 텍스트 그대로', desc: '기본값으로 입력된 텍스트를 그대로 표시' },
              { transform: 'capitalize' as const, text: 'transform capitalize - 첫 글자만 대문자', desc: '각 단어의 첫 글자를 대문자로 변환' },
              { transform: 'uppercase' as const, text: 'transform uppercase - 모든 글자 대문자', desc: '모든 글자를 대문자로 변환, 강조 효과' },
              { transform: 'lowercase' as const, text: 'TRANSFORM LOWERCASE - 모든 글자 소문자', desc: '모든 글자를 소문자로 변환' }
            ].map(({ transform, text, desc }) => (
              <Frame key={transform} display="flex" direction="column" gap="xs">
                <Text variant="body-1" transform={transform} weight="medium">{text}</Text>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="caption-1">{desc}</Text>
                </Surface>
              </Frame>
            ))}
          </Frame>
        </Surface>
      </Frame>

      {/* Usage Examples */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">사용 사례</Text>
        </Surface>
        
        <Frame display="flex" direction="column" gap="md">
          {/* Button Labels - Uppercase */}
          <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
            <Frame padding="md" display="flex" direction="column" gap="xs">
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">버튼 레이블 - Uppercase 활용</Text>
              </Surface>
              <Text variant="label-1" transform="uppercase" weight="medium">confirm action</Text>
            </Frame>
          </Surface>

          {/* Headings - Capitalize */}
          <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
            <Frame padding="md" display="flex" direction="column" gap="xs">
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">제목 - Capitalize 활용</Text>
              </Surface>
              <Text variant="title-2" transform="capitalize" weight="medium">user profile settings</Text>
            </Frame>
          </Surface>

          {/* Code/Technical - Lowercase */}
          <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
            <Frame padding="md" display="flex" direction="column" gap="xs">
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">기술적 텍스트 - Lowercase 활용</Text>
              </Surface>
              <Text variant="caption-1" transform="lowercase" weight="regular">API_ENDPOINT_URL</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const OverflowShowcase: Story = {
  name: '오버플로우 제어 시각화',
  parameters: {
    docs: {
      description: {
        story: 'noWrap과 truncate 속성으로 텍스트 오버플로우를 제어하는 방법을 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">오버플로우 제어 방식</Text>
        </Surface>
        
        <Frame display="flex" direction="column" gap="lg">
          
          {/* Default Behavior */}
          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">기본 동작 (자동 줄바꿈)</Text>
            </Surface>
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" maxWidth="250px">
                <Text variant="body-2">
                  <SampleContent long />
                </Text>
              </Frame>
            </Surface>
          </Frame>

          {/* NoWrap */}
          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">noWrap={`{true}`} - 한 줄 강제 + 생략 부호</Text>
            </Surface>
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" maxWidth="250px">
                <Text variant="body-2" noWrap>
                  <SampleContent long />
                </Text>
              </Frame>
            </Surface>
          </Frame>

          {/* Truncate */}
          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">truncate={`{2}`} - 2줄 이후 생략 부호</Text>
            </Surface>
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" maxWidth="250px">
                <Text variant="body-2" truncate={2}>
                  <SampleContent long />
                </Text>
              </Frame>
            </Surface>
          </Frame>

          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">truncate={`{3}`} - 3줄 이후 생략 부호</Text>
            </Surface>
            <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" maxWidth="250px">
                <Text variant="body-2" truncate={3}>
                  <SampleContent long />
                </Text>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>

      {/* Usage Scenarios */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">사용 시나리오</Text>
        </Surface>
        
        <Frame display="flex" direction="column" gap="md">
          {/* Card Title - noWrap */}
          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">카드 제목 (noWrap)</Text>
            </Surface>
            <Surface background="primary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" maxWidth="200px">
                <Surface foreground="primary-system01-oncolor">
                  <Text variant="heading-3" weight="medium" noWrap>
                    정말 긴 카드 제목이 한 줄에 표시됩니다
                  </Text>
                </Surface>
              </Frame>
            </Surface>
          </Frame>

          {/* Article Preview - truncate */}
          <Frame display="flex" direction="column" gap="sm">
            <Surface foreground="secondary-system01-2-rest">
              <Text variant="caption-1">아티클 미리보기 (truncate={`{3}`})</Text>
            </Surface>
            <Surface background="secondary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" maxWidth="300px">
                <Text variant="body-2" truncate={3}>
                  이것은 긴 아티클의 미리보기 텍스트입니다. 사용자에게 내용의 일부를 보여주면서도 
                  레이아웃을 깔끔하게 유지할 수 있습니다. 전체 내용을 보려면 클릭하라고 유도할 수 있습니다.
                  더 많은 내용이 있다는 것을 생략 부호로 알려줍니다.
        </Text>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const SemanticHTMLShowcase: Story = {
  name: 'Semantic HTML 시각화',
  parameters: {
    docs: {
      description: {
        story: 'as prop을 통한 시멘틱 HTML 요소 사용 예시입니다. 접근성과 SEO에 중요합니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">시멘틱 HTML 요소</Text>
      </Surface>
      
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
          <Frame padding="md" direction="column" gap="lg">
            
            {/* Headings */}
            <Frame display="flex" direction="column" gap="sm">
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">제목 요소 (h1-h6)</Text>
              </Surface>
              <Frame display="flex" direction="column" gap="xs">
                <Text as="h1" variant="hero-1" weight="bold">페이지 메인 제목 (h1)</Text>
                <Text as="h2" variant="title-1" weight="medium">섹션 제목 (h2)</Text>
                <Text as="h3" variant="heading-1" weight="medium">하위 섹션 제목 (h3)</Text>
                <Text as="h4" variant="heading-2" weight="medium">세부 제목 (h4)</Text>
              </Frame>
            </Frame>

            {/* Content Elements */}
            <Frame display="flex" direction="column" gap="sm">
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">내용 요소</Text>
              </Surface>
              <Frame display="flex" direction="column" gap="xs">
                <Text as="p" variant="body-1">문단 텍스트 (p) - 본문 내용에 사용</Text>
                <Text as="span" variant="caption-1">인라인 텍스트 (span) - 강조나 스타일링</Text>
                <Text as="div" variant="body-2">블록 컨테이너 (div) - 레이아웃 목적</Text>
              </Frame>
            </Frame>

            {/* Form Elements */}
            <Frame display="flex" direction="column" gap="sm">
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">폼 요소</Text>
              </Surface>
              <Frame display="flex" direction="column" gap="xs">
                <Text as="label" variant="label-1" weight="medium">폼 레이블 (label) - 입력 필드 설명</Text>
              </Frame>
            </Frame>
          </Frame>
        </Surface>
      </Frame>

      {/* Best Practices */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">권장 사용법</Text>
      </Surface>
      
        <Frame display="flex" direction="column" gap="md">
          <Surface background="success" borderRadius="md">
            <Frame padding="md">
              <Surface foreground="secondary-system01-oncolor">
                <Text variant="body-2">
                  <strong>✓ 올바른 사용:</strong> 의미에 맞는 HTML 요소 선택
                  <br />• h1은 페이지당 하나만 사용
                  <br />• 제목은 계층 구조 순서대로 (h1 → h2 → h3)
                  <br />• label은 form 요소와 연결
                </Text>
              </Surface>
            </Frame>
      </Surface>
      
          <Surface background="error" borderRadius="md">
            <Frame padding="md">
              <Surface foreground="secondary-system01-oncolor">
                <Text variant="body-2">
                  <strong>✗ 잘못된 사용:</strong> 스타일만을 위한 요소 선택
                  <br />• 큰 글씨를 위해 h1 남용
                  <br />• 제목 계층 건너뛰기 (h1 → h3)
                  <br />• 의미 없는 div 남용
                </Text>
              </Surface>
            </Frame>
      </Surface>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const CompoundExample: Story = {
  name: '🔥 컴파운드 컴포넌트 활용',
  parameters: {
    docs: {
      description: {
        story: 'Text를 Surface, Frame과 조합하여 실제 UI 패턴을 구현하는 예시입니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Article Card */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">아티클 카드 패턴</Text>
        </Surface>
        
        <Surface background="secondary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest" boxShadow="30">
          <Frame padding="lg" direction="column" gap="md" maxWidth="400px">
            {/* Category Badge */}
            <Surface background="primary-system01-1-rest" borderRadius="badge-default">
              <Frame padding="xs" paddingX="sm">
                <Surface foreground="primary-system01-oncolor">
                  <Text variant="caption-1" weight="medium" transform="uppercase">Design System</Text>
                </Surface>
              </Frame>
            </Surface>
            
            {/* Title */}
            <Text as="h3" variant="heading-1" weight="medium" truncate={2}>
              디자인 시스템 구축을 위한 완벽 가이드: 컴포넌트부터 토큰까지
            </Text>
            
            {/* Description */}
            <Text variant="body-2" truncate={3}>
              성공적인 디자인 시스템을 구축하기 위한 단계별 접근 방법을 알아보세요. 
              토큰 설계부터 컴포넌트 개발, 문서화까지 실무에서 바로 적용할 수 있는 노하우를 공유합니다.
            </Text>
            
            {/* Meta Info */}
            <Frame display="flex" justify="space-between" align="center">
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="caption-1">2024.01.15</Text>
              </Surface>
              <Surface foreground="primary-system01-oncolor">
                <Text variant="caption-1" weight="medium">5분 읽기</Text>
              </Surface>
            </Frame>
          </Frame>
        </Surface>
      </Frame>

      {/* User Profile Card */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">사용자 프로필 패턴</Text>
        </Surface>
        
        <Surface background="secondary-system01-1-rest" borderRadius="card" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
          <Frame padding="lg" direction="column" gap="lg" maxWidth="350px">
            {/* Profile Info */}
            <Frame display="flex" align="center" gap="md">
              {/* Avatar placeholder */}
              <Frame minWidth="60px" minHeight="60px">
                <Surface background="primary-system01-1-rest" borderRadius="circular">
                  <Frame display="flex" align="center" justify="center" minHeight="60px">
                    <Surface foreground="primary-system01-oncolor">
                      <Text variant="heading-2" weight="bold">김</Text>
                    </Surface>
                  </Frame>
                </Surface>
              </Frame>
              
              <Frame direction="column" gap="xs">
                <Text as="h4" variant="heading-2" weight="medium">김디자인</Text>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="body-2">Senior Product Designer</Text>
                </Surface>
              </Frame>
            </Frame>
            
            {/* Bio */}
            <Text variant="body-2" truncate={3}>
              사용자 중심의 디자인을 추구하며, 10년간 다양한 프로덕트의 UX/UI 디자인을 담당했습니다. 
              현재는 디자인 시스템 구축에 집중하고 있습니다.
            </Text>
            
            {/* Stats */}
            <Frame display="flex" justify="space-between">
              <Frame direction="column" align="center" gap="xs">
                <Text variant="heading-2" weight="bold">127</Text>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="caption-1">Projects</Text>
                </Surface>
              </Frame>
              <Frame direction="column" align="center" gap="xs">
                <Text variant="heading-2" weight="bold">2.4K</Text>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="caption-1">Followers</Text>
                </Surface>
              </Frame>
              <Frame direction="column" align="center" gap="xs">
                <Text variant="heading-2" weight="bold">892</Text>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="caption-1">Following</Text>
                </Surface>
              </Frame>
            </Frame>
          </Frame>
        </Surface>
      </Frame>

      {/* Notification Toast */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">알림 토스트 패턴</Text>
        </Surface>
        
        <Frame display="flex" direction="column" gap="sm">
          {/* Success Toast */}
          <Surface background="success" borderRadius="md" boxShadow="30">
            <Frame padding="md" direction="row" align="center" gap="sm" maxWidth="400px">
              <Text variant="body-2" weight="medium">✓</Text>
              <Frame direction="column" gap="xs">
                <Surface foreground="secondary-system01-oncolor">
                  <Text variant="label-1" weight="medium">저장 완료</Text>
                </Surface>
                <Surface foreground="secondary-system01-oncolor">
                  <Text variant="caption-1">변경사항이 성공적으로 저장되었습니다.</Text>
                </Surface>
              </Frame>
            </Frame>
          </Surface>
          
          {/* Error Toast */}
          <Surface background="error" borderRadius="md" boxShadow="30">
            <Frame padding="md" direction="row" align="center" gap="sm" maxWidth="400px">
              <Text variant="body-2" weight="bold">!</Text>
              <Frame direction="column" gap="xs">
                <Surface foreground="secondary-system01-oncolor">
                  <Text variant="label-1" weight="medium">저장 실패</Text>
                </Surface>
                <Surface foreground="secondary-system01-oncolor">
                  <Text variant="caption-1">네트워크 오류로 저장에 실패했습니다.</Text>
                </Surface>
              </Frame>
            </Frame>
          </Surface>
        </Frame>
      </Frame>

      {/* Form Section */}
      <Frame display="flex" direction="column" gap="md">
        <Surface foreground="secondary-system01-2-rest">
          <Text variant="heading-3" weight="medium">폼 섹션 패턴</Text>
        </Surface>
        
        <Surface background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
          <Frame padding="lg" direction="column" gap="lg" maxWidth="400px">
            <Frame direction="column" gap="xs">
              <Text as="h4" variant="heading-3" weight="medium">계정 설정</Text>
              <Surface foreground="secondary-system01-2-rest">
                <Text variant="body-2">개인 정보를 안전하게 관리하세요.</Text>
              </Surface>
            </Frame>
            
            <Frame direction="column" gap="md">
              {/* Email Field */}
              <Frame direction="column" gap="xs">
                <Text as="label" variant="label-1" weight="medium">이메일 주소</Text>
                <Surface background="secondary-system01-2-rest" borderRadius="input" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
                  <Frame padding="sm">
                    <Surface foreground="secondary-system01-2-rest">
                      <Text variant="body-2">user@example.com</Text>
                    </Surface>
                  </Frame>
                </Surface>
              </Frame>
              
              {/* Name Field */}
              <Frame direction="column" gap="xs">
                <Text as="label" variant="label-1" weight="medium">표시 이름</Text>
                <Surface background="secondary-system01-2-rest" borderRadius="input" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
                  <Frame padding="sm">
                    <Surface foreground="secondary-system01-1-rest">
                      <Text variant="body-2">김디자인</Text>
                    </Surface>
                  </Frame>
                </Surface>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="caption-1">다른 사용자에게 표시될 이름입니다.</Text>
                </Surface>
              </Frame>
            </Frame>
          </Frame>
        </Surface>
      </Frame>
    </Frame>
  ),
}; 