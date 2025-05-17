// .eslintrc.js
module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',// .eslintrc.js
        module.exports = {
          extends: [
            "airbnb",
            "plugin:react/recommended",
            "plugin:jsx-a11y/recommended",
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:react-hooks/recommended"
          ],
          parserOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            ecmaFeatures: {
              jsx: true
            }
          },
          settings: {
            react: {
              version: "detect"
            }
          },
          rules: {
            "react/react-in-jsx-scope": "off",
            "import/no-unresolved": "off",
            "import/extensions": [
              "error",
              "ignorePackages",
              {
                js: "never",
                jsx: "never"
              }
            ],
            "quotes": ["error", "single"], // 문자열은 항상 작은따옴표 사용
            "jsx-quotes": ["error", "prefer-double"], // JSX에서는 큰따옴표 사용
            "prettier/prettier": ["error"]
          }
        }

      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // JSX를 .js 파일에서도 허용
    quotes: ['error', 'single'], // 문자열은 항상 작은따옴표 사용
  },
};
