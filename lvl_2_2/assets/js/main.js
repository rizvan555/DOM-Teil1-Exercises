let board = document.querySelector("#board");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
const keySpan = document.querySelector(".button-box1 span");
const keyCodeSpan = document.querySelector(".button-box2 span");
const codeSpan = document.querySelector(".button-box3 span");

button1.addEventListener("click", (event) => {
  board.innerHTML = keySpan.textContent;
});

button2.addEventListener("click", (event) => {
  board.innerHTML = keyCodeSpan.textContent;
});

button3.addEventListener("click", (event) => {
  board.innerHTML = codeSpan.textContent;
});