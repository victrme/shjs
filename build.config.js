import { resolve } from 'path'
import { exec } from 'child_process'
import esbuild from 'esbuild'
import fs from 'fs'

if (process.env.TARGET === 'browser') buildBrowser()
if (process.env.TARGET === 'esm') buildESM()
if (process.env.TARGET === undefined) {
	buildESM()
	buildBrowser()
}

function buildBrowser() {
	copyFolderContents('src/themes', 'dist/browser/themes')

	esbuild.buildSync({
		outfile: 'dist/browser/sh_main.js',
		entryPoints: ['./src/index.js'],
		globalName: `sh_`,
		format: 'iife',
	})

	for (const filename of fs.readdirSync('src/langs')) {
		const lang = filename.replace('.js', '')

		esbuild.buildSync({
			outfile: `dist/browser/langs/sh_${lang}.js`,
			entryPoints: [`./src/langs/${lang}.js`],
			globalName: `sh_${lang}`,
			format: 'iife',
		})
	}
}

function buildESM() {
	copyFolderContents('src/themes', 'dist/esm/themes')
	copyFolderContents('src/langs', 'dist/esm/langs')

	exec('tsc ./src/index.js --outDir ./dist/esm/ --allowJs --declaration --emitDeclarationOnly')

	esbuild.buildSync({
		outfile: 'dist/esm/index.js',
		entryPoints: ['./src/index.js'],
		format: 'esm',
	})
}

//
//	Helpers
//

function copyFolderContents(source, destination) {
	const sourcePath = resolve(source)
	const destinationPath = resolve(destination)

	if (!fs.existsSync(destinationPath)) {
		fs.mkdirSync(destinationPath, { recursive: true })
	}

	if (fs.existsSync(sourcePath)) {
		for (const file of fs.readdirSync(sourcePath)) {
			const currentPath = resolve(sourcePath, file)
			const newPath = resolve(destinationPath, file)
			const stat = fs.statSync(currentPath)

			if (stat.isFile()) {
				fs.copyFileSync(currentPath, newPath)
			}
		}
	}
}
