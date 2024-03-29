export default [
	[
		[/#/g, 'sh_comment', 1],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			'sh_number',
			-1,
		],
		[/"/g, 'sh_string', 2],
		[/'/g, 'sh_string', 3],
		[/\b(?:End)?(?:Sub)*Section\b/g, 'sh_keyword', -1],
		[/[A-Za-z0-9_]+/g, 'sh_type', -1],
	],
	[[/$/g, null, -2]],
	[
		[/"/g, 'sh_string', -2],
		[/\\./g, 'sh_specialchar', -1],
	],
	[
		[/'/g, 'sh_string', -2],
		[/\\./g, 'sh_specialchar', -1],
	],
]
