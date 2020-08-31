const _ = require('underscore')
const editor = ace.edit('ace-editor')
const input = document.querySelector('.grammar-input')
const output = document.querySelector('.grammar-output')

editor.setOptions({
  'fontSize': '1rem',
  'tabSize': 2
})
editor.setTheme('ace/theme/textmate')
editor.session.setMode('ace/mode/text')

function setOutput (text) {
  output.innerText = text
}

function dangerouslySetOutput(text) {
  output.innerHTML = text
}

const parse = _.throttle(function (grammar, input) {
  if (!input) return

  let parser = null
  try {
    parser = new Pasukon(grammar)
  } catch (err) {
    return setOutput(`Invalid grammar: ${err}`)
  }

  try {
    const result = parser.parse(input)
    dangerouslySetOutput(prettyPrintJson.toHtml(result, { indent: 2 }))
  } catch (err) {
    setOutput(err)
  }
}, 500)

editor.session.on('change', function () {
  parse(editor.getValue(), input.value)
})

input.onkeyup = function () {
  parse(editor.getValue(), input.value)
}
