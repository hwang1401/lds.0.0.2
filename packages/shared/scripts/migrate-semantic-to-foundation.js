import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 매핑 테이블 - foundation-tokens.css의 실제 토큰 이름과 매칭
const semanticToFoundationMap = {
  // === SPACING 토큰들 ===
  // spacingVer (vertical) mappings
  'semantic-spacingVer-global-none': 'foundation-foundation-spacing-0-vertical',
  'semantic-spacingVer-global-xxxs': 'foundation-foundation-spacing-20-vertical',
  'semantic-spacingVer-global-xxs': 'foundation-foundation-spacing-40-vertical',
  'semantic-spacingVer-global-xs': 'foundation-foundation-spacing-60-vertical',
  'semantic-spacingVer-global-sm': 'foundation-foundation-spacing-80-vertical',
  'semantic-spacingVer-global-md': 'foundation-foundation-spacing-100-vertical',
  'semantic-spacingVer-global-lg': 'foundation-foundation-spacing-120-vertical',
  'semantic-spacingVer-global-xl': 'foundation-foundation-spacing-160-vertical',
  'semantic-spacingVer-global-xxl': 'foundation-foundation-spacing-200-vertical',
  'semantic-spacingVer-global-xxxl': 'foundation-foundation-spacing-240-vertical',
  
  // spacingHor (horizontal) mappings
  'semantic-spacingHor-global-none': 'foundation-foundation-spacing-0-horizontal',
  'semantic-spacingHor-global-xxxs': 'foundation-foundation-spacing-20-horizontal',
  'semantic-spacingHor-global-xxs': 'foundation-foundation-spacing-40-horizontal',
  'semantic-spacingHor-global-xs': 'foundation-foundation-spacing-60-horizontal',
  'semantic-spacingHor-global-sm': 'foundation-foundation-spacing-80-horizontal',
  'semantic-spacingHor-global-md': 'foundation-foundation-spacing-100-horizontal',
  'semantic-spacingHor-global-lg': 'foundation-foundation-spacing-120-horizontal',
  'semantic-spacingHor-global-xl': 'foundation-foundation-spacing-160-horizontal',
  'semantic-spacingHor-global-xxl': 'foundation-foundation-spacing-200-horizontal',
  'semantic-spacingHor-global-xxxl': 'foundation-foundation-spacing-240-horizontal',
  
  // === COLOR 토큰들 ===
  // Status Colors
  'semantic-color-status-error-global': 'foundation-foundation-color-red-light-50',
  
  // Primary Colors - 기본 색상 팔레트 사용
  'semantic-color-primary-background-1-rest': 'foundation-foundation-color-blue-light-0',
  'semantic-color-primary-background-1-hovered': 'foundation-foundation-color-blue-light-10',
  'semantic-color-primary-background-1-pressed': 'foundation-foundation-color-blue-light-20',
  'semantic-color-primary-background-1-selected': 'foundation-foundation-color-blue-light-30',
  'semantic-color-primary-background-1-disabled': 'foundation-foundation-color-grey-light-90',
  'semantic-color-primary-background-2-rest': 'foundation-foundation-color-blue-light-50',
  'semantic-color-primary-background-2-hovered': 'foundation-foundation-color-blue-light-60',
  'semantic-color-primary-background-2-pressed': 'foundation-foundation-color-blue-light-70',
  'semantic-color-primary-background-2-selected': 'foundation-foundation-color-blue-light-80',
  'semantic-color-primary-background-2-disabled': 'foundation-foundation-color-grey-light-80',
  
  // Secondary Colors
  'semantic-color-secondary-background-1-rest': 'foundation-foundation-color-grey-light-0',
  'semantic-color-secondary-background-1-hovered': 'foundation-foundation-color-grey-light-10',
  'semantic-color-secondary-background-1-pressed': 'foundation-foundation-color-grey-light-20',
  'semantic-color-secondary-background-1-selected': 'foundation-foundation-color-grey-light-30',
  'semantic-color-secondary-background-1-disabled': 'foundation-foundation-color-grey-light-90',
  
  // CTA Colors
  'semantic-color-cta-background-1-rest': 'foundation-foundation-color-blue-light-50',
  'semantic-color-cta-background-1-hovered': 'foundation-foundation-color-blue-light-60',
  'semantic-color-cta-background-1-pressed': 'foundation-foundation-color-blue-light-70',
  'semantic-color-cta-background-1-selected': 'foundation-foundation-color-blue-light-80',
  'semantic-color-cta-background-1-disabled': 'foundation-foundation-color-grey-light-80',
  'semantic-color-cta-foreground-1-rest': 'foundation-foundation-color-grey-light-100',
  'semantic-color-cta-foreground-1-hovered': 'foundation-foundation-color-grey-light-100',
  'semantic-color-cta-foreground-1-pressed': 'foundation-foundation-color-grey-light-100',
  'semantic-color-cta-foreground-1-selected': 'foundation-foundation-color-grey-light-100',
  'semantic-color-cta-foreground-1-disabled': 'foundation-foundation-color-grey-light-60',
  'semantic-color-cta-foreground-2-rest': 'foundation-foundation-color-blue-light-50',

  // Overlay Background
  'semantic-color-overlay-background-backdrop': 'foundation-foundation-color-transparent-light-800',
  'semantic-color-overlay-background-modal': 'foundation-foundation-color-grey-light-100',
  'semantic-color-overlay-background-tooltip': 'foundation-foundation-color-grey-light-20',

  // === TYPOGRAPHY 토큰들 - 실제 foundation 토큰 사용 ===
  // Font Family
  'semantic-typography-hero-1-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-hero-1-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-hero-1-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-hero-2-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-hero-2-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-hero-2-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-title-1-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-title-1-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-title-1-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-title-2-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-title-2-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-title-2-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-1-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-1-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-1-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-2-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-2-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-2-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-3-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-3-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-heading-3-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-body-1-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-body-1-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-body-1-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-body-2-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-body-2-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-body-2-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-reading-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-reading-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-reading-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-label-1-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-label-1-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-label-1-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-label-2-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-label-2-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-label-2-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-1-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-1-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-1-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-2-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-2-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-2-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-3-regular-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-3-medium-fontFamily': 'foundation-foundation-font-fontfamily-base',
  'semantic-typography-caption-3-bold-fontFamily': 'foundation-foundation-font-fontfamily-base',

  // Font Size mappings - 타이포그래피 계층에 맞게 매핑
  'semantic-typography-hero-1-regular-fontSize': 'foundation-foundation-font-fontsize-720',
  'semantic-typography-hero-1-medium-fontSize': 'foundation-foundation-font-fontsize-720',
  'semantic-typography-hero-1-bold-fontSize': 'foundation-foundation-font-fontsize-720',
  'semantic-typography-hero-2-regular-fontSize': 'foundation-foundation-font-fontsize-600',
  'semantic-typography-hero-2-medium-fontSize': 'foundation-foundation-font-fontsize-600',
  'semantic-typography-hero-2-bold-fontSize': 'foundation-foundation-font-fontsize-600',
  'semantic-typography-title-1-regular-fontSize': 'foundation-foundation-font-fontsize-480',
  'semantic-typography-title-1-medium-fontSize': 'foundation-foundation-font-fontsize-480',
  'semantic-typography-title-1-bold-fontSize': 'foundation-foundation-font-fontsize-480',
  'semantic-typography-title-2-regular-fontSize': 'foundation-foundation-font-fontsize-360',
  'semantic-typography-title-2-medium-fontSize': 'foundation-foundation-font-fontsize-360',
  'semantic-typography-title-2-bold-fontSize': 'foundation-foundation-font-fontsize-360',
  'semantic-typography-heading-1-regular-fontSize': 'foundation-foundation-font-fontsize-300',
  'semantic-typography-heading-1-medium-fontSize': 'foundation-foundation-font-fontsize-300',
  'semantic-typography-heading-1-bold-fontSize': 'foundation-foundation-font-fontsize-300',
  'semantic-typography-heading-2-regular-fontSize': 'foundation-foundation-font-fontsize-240',
  'semantic-typography-heading-2-medium-fontSize': 'foundation-foundation-font-fontsize-240',
  'semantic-typography-heading-2-bold-fontSize': 'foundation-foundation-font-fontsize-240',
  'semantic-typography-heading-3-regular-fontSize': 'foundation-foundation-font-fontsize-200',
  'semantic-typography-heading-3-medium-fontSize': 'foundation-foundation-font-fontsize-200',
  'semantic-typography-heading-3-bold-fontSize': 'foundation-foundation-font-fontsize-200',
  'semantic-typography-body-1-regular-fontSize': 'foundation-foundation-font-fontsize-160',
  'semantic-typography-body-1-medium-fontSize': 'foundation-foundation-font-fontsize-160',
  'semantic-typography-body-1-bold-fontSize': 'foundation-foundation-font-fontsize-160',
  'semantic-typography-body-2-regular-fontSize': 'foundation-foundation-font-fontsize-140',
  'semantic-typography-body-2-medium-fontSize': 'foundation-foundation-font-fontsize-140',
  'semantic-typography-body-2-bold-fontSize': 'foundation-foundation-font-fontsize-140',
  'semantic-typography-reading-regular-fontSize': 'foundation-foundation-font-fontsize-160',
  'semantic-typography-reading-medium-fontSize': 'foundation-foundation-font-fontsize-160',
  'semantic-typography-reading-bold-fontSize': 'foundation-foundation-font-fontsize-160',
  'semantic-typography-label-1-regular-fontSize': 'foundation-foundation-font-fontsize-140',
  'semantic-typography-label-1-medium-fontSize': 'foundation-foundation-font-fontsize-140',
  'semantic-typography-label-1-bold-fontSize': 'foundation-foundation-font-fontsize-140',
  'semantic-typography-label-2-regular-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-label-2-medium-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-label-2-bold-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-1-regular-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-1-medium-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-1-bold-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-2-regular-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-2-medium-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-2-bold-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-3-regular-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-3-medium-fontSize': 'foundation-foundation-font-fontsize-120',
  'semantic-typography-caption-3-bold-fontSize': 'foundation-foundation-font-fontsize-120',

  // Line Height mappings
  'semantic-typography-hero-1-regular-lineHeight': 'foundation-foundation-font-lineheight-12',
  'semantic-typography-hero-1-medium-lineHeight': 'foundation-foundation-font-lineheight-12',
  'semantic-typography-hero-1-bold-lineHeight': 'foundation-foundation-font-lineheight-12',
  'semantic-typography-hero-2-regular-lineHeight': 'foundation-foundation-font-lineheight-12',
  'semantic-typography-hero-2-medium-lineHeight': 'foundation-foundation-font-lineheight-12',
  'semantic-typography-hero-2-bold-lineHeight': 'foundation-foundation-font-lineheight-12',
  'semantic-typography-title-1-regular-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-title-1-medium-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-title-1-bold-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-title-2-regular-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-title-2-medium-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-title-2-bold-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-heading-1-regular-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-heading-1-medium-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-heading-1-bold-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-heading-2-regular-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-heading-2-medium-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-heading-2-bold-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-heading-3-regular-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-heading-3-medium-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-heading-3-bold-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-body-1-regular-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-body-1-medium-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-body-1-bold-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-body-2-regular-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-body-2-medium-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-body-2-bold-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-reading-regular-lineHeight': 'foundation-foundation-font-lineheight-18',
  'semantic-typography-reading-medium-lineHeight': 'foundation-foundation-font-lineheight-18',
  'semantic-typography-reading-bold-lineHeight': 'foundation-foundation-font-lineheight-18',
  'semantic-typography-label-1-regular-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-label-1-medium-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-label-1-bold-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-label-2-regular-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-label-2-medium-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-label-2-bold-lineHeight': 'foundation-foundation-font-lineheight-16',
  'semantic-typography-caption-1-regular-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-1-medium-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-1-bold-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-2-regular-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-2-medium-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-2-bold-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-3-regular-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-3-medium-lineHeight': 'foundation-foundation-font-lineheight-14',
  'semantic-typography-caption-3-bold-lineHeight': 'foundation-foundation-font-lineheight-14',

  // Letter Spacing mappings
  'semantic-typography-hero-1-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-hero-1-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-hero-1-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-hero-2-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-hero-2-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-hero-2-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-title-1-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-title-1-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-title-1-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-title-2-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-title-2-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-title-2-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-1-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-1-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-1-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-2-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-2-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-2-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-3-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-3-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-heading-3-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-body-1-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-body-1-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-body-1-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-body-2-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-body-2-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-body-2-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-reading-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-reading-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-reading-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-label-1-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-label-1-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-label-1-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-label-2-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-label-2-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-label-2-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-1-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-1-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-1-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-2-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-2-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-2-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-3-regular-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-3-medium-letterSpacing': 'foundation-foundation-font-letterspacing-30',
  'semantic-typography-caption-3-bold-letterSpacing': 'foundation-foundation-font-letterspacing-30',

  // Font Weight mappings
  'semantic-typography-hero-1-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-hero-1-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-hero-1-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-hero-2-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-hero-2-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-hero-2-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-title-1-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-title-1-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-title-1-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-title-2-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-title-2-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-title-2-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-heading-1-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-heading-1-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-heading-1-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-heading-2-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-heading-2-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-heading-2-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-heading-3-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-heading-3-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-heading-3-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-body-1-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-body-1-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-body-1-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-body-2-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-body-2-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-body-2-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-reading-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-reading-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-reading-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-label-1-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-label-1-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-label-1-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-label-2-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-label-2-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-label-2-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-caption-1-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-caption-1-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-caption-1-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-caption-2-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-caption-2-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-caption-2-bold-fontWeight': 'foundation-foundation-font-fontweight-700',
  'semantic-typography-caption-3-regular-fontWeight': 'foundation-foundation-font-fontweight-400',
  'semantic-typography-caption-3-medium-fontWeight': 'foundation-foundation-font-fontweight-500',
  'semantic-typography-caption-3-bold-fontWeight': 'foundation-foundation-font-fontweight-700',

  // === Z-INDEX 토큰들 ===
  'semantic-zindex-modal': 'foundation-foundation-zindex-1000',
  'semantic-zindex-dropdown': 'foundation-foundation-zindex-900',
  'semantic-zindex-tooltip': 'foundation-foundation-zindex-800',
  'semantic-zindex-overlay': 'foundation-foundation-zindex-700',
  'semantic-zindex-header': 'foundation-foundation-zindex-600',
  'semantic-zindex-sidebar': 'foundation-foundation-zindex-500',

  // === OPACITY 토큰들 ===
  'semantic-opacity-disabled': 'foundation-foundation-scale-50',
  'semantic-opacity-hover': 'foundation-foundation-scale-90',
  'semantic-opacity-pressed': 'foundation-foundation-scale-75',

  // === ANIMATION 토큰들 ===
  'semantic-animation-duration-fast': 'foundation-foundation-duration-200',
  'semantic-animation-duration-normal': 'foundation-foundation-duration-300',
  'semantic-animation-duration-slow': 'foundation-foundation-duration-500',
  'semantic-animation-easing-ease-in': 'foundation-foundation-easing-standard-in',
  'semantic-animation-easing-ease-out': 'foundation-foundation-easing-standard-out',
  'semantic-animation-easing-ease-in-out': 'foundation-foundation-easing-standard-inout',

  // === SHADOW 토큰들 ===
  'semantic-shadow-surface-overlay': 'foundation-foundation-shadow-light-20',
  'semantic-shadow-surface-dropdown': 'foundation-foundation-shadow-light-30',
  'semantic-shadow-surface-modal': 'foundation-foundation-shadow-light-40',
  'semantic-shadow-surface-tooltip': 'foundation-foundation-shadow-light-20',
  'semantic-shadow-surface-toast': 'foundation-foundation-shadow-light-30',
  'semantic-shadow-surface-sidebar': 'foundation-foundation-shadow-light-20',
  'semantic-shadow-feedback-error': 'foundation-foundation-shadow-light-30',
  'semantic-shadow-feedback-success': 'foundation-foundation-shadow-light-30',
  'semantic-shadow-feedback-warning': 'foundation-foundation-shadow-light-30',
  'semantic-shadow-feedback-info': 'foundation-foundation-shadow-light-30',

  // === SIZE/DIMENSION 토큰들 ===
  'semantic-boxSizing-border-box': 'border-box',
  'semantic-object-fit-cover': 'cover',
  'semantic-object-fit-contain': 'contain',
  'semantic-object-fit-fill': 'fill',
  'semantic-object-fit-none': 'none',
  'semantic-object-fit-scaleDown': 'scale-down',
  'semantic-object-fit-fillArea': 'fill',
  'semantic-object-position-center': 'center',
  'semantic-object-position-top': 'top',
  'semantic-object-position-bottom': 'bottom',
  'semantic-object-position-left': 'left',
  'semantic-object-position-right': 'right',

  // Height 토큰들
  'semantic-height-global-button': 'foundation-foundation-height-440',
  'semantic-height-global-input': 'foundation-foundation-height-400',
  'semantic-height-global-icon': 'foundation-foundation-height-240',

  // Aspect Ratio 토큰들
  'semantic-aspectRatio-square': '1',
  'semantic-aspectRatio-video': '16/9',
  'semantic-aspectRatio-photo': '4/3',
  'semantic-aspectRatio-card': '3/2',

  // 추가 fallback 토큰들
  'semantic-spacing-none': 'foundation-foundation-spacing-0-vertical',
  'semantic-spacing-xs': 'foundation-foundation-spacing-60-vertical',
  'semantic-spacing-sm': 'foundation-foundation-spacing-80-vertical',
  'semantic-spacing-md': 'foundation-foundation-spacing-100-vertical',
  'semantic-spacing-lg': 'foundation-foundation-spacing-120-vertical',
  'semantic-spacing-xl': 'foundation-foundation-spacing-160-vertical',
};

// CSS 파일에서 semantic 토큰을 foundation 토큰으로 변경하는 함수
function migrateCssFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    let changedTokens = [];
    
    // 각 매핑에 대해 치환 수행
    Object.entries(semanticToFoundationMap).forEach(([semantic, foundation]) => {
      const semanticRegex = new RegExp(`--${semantic}`, 'g');
      const foundationReplacement = `--${foundation}`;
      
      if (content.includes(`--${semantic}`)) {
        content = content.replace(semanticRegex, foundationReplacement);
        hasChanges = true;
        changedTokens.push(`${semantic} → ${foundation}`);
      }
    });
    
    if (hasChanges) {
      // 주석도 업데이트
      content = content.replace(/시멘틱 토큰/g, '파운데이션 토큰');
      content = content.replace(/semantic token/gi, 'foundation token');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ 파일 업데이트 완료: ${filePath}`);
      changedTokens.forEach(change => console.log(`  ✅ ${change}`));
      return true;
    } else {
      console.log(`⚪ 변경사항 없음: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ 파일 처리 실패: ${filePath}`, error.message);
    return false;
  }
}

// primitives 폴더의 모든 CSS 파일 처리
function migratePrimitivesDirectory() {
  const primitivesDir = path.resolve(__dirname, '../src/primitives');
  
  if (!fs.existsSync(primitivesDir)) {
    console.error(`❌ primitives 디렉토리를 찾을 수 없습니다: ${primitivesDir}`);
    return;
  }
  
  console.log(`🚀 Primitives CSS 마이그레이션 시작: ${primitivesDir}\n`);
  console.log(`📋 총 ${Object.keys(semanticToFoundationMap).length}개의 semantic 토큰 매핑 준비됨\n`);
  
  let totalFiles = 0;
  let updatedFiles = 0;
  
  // 재귀적으로 모든 .css 파일 찾기
  function findCssFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findCssFiles(fullPath);
      } else if (file.endsWith('.css') || file.endsWith('.module.css')) {
        totalFiles++;
        console.log(`\n📁 처리 중: ${path.relative(primitivesDir, fullPath)}`);
        
        if (migrateCssFile(fullPath)) {
          updatedFiles++;
        }
      }
    });
  }
  
  findCssFiles(primitivesDir);
  
  console.log(`\n🎉 마이그레이션 완료!`);
  console.log(`📊 총 파일: ${totalFiles}개`);
  console.log(`✅ 업데이트된 파일: ${updatedFiles}개`);
  console.log(`⚪ 변경 없음: ${totalFiles - updatedFiles}개`);
  
  if (updatedFiles > 0) {
    console.log(`\n🔄 다음 단계:`);
    console.log(`1. shared 패키지 리빌드: npm run build`);
    console.log(`2. foundation 토큰 빌드: npm run build:tokens`);
    console.log(`3. 스토리북 확인: npm run storybook`);
  }
}

// 항상 실행
migratePrimitivesDirectory();

export { migrateCssFile, migratePrimitivesDirectory };