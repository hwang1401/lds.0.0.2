import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Surface, Text, Frame } from '@lumir/shared';
import type { BackgroundToken, ForegroundToken, StrokeToken, RadiusToken, BorderWidthToken, ShadowToken, OverlayToken } from '@lumir/shared';

const meta: Meta<typeof Surface> = {
  title: 'Shared/Primitives/Surface',
  component: Surface,
  parameters: {
    componentSubtitle: '시각적 표면 프리미티브 - 각 props별 시각화',
    docs: {
      description: {
        component: `
Surface는 시각적 표면 속성만을 담당하는 순수한 프리미티브입니다.

## 핵심 특징
- **시멘틱 토큰 강제**: 일관된 디자인 시스템 유지
- **명확한 역할 분리**: 시각적 표면만 담당 (레이아웃은 Frame 사용)
- **옵셔널 테두리**: 필요시에만 borderColor, borderWidth, borderStyle 사용

## Props 시각화
각 story는 해당 prop이 어떻게 적용되는지 시각적으로 보여줍니다.

## Frame과의 조합
\`\`\`tsx
<Surface background="primary-system01-1-rest" borderRadius="button-md">
  <Frame padding="md" display="flex" justify="center">
    <Text variant="label-1">Content</Text>
  </Frame>
</Surface>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      description: '배경색 (시멘틱 토큰)',
      control: 'select',
      options: [
        'primary-system01-1-rest', 'primary-system01-1-hovered', 'primary-system01-2-rest',
        'secondary-system01-1-rest', 'secondary-system01-2-rest', 'secondary-system01-3-rest',
        'cta-system01-1-rest', 'cta-system01-2-rest',
        'error', 'warning', 'success', 'info', 'focused'
      ] as BackgroundToken[],
    },
    foreground: {
      description: '전경색/텍스트색 (시멘틱 토큰)',
      control: 'select',
      options: [
        'primary-system01-1-rest', 'primary-system01-oncolor',
        'secondary-system01-1-rest', 'secondary-system01-2-rest', 'secondary-system01-oncolor',
        'cta-system01-1-rest', 'cta-system01-oncolor',
        'error', 'warning', 'success', 'info'
      ] as ForegroundToken[],
    },
    borderColor: {
      description: '테두리 색상 (시멘틱 토큰, 옵셔널)',
      control: 'select',
      options: [
        'primary-system01-1-rest', 'secondary-system01-1-rest', 'secondary-system01-2-rest',
        'cta-system01-1-rest', 'error', 'warning', 'success', 'info'
      ] as StrokeToken[],
    },
    borderWidth: {
      description: '테두리 두께 (시멘틱 토큰, 옵셔널)',
      control: 'select',
      options: ['thin', 'medium', 'thick', 'button', 'card', 'input-default', 'input-focused', 'divider'] as BorderWidthToken[],
    },
    borderStyle: {
      description: '테두리 스타일 (옵셔널)',
      control: 'select',
      options: ['none', 'solid', 'dashed', 'dotted'],
    },
    borderRadius: {
      description: '반지름 (시멘틱 토큰)',
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl', 'circular', 'pill', 'button-sm', 'button-md', 'button-lg', 'card', 'input', 'badge-default', 'avatar', 'popover', 'modal'] as RadiusToken[],
    },
    boxShadow: {
      description: '그림자 (시멘틱 토큰)',
      control: 'select',
      options: [
        'none',
        '0', '10', '20', '30', '40', '50'
      ] as (ShadowToken | 'none')[],
    },
    overlay: {
      description: '오버레이 효과 (시멘틱 토큰)',
      control: 'select',
      options: ['light', 'medium', 'heavy'] as OverlayToken[],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Surface>;

// 샘플 컨텐츠 컴포넌트
const SampleContent = ({ label = "Sample" }: { label?: string }) => (
  <Frame padding="lg" display="flex" justify="center" align="center" minHeight="80px">
    <Text variant="body-1">{label}</Text>
  </Frame>
);

export const Playground: Story = {
  args: {
    background: 'primary-system01-1-rest',
    foreground: 'primary-system01-oncolor',
    borderRadius: 'button-md',
    children: <SampleContent label="Playground" />,
  },
};

export const BackgroundColors: Story = {
  name: 'Background 색상 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 background 색상 토큰들의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Primary Background */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Primary Background</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {[
            'primary-system01-1-rest',
            'primary-system01-1-hovered', 
            'primary-system01-1-pressed',
            'primary-system01-2-rest'
          ].map((bg) => (
            <Surface key={bg} background={bg as BackgroundToken} borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" minWidth="140px">
                <Surface foreground="primary-system01-oncolor">
                  <Text variant="caption-1" textAlign="center">{bg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Secondary Background */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Secondary Background</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {[
            'secondary-system01-1-rest',
            'secondary-system01-2-rest', 
            'secondary-system01-3-rest',
            'secondary-system01-inverse-rest'
          ].map((bg) => (
            <Surface key={bg} background={bg as BackgroundToken} borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" minWidth="140px">
                <Surface foreground={bg.includes('inverse') ? 'secondary-system01-oncolor' : 'secondary-system01-1-rest'}>
                  <Text variant="caption-1" textAlign="center">{bg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* CTA Background */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">CTA Background</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {[
            'cta-system01-1-rest',
            'cta-system01-1-hovered',
            'cta-system01-2-rest'
          ].map((bg) => (
            <Surface key={bg} background={bg as BackgroundToken} borderRadius="md">
              <Frame padding="md" minWidth="140px">
                <Surface foreground="cta-system01-oncolor">
                  <Text variant="caption-1" textAlign="center">{bg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Status Background */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Status Background</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['success', 'warning', 'error', 'info', 'focused'].map((bg) => (
            <Surface key={bg} background={bg as BackgroundToken} borderRadius="md">
              <Frame padding="md" minWidth="120px">
                <Surface foreground="primary-system01-oncolor">
                  <Text variant="caption-1" textAlign="center">{bg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const ForegroundColors: Story = {
  name: 'Foreground 색상 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 foreground 색상 토큰들의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Primary Foreground */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Primary Foreground</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {[
            'primary-system01-1-rest',
            'primary-system01-oncolor'
          ].map((fg) => (
            <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" minWidth="140px">
                <Surface foreground={fg as ForegroundToken}>
                  <Text variant="body-2" textAlign="center">{fg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Secondary Foreground */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Secondary Foreground</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {[
            'secondary-system01-1-rest',
            'secondary-system01-2-rest',
            'secondary-system01-oncolor'
          ].map((fg) => (
            <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" minWidth="140px">
                <Surface foreground={fg as ForegroundToken}>
                  <Text variant="body-2" textAlign="center">{fg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* CTA Foreground */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">CTA Foreground</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {[
            'cta-system01-1-rest',
            'cta-system01-oncolor'
          ].map((fg) => (
            <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" minWidth="140px">
                <Surface foreground={fg as ForegroundToken}>
                  <Text variant="body-2" textAlign="center">{fg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Status Foreground */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Status Foreground</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['error', 'warning', 'success', 'info'].map((fg) => (
            <Surface key={fg} background="secondary-system01-1-rest" borderRadius="md" borderWidth="thin" borderStyle="solid" borderColor="secondary-system01-2-rest">
              <Frame padding="md" minWidth="120px">
                <Surface foreground={fg as ForegroundToken}>
                  <Text variant="body-2" textAlign="center">{fg}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const BorderRadius: Story = {
  name: 'BorderRadius 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 borderRadius 토큰들의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Global Radius */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Global Radius</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['none', 'sm', 'md', 'lg', 'xl', 'xxl'].map((radius) => (
            <Surface 
              key={radius} 
              background="secondary-system01-1-rest" 
              borderRadius={radius as RadiusToken}
              borderWidth="thin"
              borderStyle="solid"
              borderColor="secondary-system01-1-rest"
            >
              <Frame padding="lg" minWidth="100px">
                <Text variant="caption-1" textAlign="center">{radius}</Text>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Shape Radius */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Shape Radius</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['button-sm', 'button-md', 'button-lg', 'card', 'input', 'badge-default', 'avatar', 'popover', 'modal'].map((radius) => (
            <Surface 
              key={radius} 
              background="secondary-system01-1-rest" 
              borderRadius={radius as RadiusToken}
              borderWidth="thin"
              borderStyle="solid"
              borderColor="secondary-system01-1-rest"
            >
              <Frame padding="lg" minWidth="100px">
                <Text variant="caption-1" textAlign="center">{radius}</Text>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Special Radius */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Special Radius</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['circular', 'pill', 'badge-pill'].map((radius) => (
            <Surface 
              key={radius} 
              background="primary-system01-1-rest" 
              borderRadius={radius as RadiusToken}
            >
              <Frame padding="lg" minWidth="100px" minHeight="100px" display="flex" justify="center" align="center">
                <Surface foreground="primary-system01-oncolor">
                  <Text variant="caption-1" textAlign="center">{radius}</Text>
                </Surface>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const BorderWidthAndStyle: Story = {
  name: 'Border Width & Style 시각화',
  parameters: {
    docs: {
      description: {
        story: '테두리 두께와 스타일의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* Border Width */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Border Width</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['thin', 'medium', 'thick'].map((width) => (
            <Surface 
              key={width} 
              background="secondary-system01-1-rest" 
              borderWidth={width as BorderWidthToken}
              borderStyle="solid"
              borderColor="primary-system01-1-rest"
              borderRadius="md"
            >
              <Frame padding="lg" minWidth="100px">
                <Text variant="caption-1" textAlign="center">{width}</Text>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Semantic Border Width */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Semantic Border Width</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['button', 'card', 'input-default', 'input-focused', 'divider'].map((width) => (
            <Surface 
              key={width} 
              background="secondary-system01-1-rest" 
              borderWidth={width as BorderWidthToken}
              borderStyle="solid"
              borderColor="secondary-system01-1-rest"
              borderRadius="md"
            >
              <Frame padding="lg" minWidth="120px">
                <Text variant="caption-1" textAlign="center">{width}</Text>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* Border Style */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Border Style</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          {['solid', 'dashed', 'dotted'].map((style) => (
            <Surface 
              key={style} 
              background="secondary-system01-1-rest" 
              borderWidth="thick"
              borderStyle={style as any}
              borderColor="primary-system01-1-rest"
              borderRadius="md"
            >
              <Frame padding="lg" minWidth="100px">
                <Text variant="caption-1" textAlign="center">{style}</Text>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const BoxShadows: Story = {
  name: 'BoxShadow 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 그림자 효과의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="xl">
      
      {/* Foundation Shadows - 단계별 진한 그림자 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Foundation Shadows (단계별)</Text>
        <Frame display="flex" gap="xl" wrap="wrap">
          {[
            { shadow: '0', label: 'None (0)' },
            { shadow: '10', label: 'Light (10)' },
            { shadow: '20', label: 'Medium (20)' },
            { shadow: '30', label: 'Strong (30)' },
            { shadow: '40', label: 'Heavy (40)' },
            { shadow: '50', label: 'Strongest (50)' }
          ].map(({ shadow, label }) => (
            <Surface 
              key={shadow} 
              background="secondary-system01-1-rest" 
              borderRadius="md"
              boxShadow={shadow as ShadowToken}
            >
              <Frame padding="lg" minWidth="140px">
                <Text variant="caption-1" textAlign="center">{label}</Text>
              </Frame>
            </Surface>
          ))}
        </Frame>
      </Frame>

      {/* 사용 예시 - 버튼 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Button Shadow 예시</Text>
        <Frame display="flex" gap="xl" wrap="wrap">
          <Surface 
            background="primary-system01-1-rest" 
            foreground="primary-system01-oncolor"
            borderRadius="button-md"
            boxShadow="20"
          >
            <Frame padding="md" minWidth="120px" display="flex" justify="center">
              <Text variant="label-1" weight="medium">Button (20)</Text>
            </Frame>
          </Surface>
          
          <Surface 
            background="cta-system01-1-rest" 
            foreground="cta-system01-oncolor"
            borderRadius="button-md"
            boxShadow="30"
          >
            <Frame padding="md" minWidth="120px" display="flex" justify="center">
              <Text variant="label-1" weight="medium">CTA (30)</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>

      {/* 사용 예시 - 카드 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Card Shadow 예시</Text>
        <Frame display="flex" gap="xl" wrap="wrap">
          <Surface 
            background="secondary-system01-1-rest" 
            borderRadius="card"
            boxShadow="30"
          >
            <Frame padding="lg" minWidth="140px">
              <Text variant="caption-1" textAlign="center">Card (30)</Text>
            </Frame>
          </Surface>
          
          <Surface 
            background="secondary-system01-1-rest" 
            borderRadius="card"
            boxShadow="40"
          >
            <Frame padding="lg" minWidth="140px">
              <Text variant="caption-1" textAlign="center">Modal (40)</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const OverlayEffects: Story = {
  name: 'Overlay 효과 시각화',
  parameters: {
    docs: {
      description: {
        story: '오버레이 효과의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      <Text variant="heading-3" weight="medium">Overlay Effects</Text>
      
      <Frame display="flex" gap="xl" wrap="wrap">
        {['light', 'medium', 'heavy'].map((overlay) => (
          <Frame key={overlay} display="flex" direction="column" gap="md">
            <Text variant="body-2" weight="medium" textAlign="center">{overlay}</Text>
            <Surface 
              background="primary-system01-1-rest" 
              borderRadius="md"
              overlay={overlay as OverlayToken}
            >
              <Frame padding="xl" minWidth="150px" minHeight="100px" display="flex" justify="center" align="center">
                <Surface foreground="primary-system01-oncolor">
                  <Text variant="body-1">Base Content</Text>
                </Surface>
              </Frame>
            </Surface>
          </Frame>
        ))}
      </Frame>
    </Frame>
  ),
};

export const CompoundComponentExample: Story = {
  name: '컴파운드 컴포넌트 조합 예시',
  parameters: {
    docs: {
      description: {
        story: 'Surface와 Frame을 조합하여 실제 컴포넌트를 구현한 예시입니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* 버튼 예시 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Button 컴포넌트 예시</Text>
        <Frame display="flex" gap="md" wrap="wrap">
          
          {/* Primary Button */}
          <Surface 
            background="primary-system01-1-rest"
            foreground="primary-system01-oncolor"
            borderRadius="button-md"
            boxShadow="20"
          >
            <Frame paddingY="md" paddingX="lg" display="flex" justify="center" align="center">
              <Text variant="label-1" weight="medium">Primary Button</Text>
            </Frame>
          </Surface>

          {/* Secondary Button */}
          <Surface 
            background="secondary-system01-1-rest"
            foreground="secondary-system01-1-rest"
            borderColor="secondary-system01-1-rest"
            borderWidth="button"
            borderStyle="solid"
            borderRadius="button-md"
            boxShadow="20"
          >
            <Frame paddingY="md" paddingX="lg" display="flex" justify="center" align="center">
              <Text variant="label-1" weight="medium">Secondary Button</Text>
            </Frame>
          </Surface>

          {/* Status Button */}
          <Surface 
            background="success"
            foreground="primary-system01-oncolor"
            borderRadius="button-md"
            boxShadow="30"
          >
            <Frame paddingY="md" paddingX="lg" display="flex" justify="center" align="center">
              <Text variant="label-1" weight="medium">Success Button</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>

      {/* 카드 예시 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Card 컴포넌트 예시</Text>
        <Frame display="flex" gap="lg" wrap="wrap">
          
          {/* Basic Card */}
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="card"
            boxShadow="30"
          >
            <Frame padding="lg" display="flex" direction="column" gap="md" minWidth="200px">
              <Text variant="heading-1" weight="medium">Card Title</Text>
              <Text variant="body-2">Card content using Surface for styling and Frame for layout structure.</Text>
              <Frame display="flex" gap="sm">
                <Surface background="primary-system01-1-rest" foreground="primary-system01-oncolor" borderRadius="button-sm">
                  <Frame paddingY="xs" paddingX="sm">
                    <Text variant="caption-1" weight="medium">Action</Text>
                  </Frame>
                </Surface>
                <Surface foreground="secondary-system01-2-rest" borderRadius="button-sm">
                  <Frame paddingY="xs" paddingX="sm">
                    <Text variant="caption-1" weight="medium">Cancel</Text>
                  </Frame>
                </Surface>
              </Frame>
            </Frame>
          </Surface>

          {/* Status Card */}
          <Surface 
            background="success"
            foreground="primary-system01-oncolor"
            borderRadius="card"
            boxShadow="40"
          >
            <Frame padding="lg" display="flex" direction="column" gap="sm" minWidth="200px">
              <Text variant="label-1" weight="bold">✓ Success</Text>
              <Text variant="body-2">Operation completed successfully!</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>

      {/* 입력 예시 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">Input 컴포넌트 예시</Text>
        <Frame display="flex" direction="column" gap="sm" maxWidth="300px">
          
          {/* Default Input */}
          <Surface 
            background="secondary-system01-1-rest"
            borderColor="secondary-system01-1-rest"
            borderWidth="input-default"
            borderStyle="solid"
            borderRadius="input"
          >
            <Frame paddingY="md" paddingX="lg">
              <Text variant="body-2">Input placeholder text</Text>
            </Frame>
          </Surface>

          {/* Focused Input */}
          <Surface 
            background="secondary-system01-1-rest"
            borderColor="primary-system01-1-rest"
            borderWidth="input-focused"
            borderStyle="solid"
            borderRadius="input"
            boxShadow="20"
          >
            <Frame paddingY="md" paddingX="lg">
              <Text variant="body-2">Focused input state</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>
    </Frame>
  ),
}; 