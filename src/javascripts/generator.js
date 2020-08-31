module.exports = class Generator {
  generate (ast) {
    if (!ast) return

    let result = ast
    result = this.inlineFunctions(result)
    result = this.inlineRegexes(result)
    result = this.wrapUMD(result)
    return result
  }

  // private

  inlineFunctions (result) {
    const matches = result.matchAll(/"code":"((?:\\"|[^"])*?)"/g)
    const snippets = []
    for (const match of matches) {
      snippets.push(match[1].replace(/\\"/g, '"'))
    }
    const parts = result.split(/"code":"(?:\\"|[^"])*?"/)
    const stack = []
    parts.forEach((part) => {
      stack.push(part)
      if (snippets.length > 0) stack.push(`"code":function($1,$2,$,$ctx){${snippets.shift()}}`)
    })
    return stack.join('')
  }

  inlineRegexes (result) {
    const matches = result.matchAll(/{"type":"TOKEN_REGEX_MATCHER","regex":"((?:\\"|[^"])*?)"}/g)
    const snippets = []
    for (const match of matches) {
      snippets.push(this.escapeStringForRegex(match[1]))
    }
    const parts = result.split(/{"type":"TOKEN_REGEX_MATCHER","regex":"(?:\\"|[^"])*?"}/)
    const stack = []
    parts.forEach((part) => {
      stack.push(part)
      if (snippets.length > 0) stack.push(`{"type":"TOKEN_REGEX_MATCHER","regex":/${snippets.shift()}/}`)
    })
    return stack.join('')
  }

  escapeStringForRegex (str) {
    return str.replace(/\//g, '\\/').replace(/\\\\/g, '\\')
  }

  wrapUMD (code) {
    return `(function (root, factory) {
  if (typeof module === 'object') {
    module.exports = factory();
  } else {
    root.grammar = factory();
  }
}(this, function () { return ${code} }));`
  }
}
