const _ = require('underscore')
const Generator = require('./javascripts/generator')
const editor = ace.edit('ace-editor')
const inputElement = document.querySelector('.grammar-input')
const output = document.querySelector('.grammar-output')
const vimModeElement = document.querySelector('.vim-mode')

function shouldUseCaching () {
  return document.querySelector('.enable-caching').checked
}

function setOutput (text) {
  output.innerText = text
}

function dangerouslySetOutput (text) {
  output.innerHTML = text
}

function save (grammar, input) {
  const vim = vimModeElement.checked
  sessionStorage.setItem('state', JSON.stringify({ grammar, input, cache: shouldUseCaching(), vim }))
}

function load () {
  return JSON.parse(sessionStorage.getItem('state')) || {}
}

function parse () {
  const grammar = editor.getValue()
  const input = inputElement.value
  save(grammar, input)

  let parser = null
  try {
    parser = new Pasukon(grammar, { cache: shouldUseCaching() })
  } catch (err) {
    setOutput(`Invalid grammar: ${err}`)
    inputElement.disabled = true
    return
  }

  try {
    inputElement.disabled = false
    const result = parser.parse(input)
    dangerouslySetOutput(prettyPrintJson.toHtml(result, { indent: 2 }))
    return result
  } catch (err) {
    setOutput(err)
  }
}

function download (filename, text) {
  var element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

function compile () {
  try {
    const generator = new Generator()
    const parser = new Pasukon(grammar, { cache: shouldUseCaching() })
    const ast = generator.generate(JSON.stringify(parser.parse(editor.getValue())))
    download('grammar.js', ast)
  } catch (err) {
    console.error(err)
  }
}

function initialize () {
  const throttledParse = _.throttle(parse, 500)

  function toggleVimMode () {
    if (vimModeElement.checked) {
      editor.setKeyboardHandler('ace/keyboard/vim')
    } else {
      editor.setKeyboardHandler('')
    }
  }

  editor.setOptions({
    fontSize: '1rem',
    tabSize: 2
  })
  editor.setTheme('ace/theme/sqlserver')
  editor.session.setMode('ace/mode/pasukon')

  const { grammar, input, cache, vim } = load()
  if (grammar) editor.session.setValue(grammar)
  if (input) inputElement.value = input
  document.querySelector('.enable-caching').checked = cache
  vimModeElement.checked = vim
  toggleVimMode()

  editor.session.on('change', throttledParse)
  inputElement.onkeyup = throttledParse
  vimModeElement.onchange = toggleVimMode

  document.querySelector('.btn.compile').onclick = compile

  parse()
}

initialize()
