let display = document.querySelector('.display');
let keys = document.querySelectorAll('.num');

keys.forEach((key) => {
  key.addEventListener("click", () => {
    let value = key.textContent;

    if (value === 'C') {
      display.textContent = '';
    } else if (value === '=') {
      let expression = display.textContent.replaceAll('×', '*');
      display.textContent = eval(expression);
    } else {
      display.textContent += value;
    }
  });
});

