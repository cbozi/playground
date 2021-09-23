/* eslint-disable @typescript-eslint/no-var-requires */
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const DefinePlugin = require("webpack").DefinePlugin;

module.exports = {
  entry: {
    app: "./src/main.ts",
  },
  mode: "production",
  context: "/Users/yuanjiebj/github/playground/packages/source-map-test",
  devtool: "source-map",
  output: {
    path: "/Users/yuanjiebj/github/playground/packages/source-map-test/dist",
    filename: "js/[name].[contenthash:8].js",
    publicPath: "/",
    chunkFilename: "js/[name].[contenthash:8].js",
  },
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.ts$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png)$/, use: "url-loader" },
    ],
  },
  resolve: {
    alias: {
      "@": "/Users/yuanjiebj/github/playground/packages/source-map-test/src",
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: [
      ".tsx",
      ".ts",
      ".mjs",
      ".js",
      ".jsx",
      ".vue",
      ".json",
      ".wasm",
    ],
    modules: [
      "node_modules",
      "/Users/yuanjiebj/github/playground/packages/source-map-test/node_modules",
      "/Users/yuanjiebj/github/playground/node_modules/@vue/cli-service/node_modules",
    ],
  },
  optimization: {
    // minimize: false
    // minimizer: [new TerserPlugin({ sourceMap: true })],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
    new DefinePlugin({
      "process.env.NODE_ENV": '"production"',
      BASE_URL: '"/"',
    }),
  ],
};
