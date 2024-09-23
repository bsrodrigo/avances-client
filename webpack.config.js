const path = require("path");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/main/index.tsx",
  },
  output: {
    path: path.join(__dirname, "public/js"),
    publicPath: "auto",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: "./public",
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  optimization: {
    minimizer: [],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [new Dotenv(), new CleanWebpackPlugin()],
};
