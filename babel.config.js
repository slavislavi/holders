module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: 'src/assets/*',
            components: 'src/components/*',
            constants: 'src/constants/*',
            router: 'src/router/*',
            scenes: 'src/scenes/*',
            services: 'src/services/*',
            store: 'src/store/*',
            styles: 'src/styles/*',
            types: 'src/types/*',
            utils: 'src/utils/*',
          },
        },
      ],
    ],
  };
};
