let livro1 = {
    title: "Angular com typescript",
    author: "yakov fain",
    alreadyRead: true,
    imageUrl: "/angular.jpg"
}

let livro2 = {
    title: "blockchain com js",
    author: "someone else",
    alreadyRead: false,
    imageUrl: "livros/blockchain.jpg"
}

//let livros = [livro1, livro2];
//console.log(livros)

let livros = [{
        id:0,
        title: "Angular com typescript",
        author: "yakov fain",
        alreadyRead: true,
        imageUrl: "livros/angular.jpg"
    },
    {
        id:1,
        title: "blockchain com js",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "livros/blockchain.jpg"
    },
    {
        id:2,
        title: "deep learning com js",
        author: "someone else",
        alreadyRead: true,
        imageUrl: "livros/deeplearning.jpg"
    },
    {
        id:3,
        title: "joy of javascript",
        author: "someone else",
        alreadyRead: true,
        imageUrl: "livros/joj.jpg"
    },
    {
        id:4,
        title: "react hooks in action",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "livros/blockchain.jpg"
    },
    {
        id:5,
        title: "blockchain com js",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "livros/reacthooks.jpg"
    }
];

//console.log(livros)

mostrarLivros(livros);

// criar eventos para dar interatividade à paginando

// filtrar os livros, por ja lidos ou não lidos

let readCheckbox    = document.querySelector('#readBooks');
let notReadCheckbox = document.querySelector('#notReadBooks');

readCheckbox.addEventListener   ('change', readBooks, false);
// notReadCheckbox.addEventListener('change', notReadBooks, false)

function readBooks (e) {
    readCheckbox.checked
        e.preventDefault();
        target = e.target.parentElement;
        let livrosJaLidos = livros.filter(livro => livro.alreadyRead === true);
        console.log(livrosJaLidos);
        
    
}
/* 
function notReadBooks (e) {
    e.target = e.target.parentElement;
    e.preventDefault();
    if (notReadCheckbox.checked) {
        let livrosNaoLidos = livros.filter(livro => livro.alreadyRead === false);
        mostrarLivros(livrosNaoLidos);
    } else {
        mostrarLivros(livros);
    }
} */





    









// iterar com metodos de array

/*livros.map(livro => console.log(`${livro.title} ${livro.author}`));*/

let grid = document.querySelector("section.grid");

//mostrarLivros(livros);



//mostrarLivros(livrosJaLidos);



// mostrarLivros(livrosNaoLidos);

function mostrarLivros(arrayLivros) {
    arrayLivros.map(livro => {
        let grid = document.querySelector('.grid')
        grid.innerHTML += ` 
        
        <article>
            <h1>${livro.title}</h1>
            <h2>${livro.author}</h2>
            <img src="${livro.imageUrl}"/>
            <p>Already Read: ${livro.alreadyRead ? '✓' : "💩" }</p>
            <button id=${livro.id}>Delete</button>
        </article>    
        
        `;
    })
}