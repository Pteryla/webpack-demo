const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // 清理 /dist 文件夹
    clean: true,
  },
};

// run npx webpack --config  .\webpack.config.js
// just run npx webpack is ok
