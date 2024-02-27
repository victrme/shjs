(() => {
  var sh_bison = [
    [
      [/^%\{/g, "sh_preproc", 1, 1],
      [/^%[sx]/g, "sh_preproc", 16, 1],
      [/^%option/g, "sh_preproc", 17, 1],
      [/^%(?:array|pointer|[aceknopr])/g, "sh_preproc", -1],
      [/[A-Za-z_][A-Za-z0-9_-]*/g, "sh_preproc", 19, 1],
      [/^%%/g, "sh_preproc", 20, 1]
    ],
    [
      [/^%\}/g, "sh_preproc", -2],
      [
        /(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,
        ["sh_keyword", "sh_normal", "sh_classname"],
        -1
      ],
      [
        /\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,
        "sh_keyword",
        -1
      ],
      [/\/\/\//g, "sh_comment", 2],
      [/\/\//g, "sh_comment", 8],
      [/\/\*\*/g, "sh_comment", 9],
      [/\/\*/g, "sh_comment", 10],
      [/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g, ["sh_keyword", "sh_normal", "sh_classname"], -1],
      [/^[ \t]*#(?:[ \t]*include)/g, "sh_preproc", 11, 1],
      [/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g, "sh_preproc", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 14],
      [/'/g, "sh_string", 15],
      [
        /\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,
        "sh_keyword",
        -1
      ],
      [
        /\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,
        "sh_type",
        -1
      ],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1],
      [/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1],
      [
        /([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,
        ["sh_usertype", "sh_usertype", "sh_normal"],
        -1
      ]
    ],
    [
      [/$/g, null, -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 3, 1],
      [/<!DOCTYPE/g, "sh_preproc", 5, 1],
      [/<!--/g, "sh_comment", 6],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 7, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 7, 1],
      [/@[A-Za-z]+/g, "sh_type", -1],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/\?>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 4]
    ],
    [
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 4]
    ],
    [
      [/-->/g, "sh_comment", -2],
      [/<!--/g, "sh_comment", 6]
    ],
    [
      [/(?:\/)?>/g, "sh_keyword", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 4]
    ],
    [[/$/g, null, -2]],
    [
      [/\*\//g, "sh_comment", -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 3, 1],
      [/<!DOCTYPE/g, "sh_preproc", 5, 1],
      [/<!--/g, "sh_comment", 6],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 7, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 7, 1],
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
      [/$/g, null, -2],
      [/</g, "sh_string", 12],
      [/"/g, "sh_string", 13],
      [/\/\/\//g, "sh_comment", 2],
      [/\/\//g, "sh_comment", 8],
      [/\/\*\*/g, "sh_comment", 9],
      [/\/\*/g, "sh_comment", 10]
    ],
    [
      [/$/g, null, -2],
      [/>/g, "sh_string", -2]
    ],
    [
      [/$/g, null, -2],
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/"/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ],
    [
      [/'/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ],
    [
      [/$/g, null, -2],
      [/[A-Za-z_][A-Za-z0-9_-]*/g, "sh_function", -1]
    ],
    [
      [/$/g, null, -2],
      [/[A-Za-z_][A-Za-z0-9_-]*/g, "sh_keyword", -1],
      [/"/g, "sh_string", 18],
      [/=/g, "sh_symbol", -1]
    ],
    [
      [/$/g, null, -2],
      [/"/g, "sh_string", -2]
    ],
    [
      [/$/g, null, -2],
      [/\{[A-Za-z_][A-Za-z0-9_-]*\}/g, "sh_type", -1],
      [/"/g, "sh_string", 13],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1]
    ],
    [
      [/^%%/g, "sh_preproc", 21, 1],
      [/<[A-Za-z_][A-Za-z0-9_-]*>/g, "sh_function", -1],
      [/"/g, "sh_string", 13],
      [/\\./g, "sh_preproc", -1],
      [/\{[A-Za-z_][A-Za-z0-9_-]*\}/g, "sh_type", -1],
      [/\/\*/g, "sh_comment", 22],
      [/\{/g, "sh_cbracket", 23, 1],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1]
    ],
    [
      [
        /(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,
        ["sh_keyword", "sh_normal", "sh_classname"],
        -1
      ],
      [
        /\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,
        "sh_keyword",
        -1
      ],
      [/\/\/\//g, "sh_comment", 2],
      [/\/\//g, "sh_comment", 8],
      [/\/\*\*/g, "sh_comment", 9],
      [/\/\*/g, "sh_comment", 10],
      [/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g, ["sh_keyword", "sh_normal", "sh_classname"], -1],
      [/^[ \t]*#(?:[ \t]*include)/g, "sh_preproc", 11, 1],
      [/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g, "sh_preproc", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 14],
      [/'/g, "sh_string", 15],
      [
        /\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,
        "sh_keyword",
        -1
      ],
      [
        /\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,
        "sh_type",
        -1
      ],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1],
      [/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1],
      [
        /([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,
        ["sh_usertype", "sh_usertype", "sh_normal"],
        -1
      ]
    ],
    [
      [/\*\//g, "sh_comment", -2],
      [/\/\*/g, "sh_comment", 22]
    ],
    [
      [/\}/g, "sh_cbracket", -2],
      [/\{/g, "sh_cbracket", 23, 1],
      [/\$./g, "sh_variable", -1],
      [
        /(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,
        ["sh_keyword", "sh_normal", "sh_classname"],
        -1
      ],
      [
        /\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,
        "sh_keyword",
        -1
      ],
      [/\/\/\//g, "sh_comment", 2],
      [/\/\//g, "sh_comment", 8],
      [/\/\*\*/g, "sh_comment", 9],
      [/\/\*/g, "sh_comment", 10],
      [/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g, ["sh_keyword", "sh_normal", "sh_classname"], -1],
      [/^[ \t]*#(?:[ \t]*include)/g, "sh_preproc", 11, 1],
      [/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g, "sh_preproc", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ],
      [/"/g, "sh_string", 14],
      [/'/g, "sh_string", 15],
      [
        /\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,
        "sh_keyword",
        -1
      ],
      [
        /\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,
        "sh_type",
        -1
      ],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [/\{|\}/g, "sh_cbracket", -1],
      [/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1],
      [
        /([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,
        ["sh_usertype", "sh_usertype", "sh_normal"],
        -1
      ]
    ]
  ];
})();