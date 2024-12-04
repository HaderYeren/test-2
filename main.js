
document.getElementById('my-button').addEventListener('click', () => {
  alert('Кнопка натиснута!');
});

const form = document.getElementById('my-form');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim()) {
      output.textContent = `Введений текст: ${userInput}`;
      form.reset();
  } else {
      output.textContent = 'Введіть щось у поле!';
  }
});
