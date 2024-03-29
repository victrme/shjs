export default [
	[
		[/\b(?:external|open|include|[A-Z][\w']*(?=\.))\b/g, 'sh_preproc', -1],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			'sh_number',
			-1,
		],
		[/"/g, 'sh_string', 1],
		[
			/\b(?:and|as|assert|asr|begin|class|closed|constraint|do|done|downto|else|end|exception|false|for|fun|function|functor|if|in|inherit|initializer|land|lazy|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|object|of|or|parser|private|rec|sig|struct|then|to|true|try|type|val|virtual|when|while|with)\b/g,
			'sh_keyword',
			-1,
		],
		[/\(\*/g, 'sh_comment', 2],
		[
			/\b(?:[A-Z][\w']*(?!\.)|int|int32|int64|nativeint|bool|char|exn|option|float|unit|string|list|array|ref|format|format4|lazy_t|in_channel|out_channel)\b/g,
			'sh_type',
			-1,
		],
		[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g, 'sh_symbol', -1],
		[/\{|\}/g, 'sh_cbracket', -1],
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
