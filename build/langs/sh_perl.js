var sh_perl = (() => {
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
  var perl_exports = {};
  __export(perl_exports, {
    default: () => perl_default
  });
  var perl_default = [
    [
      [/\b(?:import)\b/g, "sh_preproc", -1],
      [
        /(s)(\{(?:\\\}|[^}])*\}\{(?:\\\}|[^}])*\})([ixsmogce]*)/g,
        ["sh_keyword", "sh_regexp", "sh_keyword"],
        -1
      ],
      [
        /(s)(\((?:\\\)|[^)])*\)\((?:\\\)|[^)])*\))([ixsmogce]*)/g,
        ["sh_keyword", "sh_regexp", "sh_keyword"],
        -1
      ],
      [
        /(s)(\[(?:\\\]|[^\]])*\]\[(?:\\\]|[^\]])*\])([ixsmogce]*)/g,
        ["sh_keyword", "sh_regexp", "sh_keyword"],
        -1
      ],
      [/(s)(<.*><.*>)([ixsmogce]*)/g, ["sh_keyword", "sh_regexp", "sh_keyword"], -1],
      [/(q(?:q?))(\{(?:\\\}|[^}])*\})/g, ["sh_keyword", "sh_string"], -1],
      [/(q(?:q?))(\((?:\\\)|[^)])*\))/g, ["sh_keyword", "sh_string"], -1],
      [/(q(?:q?))(\[(?:\\\]|[^\]])*\])/g, ["sh_keyword", "sh_string"], -1],
      [/(q(?:q?))(<.*>)/g, ["sh_keyword", "sh_string"], -1],
      [/(q(?:q?))([^A-Za-z0-9 \t])(.*\2)/g, ["sh_keyword", "sh_string", "sh_string"], -1],
      [
        /(s)([^A-Za-z0-9 \t])(.*\2.*\2)([ixsmogce]*(?=[ \t]*(?:\)|;)))/g,
        ["sh_keyword", "sh_regexp", "sh_regexp", "sh_keyword"],
        -1
      ],
      [
        /(s)([^A-Za-z0-9 \t])(.*\2[ \t]*)([^A-Za-z0-9 \t])(.*\4)([ixsmogce]*(?=[ \t]*(?:\)|;)))/g,
        ["sh_keyword", "sh_regexp", "sh_regexp", "sh_regexp", "sh_regexp", "sh_keyword"],
        -1
      ],
      [/#/g, "sh_comment", 1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/(?:m|qr)(?=\{)/g, "sh_keyword", 2],
      [/(?:m|qr)(?=#)/g, "sh_keyword", 4],
      [/(?:m|qr)(?=\|)/g, "sh_keyword", 6],
      [/(?:m|qr)(?=@)/g, "sh_keyword", 8],
      [/(?:m|qr)(?=<)/g, "sh_keyword", 10],
      [/(?:m|qr)(?=\[)/g, "sh_keyword", 12],
      [/(?:m|qr)(?=\\)/g, "sh_keyword", 14],
      [/(?:m|qr)(?=\/)/g, "sh_keyword", 16],
      [/"/g, "sh_string", 18],
      [/'/g, "sh_string", 19],
      [/</g, "sh_string", 20],
      [/\/[^\n]*\//g, "sh_string", -1],
      [
        /\b(?:chomp|chop|chr|crypt|hex|i|index|lc|lcfirst|length|oct|ord|pack|q|qq|reverse|rindex|sprintf|substr|tr|uc|ucfirst|m|s|g|qw|abs|atan2|cos|exp|hex|int|log|oct|rand|sin|sqrt|srand|my|local|our|delete|each|exists|keys|values|pack|read|syscall|sysread|syswrite|unpack|vec|undef|unless|return|length|grep|sort|caller|continue|dump|eval|exit|goto|last|next|redo|sub|wantarray|pop|push|shift|splice|unshift|split|switch|join|defined|foreach|last|chop|chomp|bless|dbmclose|dbmopen|ref|tie|tied|untie|while|next|map|eq|die|cmp|lc|uc|and|do|if|else|elsif|for|use|require|package|import|chdir|chmod|chown|chroot|fcntl|glob|ioctl|link|lstat|mkdir|open|opendir|readlink|rename|rmdir|stat|symlink|umask|unlink|utime|binmode|close|closedir|dbmclose|dbmopen|die|eof|fileno|flock|format|getc|print|printf|read|readdir|rewinddir|seek|seekdir|select|syscall|sysread|sysseek|syswrite|tell|telldir|truncate|warn|write|alarm|exec|fork|getpgrp|getppid|getpriority|kill|pipe|qx|setpgrp|setpriority|sleep|system|times|x|wait|waitpid)\b/g,
        "sh_keyword",
        -1
      ],
      [/^\=(?:head1|head2|item)/g, "sh_comment", 21],
      [/(?:\$[#]?|@|%)[\/A-Za-z0-9_]+/g, "sh_variable", -1],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1],
      [/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1]
    ],
    [[/$/g, null, -2]],
    [[/\{/g, "sh_regexp", 3]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\\{|\\\}|\}/g, "sh_regexp", -3]
    ],
    [[/#/g, "sh_regexp", 5]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\#|#/g, "sh_regexp", -3]
    ],
    [[/\|/g, "sh_regexp", 7]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\\||\|/g, "sh_regexp", -3]
    ],
    [[/@/g, "sh_regexp", 9]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\@|@/g, "sh_regexp", -3]
    ],
    [[/</g, "sh_regexp", 11]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\<|\\>|>/g, "sh_regexp", -3]
    ],
    [[/\[/g, "sh_regexp", 13]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\]|\]/g, "sh_regexp", -3]
    ],
    [[/\\/g, "sh_regexp", 15]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\\\|\\/g, "sh_regexp", -3]
    ],
    [[/\//g, "sh_regexp", 17]],
    [
      [/[ \t]+#.*/g, "sh_comment", -1],
      [/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g, "sh_variable", -1],
      [/\\\/|\//g, "sh_regexp", -3]
    ],
    [
      [/$/g, null, -2],
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/$/g, null, -2],
      [/\\(?:\\|')/g, null, -1],
      [/'/g, "sh_string", -2]
    ],
    [
      [/$/g, null, -2],
      [/>/g, "sh_string", -2]
    ],
    [[/\=cut/g, "sh_comment", -2]]
  ];
  return __toCommonJS(perl_exports);
})();
