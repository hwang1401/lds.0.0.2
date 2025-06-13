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
    // npm 패키지 기반으로 변경 - alias 제거
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   '@lumir/shared': path.resolve(__dirname, '../../shared/src/index.ts'),
    //   '@lumir/system-01': path.resolve(__dirname, '../../system-01/src/index.ts'),
    //   '@lumir/system-02': path.resolve(__dirname, '../../system-02/src/index.ts'),
    // };
    
    // TypeScript 해결 강화
    config.resolve.extensions = [
      '.ts', '.tsx', '.js', '.jsx', '.json',
      ...(config.resolve.extensions || [])
    ];
    
    // npm 패키지 해결 문제 수정
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        'lumir-shared',
        'lumir-system-01', 
        'lumir-system-02',
        'react',
        'react-dom'
      ],
      force: true
    };
    
    // CommonJS 패키지 처리
    config.build = {
      ...config.build,
      commonjsOptions: {
        include: [/lumir-/, /node_modules/]
      }
    };
    
    return config;
  },
  
  docs: {
    autodocs: 'tag',
  },
};

module.exports = config; 