window.addEventListener('keydown', addBgColor);

function addBgColor(e) {
  const box = document.querySelector('.box');
  if(e.keyCode != 13) return;
  box.classList.add('active');
}