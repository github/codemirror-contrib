import CodeMirror from "codemirror/lib/codemirror"
import "codemirror/lib/mode/meta"

CodeMirror.modeInfo = CodeMirror.modeInfo.concat([
  {name: "ABAP", mime: "text/abap", mode: "abap", ext: ["abap"]}
])
