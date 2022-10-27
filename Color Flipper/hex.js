let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const span = document.querySelector(".color");

btn.addEventListener("click", getRandomColor);

function getRandomColor() {
  let bgColor = "#";
  for (let i = 0; i < 6; i++) {
    bgColor += colors[Math.floor(Math.random() * colors.length)];
  }
  document.body.style.backgroundColor = bgColor;
  span.innerHTML = bgColor;
}
