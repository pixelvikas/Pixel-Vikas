import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      react: { version: "detect" }, // Automatically detect React version
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // Allow unused React import to prevent warnings in JSX
      "react/react-in-jsx-scope": "off",

      // Adjust unused variable rule to allow React and variables prefixed with _
      "no-unused-vars": ["warn", { varsIgnorePattern: "^(React|_)" }],
      "no-unused-vars": ["warn", { varsIgnorePattern: ".*" }],
      // Allow anchor tags with target="_blank" without rel="noopener noreferrer"
      "react/jsx-no-target-blank": "off",
      "react/no-unescaped-entities": "off",

      // Ensure only components are exported in refresh mode
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
