"use strict";
// 1
document.addEventListener("DOMContentLoaded", () => {
   console.log('все теги прогрузились');
});

// 2
window.addEventListener("load", () => {
   console.log('страница загрузилась');
});

// 3
document.addEventListener('click', (el) => {
   if (el.target.className === 'super__element') {
      console.log(`Класс "super__element" присутсвует в элементе ${el.target.localName}`);
   } else {
      console.log(`Класс "super__element" отсутсвует в элементе ${el.target.localName}`);
   }
});

// 4
document.addEventListener('mouseover', (el) => {
   if (el.target.localName === 'textarea') {
      console.log('Вы навели на textarea.');
   }
});

// 5
const ulElem = document.querySelector('ul');
ulElem.addEventListener('click', (el) => {
   console.log(el.target.innerText);
});
// 6
// Ответ: Это происходит потому что, в 3 задании мы получаем событие по всей странице. А то что текст из 5 задания прописывается раньше чем из 3, обусловленно тем что, при событии нажатии мыши происходит следующий порядок mousedown(нажатее мыши) -> mouseup(отпускание мыши) -> click(событие).

// 7
const liElem = document.querySelectorAll('li');
for (let i = 1; i < liElem.length; i += 2) {
   liElem[i].style.backgroundColor = 'green';
}
