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
    // 🚀 실시간 개발을 위한 소스 파일 직접 참조 - 새로운 패키지명으로 업데이트
    config.resolve.alias = {
      ...config.resolve.alias,
      'lumir-design-system-shared': path.resolve(__dirname, '../../shared/src/index.ts'),
      'lumir-design-system-01': path.resolve(__dirname, '../../system-01/src/index.ts'),
      'lumir-design-system-02': path.resolve(__dirname, '../../system-02/src/index.ts'),
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
    
    // 빌드 최적화 설정 - __STORYBOOK_MODULE_PREVIEW_API__ 에러 해결
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        'react',
        'react-dom',
        '@storybook/react',
        '@storybook/preview-api'
      ],
      exclude: [
        'lumir-design-system-shared',
        'lumir-design-system-01', 
        'lumir-design-system-02'
      ],
      force: true
    };

    // 빌드 성능 최적화 - 수정된 manualChunks 설정
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Storybook 관련 모듈들을 별도 청크로 분리
            if (id.includes('@storybook/')) {
              return 'storybook-vendor';
            }
            // React 관련 모듈들을 별도 청크로 분리
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // 디자인 시스템 모듈들을 별도 청크로 분리
            if (id.includes('lumir-design-system')) {
              return 'design-system';
            }
          },
        },
      },
    };

    // 🔧 Storybook 8.x 호환성을 위한 define 설정 추가
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      // Storybook 8.x의 필수 글로벌 변수들 미리 정의
      '__STORYBOOK_PREVIEW_API__': 'window.__STORYBOOK_PREVIEW_API__',
      '__STORYBOOK_MODULE_PREVIEW_API__': 'window.__STORYBOOK_MODULE_PREVIEW_API__'
    };
    
    return config;
  },
  
  docs: {
    autodocs: true,
  },

  // 🔧 Storybook 8.x 프리빌드 최적화 설정 추가
  previewHead: (head) => `
    ${head}
    <script>
      // Storybook 8.x 필수 글로벌 변수 초기화
      if (typeof window !== 'undefined') {
        window.__STORYBOOK_PREVIEW_API__ = window.__STORYBOOK_PREVIEW_API__ || {};
        window.__STORYBOOK_MODULE_PREVIEW_API__ = window.__STORYBOOK_MODULE_PREVIEW_API__ || {};
      }
    </script>
  `,
};

module.exports = config; 