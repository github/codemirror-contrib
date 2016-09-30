// converted to JavaScript from https://github.com/larshp/codemirror-abap
// Author: Lars Hvam
// Original Author: Lars Hvam

import CodeMirror from "codemirror/lib/codemirror";

CodeMirror.defineMode("abap", function() {
  const COMMENT  = "comment";
  const STRING   = "string";
  const NUMBER   = "number";
  const KEYWORD  = "keyword";
  const OPERATOR = "operator";
  const ERROR    = "error";

  function setupKeywords(str) {
    let list = str.split(" ");
    let ret = {};
    for (let i = 0; i < list.length; ++i) {
      ret[list[i]] = true;
    }
    return ret;
  }

  var keywords = setupKeywords("IS NOT EQ GE GT REF");

  function isKeyword(stream) {
    let next = stream.next();
    let back = 0;
    while (true) {
      if (!next) {
        break;
      } else if (next === " " || next === "." || next === "," || next === ":") {
        stream.backUp(1);
        break;
      } else {
        back++;
      }
      next = stream.next();
    }

    let match = keywords.propertyIsEnumerable(stream.current().toUpperCase());
    if (match === false) {
      stream.backUp(back);
    }
    return match;
  }

  function isOperator(str) {
    const OPERATORS = "?= = > <> < + - * / &&";

    str = str.trim();

    let list = OPERATORS.split(" ");

    for (let i = 0; i < list.length; i++) {
      if (str === list[i]) {
        return true;
      }
    }
    return false;
  }

  return {
    startState: function() {
      return {
        mode: false
      };
    },
    token: function(stream, state) {
      if (stream.eatSpace()) {
        return undefined;
      }

      if (isKeyword(stream)) {
        return KEYWORD;
      } else if (stream.match(/^\d+( |\.|$)/, false)) {
        stream.match(/^\d+/);
        return NUMBER;
      } else if (stream.match(/^##\w+/)) {
// pragmas
        return COMMENT;
      }

      let ch = stream.next();
      let peek = stream.peek();
      if (peek === undefined) {
        peek = "";
      }

      if ((ch === "*" && stream.column() === 0) || ch === "\"") {
        stream.skipToEnd();
        return COMMENT;
      } else if (isOperator(ch + peek)) {
        if (peek !== " ") {
          stream.next();
        }
        return OPERATOR;
      } else if (ch === "\'") {
        let next = "";
        while (next !== undefined) {
          if (next === "\'") {
            state.mode = false;
            break;
          }
          next = stream.next();
        }
        return STRING;
      } else if (ch === "|") {
        let next = "";
        while (next !== undefined) {
          if (next === "|") {
            state.mode = false;
            break;
          }
          next = stream.next();
        }
        return STRING;
      } else {
        stream.eatWhile(/(\w|<|>)/);
        return ERROR;
      }
    }
  };
});

CodeMirror.defineMIME("text/abap", "abap");