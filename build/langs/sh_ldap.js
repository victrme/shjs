var sh_ldap = (() => {
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
  var ldap_exports = {};
  __export(ldap_exports, {
    default: () => ldap_default
  });
  var ldap_default = [
    [
      [/#/g, "sh_comment", 1],
      [/(\b[A-Za-z0-9_]+:)((?:[^,=]*$)?)/g, ["sh_keyword", "sh_string"], -1],
      [
        /([A-Za-z0-9_]+)(=)([^,]+)(,?)/g,
        ["sh_attribute", "sh_symbol", "sh_string", "sh_symbol"],
        -1
      ]
    ],
    [[/$/g, null, -2]]
  ];
  return __toCommonJS(ldap_exports);
})();
