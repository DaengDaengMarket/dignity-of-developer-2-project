// .eslintrc.js
module.exports = {
  // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
  root: true,
  // 추가적인 규칙들을 적용
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier',
    'plugin:prettier/recommended',
  ],
    parserOptions: {
    parser: "babel-eslint",
  },
  // 코드 정리 플러그인 추가
  plugins: ['prettier'],
  // 사용자 편의 규칙 추가
  rules: {
    'prettier/prettier': [
      'error',
      // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
      // https://prettier.io/docs/en/options.html
      {
        singleQuote: true,
        semi: true,
        useTabs: true,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};

// module.exports = {
//   // 코드 검사 범위 설정
//   env: {
//     browser: true,
//     node: true,
//   },
//   // 코드 검사 규칙
//   extends: [
//     // vue
//     // plugin vue에서 제공하는 기본적인 vue.js 코드 검사
//     // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
//     // 'plugin:vue/vue3-essential', // Lv1
//     // "plugin:vue/vue3-strongly-recommended", //Lv2
//     // 'plugin:vue/vue3-recommended', // Lv3
//     // js
// 		'plugin:vue/recommended',
//     // https://eslint.org/docs/rules/
//      // eslint에서 권장하는 코드 규칙으로 js 검사
//     // 'plugin:vue/essential',
//     // 'plugin:prettier/recommended',
//   ],
//   // 코드를 분석할 수 있는 분석기
//   parserOptions: {
//     parser: "babel-eslint",
//   },
//   // 코드 규칙 작성
//   // extends에서 작성한 eslint를 그대로 사용한다면 생략 가능
//   rules: {
//     // "vue/html-closing-bracket-newline": [
//     //   "error",
//     //   {
//     //     singleline: "never",
//     //     multiline: "never",
//     //   },
//     // ],
//     "vue/html-self-closing": [
//       "error",
//       {
//         html: {
//           void: "always",
//           normal: "never",
//           component: "always",
//         },
//         svg: "always",
//         math: "always",
//       },
//     ],
//   },
// };
