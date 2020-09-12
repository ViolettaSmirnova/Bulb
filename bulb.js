"use strict";
let bulb = document.querySelector(".bulb");
let input = document.querySelector("input");

  document.querySelector(".turnOn").onclick = function fun1() {
  bulb.setAttribute("src", "bulb2.png");
  fun1();
};
  document.querySelector(".turnOff").onclick = function fun2() {
  bulb.setAttribute("src", "bulb1.png");
  input.removeAttribute("style");
  fun2();
};
