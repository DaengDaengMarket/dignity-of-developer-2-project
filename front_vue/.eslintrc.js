module.exports = {
  // 코드 검사 범위 설정
  env: {
    browser: true,
    node: true,
  },
  // 코드 검사 규칙
  extends: [
    // vue
    // plugin vue에서 제공하는 기본적인 vue.js 코드 검사
    // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    // 'plugin:vue/vue3-essential', // Lv1
    "plugin:vue/vue3-strongly-recommended", //Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    // https://eslint.org/docs/rules/
    "eslint:recommended", // eslint에서 권장하는 코드 규칙으로 js 검사
  ],
  // 코드를 분석할 수 있는 분석기
  parserOptions: {
    parser: "babel-eslint",
  },
  // 코드 규칙 작성
  // extends에서 작성한 eslint를 그대로 사용한다면 생략 가능
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
