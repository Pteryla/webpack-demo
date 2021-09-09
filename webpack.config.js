const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      /*
            此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。
            类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。
            要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理加载这三类文件：
    */
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};

// run npx webpack --config  .\webpack.config.js
// just run npx webpack is ok
