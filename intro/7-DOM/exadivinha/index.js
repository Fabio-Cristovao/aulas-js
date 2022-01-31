// gera um numero aleatorio entre 0 e 1 //

// gera um numero aleatorio entre 0 e 20 //

// gera um numero aleatorio inteiro entre 0 e 20  //

// Math.random() - cria um numero entre 0 e 1; //

//Math.round() - metodo que arredonda o numero às unidades; //

// multiplicamos por 20 para gerar o numero inteiro entre 0 e 20;

// como criar um numero aleatorio entre 30 e 70? multiplicar pelo intervalo dos valores, neste caso 40
// no fim basta somar 0 + 30 para o inicio random ser sempre a partir de 30, e 0 + 70 
// formula: Math.round(Math.random() * (vf - vi) + vi) 



// resultado = `Numero ${numAl}`;

// global variables declaration

let userNum = document.querySelector('#input');
let userNumCheck = document.querySelector('#submit')
let answer = document.querySelector('.answer');
let result = document.getElementById('result');
let playAgainBtn = document.querySelector('#playAgain');
console.log(playAgain)

// eventos

userNumCheck.addEventListener('click', numberCheck, false);

console.log(userNumCheck.id);

// logica do algoritmo

let numAl = randomNum(20, 0);
console.log(numAl);

let numTentativas = 1;

let tries = [];

userNum.classList.add('autofocus');


function numberCheck(userNum) {

    userNum = input.value;



    while (userNum !== numAl) {

        if (userNum < numAl) {

            answer.textContent = 'O número que inseriu é mais baixo do que o número aleatório. Tente introduzir um número maior.';

        } else if (userNum > numAl) {

            answer.textContent = "O seu numero está acima do número aleatório. Por favor, introduza um número menor.";

        } else {

            result.textContent = `Conseguiu acertar no número aleatório, em ${numTentativas} tentativas. As suas hipóteses foram: ${tries}.`

            userNumCheck.className = "hidden"
            playAgainBtn.className = "show";


        }

        numTentativas++;
        tries.push(userNum);

        ;

        break;

    };






}