const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { withZephyr } = require("zephyr-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = withZephyr()({
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 4000,
    static: path.join(__dirname, "dist"),
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app_shell",
      remotes: {
        'app1_react': "app1_react@http://localhost:4001/remoteEntry.js",
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});