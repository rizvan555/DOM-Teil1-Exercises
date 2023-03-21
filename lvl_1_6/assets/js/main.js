const select = document.querySelector("#my-select");
const board = document.querySelector("#option-selected");

select.addEventListener("change", (event) => {
  board.innerHTML = "Sie haben ausgewählt:" + " " + event.target.value;
});
