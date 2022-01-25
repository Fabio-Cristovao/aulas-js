/*
1 - esconder o form, e deixar visivel somente o botao NewItem
2 - Ao clicar no botao NewItem mostrar o form e esconder o botao
3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem
4 - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista
5 - apresentar no H2, inserindo dentro de uma tag <span> o numero de items por comprar
*/

/* 1 esconder o form, e deixar visivel so o botao NewItem */

// 2 esconder o botao quando o form esta aberto



function modifyNumber() {

    let allItems = document.querySelectorAll('li');

    let numberElements = document.querySelector('#number');

    let numberLi = allItems.length;

    numberElements.textContent = numberLi;

}

modifyNumber();

let buttonForm = document.querySelector('#showForm');

buttonForm.addEventListener('click', toggleForm, false);

function toggleForm() {

    let form = document.querySelector('#newItemForm')

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }

    let button = document.querySelector('#newItemButton');

    if (form.style.display === 'block') {
        button.style.display = 'none';
    } else {
        button.style.display = 'block'
    }

}

// 3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem

let addItem = document.querySelector('#addButton')

addItem.addEventListener('click', addNewItem, false)

function addNewItem(e) {

    e.target = '#addButton'

    e.preventDefault();

    let list = document.querySelector('ul');

    let newItem = document.createElement('li')
    newItem.textContent = itemDescription.value;

    list.insertBefore(newItem, list.firstElementChild);

    let hideForm = document.querySelector('#newItemForm');
    let hideSubmit = document.querySelector('#addButton');
    let showButton = document.querySelector('#newItemButton');

    toggleForm();

    modifyNumber();

    itemDescription.value = '';

}

/* 4.  - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista */

let list = document.querySelector('ul');
let items = list.querySelectorAll('li');

console.log(list)

//console.log(items)

list.addEventListener('click', removeItemIfHot, false);

function removeItemIfHot(e) {

    e.preventDefault();

    let itemEliminar = e.target;

    if (itemEliminar.classList.contains('complete')) {
        list.removeChild(itemEliminar);

        modifyNumber();

    } else {

        itemEliminar.classList.add('complete');

        list.appendChild(itemEliminar);
    }

}

// 5 - apresentar no H2, inserindo dentro de uma tag <span> o numero de items por comprar

 