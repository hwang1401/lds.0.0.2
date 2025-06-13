import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Sizing, Text, Frame, Surface, Icon } from '@lumir/shared';
import type { HeightValue } from '@lumir/shared';

const meta: Meta<typeof Sizing> = {
  title: 'Shared/Primitives/Sizing',
  component: Sizing,
  parameters: {
    componentSubtitle: '크기 제어 프리미티브 - 각 props별 시각화',
    docs: {
      description: {
        component: `
Sizing은 CSS 크기 속성만을 담당하는 순수한 프리미티브입니다.

## 핵심 특징
- **순수 크기 제어**: width, height, min/max 크기, aspect ratio 관리
- **시멘틱 높이 토큰**: 높이는 시멘틱 토큰 기반으로 일관성 유지
- **객체 제어**: 이미지/비디오의 objectFit, objectPosition 제어
- **반응형 지원**: 모든 속성이 반응형 지원

## Frame과의 차이점
- **Sizing**: 순수 크기 속성 (width, height, min/max, aspect ratio)
- **Frame**: 레이아웃 속성 (display, position, flexbox, grid, spacing)

## 사용 패턴
\`\`\`tsx
// 기본 크기 설정
<Sizing width="100%" height="md">
  <img src="..." />
</Sizing>

// 이미지 컨테이너
<Sizing width="300px" height="200px" objectFit="cover">
  <img src="..." />
</Sizing>

// 가로세로 비율 고정
<Sizing width="100%" aspectRatio="16/9">
  <video controls />
</Sizing>
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
    width: {
      description: '너비 (단위 포함한 문자열 또는 숫자)',
      control: 'text',
    },
    height: {
      description: '높이 (시멘틱 토큰 또는 단위 포함한 문자열)',
      control: 'select',
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
    minWidth: {
      description: '최소 너비',
      control: 'text',
    },
    minHeight: {
      description: '최소 높이',
      control: 'text',
    },
    maxWidth: {
      description: '최대 너비',
      control: 'text',
    },
    maxHeight: {
      description: '최대 높이',
      control: 'text',
    },
    aspectRatio: {
      description: '가로세로 비율',
      control: 'text',
    },
    objectFit: {
      description: '객체 맞춤 방식',
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    },
    objectPosition: {
      description: '객체 위치',
      control: 'text',
    },
    boxSizing: {
      description: '박스 모델',
      control: 'select',
      options: ['content-box', 'border-box'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sizing>;

// 샘플 컨텐츠 컴포넌트
const SampleBox = ({ label = "Box", variant = "primary", size = "md" }: { 
  label?: string; 
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}) => {
  // 토큰 기반 색상 매핑
  const variantMapping = {
    primary: "primary-system01-1-rest",
    secondary: "secondary-system01-2-rest", 
    success: "cta-system01-1-rest",
    warning: "secondary-system01-3-rest",
    error: "secondary-system01-1-rest",
    info: "primary-system01-2-rest"
  } as const;

  // primary와 success(cta)에는 oncolor 적용
  const needsOncolor = variant === 'primary' || variant === 'success';
  
  return (
    <Surface 
      background={variantMapping[variant]}
      foreground={needsOncolor ? `${variant === 'primary' ? 'primary' : 'cta'}-system01-oncolor` : undefined}
      borderWidth="thin"
      borderStyle="solid"
      borderColor="secondary-system01-2-rest"
      borderRadius="sm"
      fill
    >
      <Frame 
        padding={size === 'sm' ? 'xs' : size === 'lg' ? 'md' : 'sm'}
        display="flex"
        justify="center"
        align="center"
        fill
        minHeight="sm"
      >
        <Text 
          variant="caption-1" 
          weight="medium" 
          textAlign="center"
        >
          {label}
        </Text>
      </Frame>
    </Surface>
  );
};

export const Playground: Story = {
  args: {
    width: '200px',
    height: 'md',
    children: <SampleBox label="Playground" />,
  },
};

export const Width: Story = {
  name: 'Width 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 width 값들의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* 고정 너비 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">고정 너비 (Fixed Width)</Text>
        <Frame display="flex" direction="column" gap="sm">
          {['100px', '200px', '300px', '400px'].map((width) => (
            <Frame key={width} display="flex" align="center" gap="md">
              <Frame minWidth="80px">
                <Text variant="caption-1" weight="medium">{width}</Text>
              </Frame>
              <Sizing width={width} height="auto" minHeight="40px">
                <SampleBox label={width} variant="primary" size="md" />
              </Sizing>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* 백분율 너비 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">백분율 너비 (Percentage Width)</Text>
        <Frame display="flex" direction="column" gap="sm">
          {['25%', '50%', '75%', '100%'].map((width) => (
            <Frame key={width} display="flex" align="center" gap="md">
              <Frame minWidth="80px">
                <Text variant="caption-1" weight="medium">{width}</Text>
              </Frame>
              <Frame width="400px">
                <Sizing width={width} height="auto" minHeight="40px">
                  <SampleBox label={width} variant="primary" size="md" />
                </Sizing>
              </Frame>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* CSS 단위 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">다양한 CSS 단위</Text>
        <Frame display="flex" direction="column" gap="sm">
          {[
            { value: '10rem', label: '10rem' },
            { value: '20em', label: '20em' },
            { value: 'fit-content', label: 'fit-content' },
            { value: 'max-content', label: 'max-content' }
          ].map(({ value, label }) => (
            <Frame key={value} display="flex" align="center" gap="md">
              <Frame minWidth="80px">
                <Text variant="caption-1" weight="medium">{label}</Text>
              </Frame>
              <Sizing width={value} height="auto" minHeight="40px">
                <SampleBox label={label} variant="primary" size="md" />
              </Sizing>
            </Frame>
          ))}
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const HeightTokens: Story = {
  name: 'Height 토큰 시각화',
  parameters: {
    docs: {
      description: {
        story: '시멘틱 높이 토큰들의 시각적 차이를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* 시멘틱 높이 토큰 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">시멘틱 높이 토큰</Text>
        <Frame display="flex" gap="sm" wrap="wrap" align="flex-end">
          {(['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as HeightValue[]).map((height) => (
            <Frame key={height} display="flex" direction="column" gap="xs" align="center">
              <Sizing width="60px" height={height}>
                <Surface 
                  background="primary-system01-1-rest"
                  foreground="primary-system01-oncolor"
                  borderWidth="thin"
                  borderStyle="solid"
                  borderColor="secondary-system01-2-rest"
                  borderRadius="sm"
                  fill
                />
              </Sizing>
              <Text variant="caption-2" textAlign="center">{height}</Text>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* 커스텀 높이 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">커스텀 높이</Text>
        <Frame display="flex" gap="md" wrap="wrap" align="flex-end">
          {['50px', '100px', '150px', '200px'].map((height) => (
            <Frame key={height} display="flex" direction="column" gap="xs" align="center">
              <Sizing width="60px" height={height}>
                <Surface 
                  background="primary-system01-1-rest"
                  foreground="primary-system01-oncolor"
                  borderWidth="thin"
                  borderStyle="solid"
                  borderColor="secondary-system01-2-rest"
                  borderRadius="sm"
                  fill
                />
              </Sizing>
              <Text variant="caption-2" textAlign="center">{height}</Text>
            </Frame>
          ))}
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const MinMaxConstraints: Story = {
  name: 'Min/Max 제약 조건',
  parameters: {
    docs: {
      description: {
        story: '최소/최대 크기 제약 조건의 동작을 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* MinWidth 예시 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">MinWidth (최소 너비)</Text>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2">컨테이너가 줄어들어도 최소 너비 유지</Text>
          <Surface 
            borderWidth="thin" 
            borderStyle="dashed" 
            borderColor="secondary-system01-2-rest" 
            background="secondary-system01-1-rest"
          >
            <Frame width="150px" padding="sm">
              <Sizing width="100%" minWidth="200px" height="60px">
                <SampleBox label="minWidth: 200px" variant="success" size="md" />
              </Sizing>
            </Frame>
          </Surface>
        </Frame>
      </Frame>

      {/* MaxWidth 예시 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">MaxWidth (최대 너비)</Text>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2">컨테이너가 커져도 최대 너비 제한</Text>
          <Surface 
            borderWidth="thin" 
            borderStyle="dashed" 
            borderColor="secondary-system01-2-rest" 
            background="secondary-system01-1-rest"
          >
            <Frame width="400px" padding="sm">
              <Sizing width="100%" maxWidth="250px" height="60px">
                <SampleBox label="maxWidth: 250px" variant="warning" size="md" />
              </Sizing>
            </Frame>
          </Surface>
        </Frame>
      </Frame>

      {/* MinHeight & MaxHeight */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">MinHeight & MaxHeight</Text>
        <Frame display="flex" gap="lg">
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2" weight="medium">MinHeight</Text>
            <Text variant="caption-2">컨테이너가 작아져도 최소 높이 유지</Text>
            <Surface 
              borderWidth="thin" 
              borderStyle="dashed" 
              borderColor="secondary-system01-2-rest" 
              background="secondary-system01-1-rest"
            >
              <Frame height="120px" padding="sm" overflow="visible">
                <Sizing width="fit-content" height="100%" minHeight="80px">
                  <SampleBox label="최소 80px" variant="info" size="sm" />
                </Sizing>
              </Frame>
            </Surface>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">
                  컨테이너 40px → minHeight 80px로 확장
                </Text>
              </Frame>
            </Surface>
          </Frame>
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2" weight="medium">MaxHeight</Text>
            <Text variant="caption-2">컨테이너가 커져도 최대 높이 제한</Text>
            <Surface 
              borderWidth="thin" 
              borderStyle="dashed" 
              borderColor="secondary-system01-2-rest" 
              background="secondary-system01-1-rest"
            >
              <Frame height="120px" padding="sm">
                <Sizing width="140px" height="100%" maxHeight="60px">
                  <SampleBox label="최대 60px" variant="error" size="sm" />
                </Sizing>
              </Frame>
            </Surface>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">
                  컨테이너 120px → maxHeight 60px로 제한
                </Text>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const AspectRatio: Story = {
  name: 'AspectRatio 시각화',
  parameters: {
    docs: {
      description: {
        story: '가로세로 비율 고정의 시각적 효과를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* 일반적인 비율들 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">일반적인 가로세로 비율</Text>
        <Frame display="flex" gap="lg" wrap="wrap">
          {[
            { ratio: '1/1', name: '정사각형' },
            { ratio: '4/3', name: '일반 사진' },
            { ratio: '16/9', name: '와이드스크린' },
            { ratio: '3/2', name: '35mm 필름' }
          ].map(({ ratio, name }) => (
            <Frame key={ratio} display="flex" direction="column" gap="sm" align="center">
              <Sizing width="200px" aspectRatio={ratio}>
                <SampleBox label={ratio} variant="primary" size="md" />
              </Sizing>
              <Text variant="caption-1" textAlign="center">{ratio} ({name})</Text>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* 반응형 비율 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">반응형 비율 변화</Text>
        <Frame display="flex" direction="column" gap="sm">
          <Text variant="body-2">너비가 변해도 비율은 유지됩니다</Text>
          <Frame display="flex" gap="md">
            {['100px', '150px', '200px', '250px'].map((width) => (
              <Sizing key={width} width={width} aspectRatio="4/3">
                <SampleBox label={width} variant="primary" size="md" />
              </Sizing>
            ))}
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const ObjectFit: Story = {
  name: 'ObjectFit 시각화',
  parameters: {
    docs: {
      description: {
        story: '이미지/비디오의 objectFit 속성 효과를 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* ObjectFit 기본 옵션들 */}
      <Frame display="flex" direction="column" gap="md">
        <Frame display="flex" gap="sm" align="center">
          <Icon name="LineIconsStarFilledIcon" size="md" color="primary-system01" />
          <Text variant="heading-3" weight="medium">기본 ObjectFit 옵션들</Text>
        </Frame>
        <Text variant="body-2">정사각형 컨테이너(200×200px)에 가로로 긴 이미지(400×200px)를 넣었을 때의 차이</Text>
        <Frame display="flex" gap="lg" wrap="wrap">
          {(['fill', 'contain', 'cover', 'none', 'scaleDown'] as const).map((fit) => (
            <Frame key={fit} display="flex" direction="column" gap="sm" align="center">
              <Surface 
                borderWidth="thin" 
                borderStyle="solid" 
                borderColor="secondary-system01-2-rest" 
                background="secondary-system01-1-rest"
              >
                <Frame width="200px" height="200px" overflow="hidden">
                  <Sizing width="200px" height="200px" objectFit={fit}>
                    <img 
                      src="https://picsum.photos/id/1018/400/200" 
                      alt="Mountain landscape" 
                      className="fill"
                    />
                  </Sizing>
                </Frame>
              </Surface>
              <Text variant="caption-1" textAlign="center" weight="medium">{fit === 'scaleDown' ? 'scale-down' : fit}</Text>
              <Surface foreground="secondary-system01-2-rest">
                <Frame padding="xs">
                  <Text variant="caption-2" textAlign="center">
                    {fit === 'fill' && '강제로 늘려서 채움'}
                    {fit === 'contain' && '비율 유지하며 전체 보임'}
                    {fit === 'cover' && '비율 유지하며 꽉 채움'}
                    {fit === 'none' && '원본 크기 유지'}
                    {fit === 'scaleDown' && 'none과 contain 중 작은 것'}
                  </Text>
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* 새로운 직관적인 별칭들 */}
      <Frame display="flex" direction="column" gap="md">
        <Frame display="flex" gap="sm" align="center">
          <Icon name="LineIconsStarFilledIcon" size="md" color="cta-system01" />
          <Text variant="heading-3" weight="medium">새로운 직관적인 별칭들</Text>
        </Frame>
        <Text variant="body-2">더 직관적인 이름으로 동일한 효과를 얻을 수 있습니다.</Text>
        <Frame display="flex" gap="lg" wrap="wrap">
          {([
            { name: 'stretch', iconName: 'ExpandIcon', desc: '늘려서 채움', original: 'fill' },
            { name: 'fitInside', iconName: 'MinimizeIcon', desc: '안쪽에 맞춤', original: 'contain' },
            { name: 'fillArea', iconName: 'PinIcon', desc: '영역 채움', original: 'cover' },
            { name: 'crop', iconName: 'CropIcon', desc: '자르기', original: 'cover' }
          ] as const).map(({ name, iconName, desc, original }) => (
            <Frame key={name} display="flex" direction="column" gap="sm" align="center">
              <Surface 
                borderWidth="thin" 
                borderStyle="solid" 
                borderColor="cta-system01-2-rest" 
                background="cta-system01-2-rest"
              >
                <Frame width="200px" height="200px" overflow="hidden">
                  <Sizing width="200px" height="200px" objectFit={name}>
                    <img 
                      src="https://picsum.photos/id/1015/400/200" 
                      alt="Beach landscape" 
                      className="fill"
                    />
                  </Sizing>
                </Frame>
              </Surface>
              <Frame display="flex" gap="xs" align="center">
                <Icon name={iconName as any} size="sm" color="cta-system01" />
                <Text variant="caption-1" textAlign="center" weight="medium">{name}</Text>
              </Frame>
              <Surface foreground="cta-system01-1-rest">
                <Frame padding="xs">
                  <Text variant="caption-2" textAlign="center">{desc}</Text>
                </Frame>
              </Surface>
              <Surface foreground="secondary-system01-2-rest">
                <Frame padding="xs">
                  <Text variant="caption-2" textAlign="center">({original}과 동일)</Text>
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* 세로로 긴 컨테이너에 가로로 긴 이미지 */}
      <Frame display="flex" direction="column" gap="md">
        <Frame display="flex" gap="sm" align="center">
          <Icon name="MaximizeIcon" size="md" color="primary-system01" />
          <Text variant="heading-3" weight="medium">극단적인 비율 차이</Text>
        </Frame>
        <Text variant="body-2">세로로 긴 컨테이너(120×300px)에 가로로 긴 이미지(400×200px)를 넣었을 때</Text>
        <Frame display="flex" gap="lg" wrap="wrap">
          {([
            { name: 'fitInside', desc: '전체 보임' },
            { name: 'crop', desc: '자르기' },
            { name: 'stretch', desc: '늘림' }
          ] as const).map(({ name, desc }) => (
            <Frame key={name} display="flex" direction="column" gap="sm" align="center">
              <Surface 
                borderWidth="thin" 
                borderStyle="solid" 
                borderColor="secondary-system01-2-rest" 
                background="secondary-system01-1-rest"
              >
                <Frame width="120px" height="300px" overflow="hidden">
                  <Sizing width="120px" height="300px" objectFit={name}>
                    <img 
                      src="https://picsum.photos/id/1016/400/200" 
                      alt="City panorama" 
                      className="fill"
                    />
                  </Sizing>
                </Frame>
              </Surface>
              <Text variant="caption-1" textAlign="center" weight="medium">{name}</Text>
              <Surface foreground="secondary-system01-2-rest">
                <Frame padding="xs">
                  <Text variant="caption-2" textAlign="center">{desc}</Text>
                </Frame>
              </Surface>
            </Frame>
          ))}
        </Frame>
      </Frame>

      {/* 실제 사용 예시 - 아바타와 배너 */}
      <Frame display="flex" direction="column" gap="md">
        <Frame display="flex" gap="sm" align="center">
          <Icon name="BriefcaseIcon" size="md" color="secondary-system01-1" />
          <Text variant="heading-3" weight="medium">실제 사용 예시</Text>
        </Frame>
        <Frame display="flex" gap="xl" wrap="wrap">
          
          {/* 아바타 예시 */}
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Text variant="body-2" weight="medium">아바타 (정사각형 + crop)</Text>
            <Surface borderRadius="circular">
              <Frame overflow="hidden">
                <Sizing width="80px" height="80px" objectFit="crop">
                  <img 
                    src="https://picsum.photos/id/64/300/400" 
                    alt="Portrait photo" 
                    className="fill"
                  />
                </Sizing>
              </Frame>
            </Surface>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">세로가 긴 사진도</Text>
                <Text variant="caption-2" textAlign="center">정사각형으로 잘림</Text>
              </Frame>
            </Surface>
          </Frame>

          {/* 배너 예시 */}
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Text variant="body-2" weight="medium">배너 (16:9 + crop)</Text>
            <Surface borderRadius="md">
              <Frame overflow="hidden">
                <Sizing width="240px" height="135px" objectFit="crop">
                  <img 
                    src="https://picsum.photos/id/1036/400/600" 
                    alt="Nature vertical" 
                    className="fill"
                  />
                </Sizing>
              </Frame>
            </Surface>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">세로가 긴 사진을</Text>
                <Text variant="caption-2" textAlign="center">가로 배너에 맞춤</Text>
              </Frame>
            </Surface>
          </Frame>

          {/* 썸네일 예시 */}
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Text variant="body-2" weight="medium">썸네일 (fitInside)</Text>
            <Surface borderRadius="md">
              <Frame overflow="hidden">
                <Sizing width="150px" height="150px" objectFit="fitInside">
                  <img 
                    src="https://picsum.photos/id/1043/600/300" 
                    alt="Wide panorama" 
                    className="fill"
                  />
                </Sizing>
              </Frame>
            </Surface>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">가로가 긴 사진을</Text>
                <Text variant="caption-2" textAlign="center">전체가 보이게 축소</Text>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>

      {/* ObjectPosition과 조합 (crop 맥락) */}
      <Frame display="flex" direction="column" gap="lg">
        <Frame display="flex" gap="sm" align="center">
          <Icon name="CropIcon" size="md" color="cta-system01" /> 
          <Text variant="heading-3" weight="medium">Crop + Position 조합</Text>
        </Frame>
        
        {/* 원본 이미지 먼저 보여주기 */}
        <Frame display="flex" direction="column" gap="md" align="center">
          <Frame display="flex" gap="xs" align="center">
            <Icon name="ImageIcon" size="sm" color="secondary-system01-1" />
            <Text variant="body-2" weight="medium">원본 이미지 (800×600px)</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Surface 
              borderWidth="thick" 
              borderStyle="solid" 
              borderColor="primary-system01-1-rest" 
              background="cta-system01-1-rest"
              borderRadius="md"
            >
              <Frame padding="xs">
                <img 
                  src="https://picsum.photos/id/1025/800/600" 
                  alt="Original large landscape" 
                  className="fill"
                />
              </Frame>
            </Surface>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">
                  이 큰 이미지를 작은 컨테이너(120×160px)에 crop으로 넣어 자릅니다
                </Text>
              </Frame>
            </Surface>
          </Frame>
        </Frame>

        {/* crop + position 조합 */}
        <Frame display="flex" direction="column" gap="md">
          <Frame display="flex" gap="xs" align="center">
            <Icon name="SearchIcon" size="sm" color="secondary-system01-1" />
            <Text variant="body-2" weight="medium">crop + position 조합 비교</Text>
          </Frame>
          <Frame display="flex" gap="md" wrap="wrap" justify="center">
            {[
              { position: 'cropCenter', label: 'cropCenter', desc: '중앙 기준으로 자르기' },
              { position: 'cropTop', label: 'cropTop', desc: '상단 기준으로 자르기' },
              { position: 'cropBottom', label: 'cropBottom', desc: '하단 기준으로 자르기' },
              { position: 'cropLeft', label: 'cropLeft', desc: '좌측 기준으로 자르기' },
              { position: 'cropRight', label: 'cropRight', desc: '우측 기준으로 자르기' }
            ].map(({ position, label, desc }) => (
              <Frame key={position} display="flex" direction="column" gap="xs" align="center">
                <Surface 
                  borderWidth="thin" 
                  borderStyle="solid" 
                  borderColor="primary-system01-1-rest" 
                  background="cta-system01-1-rest"
                  borderRadius="sm"
                >
                  <Frame padding="xs">
                    <Sizing 
                      width="120px" 
                      height="160px" 
                      objectFit="crop" 
                      objectPosition={position as any}
                    >
                      <img 
                        src="https://picsum.photos/id/1025/800/600" 
                        alt={`${position} position demo`}
                        className="fill"
                      />
                    </Sizing>
                  </Frame>
                </Surface>
                <Surface foreground="cta-system01-1-rest">
                  <Text variant="caption-1" textAlign="center" weight="medium">
                    {label}
                  </Text>
                </Surface>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="caption-2" textAlign="center">
                    {desc}
                  </Text>
                </Surface>
              </Frame>
            ))}
          </Frame>
        </Frame>

        {/* 코너 crop Position들 */}
        <Frame display="flex" direction="column" gap="md">
          <Frame display="flex" gap="xs" align="center">
            <Icon name="LineIconsCornerUpLeftIcon" size="sm" color="secondary-system01-1" />
            <Text variant="body-2" weight="medium">코너 crop Position들</Text>
          </Frame>
          <Frame display="flex" gap="md" wrap="wrap" justify="center">
            {[
              { position: 'cropTopLeft', label: 'cropTopLeft', desc: '좌상단 기준으로 자르기' },
              { position: 'cropTopRight', label: 'cropTopRight', desc: '우상단 기준으로 자르기' },
              { position: 'cropBottomLeft', label: 'cropBottomLeft', desc: '좌하단 기준으로 자르기' },
              { position: 'cropBottomRight', label: 'cropBottomRight', desc: '우하단 기준으로 자르기' }
            ].map(({ position, label, desc }) => (
              <Frame key={position} display="flex" direction="column" gap="xs" align="center">
                <Surface 
                  borderWidth="thin" 
                  borderStyle="solid" 
                  borderColor="primary-system01-1-rest" 
                  background="cta-system01-1-rest"
                  borderRadius="sm"
                >
                  <Frame padding="xs">
                    <Sizing 
                      width="120px" 
                      height="160px" 
                      objectFit="crop" 
                      objectPosition={position as any}
                    >
                      <img 
                        src="https://picsum.photos/id/1025/800/600" 
                        alt={`${position} position demo`}
                        className="fill"
                      />
                    </Sizing>
                  </Frame>
                </Surface>
                <Surface foreground="cta-system01-1-rest">
                  <Text variant="caption-1" textAlign="center" weight="medium">
                    {label}
                  </Text>
                </Surface>
                <Surface foreground="secondary-system01-2-rest">
                  <Text variant="caption-2" textAlign="center">
                    {desc}
                  </Text>
                </Surface>
              </Frame>
            ))}
          </Frame>
        </Frame>
        
        <Frame display="flex" gap="xs" align="center">
          <Icon name="InfoIcon" size="sm" color="status-info" />
          <Surface foreground="secondary-system01-2-rest">
            <Frame padding="xs">
              <Text variant="caption-2" weight="regular">
                모든 값이 시멘틱 토큰으로 관리되어 일관성을 보장합니다.
              </Text>
            </Frame>
          </Surface>
        </Frame>
        <Frame display="flex" gap="xs" align="center">
          <Icon name="LineIconsStarFilledIcon" size="sm" color="cta-system01" />
          <Surface foreground="cta-system01-1-rest">
            <Frame padding="xs">
              <Text variant="caption-2" weight="regular">
                "crop" + "cropCenter" 같은 조합으로 더 직관적으로 사용할 수 있습니다.
              </Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const BoxSizing: Story = {
  name: 'BoxSizing 시각화',
  parameters: {
    docs: {
      description: {
        story: '박스 모델의 차이점을 보여줍니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* BoxSizing 비교 */}
      <Frame display="flex" direction="column" gap="md">
        <Text variant="heading-3" weight="medium">BoxSizing 비교</Text>
        <Frame display="flex" gap="xl">
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Text variant="body-2" weight="medium">content-box (기본값)</Text>
            <Sizing 
              width="200px" 
              height="100px" 
              boxSizing="contentBox"
            >
              <Surface 
                borderWidth="thin" 
                borderStyle="solid" 
                borderColor="secondary-system01-2-rest" 
                background="secondary-system01-1-rest"
              >
                <Frame padding="lg">
                  <SampleBox label="content" variant="primary" size="md" />
                </Frame>
              </Surface>
            </Sizing>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">
                  전체 크기: 260px × 160px<br/>
                  (content + padding + border)
                </Text>
              </Frame>
            </Surface>
          </Frame>

          <Frame display="flex" direction="column" gap="sm" align="center">
            <Text variant="body-2" weight="medium">border-box</Text>
            <Sizing 
              width="200px" 
              height="100px" 
              boxSizing="borderBox"
            >
              <Surface 
                borderWidth="thin" 
                borderStyle="solid" 
                borderColor="primary-system01-1-rest" 
                background="primary-system01-1-rest"
              >
                <Frame padding="lg">
                  <SampleBox label="content" variant="primary" size="md" />
                </Frame>
              </Surface>
            </Sizing>
            <Surface foreground="secondary-system01-2-rest">
              <Frame padding="xs">
                <Text variant="caption-2" textAlign="center">
                  전체 크기: 200px × 100px<br/>
                  (padding과 border 포함)
                </Text>
              </Frame>
            </Surface>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const CompoundComponentExample: Story = {
  name: '컴파운드 컴포넌트 조합 예시',
  parameters: {
    docs: {
      description: {
        story: 'Sizing을 다른 프리미티브와 조합하여 실제 컴포넌트를 구현한 예시입니다.',
      },
    },
  },
  render: () => (
    <Frame display="flex" direction="column" gap="xl" padding="lg">
      
      {/* 실제 사용 사례: 다양한 Sizing 기능 조합 */}
      <Frame display="flex" direction="column" gap="md">
        <Frame display="flex" gap="sm" align="center">
          <Icon name="LineIconsStarFilledIcon" size="lg" color="cta-system01" />
          <Text variant="heading-3" weight="medium">실제 사용 사례: 다양한 Sizing 기능 조합</Text>
        </Frame>
        <Text variant="body-2">Sizing의 핵심 기능들을 실제 UI 컴포넌트에서 어떻게 활용하는지 보여줍니다</Text>
        
        <Frame display="grid" gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap="lg">
          
          {/* 1. 비디오 카드 - AspectRatio + ObjectFit */}
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="lg"
            borderWidth="thin"
            borderStyle="solid"
            borderColor="secondary-system01-2-rest"
            boxShadow="interaction-card-rest"
          >
            <Frame display="flex" direction="column">
              {/* 16:9 비율 고정 썸네일 */}
              <Surface borderRadius="md">
                <Frame overflow="hidden">
                  <Sizing width="100%" aspectRatio="16/9" objectFit="cover">
                    <img 
                      src="https://picsum.photos/id/111/640/360"
                      alt="Video thumbnail"
                      className="fill"
                    />
                  </Sizing>
                </Frame>
              </Surface>
              <Frame padding="md" display="flex" direction="column" gap="xs">
                <Text variant="body-1" weight="medium">비디오 제목</Text>
                <Text variant="caption-1">AspectRatio + ObjectFit 활용</Text>
              </Frame>
            </Frame>
          </Surface>

          {/* 2. 프로필 카드 - 고정 크기 + Min/Max 제약 */}
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="lg"
            borderWidth="thin"
            borderStyle="solid"
            borderColor="secondary-system01-2-rest"
            boxShadow="interaction-card-rest"
          >
            <Frame padding="lg" display="flex" gap="md" align="center">
              {/* 정사각형 아바타 */}
              <Surface borderRadius="circular">
                <Frame overflow="hidden">
                  <Sizing width="60px" aspectRatio="1/1" objectFit="cover">
                    <img 
                      src="https://picsum.photos/id/91/120/120"
                      alt="Avatar"
                      className="fill"
                    />
                  </Sizing>
                </Frame>
              </Surface>
              
              {/* 컨텐츠 영역 - 최소/최대 제약 */}
              <Frame flex="1" display="flex" direction="column" gap="xs" minWidth="120px" maxWidth="200px">
                <Text variant="body-1" weight="medium">사용자 이름</Text>
                <Text variant="caption-1">minWidth/maxWidth 제약</Text>
              </Frame>
            </Frame>
          </Surface>

          {/* 3. 이미지 갤러리 - 다양한 ObjectFit */}
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="lg"
            borderWidth="thin"
            borderStyle="solid"
            borderColor="secondary-system01-2-rest"
            boxShadow="interaction-card-rest"
          >
            <Frame padding="md" display="flex" direction="column" gap="sm">
              <Text variant="body-2" weight="medium">이미지 갤러리</Text>
              <Frame display="grid" gridTemplateColumns="1fr 1fr" gap="xs">
                {/* Cover: 비율 유지하며 꽉 채움 */}
                <Surface borderRadius="sm">
                  <Frame overflow="hidden">
                    <Sizing width="100%" height="80px" objectFit="cover">
                      <img 
                        src="https://picsum.photos/id/1002/300/200"
                        alt="Gallery nature"
                        className="fill"
                      />
                    </Sizing>
                  </Frame>
                </Surface>
                {/* Contain: 전체 이미지 보임 */}
                <Surface borderRadius="sm">
                  <Frame overflow="hidden">
                    <Sizing width="100%" height="80px" objectFit="contain">
                      <img 
                        src="https://picsum.photos/id/1003/200/300"
                        alt="Gallery vertical"
                        className="fill"
                      />
                    </Sizing>
                  </Frame>
                </Surface>
              </Frame>
              <Text variant="caption-2">좌: cover, 우: contain</Text>
            </Frame>
          </Surface>

          {/* 4. 반응형 배너 - 높이 토큰 활용 */}
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="lg"
            borderWidth="thin"
            borderStyle="solid"
            borderColor="secondary-system01-2-rest"
            boxShadow="interaction-card-rest"
          >
            <Frame display="flex" direction="column">
              {/* 시멘틱 높이 토큰 사용 */}
              <Sizing width="100%" height="xxxl" objectFit="cover">
                <Surface 
                  background="primary-system01-1-rest"
                  foreground="primary-system01-oncolor"
                  borderRadius="md"
                  fill
                >
                  <Frame 
                    width="100%" 
                    height="100%" 
                    display="flex" 
                    justify="center" 
                    align="center"
                  >
                    <Text variant="heading-2" weight="bold" color="onColor-primary">배너 영역</Text>
                  </Frame>
                </Surface>
              </Sizing>
              <Frame padding="md">
                <Text variant="caption-1">height="xxxl" 토큰 사용</Text>
              </Frame>
            </Frame>
          </Surface>

          {/* 5. 아이콘 버튼 그리드 - 정사각형 제약 */}
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="lg"
            borderWidth="thin"
            borderStyle="solid"
            borderColor="secondary-system01-2-rest"
            boxShadow="interaction-card-rest"
          >
            <Frame padding="md" display="flex" direction="column" gap="sm">
              <Text variant="body-2" weight="medium">아이콘 버튼 그리드</Text>
              <Frame display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="sm">
                {[
                  { icon: 'HomeIcon', label: '홈' },
                  { icon: 'LineIconsPersonPersonIcon', label: '사용자' },
                  { icon: 'LineIconsSettingsSetting1Icon', label: '설정' },
                  { icon: 'LineIconsMessageCircleIcon', label: '메시지' },
                  { icon: 'HeartIcon', label: '좋아요' },
                  { icon: 'SearchIcon', label: '검색' }
                ].map(({ icon, label }, index) => (
                  <Sizing key={index} width="100%" aspectRatio="1/1">
                    <Surface 
                      background="primary-system01-1-rest"
                      foreground="primary-system01-oncolor"
                      borderRadius="md"
                      fill
                    >
                      <Frame 
                        width="100%" 
                        height="100%" 
                        display="flex" 
                        justify="center" 
                        align="center"
                        direction="column"
                        gap="xs"
                      >
                        <Icon name={icon as any} size="md" color="oncolor" />
                        <Text variant="caption-2" textAlign="center" color="primary-system01-oncolor">{label}</Text>
                      </Frame>
                    </Surface>
                  </Sizing>
                ))}
              </Frame>
              <Text variant="caption-2">aspectRatio="1/1" 정사각형 유지</Text>
            </Frame>
          </Surface>

          {/* 6. 차트 컨테이너 - 최소 높이 보장 */}
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="lg"
            borderWidth="thin"
            borderStyle="solid"
            borderColor="secondary-system01-2-rest"
            boxShadow="interaction-card-rest"
          >
            <Frame padding="md" display="flex" direction="column" gap="sm">
              <Text variant="body-2" weight="medium">차트 컨테이너</Text>
              {/* 최소 높이 보장 */}
              <Sizing width="100%" minHeight="120px" height="auto">
                <Surface 
                  background="primary-system01-2-rest" 
                  foreground="primary-system01-oncolor"
                  borderWidth="thin" 
                  borderStyle="dashed" 
                  borderColor="primary-system01-1-rest"
                  borderRadius="md"
                  fill
                >
                  <Frame 
                    width="100%" 
                    height="100%" 
                    display="flex" 
                    justify="center" 
                    align="center"
                  >
                    <Frame display="flex" direction="column" align="center" gap="xs">
                      <Icon name="LineIconsBarChart1Icon" size="xxl" color="oncolor" />
                      <Text variant="caption-1" color="primary-system01-oncolor">차트 영역</Text>
                    </Frame>
                  </Frame>
                </Surface>
              </Sizing>
              <Text variant="caption-2">minHeight="120px" 최소 높이 보장</Text>
            </Frame>
          </Surface>
        </Frame>
      </Frame>
    </Frame>
  ),
}; 