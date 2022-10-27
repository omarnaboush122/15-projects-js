let span = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let buttonClass = e.currentTarget.classList;
    if (buttonClass.contains("decrease")) {
      span.innerHTML--;
    } else if (buttonClass.contains("increase")) {
      span.innerHTML++;
    } else {
      span.innerHTML = 0;
    }
    if (span.innerHTML > 0) {
      span.style.color = "green";
    } else if (span.innerHTML < 0) {
      span.style.color = "red";
    } else {
      span.style.color = "#222";
    }
  });
});
