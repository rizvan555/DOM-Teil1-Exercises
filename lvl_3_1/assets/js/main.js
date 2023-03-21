const pinkButton = document.querySelector(".pink");
const purpleButton = document.querySelector(".purple");
const orangeButton = document.querySelector(".orange");
const redInput = document.getElementById("rot");
const greenInput = document.getElementById("grun");
const blueInput = document.getElementById("blau");
const demo = document.querySelector("#demo");
let count = 0;

function changeBackground(color) {
  if (color === "pink") {
    document.body.style.backgroundColor = "pink";
  } else if (color === "purple") {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "orange";
  }
}

function changeHandle() {
  const redValue = Number(redInput.value).toString(16);
  const greenValue = Number(greenInput.value).toString(16);
  const blueValue = Number(blueInput.value).toString(16);
  const hexValue = `#${redValue}${greenValue}${blueValue}`;

  document.body.style.backgroundColor = hexValue;
}

pinkButton.addEventListener("click", () => {
  count++;
  changeBackground("pink");
  demo.innerHTML = `Wir haben die Farbe ${count} geändert`;
});

purpleButton.addEventListener("click", () => {
  count++;
  changeBackground("purple");
  demo.innerHTML = `Wir haben die Farbe ${count} geändert`;
});

orangeButton.addEventListener("click", () => {
  count++;
  changeBackground("orange");
  demo.innerHTML = `Wir haben die Farbe ${count} geändert`;
});

redInput.addEventListener("input", () => {
  count++;
  changeHandle();
  demo.innerHTML = `Wir haben die Farbe ${count} geändert`;
});

greenInput.addEventListener("input", () => {
  count++;
  changeHandle();
  demo.innerHTML = `Wir haben die Farbe ${count} geändert`;
});

blueInput.addEventListener("input", () => {
  count++;
  changeHandle();
  demo.innerHTML = `Wir haben die Farbe ${count} geändert`;
});
