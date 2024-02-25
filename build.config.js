import * as fs from 'fs'
import * as url from 'url'

if (process.env.TARGET === 'browser') {
	// ... do something
	// tsc ./src/index.js --outDir dist/ --allowJs -d ?
}

if (process.env.TARGET === 'esm') {
	// ... do something else
	// esbuild --outdir=dist/esm --minify src/**/*.js ?
}

function getCurrentFilenames() {
	console.log('\nCurrent filenames:')
	fs.readdirSync(url.fileURLToPath(import.meta.url)).forEach((file) => {
		console.log(file)
	})
}
