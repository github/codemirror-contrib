import buble from 'rollup-plugin-buble'

export default {
  format: 'umd',
  external: [
    'codemirror/lib/codemirror'
  ],
  paths: {
    'codemirror': 'codemirror/lib/codemirror'
  },
  plugins: [buble()]
}
