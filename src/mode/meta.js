import CodeMirror from "codemirror/lib/codemirror"

CodeMirror.modeInfo = CodeMirror.modeInfo.concat([
  {name: "ABAP", mime: "text/abap", mode: "abap", ext: ["abap"]}
])
