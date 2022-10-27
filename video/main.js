const videoContainer = document.querySelector(".video-container");
const button = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

button.addEventListener("click", () => {
  if (button.classList.contains("slide")) {
    button.classList.remove("slide");
    videoContainer.play();
  } else {
    button.classList.add("slide");
    videoContainer.pause();
  }
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
