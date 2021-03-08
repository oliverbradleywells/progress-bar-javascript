
const colorSelectElm = document.querySelector('#color-select');


const redBar = new ProgressBar(6, 20, 'red');
redBar.mount(colorSelectElm);

const greenBar = new ProgressBar(7, 20, 'green');
greenBar.mount(colorSelectElm);

const blueBar = new ProgressBar(8, 20, 'blue');
blueBar.mount(colorSelectElm);

const btnShow = document.querySelector('.btn-show');
btnShow.addEventListener('click', () => {
  const color = `rgb(${redBar.value * 15},${greenBar.value * 15},${blueBar.value * 15})`;
  btnShow.style.backgroundColor = color;
})