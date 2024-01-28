const color1InputEl = document.querySelector("#color-1");
const color2InputEl = document.querySelector("#color-2");
const btnCopyEl = document.querySelector(".btn-copy");
const backgroundGradientBoxEl = document.querySelector(".gradient-box");
const body = document.querySelector("body");
const gradientTextareaEl = document.querySelector(".gradient-rule");

printColor();

color1InputEl.addEventListener("input", inputHandler);

color2InputEl.addEventListener("input", inputHandler);

btnCopyEl.addEventListener("click", () => {
  gradientTextareaEl.select();
  gradientTextareaEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(gradientTextareaEl.value);
});

function printColor() {
  gradientTextareaEl.value = `background-image: linear-gradient(to right, ${color1InputEl.value} , ${color2InputEl.value});`;
}

function setBackgroundGradient() {
  body.style.backgroundImage = `linear-gradient(to right, ${color1InputEl.value} , ${color2InputEl.value} )`;
}

function inputHandler() {
  setBackgroundGradient();
  printColor();
}
