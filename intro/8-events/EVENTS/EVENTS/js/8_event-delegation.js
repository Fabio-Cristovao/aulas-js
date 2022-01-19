let list = document.querySelector('ul');

let items = list.querySelectorAll('li');

for (const item of items) {
    item.addEventListener('click', eliminarItem, false);

}

function eliminarItem(e) {

    e.preventDefault();

    let itemAEliminar = e.target.parentElement;
    list.removeChild(itemAEliminar);

    console.log(itemAEliminar);
}