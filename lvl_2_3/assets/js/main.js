let listContainer = document.querySelectorAll(".listContainer");
let homeButton = document.querySelector("#navHome");
let newsButton = document.querySelector("#navNews");
let contactButton = document.querySelector("#navContact");
const changeButton = document.querySelector("#navChange");

changeButton.addEventListener("click", () => {
  if (
    homeButton.style.backgroundColor === "" ||
    newsButton.style.backgroundColor === "" ||
    contactButton.style.backgroundColor === ""||
    changeButton.style.backgroundColor === ""
  ) {
    homeButton.style.backgroundColor = "#f6c89f";
    newsButton.style.backgroundColor = "#ffe7d1";
    contactButton.style.backgroundColor = "#4b8e8d";
    changeButton.style.backgroundColor = "#396362";
  } else {
    homeButton.style.backgroundColor = "";
    newsButton.style.backgroundColor = "";
    contactButton.style.backgroundColor = "";
    changeButton.style.backgroundColor = "";
  }
});
