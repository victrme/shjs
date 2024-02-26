var sh_slang = (() => {
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
  var slang_exports = {};
  __export(slang_exports, {
    default: () => slang_default
  });
  var slang_default = [
    [
      [/#/g, "sh_comment", 1],
      [
        /\b(?:ERROR_BLOCK|EXECUTE_ERROR_BLOCK|EXIT_BLOCK|NULL|__tmp|_for|and|break|case|catch|chs|continue|define|do|else|else|exch|finally|for|foreach|forever|if|ifnot|loop|mod|mul2|not|or|orelse|pop|private|public|return|shl|shr|sign|sqr|static|struct|switch|then|throw|try|typedef|using|variable|while|xor)\b/g,
        "sh_keyword",
        -1
      ],
      [/%/g, "sh_comment", 1],
      [/"/g, "sh_string", 2],
      [/'/g, "sh_string", 3],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/~|!|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|&|<|>|\|/g, "sh_symbol", -1],
      [/\b(?:require)\b/g, "sh_preproc", -1],
      [/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1]
    ],
    [[/$/g, null, -2]],
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
  return __toCommonJS(slang_exports);
})();
