let item1 = document.querySelector('#one');

item1.setAttribute('class', 'cool');

console.log(item1.getAttribute('class'));

if (item1.hasAttribute('class')) {
    item1.removeAttribute('class')
}


