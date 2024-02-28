var sh_xorg = (() => {
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
  var xorg_exports = {};
  __export(xorg_exports, {
    default: () => xorg_default
  });
  var xorg_default = [
    [
      [/#/g, "sh_comment", 1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 2],
      [/'/g, "sh_string", 3],
      [/\b(?:End)?(?:Sub)*Section\b/g, "sh_keyword", -1],
      [/[A-Za-z0-9_]+/g, "sh_type", -1]
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
  return __toCommonJS(xorg_exports);
})();
