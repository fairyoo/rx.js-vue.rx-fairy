// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //
    //fairy自定义
    "semi": [1, "always"],//语句强制分号结尾   //如0代码错误不提示、1代表警告提醒但不影响现有编译、2error会抛出错误。
    "no-extra-semi": 1,//多余的分号    
    "eqeqeq": [0, "smart"],//在进行比较时，必须使用全等=== 和完全不等!==
  }
}
