"use strict";
var sh_ = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export(src_exports, {
    highlightDocument: () => highlightDocument,
    highlightElement: () => highlightElement
  });
  function sh_isEmailAddress(url) {
    if (/^mailto:/.test(url)) {
      return false;
    }
    return url.indexOf("@") !== -1;
  }
  function sh_setHref(tags, numTags, inputString) {
    const startPos = tags[numTags - 2].pos;
    const endPos = tags[numTags - 1].pos;
    let url = inputString.substring(startPos, endPos);
    if (url.length >= 2 && url.charAt(0) === "<" && url.charAt(url.length - 1) === ">") {
      url = url.substring(1, url.length - 2);
    }
    if (sh_isEmailAddress(url)) {
      url = "mailto:" + url;
    }
    tags[numTags - 2].href = url;
    return tags;
  }
  function sh_highlightString(inputString, language) {
    let tags = [];
    let patternStack = [];
    let currentStyle = null;
    let pos = 0;
    let numTags = 0;
    const output = (str, style) => {
      const length = str.length;
      if (length === 0) {
        return;
      }
      if (!style) {
        const stackLength = patternStack.length;
        if (stackLength !== 0) {
          const pattern = patternStack[stackLength - 1];
          const isEnvironnement = !pattern[3];
          const patternStyle = pattern[1];
          if (isEnvironnement && patternStyle) {
            style = patternStyle;
          }
        }
      }
      if (currentStyle) {
        tags[numTags++] = { pos };
        if (currentStyle === "sh_url") {
          sh_setHref(tags, numTags, inputString);
        }
      }
      if (style) {
        const isUrl = style === "sh_url";
        tags[numTags++] = {
          tagName: isUrl ? "a" : "span",
          style,
          pos
        };
      }
      pos += length;
      currentStyle = style;
    };
    const endOfLinePattern = /\r\n|\r|\n/g;
    endOfLinePattern.lastIndex = 0;
    const inputStringLength = inputString.length;
    while (pos < inputStringLength) {
      const endOfLineMatch = endOfLinePattern.exec(inputString);
      let startOfNextLine = -1;
      let start = pos;
      let end = -1;
      if (endOfLineMatch === null) {
        end = inputStringLength;
        startOfNextLine = inputStringLength;
      } else {
        end = endOfLineMatch.index;
        startOfNextLine = endOfLinePattern.lastIndex;
      }
      const line = inputString.substring(start, end);
      let matchCache = [];
      let match = null;
      let bestMatch = null;
      for (; ; ) {
        const posWithinLine = pos - start;
        const stackLength = patternStack.length;
        const stateIndex = stackLength > 0 ? patternStack[stackLength - 1][2] : 0;
        const state = language[stateIndex];
        const numPatterns = state.length;
        let bestPatternIndex = -1;
        for (let i = 0; i < numPatterns; i++) {
          const posBeforeMatch = posWithinLine <= matchCache[i]?.index;
          if (i < matchCache.length && posBeforeMatch) {
            match = matchCache[i];
          } else {
            const regex = state[i][0];
            regex.lastIndex = posWithinLine;
            match = regex.exec(line);
            matchCache[i] = match;
          }
          if (match && (!bestMatch || match.index < bestMatch?.index)) {
            bestMatch = match;
            bestPatternIndex = i;
            if (match.index === posWithinLine) {
              break;
            }
          }
        }
        if (bestMatch === null) {
          output(line.substring(posWithinLine), null);
          break;
        } else {
          if (bestMatch.index > posWithinLine) {
            output(line.substring(posWithinLine, bestMatch.index), null);
          }
          let pattern = state[bestPatternIndex];
          let newStyle = pattern[1];
          let matchedString;
          if (newStyle instanceof Array) {
            for (let subexpression = 0; subexpression < newStyle.length; subexpression++) {
              matchedString = bestMatch[subexpression + 1];
              output(matchedString, newStyle[subexpression]);
            }
          } else {
            matchedString = bestMatch[0];
            output(matchedString, newStyle);
          }
          switch (pattern[2]) {
            case -1:
              break;
            case -2:
              patternStack.pop();
              break;
            case -3:
              patternStack.length = 0;
              break;
            default:
              patternStack.push(pattern);
              break;
          }
        }
        match = bestMatch = null;
      }
      if (currentStyle) {
        tags[numTags++] = { pos };
        if (currentStyle === "sh_url") {
          tags = sh_setHref(tags, numTags, inputString);
        }
        currentStyle = null;
      }
      pos = startOfNextLine;
    }
    return tags;
  }
  function sh_insertTags(tags, text, container) {
    let textPos = 0;
    let node;
    for (let ii = 0; ii < tags.length; ii++) {
      const { pos, tagName, style, href } = tags[ii];
      const substr = text.substring(textPos, pos);
      const isStartTag = tagName !== void 0;
      if (isStartTag) {
        container.appendChild(document.createTextNode(substr));
        node = document.createElement(tagName);
        node.className = style;
        if (href) {
          node.href = href;
        }
      } else {
        node.textContent = substr;
        container.appendChild(node);
      }
      if (pos > textPos) {
        textPos = pos;
      }
    }
  }
  function highlightElement(language, element) {
    element.classList.add("sh_sourcecode");
    const inputString = element.innerText;
    const highlightTags = sh_highlightString(inputString, language);
    element.innerText = "";
    sh_insertTags(highlightTags, inputString, element);
  }
  function highlightDocument(languages) {
    for (const element of document.querySelectorAll("pre")) {
      const classItem = [...element.classList].find((cl) => cl.startsWith("sh_"));
      if (classItem) {
        const lang = classItem.substring(3);
        if (lang in languages) {
          highlightElement(languages[lang], element);
        } else {
          throw `Found <pre> element with class="${classItem}", but no such language exists`;
        }
      }
    }
  }
  return __toCommonJS(src_exports);
})();
