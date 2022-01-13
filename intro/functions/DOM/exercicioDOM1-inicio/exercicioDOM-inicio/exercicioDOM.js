/*
1 - Acrescentar um novo item no inicio e no final da lista
2 - aplicar a class "cool" a todos os itens da lista
3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista
*/

 // 1 -  adicionar um novo li ao inicio da lista

let lista = document.querySelector('ul');

let novoItemInicio = document.createElement('li');

novoItemInicio.textContent = 'Bananas'

lista.insertBefore(novoItemInicio, lista.firstElementChild);

// adicionar um novo li ao fim da lista

let novoItemFim = document.createElement('li');

novoItemFim.textContent = 'Figos';

lista.appendChild(novoItemFim);

// 2 - aplicar a class cool a todos os items da lista

lista = document.querySelectorAll('li');

for ( item of lista ) {
    item.setAttribute('class', 'cool')   
}

// 3 - Acrescentar uma tag "span" dentro do "h2", com o numero de itens da lista

let newTitleSpan = document.querySelector('h2');

let newSpan = document.createElement('span');

newSpan.textContent = 'Olá mundo!';

newTitleSpan.appendChild(newSpan);


























