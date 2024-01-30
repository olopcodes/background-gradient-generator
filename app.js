const color1InputEl = document.querySelector("#color-1");
const color2InputEl = document.querySelector("#color-2");
const btnCopyEl = document.querySelector(".btn-copy");
const backgroundGradientBoxEl = document.querySelector(".gradient-box");
const body = document.querySelector("body");
const gradientTextareaEl = document.querySelector(".gradient-rule");
const directionalButtonsEl = document.querySelector('.btn-directions');

printColor();

color1InputEl.addEventListener("input", inputHandler);

color2InputEl.addEventListener("input", inputHandler);

directionalButtonsEl.addEventListener('click', directionHandler);

function directionHandler (e) {
  const btnId = e.target.closest('button').id;

  if(btnId=== 'btn-up') {
    printColor('up');
    setBackgroundGradient('top');
  } else if (btnId=== 'btn-left') {
    printColor('left');
    setBackgroundGradient('left');
  } else if (btnId=== 'btn-right') {
    printColor('right');
    setBackgroundGradient('right');
  } else if (btnId=== 'btn-down') {
    printColor('down');
    setBackgroundGradient('bottom');
  }
}

btnCopyEl.addEventListener("click", () => {
  gradientTextareaEl.select();
  gradientTextareaEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(gradientTextareaEl.value);
});

function printColor(dir = "right") {
  gradientTextareaEl.value = `background-image: linear-gradient(to ${dir}, ${color1InputEl.value} , ${color2InputEl.value});`;
}

function setBackgroundGradient(dir = "right") {
  body.style.backgroundImage = `linear-gradient(to ${dir}, ${color1InputEl.value} , ${color2InputEl.value} )`;
}

function inputHandler() {
  setBackgroundGradient();
  printColor();
}
