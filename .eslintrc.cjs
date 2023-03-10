module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
	rules: {
		'prefer-const': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
		'no-console': 'warn',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
	},
	parserOptions: {
		project: ['./tsconfig.json'], // Specify it only for TypeScript files
		createDefaultProgram: true,
	},
}
