

const obj = {
    formacao: 'Javascript Next',
    formador:  'Joao',
    empresa: 'etic',
    ano: 2022,
    xpto: function(){
        console.log('Sou o metodo xpto...');
    }
};
//console.log(obj);

/* console.log('------------ ENTRIES ----------');
console.log(Object.entries(obj));

console.log('------------ KEYS ----------');
console.log(Object.keys(obj));

console.log('------------ VALUES ----------');
console.log(Object.values(obj)); */

////////// criacao de Objectos //////////
console.log('------------ create() ----------');
/* const obj2 = Object.create(obj);
console.log(obj2);
console.log(obj2.formador);
obj2.pais = 'Portugal';
console.log(obj2);


obj.formador = 'Manuel';
console.log(obj2.formador);

obj2.formador = 'Maria';
console.log(obj2.formador);
console.log(obj.formador);
console.log(obj2); */


console.log('------------ assign() ----------');
//Clonar objectos
const newObj = Object.assign(obj);
const newObj2 = Object.assign({} , obj, {pais: 'Portugal'} );

/* console.log(newObj2);
console.log(obj);

obj.formador = 'jose';
console.log(newObj2);
console.log(obj); */

const cloneObj = {...obj, pais: 'Espanha'};
console.log(cloneObj);

obj.formador = 'Zeferino'
console.log(cloneObj);
console.log(obj);

cloneObj.formador = 'Joaquina'
console.log(cloneObj);
console.log(obj);
