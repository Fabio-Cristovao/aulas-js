let items = document.querySelectorAll('li');

for (const item of items) {
    item.className = 'cool';
}

for (let index = 0; index < items.length; index++) {
    items[index].className = 'complete';
}