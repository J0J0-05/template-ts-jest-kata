// eslint-disable-next-line no-undef
module.exports = {
	roots: ['<rootDir>/src'],
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {tsconfig: './tsconfig.json'}],
	},
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
};
