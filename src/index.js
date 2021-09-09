import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";

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
