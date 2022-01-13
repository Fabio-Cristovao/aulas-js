// selecionar um elemento

let itemHot = document.querySelector('li#one');

console.log(itemHot);

itemHot.className = 'cool';

let items = document.querySelectorAll('li');

console.log(items);
items[1].className = 'complete';