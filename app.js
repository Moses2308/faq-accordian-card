// when component's button is presssed, reveal dropdown.
// get components, for each component check if button pressed,
//if pressed toggle visibility of answer.

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    const answer = dropdown.querySelector(".dropdown__answer");
    const img = dropdown.querySelector("img");
    const question = dropdown.querySelector(".dropdown__question");
    question.classList.toggle("active");
    answer.classList.toggle("hidden");
    img.classList.toggle("rotated");
  });
});
