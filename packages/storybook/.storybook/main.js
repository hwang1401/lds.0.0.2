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

    // 빌드 성능 최적화 - esbuild 사용으로 변경
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 2000, // 경고 임계값 증가
      sourcemap: false,
      minify: 'esbuild', // terser 대신 esbuild 사용 (더 빠름)
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
            // node_modules의 큰 라이브러리들 분리
            if (id.includes('node_modules')) {
              return 'vendor';
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
      '__STORYBOOK_PREVIEW_API__': 'globalThis.__STORYBOOK_PREVIEW_API__',
      '__STORYBOOK_MODULE_PREVIEW_API__': 'globalThis.__STORYBOOK_MODULE_PREVIEW_API__',
      'global': 'globalThis' // Vercel 환경에서 global 객체 문제 해결
    };

    // Vercel 빌드 환경에서 메모리 최적화 - esbuild 옵션
    if (process.env.VERCEL) {
      config.esbuild = {
        ...config.esbuild,
        drop: ['console', 'debugger'], // console과 debugger 제거
        legalComments: 'none', // 라이센스 주석 제거
      };
    }
    
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
      (function() {
        if (typeof globalThis !== 'undefined') {
          globalThis.__STORYBOOK_PREVIEW_API__ = globalThis.__STORYBOOK_PREVIEW_API__ || {};
          globalThis.__STORYBOOK_MODULE_PREVIEW_API__ = globalThis.__STORYBOOK_MODULE_PREVIEW_API__ || {};
          // 호환성을 위해 window 객체에도 설정
          if (typeof window !== 'undefined') {
            window.__STORYBOOK_PREVIEW_API__ = globalThis.__STORYBOOK_PREVIEW_API__;
            window.__STORYBOOK_MODULE_PREVIEW_API__ = globalThis.__STORYBOOK_MODULE_PREVIEW_API__;
          }
        }
      })();
    </script>
  `,
};

module.exports = config; 