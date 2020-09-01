module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  globals: {
    ace: 'readonly',
    Pasukon: 'readonly',
    prettyPrintJson: 'readonly',
    grammar: 'readonly'
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
