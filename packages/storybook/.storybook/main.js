const path = require('path');

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  // 🚀 정적 파일 서빙 설정 - System CSS 파일들을 서빙
  staticDirs: [
    {
      from: '../../system-01/dist/css',
      to: '/system-01/dist/css'
    },
    {
      from: '../../system-02/dist/css', 
      to: '/system-02/dist/css'
    }
  ],
  
  viteFinal: async (config) => {
    // workspace 의존성 직접 해결
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lumir/shared': path.resolve(__dirname, '../../shared/src/index.ts'),
      '@lumir/system-01': path.resolve(__dirname, '../../system-01/src/index.ts'),
      '@lumir/system-02': path.resolve(__dirname, '../../system-02/src/index.ts'),
    };
    
    // TypeScript 해결 강화
    config.resolve.extensions = [
      '.ts', '.tsx', '.js', '.jsx', '.json',
      ...(config.resolve.extensions || [])
    ];
    
    return config;
  },
  
  docs: {
    autodocs: 'tag',
  },
};

module.exports = config; 