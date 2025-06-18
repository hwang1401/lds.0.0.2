import React, { useState, useMemo } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon, Text, Frame, Surface } from 'lumir-design-system-shared';
import type { IconName, IconSize } from 'lumir-design-system-shared';
import { Field, Badge, Button, TextDisplay } from 'lumir-design-system-01';
import * as GeneratedIcons from 'lumir-design-system-shared';

const meta: Meta<typeof Icon> = {
  title: 'Shared/Primitives/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: '아이콘 이름',
      control: 'select',
      options: [
        'SearchIcon',
        'HomeIcon',
        'HeartIcon',
        'DownloadIcon',
        'UploadIcon',
        'InfoIcon',
        'WarningIcon',
        'LineIconsCheckmarkCheckmarkIcon',
        'LineIconsCloseCloseIcon',
        'LineIconsPlusPlusIcon',
        'LineIconsMinusMinusIcon',
        'LineIconsMenuMenuIcon',
        'LineIconsSettingsSetting1Icon',
        'LineIconsPersonPersonIcon',
        'ClockIcon',
        'CalendarIcon',
        'EmailIcon',
      ]
    },
    size: {
      description: '아이콘 크기 (토큰 기반)',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxl'] as IconSize[]
    }
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'SearchIcon',
    size: 'md'
  },
};

export const Sizes: Story = {
  render: () => (
    <Surface background="secondary-system01-1-rest" borderRadius="md">
      <Frame display="flex" direction="column" gap="lg" padding="lg">
        <Text variant="heading-2" weight="medium">아이콘 크기</Text>
        <Frame display="flex" direction="row" gap="xl" justify="center" align="center">
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="SearchIcon" size="xs" />
            <Text variant="caption-1">xs (12px)</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="SearchIcon" size="sm" />
            <Text variant="caption-1">sm (16px)</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="SearchIcon" size="md" />
            <Text variant="caption-1">md (20px)</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="SearchIcon" size="lg" />
            <Text variant="caption-1">lg (24px)</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="SearchIcon" size="xl" />
            <Text variant="caption-1">xl (28px)</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="SearchIcon" size="xxl" />
            <Text variant="caption-1">xxl (32px)</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="SearchIcon" size="xxxl" />
            <Text variant="caption-1">xxxl (36px)</Text>
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  ),
};

export const Colors: Story = {
  render: () => (
    <Surface background="secondary-system01-1-rest" borderRadius="md">
      <Frame display="flex" direction="column" gap="lg" padding="lg">
        <Text variant="heading-2" weight="medium">아이콘 색상</Text>
        <Text variant="body-2">아이콘은 현재 CSS에서 색상을 제어합니다. 다양한 상황에서의 아이콘을 확인해보세요.</Text>
        <Frame display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="lg">
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="HeartIcon" size="xl" />
            <Text variant="caption-1">Heart Icon</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="HeartIcon" size="xl" />
            <Text variant="caption-1">Heart Icon</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="HeartIcon" size="xl" />
            <Text variant="caption-1">Heart Icon</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="HeartIcon" size="xl" />
            <Text variant="caption-1">Heart Icon</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="WarningIcon" size="xl" />
            <Text variant="caption-1">Warning</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="InfoIcon" size="xl" />
            <Text variant="caption-1">Success</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="InfoIcon" size="xl" />
            <Text variant="caption-1">Error</Text>
          </Frame>
          <Frame display="flex" direction="column" gap="sm" align="center">
            <Icon name="InfoIcon" size="xl" />
            <Text variant="caption-1">Info</Text>
          </Frame>
        </Frame>
      </Frame>
    </Surface>
  ),
};

export const Interactive: Story = {
  args: {
    name: 'SearchIcon',
    size: 'lg'
  },
};

// 전체 아이콘 갤러리 - 모든 아이콘 포함
export const IconGallery: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

    // 모든 아이콘 리스트 (자동 생성된 아이콘에서 동적으로 추출)
    const allIcons: IconName[] = useMemo(() => {
      return Object.keys(GeneratedIcons)
        .filter(key => key !== 'GeneratedIconName') // 타입 정의 제외
        .sort() as IconName[]; // 알파벳 순으로 정렬
    }, []);

    // 검색 필터링
    const filteredIcons = useMemo(() => {
      if (!searchTerm) return allIcons;
      return allIcons.filter(iconName =>
        iconName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [searchTerm, allIcons]);

    const copyToClipboard = async (iconName: string) => {
      try {
        await navigator.clipboard.writeText(`<Icon name="${iconName}" />`);
        setCopiedIcon(iconName);
        setTimeout(() => setCopiedIcon(null), 2000);
      } catch (err) {
        console.error('클립보드 복사 실패:', err);
      }
    };

    return (
      <Frame display="flex" direction="column" gap="xl" padding="lg">
        
        {/* 헤더 섹션 */}
        <Surface background="secondary-system01-1-rest" borderRadius="lg">
          <Frame display="flex" direction="column" gap="xl" padding="xl">
            <Frame display="flex" direction="column" gap="sm">
              <Text variant="title-1" weight="bold">Icon Gallery</Text>
              <Text variant="body-2">
                총 {allIcons.length}개의 아이콘을 사용할 수 있습니다. 아이콘을 클릭하면 React 코드가 클립보드에 복사됩니다.
              </Text>
            </Frame>

            {/* 검색 및 필터 */}
            <Frame display="flex" direction="column" gap="lg">
              <Field
                placeholder="아이콘 검색... (예: search, home, arrow)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon="SearchIcon"
                size="lg"
                variant="filled"
              />
            </Frame>
          </Frame>
        </Surface>

        {/* 아이콘 그리드 */}
        {filteredIcons.length > 0 ? (
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="lg" 
            borderWidth="thin" 
            borderColor="secondary-system01-2-rest"
          >
            <Frame display="flex" direction="column" padding="xl" gap="xl">
              <Frame display="flex" direction="row" gap="lg" wrap="wrap" justify="center">
                {filteredIcons.map(iconName => {
                  const isCopied = copiedIcon === iconName;
                  
                  return (
                    <Surface
                      key={iconName}
                      background={isCopied ? "cta-system01-1-rest" : "secondary-system01-2-rest"}
                      borderRadius="md"
                      borderWidth="thin"
                      borderColor={isCopied ? "cta-system01-1-rest" : "secondary-system01-3-rest"}
                      style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                      onClick={() => copyToClipboard(iconName)}
                    >
                      <Frame 
                        padding="md" 
                        display="flex" 
                        direction="column" 
                        gap="sm" 
                        align="center"
                        minWidth="120px"
                      >
                        <Icon 
                          name={iconName} 
                          size="xl" 
                        />
                        <Text 
                          variant="caption-2" 
                          textAlign="center" 
                          noWrap
                          style={{ 
                            color: isCopied ? 'var(--color-oncolor)' : 'inherit',
                            fontSize: '10px',
                            maxWidth: '100px'
                          }}
                        >
                          {iconName}
                        </Text>
                                                 {isCopied && (
                           <Badge color="cta" size="sm" text="복사됨!" />
                         )}
                      </Frame>
                    </Surface>
                  );
                })}
              </Frame>
            </Frame>
          </Surface>
        ) : (
          <Surface background="secondary-system01-1-rest" borderRadius="lg">
            <Frame padding="xl" display="flex" justify="center" align="center" minHeight="200px">
              <Frame display="flex" direction="column" gap="md" align="center">
                <Icon name="SearchIcon" size="xxl" />
                <Text variant="body-1" textAlign="center">
                  "{searchTerm}"에 해당하는 아이콘을 찾을 수 없습니다.
                </Text>
                <Text variant="caption-1" textAlign="center">
                  다른 검색어를 시도해보세요.
                </Text>
              </Frame>
            </Frame>
          </Surface>
        )}
      </Frame>
    );
  },
};