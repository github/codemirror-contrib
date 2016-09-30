import CodeMirror from "codemirror/lib/codemirror"
import * as ABAP from "./abap/abap.js";

CodeMirror.modeInfo = CodeMirror.modeInfo.concat([
  {name: "ABAP", mime: "text/abap", mode: "abap", ext: ["abap"]},
])
