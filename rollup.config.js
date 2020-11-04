import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/gsheetreader.min.js',
    format: 'iife',
    name: 'GSheetReader',
    plugins: [terser()],
  },
};
