import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            prettier: pluginPrettier,
        },
        rules: {
            ...pluginPrettier.configs.recommended.rules,
            semi: ['error', 'always'],
            'prefer-const': 'error',
            'prettier/prettier': 'error',
            'no-undef': 'off',
            'no-param-reassign': 'off',
            'arrow-body-style': 'off',
            'no-shadow': 'off',
            'no-restricted-syntax': ['off', 'ForOfStatement'],
            'no-unused-vars': 'off',
        },
    },
    configPrettier,
]
