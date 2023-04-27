module.exports = function (api) {
  api.cache(true);

  const presets = [ "@babel/preset-env","@babel/preset-react" ];
  const plugins = ["@babel/plugin-transform-arrow-functions","@babel/plugin-proposal-throw-expressions", [
      "@babel/plugin-proposal-record-and-tuple",{
          "importPolyfill": true
      }]
  ];

  return {
    presets,
    plugins
  };
}