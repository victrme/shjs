export default [
	[
		[
			/\b(?:alfa|and|array|begin|case|const|div|do|downto|else|end|false|file|for|function|get|goto|if|in|label|mod|new|not|of|or|pack|packed|page|program|put|procedure|read|readln|record|repeat|reset|rewrite|set|text|then|to|true|type|unpack|until|var|while|with|writeln|write)\b/gi,
			'sh_keyword',
			-1,
		],
		[/\(\*/g, 'sh_comment', 1],
		[/\{/g, 'sh_comment', 2],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			'sh_number',
			-1,
		],
		[/"/g, 'sh_string', 3],
		[/'/g, 'sh_string', 4],
		[/\b(?:boolean|byte|char|integer|maxint|real)\b/gi, 'sh_type', -1],
		[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, 'sh_symbol', -1],
		[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, 'sh_function', -1],
	],
	[
		[/\*\)/g, 'sh_comment', -2],
		[/\(\*/g, 'sh_comment', 1],
	],
	[
		[/\}/g, 'sh_comment', -2],
		[/\{/g, 'sh_comment', 2],
	],
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
