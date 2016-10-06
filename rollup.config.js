import buble from 'rollup-plugin-buble'

export default {
  format: 'umd',
  external: [
    'codemirror/lib/codemirror',
    'codemirror/mode/meta'
  ],
  globals: {
    'codemirror/lib/codemirror': 'CodeMirror',
    'codemirror/mode/meta': 'undefined'
  },
  paths: {
    'codemirror': 'codemirror/lib/codemirror'
  },
  plugins: [buble()]
}
