// acrescentar um novo li à lista

let lista = document.querySelector('ul');

// 1 - criar um novo li

let novoItemFim = document.createElement('li');

let novoItemFimTexto = document.createTextNode('Morangos');

// 2 - acrescentar o texto ao li

novoItemFim.appendChild(novoItemFimTexto);

// 3 - acrescentar o li a ul

lista.appendChild(novoItemFim);

let novoItemInicio = document.createElement('li');
novoItemInicio.textContent = 'Bananas';

lista.insertBefore(novoItemInicio, lista.firstElementChild);







