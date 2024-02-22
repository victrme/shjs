if (!this.sh_languages) {
	this.sh_languages = {}
}
sh_languages["python"] = [
	[
		[/\b(?:import|from)\b/g, "sh_preproc", -1],
		[/#/g, "sh_comment", 1],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			"sh_number",
			-1,
		],
		[
			/\b(?:and|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|global|if|in|is|lambda|not|or|pass|print|raise|return|try|while)\b/g,
			"sh_keyword",
			-1,
		],
		[/^(?:[\s]*'{3})/g, "sh_comment", 2],
		[/^(?:[\s]*\"{3})/g, "sh_comment", 3],
		[/^(?:[\s]*'(?:[^\\']|\\.)*'[\s]*|[\s]*\"(?:[^\\\"]|\\.)*\"[\s]*)$/g, "sh_comment", -1],
		[/(?:[\s]*'{3})/g, "sh_string", 4],
		[/(?:[\s]*\"{3})/g, "sh_string", 5],
		[/"/g, "sh_string", 6],
		[/'/g, "sh_string", 7],
		[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\||\{|\}/g, "sh_symbol", -1],
		[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g, "sh_function", -1],
	],
	[[/$/g, null, -2]],
	[[/(?:'{3})/g, "sh_comment", -2]],
	[[/(?:\"{3})/g, "sh_comment", -2]],
	[[/(?:'{3})/g, "sh_string", -2]],
	[[/(?:\"{3})/g, "sh_string", -2]],
	[
		[/$/g, null, -2],
		[/\\(?:\\|")/g, null, -1],
		[/"/g, "sh_string", -2],
	],
	[
		[/$/g, null, -2],
		[/\\(?:\\|')/g, null, -1],
		[/'/g, "sh_string", -2],
	],
]
