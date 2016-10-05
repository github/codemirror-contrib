import buble from 'rollup-plugin-buble'

export default {
  format: 'umd',
  external: [
    'codemirror/lib/codemirror',
    'codemirror/lib/mode/meta'
  ],
  paths: {
    'codemirror': 'codemirror/lib/codemirror'
  },
  plugins: [buble()]
}
