let lista = document.querySelector('ul');

let items = lista.querySelectorAll('li');

for (const item of items) {
    item.addEventListener('click', eliminarItem, false);

}

function eliminarItem(e) {

    e.preventDefault();

    let itemAEliminar = e.target.parentElement;
    lista.removeChild(itemAEliminar);

    console.log(itemAEliminar);
}