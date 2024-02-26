var sh_makefile = (() => {
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
  var makefile_exports = {};
  __export(makefile_exports, {
    default: () => makefile_default
  });
  var makefile_default = [
    [
      [/^[a-zA-Z0-9_-]+[\s]*=/g, "sh_type", -1],
      [/^\.[a-zA-Z0-9_-]+[\s]*:|@(?:.+)@/g, "sh_preproc", -1],
      [/^(?:[A-Za-z0-9_.\s-])+:/g, "sh_symbol", -1],
      [/%[a-zA-Z0-9_.-]+:%[a-zA-Z0-9_.-]+/g, "sh_string", -1],
      [/(?:[A-Za-z0-9_-]*)\.(?:[A-Za-z0-9_-]+)/g, "sh_normal", -1],
      [/\b(?:import)\b/g, "sh_preproc", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/\\"|\\'/g, "sh_normal", -1],
      [/"/g, "sh_string", 1],
      [/'/g, "sh_string", 2],
      [
        /function[ \t]+(?:[A-Za-z]|_)[A-Za-z0-9_]*[ \t]*(?:\(\))?|(?:[A-Za-z]|_)[A-Za-z0-9_]*[ \t]*\(\)/g,
        "sh_function",
        -1
      ],
      [/(?:[A-Za-z]*[-\/]+[A-Za-z]+)+/g, "sh_normal", -1],
      [
        /\b(?:alias|bg|bind|break|builtin|caller|case|command|compgen|complete|continue|declare|dirs|disown|do|done|elif|else|enable|esac|eval|exec|exit|export|false|fc|fg|fi|for|getopts|hash|help|history|if|in|jobs|let|local|logout|popd|printf|pushd|read|readonly|return|select|set|shift|shopt|source|suspend|test|then|times|trap|true|type|typeset|umask|unalias|unset|until|wait|while)\b/g,
        "sh_keyword",
        -1
      ],
      [
        /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?==)|\$\{(?:[^ \t]+)\}|\$\((?:[^ \t]+)\)|\$(?:[A-Za-z]|_)[A-Za-z0-9_]*|\$(?:[^ \t]{1})/g,
        "sh_variable",
        -1
      ],
      [
        /~|!|%|\^|\*|\(|\)|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\||%%|(?:##){2}(?!#)/g,
        "sh_symbol",
        -1
      ],
      [/#/g, "sh_comment", 3]
    ],
    [
      [/"/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ],
    [
      [/'/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ],
    [[/$/g, null, -2]]
  ];
  return __toCommonJS(makefile_exports);
})();
