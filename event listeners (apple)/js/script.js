const item = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    newItem = document.createElement('li'),
    body = document.querySelector('body'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    answerSection = document.querySelector('#prompt');

menu.insertBefore(item[2], item[1]);
newItem.className = "menu-item";
menu.appendChild(newItem);
newItem.innerText = "Пятый пункт";

body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

title.innerText = "Мы продаем только подлинную технику Apple";

adv.remove();

let q = prompt('Как вы относитесь к технике Apple?', "");
answerSection.textContent = q;








