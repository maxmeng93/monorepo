
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'babel-eslint',
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  }
}
