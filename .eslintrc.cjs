module.exports = {
    root: true,
    extends: ['@kochurko/eslint-config', '@kochurko/eslint-config/prettier'],
    parserOptions: {
        project: './tsconfig.json',
    },
};
