import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'GSheetReader',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [nodeResolve({ browser: true }), commonjs(), terser()],
  },
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [nodePolyfills(), nodeResolve(), commonjs(), terser()],
  },
];
