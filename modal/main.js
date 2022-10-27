const openButton = document.querySelector(".modal-btn");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

openButton.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
