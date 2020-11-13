import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'GSheetReader',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [terser()],
  },
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [terser()],
  },
];
