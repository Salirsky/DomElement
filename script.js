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

  newElem.style.cssText = `selector: ${this.selector}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize}; position: absolute, display: inline-block;
  cursor: pointer;
  margin: 0;`;

  body.insertBefore(newElem, null);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM готов!");

  newEl();

  //script.js:44 Uncaught TypeError: domElement.addEventListener is not a function
  // at HTMLDocument.<anonymous> (script.js:44:14)
  domElement.addEventListener("keydown", keyControl);
});

const newEl = function () {
  domElement = new DomElement(a, b, c, d, e, f);
  domElement.tabIndex = 0;
};

const keyControl = function (event) {
  if (
    event.code != "ArrowRight" &&
    event.code != "ArrowLeft" &&
    event.code != "ArrowUp" &&
    event.code != "ArrowDown"
  )
    return;

  let rectElem = this.getBoundingClientRect();
  let x = rectElem.x + 10,
    y = rectElem.y + 10;

  if (event.code == "ArrowRight") x += 10;
  if (event.code == "ArrowLeft") x -= 10;
  if (event.code == "ArrowUp") y -= 10;
  if (event.code == "ArrowDown") y += 10;

  this.style.position = "absolute";
  this.style.left = x + "px";
  this.style.top = y + "px";
};



