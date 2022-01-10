// funcao para calcular areas de rectangulos

function calcularArea(altura, largura){
    let area = altura * largura;
    return area;
}

// função para calcular um número aleatório, num intervalo de valores

function randomNum (vf, vi){
    let randomNumGen = Math.round(Math.random() * (vf - vi) + vi);

    return randomNumGen;
}

