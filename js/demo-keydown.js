window.addEventListener('keydown', changeBgColor);

function changeBgColor(e) {
  const box = document.querySelector('.box');
  if(e.keyCode != 13) return;
  box.classList.add('active');
}