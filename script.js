"use strict";

const support = document.querySelector(".support");

let a = ".block";
let b = "100px";
let c = "100px";
let d = "#FF8300";
let e = "28px";
let f = "Новый элемент";

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

  newElem.style.cssText = `selector: ${this.selector}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize}`;

  support.insertAdjacentElement("afterend", newElem);
}

let domElement = new DomElement(a, b, c, d, e, f);

console.log(domElement);
