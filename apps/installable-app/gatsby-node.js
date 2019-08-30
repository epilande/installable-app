const { version } = require("./package.json");

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env": {
          APP_VERSION: JSON.stringify(version),
        },
      }),
    ],
  });
};
