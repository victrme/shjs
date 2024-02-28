var sh_caml = (() => {
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
  var caml_exports = {};
  __export(caml_exports, {
    default: () => caml_default
  });
  var caml_default = [
    [
      [/\b(?:external|open|include|[A-Z][\w']*(?=\.))\b/g, "sh_preproc", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 1],
      [
        /\b(?:and|as|assert|asr|begin|class|closed|constraint|do|done|downto|else|end|exception|false|for|fun|function|functor|if|in|inherit|initializer|land|lazy|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|object|of|or|parser|private|rec|sig|struct|then|to|true|try|type|val|virtual|when|while|with)\b/g,
        "sh_keyword",
        -1
      ],
      [/\(\*/g, "sh_comment", 2],
      [
        /\b(?:[A-Z][\w']*(?!\.)|int|int32|int64|nativeint|bool|char|exn|option|float|unit|string|list|array|ref|format|format4|lazy_t|in_channel|out_channel)\b/g,
        "sh_type",
        -1
      ],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1]
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
  return __toCommonJS(caml_exports);
})();
