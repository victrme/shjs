export default [
	[
		[/\/\/\//g, 'sh_comment', 1],
		[/\/\//g, 'sh_comment', 7],
		[/\/\*\*/g, 'sh_comment', 8],
		[/\/\*/g, 'sh_comment', 9],
		[
			/\b(?:abstract|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|for|function|goto|if|implements|in|instanceof|interface|native|new|null|private|protected|prototype|public|return|static|super|switch|synchronized|throw|throws|this|transient|true|try|typeof|var|volatile|while|with)\b/g,
			'sh_keyword',
			-1,
		],
		[/(\+\+|--|\)|\])(\s*)(\/=?(?![*\/]))/g, ['sh_symbol', 'sh_normal', 'sh_symbol'], -1],
		[
			/(0x[A-Fa-f0-9]+|(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?)(\s*)(\/(?![*\/]))/g,
			['sh_number', 'sh_normal', 'sh_symbol'],
			-1,
		],
		[/([A-Za-z$_][A-Za-z0-9$_]*\s*)(\/=?(?![*\/]))/g, ['sh_normal', 'sh_symbol'], -1],
		[/\/(?:\\.|[^*\\\/])(?:\\.|[^\\\/])*\/[gim]*/g, 'sh_regexp', -1],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			'sh_number',
			-1,
		],
		[/"/g, 'sh_string', 10],
		[/'/g, 'sh_string', 11],
		[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, 'sh_symbol', -1],
		[/\{|\}/g, 'sh_cbracket', -1],
		[/\b(?:Math|Infinity|NaN|undefined|arguments)\b/g, 'sh_predef_var', -1],
		[
			/\b(?:Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt)\b/g,
			'sh_predef_func',
			-1,
		],
		[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, 'sh_function', -1],
	],
	[
		[/$/g, null, -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			'sh_url',
			-1,
		],
		[/<\?xml/g, 'sh_preproc', 2, 1],
		[/<!DOCTYPE/g, 'sh_preproc', 4, 1],
		[/<!--/g, 'sh_comment', 5],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, 'sh_keyword', -1],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, 'sh_keyword', 6, 1],
		[/&(?:[A-Za-z0-9]+);/g, 'sh_preproc', -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, 'sh_keyword', -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, 'sh_keyword', 6, 1],
		[/@[A-Za-z]+/g, 'sh_type', -1],
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, 'sh_todo', -1],
	],
	[
		[/\?>/g, 'sh_preproc', -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ['sh_type', 'sh_normal', 'sh_symbol'], -1],
		[/"/g, 'sh_string', 3],
	],
	[
		[/\\(?:\\|")/g, null, -1],
		[/"/g, 'sh_string', -2],
	],
	[
		[/>/g, 'sh_preproc', -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ['sh_type', 'sh_normal', 'sh_symbol'], -1],
		[/"/g, 'sh_string', 3],
	],
	[
		[/-->/g, 'sh_comment', -2],
		[/<!--/g, 'sh_comment', 5],
	],
	[
		[/(?:\/)?>/g, 'sh_keyword', -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ['sh_type', 'sh_normal', 'sh_symbol'], -1],
		[/"/g, 'sh_string', 3],
	],
	[[/$/g, null, -2]],
	[
		[/\*\//g, 'sh_comment', -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			'sh_url',
			-1,
		],
		[/<\?xml/g, 'sh_preproc', 2, 1],
		[/<!DOCTYPE/g, 'sh_preproc', 4, 1],
		[/<!--/g, 'sh_comment', 5],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, 'sh_keyword', -1],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, 'sh_keyword', 6, 1],
		[/&(?:[A-Za-z0-9]+);/g, 'sh_preproc', -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, 'sh_keyword', -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, 'sh_keyword', 6, 1],
		[/@[A-Za-z]+/g, 'sh_type', -1],
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, 'sh_todo', -1],
	],
	[
		[/\*\//g, 'sh_comment', -2],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			'sh_url',
			-1,
		],
		[/(?:TODO|FIXME|BUG)(?:[:]?)/g, 'sh_todo', -1],
	],
	[
		[/"/g, 'sh_string', -2],
		[/\\./g, 'sh_specialchar', -1],
	],
	[
		[/'/g, 'sh_string', -2],
		[/\\./g, 'sh_specialchar', -1],
	],
]
