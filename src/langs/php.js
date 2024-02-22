if (!this.sh_languages) {
	this.sh_languages = {}
}
sh_languages["php"] = [
	[
		[/\b(?:include|include_once|require|require_once)\b/g, "sh_preproc", -1],
		[/\/\//g, "sh_comment", 1],
		[/#/g, "sh_comment", 1],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			"sh_number",
			-1,
		],
		[/"/g, "sh_string", 2],
		[/'/g, "sh_string", 3],
		[
			/\b(?:and|or|xor|__FILE__|exception|php_user_filter|__LINE__|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|each|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|for|foreach|function|global|if|isset|list|new|old_function|print|return|static|switch|unset|use|var|while|__FUNCTION__|__CLASS__|__METHOD__)\b/g,
			"sh_keyword",
			-1,
		],
		[/\/\/\//g, "sh_comment", 4],
		[/\/\//g, "sh_comment", 1],
		[/\/\*\*/g, "sh_comment", 9],
		[/\/\*/g, "sh_comment", 10],
		[/(?:\$[#]?|@|%)[A-Za-z0-9_]+/g, "sh_variable", -1],
		[/<\?php|~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, "sh_symbol", -1],
		[/\{|\}/g, "sh_cbracket", -1],
		[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1],
	],
	[[/$/g, null, -2]],
	[
		[/\\(?:\\|")/g, null, -1],
		[/"/g, "sh_string", -2],
	],
	[
		[/\\(?:\\|')/g, null, -1],
		[/'/g, "sh_string", -2],
	],
	[
		[/$/g, null, -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
		],
		[/<\?xml/g, "sh_preproc", 5, 1],
		[/<!DOCTYPE/g, "sh_preproc", 6, 1],
		[/<!--/g, "sh_comment", 7],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 8, 1],
		[/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 8, 1],
		[/@[A-Za-z]+/g, "sh_type", -1],
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, "sh_todo", -1],
	],
	[
		[/\?>/g, "sh_preproc", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 2],
	],
	[
		[/>/g, "sh_preproc", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 2],
	],
	[
		[/-->/g, "sh_comment", -2],
		[/<!--/g, "sh_comment", 7],
	],
	[
		[/(?:\/)?>/g, "sh_keyword", -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ["sh_type", "sh_normal", "sh_symbol"], -1],
		[/"/g, "sh_string", 2],
	],
	[
		[/\*\//g, "sh_comment", -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
		],
		[/<\?xml/g, "sh_preproc", 5, 1],
		[/<!DOCTYPE/g, "sh_preproc", 6, 1],
		[/<!--/g, "sh_comment", 7],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, "sh_keyword", -1],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, "sh_keyword", 8, 1],
		[/&(?:[A-Za-z0-9]+);/g, "sh_preproc", -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, "sh_keyword", -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, "sh_keyword", 8, 1],
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
