import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    // Node.js 22 호환성을 위한 최적화
    config.server = config.server || {};
    config.server.fs = {
      strict: false,
      allow: ['..'],
    };
    
    // 메모리 사용량 최적화
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      'react',
      'react-dom',
      '@storybook/react',
    ];
    
    // 청크 크기 제한 늘리기
    config.build = config.build || {};
    config.build.chunkSizeWarningLimit = 4000;
    config.build.target = 'esnext';
    config.build.minify = 'esbuild';
    
    // 매뉴얼 청크 설정 - 메모리 효율성 개선
    config.build.rollupOptions = {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@storybook')) {
              return 'storybook-vendor';
            }
            if (id.includes('react') || id.includes('scheduler') || id.includes('prop-types')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
      },
    };
    
    // Node.js 22 메모리 관리 최적화
    config.define = config.define || {};
    config.define['process.env.NODE_OPTIONS'] = JSON.stringify('--max-old-space-size=4096');
    
    return config;
  },
};

export default config; 