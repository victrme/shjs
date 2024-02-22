if (!this.sh_languages) {
	this.sh_languages = {}
}
sh_languages["spec"] = [
	[
		[/#/g, "sh_comment", 1],
		[/^[A-Za-z0-9_-]+:/g, "sh_keyword", -1],
		[
			/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,
			"sh_url",
			-1,
		],
		[
			/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
			"sh_number",
			-1,
		],
		[/\$[A-Za-z0-9_]+/g, "sh_variable", -1],
		[/%(?:\{?)[A-Za-z0-9_]+(?:\}?)/g, "sh_preproc", -1],
	],
	[[/$/g, null, -2]],
]
