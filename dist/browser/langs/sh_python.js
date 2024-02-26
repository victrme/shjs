var sh_python = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var python_exports = {};
  __export(python_exports, {
    default: () => python_default
  });
  var python_default = [
    [
      [/\b(?:import|from)\b/g, "sh_preproc", -1],
      [/#/g, "sh_comment", 1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [
        /\b(?:and|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|global|if|in|is|lambda|not|or|pass|print|raise|return|try|while)\b/g,
        "sh_keyword",
        -1
      ],
      [/^(?:[\s]*'{3})/g, "sh_comment", 2],
      [/^(?:[\s]*\"{3})/g, "sh_comment", 3],
      [/^(?:[\s]*'(?:[^\\']|\\.)*'[\s]*|[\s]*\"(?:[^\\\"]|\\.)*\"[\s]*)$/g, "sh_comment", -1],
      [/(?:[\s]*'{3})/g, "sh_string", 4],
      [/(?:[\s]*\"{3})/g, "sh_string", 5],
      [/"/g, "sh_string", 6],
      [/'/g, "sh_string", 7],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\||\{|\}/g, "sh_symbol", -1],
      [/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1]
    ],
    [[/$/g, null, -2]],
    [[/(?:'{3})/g, "sh_comment", -2]],
    [[/(?:\"{3})/g, "sh_comment", -2]],
    [[/(?:'{3})/g, "sh_string", -2]],
    [[/(?:\"{3})/g, "sh_string", -2]],
    [
      [/$/g, null, -2],
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/$/g, null, -2],
      [/\\(?:\\|')/g, null, -1],
      [/'/g, "sh_string", -2]
    ]
  ];
  return __toCommonJS(python_exports);
})();
