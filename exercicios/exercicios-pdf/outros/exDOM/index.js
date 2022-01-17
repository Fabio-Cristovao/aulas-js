// create an array of objects with some mountains information

let mountains = [{
        name: "Mount Everest",
        height: "8848",
        location: "Nepal, China",

    }, {
        name: "Ktwo",
        height: "8611",
        location: "Pakistan, China"
    }, {
        name: "Kangchenjunga",
        height: "8586",
        location: "Nepal, China"
    }, {
        name: "Lhotse",
        height: "8516",
        location: "Nepal, China"
    }, {
        name: "Makalu",
        height: "8485",
        location: "Nepal, China"
    },
    {
        name: "Cho Oyo",
        height: "8188",
        location: "Nepal, China"
    }
];

// criar os headings da tabela

let mountainsTable = document.createElement("table");
let body = document.querySelector("body");
body.appendChild(mountainsTable);
mountainsTable.setAttribute("id", "mountains");
let table = document.querySelector("#mountains");
let head = document.createElement("tr");
table.appendChild(head);
let heads = document.querySelector("tr");
let mountainName = document.createElement("th");
heads.appendChild(mountainName);
mountainName.textContent = "Name";
let mountainHeight = document.createElement("th");
heads.appendChild(mountainHeight);
mountainHeight.textContent = "Height (m)";
let mountainLocation = document.createElement("th");
heads.appendChild(mountainLocation);
mountainLocation.textContent = "Location";

// iterar por cada item da array, e devolver um tr com todos os atributos dessa array

// selecionar a tabela

let mountainsInfo = document.querySelector("#mountains");

// iterar por cada itenm da array e devolver todos os atributos correspondentes

for (const mountain of mountains) {

    mountainsInfo.innerHTML += `
    
    <td>${mountain.name}</td>
    <td>${mountain.height}</td>
    <td>${mountain.location}</td>
    
    `

};

let cels = document.querySelector("table");

//for (let cel of cels) {
if (isNaN(cels)) {
    cels.setAttribute("style", "text-align: right");
} else {
    cels.setAttribute("style", "center");
}
//}

console.log(cels);

/* cels.setAttribute("style", "text-align: center")*/