export default [
	[
		[/\b(?:external|open|include|[A-Z][\w']*(?=\.))\b/g, 'sh_preproc', -1],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			'sh_number',
			-1,
		],
		[/"/g, 'sh_string', 1],
		[/\(\*/g, 'sh_comment', 2],
		[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, 'sh_symbol', -1],
		[/\{|\}/g, 'sh_cbracket', -1],
		[
			/\b(?:abstraction|abstype|and|andalso|as|before|case|datatype|do|else|end|eqtype|exception|fn|fun|functor|handle|if|in|include|infix|infixr|let|local|nonfix|o|of|op|open|orelse|overload|raise|rec|sharing|sig|signature|struct|structure|then|type|val|where|while|with|withtype)\b/g,
			'sh_keyword',
			-1,
		],
		[/\b(?:int|byte|boolean|char|long|float|double|short|void)\b/g, 'sh_type', -1],
	],
	[
		[/$/g, null, -2],
		[/\\(?:\\|")/g, null, -1],
		[/"/g, 'sh_string', -2],
	],
	[
		[/\*\)/g, 'sh_comment', -2],
		[/\(\*/g, 'sh_comment', 2],
	],
]
