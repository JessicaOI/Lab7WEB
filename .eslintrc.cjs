module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prop-types": 0,
    radix: 0,
    "import/extensions": "off",
    "no-shadow": "off",
    "react/button-has-type": 0,
    "react/jsx-filename-extension": [0],
    "no-nested-ternary":0,
    "jsx-a11y/click-events-have-key-events":0,
    "jsx-a11y/no-noninteractive-element-interactions":0,
  },
};
