export default [
	[
		[/(?=^[-]{3})/g, 'sh_oldfile', 1, 1],
		[/(?=^[*]{3})/g, 'sh_oldfile', 3, 1],
		[/(?=^[\d])/g, 'sh_difflines', 6, 1],
	],
	[
		[/^[-]{3}/g, 'sh_oldfile', 2],
		[/^[-]/g, 'sh_oldfile', 2],
		[/^[+]/g, 'sh_newfile', 2],
		[/^@@/g, 'sh_difflines', 2],
	],
	[[/$/g, null, -2]],
	[
		[/^[*]{3}[ \t]+[\d]/g, 'sh_oldfile', 4],
		[/^[*]{3}/g, 'sh_oldfile', 2],
		[/^[-]{3}[ \t]+[\d]/g, 'sh_newfile', 5],
		[/^[-]{3}/g, 'sh_newfile', 2],
	],
	[
		[/^[\s]/g, 'sh_normal', 2],
		[/(?=^[-]{3})/g, 'sh_newfile', -2],
	],
	[
		[/^[\s]/g, 'sh_normal', 2],
		[/(?=^[*]{3})/g, 'sh_newfile', -2],
		[/^diff/g, 'sh_normal', 2],
	],
	[
		[/^[\d]/g, 'sh_difflines', 2],
		[/^[<]/g, 'sh_oldfile', 2],
		[/^[>]/g, 'sh_newfile', 2],
	],
]
