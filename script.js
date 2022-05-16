"use strict";

const body = document.querySelector("body");

let a = "#block";
let b = "100px";
let c = "100px";
let d = "#2E16B1";
let e = "28px";
let f = " ";
let domElement;

function DomElement(selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.textContent = text;
  let newElem;

  if (selector.startsWith(".")) {
    newElem = document.createElement("div");
    newElem.classList.add(a);
  }
  if (selector.startsWith("#")) {
    newElem = document.createElement("p");
    newElem.setAttribute("id", a);
  }
  newElem.textContent = text;

  newElem.style.cssText = `selector: ${this.selector}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize}; position: absolute`;

  body.insertBefore(newElem, null);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM готов!");

  newEl();
  // keyControl();
});

console.log(domElement);

const newEl = function () {
  domElement = new DomElement(a, b, c, d, e, f);
  domElement.tabIndex = 0;
  console.log(domElement);
};

// const keyControl = function () {
//   domElement.addEventListener("click", function (event) {
//     console.log("event");
//   });
// };

