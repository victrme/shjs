export default [
	[
		[/#/g, 'sh_comment', 1],
		[
			/\b(?:ERROR_BLOCK|EXECUTE_ERROR_BLOCK|EXIT_BLOCK|NULL|__tmp|_for|and|break|case|catch|chs|continue|define|do|else|else|exch|finally|for|foreach|forever|if|ifnot|loop|mod|mul2|not|or|orelse|pop|private|public|return|shl|shr|sign|sqr|static|struct|switch|then|throw|try|typedef|using|variable|while|xor)\b/g,
			'sh_keyword',
			-1,
		],
		[/%/g, 'sh_comment', 1],
		[/"/g, 'sh_string', 2],
		[/'/g, 'sh_string', 3],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			'sh_number',
			-1,
		],
		[/~|!|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|&|<|>|\|/g, 'sh_symbol', -1],
		[/\b(?:require)\b/g, 'sh_preproc', -1],
		[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, 'sh_function', -1],
	],
	[[/$/g, null, -2]],
	[
		[/$/g, null, -2],
		[/\\(?:\\|")/g, null, -1],
		[/"/g, 'sh_string', -2],
	],
	[
		[/$/g, null, -2],
		[/\\(?:\\|')/g, null, -1],
		[/'/g, 'sh_string', -2],
	],
]
