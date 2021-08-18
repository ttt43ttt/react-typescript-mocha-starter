module.exports = (api) => {
  api.cache(false);

  const presets = ["react-app"];
  const plugins = ["inline-react-svg"];

  return {
    presets,
    plugins,
  };
};
