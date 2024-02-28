var sh_sml = (() => {
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
  var sml_exports = {};
  __export(sml_exports, {
    default: () => sml_default
  });
  var sml_default = [
    [
      [/\b(?:external|open|include|[A-Z][\w']*(?=\.))\b/g, "sh_preproc", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 1],
      [/\(\*/g, "sh_comment", 2],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1],
      [
        /\b(?:abstraction|abstype|and|andalso|as|before|case|datatype|do|else|end|eqtype|exception|fn|fun|functor|handle|if|in|include|infix|infixr|let|local|nonfix|o|of|op|open|orelse|overload|raise|rec|sharing|sig|signature|struct|structure|then|type|val|where|while|with|withtype)\b/g,
        "sh_keyword",
        -1
      ],
      [/\b(?:int|byte|boolean|char|long|float|double|short|void)\b/g, "sh_type", -1]
    ],
    [
      [/$/g, null, -2],
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/\*\)/g, "sh_comment", -2],
      [/\(\*/g, "sh_comment", 2]
    ]
  ];
  return __toCommonJS(sml_exports);
})();
