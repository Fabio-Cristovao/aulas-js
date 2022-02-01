// module em es5


var libEs5 = (function () {

    //console.log('teste do modulo es5;')

    var nome = 'joao';

    function dizerOla() {

        return `ola ${nome} bem vindo`;
    }

    return {
        dizerOla, // short hand properties each time key and value are equal we can just write 
        nome,

    }

})();