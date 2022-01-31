// 

let obj = {
    name: 'joao',
    lastName: 'manuel',
    address: {
        city: 'lisbon',
        country: 'Portugal'
    }
};

console.log('cidade', obj.address.city);

let {
    name: nome,
    apelido,
    address: {
        city,
        country
    }
} = obj;

console.log(nome);
console.log(city);