import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";
import Data from "./data/data.xml";
import Notes from "./data/data.csv";

// 自定义 JSON 模块 parser
// https://webpack.docschina.org/configuration/module/#ruleparserparse
import toml from "./data/data.toml";
import yaml from "./data/data.yaml";
import json from "./data/data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function componentHello() {
  const element = document.createElement("div");
  const imageElementContainer = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  imageElementContainer.appendChild(myIcon);

  return element;
}

function componentImage() {
  const imageElementContainer = document.createElement("div");

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image(200, 200);
  myIcon.src = Icon;

  imageElementContainer.appendChild(myIcon);

  return imageElementContainer;
}

document.body.appendChild(componentHello());
document.body.appendChild(componentImage());

console.log(Data);
console.log(Notes);
