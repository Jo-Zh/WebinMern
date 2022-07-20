// here tells you where to start
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development"; //define node environment

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    filename: "bundles.js",
    path: path.resolve("/dist"),
  },

  devServer: {
    // stats: "minimal",
    // overlay: true,
    historyApiFallback: true, //This setting allow automatic update html, after saving change
    // disableHostCheck: true,
    // headers: { "Access-Control-Allow-Origin": "*" },
    // https: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /(\.png|jpg|ico)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
