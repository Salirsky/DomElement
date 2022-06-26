"use strict";

//Получаем элемент из DOM, относительно которого будем добавлять на страницу создаваемый элемент.
const body = document.querySelector("body");

//Входные данные
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

// Объявляем фунцию для создания нового элемента
const newEl = function () {
  elem = new DomElement(a, b, c, d, e, f, x, y);
  elem.tabIndex = 0;
};

// Объявляем функцию для отработки движения элемента по странице
const moveEl = function (event) {
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

  elem.elemNode.style.left = x + "px";
  elem.elemNode.style.top = y + "px";
};

// Объявляем функцию-прототип для создаваемого объекта
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
  // Функции, которые создают объекты, обычно возвращают ссылки на эти объекты (!!!!)
  this.elemNode = body.insertBefore(newElem, null); //return
}
// Когда все DOM-дерево полностью загружено, создаём новый элемент и вызываем функцию движения.
document.addEventListener("DOMContentLoaded", () => {
  newEl();
  document.addEventListener("keydown", moveEl);
});
