var sh_diff = (() => {
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
  var diff_exports = {};
  __export(diff_exports, {
    default: () => diff_default
  });
  var diff_default = [
    [
      [/(?=^[-]{3})/g, "sh_oldfile", 1, 1],
      [/(?=^[*]{3})/g, "sh_oldfile", 3, 1],
      [/(?=^[\d])/g, "sh_difflines", 6, 1]
    ],
    [
      [/^[-]{3}/g, "sh_oldfile", 2],
      [/^[-]/g, "sh_oldfile", 2],
      [/^[+]/g, "sh_newfile", 2],
      [/^@@/g, "sh_difflines", 2]
    ],
    [[/$/g, null, -2]],
    [
      [/^[*]{3}[ \t]+[\d]/g, "sh_oldfile", 4],
      [/^[*]{3}/g, "sh_oldfile", 2],
      [/^[-]{3}[ \t]+[\d]/g, "sh_newfile", 5],
      [/^[-]{3}/g, "sh_newfile", 2]
    ],
    [
      [/^[\s]/g, "sh_normal", 2],
      [/(?=^[-]{3})/g, "sh_newfile", -2]
    ],
    [
      [/^[\s]/g, "sh_normal", 2],
      [/(?=^[*]{3})/g, "sh_newfile", -2],
      [/^diff/g, "sh_normal", 2]
    ],
    [
      [/^[\d]/g, "sh_difflines", 2],
      [/^[<]/g, "sh_oldfile", 2],
      [/^[>]/g, "sh_newfile", 2]
    ]
  ];
  return __toCommonJS(diff_exports);
})();
