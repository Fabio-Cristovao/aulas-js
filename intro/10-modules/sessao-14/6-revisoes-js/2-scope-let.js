
///  SCOPE, variaveis locais e variaveis globais
let a = 12; //variavel global

function myFunction(){
    console.log('Dentro da funcao, valor de a: ', a);

    let b = 15;// variavel local

    console.log('Dentro da funcao, valor de b: ', b);

    {
        let c = 20;
    }
    //console.log('Dentro da funcao, valor de c: ', c);

}

myFunction();

//console.log('Fora da funcao, valor de b: ', b);