import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

export default {
  input: 'src/main.js',
  output: [
    {
      file: pkg.main,
      format: 'iife',
      name: 'GSheetReader',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      name: 'GSheetReader',
      sourcemap: true,
    },
  ],
  plugins: [terser()],
};
