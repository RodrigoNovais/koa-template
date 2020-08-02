module.exports = {
    'env': {
        'es6': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:security/recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'security',
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'FunctionDeclaration': { 'parameters': 'first' },
                'CallExpression': { 'arguments': 'first' },
                'ObjectExpression': 'first',
            }
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'never',
        ]
    }
}
