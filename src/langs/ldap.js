export default [
	[
		[/#/g, 'sh_comment', 1],
		[/(\b[A-Za-z0-9_]+:)((?:[^,=]*$)?)/g, ['sh_keyword', 'sh_string'], -1],
		[
			/([A-Za-z0-9_]+)(=)([^,]+)(,?)/g,
			['sh_attribute', 'sh_symbol', 'sh_string', 'sh_symbol'],
			-1,
		],
	],
	[[/$/g, null, -2]],
]
