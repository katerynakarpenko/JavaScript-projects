const inputs = document.querySelectorAll(".input");

const inputTL = document.querySelector(".top-left-range"),
      inputTR = document.querySelector(".top-right-range"),
      inputBR = document.querySelector(".bottom-right-range"),
      inputBL = document.querySelector(".bottom-left-range");

const cube = document.querySelector(".cube");
const readyResultsField = document.querySelector(".ready-result");

const buttonGetResult = document.querySelector(".btn-get-result");

function changeRadius(item) {
  const resultField = item.closest(".wrapper__range").querySelector(".result");
  resultField.innerHTML = item.value;

  cube.style.borderRadius = `${inputTL.value}px ${inputTR.value}px ${inputBR.value}px ${inputBL.value}px`;
}

for (let input of inputs) {
  input.addEventListener("input", () => changeRadius(input));
} 

buttonGetResult.addEventListener("click", () => {
  readyResultsField.innerHTML = "border-radius: " + `${inputTL.value}px ${inputTR.value}px ${inputBR.value}px ${inputBL.value}px` + ";";
});