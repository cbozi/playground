const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { optimize } = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "https://yfd.fbcontent.cn/",
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        use: "file-loader",
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: ['.js', ".ts"],
  },
  optimization: {
    minimize: false,
    concatenateModules: false,
  },
  plugins: [new HtmlWebpackPlugin()],
};
