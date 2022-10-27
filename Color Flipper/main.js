const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const span = document.querySelector(".color");

btn.addEventListener("click", randomColor);

function randomColor() {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  span.innerHTML = document.body.style.backgroundColor;
}
