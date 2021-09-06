const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  // core: {
  //   builder: 'webpack5',
  // },
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // config.module.rules[0].use[0].loader = require.resolve('babel-loader')
    // config.module.rules[0].use[0].options.presets = [
    //   require.resolve('@babel/preset-react'),
    //   require.resolve('@babel/preset-env'),
    // ]
     // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
     config.resolve.mainFields = ['browser', 'module', 'main']
    // config.module.rules.push({
    //   test: /\.(js|jsx)$/,
    // })
    // config.resolve.extensions.push('.js', '.jsx')
    config.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      path.resolve(__dirname, '..', 'node_modules'),
    ];
    config.node = { fs: 'empty' };
    return config;
  },
};
