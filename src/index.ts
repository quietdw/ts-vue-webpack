import Vue from "vue";
import WebpackTest from "./components/WebpackTest.vue";

const element = document.createElement("div");

document.body.appendChild(element);

new Vue({
  name: "WebpacTest",
  el: element,
  render: h => h(WebpackTest)
});
