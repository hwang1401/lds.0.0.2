import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createRollupConfig(packageDir) {
  const require = createRequire(import.meta.url);
  const pkg = require(path.join(packageDir, 'package.json'));

  return {
    input: 'src/index.ts',
    external: [
      'react',
      'react-dom',
      '@lumir/shared'
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/types'
      }),
      postcss({
        extract: 'styles.css',
        minimize: true,
        modules: {
          generateScopedName: '[local]'
        }
      })
    ]
  };
} 