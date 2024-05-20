/* eslint-disable no-magic-numbers */

import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser }},
  pluginJs.configs.all,
  {
    rules: {
      'func-style': 'off',
      'indent': [ 'error', 2 ],
      'quotes': [ 'error', 'single', {
        'avoidEscape': true
      }],
      'semi': ['error', 'always'],
    }
  }
];