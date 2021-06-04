const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { optimize } = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        use: "file-loader",
      },
    ],
  },
  optimization: {
    minimize: false,
    concatenateModules: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [new HtmlWebpackPlugin()],
};
