export default [
	[
		[/%/g, 'sh_comment', 1],
		[/&|~|\\[$_&{}~^%#`'"|\s\\]/g, 'sh_symbol', -1],
		[/"/g, 'sh_string', 2],
		[/``/g, 'sh_string', 3],
		[/`/g, 'sh_string', 4],
		[/\$\$|\\\[|\\\]/g, 'sh_math', -1],
		[/\$/g, 'sh_math', 5],
		[/\\textit/g, 'sh_keyword', 6, 1],
		[/\\textbf/g, 'sh_keyword', 9, 1],
		[/\\texttt/g, 'sh_keyword', 12, 1],
		[/\\underline/g, 'sh_keyword', 15, 1],
		[/\\[A-Za-z]+/g, 'sh_keyword', -1],
		[/\*/g, 'sh_symbol', -1],
		[/\{[ \t]*$/g, 'sh_normal', -1],
		[/\[/g, 'sh_optionalargument', 18],
		[/\{/g, 'sh_argument', 19],
	],
	[[/$/g, null, -2]],
	[
		[/\\(?:\\|")/g, null, -1],
		[/"/g, 'sh_string', -2],
	],
	[
		[/\\(?:\\|'')/g, null, -1],
		[/''/g, 'sh_string', -2],
	],
	[
		[/\\(?:\\|')/g, null, -1],
		[/'/g, 'sh_string', -2],
	],
	[
		[/\\(?:\\|\$)/g, null, -1],
		[/\$/g, 'sh_math', -2],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_italics', 7],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_italics', 8],
		[/\}/g, 'sh_italics', -3],
	],
	[
		[/\\(?:\\|\})/g, null, -1],
		[/\}/g, 'sh_italics', -2],
		[/\{/g, 'sh_italics', 8],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_bold', 10],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_bold', 11],
		[/\}/g, 'sh_bold', -3],
	],
	[
		[/\\(?:\\|\})/g, null, -1],
		[/\}/g, 'sh_bold', -2],
		[/\{/g, 'sh_bold', 11],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_fixed', 13],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_fixed', 14],
		[/\}/g, 'sh_fixed', -3],
	],
	[
		[/\\(?:\\|\})/g, null, -1],
		[/\}/g, 'sh_fixed', -2],
		[/\{/g, 'sh_fixed', 14],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_underline', 16],
	],
	[
		[/$/g, null, -2],
		[/\{/g, 'sh_underline', 17],
		[/\}/g, 'sh_underline', -3],
	],
	[
		[/\\(?:\\|\})/g, null, -1],
		[/\}/g, 'sh_underline', -2],
		[/\{/g, 'sh_underline', 17],
	],
	[
		[/$/g, null, -2],
		[/\\(?:\\|\])/g, null, -1],
		[/\]/g, 'sh_optionalargument', -2],
	],
	[
		[/\\(?:\\|\})/g, null, -1],
		[/\}/g, 'sh_argument', -2],
		[/\{/g, 'sh_argument', 19],
	],
]
