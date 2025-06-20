import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

/**
 * 공통 Rollup 설정
 * 모든 시스템 패키지에서 사용할 수 있는 기본 설정
 */
export default function createRollupConfig(options = {}) {
  const {
    input = 'src/index.ts',
    outputDir = 'dist',
    packageName = 'lumir-design-system',
    tsconfig = './tsconfig.json'
  } = options;

  return {
    input,
    output: [
      {
        file: `${outputDir}/index.js`,
        format: 'cjs',
        sourcemap: false,
        exports: 'named'
      },
      {
        file: `${outputDir}/index.esm.js`,
        format: 'esm',
        sourcemap: false
      }
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'lumir-design-system-shared'
    ],
    plugins: [
      typescript({
        tsconfig,
        declaration: true,
        declarationDir: `${outputDir}/types`
      }),
      postcss({
        extract: 'styles.css',
        minimize: true,
        modules: true
      })
    ]
  };
} 