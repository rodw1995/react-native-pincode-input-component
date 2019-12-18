module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "react-native"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", '.tsx', ".json", ".native.js"]
      }
    },
  },
  "rules": {
    "max-len": ["error", { code: 120 }],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true, "minProperties": 4, consistent: true },
      "ObjectPattern": { "multiline": true, "minProperties": 4, consistent: true },
      "ImportDeclaration": { "multiline": true, consistent: true },
      "ExportDeclaration": { "multiline": true, "minProperties": 4, consistent: true }
    }],
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": ["error", { "custom": "ignore" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-raw-text": "error",
  }
};
