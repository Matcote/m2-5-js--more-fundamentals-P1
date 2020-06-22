// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)
for (i = 0; i < 4; i++) {
  let bgColor = `btn-${i + 1}`;
  document.querySelector(`#${bgColor}`).style.backgroundColor = "gold";
}

document.addEventListener("click", click);
function click(event) {
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
  }
}
