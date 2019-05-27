var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: {
    main: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve("./index.html") }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
