function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBox);
destroyButton.addEventListener('click', destroyBox);

function createBox() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBox();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.appendChild(box);
    size += 10;
  }

  input.value = '';
}

function destroyBox() {
  boxContainer.innerHTML = '';
}