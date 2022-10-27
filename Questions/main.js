const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".question-btn");
  button.addEventListener("click", () => {
    questions.forEach((qa) => {
      if (qa !== question) {
        qa.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
