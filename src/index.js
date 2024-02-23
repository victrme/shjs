'use strict'

if (!this.sh_languages) {
	this.sh_languages = {}
}

/**
 * A language definition object
 * @typedef {[RegExp, string, number, number]} Language
 */

/**
 * A tag object with its position
 * @typedef {{node: Node, pos: number}} Tag
 */

/**
 * @param {string} url
 * @returns {boolean}
 */
function sh_isEmailAddress(url) {
	if (/^mailto:/.test(url)) {
		return false
	}

	return url.indexOf('@') !== -1
}

/**
 * @param {Tag[]} tags
 * @param {number} numTags
 * @param {string} inputString
 */
function sh_setHref(tags, numTags, inputString) {
	const startPos = tags[numTags - 2].pos
	const endPos = tags[numTags - 1].pos
	let url = inputString.substring(startPos, endPos)

	if (url.length >= 2 && url.charAt(0) === '<' && url.charAt(url.length - 1) === '>') {
		url = url.substring(1, url.length - 2)
	}

	if (sh_isEmailAddress(url)) {
		url = 'mailto:' + url
	}

	tags[numTags - 2].node.href = url
}

/**
 * Highlights all elements containing source code in a text string.  The return
 * value is an array of objects, each representing an HTML start or end tag.  Each
 * object has a property named pos, which is an integer representing the text
 * offset of the tag. Every start tag also has a property named node, which is the
 * DOM element started by the tag. End tags do not have this property.
 * @param {string} inputString - a text string
 * @param {Language} language - a language definition object
 * @return an array of tag objects
 */
function sh_highlightString(inputString, language) {
	const a = document.createElement('a')
	const span = document.createElement('span')

	/**
	 * Result tags
	 * @type {{node: Node, pos: number}[]} */
	let tags = []

	let numTags = 0

	/**
	 * Each element is a pattern object from language
	 * @type {[RegExp, string, number, number][]} */
	let patternStack = []

	// the current position within inputString
	let pos = 0

	// the name of the current style, or null if there is no current style
	let currentStyle = null

	const output = (s, style) => {
		const length = s.length

		// this is more than just an optimization - we don't want to output empty <span></span> elements
		if (length === 0) {
			return
		}

		if (!style) {
			const stackLength = patternStack.length

			if (stackLength !== 0) {
				const pattern = patternStack[stackLength - 1]
				const isEnvironnement = !pattern[3]

				// use the style for this environment
				if (isEnvironnement) {
					style = pattern[1]
				}
			}
		}

		if (currentStyle !== style) {
			if (currentStyle) {
				tags[numTags++] = { pos }

				if (currentStyle === 'sh_url') {
					sh_setHref(tags, numTags, inputString)
				}
			}

			if (style) {
				const isUrl = style === 'sh_url'
				const clone = (isUrl ? a : span).cloneNode(false)

				clone.className = style

				tags[numTags++] = {
					node: clone,
					pos: pos,
				}
			}
		}

		pos += length
		currentStyle = style
	}

	const endOfLinePattern = /\r\n|\r|\n/g
	endOfLinePattern.lastIndex = 0
	const inputStringLength = inputString.length

	while (pos < inputStringLength) {
		const endOfLineMatch = endOfLinePattern.exec(inputString)
		let start = pos
		let end = -1
		let startOfNextLine

		if (endOfLineMatch === null) {
			end = inputStringLength
			startOfNextLine = inputStringLength
		} else {
			end = endOfLineMatch.index
			startOfNextLine = endOfLinePattern.lastIndex
		}

		const line = inputString.substring(start, end)

		let matchCache = []

		for (;;) {
			const posWithinLine = pos - start
			const stackLength = patternStack.length
			const stateIndex = stackLength > 0 ? patternStack[stackLength - 1][2] : 0
			const state = language[stateIndex]
			const numPatterns = state.length
			let mc = matchCache[stateIndex]

			if (!mc) {
				mc = matchCache[stateIndex] = []
			}

			let bestMatch = null
			let bestPatternIndex = -1

			for (let i = 0; i < numPatterns; i++) {
				let match

				if (i < mc.length && (mc[i] === null || posWithinLine <= mc[i].index)) {
					match = mc[i]
				} else {
					let regex = state[i][0]
					regex.lastIndex = posWithinLine
					match = regex.exec(line)
					mc[i] = match
				}

				if (match !== null && (bestMatch === null || match.index < bestMatch.index)) {
					bestMatch = match
					bestPatternIndex = i

					if (match.index === posWithinLine) {
						break
					}
				}
			}

			if (bestMatch === null) {
				output(line.substring(posWithinLine), null)
				break
			} else {
				// got a match
				if (bestMatch.index > posWithinLine) {
					output(line.substring(posWithinLine, bestMatch.index), null)
				}

				let pattern = state[bestPatternIndex]
				let newStyle = pattern[1]
				let matchedString

				if (newStyle instanceof Array) {
					for (let subexpression = 0; subexpression < newStyle.length; subexpression++) {
						matchedString = bestMatch[subexpression + 1]
						output(matchedString, newStyle[subexpression])
					}
				} else {
					matchedString = bestMatch[0]
					output(matchedString, newStyle)
				}

				switch (pattern[2]) {
					case -1:
						// do nothing
						break
					case -2:
						// exit
						patternStack.pop()
						break
					case -3:
						// exitall
						patternStack.length = 0
						break
					default:
						// this was the start of a delimited pattern or a state/environment
						patternStack.push(pattern)
						break
				}
			}
		}

		// end of the line
		if (currentStyle) {
			tags[numTags++] = { pos }

			if (currentStyle === 'sh_url') {
				sh_setHref(tags, numTags, inputString)
			}

			currentStyle = null
		}

		pos = startOfNextLine
	}

	return tags
}

////////////////////////////////////////////////////////////////////////////////
// DOM-dependent functions

/**
 * Extracts the tags from an HTML DOM NodeList.
 * @param {NodeListOf<Node>} nodeList - a DOM NodeList
 * @param {{text: string, pos: number, tags: Tag}} result - an object with text, tags and pos properties
 */
function sh_extractTagsFromNodeList(nodeList, result) {
	const length = nodeList.length

	for (let i = 0; i < length; i++) {
		let node = nodeList.item(i)

		switch (node.nodeType) {
			case 1: {
				if (node.nodeName.toLowerCase() === 'br') {
					result.text.push('\n')
					result.pos++
				} else {
					result.tags.push({ node: node.cloneNode(false), pos: result.pos })
					sh_extractTagsFromNodeList(node.childNodes, result)
					result.tags.push({ pos: result.pos })
				}

				break
			}

			case 3:
			case 4: {
				result.text.push(node.data)
				result.pos += node.length
				break
			}
		}
	}
}

/**
 * Extracts the tags from the text of an HTML element. The extracted tags will be
 * returned as an array of tag objects. See sh_highlightString for the format of
 * the tag objects.
 * @param {Element} element - a DOM element
 * @param {Tag[]} tags - an empty array; the extracted tag objects will be returned in it
 * @return {string} the text of the element
 * @see  sh_highlightString
 */
function sh_extractTags(element, tags) {
	const result = { text: [], pos: 0, tags }
	sh_extractTagsFromNodeList(element.childNodes, result)
	return result.text.join('')
}

/**
 * Merges the original tags from an element with the tags produced by highlighting.
 * @param {Tag[]} originalTags - an array containing the original tags
 * @param {Tag[]} highlightTags - an array containing the highlighting tags these must not overlap
 * @result {Tag[]} - an array containing the merged tags
 */
function sh_mergeTags(originalTags, highlightTags) {
	//
	const numOriginalTags = originalTags.length
	if (numOriginalTags === 0) {
		return highlightTags
	}

	const numHighlightTags = highlightTags.length
	if (numHighlightTags === 0) {
		return originalTags
	}

	let result = []
	let originalIndex = 0
	let highlightIndex = 0

	while (originalIndex < numOriginalTags && highlightIndex < numHighlightTags) {
		let originalTag = originalTags[originalIndex]
		let highlightTag = highlightTags[highlightIndex]

		if (originalTag.pos <= highlightTag.pos) {
			result.push(originalTag)
			originalIndex++
		} else {
			result.push(highlightTag)

			if (highlightTags[highlightIndex + 1].pos <= originalTag.pos) {
				highlightIndex++
				result.push(highlightTags[highlightIndex])
				highlightIndex++
			} else {
				// new end tag
				result.push({ pos: originalTag.pos })

				// new start tag
				highlightTags[highlightIndex] = {
					node: highlightTag.node.cloneNode(false),
					pos: originalTag.pos,
				}
			}
		}
	}

	while (originalIndex < numOriginalTags) {
		result.push(originalTags[originalIndex])
		originalIndex++
	}

	while (highlightIndex < numHighlightTags) {
		result.push(highlightTags[highlightIndex])
		highlightIndex++
	}

	return result
}

/**
 * Inserts tags into text.
 * @param {Tag[]} tags - an array of tag objects
 * @param {string} text - a string representing the text
 * @return {DocumentFragment} a DOM DocumentFragment representing the resulting HTML
 */
function sh_insertTags(tags, text) {
	const result = document.createDocumentFragment()
	const numTags = tags.length
	const textLength = text.length
	let currentNode = result
	let tagIndex = 0
	let textPos = 0

	// output one tag or text node every iteration
	while (textPos < textLength || tagIndex < numTags) {
		let tag
		let tagPos

		if (tagIndex < numTags) {
			tag = tags[tagIndex]
			tagPos = tag.pos
		} else {
			tagPos = textLength
		}

		if (tagPos <= textPos) {
			// output the tag
			if (tag.node) {
				// start tag
				let newNode = tag.node
				currentNode.appendChild(newNode)
				currentNode = newNode
			} else {
				// end tag
				currentNode = currentNode.parentNode
			}
			tagIndex++
		} else {
			// output text
			currentNode.appendChild(document.createTextNode(text.substring(textPos, tagPos)))
			textPos = tagPos
		}
	}

	return result
}

/**
 * Highlights an element containing source code.  Upon completion of this function,
 * the element will have been placed in the "sh_sourceCode" class.
 * @param {Element} element - a DOM <pre> element containing the source code to be highlighted
 * @param {Object} language - a language definition object
 */
function sh_highlightElement(element, language) {
	element.classList.add('sh_sourceCode')

	const originalTags = []
	const inputString = sh_extractTags(element, originalTags)
	const highlightTags = sh_highlightString(inputString, language)
	const tags = sh_mergeTags(originalTags, highlightTags)
	const documentFragment = sh_insertTags(tags, inputString)

	while (element.hasChildNodes()) {
		element.removeChild(element.firstChild)
	}

	element.appendChild(documentFragment)
}

/**
 * Highlights all elements containing source code on the current page. Elements
 * containing source code must be "pre" elements with a "class" attribute of
 * "sh_LANGUAGE", where LANGUAGE is a valid language identifier; e.g., "sh_java"
 * identifies the element as containing "java" language source code.
 */
function sh_highlightDocument() {
	for (const element of document.querySelectorAll('pre')) {
		const classItem = [...element.classList].find((cl) => cl.startsWith('sh_'))

		if (classItem) {
			const language = classItem.substring(3).toLowerCase()

			if (language in sh_languages) {
				sh_highlightElement(element, sh_languages[language])
			} else {
				throw `Found <pre> element with class="${classItem}", but no such language exists`
			}
		}
	}
}
