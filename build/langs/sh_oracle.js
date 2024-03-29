var sh_oracle = (() => {
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
  var oracle_exports = {};
  __export(oracle_exports, {
    default: () => oracle_default
  });
  var oracle_default = [
    [
      [
        /\b(?:VARCHAR|TINYINT|TEXT|DATE|SMALLINT|MEDIUMINT|INT|BIGINT|FLOAT|DOUBLE|DECIMAL|DATETIME|TIMESTAMP|TIME|YEAR|UNSIGNED|CHAR|TINYBLOB|TINYTEXT|BLOB|MEDIUMBLOB|MEDIUMTEXT|LONGBLOB|LONGTEXT|ENUM|BOOL|BINARY|VARBINARY|VARCHAR2|NUMBER)\b/gi,
        "sh_type",
        -1
      ],
      [
        /\b(?:ABORT|ACCEPT|ACCESS|ADD|ADMIN|AFTER|ALL|ALLOCATE|ALTER|ANALYZE|AND|ANY|ARCHIVE|ARCHIVELOG|ARRAY|ARRAYLEN|AS|ASC|ASSERT|ASSIGN|AT|AUDIT|AUTHORIZATION|AVG|BACKUP|BASE_TABLE|BECOME|BEFORE|BEGIN|BETWEEN|BINARY_INTEGER|BLOCK|BODY|BOOLEAN|BUFFER_POOL|BY|CACHE|CANCEL|CASCADE|CASE|CHANGE|CHAR|CHARACTER|CHAR_BASE|CHECK|CHECKPOINT|CLOSE|CLUSTER|CLUSTERS|COBOL|COLAUTH|COLUMN|COLUMNS|COMMENT|COMMIT|COMPILE|COMPRESS|CONNECT|CONSTANT|CONSTRAINT|CONSTRAINTS|CONTENTS|CONTINUE|CONTROLFILE|COUNT|CRASH|CREATE|CURRENT|CURRVAL|CURSOR|CYCLE|DATABASE|DATAFILE|DATA_BASE|DATE|DBA|DEBUGOFF|DEBUGON|DEC|DECIMAL|DECLARE|DEFAULT|DEFINITION|DELAY|DELETE|DELTA|DESC|DIGITS|DISABLE|DISMOUNT|DISPOSE|DISTINCT|DO|DOUBLE|DROP|DUMP|EACH|ELSE|ELSIF|ENABLE|END|ENTRY|ESCAPE|EVENTS|EXCEPT|EXCEPTION|EXCEPTIONS|EXCEPTION_INIT|EXCLUSIVE|EXEC|EXECUTE|EXISTS|EXIT|EXPLAIN|EXTENT|EXTERNALLY|FALSE|FETCH|FILE|FLOAT|FLUSH|FOR|FORCE|FOREIGN|FORM|FORTRAN|FOUND|FREELIST|FREELISTS|FROM|FUNCTION|GENERIC|GO|GOTO|GRANT|GROUP|GROUPS|HAVING|IDENTIFIED|IF|IMMEDIATE|IN|INCLUDING|INCREMENT|INDEX|INDEXES|INDICATOR|INITIAL|INITRANS|INSERT|INSTANCE|INT|INTEGER|INTERSECT|INTO|IS|KEY|LANGUAGE|LAYER|LEVEL|LIKE|LIMITED|LINK|LISTS|LOCK|LOGFILE|LOGGING|LONG|LOOP|MANAGE|MANUAL|MAX|MAXDATAFILES|MAXEXTENTS|MAXINSTANCES|MAXLOGFILES|MAXLOGHISTORY|MAXLOGMEMBERS|MAXTRANS|MAXVALUE|MIN|MINEXTENTS|MINUS|MINVALUE|MLSLABEL|MOD|MODE|MODIFY|MODULE|MONITORING|MOUNT|NATURAL|NEW|NEXT|NEXTVAL|NOARCHIVELOG|NOAUDIT|NOCACHE|NOCOMPRESS|NOCYCLE|NOMAXVALUE|NOMINVALUE|NOMONITORING|NONE|NOORDER|NOPARALLEL|NORESETLOGS|NORMAL|NOSORT|NOT|NOTFOUND|NOWAIT|NULL|NUMBER|NUMBER_BASE|NUMERIC|OF|OFF|OFFLINE|OLD|ON|ONLINE|ONLY|OPEN|OPTIMAL|OPTION|OR|ORDER|OTHERS|OUT|OWN|PACKAGE|PARALLEL|PARTITION|PCTFREE|PCTINCREASE|PCTUSED|PLAN|PLI|POSITIVE|PRAGMA|PRECISION|PRIMARY|PRIOR|PRIVATE|PRIVILEGES|PROCEDURE|PROFILE|PUBLIC|QUOTA|RAISE|RANGE|RAW|READ|REAL|RECORD|RECOVER|REFERENCES|REFERENCING|RELEASE|REMR|RENAME|RESETLOGS|RESOURCE|RESTRICTED|RETURN|REUSE|REVERSE|REVOKE|ROLE|ROLES|ROLLBACK|ROW|ROWID|ROWLABEL|ROWNUM|ROWS|ROWTYPE|RUN|SAVEPOINT|SCHEMA|SCN|SECTION|SEGMENT|SELECT|SEPARATE|SEQUENCE|SESSION|SET|SHARE|SHARED|SIZE|SMALLINT|SNAPSHOT|SOME|SORT|SPACE|SQL|SQLBUF|SQLCODE|SQLERRM|SQLERROR|SQLSTATE|START|STATEMENT|STATEMENT_ID|STATISTICS|STDDEV|STOP|STORAGE|SUBTYPE|SUCCESSFUL|SUM|SWITCH|SYNONYM|SYSDATE|SYSTEM|TABAUTH|TABLE|TABLES|TABLESPACE|TASK|TEMPORARY|TERMINATE|THEN|THREAD|TIME|TO|TRACING|TRANSACTION|TRIGGER|TRIGGERS|TRUE|TRUNCATE|TYPE|UID|UNDER|UNION|UNIQUE|UNLIMITED|UNTIL|UPDATE|USE|USER|USING|VALIDATE|VALUES|VARCHAR|VARCHAR2|VARIANCE|VIEW|VIEWS|WAIT|WHEN|WHENEVER|WHERE|WHILE|WITH|WORK|WRITE|XOR)\b/gi,
        "sh_keyword",
        -1
      ],
      [/"/g, "sh_string", 1],
      [/'/g, "sh_string", 2],
      [/`/g, "sh_string", 3],
      [/#/g, "sh_comment", 4],
      [/\/\/\//g, "sh_comment", 5],
      [/\/\//g, "sh_comment", 4],
      [/\/\*\*/g, "sh_comment", 11],
      [/\/\*/g, "sh_comment", 12],
      [/--/g, "sh_comment", 4],
      [/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
      [
        /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
        "sh_number",
        -1
      ]
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
      [/`/g, "sh_string", -2],
      [/\\./g, "sh_specialchar", -1]
    ],
    [[/$/g, null, -2]],
    [
      [/$/g, null, -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 6, 1],
      [/<!DOCTYPE/g, "sh_preproc", 8, 1],
      [/<!--/g, "sh_comment", 9],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 10, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 10, 1],
      [/@[A-Za-z]+/g, "sh_type", -1],
      [/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1]
    ],
    [
      [/\?>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 7]
    ],
    [
      [/\\(?:\\|")/g, null, -1],
      [/"/g, "sh_string", -2]
    ],
    [
      [/>/g, "sh_preproc", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 7]
    ],
    [
      [/-->/g, "sh_comment", -2],
      [/<!--/g, "sh_comment", 9]
    ],
    [
      [/(?:\/)?>/g, "sh_keyword", -2],
      [/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
      [/"/g, "sh_string", 7]
    ],
    [
      [/\*\//g, "sh_comment", -2],
      [
        /(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
        "sh_url",
        -1
      ],
      [/<\?xml/g, "sh_preproc", 6, 1],
      [/<!DOCTYPE/g, "sh_preproc", 8, 1],
      [/<!--/g, "sh_comment", 9],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 10, 1],
      [/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
      [/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 10, 1],
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
    ]
  ];
  return __toCommonJS(oracle_exports);
})();
