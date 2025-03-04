module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint/eslint-plugin", "@typescript-eslint", "import"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    //"@typescript-eslint/parser"
    //"plugin:import/errors",
    //"plugin:import/warnings",
    //"plugin:import/typescript"
  ],

  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/comma-dangle": "off",
    "comma-dangle": "off",
    "quotes": [2, "double"]

  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    },
    // This part is required to work with eslint, the rest is already setup to use import
    "import/resolver": {
      "typescript": {}
    }
  },


};
