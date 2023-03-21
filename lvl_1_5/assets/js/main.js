const button = document.getElementById("clickMe");
let anzahl = 0;
button.addEventListener("click", () => {
  anzahl += 1;
  button.innerHTML = `Click me: ${anzahl}`;
});
