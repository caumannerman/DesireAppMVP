module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  root: true,
  extends: '@react-native-community',
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
  plugins: ['react', 'react-hooks'],
};
