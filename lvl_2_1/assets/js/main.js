let listContainer = document.querySelector(".listContainer");
let homeButton = document.querySelector("#navHome");
const changeButton = document.querySelector("#navChange");

changeButton.addEventListener("click", () => {
  if (homeButton.style.backgroundColor !== "red") {
    homeButton.style.backgroundColor = "red";
    homeButton.textContent = homeButton.textContent
      .split("")
      .reverse()
      .join("");
  } else {
    if ((homeButton.style.backgroundColor = "")) {
      homeButton.textContent = "";
    }
  }
});
