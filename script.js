//so that the body is saved
const body = document.querySelector('body')

const createSquare = (el) => {
  for (let i = 1; i <= el; i++) {
    // Create Element
    const div = document.createElement("div");
    div.textContent = i; // the index of each square
    div.classList.add('square')//adding square class
    // const body = document.querySelector("body"); 
    body.appendChild(div);
    colors(div)
  }
}

const colors = (sqColor) => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgColors = `rgb(${red},${green},${blue})`;
  console.log(colors);

  sqColor.style.background = rgColors;

}

createSquare(500)

