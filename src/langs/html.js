export default [
	[
		[/<\?xml/g, 'sh_preproc', 1, 1],
		[/<!DOCTYPE/g, 'sh_preproc', 3, 1],
		[/<!--/g, 'sh_comment', 4],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g, 'sh_keyword', -1],
		[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g, 'sh_keyword', 5, 1],
		[/&(?:[A-Za-z0-9]+);/g, 'sh_preproc', -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g, 'sh_keyword', -1],
		[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g, 'sh_keyword', 5, 1],
	],
	[
		[/\?>/g, 'sh_preproc', -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ['sh_type', 'sh_normal', 'sh_symbol'], -1],
		[/"/g, 'sh_string', 2],
	],
	[
		[/\\(?:\\|")/g, null, -1],
		[/"/g, 'sh_string', -2],
	],
	[
		[/>/g, 'sh_preproc', -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ['sh_type', 'sh_normal', 'sh_symbol'], -1],
		[/"/g, 'sh_string', 2],
	],
	[
		[/-->/g, 'sh_comment', -2],
		[/<!--/g, 'sh_comment', 4],
	],
	[
		[/(?:\/)?>/g, 'sh_keyword', -2],
		[/([^=" \t>]+)([ \t]*)(=?)/g, ['sh_type', 'sh_normal', 'sh_symbol'], -1],
		[/"/g, 'sh_string', 2],
	],
]
