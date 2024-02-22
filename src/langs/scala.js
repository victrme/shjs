if (!this.sh_languages) {
	this.sh_languages = {}
}
sh_languages["scala"] = [
	[
		[/\b(?:import|package)\b/g, "sh_preproc", -1],
		[/\/\/\//g, "sh_comment", 1],
		[/\/\//g, "sh_comment", 7],
		[/\/\*\*/g, "sh_comment", 8],
		[/\/\*/g, "sh_comment", 9],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			"sh_number",
			-1,
		],
		[/"/g, "sh_string", 10],
		[/'/g, "sh_string", 11],
		[/(\b(?:class|trait))([ \t]+)([$A-Za-z0-9_]+)/g, ["sh_keyword", "sh_normal", "sh_classname"], -1],
		[
			/abstract|case|catch|class|def|do|else|extends|false|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|requires|return|sealed|super|this|throw|trait|try|true|type|val|var|while|with|yield|_|:|=>|=|<-|<:|<%|>:|#|@/g,
			"sh_keyword",
			-1,
		],
		[/\b(?:Int|Byte|Boolean|Char|Long|Float|Double|Short|Nil)\b/g, "sh_type", -1],
		[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
		[/\{|\}/g, "sh_cbracket", -1],
		[
			/(?:[A-Za-z]|_|[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-])(?:[A-Za-z0-9_]|[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-])*(?=[ \t]*\()/g,
			"sh_function",
			-1,
		],
	],
	[
		[/$/g, null, -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
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
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1],
	],
	[
		[/\?>/g, "sh_preproc", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 3],
	],
	[
		[/\\(?:\\|")/g, null, -1],
		[/"/g, "sh_string", -2],
	],
	[
		[/>/g, "sh_preproc", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 3],
	],
	[
		[/-->/g, "sh_comment", -2],
		[/<!--/g, "sh_comment", 5],
	],
	[
		[/(?:\/)?>/g, "sh_keyword", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 3],
	],
	[[/$/g, null, -2]],
	[
		[/\*\//g, "sh_comment", -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
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
	[
		[/"/g, "sh_string", -2],
		[/\\./g, "sh_specialchar", -1],
	],
	[
		[/'/g, "sh_string", -2],
		[/\\./g, "sh_specialchar", -1],
	],
]
