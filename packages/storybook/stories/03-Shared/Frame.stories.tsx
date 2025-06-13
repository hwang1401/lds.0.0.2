import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Frame, Text, Surface } from 'lumir-shared';
import type { DisplayValue, PositionValue, FlexDirection, JustifyContent, AlignItems, SpacingValue } from 'lumir-shared';

const meta: Meta<typeof Frame> = {
  title: 'Shared/Primitives/Frame',
  component: Frame,
  parameters: {
    componentSubtitle: '레이아웃 프리미티브 - 각 props별 시각화',
    docs: {
      description: {
        component: `
Frame은 레이아웃, 배치, 간격을 담당하는 구조적 프리미티브입니다.

## 핵심 특징
- **구조적 속성**: Display, Position, Flexbox, Grid 레이아웃 제어
- **간격 관리**: 시멘틱 토큰 기반 Padding, Margin, Gap 제어
- **반응형 지원**: 모든 속성이 반응형 지원
- **크기 제어**: width, height, min/max 크기 제어

## Surface와의 차이점
- **Frame**: 구조적 속성 (레이아웃, 간격, 크기)
- **Surface**: 시각적 속성 (색상, 테두리, 그림자)

## 사용 패턴
\`\`\`tsx
// Flexbox 레이아웃
<Frame display="flex" justify="center" align="center" gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Frame>

// Grid 레이아웃
<Frame display="grid" gridTemplateColumns="1fr 1fr" gap="lg">
  <div>Left</div>
  <div>Right</div>
</Frame>

// Surface와 조합
<Surface background="primary-system01-1-rest" borderRadius="md">
  <Frame padding="lg" display="flex" direction="column" gap="sm">
    <Text>Title</Text>
    <Text>Content</Text>
  </Frame>
</Surface>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      description: 'HTML 요소 타입',
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'nav', 'header', 'footer', 'main', 'span'],
    },
    display: {
      description: 'Display 속성',
      control: 'select',
      options: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none', 'contents'],
    },
    position: {
      description: 'Position 속성',
      control: 'select',
      options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    },
    direction: {
      description: 'Flex direction (display="flex"일 때)',
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    justify: {
      description: 'Justify content (display="flex"일 때)',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    align: {
      description: 'Align items (display="flex"일 때)',
      control: 'select',
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
    },
    gap: {
      description: 'Gap (시멘틱 토큰)',
      control: 'select',
      options: ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
    padding: {
      description: 'Padding (시멘틱 토큰)',
      control: 'select',
      options: ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
    margin: {
      description: 'Margin (시멘틱 토큰)',
      control: 'select',
      options: ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Frame>;

// 샘플 아이템 컴포넌트
const SampleItem = ({ label = "Item", variant = "primary", size = "md" }: { 
  label?: string; 
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}) => {
  const padding = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';
  
  // 토큰 기반 색상 매핑
  const variantMapping = {
    primary: "primary-system01-1-rest",
    secondary: "secondary-system01-2-rest", 
    success: "cta-system01-1-rest",
    warning: "secondary-system01-3-rest",
    error: "secondary-system01-1-rest",
    info: "primary-system01-2-rest"
  } as const;
  
  const needsOncolor = variant === 'primary' || variant === 'success';
  
  return (
    <Surface 
      background={variantMapping[variant]}
      foreground={needsOncolor ? `${variant === 'primary' ? 'primary-system01' : 'cta-system01'}-oncolor` : undefined}
      borderRadius="md" 
      borderWidth="thin" 
      borderStyle="solid" 
      borderColor="secondary-system01-2-rest"
    >
      <Frame padding={padding} display="flex" justify="center" align="center">
        <Text variant="caption-1" weight="medium">{label}</Text>
      </Frame>
    </Surface>
  );
};

export const Playground: Story = {
  args: {
    display: 'flex',
    justify: 'center',
    align: 'center',
    gap: 'md',
    padding: 'lg',
    children: (
      <>
        <SampleItem label="Item 1" variant="primary" />
        <SampleItem label="Item 2" variant="secondary" />
        <SampleItem label="Item 3" variant="success" />
      </>
    ),
  },
};

export const DisplayTypes: Story = {
  name: 'Display 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 display 속성의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Block vs Inline */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Block vs Inline 차이점</Text>
        <Frame display="flex" direction="column" gap="lg">
          
          {/* Block 예시 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2" weight="medium">🟦 Block (전체 너비 차지, 세로로 쌓임)</Text>
            <Text variant="caption-1">각 요소가 전체 너비를 차지하며 세로로 배치됩니다.</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame padding="md">
                {/* Block 요소들 - 각각이 전체 너비 차지 */}
                <Frame display="block" marginBottom="xs">
                  <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">Block 1 (전체 너비)</Text>
                    </Frame>
                  </Surface>
                </Frame>
                <Frame display="block" marginBottom="xs">
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">Block 2 (전체 너비)</Text>
                    </Frame>
                  </Surface>
                </Frame>
                <Frame display="block">
                  <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">Block 3 (전체 너비)</Text>
                    </Frame>
                  </Surface>
                </Frame>
              </Frame>
            </Surface>
          </Frame>
          
          {/* Inline 예시 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2" weight="medium">🟨 Inline (내용만큼 너비, 가로로 배치)</Text>
            <Text variant="caption-1">각 요소가 내용만큼의 너비를 차지하며 가로로 배치됩니다.</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame padding="md">
                {/* Inline 요소들 - 내용만큼의 너비로 가로 배치 */}
                <Frame display="inline" marginRight="sm">
                  <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">Inline 1</Text>
                    </Frame>
                  </Surface>
                </Frame>
                <Frame display="inline" marginRight="sm">
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">Inline 2</Text>
                    </Frame>
                  </Surface>
                </Frame>
                <Frame display="inline">
                  <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">Inline 3</Text>
                    </Frame>
                  </Surface>
                </Frame>
              </Frame>
            </Surface>
          </Frame>

          {/* 실제 비교 - 같은 컨테이너 안에서 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2" weight="medium">🔄 직접 비교 (같은 컨테이너)</Text>
            <Text variant="caption-1">같은 컨테이너 안에서 Block과 Inline 요소를 함께 배치했을 때의 차이점</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame padding="md">
                {/* Block 요소 */}
                <Frame display="block" marginBottom="sm">
                  <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">📦 이것은 Block 요소 (전체 너비 차지)</Text>
                    </Frame>
                  </Surface>
                </Frame>
                
                {/* Inline 요소들 */}
                <Frame display="inline" marginRight="sm">
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">📄 Inline 1</Text>
                    </Frame>
                  </Surface>
                </Frame>
                <Frame display="inline" marginRight="sm">
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">📄 Inline 2</Text>
                    </Frame>
                  </Surface>
                </Frame>
                <Frame display="inline">
                  <Surface background="secondary-system01-2-rest" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">📄 Inline 3</Text>
                    </Frame>
                  </Surface>
                </Frame>
                
                {/* 또 다른 Block 요소 */}
                <Frame display="block" marginTop="sm">
                  <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderRadius="sm">
                    <Frame padding="sm">
                      <Text variant="caption-1" weight="medium">📦 또 다른 Block 요소 (전체 너비 차지)</Text>
                    </Frame>
                  </Surface>
                </Frame>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>

      {/* Flex vs Grid */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Flex vs Grid 레이아웃</Text>
        <Frame display="flex" direction="column" gap="lg">
          
          {/* Flex 예시 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2" weight="medium">🔄 Flex (1차원 레이아웃)</Text>
            <Text variant="caption-1">한 방향(가로 또는 세로)으로 요소들을 배치하는 1차원 레이아웃</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame padding="md">
                <Frame display="flex" gap="md" justify="space-between" align="center">
                  <SampleItem label="Flex 1" variant="primary" size="sm" />
                  <SampleItem label="Flex 2" variant="secondary" size="md" />
                  <SampleItem label="Flex 3" variant="success" size="lg" />
                </Frame>
              </Frame>
            </Surface>
          </Frame>
          
          {/* Grid 예시 */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2" weight="medium">🔲 Grid (2차원 레이아웃)</Text>
            <Text variant="caption-1">가로와 세로 모두를 고려한 2차원 레이아웃</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame padding="md">
                <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="md">
                  <SampleItem label="Grid 1" variant="primary" />
                  <SampleItem label="Grid 2" variant="secondary" />
                  <SampleItem label="Grid 3" variant="success" />
                  <SampleItem label="Grid 4" variant="warning" />
                  <SampleItem label="Grid 5" variant="error" />
                  <SampleItem label="Grid 6" variant="info" />
                </Frame>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const FlexboxProperties: Story = {
  name: 'Flexbox 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: 'Flexbox의 다양한 속성들을 시각적으로 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Flex Direction */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Flex Direction</Text>
        <Frame display="grid" gridTemplateColumns="1fr 1fr" gap="lg">
          {(['row', 'column', 'row-reverse', 'column-reverse'] as FlexDirection[]).map((direction) => (
            <Frame key={direction} display="flex" direction="column" gap="sm">
              <Text variant="body-2" weight="medium">{direction}</Text>
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
                <Frame 
                  display="flex" 
                  direction={direction}
                  gap="xs"
                  padding="md"
                  minHeight={direction.includes('column') ? '120px' : '60px'}
                >
                  <SampleItem label="1" variant="primary" size="sm" />
                  <SampleItem label="2" variant="secondary" size="sm" />
                  <SampleItem label="3" variant="success" size="sm" />
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* Justify Content */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Justify Content</Text>
        <Frame display="flex" direction="column" gap="sm">
          {(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as JustifyContent[]).map((justify) => (
            <Frame key={justify} display="flex" direction="column" gap="xs">
              <Text variant="caption-1" weight="medium">{justify}</Text>
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
                <Frame 
                  display="flex" 
                  justify={justify}
                  gap="xs"
                  padding="sm"
                  minHeight="50px"
                >
                  <SampleItem label="A" variant="primary" size="sm" />
                  <SampleItem label="B" variant="secondary" size="sm" />
                  <SampleItem label="C" variant="success" size="sm" />
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* Align Items */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Align Items</Text>
        <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="lg">
          {(['stretch', 'flex-start', 'center', 'flex-end', 'baseline'] as AlignItems[]).map((align) => (
            <Frame key={align} display="flex" direction="column" gap="xs">
              <Text variant="caption-1" weight="medium">{align}</Text>
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
                <Frame 
                  display="flex" 
                  align={align}
                  gap="xs"
                  padding="sm"
                  height="80px"
                >
                  <SampleItem label="1" variant="primary" size="sm" />
                  <SampleItem label="2" variant="secondary" size="md" />
                  <SampleItem label="3" variant="success" size="sm" />
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const GridLayouts: Story = {
  name: 'Grid 레이아웃 시각화',
  parameters: {
    docs: {
      description: {
        story: 'CSS Grid의 다양한 레이아웃 패턴을 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Basic Grid */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">기본 Grid 레이아웃</Text>
        <Frame display="flex" direction="column" gap="sm">
          
          {/* 2x2 Grid */}
          <Frame display="flex" direction="column" gap="xs">
            <Text variant="body-2" weight="medium">2×2 Grid</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame 
                display="grid" 
                gridTemplateColumns="1fr 1fr"
                gap="sm"
                padding="md"
              >
                <SampleItem label="A" variant="primary" />
                <SampleItem label="B" variant="secondary" />
                <SampleItem label="C" variant="success" />
                <SampleItem label="D" variant="warning" />
              </Frame>
            </Surface>
          </Frame>

          {/* 3 Column Grid */}
          <Frame display="flex" direction="column" gap="xs">
            <Text variant="body-2" weight="medium">3 Column Grid</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame 
                display="grid" 
                gridTemplateColumns="1fr 1fr 1fr"
                gap="sm"
                padding="md"
              >
                <SampleItem label="1" variant="primary" />
                <SampleItem label="2" variant="secondary" />
                <SampleItem label="3" variant="success" />
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>

      {/* Advanced Grid */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">고급 Grid 레이아웃</Text>
        <Frame display="flex" direction="column" gap="sm">
          
          {/* Auto-fit Grid */}
          <Frame display="flex" direction="column" gap="xs">
            <Text variant="body-2" weight="medium">Auto-fit (반응형)</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame 
                display="grid" 
                gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))"
                gap="sm"
                padding="md"
              >
                <SampleItem label="Auto 1" variant="primary" />
                <SampleItem label="Auto 2" variant="secondary" />
                <SampleItem label="Auto 3" variant="success" />
                <SampleItem label="Auto 4" variant="warning" />
              </Frame>
            </Surface>
          </Frame>

          {/* Complex Grid */}
          <Frame display="flex" direction="column" gap="xs">
            <Text variant="body-2" weight="medium">복합 Grid (다양한 크기)</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame 
                display="grid" 
                gridTemplateColumns="2fr 1fr 1fr"
                gridTemplateRows="auto auto"
                gap="sm"
                padding="md"
              >
                <Frame gridColumn="1 / 2" gridRow="1 / 3">
                  <SampleItem label="Main (2fr)" variant="primary" />
                </Frame>
                <SampleItem label="Side A" variant="secondary" />
                <SampleItem label="Side B" variant="success" />
                <SampleItem label="Side C" variant="warning" />
                <SampleItem label="Side D" variant="error" />
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const SpacingTokens: Story = {
  name: 'Spacing 토큰 시각화',
  parameters: {
    docs: {
      description: {
        story: '시멘틱 spacing 토큰들의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Gap 토큰 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Gap 토큰</Text>
        <Frame display="flex" direction="column" gap="sm">
          {(['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as SpacingValue[]).map((gap) => (
            <Frame key={gap} display="flex" direction="column" gap="xs">
              <Text variant="caption-1" weight="medium">gap="{gap}"</Text>
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
                <Frame 
                  display="flex" 
                  gap={gap}
                  padding="md"
                >
                  <SampleItem label="A" variant="primary" size="sm" />
                  <SampleItem label="B" variant="secondary" size="sm" />
                  <SampleItem label="C" variant="success" size="sm" />
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* Padding 토큰 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Padding 토큰</Text>
        <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="lg">
          {(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as SpacingValue[]).map((padding) => (
            <Frame key={padding} display="flex" direction="column" gap="xs">
              <Text variant="caption-1" weight="medium">padding="{padding}"</Text>
              <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
                <Frame padding={padding}>
                                     <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="primary-system01-1-rest">
                    <Frame padding="sm">
                      <Text variant="caption-2" textAlign="center">Content</Text>
                    </Frame>
                  </Surface>
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* 방향별 Padding */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">방향별 Padding</Text>
        <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="lg">
          <Frame display="flex" direction="column" gap="xs">
            <Text variant="caption-1" weight="medium">paddingX (좌우)</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame paddingX="lg">
                                 <Surface background="cta-system01-1-rest" foreground="cta-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="cta-system01-1-rest">
                  <Frame padding="sm">
                    <Text variant="caption-2" textAlign="center">paddingX</Text>
                  </Frame>
                </Surface>
              </Frame>
            </Surface>
          </Frame>
          
          <Frame display="flex" direction="column" gap="xs">
            <Text variant="caption-1" weight="medium">paddingY (상하)</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame paddingY="lg">
                                 <Surface background="secondary-system01-3-rest" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-3-rest">
                  <Frame padding="sm">
                    <Text variant="caption-2" textAlign="center">paddingY</Text>
                  </Frame>
                </Surface>
              </Frame>
            </Surface>
          </Frame>
          
          <Frame display="flex" direction="column" gap="xs">
            <Text variant="caption-1" weight="medium">개별 방향</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame 
                paddingTop="sm"
                paddingRight="md"
                paddingBottom="lg"
                paddingLeft="xl"
              >
                                 <Surface background="primary-system01-2-rest" foreground="primary-system01-oncolor" borderWidth="thin" borderStyle="solid" borderColor="primary-system01-1-rest">
                  <Frame padding="sm">
                    <Text variant="caption-2" textAlign="center">각각 다름</Text>
                  </Frame>
                </Surface>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const PositionTypes: Story = {
  name: 'Position 속성 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 position 속성의 동작을 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Position Types */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Position 유형별 비교</Text>
        
        {/* Static vs Relative */}
        <Frame display="flex" gap="xl">
          <Frame display="flex" direction="column" gap="sm" flex="1">
            <Text variant="body-2" weight="medium">Static (기본값)</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame padding="md" height="120px">
                <Frame position="static">
                  <SampleItem label="Static" variant="primary" />
                </Frame>
              </Frame>
            </Surface>
          </Frame>
          
          <Frame display="flex" direction="column" gap="sm" flex="1">
            <Text variant="body-2" weight="medium">Relative (상대 위치)</Text>
            <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
              <Frame padding="md" height="120px">
                <Frame position="relative" top="10px" left="20px">
                  <SampleItem label="Relative" variant="secondary" />
                </Frame>
              </Frame>
            </Surface>
          </Frame>
        </Frame>

        {/* Absolute Positioning */}
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2" weight="medium">Absolute (절대 위치)</Text>
          <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
            <Frame 
              position="relative"
              padding="md"
              height="150px"
            >
              <SampleItem label="Normal Flow" variant="primary" />
              <Frame position="absolute" top="20px" right="20px">
                <SampleItem label="Absolute (top-right)" variant="secondary" />
              </Frame>
              <Frame position="absolute" bottom="20px" left="20px">
                <SampleItem label="Absolute (bottom-left)" variant="success" />
              </Frame>
            </Frame>
          </Surface>
        </Frame>
      </Frame>

      {/* Z-Index */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Z-Index (쌓임 순서)</Text>
        <Surface borderWidth="thin" borderStyle="dashed" borderColor="secondary-system01-2-rest" background="secondary-system01-1-rest">
          <Frame 
            position="relative"
            padding="lg"
            height="200px"
          >
            <Frame position="absolute" top="40px" left="40px" zIndex={1}>
              <SampleItem label="Z-Index: 1" variant="primary" />
            </Frame>
            <Frame position="absolute" top="60px" left="80px" zIndex={3}>
              <SampleItem label="Z-Index: 3" variant="secondary" />
            </Frame>
            <Frame position="absolute" top="80px" left="120px" zIndex={2}>
              <SampleItem label="Z-Index: 2" variant="success" />
            </Frame>
          </Frame>
        </Surface>
      </Frame>
    </Frame>
  ),
};

export const CompoundComponentExample: Story = {
  name: '🔥 컴파운드 컴포넌트 조합 예시',
  parameters: {
    docs: {
      description: {
        story: 'Frame을 다른 프리미티브와 조합하여 실제 레이아웃을 구현한 예시입니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* 헤더 + 사이드바 + 메인 레이아웃 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">웹 애플리케이션 레이아웃</Text>
        
        <Surface 
          background="secondary-system01-1-rest"
          borderRadius="lg"
          borderWidth="thin"
          borderStyle="solid"
          borderColor="secondary-system01-2-rest"
          boxShadow="interaction-card-rest"
        >
          <Frame height="400px" display="flex" direction="column">
            {/* 헤더 */}
            <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor">
              <Frame padding="md" display="flex" justify="space-between" align="center">
                <Text variant="heading-2" weight="bold">Logo</Text>
                <Frame display="flex" gap="md" align="center">
                  <Text variant="body-2">Menu</Text>
                  <Text variant="body-2">Profile</Text>
                </Frame>
              </Frame>
            </Surface>
            
            {/* 메인 컨텐츠 영역 */}
            <Frame display="flex" flex="1">
              {/* 사이드바 */}
              <Surface background="secondary-system01-2-rest" borderColor="secondary-system01-2-rest" borderStyle="solid" borderWidth="thin">
                <Frame width="200px" padding="lg" display="flex" direction="column" gap="sm">
                  <Text variant="label-1" weight="medium">Navigation</Text>
                  <Frame display="flex" direction="column" gap="xs">
                    <Surface borderRadius="button-sm">
                      <Frame paddingY="xs" paddingX="sm">
                        <Text variant="caption-1">Dashboard</Text>
                      </Frame>
                    </Surface>
                    <Surface borderRadius="button-sm">
                      <Frame paddingY="xs" paddingX="sm">
                        <Text variant="caption-1">Projects</Text>
                      </Frame>
                    </Surface>
                    <Surface borderRadius="button-sm">
                      <Frame paddingY="xs" paddingX="sm">
                        <Text variant="caption-1">Settings</Text>
                      </Frame>
                    </Surface>
                  </Frame>
                </Frame>
              </Surface>
              
              {/* 메인 컨텐츠 */}
              <Frame flex="1" padding="xl" display="flex" direction="column" gap="lg">
                <Text variant="hero-1" weight="medium">대시보드</Text>
                
                {/* 카드 그리드 */}
                <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="lg">
                  {[
                    { title: '총 사용자', value: '1,234', variant: 'primary' },
                    { title: '활성 프로젝트', value: '56', variant: 'secondary' },
                    { title: '완료된 작업', value: '89%', variant: 'success' },
                    { title: '수익', value: '$12,345', variant: 'warning' }
                  ].map((card, index) => (
                    <Surface 
                      key={index}
                      background="secondary-system01-1-rest"
                      borderRadius="card"
                      borderWidth="thin"
                      borderStyle="solid"
                      borderColor="secondary-system01-2-rest"
                    >
                      <Frame padding="lg" display="flex" direction="column" gap="sm">
                        <Surface background={
                          card.variant === 'primary' ? 'primary-system01-1-rest' :
                          card.variant === 'secondary' ? 'secondary-system01-2-rest' :
                          card.variant === 'success' ? 'cta-system01-1-rest' :
                          'secondary-system01-3-rest'
                        } foreground={
                          card.variant === 'primary' ? 'primary-system01-oncolor' :
                          card.variant === 'success' ? 'cta-system01-oncolor' :
                          undefined
                        }>
                          <Frame padding="sm">
                            <Text variant="caption-1">{card.title}</Text>
                            <Text variant="heading-1" weight="bold">{card.value}</Text>
                          </Frame>
                        </Surface>
                      </Frame>
                    </Surface>
                  ))}
                </Frame>
              </Frame>
            </Frame>
          </Frame>
        </Surface>
      </Frame>

      {/* 모바일 카드 리스트 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">모바일 카드 리스트</Text>
        
        <Frame display="flex" direction="column" gap="sm" maxWidth="400px">
          {[
            { name: '김철수', role: 'Frontend Developer', avatar: '👨‍💻' },
            { name: '이영희', role: 'UX Designer', avatar: '👩‍🎨' },
            { name: '박민수', role: 'Backend Developer', avatar: '👨‍💼' }
          ].map((person, index) => (
            <Surface 
              key={index}
              background="secondary-system01-1-rest"
              borderRadius="lg"
              borderWidth="thin"
              borderStyle="solid"
              borderColor="secondary-system01-2-rest"
            >
              <Frame padding="lg" display="flex" gap="md" align="center">
                {/* 아바타 */}
                <Surface background="secondary-system01-2-rest" borderRadius="circular">
                  <Frame 
                    width="48px" 
                    height="48px" 
                    display="flex" 
                    justify="center" 
                    align="center"
                    style={{ fontSize: '24px' }}
                  >
                    {person.avatar}
                  </Frame>
                </Surface>
                
                {/* 정보 */}
                <Frame display="flex" direction="column" gap="xs" flex="1">
                  <Text variant="body-1" weight="medium">{person.name}</Text>
                  <Text variant="caption-1">{person.role}</Text>
                </Frame>
                
                {/* 액션 버튼 */}
                <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="button-sm">
                  <Frame paddingY="xs" paddingX="sm">
                    <Text variant="caption-1" weight="medium">연락</Text>
                  </Frame>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* 복합 레이아웃 (sticky 헤더 + 스크롤 컨텐츠) */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">스크롤 섹션 (Sticky Header)</Text>
        
        <Surface 
          background="secondary-system01-1-rest"
          borderRadius="lg"
          borderWidth="thin"
          borderStyle="solid"
          borderColor="secondary-system01-2-rest"
        >
          <Frame height="300px" display="flex" direction="column" overflow="hidden">
            {/* Sticky 헤더 */}
            <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor">
              <Frame padding="md" position="sticky" top="0" zIndex={10}>
                <Text variant="heading-3" weight="medium">뉴스 피드</Text>
              </Frame>
            </Surface>
            
            {/* 스크롤 가능한 컨텐츠 */}
            <Frame flex="1" overflowY="scroll" padding="md" display="flex" direction="column" gap="sm">
              {Array.from({ length: 10 }, (_, i) => (
                <Surface 
                  key={i}
                  background="secondary-system01-2-rest"
                  borderRadius="md"
                  borderWidth="thin"
                  borderStyle="solid"
                  borderColor="secondary-system01-2-rest"
                >
                  <Frame padding="md" display="flex" direction="column" gap="xs">
                    <Text variant="body-1" weight="medium">뉴스 제목 {i + 1}</Text>
                    <Text variant="caption-1">뉴스 내용이 여기에 표시됩니다...</Text>
                    <Frame display="flex" justify="space-between" align="center" marginTop="xs">
                      <Text variant="caption-2">5분 전</Text>
                      <Frame display="flex" gap="sm">
                        <Text variant="caption-2">좋아요 {12 + i}</Text>
                        <Text variant="caption-2">댓글 {3 + i}</Text>
                      </Frame>
                    </Frame>
                  </Frame>
                </Surface>
              ))}
            </Frame>
          </Frame>
        </Surface>
      </Frame>
    </Frame>
  ),
}; 