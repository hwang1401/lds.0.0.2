import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: false,
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
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
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types'
    }),
    postcss({
      extract: 'styles.css',
      minimize: true,
      modules: true
    })
  ]
}; 