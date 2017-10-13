import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import string from 'rollup-plugin-string';

export default {
  input: 'browser.js',
  plugins: [
    nodeResolve({
      module: true,
      jsnext: true,
    }),
    commonjs(),
    string({
      include: '**/*.cow',
    }),
  ],
  name: 'yodasay',
  output: [
    { file: 'build/yodasay.umd.js', format: 'umd' },
    { file: 'build/yodasay.es.js', format: 'es' },
  ]
}
