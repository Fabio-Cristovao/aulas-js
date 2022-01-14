let livro1 = {
    title: "Angular com typescript",
    author: "yakov fain",
    alreadyRead: true,
    imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/angular.jpg"
}

let livro2 = {
    title: "blockchain com js",
    author: "someone else",
    alreadyRead: false,
    imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/blockchain.jpg"
}

//let livros = [livro1, livro2];
//console.log(livros)

let livros = [{
        title: "Angular com typescript",
        author: "yakov fain",
        alreadyRead: true,
        imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/angular.jpg"
    },
    {
        title: "blockchain com js",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/blockchain.jpg"
    },
    {
        title: "deep learning com js",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/deeplearning.jpg"
    },
    {
        title: "joy of javascript",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/joj.jpg"
    },
    {
        title: "react hooks in action",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/blockchain.jpg"
    },
    {
        title: "blockchain com js",
        author: "someone else",
        alreadyRead: false,
        imageUrl: "/intro/functions/DOM/livros-exercicioDOM2/livros/reacthooks.jpg"
    }
];

console.log(livros)

// iterar com for of
for (const livro of livros) {
    console.log(`${livro.title} ${livro.author}`);

}

// iterar com metodos de array

/*livros.map(livro => console.log(`${livro.title} ${livro.author}`));*/

let grid = document.querySelector("section.grid");

livros.map( livro => {
    grid.innerHTML +=` 
    
    <article>
        <h1>${livro.title}</h1>
        <h2>${livro.author}</h2>
        <img src="${livro.imageUrl}"/>
        <p>Already Read: ${livro.alreadyRead ? '✓' : "💩" }</p>
    </article>    
    
    `;
})

let teste = false;

