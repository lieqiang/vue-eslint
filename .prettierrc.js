module.exports = {
  printWidth: 80,                    //（默认值）单行代码超出 80 个字符自动换行
  tabWidth: 2,                       //（默认值）一个 tab 键缩进相当于 2 个空格
  // useTabs: true,                     // 行缩进使用 tab 键代替空格
  semi: false,                       //（默认值）语句的末尾加上分号
  singleQuote: true,                 // 使用单引号
  quoteProps: 'as-needed',           //（默认值）仅仅当必须的时候才会加上双引号
  jsxSingleQuote: true,              // 在 JSX 中使用单引号
  trailingComma: 'all',              // 不用在多行的逗号分隔的句法结构的最后一行的末尾加上逗号
  bracketSpacing: true,              //（默认值）在括号和对象的文字之间加上一个空格
  jsxBracketSameLine: true,          // 把 > 符号放在多行的 JSX 元素的最后一行
  arrowParens: 'avoid',              // 当箭头函数中只有一个参数的时候可以忽略括弧
  vueIndentScriptAndStyle: false,    //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
  embeddedLanguageFormatting: 'off', // 不允许格式化内嵌的代码块，比如 markdown  文件里的代码块
};
// module.exports = {
//   tabWidth: 2,
//   useTabs: false,
//   printWidth: 80, // 一行最大多少字符
//   semi: true,
//   singleQuote: true,
//   trailingComma: 'none',
//   bracketSpacing: true,
//   jsxBracketSameLine: false,
//   arrowParens: 'avoid',
//   requirePragma: false,
//   proseWrap: 'preserve'
// }
// {
//   "printWidth": 120, // 一行最大多少字符
//   "tabWidth": 2, // tab占用的字符数
//   "useTabs": false, // 是否使用tab代替空格
//   "semi": true, // 是否每句后都加分号
//   "singleQuote": true, // 是否使用单引号
//   "jsxSingleQuote": false, // jsx是否使用单引号
//   "trailingComma": "none", // 数组尾逗号。
//   "bracketSpacing": false, // {foo: xx}还是{ foo: xx }
//   "jsxBracketSameLine": false, //看官网
//   "arrowParens": "always" //剪头函数参数是否使用（）
// }

// "tabWidth": 2,
// "useTabs": false,
// "endOfLine": "auto",
// "singleQuote": true,
// "semi": true,
// "trailingComma": "none",
// "bracketSpacing": true
