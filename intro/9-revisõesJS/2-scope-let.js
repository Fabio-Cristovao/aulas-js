/// scope variaveis locais e variaveis globais

let a = 12; // variavel global

function myFunction() {
    console.log('Dentro da função, valor de a: ', a);

    let b = 15; // variavel local

    console.log('Dentro da função, valor de b: ', b);

    {
        let c = 20;
    }

    //console.log('Dentro da função, valor de c: ', c);
}

myFunction();

//console.log('Dentro da função, valor de b: ', b);