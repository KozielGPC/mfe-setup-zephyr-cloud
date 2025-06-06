const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { withZephyr } = require("zephyr-webpack-plugin");
const path = require("path");

module.exports = withZephyr()({
  entry: "./src/main.ts",
  mode: "development",
  devServer: {
    port: 4002,
    static: path.join(__dirname, 'dist'),
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".vue"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2_vue",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.vue",
      },
      shared: {
        vue: { singleton: true, eager: true, requiredVersion: "^3.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
  ],
});