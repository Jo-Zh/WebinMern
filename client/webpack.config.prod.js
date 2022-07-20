// here tells you where to start
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "production"; //define node environment
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");
const { truncate } = require("fs");

module.exports = {
  mode: "producion",
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
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css",
    // }),
    new webpack.DefinePlugin(
      //This global makes sure React is built in prod mode.
      {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.API_URL": JSON.stringify("http://localhost:3001"),
      }
    ),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
      // minify: {
      //   //see https://github.com/kangax/html-minifier#options-quick-reference
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeRedundantAttributes: true,
      //   useShortDoctype: true,
      //   removeEmptyAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   keepClosingSlash: true,
      //   minifyCSS: true,
      //   minifyJS: true,
      //   minifyURLs: true,
      // },
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
