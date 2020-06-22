// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.
for (i = 0; i < 4; i++) {
  let bgColor = `#btn-${i + 1}`;
  document.querySelector(bgColor).style.backgroundColor = "gold";
}

document.addEventListener("click", clickFunction);
function clickFunction(event) {
  switch (event.target.id) {
    case "btn-1":
      if (event.target.style.opacity === "0") {
        event.target.style.opacity = "100";
        break;
      }
      event.target.style.opacity = "0";
      break;
    case "btn-2":
      if (event.target.style.backgroundColor === "red") {
        event.target.style.backgroundColor = "gold";
        break;
      }
      event.target.style.backgroundColor = "red";
      break;
    case "btn-3":
      if (event.target.style.backgroundColor === "lightblue") {
        event.target.style.backgroundColor = "gold";
        break;
      }
      event.target.style.backgroundColor = "lightblue";
      break;
    case "btn-4":
      event.target.classList.toggle("jitters");
      break;
    case "reset":
      document.querySelector("#btn-1").style.opacity = "100";
      document.querySelector("#btn-2").style.backgroundColor = "gold";
      document.querySelector("#btn-3").style.backgroundColor = "gold";
      if (document.querySelector("#btn-4").classList.length > 0) {
        document.querySelector("#btn-4").classList.remove("jitters");
      }
      break;
  }
}
