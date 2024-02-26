var sh_changelog = (() => {
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
  var changelog_exports = {};
  __export(changelog_exports, {
    default: () => changelog_default
  });
  var changelog_default = [
    [
      [/[\d]{2,4}-?[\d]{2}-?[\d]{2}/g, "sh_date", 1, 1],
      [
        /(^[ \t]+)(\*)([ \t]+)((?:[^:]+\:)?)/g,
        ["sh_normal", "sh_symbol", "sh_normal", "sh_file"],
        -1
      ],
      [/(^[ \t]+)((?:[^:]+\:)?)/g, ["sh_normal", "sh_file"], -1]
    ],
    [
      [/$/g, null, -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/(?:[A-Za-z0-9_]|[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-])+/g, "sh_name", -1]
    ]
  ];
  return __toCommonJS(changelog_exports);
})();
