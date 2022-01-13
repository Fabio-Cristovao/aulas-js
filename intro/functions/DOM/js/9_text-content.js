//  text content

let scriptResults = document.querySelector
('#scriptResults');

let item2 = document.querySelector('#two');

let item2Texto = item2.textContent;
console.log(item2Texto);

item2.textContent = 'bananas';

scriptResults.innerHTML = `

<p>Ola mundo ${item2Texto}</p>

`;
