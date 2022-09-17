module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'prettier/prettier': ['error', {singleQuote: true}],
        'jsx-quotes': [2, 'prefer-single'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
