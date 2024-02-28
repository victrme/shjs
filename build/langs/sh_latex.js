var sh_latex = (() => {
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
  var latex_exports = {};
  __export(latex_exports, {
    default: () => latex_default
  });
  var latex_default = [
    [
      [/%/g, "sh_comment", 1],
      [/&|~|\\[$_&{}~^%#`'"|\s\\]/g, "sh_symbol", -1],
      [/"/g, "sh_string", 2],
      [/``/g, "sh_string", 3],
      [/`/g, "sh_string", 4],
      [/\$\$|\\\[|\\\]/g, "sh_math", -1],
      [/\$/g, "sh_math", 5],
      [/\\textit/g, "sh_keyword", 6, 1],
      [/\\textbf/g, "sh_keyword", 9, 1],
      [/\\texttt/g, "sh_keyword", 12, 1],
      [/\\underline/g, "sh_keyword", 15, 1],
      [/\\[A-Za-z]+/g, "sh_keyword", -1],
      [/\*/g, "sh_symbol", -1],
      [/\{[ \t]*$/g, "sh_normal", -1],
      [/\[/g, "sh_optionalargument", 18],
      [/\{/g, "sh_argument", 19]
    ],
    [[/$/g, null, -2]],
    [
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/\\(?:\\|'')/g, null, -1],
      [/''/g, "sh_string", -2]
    ],
    [
      [/\\(?:\\|')/g, null, -1],
      [/'/g, "sh_string", -2]
    ],
    [
      [/\\(?:\\|\$)/g, null, -1],
      [/\$/g, "sh_math", -2]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_italics", 7]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_italics", 8],
      [/\}/g, "sh_italics", -3]
    ],
    [
      [/\\(?:\\|\})/g, null, -1],
      [/\}/g, "sh_italics", -2],
      [/\{/g, "sh_italics", 8]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_bold", 10]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_bold", 11],
      [/\}/g, "sh_bold", -3]
    ],
    [
      [/\\(?:\\|\})/g, null, -1],
      [/\}/g, "sh_bold", -2],
      [/\{/g, "sh_bold", 11]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_fixed", 13]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_fixed", 14],
      [/\}/g, "sh_fixed", -3]
    ],
    [
      [/\\(?:\\|\})/g, null, -1],
      [/\}/g, "sh_fixed", -2],
      [/\{/g, "sh_fixed", 14]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_underline", 16]
    ],
    [
      [/$/g, null, -2],
      [/\{/g, "sh_underline", 17],
      [/\}/g, "sh_underline", -3]
    ],
    [
      [/\\(?:\\|\})/g, null, -1],
      [/\}/g, "sh_underline", -2],
      [/\{/g, "sh_underline", 17]
    ],
    [
      [/$/g, null, -2],
      [/\\(?:\\|\])/g, null, -1],
      [/\]/g, "sh_optionalargument", -2]
    ],
    [
      [/\\(?:\\|\})/g, null, -1],
      [/\}/g, "sh_argument", -2],
      [/\{/g, "sh_argument", 19]
    ]
  ];
  return __toCommonJS(latex_exports);
})();
