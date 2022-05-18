"use strict";

const body = document.querySelector("body");

let a = "#block";
let b = "100px";
let c = "100px";
let d = "#2E16B1";
let e = "28px";
let f = " ";
let elem;
let rectElem;
let newElem;
let x = 0;
let y = 0;
let elemStyle;

const newEl = function () {
  elem = new DomElement(a, b, c, d, e, f, x, y);
  elem.tabIndex = 0;
};
const foo = function (event) {
  if (
    event.code != "ArrowRight" &&
    event.code != "ArrowLeft" &&
    event.code != "ArrowUp" &&
    event.code != "ArrowDown"
  )
    return;

  if (event.code == "ArrowRight") x += 10;
  if (event.code == "ArrowLeft") x -= 10;
  if (event.code == "ArrowUp") y -= 10;
  if (event.code == "ArrowDown") y += 10;

  //   console.log(elem.elemNode.style);
  elem.elemNode.style.left = x + "px";
  elem.elemNode.style.top = y + "px";

  //   console.log(x);
  //   console.log(y);

  //   console.log(elem.elemStyle);
};

function DomElement(selector, height, width, bg, fontSize, text, x, y) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.textContent = text;
  this.x = x;
  this.y = y;

  if (selector.startsWith(".")) {
    newElem = document.createElement("div");
    newElem.classList.add(a);
  }
  if (selector.startsWith("#")) {
    newElem = document.createElement("p");
    newElem.setAttribute("id", a);
  }
  newElem.textContent = text;

  rectElem = newElem.getBoundingClientRect();

  newElem.style.cssText = `selector: ${this.selector}; 
    height: ${this.height}; 
    width: ${this.width}; 
    background: ${this.bg}; 
    font-size: ${this.fontSize}; 
    position: absolute; 
    display: inline-block;
    cursor: pointer;
    margin: 0px;
    left: ${this.x}px;
    top: ${this.y}px;
    `;

  this.elemStyle = newElem.style.cssText;
  //!!!!
  this.elemNode = body.insertBefore(newElem, null); //return
}

document.addEventListener("DOMContentLoaded", () => {
  newEl();

  document.addEventListener("keydown", foo);
});
