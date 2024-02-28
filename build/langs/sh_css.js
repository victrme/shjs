var sh_css = (() => {
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
  var css_exports = {};
  __export(css_exports, {
    default: () => css_default
  });
  var css_default = [
    [
      [/\/\/\//g, "sh_comment", 1],
      [/\/\//g, "sh_comment", 7],
      [/\/\*\*/g, "sh_comment", 8],
      [/\/\*/g, "sh_comment", 9],
      [/(?:\.|#)[A-Za-z0-9_-]+/g, "sh_selector", -1],
      [/\{/g, "sh_cbracket", 10, 1],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1]
    ],
    [
      [/$/g, null, -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 2, 1],
      [/<!DOCTYPE/g, "sh_preproc", 4, 1],
      [/<!--/g, "sh_comment", 5],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 6, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 6, 1],
      [/@[A-Za-z]+/g, "sh_type", -1],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/\?>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 3]
    ],
    [
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 3]
    ],
    [
      [/-->/g, "sh_comment", -2],
      [/<!--/g, "sh_comment", 5]
    ],
    [
      [/(?:\/)?>/g, "sh_keyword", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 3]
    ],
    [[/$/g, null, -2]],
    [
      [/\*\//g, "sh_comment", -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 2, 1],
      [/<!DOCTYPE/g, "sh_preproc", 4, 1],
      [/<!--/g, "sh_comment", 5],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 6, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 6, 1],
      [/@[A-Za-z]+/g, "sh_type", -1],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/\*\//g, "sh_comment", -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/\}/g, "sh_cbracket", -2],
      [/\/\/\//g, "sh_comment", 1],
      [/\/\//g, "sh_comment", 7],
      [/\/\*\*/g, "sh_comment", 8],
      [/\/\*/g, "sh_comment", 9],
      [/[A-Za-z0-9_-]+[ \t]*:/g, "sh_property", -1],
      [/[.%A-Za-z0-9_-]+/g, "sh_value", -1],
      [/#(?:[A-Za-z0-9_]+)/g, "sh_string", -1]
    ]
  ];
  return __toCommonJS(css_exports);
})();
