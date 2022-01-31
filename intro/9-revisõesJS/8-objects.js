const obj = {
    formacao: 'javascript Next',
    formador: 'Joao',
    empresa: 'etic',
    ano: 2022,
    xpto: function () {
        console.log('sou o metodo xpto...')
    }
};

/* console.log(obj); */

/* console.log('----------------ENTRIES-------');
console.log(Object.entries(obj));

('----------------KEYS-------');
console.log(Object.keys(obj));

('----------------VALUES-------');
console.log(Object.values(obj)); */

// criação de objectos

/* console.log('.........CREATE.................');
const obj2 = Object.create(obj);
console.log(obj2);
console.log(obj2.formador);
obj2.pais = 'Poetugal';

obj.formador = 'Manuel';
console.log(obj2.formador);

obj2.formador = 'Maria';
console.log(obj2.formador);
console.log(obj.formador);
console.log(obj2); */

console.log('.........CREATE.................');
// object assign - clonar objectos

const newObj = Object.assign(obj);
const newObj2 = Object.assign({}, obj, {
    pais: 'Portugal',
    formador: 'Maria'
});
//console.log(newObj);
//obj.formador = 'Manuel';
obj.formador = 'Jose';
console.log(newObj2);
console.log(obj);

const cloneObj = {
    ...obj,
    pais: 'Espanha'
};
console.log(cloneObj);

obj.formador = 'Zeferino'
console.log(cloneObj);
console.log(obj);

obj.formador = 'Joaquina';
console.log(cloneObj);
console.log(obj);