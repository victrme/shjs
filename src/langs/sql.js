if (!this.sh_languages) {
	this.sh_languages = {}
}
sh_languages["sql"] = [
	[
		[
			/\b(?:VARCHAR|TINYINT|TEXT|DATE|SMALLINT|MEDIUMINT|INT|BIGINT|FLOAT|DOUBLE|DECIMAL|DATETIME|TIMESTAMP|TIME|YEAR|UNSIGNED|CHAR|TINYBLOB|TINYTEXT|BLOB|MEDIUMBLOB|MEDIUMTEXT|LONGBLOB|LONGTEXT|ENUM|BOOL|BINARY|VARBINARY)\b/gi,
			"sh_type",
			-1,
		],
		[
			/\b(?:ALL|ASC|AS|ALTER|AND|ADD|AUTO_INCREMENT|BETWEEN|BINARY|BOTH|BY|BOOLEAN|CHANGE|CHECK|COLUMNS|COLUMN|CROSS|CREATE|DATABASES|DATABASE|DATA|DELAYED|DESCRIBE|DESC|DISTINCT|DELETE|DROP|DEFAULT|ENCLOSED|ESCAPED|EXISTS|EXPLAIN|FIELDS|FIELD|FLUSH|FOR|FOREIGN|FUNCTION|FROM|GROUP|GRANT|HAVING|IGNORE|INDEX|INFILE|INSERT|INNER|INTO|IDENTIFIED|IN|IS|IF|JOIN|KEYS|KILL|KEY|LEADING|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCK|LOW_PRIORITY|LEFT|LANGUAGE|MODIFY|NATURAL|NOT|NULL|NEXTVAL|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUTFILE|OR|OUTER|ON|PROCEDURE|PROCEDURAL|PRIMARY|READ|REFERENCES|REGEXP|RENAME|REPLACE|RETURN|REVOKE|RLIKE|RIGHT|SHOW|SONAME|STATUS|STRAIGHT_JOIN|SELECT|SETVAL|SET|TABLES|TERMINATED|TO|TRAILING|TRUNCATE|TABLE|TEMPORARY|TRIGGER|TRUSTED|UNIQUE|UNLOCK|USE|USING|UPDATE|VALUES|VARIABLES|VIEW|WITH|WRITE|WHERE|ZEROFILL|TYPE|XOR)\b/gi,
			"sh_keyword",
			-1,
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
			-1,
		],
	],
	[
		[/"/g, "sh_string", -2],
		[/\\./g, "sh_specialchar", -1],
	],
	[
		[/'/g, "sh_string", -2],
		[/\\./g, "sh_specialchar", -1],
	],
	[
		[/`/g, "sh_string", -2],
		[/\\./g, "sh_specialchar", -1],
	],
	[[/$/g, null, -2]],
	[
		[/$/g, null, -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
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
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1],
	],
	[
		[/\?>/g, "sh_preproc", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 7],
	],
	[
		[/\\(?:\\|")/g, null, -1],
		[/"/g, "sh_string", -2],
	],
	[
		[/>/g, "sh_preproc", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 7],
	],
	[
		[/-->/g, "sh_comment", -2],
		[/<!--/g, "sh_comment", 9],
	],
	[
		[/(?:\/)?>/g, "sh_keyword", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 7],
	],
	[
		[/\*\//g, "sh_comment", -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
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
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1],
	],
	[
		[/\*\//g, "sh_comment", -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
		],
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1],
	],
]
