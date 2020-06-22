// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

function click(event) {
  let whichButton = `${event.target.id}`;
  switch (whichButton) {
    case "btn-1":
      event.target.style.opacity = 0;
      break;
    case "btn-2":
      event.target.style.backgroundColor = "red";
      break;
    case "btn-3":
      event.target.style.backgroundColor = "lightblue";
      break;
    case "btn-4":
      event.target.classList.add("jitters");
      break;
  }
}

document.addEventListener("click", click);
