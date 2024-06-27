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
	copyFolderContents('src/themes', 'build/themes')

	esbuild.buildSync({
		outfile: 'build/sh_main.js',
		entryPoints: ['./src/index.js'],
		globalName: `sh_`,
		format: 'iife',
		target: 'es2022',
	})

	for (const filename of fs.readdirSync('src/langs')) {
		const lang = filename.replace('.js', '')

		esbuild.build({
			outfile: `build/langs/sh_${lang}.js`,
			entryPoints: [`./src/langs/${lang}.js`],
			globalName: `sh_${lang}`,
			format: 'iife',
			target: 'es2022',
		})
	}
}

function buildESM() {
	exec('tsc ./src/index.js --outDir ./src/ --allowJs --declaration --emitDeclarationOnly')
}

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
