const { override, addBabelPlugins } = require('customize-cra');

console.log("config-overrides.js executed");

module.exports = override(
  ...addBabelPlugins('inline-react-svg')
);
