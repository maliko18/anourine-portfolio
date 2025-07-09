import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Configuration JavaScript de base
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Configuration React
  pluginReact.configs.flat.recommended,

  // Vos règles personnalisées
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      // Règles React
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off", // Pour React 17+

      // Règles de guillemets
      quotes: [
        "warn",
        "single",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      // Règles générales
      "no-useless-escape": "warn",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "prefer-const": "error",
    },
  },

  // Ignorer certains fichiers
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "dist/**"],
  },
]);
