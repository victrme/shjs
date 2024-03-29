var sh_tcl = (() => {
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
  var tcl_exports = {};
  __export(tcl_exports, {
    default: () => tcl_default
  });
  var tcl_default = [
    [
      [/#/g, "sh_comment", 1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 2],
      [/'/g, "sh_string", 3],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1],
      [
        /\b(?:proc|global|upvar|if|then|else|elseif|for|foreach|break|continue|while|set|eval|case|in|switch|default|exit|error|proc|return|uplevel|loop|for_array_keys|for_recursive_glob|for_file|unwind_protect|expr|catch|namespace|rename|variable|method|itcl_class|public|protected|append|binary|format|re_syntax|regexp|regsub|scan|string|subst|concat|join|lappend|lindex|list|llength|lrange|lreplace|lsearch|lset|lsort|split|expr|incr|close|eof|fblocked|fconfigure|fcopy|file|fileevent|flush|gets|open|puts|read|seek|socket|tell|load|loadTk|package|pgk::create|pgk_mkIndex|source|bgerror|history|info|interp|memory|unknown|enconding|http|msgcat|cd|clock|exec|exit|glob|pid|pwd|time|dde|registry|resource)\b/g,
        "sh_keyword",
        -1
      ],
      [/\$[A-Za-z0-9_]+/g, "sh_variable", -1]
    ],
    [[/$/g, null, -2]],
    [
      [/"/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ],
    [
      [/'/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ]
  ];
  return __toCommonJS(tcl_exports);
})();
