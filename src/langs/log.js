export default log = [
	[
		[/^[A-Za-z]{3}[ \t]{1,2}[\d]{1,2}(?=[ \t][\d]{2}:[\d]{2}:[\d]{2})/g, 'sh_date', 1, 1],
		[/^[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g, 'sh_ip', 6, 1],
		[
			/^\[[A-Za-z]{3}[ \t][A-Za-z]{3}[ \t]{1,2}[\d]{1,2}[ \t](?=[\d]{2}:[\d]{2}:[\d]{2})/g,
			'sh_date',
			8,
			1,
		],
		[/[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g, 'sh_ip', -1],
		[/\b(?:root|failure)\b/g, 'sh_string', -1],
		[/((?:port|pid)[ \t])([\d]+)/g, ['sh_normal', 'sh_port'], -1],
		[/[ \t](?=(?:IN|OUT)=)/g, 'sh_normal', 9, 1],
	],
	[
		[/$/g, null, -2],
		[/\b[\d]{2}:[\d]{2}:[\d]{2}\b/g, 'sh_time', 2, 1],
	],
	[
		[/$/g, null, -2],
		[/[^ \t]+/g, 'sh_symbol', 3, 1],
	],
	[
		[/$/g, null, -2],
		[/:/g, 'sh_normal', -3],
		[/[^:\(\[]+/g, 'sh_function', -1],
		[/\[/g, 'sh_number', 4],
		[/\(/g, 'sh_number', 5],
	],
	[
		[/$/g, null, -2],
		[/\]/g, 'sh_number', -2],
	],
	[
		[/$/g, null, -2],
		[/\)/g, 'sh_number', -2],
	],
	[
		[/$/g, null, -2],
		[/[A-Za-z0-9]+(?=[ \t]\[[\d]{2}\/[A-Za-z]{3}\/[\d]{4})/g, 'sh_string', -1],
		[/[\d]{2}\/[A-Za-z]{3}\/[\d]{4}(?=:[\d]{2}:[\d]{2}:[\d]{2})/g, 'sh_date', -1],
		[/[\d]{2}:[\d]{2}:[\d]{2}[ \t][+-][\d]{4}/g, 'sh_time', -1],
		[/[1-5][\d]{2}[ \t][-0-9]+/g, 'sh_twonumbers', -1],
		[
			/\b(?:OPTIONS|GET|HEAD|POST|PUT|DELETE|TRACE|CONNECT|PROPFIND|MKCOL|COPY|MOVE|LOCK|UNLOCK)\b/g,
			'sh_webmethod',
			7,
			1,
		],
	],
	[[/[^ \t]+/g, 'sh_string', -2]],
	[
		[/$/g, null, -2],
		[/\b[\d]{2}:[\d]{2}:[\d]{2}\b/g, 'sh_time', -1],
		[
			/[\d]{4}\]|\[[A-Za-z]{3}[ \t][A-Za-z]{3}[ \t]{1,2}[\d]{1,2}[ \t](?=[\d]{2}:[\d]{2}:[\d]{2})/g,
			'sh_date',
			-1,
		],
		[/\[error\]/g, 'sh_string', -1],
		[/\[notice\]/g, 'sh_comment', -1],
		[/[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g, 'sh_ip', -1],
	],
	[
		[/$/g, null, -2],
		[/(?:IN|OUT|PROTO)=(?=[^ \t]+)/g, 'sh_normal', 7, 1],
		[/(?:SPT|DPT|TYPE|SEQ)=(?=[^ \t]+)/g, 'sh_normal', 10, 1],
		[/\b(?:CWR|ECE|URG|ACK|PSH|RST|SYN|FIN)\b/g, 'sh_number', -1],
		[/[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b/g, 'sh_ip', -1],
	],
	[[/[^ \t]+/g, 'sh_cbracket', -2]],
]
