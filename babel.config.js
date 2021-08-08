module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@storybook-ui': './src/storybook',
          '@test': './src/test',
        },
      },
    ],
  ],
};
