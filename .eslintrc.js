export default {
	env: {
		node: true,
		es2021: true,
	},
	extends: ['prettier', 'prettier/prettier', 'airbnb-base', 'plugin:node/recommended'],
	plugins: ['prettier', 'jest', 'import'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'error',
		'import/extensions': 'off',
		'no-console': 'off',
		'import/order': [
			'error',
			{
				'newlines-between': 'never',
				group: [
					['builtin', 'external'],
					['internal', 'parent', 'sibling', 'index'],
				],
			},
		],
	},
	settings: {
		'import/resolver': {
			javascript: {
				alwaysTryTypes: true,
				project: './jsconfig.json',
			},
		},
	},
};
