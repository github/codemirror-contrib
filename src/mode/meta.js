import CodeMirror from "codemirror/lib/codemirror"
import "./abap/abap"

CodeMirror.modeInfo = CodeMirror.modeInfo.concat([
  {name: "ABAP", mime: "text/abap", mode: "abap", ext: ["abap"]}
])
