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

  // elem.style.left = x + "px";
  // elem.style.top = y + "px";

  x = x + "px";
  y = y + "px";

  //Это не работает =/
  elem.style.cssText = `left: ${x};
  top: ${y};  `;

  console.log(elem);
  console.log(rectElem);
  console.log(x);
  console.log(y);

  console.log(DomElement);
};

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

  rectElem = newElem.getBoundingClientRect();
  this.x = rectElem.x + 10;
  this.y = rectElem.y + 10;

  newElem.style.cssText = `selector: ${this.selector}; 
    height: ${this.height}; 
    width: ${this.width}; 
    background: ${this.bg}; 
    fontSize: ${this.fontSize}; 
    position: absolute; 
    display: inline-block;
    cursor: pointer;
    margin: 0px;
    left: ${this.x} + "px";
    top: ${this.y} + "px";
    `;
  // left = ${x} + "px";
  // top = ${y} + "px";

  console.log(rectElem);
  console.log(x);
  console.log(y);

  body.insertBefore(newElem, null);

  document.addEventListener("keydown", foo);
}

elem = new DomElement(a, b, c, d, e, f);
elem.tabIndex = 0;
elem.style;
console.log(elem.__proto__);
console.log(elem.style);
