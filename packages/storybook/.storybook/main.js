const path = require('path');

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  // 🚀 staticDirs 제거 - npm 패키지의 CSS를 직접 import 사용
  // staticDirs: [
  //   {
  //     from: '../../system-01/dist/css',
  //     to: '/system-01/dist/css'
  //   },
  //   {
  //     from: '../../system-02/dist/css', 
  //     to: '/system-02/dist/css'
  //   }
  // ],
  
  viteFinal: async (config) => {
    // 🚀 실시간 개발을 위한 소스 파일 직접 참조
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lumir/shared': path.resolve(__dirname, '../../shared/src/index.ts'),
      '@lumir/system-01': path.resolve(__dirname, '../../system-01/src/index.ts'),
      '@lumir/system-02': path.resolve(__dirname, '../../system-02/src/index.ts'),
      // Legacy alias for backward compatibility
      'lumir-shared': path.resolve(__dirname, '../../shared/src/index.ts'),
    };
    
    // TypeScript 해결 강화
    config.resolve.extensions = [
      '.ts', '.tsx', '.js', '.jsx', '.json',
      ...(config.resolve.extensions || [])
    ];
    
    // CSS 모듈 처리 추가
    config.css = {
      ...config.css,
      modules: {
        localsConvention: 'camelCase',
      },
    };
    
    // 실시간 개발을 위한 최적화 설정
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        'react',
        'react-dom'
      ],
      exclude: [
        '@lumir/shared',
        '@lumir/system-01', 
        '@lumir/system-02'
      ],
      force: true
    };
    
    return config;
  },
  
  docs: {
    autodocs: true,
  },
};

module.exports = config; 