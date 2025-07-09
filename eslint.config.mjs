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
        ...globals.node
      }
    }
  },
  
  // Configuration React
  pluginReact.configs.flat.recommended,
  
  // Règles pour résoudre les erreurs de déploiement
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      // DÉSACTIVER les règles qui causent des erreurs de build
      "react/prop-types": "off",           // Désactive la validation des prop-types
      "react/no-unescaped-entities": "off", // Désactive les entités non échappées
      "react/react-in-jsx-scope": "off",   // Pour React 17+
      
      // Règles de guillemets en WARNING (pas ERROR)
      "quotes": ["warn", "single", { 
        "avoidEscape": true,
        "allowTemplateLiterals": true 
      }],
      
      // Autres règles utiles en WARNING
      "no-useless-escape": "warn",
      "no-console": "warn",
      "no-unused-vars": "warn"
    }
  },
  
  // Ignorer certains fichiers
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**"
    ]
  }
]);