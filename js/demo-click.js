
const btn = document.querySelector('button');
btn.addEventListener('click', addNumber)

function addNumber(e) {
  const number = document.querySelector('.number');
  let getCurrentValue = Number(number.textContent);
  getCurrentValue++;
  number.textContent = getCurrentValue;
}
