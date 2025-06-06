const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { withZephyr } = require("zephyr-webpack-plugin");
const path = require("path");

module.exports = withZephyr()({
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4001,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
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
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1_react",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "18.0.0" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "18.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});