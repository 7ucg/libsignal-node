'use strict';

const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
        },
        rules: {
            'quotes': 'off',
            'semi': ['error', 'always'],
            'no-console': 'off',
            'no-debugger': 'off',
            'no-unused-vars': ['error', { 'args': 'none' }],
            'no-constant-condition': ['error', { 'checkLoops': false }],
        },
    },
];
