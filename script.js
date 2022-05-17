"use strict";

const body = document.querySelector("body");

let a = "#block";
let b = "100px";
let c = "100px";
let d = "#2E16B1";
let e = "28px";
let f = " ";
let newElem;
let rectElem;
let x;
let y;
let elem;

function DomElement(selector, height, width, bg, fontSize, text, x, y) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.textContent = text;

  if (selector.startsWith(".")) {
    newElem = document.createElement("div");
    newElem.classList.add(a);
  }
  if (selector.startsWith("#")) {
    newElem = document.createElement("p");
    newElem.setAttribute("id", a);
  }
  newElem.textContent = text;

  newElem.style.cssText = `selector: ${this.selector}; 
  height: ${this.height}; 
  width: ${this.width}; 
  background: ${this.bg}; 
  fontSize: ${this.fontSize}; 
  position: absolute; 
  display: inline-block;
  cursor: pointer;
  margin: 0px;

  `;
  //   left = ${x} + "px";
  //   top = ${y} + "px";
  rectElem = newElem.getBoundingClientRect();
  this.x = rectElem.x + 10;
  this.y = rectElem.y + 10;

  console.log(rectElem);
  console.log(x);
  console.log(y);

  body.insertBefore(newElem, null);

  document.addEventListener("keydown", foo);
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM готов!");

  const elem = new DomElement(a, b, c, d, e, f);
  elem.tabIndex = 0;

  console.log(elem);

  //   document.addEventListener("keydown", foo);
});

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

  //   keyControl(elem);

  elem.style.left = x + "px";
  elem.style.top = y + "px";

  //   console.log(event);
  console.log(elem);
  console.log(rectElem);
  console.log(x);
  console.log(y);
};

// const keyControl = function (el) {
//   el.style.left = x + "px";
//   el.style.top = y + "px";
// };

