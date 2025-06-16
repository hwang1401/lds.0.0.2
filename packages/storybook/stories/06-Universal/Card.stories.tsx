import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card as System01Card } from '@lumir/system-01';
import { Card as System02Card } from '@lumir/system-02';
import { Text, Frame, Surface } from '@lumir/shared';

// Icon names array for storybook select options
const iconNames = [
  'LineIconsPlusPlusIcon',
  'LineIconsMinusMinusIcon',
  'LineIconsCheckmarkCheckmarkIcon',
  'LineIconsCloseCloseIcon',
  'LineIconsEditEdit1Icon',
  'LineIconsEditEdit2Icon',
  'LineIconsTrashTrash1Icon',
  'LineIconsTrashTrash2Icon',
  'LineIconsEyeEyeIcon',
  'LineIconsEyeOffIcon',
  'LineIconsHeartIcon',
  'LineIconsStarFilledIcon',
  'LineIconsStarOutlinedIcon',
  'LineIconsShoppingCartIcon',
  'LineIconsShoppingBagIcon',
  'LineIconsCartAddCartIcon',
  'SearchIcon',
  'HomeIcon',
  'SettingIcon',
  'Profile01Icon',
  'CameraIcon',
  'ImageIcon',
  'ShareIcon',
  'DownloadIcon',
  'UploadIcon',
  'SaveIcon',
  'CopyIcon',
  'RefreshIcon',
  'SyncIcon',
  'PowerIcon',
  'LockIcon',
  'UnlockIcon',
  'InfoIcon',
  'WarningIcon',
  'SuccessIcon',
  'LineIconsAlertCircleIcon',
  'LineIconsAlertTriangleIcon',
  'LineIconsArrowArrow1LeftIcon',
  'LineIconsArrowArrow1RightIcon',
  'LineIconsArrowArrow1UpIcon',
  'LineIconsArrowArrow1DownIcon',
  'LineIconsArrowChevronLeftIcon',
  'LineIconsArrowChevronRightIcon',
  'LineIconsArrowChevronUpIcon',
  'LineIconsArrowChevronDownIcon',
  'LineIconsMenuMenuIcon',
  'LineIconsMoreHorizontalIcon',
  'LineIconsMoreVerticalIcon',
] as const;

// 시스템별 Card 컴포넌트 매핑
const CardComponents = {
  'system-01': System01Card,
  'system-02': System02Card,
};

// 동적 Card 컴포넌트
const UniversalCard = ({ system, ...props }: any) => {
  const CardComponent = CardComponents[system as keyof typeof CardComponents] || System01Card;
  return <CardComponent {...props} />;
};

const meta: Meta<typeof UniversalCard> = {
  title: 'Universal/Card',
  component: UniversalCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Universal Card component with comprehensive customization options for both System-01 and System-02',
      },
    },
  },
  argTypes: {
    // === SYSTEM SELECTION ===
    system: {
      control: 'select',
      options: ['system-01', 'system-02'],
      description: 'Design system to use',
      table: {
        category: 'System Selection',
      },
    },

    // === CARD LAYOUT ===
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'transparent'],
      description: 'Card variant (style variation)',
      table: {
        category: 'Card Layout',
      },
    },
    title: {
      control: 'text',
      description: 'Card main title (product name, etc.)',
      table: {
        category: 'Card Layout',
      },
    },
    description: {
      control: 'text',
      description: 'Detailed description text (brand name)',
      table: {
        category: 'Card Layout',
      },
    },
    width: {
      control: 'text',
      description: 'Card width',
      table: {
        category: 'Card Layout',
      },
    },
    minWidth: {
      control: 'text',
      description: 'Card minimum width',
      table: {
        category: 'Card Layout',
      },
    },
    maxWidth: {
      control: 'number',
      description: 'Card maximum width',
      table: {
        category: 'Card Layout',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Card click event',
      table: {
        category: 'Card Layout',
      },
    },

    // === BADGE OPTIONS ===
    showBadge: {
      control: 'boolean',
      description: 'Show badge',
      table: {
        category: 'Badge Options',
      },
    },
    badge: {
      control: 'object',
      description: 'Badge settings (text, color, iconName)',
      table: {
        category: 'Badge Options',
      },
    },
    badgeText: {
      control: 'text',
      description: 'Badge text',
      table: {
        category: 'Badge Options',
      },
    },
    badgeColor: {
      control: 'select',
      options: ['primary', 'secondary', 'cta', 'error', 'warning'],
      description: 'Badge color',
      table: {
        category: 'Badge Options',
      },
    },
    badgeSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
      table: {
        category: 'Badge Options',
      },
    },
    badgeStyle: {
      control: 'select',
      options: ['filled', 'outlined', 'transparent'],
      description: 'Badge style (variant)',
      table: {
        category: 'Badge Options',
      },
    },
    badgeLayout: {
      control: 'select',
      options: ['only text', 'text+icon', 'only icon'],
      description: 'Badge layout',
      table: {
        category: 'Badge Options',
      },
    },
    badgeType: {
      control: 'select',
      options: ['round-square', 'circle'],
      description: 'Badge type',
      table: {
        category: 'Badge Options',
      },
    },
    badgeIconName: {
      control: 'select',
      options: iconNames,
      description: 'Badge icon',
      table: {
        category: 'Badge Options',
      },
    },

    // === TEXT DISPLAY OPTIONS ===
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'TextDisplay size',
      table: {
        category: 'TextDisplay Options',
      },
    },
    textStyle: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
      table: {
        category: 'TextDisplay Options',
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show label',
      table: {
        category: 'TextDisplay Options',
      },
    },
    labelText: {
      control: 'text',
      description: 'Label text',
      table: {
        category: 'TextDisplay Options',
      },
    },
    showDescription: {
      control: 'boolean',
      description: 'Show description',
      table: {
        category: 'TextDisplay Options',
      },
    },
    showCaption: {
      control: 'boolean',
      description: 'Show caption',
      table: {
        category: 'TextDisplay Options',
      },
    },
    captionText: {
      control: 'text',
      description: 'Caption text (price, etc.)',
      table: {
        category: 'TextDisplay Options',
      },
    },

    // === ACTION BUTTON OPTIONS ===
    showActionButton: {
      control: 'boolean',
      description: 'Show action button',
      table: {
        category: 'Action Button Options',
      },
    },
    actionButton: {
      control: 'object',
      description: 'Footer action button',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonVariant: {
      control: 'select',
      options: ['filled', 'outlined', 'transparent'],
      description: 'Button variant',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonType: {
      control: 'select',
      options: ['text-icon', 'text-only', 'icon-only'],
      description: 'Button type',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonColorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'cta'],
      description: 'Button color scheme',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonPosition: {
      control: 'select',
      options: ['top-right', 'bottom-full', 'bottom-right'],
      description: 'Button position layout',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonText: {
      control: 'text',
      description: 'Button text (for text-icon and text-only types)',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonIcon: {
      control: 'select',
      options: iconNames,
      description: 'Button icon (leftIcon)',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonRightIcon: {
      control: 'select',
      options: iconNames,
      description: 'Button right icon',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonIsFullWidth: {
      control: 'boolean',
      description: 'Button full width',
      table: {
        category: 'Action Button Options',
      },
    },
    buttonIsSelected: {
      control: 'boolean',
      description: 'Button selected state',
      table: {
        category: 'Action Button Options',
      },
    },

    // === IMAGE OPTIONS ===
    showImage: {
      control: 'boolean',
      description: 'Show image area',
      table: {
        category: 'Image Options',
      },
    },
    imageUrl: {
      control: 'text',
      description: 'Image URL (profile, product image, etc.)',
      table: {
        category: 'Image Options',
      },
    },
    imageHeight: {
      control: 'text',
      description: 'Image height (default: 242px for System-02, 200px for System-01)',
      table: {
        category: 'Image Options',
      },
    },
    imageObjectFit: {
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none', 'scaleDown', 'stretch', 'fitInside', 'fillArea', 'crop'],
      description: 'Image object-fit setting (default: cover)',
      table: {
        category: 'Image Options',
      },
    },
    imageObjectPosition: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'cropCenter', 'cropTop', 'cropBottom', 'cropLeft', 'cropRight', 'cropTopLeft', 'cropTopRight', 'cropBottomLeft', 'cropBottomRight'],
      description: 'Image object-position setting (default: center)',
      table: {
        category: 'Image Options',
      },
    },
    imageAspectRatio: {
      control: 'select',
      options: [undefined, 'square', 'landscape.classic', 'landscape.wide', 'landscape.ultraWide', 'landscape.film', 'portrait.classic', 'portrait.tall', 'portrait.book'],
      description: 'Image aspect-ratio setting',
      table: {
        category: 'Image Options',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UniversalCard>;

export const Default: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    if (system === 'system-01') {
      return (
        <UniversalCard
          system={system}
          variant="filled"
          title="System-01 Default Card"
          showDescription={true}
          description="Classic & Compact"
          showBadge={false}
          showActionButton={true}
          buttonType="text-icon"
          buttonPosition="top-right"
          buttonText="Add to Cart"
          showImage={false}
          width="100%"
          maxWidth={375}
        />
      );
    } else {
      return (
        <UniversalCard
          system={system}
          variant="filled"
          title="System-02 Default Card"
          showDescription={true}
          description="Modern & Spacious"
          showBadge={false}
          showActionButton={true}
          buttonType="text-icon"
          buttonPosition="top-right"
          buttonText="Add to Cart"
          showImage={false}
          width="100%"
          maxWidth={375}
        />
      );
    }
  },
};

export const ProductCard: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    return (
      <UniversalCard
        system={system}
        variant="filled"
        title="Premium Sneakers"
        showDescription={true}
        description="NIKE"
        showCaption={true}
        captionText="$129.99"
        showBadge={false}
        showActionButton={true}
        buttonType="text-icon"
        buttonText="Add to Cart"
        actionButton={{
          iconName: 'LineIconsPlusPlusIcon',
          onClick: () => alert('Added to cart!'),
        }}
        showImage={false}
        width="100%"
        maxWidth={375}
      />
    );
  },
};

export const ProductCardWithImage: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    return (
      <UniversalCard
        system={system}
        variant="filled"
        title="Nike Air Max 2024"
        showDescription={true}
        description="NIKE"
        showCaption={true}
        captionText="$120.00"
        showBadge={false}
        showActionButton={true}
        buttonType="text-icon"
        buttonText="Add to Cart"
        actionButton={{
          iconName: 'LineIconsPlusPlusIcon',
          onClick: () => alert('Added to cart!'),
        }}
        imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
        showImage={true}
        width="100%"
        maxWidth={375}
      />
    );
      },
    };

export const VariantComparison: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';

    return (
      <Frame display="flex" direction="column" gap="xl">
        <Text variant="heading-2" color={system === 'system-01' ? 'primary-system01-1-rest' : 'primary-system02-1-rest'}>
          Card Variant Comparison ({system})
        </Text>
        
        <Frame display="flex" direction="row" gap="lg">
          {/* Filled Variant */}
          <Frame display="flex" direction="column" gap="md">
            <Text variant="heading-3" color={system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest'}>
              Filled (Default)
            </Text>
            <UniversalCard
              system={system}
              variant="filled"
              title="Filled Card"
              showDescription={true}
              description="Background + Border + Shadow"
              showCaption={true}
              captionText="$89.00"
              showActionButton={true}
              buttonType="text-icon"
              buttonText="Add"
              actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
              showImage={false}
              maxWidth={300}
            />
          </Frame>

          {/* Outlined Variant */}
        <Frame display="flex" direction="column" gap="md">
            <Text variant="heading-3" color={system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest'}>
              Outlined
          </Text>
            <UniversalCard
              system={system}
              variant="outlined"
              title="Outlined Card"
              showDescription={true}
              description="Border Only"
              showCaption={true}
              captionText="$89.00"
              showActionButton={true}
              buttonType="text-icon"
              buttonText="Add"
              actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
              showImage={false}
              maxWidth={300}
            />
        </Frame>
        
          {/* Transparent Variant */}
        <Frame display="flex" direction="column" gap="md">
            <Text variant="heading-3" color={system === 'system-01' ? 'secondary-system01-1-rest' : 'secondary-system02-1-rest'}>
              Transparent
          </Text>
            <UniversalCard
              system={system}
              variant="transparent"
              title="Transparent Card"
              showDescription={true}
              description="No Background or Border"
              showCaption={true}
              captionText="$89.00"
              showActionButton={true}
              buttonType="text-icon"
              buttonText="Add"
              actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
              showImage={false}
              maxWidth={300}
            />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

// 뱃지가 있는 카드
export const WithBadge: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    if (system === 'system-01') {
    return (
      <Frame display="flex" direction="column" gap="lg">
          <UniversalCard
            system={system}
            variant="filled"
            title="박민수"
            showBadge={true}
            badgeText="서류심사"
            badgeColor="warning"
            showDescription={true}
            description="백엔드 개발자 채용"
            showCaption={true}
            captionText="서류 제출 마감: 2024년 12월 31일"
            showActionButton={false}
            showImage={false}
          />
          
          <UniversalCard
            system={system}
            variant="filled"
            title="최영미"
            showBadge={true}
            badgeText="긴급"
            badgeColor="error"
            badgeIconName="WarningIcon"
            showDescription={true}
            description="UI/UX 디자이너 채용"
            showCaption={true}
            captionText="긴급 채용: 즉시 면접 가능"
            showActionButton={true}
            buttonType="text-only"
            buttonText="연락"
            showImage={false}
          />
        </Frame>
      );
    } else {
      return (
        <Frame display="flex" direction="row" gap="lg">
          <UniversalCard
            system={system}
            variant="filled"
            title="New Product Card"
            showBadge={true}
            badgeText="NEW"
            badgeColor="primary"
            showDescription={true}
            description="BRAND"
            showCaption={true}
            captionText="$89.00"
            showActionButton={true}
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={false}
            maxWidth={300}
          />

          <UniversalCard
            system={system}
            variant="filled"
            title="Sale Product"
            showBadge={true}
            badgeText="SALE"
            badgeColor="secondary"
            showDescription={true}
            description="OUTLET"
            showCaption={true}
            captionText="$39.00"
            showActionButton={true}
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={false}
            maxWidth={300}
          />
          
          <UniversalCard
            system={system}
            variant="filled"
            title="Premium Product"
            showBadge={true}
            badgeText="PREMIUM"
            badgeColor="cta"
            showDescription={true}
            description="LUXURY"
            showCaption={true}
            captionText="$299.00"
            showActionButton={true}
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={false}
            maxWidth={300}
          />
      </Frame>
    );
    }
  },
};

// 이미지가 있는 카드
export const WithImage: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    if (system === 'system-01') {
    return (
        <Frame display="flex" direction="row" gap="lg">
          <UniversalCard
            system={system}
            variant="filled"
            title="김철수"
            showBadge={true}
            badgeText="프로필"
            badgeColor="primary"
            showDescription={true}
            description="시니어 개발자"
            showCaption={true}
            captionText="경력 8년"
            showActionButton={true}
            buttonType="icon-only"
            buttonIcon="LineIconsPersonPersonIcon"
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            imageHeight="150"
            maxWidth={300}
          />
          
          <UniversalCard
            system={system}
            variant="outlined"
            title="이수진"
            showBadge={true}
            badgeText="신입"
            badgeColor="secondary"
            showDescription={true}
            description="프론트엔드 개발자"
            showCaption={true}
            captionText="신입 지원자"
            showActionButton={true}
            buttonType="icon-only"
            buttonIcon="LineIconsPersonPersonIcon"
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
            imageHeight="150"
            maxWidth={300}
          />
        </Frame>
      );
    } else {
      return (
        <Frame display="flex" direction="row" gap="lg">
          <UniversalCard
            system={system}
            variant="filled"
            title="Nike Air Max 2024"
            showDescription={true}
            description="NIKE"
            showCaption={true}
            captionText="$120.00"
            showActionButton={true}
            actionButton={{
              iconName: 'LineIconsPlusPlusIcon',
              onClick: () => alert('Nike Air Max added to cart!'),
            }}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
            maxWidth={375}
          />
          
          <UniversalCard
            system={system}
            variant="filled"
            title="Adidas Ultraboost 22"
            showDescription={true}
            description="ADIDAS"
            showCaption={true}
            captionText="$180.00"
            showActionButton={true}
            actionButton={{
              iconName: 'LineIconsPlusPlusIcon',
              onClick: () => alert('Adidas Ultraboost added to cart!'),
            }}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center"
            maxWidth={375}
          />
        </Frame>
      );
    }
  },
};

// 버튼 위치 변형들
export const ButtonPositions: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Text variant="heading-2">
          Button Position Variations ({system})
        </Text>
        
        <Frame display="flex" direction="row" gap="lg">
          {/* Top Right */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2">Top Right (기본)</Text>
            <UniversalCard
              system={system}
              variant="filled"
              title="Top Right Button"
              showDescription={true}
              description={system === 'system-01' ? '채용 공고' : 'BRAND'}
              showCaption={true}
              captionText={system === 'system-01' ? '마감: 12월 31일' : '$99.00'}
              showActionButton={true}
              buttonPosition="top-right"
              buttonType="icon-only"
              buttonIcon="LineIconsPlusPlusIcon"
              showImage={false}
              maxWidth={280}
            />
          </Frame>

          {/* Bottom Full */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2">Bottom Full</Text>
            <UniversalCard
              system={system}
              variant="filled"
              title="Bottom Full Button"
              showDescription={true}
              description={system === 'system-01' ? '채용 공고' : 'BRAND'}
              showCaption={true}
              captionText={system === 'system-01' ? '마감: 12월 31일' : '$99.00'}
              showActionButton={true}
              buttonPosition="bottom-full"
              buttonType="text-icon"
              buttonText={system === 'system-01' ? '지원하기' : 'Add to Cart'}
              buttonIcon="LineIconsPlusPlusIcon"
              showImage={false}
              maxWidth={280}
            />
          </Frame>

          {/* Bottom Right */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2">Bottom Right</Text>
            <UniversalCard
              system={system}
              variant="filled"
              title="Bottom Right Button"
              showDescription={true}
              description={system === 'system-01' ? '채용 공고' : 'BRAND'}
              showCaption={true}
              captionText={system === 'system-01' ? '마감: 12월 31일' : '$99.00'}
              showActionButton={true}
              buttonPosition="bottom-right"
              buttonType="text-only"
              buttonText={system === 'system-01' ? '상세보기' : 'View'}
              showImage={false}
              maxWidth={280}
            />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

// Variant 변형들
export const Variants: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    return (
      <Frame display="flex" direction="column" gap="xl">
        <Text variant="heading-2">
          Card Variants ({system})
        </Text>
        
        <Frame display="flex" direction="row" gap="lg">
          {/* Filled */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2">Filled (기본)</Text>
            <UniversalCard
              system={system}
              variant="filled"
              title="Filled Card"
              showDescription={true}
              description={system === 'system-01' ? '백엔드 개발자' : 'PREMIUM'}
              showCaption={true}
              captionText={system === 'system-01' ? '경력 3년 이상' : '$199.00'}
              showActionButton={true}
              buttonType="icon-only"
              buttonIcon="LineIconsPlusPlusIcon"
              showImage={false}
              maxWidth={250}
            />
          </Frame>

          {/* Outlined */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2">Outlined</Text>
          <UniversalCard
            system={system}
              variant="outlined"
              title="Outlined Card"
              showDescription={true}
              description={system === 'system-01' ? '프론트엔드 개발자' : 'STANDARD'}
              showCaption={true}
              captionText={system === 'system-01' ? '신입 가능' : '$99.00'}
              showActionButton={true}
              buttonType="icon-only"
              buttonIcon="LineIconsPlusPlusIcon"
              showImage={false}
              maxWidth={250}
            />
          </Frame>

          {/* Transparent */}
          <Frame display="flex" direction="column" gap="sm">
            <Text variant="body-2">Transparent</Text>
          <UniversalCard
            system={system}
              variant="transparent"
              title="Transparent Card"
              showDescription={true}
              description={system === 'system-01' ? '디자이너' : 'BASIC'}
              showCaption={true}
              captionText={system === 'system-01' ? '포트폴리오 필수' : '$49.00'}
              showActionButton={true}
              buttonType="icon-only"
              buttonIcon="LineIconsPlusPlusIcon"
              showImage={false}
              maxWidth={250}
          />
          </Frame>
        </Frame>
      </Frame>
    );
  },
};

// 실제 사용 사례
export const RealWorldExample: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    if (system === 'system-01') {
      return (
        <Frame padding="lg">
          <Frame display="flex" direction="column" gap="xl">
            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>오늘의 면접 일정</h3>
              <Frame display="flex" direction="column" gap="md">
                <UniversalCard
                  system={system}
                  variant="filled"
                  title="김도형"
                  showBadge={true}
                  badgeText="면접"
                  badgeColor="primary"
                  showDescription={true}
                  description="레이다 신호처리/알고리즘 개발 채용"
                  showCaption={true}
                  captionText="면접 일정: 2025년 5월 20일 화요일 15:00 - 16:00"
                  statusText="상태: 면접완료"
                  showActionButton={true}
                  buttonType="text-icon"
                  buttonText="열람"
                  buttonIcon="LineIconsCheckmarkCircleIcon"
                  actionButton={{
                    onClick: () => alert('면접 결과 열람'),
                  }}
                  showImage={false}
                />
                
                <UniversalCard
                  system={system}
                  variant="filled"
                  title="이수진"
                  showBadge={true}
                  badgeText="면접"
                  badgeColor="primary"
                  showDescription={true}
                  description="프론트엔드 개발자 채용"
                  showCaption={true}
                  captionText="면접 일정: 2025년 5월 20일 화요일 16:30 - 17:30"
                  statusText="상태: 진행중"
                  showActionButton={true}
                  buttonType="text-icon"
                  buttonText="참가"
                  buttonIcon="LineIconsVideoOnIcon"
                  actionButton={{
                    onClick: () => alert('화상 면접 참가'),
                  }}
                  showImage={false}
                />
              </Frame>
            </div>

            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>서류 심사 대기</h3>
              <Frame display="flex" direction="column" gap="md">
                <UniversalCard
                  system={system}
                  variant="filled"
                  title="박민수"
                  showBadge={true}
                  badgeText="서류심사"
                  badgeColor="warning"
                  showDescription={true}
                  description="백엔드 개발자 채용"
                  showCaption={true}
                  captionText="서류 제출: 2024년 12월 15일"
                  statusText="상태: 심사중"
                  showActionButton={true}
                  buttonType="text-icon"
                  buttonText="검토"
                  buttonIcon="LineIconsFileTextIcon"
                  actionButton={{
                    onClick: () => alert('서류 검토'),
                  }}
                  showImage={false}
                />
                
                <UniversalCard
                  system={system}
                  variant="filled"
                  title="최영미"
                  showBadge={true}
                  badgeText="보완요청"
                  badgeColor="error"
                  showDescription={true}
                  description="디자이너 채용"
                  showCaption={true}
                  captionText="포트폴리오 추가 제출 요청"
                  statusText="상태: 서류 보완"
                  showActionButton={true}
                  buttonType="text-icon"
                  buttonText="연락"
                  buttonIcon="LineIconsPhonePhoneIcon"
                  actionButton={{
                    onClick: () => alert('지원자 연락'),
                  }}
                  showImage={false}
                />
              </Frame>
            </div>
          </Frame>
        </Frame>
      );
    } else {
      return (
        <Frame display="flex" direction="column" gap="xl">
          <Text variant="heading-2" color="primary-system02-1-rest">
            Interactive Product Cards (System-02)
          </Text>
          
          <Frame display="flex" direction="row" gap="lg">
            <UniversalCard
              system={system}
              variant="filled"
              title="Nike Air Max 2024"
              showDescription={true}
              description="NIKE"
              showCaption={true}
              captionText="$120.00"
              showActionButton={true}
              actionButton={{
                iconName: 'LineIconsPlusPlusIcon',
                onClick: () => alert('Nike Air Max added to cart!'),
              }}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
              onClick={() => console.log('Nike card clicked')}
              maxWidth={375}
            />

            <UniversalCard
              system={system}
              variant="filled"
              title="Adidas Ultraboost 22"
              showDescription={true}
              description="ADIDAS"
              showCaption={true}
              captionText="$180.00"
              showActionButton={true}
              actionButton={{
                iconName: 'LineIconsPlusPlusIcon',
                onClick: () => alert('Adidas Ultraboost added to cart!'),
              }}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center"
              onClick={() => console.log('Adidas card clicked')}
              maxWidth={375}
            />

            <UniversalCard
              system={system}
              variant="filled"
              title="Puma RS-X 2024"
              showDescription={true}
              description="PUMA"
              showCaption={true}
              captionText="$110.00"
              showActionButton={true}
              actionButton={{
                iconName: 'LineIconsPlusPlusIcon',
                onClick: () => alert('Puma RS-X added to cart!'),
              }}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center"
              onClick={() => console.log('Puma card clicked')}
              maxWidth={375}
            />
          </Frame>
        </Frame>
      );
    }
  },
};

// 시스템별 특화 기능들
export const SystemSpecificFeatures: Story = {
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    
    if (system === 'system-01') {
    return (
      <Frame display="flex" direction="column" gap="lg">
          <Text variant="heading-2">
            System-01 특화 기능 - Classic & Compact
          </Text>
          <Text variant="body-1">
            • 더 촘촘한 패딩과 간격 (md, sm 사용)<br/>
            • 작은 border-radius (sm 사용)<br/>
            • 컴팩트한 이미지 높이 (200px 기본)<br/>
            • 작은 버튼 크기 (sm 기본)<br/>
            • 기존 additionalInfo, statusText 호환성 유지<br/>
            • 채용관리시스템에 최적화된 정보 표시
        </Text>
        
          <UniversalCard
            system={system}
            variant="filled"
            title="System-01 특화 카드"
            showBadge={true}
            badgeText="테스트"
            badgeColor="primary"
            showDescription={true}
            description="Classic & Compact 스타일"
            showCaption={true}
            captionText="촘촘한 간격과 작은 radius"
            statusText="상태: System-01 최적화"
            showActionButton={true}
            buttonType="text-icon"
            buttonText="액션"
            buttonIcon="LineIconsCheckmarkCircleIcon"
            showImage={false}
          />
        </Frame>
      );
    } else {
      return (
        <Frame display="flex" direction="column" gap="lg">
          <Text variant="heading-2" color="primary-system02-1-rest">
            System-02 특화 기능 - Modern & Spacious
          </Text>
          <Text variant="body-1">
            • 넓은 패딩과 간격 (lg, xl 사용)<br/>
            • 큰 border-radius (xl 사용)<br/>
            • 큰 이미지 높이 (242px 기본)<br/>
            • 큰 버튼 크기 (md 기본)<br/>
            • 이미지 지원 (object-fit, object-position, aspect-ratio)<br/>
            • 다양한 variant (filled, outlined, transparent)<br/>
            • 상품 정보 표시에 최적화
          </Text>
          
          <Frame display="flex" direction="row" gap="lg">
            <UniversalCard
              system={system}
              variant="filled"
              title="System-02 특화 카드"
              showDescription={true}
              description="Modern & Spacious"
              showCaption={true}
              captionText="넓은 간격과 큰 radius"
              showActionButton={true}
              buttonType="text-icon"
              buttonText="Add"
              actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
              maxWidth={300}
            />

            <UniversalCard
              system={system}
              variant="outlined"
              title="Outlined with Shadow"
              showDescription={true}
              description="PREMIUM"
              showCaption={true}
              captionText="$299.00"
              showActionButton={true}
              buttonType="text-icon"
              buttonText="Buy"
              actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center"
              maxWidth={300}
          />
        </Frame>
      </Frame>
    );
    }
  },
};

// 인터랙티브 컨트롤
export const Interactive: Story = {
  args: {
    variant: 'filled',
    title: '컨트롤 테스트',
    showBadge: true,
    badgeText: '테스트',
    badgeColor: 'primary',
    showDescription: true,
    description: '컨트롤 패널에서 수정 가능한 카드입니다',
    showCaption: true,
    captionText: '추가 정보를 입력해보세요',
    statusText: '상태: 테스트중',
    showActionButton: true,
    buttonPosition: 'top-right',
    buttonType: 'icon-only',
    buttonText: '액션',
    showImage: false,
  },
  render: (args, { globals }) => {
    const system = globals?.system || 'system-01';
    return <UniversalCard {...args} system={system} />;
  },
  parameters: {
    docs: {
      description: {
        story: '컨트롤 패널에서 카드의 다양한 속성을 실시간으로 변경해보세요. 두 시스템 모두 동일한 기능을 제공하지만 스타일이 다릅니다.',
      },
    },
  },
}; 