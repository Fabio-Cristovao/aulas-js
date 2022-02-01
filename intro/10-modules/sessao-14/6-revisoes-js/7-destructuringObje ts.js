

let obj = {
    name: 'manuel',
    lastName: 'silva',
    address: {
        city:'lisbon',
        country:'Portugal'
    }
};

console.log('Cidade: ', obj.address.city);


//let {name, apelido, address: {city, country}} = obj;
let {name: xpto, apelido, address: {city, country}} = obj;

console.log(xpto);
console.log(city);

