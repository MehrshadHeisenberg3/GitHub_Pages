"use strict";

const btn = document.querySelector(".btn");
const body = document.querySelector("body");

btn.addEventListener("click", function (e) {
  const prevBox = document.querySelector(".box");

  if (prevBox) {
    prevBox.remove();
  }

  const html = `
    <div class='box'>JS_Challenges</div>
  `;

  body.insertAdjacentHTML("afterbegin", html);
  const box = document.querySelector(".box");

  if (!prevBox) {
    setTimeout(() => {
      box.classList.add("shown");
    }, 0);
  } else {
    box.classList.add("shown");
  }

  setTimeout(() => {
    box.classList.remove("shown");
    setTimeout(() => {
      box.remove();
    }, 300);
  }, 1000);
});
