module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  env: {
    es6: true
  },
  rules: {
    "ecmaFeatures.classes": true,
    "global-require": "off",
    "no-console": "off"
  }
};
