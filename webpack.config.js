const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        /*  模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。
            链会逆序执行。第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。
            最后，webpack 期望链中的最后的 loader 返回 JavaScript。
            应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。如果不遵守此约定，webpack 可能会抛出错误。
        */
      },
    ],
  },
};

// run npx webpack --config  .\webpack.config.js
// just run npx webpack is ok
