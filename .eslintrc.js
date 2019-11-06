module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": [2, 2, {"SwitchCase": 1}]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["html", "vue"]
};
