function myFunction() {
  let items = document.getElementsByClassName("example");

  for (let i = 0; i < items.length; i++) {
    if (items[i].style.backgroundColor === "") {
      items[i].style.backgroundColor = "black";
      if (items[i].style.backgroundColor === "black") {
        items[i].style.color = "white";
      }
    } else {
      items[i].style.backgroundColor = "";
      if (items[i].style.backgroundColor !== "black") {
        items[i].style.color = "";
      }
    }
  }
}
