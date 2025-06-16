import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@lumir/system-02';
import { Frame, Text, Surface } from '@lumir/shared';

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

const meta: Meta<typeof Card> = {
  title: 'System-02/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'System-02 Card component with comprehensive customization options',
      },
    },
  },
  argTypes: {
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
      description: 'Image height (default: 242px)',
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'filled',
    title: 'System-02 Default Card',
    showDescription: true,
    description: 'Modern & Friendly',
    showBadge: false,
    badge: { text: "NEW", color: "primary" },
    badgeText: "NEW",
    badgeColor: "primary",
    badgeSize: "md",
    badgeStyle: "filled",
    badgeLayout: "only text",
    badgeType: "round-square",
    showActionButton: true,
    buttonType: "text-icon",
    buttonPosition: "top-right",
    buttonText: "Add to Cart",
    showImage: false,
    width: '100%',
    maxWidth: 375,
  },
};

export const ProductCard: Story = {
  args: {
    variant: 'filled',
    title: 'Premium Sneakers',
    showDescription: true,
    description: 'NIKE',
    showCaption: true,
    captionText: '$129.99',
    showBadge: false,
    badge: { text: "SALE", color: "cta" },
    badgeText: "SALE",
    badgeColor: "cta",
    badgeSize: "md",
    badgeStyle: "filled",
    badgeLayout: "only text",
    badgeType: "round-square",
    showActionButton: true,
    buttonType: "text-icon",
    buttonText: "Add to Cart",
    actionButton: {
      iconName: 'LineIconsPlusPlusIcon',
      onClick: () => alert('Added to cart!'),
    },
    showImage: true,
    width: '100%',
    maxWidth: 375,
  },
};

export const ProductCardWithImage: Story = {
  args: {
    variant: 'filled',
    title: 'Nike Air Max 2024',
    showDescription: true,
    description: 'NIKE',
    showCaption: true,
    captionText: '$120.00',
    showBadge: false,
    badge: { text: "SALE", color: "cta" },
    badgeText: "SALE",
    badgeColor: "cta",
    badgeSize: "md",
    badgeStyle: "filled",
    badgeLayout: "only text",
    badgeType: "round-square",
    showActionButton: true,
    buttonType: "text-icon",
    buttonText: "Add to Cart",
    actionButton: {
      iconName: 'LineIconsPlusPlusIcon',
      onClick: () => alert('Added to cart!'),
    },
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center',
    showImage: true,
    width: '100%',
    maxWidth: 375,
  },
};

export const VariantComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Card Variant Comparison
      </Text>
      
      <Frame display="flex" direction="row" gap="lg">
        {/* Filled Variant */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Filled (Default)
          </Text>
          <Card
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
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Outlined
          </Text>
          <Card
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
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Transparent
          </Text>
          <Card
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
  ),
};

export const VisibilityOptions: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Element Visibility Options
      </Text>
      
      <Frame display="flex" direction="row" gap="lg">
        {/* All elements shown */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            All Elements
          </Text>
          <Card
            title="Complete Card"
            showBadge={true}
            badge={{ text: "NEW", color: "primary" }}
            showDescription={true}
            description="BRAND"
            showCaption={true}
            captionText="$199.00"
            showActionButton={true}
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={true}
            maxWidth={280}
          />
        </Frame>

        {/* Badge hidden */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            No Badge
          </Text>
          <Card
            title="No Badge Card"
            showBadge={false}
            badge={{ text: "NEW", color: "primary" }}
            showDescription={true}
            description="BRAND"
            showCaption={true}
            captionText="$99.00"
            showActionButton={true}
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={true}
            maxWidth={280}
          />
        </Frame>

        {/* Button hidden */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            No Button
          </Text>
          <Card
            title="No Button Card"
            showDescription={true}
            description="BRAND"
            showCaption={true}
            captionText="$79.00"
            showActionButton={false}
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={true}
            maxWidth={280}
          />
        </Frame>

        {/* Image hidden */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            No Image
          </Text>
          <Card
            title="No Image Card"
            showDescription={true}
            description="BRAND"
            showCaption={true}
            captionText="$59.00"
            showActionButton={true}
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={false}
            maxWidth={280}
          />
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const TextDisplayOptions: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        TextDisplay Options
      </Text>
      
      <Frame display="flex" direction="row" gap="lg">
        {/* Label + Title + Description + Caption */}
        <Card
          title="Complete Text"
          showLabel={true}
          labelText="NEW"
          showDescription={true}
          description="PREMIUM BRAND"
          showCaption={true}
          captionText="$199.00"
          showActionButton={true}
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={false}
          maxWidth={300}
        />

        {/* Title + Caption only */}
        <Card
          title="Simple Card"
          showCaption={true}
          captionText="$49.00"
          showActionButton={true}
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={false}
          maxWidth={300}
        />

        {/* Title only */}
        <Card
          title="Title Only Card"
          showActionButton={true}
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={false}
          maxWidth={300}
        />
      </Frame>
    </Frame>
  ),
};

export const InteractiveProductCards: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Interactive Product Cards (System-02)
      </Text>
      
      <Frame display="flex" direction="row" gap="lg">
        {/* Nike Shoes */}
        <Card
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

        {/* Adidas Shoes */}
        <Card
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

        {/* Puma Shoes */}
        <Card
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
  ),
};

export const VariantWithImages: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Card Variants with Images
      </Text>
      
      <Frame display="flex" direction="row" gap="lg">
        {/* Filled with Image */}
        <Card
          variant="filled"
          title="Filled with Image"
          showDescription={true}
          description="NIKE"
          showCaption={true}
          captionText="$120.00"
          showActionButton={true}
          buttonType="text-icon"
          buttonText="Add"
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={true}
          imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
          maxWidth={300}
        />

        {/* Outlined with Image */}
        <Card
          variant="outlined"
          title="Outlined with Image"
          showDescription={true}
          description="ADIDAS"
          showCaption={true}
          captionText="$150.00"
          showActionButton={true}
          buttonType="text-icon"
          buttonText="Add"
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={true}
          imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center"
          maxWidth={300}
        />

        {/* Transparent with Image */}
        <Card
          variant="transparent"
          title="Transparent with Image"
          showDescription={true}
          description="PUMA"
          showCaption={true}
          captionText="$110.00"
          showActionButton={true}
          buttonType="text-icon"
          buttonText="Add"
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={true}
          imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center"
          maxWidth={300}
        />
      </Frame>
    </Frame>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Cards with Badges
      </Text>
      
      <Frame display="flex" direction="row" gap="lg">
        <Card
          title="New Product Card"
          showBadge={true}
          badge={{ text: "NEW", color: "primary" }}
          showDescription={true}
          description="BRAND"
          showCaption={true}
          captionText="$89.00"
          showActionButton={true}
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={true}
          maxWidth={300}
        />

        <Card
          title="Sale Product"
          showBadge={true}
          badge={{ text: "SALE", color: "secondary" }}
          showDescription={true}
          description="OUTLET"
          showCaption={true}
          captionText="$39.00"
          showActionButton={true}
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={true}
          maxWidth={300}
        />

        <Card
          title="Premium Product"
          showBadge={true}
          badge={{ text: "PREMIUM", color: "cta" }}
          showDescription={true}
          description="LUXURY"
          showCaption={true}
          captionText="$299.00"
          showActionButton={true}
          actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
          showImage={true}
          maxWidth={300}
        />
      </Frame>
    </Frame>
  ),
};

export const ImageOptions: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Image Options (Object Fit & Position)
      </Text>
      
      {/* Object Fit Options */}
      <Frame display="flex" direction="column" gap="lg">
        <Text variant="heading-3" color="secondary-system02-1-rest">
          Object Fit Options
        </Text>
        <Frame display="flex" direction="row" gap="md" wrap="wrap">
          <Card
            title="Cover (Default)"
            description="Fill entire area"
            captionText="object-fit: cover"
            showCaption={true}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600"
            imageObjectFit="cover"
            maxWidth={280}
          />
          
          <Card
            title="Contain"
            description="Show entire image"
            captionText="object-fit: contain"
            showCaption={true}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600"
            imageObjectFit="contain"
            maxWidth={280}
          />
          
          <Card
            title="Crop"
            description="Crop from center"
            captionText="object-fit: crop"
            showCaption={true}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600"
            imageObjectFit="crop"
            maxWidth={280}
          />
          
          <Card
            title="Fit Inside"
            description="Fit inside area"
            captionText="object-fit: fitInside"
            showCaption={true}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600"
            imageObjectFit="fitInside"
            maxWidth={280}
          />
        </Frame>

        {/* Object Position Options */}
        <Frame display="flex" direction="column" gap="lg">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Object Position Options (with Crop)
          </Text>
          <Frame display="flex" direction="row" gap="md" wrap="wrap">
            <Card
              title="Center (Default)"
              description="Center position"
              captionText="position: center"
              showCaption={true}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600"
              imageObjectFit="crop"
              imageObjectPosition="center"
              maxWidth={280}
            />
            
            <Card
              title="Top"
              description="Top position"
              captionText="position: top"
              showCaption={true}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600"
              imageObjectFit="crop"
              imageObjectPosition="top"
              maxWidth={280}
            />
            
            <Card
              title="Bottom"
              description="Bottom position"
              captionText="position: bottom"
              showCaption={true}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600"
              imageObjectFit="crop"
              imageObjectPosition="bottom"
              maxWidth={280}
            />
            
            <Card
              title="Left"
              description="Left position"
              captionText="position: left"
              showCaption={true}
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600"
              imageObjectFit="crop"
              imageObjectPosition="left"
              maxWidth={280}
            />
          </Frame>

          {/* Aspect Ratio Options */}
          <Frame display="flex" direction="column" gap="lg">
            <Text variant="heading-3" color="secondary-system02-1-rest">
              Aspect Ratio Options
            </Text>
            <Frame display="flex" direction="row" gap="md" wrap="wrap">
              <Card
                title="Square"
                description="Square ratio"
                captionText="1:1 ratio"
                showCaption={true}
                showImage={true}
                imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600"
                imageObjectFit="crop"
                imageAspectRatio="square"
                maxWidth={280}
              />
              
              <Card
                title="Landscape Wide"
                description="Wide landscape ratio"
                captionText="16:9 ratio"
                showCaption={true}
                showImage={true}
                imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600"
                imageObjectFit="crop"
                imageAspectRatio="landscape.wide"
                maxWidth={280}
              />
              
              <Card
                title="Portrait Classic"
                description="Classic portrait ratio"
                captionText="3:4 ratio"
                showCaption={true}
                showImage={true}
                imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600"
                imageObjectFit="crop"
                imageAspectRatio="portrait.classic"
                maxWidth={280}
              />
              
              <Card
                title="Landscape Film"
                description="Film ratio"
                captionText="2.35:1 ratio"
                showCaption={true}
                showImage={true}
                imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600"
                imageObjectFit="crop"
                imageAspectRatio="landscape.film"
                maxWidth={280}
              />
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const ShadowComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Shadow Options Comparison
      </Text>
      
      <Frame display="flex" direction="row" gap="lg" wrap="wrap">
        {/* Current: Subtle shadow */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Current: Subtle shadow
          </Text>
          <Surface
            background="secondary-system02-1-rest"
            borderColor="secondary-system02-2-rest"
            borderWidth="thin"
            borderStyle="solid"
            borderRadius="xl"
            style={{ 
              width: '200px', 
              height: '120px', 
              padding: '16px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Text>Subtle shadow</Text>
          </Surface>
        </Frame>

        {/* Medium shadow */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Medium shadow
          </Text>
          <Surface
            background="secondary-system02-1-rest"
            borderColor="secondary-system02-2-rest"
            borderWidth="thin"
            borderStyle="solid"
            borderRadius="xl"
            style={{ 
              width: '200px', 
              height: '120px', 
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            <Text>Medium shadow</Text>
          </Surface>
        </Frame>

        {/* Soft shadow */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Soft shadow
          </Text>
          <Surface
            background="secondary-system02-1-rest"
            borderColor="secondary-system02-2-rest"
            borderWidth="thin"
            borderStyle="solid"
            borderRadius="xl"
            style={{ 
              width: '200px', 
              height: '120px', 
              padding: '16px',
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)'
            }}
          >
            <Text>Soft shadow</Text>
          </Surface>
        </Frame>

        {/* Strong shadow */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Strong shadow
          </Text>
          <Surface
            background="secondary-system02-1-rest"
            borderColor="secondary-system02-2-rest"
            borderWidth="thin"
            borderStyle="solid"
            borderRadius="xl"
            style={{ 
              width: '200px', 
              height: '120px', 
              padding: '16px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
            }}
          >
            <Text>Strong shadow</Text>
          </Surface>
        </Frame>
      </Frame>
    </Frame>
  ),
};

export const ButtonPositionComparison: Story = {
  render: () => (
    <Frame display="flex" direction="column" gap="xl">
      <Text variant="heading-2" color="primary-system02-1-rest">
        Button Position Options
      </Text>
      
      <Frame display="flex" direction="row" gap="lg" wrap="wrap">
        {/* Top Right (Default) */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Top Right (Default)
          </Text>
          <Card
            variant="filled"
            title="Nike Air Max"
            showDescription={true}
            description="NIKE"
            showCaption={true}
            captionText="$129.99"
            showActionButton={true}
            buttonType="text-icon"
            buttonPosition="top-right"
            buttonText="Add"
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={false}
            maxWidth={300}
          />
        </Frame>

        {/* Bottom Full Width */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Bottom Full Width
          </Text>
          <Card
            variant="filled"
            title="Nike Air Max"
            showDescription={true}
            description="NIKE"
            showCaption={true}
            captionText="$129.99"
            showActionButton={true}
            buttonType="text-icon"
            buttonPosition="bottom-full"
            buttonText="Add to Cart"
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={false}
            maxWidth={300}
          />
        </Frame>

        {/* Bottom Right */}
        <Frame display="flex" direction="column" gap="md">
          <Text variant="heading-3" color="secondary-system02-1-rest">
            Bottom Right
          </Text>
          <Card
            variant="filled"
            title="Nike Air Max"
            showDescription={true}
            description="NIKE"
            showCaption={true}
            captionText="$129.99"
            showActionButton={true}
            buttonType="text-icon"
            buttonPosition="bottom-right"
            buttonText="Add"
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={false}
            maxWidth={300}
          />
        </Frame>
      </Frame>

      {/* With Images */}
      <Frame display="flex" direction="column" gap="lg">
        <Text variant="heading-3" color="secondary-system02-1-rest">
          With Images
        </Text>
        <Frame display="flex" direction="row" gap="lg" wrap="wrap">
          <Card
            variant="filled"
            title="Nike Air Max"
            showDescription={true}
            description="NIKE"
            showCaption={true}
            captionText="$129.99"
            showActionButton={true}
            buttonType="text-icon"
            buttonPosition="top-right"
            buttonText="Add"
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
            maxWidth={300}
          />

          <Card
            variant="filled"
            title="Nike Air Max"
            showDescription={true}
            description="NIKE"
            showCaption={true}
            captionText="$129.99"
            showActionButton={true}
            buttonType="text-icon"
            buttonPosition="bottom-full"
            buttonText="Add to Cart"
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
            maxWidth={300}
          />

          <Card
            variant="filled"
            title="Nike Air Max"
            showDescription={true}
            description="NIKE"
            showCaption={true}
            captionText="$129.99"
            showActionButton={true}
            buttonType="text-icon"
            buttonPosition="bottom-right"
            buttonText="Add"
            actionButton={{ iconName: 'LineIconsPlusPlusIcon' }}
            showImage={true}
            imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
            maxWidth={300}
          />
        </Frame>
      </Frame>
    </Frame>
  ),
}; 
